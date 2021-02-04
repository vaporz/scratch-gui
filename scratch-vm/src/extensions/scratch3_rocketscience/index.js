const BlockType = require('../../extension-support/block-type');
const ArgumentType = require('../../extension-support/argument-type');
const ScratchService = require('./grpc/scratchservice_pb');
// const {DisengageAutoPilotRequest,SetRCSRequest,SetSASRequest,ThrottleRequest,StageRequest,SetLightsRequest,
//     SetSolarPanelsRequest,SetAntennasRequest} = require('./grpc/scratchservice_pb');
const {ScratchServiceClient} = require('./grpc/scratchservice_grpc_web_pb');
const Observor = require('./grpc/observor_pb');
const APIMessage = require('./grpc/apimessage_pb');

class Scratch3RocketScienceBlocks {
    constructor(runtime) {
        this.client = new ScratchServiceClient('http://192.168.43.145:8100');
        this.runtime = runtime;
    }

    getInfo() {
        return {
            id: 'rocketscience',
            name: '火箭科学',
            blocks: [
                {
                    opcode: 'disengageAutoPilot',
                    blockType: BlockType.COMMAND,
                    text: '关闭自动导航',
                },
                {
                    opcode: 'setRCS',
                    blockType: BlockType.COMMAND,
                    text: 'RCS设置为[STATE]',
                    arguments: {
                        STATE: {
                            type: ArgumentType.BOOLEAN,
                            menu: 'booleanMenu'
                        },
                    }
                },
                {
                    opcode: 'setSAS',
                    blockType: BlockType.COMMAND,
                    text: 'SAS设置为[STATE]',
                    arguments: {
                        STATE: {
                            type: ArgumentType.BOOLEAN,
                            menu: 'booleanMenu'
                        },
                    }
                },
                {
                    opcode: 'throttle',
                    blockType: BlockType.COMMAND,
                    text: '动力输出设置为[THROTTLE]%',
                    arguments: {
                        THROTTLE: {
                            type: ArgumentType.NUMBER,
                        },
                    }
                },
                {
                    opcode: 'stage',
                    blockType: BlockType.COMMAND,
                    text: '激活分级'
                },
                {
                    opcode: 'setLights',
                    blockType: BlockType.COMMAND,
                    text: '照明系统设置为[STATE]',
                    arguments: {
                        STATE: {
                            type: ArgumentType.BOOLEAN,
                            menu: 'booleanMenu'
                        },
                    },
                },
                {
                    opcode: 'setSolarPanels',
                    blockType: BlockType.COMMAND,
                    text: '太阳能帆板设置为[STATE]',
                    arguments: {
                        STATE: {
                            type: ArgumentType.BOOLEAN,
                            menu: 'retractMenu'
                        },
                    },
                },
                {
                    opcode: 'setAntennas',
                    blockType: BlockType.COMMAND,
                    text: '天线设置为[STATE]',
                    arguments: {
                        STATE: {
                            type: ArgumentType.BOOLEAN,
                            menu: 'retractMenu'
                        },
                    },
                },
                {
                    opcode: 'getPeriapsisAltitude',
                    blockType: BlockType.REPORTER,
                    text: '近地点高度',
                },
                {
                    opcode: 'getApoapsisAltitude',
                    blockType: BlockType.REPORTER,
                    text: '远地点高度',
                },
                {
                    opcode: 'getMeanAltitude',
                    blockType: BlockType.REPORTER,
                    text: '海平面高度',
                },
                {
                    opcode: 'getTimeToApoapsis',
                    blockType: BlockType.REPORTER,
                    text: '远地点倒计时',
                },
                {
                    opcode: 'increaseTimeWarpRateBy',
                    blockType: BlockType.COMMAND,
                    text: '时间加速提高[RATE]级',
                    arguments: {
                        RATE: {
                            type: ArgumentType.NUMBER
                        },
                    },
                },
                {
                    opcode: 'decreaseTimeWarpRateBy',
                    blockType: BlockType.COMMAND,
                    text: '时间加速降低[RATE]级',
                    arguments: {
                        RATE: {
                            type: ArgumentType.NUMBER
                        },
                    },
                },
                {
                    opcode: 'stopTimeWarp',
                    blockType: BlockType.COMMAND,
                    text: '停止时间加速',
                },
                {
                    opcode: 'setOrientation',
                    blockType: BlockType.COMMAND,
                    text: '指向设置为[PITCH],[YAW],[ROLL]',
                    arguments: {
                        PITCH: {
                            type: ArgumentType.NUMBER
                        },
                        YAW: {
                            type: ArgumentType.NUMBER
                        },
                        ROLL: {
                            type: ArgumentType.NUMBER
                        },
                    },
                },
                {
                    opcode: 'setHeading',
                    blockType: BlockType.COMMAND,
                    text: '指向设置为[PITCH],[YAW]',
                    arguments: {
                        PITCH: {
                            type: ArgumentType.NUMBER
                        },
                        YAW: {
                            type: ArgumentType.NUMBER
                        },
                    },
                },
                {
                    opcode: 'getCurrentMillisecond',
                    blockType: BlockType.REPORTER,
                    text: '当前时间毫秒数',
                },
                {
                    opcode: 'getEngineCount',
                    blockType: BlockType.REPORTER,
                    text: '发动机总数',
                },
                {
                    opcode: 'getActiveEngineCount',
                    blockType: BlockType.REPORTER,
                    text: '已启动的发动机总数',
                },
                {
                    opcode: 'getCurrentStage',
                    blockType: BlockType.REPORTER,
                    text: '当前分级',
                },
                {
                    opcode: 'isAnyActiveEngineNoFuel',
                    blockType: BlockType.REPORTER,
                    text: '有任意已启动发动机燃料耗尽',
                },
            ],
            menus: {
                booleanMenu: [
                    {
                        text: '启动',
                        value: 'true'
                    },
                    {
                        text: '关闭',
                        value: 'false'
                    }
                ],
                retractMenu: [
                    {
                        text: '展开',
                        value: 'true'
                    },
                    {
                        text: '收起',
                        value: 'false'
                    }
                ]
            }
        }
    }

    isAnyActiveEngineNoFuel() {
        var req = new ScratchService.GetVesselPartsByTypeRequest();
        req.setParttype(APIMessage.Part.PartType.ENGINE);
        if (!this._isAnyActiveEngineNoFuel_value) {
            this._isAnyActiveEngineNoFuel_value = false;
        }
        this.client.getVesselPartsByType(req, {}, (err, resp) => {
            var count = 0;
            for (var i = 0; i < resp.getPartsList().length; i++) {
                if (resp.getPartsList()[i].getEngine().getActive() && !resp.getPartsList()[i].getEngine().getHasfuel()) {
                    count++;
                }
            }
            this._isAnyActiveEngineNoFuel_value = count > 0;
        });
        return this._isAnyActiveEngineNoFuel_value;
    }

    getActiveEngineCount() {
        var req = new ScratchService.GetVesselPartsByTypeRequest();
        req.setParttype(APIMessage.Part.PartType.ENGINE);
        if (this._getActiveEngineCount_value in this) {
            console.log("init _getActiveEngineCount_value");
            this._getActiveEngineCount_value = -999999;
        }
        this.client.getVesselPartsByType(req, {}, (err, resp) => {
            var count = 0;
            console.log("resp.getPartsList().length="+resp.getPartsList().length);
            for (var i = 0; i < resp.getPartsList().length; i++) {
                if (resp.getPartsList()[i].getEngine().getActive()) {
                    count++;
                }
            }
            console.log("count="+count);
            this._getActiveEngineCount_value = count;
        });
        return this._getActiveEngineCount_value;
    }

    getEngineCount() {
        var req = new ScratchService.GetVesselPartsByTypeRequest();
        req.setParttype(APIMessage.Part.PartType.ENGINE);
        if (!this._getEngineCount_value) {
            this._getEngineCount_value = -999999;
        }
        this.client.getVesselPartsByType(req, {}, (err, resp) => {
            this._getEngineCount_value = resp.getPartsList().length;
        });
        return this._getEngineCount_value;
    }

    getCurrentMillisecond() {
        return Date.now();
    }

    setHeading(args) {
        var req = new ScratchService.SetHeadingRequest();
        req.setPitch(parseInt(args.PITCH));
        req.setYaw(parseInt(args.YAW));
        req.setStablefirst(false);
        this.client.setHeading(req, {}, (err, resp) => {
        });
    }

    setOrientation(args) {
        var req = new ScratchService.SetOrientationRequest();
        req.setPitch(parseInt(args.PITCH));
        req.setYaw(parseInt(args.YAW));
        req.setRoll(parseInt(args.ROLL));
        this.client.setOrientation(req, {}, (err, resp) => {
        });
    }

    stopTimeWarp() {
        var req = new ScratchService.StopTimeWarpRequest();
        this.client.stopTimeWarp(req, {}, (err, resp) => {
        });
    }

    decreaseTimeWarpRateBy(args) {
        var req = new ScratchService.DecreaseTimeWarpRateByRequest();
        req.setLevels(parseInt(args.RATE));
        this.client.decreaseTimeWarpRateBy(req, {}, (err, resp) => {
        });
    }

    increaseTimeWarpRateBy(args) {
        var req = new ScratchService.IncreaseTimeWarpRateByRequest();
        req.setLevels(parseInt(args.RATE));
        this.client.increaseTimeWarpRateBy(req, {}, (err, resp) => {
        });
    }

    getTimeToApoapsis() {
        var req = new Observor.SnapshotRequest();
        var orbitReq = new Observor.OrbitSnapshotRequest();
        orbitReq.setItemsList([Observor.OrbitSnapshotRequest.OOrbit.TIMETOAPOAPSIS]);
        req.setOrbit(orbitReq);
        if (!this._getTimeToApoapsis_value) {
            this._getTimeToApoapsis_value = -999999;
        }
        this.client.snapshot(req, {}, (err, resp) => {
            this._getTimeToApoapsis_value = resp.getOrbit().getTimetoapoapsis();
        });
        return this._getTimeToApoapsis_value;
    }

    getMeanAltitude() {
        var req = new Observor.SnapshotRequest();
        var flightReq = new Observor.FlightSnapshotRequest();
        flightReq.setItemsList([Observor.FlightSnapshotRequest.OFlight.MEANALTITUDE]);
        req.setFlight(flightReq);
        if (!this._getMeanAltitude_value) {
            this._getMeanAltitude_value = -999999;
        }
        this.client.snapshot(req, {}, (err, resp) => {
            this._getMeanAltitude_value = resp.getFlight().getMeanaltitude();
        });
        return this._getMeanAltitude_value;
    }

    getApoapsisAltitude() {
        var req = new Observor.SnapshotRequest();
        var orbitReq = new Observor.OrbitSnapshotRequest();
        orbitReq.setItemsList([Observor.OrbitSnapshotRequest.OOrbit.APOAPSISALTITUDE]);
        req.setOrbit(orbitReq);
        if (!this._getApoapsisAltitude_value) {
            this._getApoapsisAltitude_value = -999999;
        }
        this.client.snapshot(req, {}, (err, resp) => {
            this._getApoapsisAltitude_value = resp.getOrbit().getApoapsisaltitude();
        });
        return this._getApoapsisAltitude_value;
    }

    getPeriapsisAltitude() {
        var req = new Observor.SnapshotRequest();
        var orbitReq = new Observor.OrbitSnapshotRequest();
        orbitReq.setItemsList([Observor.OrbitSnapshotRequest.OOrbit.PERIAPSISALTITUDE]);
        req.setOrbit(orbitReq);
        if (!this._getPeriapsisAltitude_value) {
            this._getPeriapsisAltitude_value = -999999;
        }
        this.client.snapshot(req, {}, (err, resp) => {
            this._getPeriapsisAltitude_value = resp.getOrbit().getPeriapsisaltitude();
        });
        return this._getPeriapsisAltitude_value;
    }

    getCurrentStage() {
        var req = new Observor.SnapshotRequest();
        var vesselReq = new Observor.VesselSnapshotRequest();
        vesselReq.setItemsList([Observor.VesselSnapshotRequest.OVessel.STAGE]);
        req.setVessel(vesselReq);
        if (!this._getCurrentStage_value) {
            this._getCurrentStage_value = -999999;
        }
        this.client.snapshot(req, {}, (err, resp) => {
            this._getCurrentStage_value = resp.getVessel().getStage();
        });
        return this._getCurrentStage_value;
    }

    disengageAutoPilot() {
        var req = new ScratchService.DisengageAutoPilotRequest();
        this.client.disengageAutoPilot(req, {}, (err, resp) => {
        });
    }

    setRCS(args) {
        var req = new ScratchService.SetRCSRequest();
        req.setEnabled(args.STATE == 'true' ? true : false);
        this.client.setRCS(req, {}, (err, resp) => {
        });
    }

    setSAS(args) {
        var req = new ScratchService.SetSASRequest();
        req.setEnabled(args.STATE == 'true' ? true : false);
        this.client.setSAS(req, {}, (err, resp) => {
        });
    }

    throttle(args) {
        var req = new ScratchService.ThrottleRequest();
        req.setValue(parseInt(args.THROTTLE, 10) / 100);
        this.client.throttle(req, {}, (err, resp) => {
        });
    }

    stage() {
        this.client.stage(new ScratchService.StageRequest(), {}, (err, resp) => {
        });
    }

    setLights(args) {
        var req = new ScratchService.SetLightsRequest();
        req.setEnabled(args.STATE == 'true' ? true : false);
        this.client.setLights(req, {}, (err, resp) => {
        });
    }

    setSolarPanels(args) {
        var req = new ScratchService.SetSolarPanelsRequest();
        req.setEnabled(args.STATE == 'true' ? true : false);
        this.client.setSolarPanels(req, {}, (err, resp) => {
        });
    }

    setAntennas(args) {
        var req = new ScratchService.SetAntennasRequest();
        req.setEnabled(args.STATE == 'true' ? true : false);
        this.client.setAntennas(req, {}, (err, resp) => {
        });
    }
}

module.exports = Scratch3RocketScienceBlocks;
