const BlockType = require('../../extension-support/block-type');
const ArgumentType = require('../../extension-support/argument-type');
const {ScratchServiceClient} = require('./grpc/scratchservice_pb_service');
const Observor = require('./grpc/observor_pb');
const APIMessage = require('./grpc/apimessage_pb');
require('regenerator-runtime');

class Scratch3RocketScienceBlocks {
    constructor(runtime) {
        this.client = new ScratchServiceClient('http://192.168.31.222:8100');
        this.runtime = runtime;
    }

    getInfo() {
        return {
            id: 'rocketscience',
            name: '火箭科学',
            blocks: [
                {
                    opcode: 'stage',
                    blockType: BlockType.COMMAND,
                    text: '激活分级'
                },
                {
                    opcode: 'releaseLaunchClamps',
                    blockType: BlockType.COMMAND,
                    text: '发射台脱拔',
                },
                {
                    opcode: 'setRCS',
                    blockType: BlockType.COMMAND,
                    text: 'RCS[STATE]',
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
                    text: 'SAS[STATE]',
                    arguments: {
                        STATE: {
                            type: ArgumentType.BOOLEAN,
                            menu: 'booleanMenu'
                        },
                    }
                },
                {
                    opcode: 'setSASMode',
                    blockType: BlockType.COMMAND,
                    text: 'SAS模式设置为[MODE]',
                    arguments: {
                        MODE: {
                            type: ArgumentType.NUMBER,
                            menu: 'sasmodeMenu'
                        },
                    }
                },
                {
                    opcode: 'throttle',
                    blockType: BlockType.COMMAND,
                    text: '动力输出设置为[THROTTLE]%',
                    arguments: {
                        THROTTLE: {
                            type: ArgumentType.NUMBER
                        },
                    }
                },
                {
                    opcode: 'enginesActivate',
                    blockType: BlockType.COMMAND,
                    text: '发动机[STATE]：名称包含[TAG]',
                    arguments: {
                        STATE: {
                            type: ArgumentType.BOOLEAN,
                            menu: 'engineStateMenu'
                        },
                        TAG: {
                            type: ArgumentType.STRING,
                            defaultValue: '[名称]'
                        },
                    },
                },
                {
                    opcode: 'decouplersActivate',
                    blockType: BlockType.COMMAND,
                    text: '分离器激活：名称包含[TAG]',
                    arguments: {
                        TAG: {
                            type: ArgumentType.STRING,
                            defaultValue: '[名称]'
                        },
                    },
                },
                {
                    opcode: 'setOrientation',
                    blockType: BlockType.COMMAND,
                    text: '指向设置为：俯仰[PITCH]偏航[YAW]滚转[ROLL]',
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
                    text: '指向设置为：俯仰[PITCH]偏航[YAW]',
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
                    opcode: 'rcsesActivate',
                    blockType: BlockType.COMMAND,
                    text: 'RCS喷口[STATE]：名称包含[TAG]',
                    arguments: {
                        STATE: {
                            type: ArgumentType.BOOLEAN,
                            menu: 'booleanMenu'
                        },
                        TAG: {
                            type: ArgumentType.STRING,
                            defaultValue: '[名称]'
                        },
                    },
                },
                {
                    opcode: 'fairingsJettison',
                    blockType: BlockType.COMMAND,
                    text: '整流罩分离：名称包含[TAG]',
                    arguments: {
                        TAG: {
                            type: ArgumentType.STRING,
                            defaultValue: '[名称]'
                        },
                    },
                },
                {
                    opcode: 'parachutesDeploy',
                    blockType: BlockType.COMMAND,
                    text: '降落伞激活：名称包含[TAG]',
                    arguments: {
                        TAG: {
                            type: ArgumentType.STRING,
                            defaultValue: '[名称]'
                        },
                    },
                },
                {
                    opcode: 'ablatorsDecouple',
                    blockType: BlockType.COMMAND,
                    text: '隔热罩脱离：名称包含[TAG]',
                    arguments: {
                        TAG: {
                            type: ArgumentType.STRING,
                            defaultValue: '[名称]'
                        },
                    },
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
                    opcode: 'toggleActionGroup',
                    blockType: BlockType.COMMAND,
                    text: '运行第[GROUP]组预设动作',
                    arguments: {
                        GROUP: {
                            type: ArgumentType.NUMBER,
                            menu: 'actiongroupMenu'
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
                    blockType: BlockType.BOOLEAN,
                    text: '有任意已启动发动机燃料耗尽',
                },
                {
                    opcode: 'isAnyActiveEngineNoFuelWithTag',
                    blockType: BlockType.BOOLEAN,
                    text: '有任意已启动发动机燃料耗尽：名称包含[TAG]',
                    arguments: {
                        TAG: {
                            type: ArgumentType.STRING,
                            defaultValue: '[名称]'
                        },
                    },
                },
                {
                    opcode: 'getMissionTime',
                    blockType: BlockType.REPORTER,
                    text: '任务时间',
                },
                {
                    opcode: 'getEccentricity',
                    blockType: BlockType.REPORTER,
                    text: '离心率',
                },
                {
                    opcode: 'getMach',
                    blockType: BlockType.REPORTER,
                    text: '马赫数',
                },
                {
                    opcode: 'getSurfaceAltitude',
                    blockType: BlockType.REPORTER,
                    text: '真实高度',
                },
                {
                    opcode: 'getGForce',
                    blockType: BlockType.REPORTER,
                    text: 'G过载',
                },
                {
                    opcode: 'getSurfaceSpeed',
                    blockType: BlockType.REPORTER,
                    text: '地速',
                },
                {
                    opcode: 'disengageAutoPilot',
                    blockType: BlockType.COMMAND,
                    text: '关闭自动导航',
                },
                {
                    opcode: 'setCameraMode',
                    blockType: BlockType.COMMAND,
                    text: '镜头模式设置为[CAMERA_MODE]',
                    arguments: {
                        CAMERA_MODE: {
                            type: ArgumentType.NUMBER,
                            menu: 'cameraModeMenu'
                        },
                    }
                },
                {
                    opcode: 'restoreCamera',
                    blockType: BlockType.COMMAND,
                    text: '恢复屏幕[DISPLAY]',
                    arguments: {
                        DISPLAY: {
                            type: ArgumentType.NUMBER,
                            menu: 'numberMenu'
                        },
                    }
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
                engineStateMenu: [
                    {
                        text: '点火',
                        value: 'true'
                    },
                    {
                        text: '关机',
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
                ],
                sasmodeMenu: [
                    {text: '稳定', value: 0},
                    {text: '顺行', value: 1},
                    {text: '逆行', value: 2},
                    {text: '法线', value: 3},
                    {text: '法线反向', value: 4},
                    {text: '径向向内', value: 5},
                    {text: '径向向外', value: 6},
                    {text: '目标', value: 7},
                    {text: '目标反向', value: 8},
                    {text: '机动点', value: 9},
                ],
                actiongroupMenu: [
                    {text: '0', value: 0},
                    {text: '1', value: 1},
                    {text: '2', value: 2},
                    {text: '3', value: 3},
                    {text: '4', value: 4},
                    {text: '5', value: 5},
                    {text: '6', value: 6},
                    {text: '7', value: 7},
                    {text: '8', value: 8},
                    {text: '9', value: 9},
                ],
                numberMenu: [
                    {
                        text: '0',
                        value: 0
                    },
                    {
                        text: '1',
                        value: 1
                    }
                ],
                cameraModeMenu: [
                    {
                        text: '自动',
                        value: 0
                    },
                    {
                        text: '自由',
                        value: 1
                    },
                    {
                        text: '轨道',
                        value: 2
                    }
                ],
            }
        }
    }

    async isAnyActiveEngineNoFuel() {
        let req = new APIMessage.GetVesselPartsByTypeRequest();
        req.setParttype(APIMessage.Part.PartType.ENGINE);
        let result = false;
        this.client.getVesselPartsByType(req, {}, (err, resp) => {
            let count = 0;
            for (let i = 0; i < resp.getPartsList().length; i++) {
                if (resp.getPartsList()[i].getEngine().getActive() && !resp.getPartsList()[i].getEngine().getHasfuel()) {
                    count++;
                }
            }
            result = count > 0;
        });
        await sleep(400);
        return result;
    }

    async isAnyActiveEngineNoFuelWithTag(args) {
        let req = new APIMessage.GetVesselPartsByTypeRequest();
        req.setParttype(APIMessage.Part.PartType.ENGINE);
        let result = -1;
        this.client.getVesselPartsByType(req, {}, (err, resp) => {
            let count = 0;
            for (let i = 0; i < resp.getPartsList().length; i++) {
                if (resp.getPartsList()[i].getEngine().getActive() && !resp.getPartsList()[i].getEngine().getHasfuel()
                    && resp.getPartsList()[i].getTag().includes(args.TAG)) {
                    count++;
                }
            }
            result = count > 0;
        });
        await sleep(400);
        if (result === -1) {
            return false;
        }
        return result;
    }

    async getActiveEngineCount() {
        let req = new APIMessage.GetVesselPartsByTypeRequest();
        req.setParttype(APIMessage.Part.PartType.ENGINE);
        let result = 0;
        this.client.getVesselPartsByType(req, {}, (err, resp) => {
            let count = 0;
            for (let i = 0; i < resp.getPartsList().length; i++) {
                if (resp.getPartsList()[i].getEngine().getActive()) {
                    count++;
                }
            }
            result = count;
        });
        await sleep(400);
        return result;
    }

    async getEngineCount() {
        let req = new APIMessage.GetVesselPartsByTypeRequest();
        req.setParttype(APIMessage.Part.PartType.ENGINE);
        let result = 0;
        this.client.getVesselPartsByType(req, {}, (err, resp) => {
            result = resp.getPartsList().length;
        });
        await sleep(400);
        return result;
    }

    getCurrentMillisecond() {
        return Date.now();
    }

    setHeading(args) {
        let req = new APIMessage.SetHeadingRequest();
        req.setPitch(parseInt(args.PITCH));
        req.setYaw(parseInt(args.YAW));
        req.setStablefirst(false);
        this.client.setHeading(req, null);
    }

    setOrientation(args) {
        let req = new APIMessage.SetOrientationRequest();
        req.setPitch(parseInt(args.PITCH));
        req.setYaw(parseInt(args.YAW));
        req.setRoll(parseInt(args.ROLL));
        this.client.setOrientation(req, null);
    }

    releaseLaunchClamps() {
        let req = new APIMessage.GetVesselPartsByTypeRequest();
        req.setParttype(APIMessage.Part.PartType.LAUNCHCLAMP);
        this.client.getVesselPartsByType(req, {}, (err, resp) => {
            let IDs = [];
            for (let i = 0; i < resp.getPartsList().length; i++) {
                IDs.push(resp.getPartsList()[i].getId());
            }
            let req = new APIMessage.LaunchClampsReleaseRequest();
            req.setIdsList(IDs);
            this.client.launchClampsRelease(req, null);
        });
    }

    stopTimeWarp() {
        let req = new APIMessage.StopTimeWarpRequest();
        this.client.stopTimeWarp(req, null);
    }

    decreaseTimeWarpRateBy(args) {
        let req = new APIMessage.DecreaseTimeWarpRateByRequest();
        req.setLevels(parseInt(args.RATE));
        this.client.decreaseTimeWarpRateBy(req, null);
    }

    increaseTimeWarpRateBy(args) {
        let req = new APIMessage.IncreaseTimeWarpRateByRequest();
        req.setLevels(parseInt(args.RATE));
        this.client.increaseTimeWarpRateBy(req, null);
    }

    toggleActionGroup(args) {
        let req = new APIMessage.ToggleActionGroupRequest();
        req.setGroupid(parseInt(args.GROUP));
        this.client.toggleActionGroup(req, null);
    }

    async getTimeToApoapsis() {
        let req = new Observor.SnapshotRequest();
        let orbitReq = new Observor.OrbitSnapshotRequest();
        orbitReq.setItemsList([Observor.OrbitSnapshotRequest.OOrbit.TIMETOAPOAPSIS]);
        req.setOrbit(orbitReq);
        let result = 0;
        this.client.snapshot(req, {}, (err, resp) => {
            result = resp.getOrbit().getTimetoapoapsis();
        });
        await sleep(400);
        return result;
    }

    async getMeanAltitude() {
        let req = new Observor.SnapshotRequest();
        let flightReq = new Observor.FlightSnapshotRequest();
        flightReq.setItemsList([Observor.FlightSnapshotRequest.OFlight.MEANALTITUDE]);
        req.setFlight(flightReq);
        let result = 0;
        this.client.snapshot(req, {}, (err, resp) => {
            result = resp.getFlight().getMeanaltitude();
        });
        await sleep(400);
        return result;
    }

    async getApoapsisAltitude() {
        let req = new Observor.SnapshotRequest();
        let orbitReq = new Observor.OrbitSnapshotRequest();
        orbitReq.setItemsList([Observor.OrbitSnapshotRequest.OOrbit.APOAPSISALTITUDE]);
        req.setOrbit(orbitReq);
        let result = 0;
        this.client.snapshot(req, {}, (err, resp) => {
            result = resp.getOrbit().getApoapsisaltitude();
        });
        await sleep(400);
        return result;
    }

    async getPeriapsisAltitude() {
        let req = new Observor.SnapshotRequest();
        let orbitReq = new Observor.OrbitSnapshotRequest();
        orbitReq.setItemsList([Observor.OrbitSnapshotRequest.OOrbit.PERIAPSISALTITUDE]);
        req.setOrbit(orbitReq);
        let result = 0;
        this.client.snapshot(req, {}, (err, resp) => {
            result = resp.getOrbit().getPeriapsisaltitude();
        });
        await sleep(400);
        return result;
    }

    async getCurrentStage() {
        let req = new Observor.SnapshotRequest();
        let vesselReq = new Observor.VesselSnapshotRequest();
        vesselReq.setItemsList([Observor.VesselSnapshotRequest.OVessel.STAGE]);
        req.setVessel(vesselReq);
        let result = 0;
        this.client.snapshot(req, {}, (err, resp) => {
            result = resp.getVessel().getStage();
        });
        await sleep(400);
        return result;
    }

    disengageAutoPilot() {
        let req = new APIMessage.DisengageAutoPilotRequest();
        this.client.disengageAutoPilot(req, null);
    }

    setCameraMode(args) {
        let req = new APIMessage.SetCameraModeRequest();
        req.setMode(args.CAMERA_MODE);
        this.client.setCameraMode(req, null);
    }

    restoreCamera(args) {
        let req = new APIMessage.RestoreCameraRequest();
        req.setDisplay(args.DISPLAY);
        this.client.restoreCamera(req, null);
    }

    setRCS(args) {
        let req = new APIMessage.SetRCSRequest();
        req.setEnabled(args.STATE === 'true');
        this.client.setRCS(req, null);
    }

    setSAS(args) {
        let req = new APIMessage.SetSASRequest();
        req.setEnabled(args.STATE === 'true');
        this.client.setSAS(req, null);
    }

    setSASMode(args) {
        let req = new APIMessage.SetSASModeRequest();
        req.setMode(args.MODE);
        this.client.setSASMode(req, null);
    }

    throttle(args) {
        let req = new APIMessage.ThrottleRequest();
        req.setValue(parseInt(args.THROTTLE, 10) / 100);
        this.client.throttle(req, null);
    }

    stage() {
        this.client.stage(new APIMessage.StageRequest(), null);
    }

    setLights(args) {
        let req = new APIMessage.SetLightsRequest();
        req.setEnabled(args.STATE === 'true');
        this.client.setLights(req, null);
    }

    setSolarPanels(args) {
        let req = new APIMessage.SetSolarPanelsRequest();
        req.setEnabled(args.STATE === 'true');
        this.client.setSolarPanels(req, null);
    }

    setAntennas(args) {
        let req = new APIMessage.SetAntennasRequest();
        req.setEnabled(args.STATE === 'true');
        this.client.setAntennas(req, null);
    }

    enginesActivate(args) {
        let req = new APIMessage.SearchVesselPartsByTagRequest();
        req.setTag(args.TAG);
        this.client.searchVesselPartsByTag(req, {}, (err, resp) => {
            let IDs = [];
            for (let i = 0; i < resp.getPartsList().length; i++) {
                IDs.push(resp.getPartsList()[i].getId());
            }
            if (args.STATE === 'true') {
                let req = new APIMessage.EnginesActivateRequest();
                req.setIdsList(IDs);
                this.client.enginesActivate(req, null);
            } else {
                let req = new APIMessage.EnginesShutDownRequest();
                req.setIdsList(IDs);
                this.client.enginesShutDown(req, null);
            }
        });
    }

    rcsesActivate(args) {
        let req = new APIMessage.SearchVesselPartsByTagRequest();
        req.setTag(args.TAG);
        this.client.searchVesselPartsByTag(req, {}, (err, resp) => {
            let IDs = [];
            for (let i = 0; i < resp.getPartsList().length; i++) {
                IDs.push(resp.getPartsList()[i].getId());
            }
            if (args.STATE === 'true') {
                let req = new APIMessage.RCSesEnabledRequest();
                req.setIdsList(IDs);
                req.setEnabled(true);
                this.client.rCSesEnabled(req, null);
            } else {
                let req = new APIMessage.RCSesEnabledRequest();
                req.setIdsList(IDs);
                req.setEnabled(false);
                this.client.rCSesEnabled(req, null);
            }
        });
    }

    decouplersActivate(args) {
        let req = new APIMessage.SearchVesselPartsByTagRequest();
        req.setTag(args.TAG);
        this.client.searchVesselPartsByTag(req, {}, (err, resp) => {
            let IDs = [];
            for (let i = 0; i < resp.getPartsList().length; i++) {
                IDs.push(resp.getPartsList()[i].getId());
            }
            let req = new APIMessage.DecouplersActivateRequest();
            req.setIdsList(IDs);
            this.client.decouplersActivate(req, null);
        });
    }

    fairingsJettison(args) {
        let req = new APIMessage.SearchVesselPartsByTagRequest();
        req.setTag(args.TAG);
        this.client.searchVesselPartsByTag(req, {}, (err, resp) => {
            let IDs = [];
            for (let i = 0; i < resp.getPartsList().length; i++) {
                IDs.push(resp.getPartsList()[i].getId());
            }
            let req = new APIMessage.FairingsJettisonRequest();
            req.setIdsList(IDs);
            this.client.fairingsJettison(req, null);
        });
    }

    parachutesDeploy(args) {
        let req = new APIMessage.SearchVesselPartsByTagRequest();
        req.setTag(args.TAG);
        this.client.searchVesselPartsByTag(req, {}, (err, resp) => {
            let IDs = [];
            for (let i = 0; i < resp.getPartsList().length; i++) {
                IDs.push(resp.getPartsList()[i].getId());
            }
            let req = new APIMessage.ParachutesDeployRequest();
            req.setIdsList(IDs);
            this.client.parachutesDeploy(req, null);
        });
    }

    ablatorsDecouple(args) {
        let req = new APIMessage.SearchVesselPartsByTagRequest();
        req.setTag(args.TAG);
        this.client.searchVesselPartsByTag(req, {}, (err, resp) => {
            let IDs = [];
            for (let i = 0; i < resp.getPartsList().length; i++) {
                IDs.push(resp.getPartsList()[i].getId());
            }
            let req = new APIMessage.AblatorsDecoupleRequest();
            req.setIdsList(IDs);
            this.client.ablatorsDecouple(req, null);
        });
    }

    async getMissionTime() {
        let req = new Observor.SnapshotRequest();
        let flightReq = new Observor.FlightSnapshotRequest();
        flightReq.setItemsList([Observor.FlightSnapshotRequest.OFlight.MISSIONTIME]);
        req.setFlight(flightReq);
        let result = 0;
        this.client.snapshot(req, {}, (err, resp) => {
            result = resp.getFlight().getMissiontime();
        });
        await sleep(400);
        return result;
    }

    async getEccentricity() {
        let req = new Observor.SnapshotRequest();
        let orbitReq = new Observor.OrbitSnapshotRequest();
        orbitReq.setItemsList([Observor.OrbitSnapshotRequest.OOrbit.ECCENTRICITY]);
        req.setOrbit(orbitReq);
        let result = 0;
        this.client.snapshot(req, {}, (err, resp) => {
            result = resp.getOrbit().getEccentricity();
        });
        await sleep(400);
        return result;
    }

    async getMach() {
        let req = new Observor.SnapshotRequest();
        let flightReq = new Observor.FlightSnapshotRequest();
        flightReq.setItemsList([Observor.FlightSnapshotRequest.OFlight.MACH]);
        req.setFlight(flightReq);
        let result = 0;
        this.client.snapshot(req, {}, (err, resp) => {
            result = resp.getFlight().getMach();
        });
        await sleep(400);
        return result;
    }

    async getSurfaceAltitude() {
        let req = new Observor.SnapshotRequest();
        let flightReq = new Observor.FlightSnapshotRequest();
        flightReq.setItemsList([Observor.FlightSnapshotRequest.OFlight.SURFACEALTITUDE]);
        req.setFlight(flightReq);
        let result = 0;
        this.client.snapshot(req, {}, (err, resp) => {
            result = resp.getFlight().getSurfacealtitude();
        });
        await sleep(400);
        return result;
    }

    async getGForce() {
        let req = new Observor.SnapshotRequest();
        let flightReq = new Observor.FlightSnapshotRequest();
        flightReq.setItemsList([Observor.FlightSnapshotRequest.OFlight.GFORCE]);
        req.setFlight(flightReq);
        let result = 0;
        this.client.snapshot(req, {}, (err, resp) => {
            result = resp.getFlight().getGforce();
        });
        await sleep(400);
        return result;
    }

    async getSurfaceSpeed() {
        let req = new Observor.SnapshotRequest();
        let flightReq = new Observor.FlightSnapshotRequest();
        flightReq.setItemsList([Observor.FlightSnapshotRequest.OFlight.SURFACESPEED]);
        req.setFlight(flightReq);
        let result = 0;
        this.client.snapshot(req, {}, (err, resp) => {
            result = resp.getFlight().getSurfacespeed();
        });
        await sleep(400);
        return result;
    }
}

function sleep(milliseconds) {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
}

module.exports = Scratch3RocketScienceBlocks;
