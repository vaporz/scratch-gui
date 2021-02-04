// package: 
// file: observor.proto

import * as jspb from "google-protobuf";

export class PartSnapshotRequest extends jspb.Message {
  getPartid(): number;
  setPartid(value: number): void;

  clearItemsList(): void;
  getItemsList(): Array<PartSnapshotRequest.OPartMap[keyof PartSnapshotRequest.OPartMap]>;
  setItemsList(value: Array<PartSnapshotRequest.OPartMap[keyof PartSnapshotRequest.OPartMap]>): void;
  addItems(value: PartSnapshotRequest.OPartMap[keyof PartSnapshotRequest.OPartMap], index?: number): PartSnapshotRequest.OPartMap[keyof PartSnapshotRequest.OPartMap];

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PartSnapshotRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PartSnapshotRequest): PartSnapshotRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PartSnapshotRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PartSnapshotRequest;
  static deserializeBinaryFromReader(message: PartSnapshotRequest, reader: jspb.BinaryReader): PartSnapshotRequest;
}

export namespace PartSnapshotRequest {
  export type AsObject = {
    partid: number,
    itemsList: Array<PartSnapshotRequest.OPartMap[keyof PartSnapshotRequest.OPartMap]>,
  }

  export interface OPartMap {
    PARTMASS: 0;
    PARTSHIELDED: 1;
    PARTTEMPERATURE: 2;
    PARTSKINTEMPERATURE: 3;
    ANTENNASTATE: 4;
    CARGOBAYSTATE: 5;
    CARGOBAYDEPLOYPERCENT: 6;
    CONTROLSURFACEPITCHENABLED: 7;
    CONTROLSURFACEYAWENABLED: 8;
    CONTROLSURFACEROLLENABLED: 9;
    CONTROLSURFACEAUTHORITYLIMITER: 10;
    CONTROLSURFACEDEPLOYED: 11;
    DECOUPLERDECOUPLED: 12;
    DOCKINGPORTSTATE: 13;
    DOCKINGPORTSHIELDED: 14;
    ENGINEACTIVE: 15;
    ENGINETHRUST: 16;
    ENGINETHRUSTPERCENTAGE: 17;
    ENGINETHROTTLE: 18;
    ENGINESPECIFICIMPULSE: 19;
    ENGINEVACUUMSPECIFICIMPULSE: 20;
    ENGINEPROPELLANTINFO: 21;
    ENGINEHASFUEL: 22;
    ENGINEMODE: 23;
    ENGINEAUTOSWITCHMODE: 24;
    ENGINEGIMBALLIMIT: 25;
    FARINGJETTISONED: 26;
    INTAKEOPEN: 27;
    INTAKESPEED: 28;
    INTAKEFLOW: 29;
    LEGSTATE: 30;
    LEGDEPLOYED: 31;
    LEGGROUNDED: 32;
    LIGHTON: 33;
    PARACHUTESTATE: 34;
    PARACHUTEDEPLOYED: 35;
    PARACHUTEDEPLOYALTITUDE: 36;
    PARACHUTEDEPLOYMINPRESSURE: 37;
    PARACHUTEDEPLOYMENTSAFESTATE: 38;
    RADIATORSTATE: 39;
    RADIATORDEPLOYED: 40;
    RADIATORCOOLING: 41;
    RCSENABLED: 42;
    RCSTHRUSTLIMIT: 43;
    RCSPITCHENABLED: 44;
    RCSYAWENABLED: 45;
    RCSROLLENABLED: 46;
    RCSUPENABLED: 47;
    RCSFORWARDENABLED: 48;
    RCSRIGHTENABLED: 49;
    RCSHASFUEL: 50;
    RCSPROPELLANTINFO: 51;
    REACTIONWHEELSTATE: 52;
    RESOURCECONVERTERSTATE: 53;
    RESOURCECONVERTERTHERMALEFFICIENCY: 54;
    RESOURCECONVERTERCORETEMPERATURE: 55;
    RESOURCECONVERTERSTATUS: 56;
    RESOURCECONVERTERACTIVE: 57;
    RESOURCEHARVESTERSTATE: 58;
    RESOURCEHARVESTERDEPLOYED: 59;
    RESOURCEHARVESTERACTIVATED: 60;
    RESOURCEHARVESTEREXTRACTIONRATE: 61;
    RESOURCEHARVESTERTHERMALEFFICIENCY: 62;
    RESOURCEHARVESTERCORETEMPERATURE: 63;
    SENSORACTIVATED: 64;
    SENSORREADING: 65;
    SOLARPANELSTATE: 66;
    SOLARPANELDEPLOYED: 67;
    SOLARPANELENERGYFLOW: 68;
    SOLARPANELSUNEXPOSURE: 69;
    WHEELSTATE: 70;
    WHEELGROUNDED: 71;
    WHEELDEPLOYED: 72;
    WHEELPOWERED: 73;
    WHEELMOTORENABLED: 74;
    WHEELMOTORSTATE: 75;
    WHEELMOTOROUTPUT: 76;
    WHEELINVERTED: 77;
    WHEELAUTOFRICTIONCONTROLENABLED: 78;
    WHEELMANUALFRICTIONCONTROL: 79;
    WHEELTRACTIONCONTROLENABLED: 80;
    WHEELTRACTIONCONTROL: 81;
    WHEELDRIVELIMITER: 82;
    WHEELSTEERINGENABLED: 83;
    WHEELSTEERINGINVERTED: 84;
    WHEELBROKEN: 85;
    WHEELSTRESS: 86;
    WHEELSTRESSPERCENTAGE: 87;
    WHEELDEFLECTION: 88;
    WHEELSLIP: 89;
  }

  export const OPart: OPartMap;
}

export class VesselSnapshotRequest extends jspb.Message {
  clearItemsList(): void;
  getItemsList(): Array<VesselSnapshotRequest.OVesselMap[keyof VesselSnapshotRequest.OVesselMap]>;
  setItemsList(value: Array<VesselSnapshotRequest.OVesselMap[keyof VesselSnapshotRequest.OVesselMap]>): void;
  addItems(value: VesselSnapshotRequest.OVesselMap[keyof VesselSnapshotRequest.OVesselMap], index?: number): VesselSnapshotRequest.OVesselMap[keyof VesselSnapshotRequest.OVesselMap];

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VesselSnapshotRequest.AsObject;
  static toObject(includeInstance: boolean, msg: VesselSnapshotRequest): VesselSnapshotRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: VesselSnapshotRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VesselSnapshotRequest;
  static deserializeBinaryFromReader(message: VesselSnapshotRequest, reader: jspb.BinaryReader): VesselSnapshotRequest;
}

export namespace VesselSnapshotRequest {
  export type AsObject = {
    itemsList: Array<VesselSnapshotRequest.OVesselMap[keyof VesselSnapshotRequest.OVesselMap]>,
  }

  export interface OVesselMap {
    _V: 0;
    SITUATION: 1;
    MET: 2;
    BIOME: 3;
    MASS: 4;
    STAGE: 5;
    STAGERESOURCES: 6;
    TOTALRESOURCES: 7;
    SAS_MODE: 8;
    ORBITINGBODY: 9;
    MAINTHROTTLE: 10;
    SASENABLED: 11;
    RCSENABLED: 12;
    GEARENABLED: 13;
    LIGHTENABLED: 14;
    BRAKESENABLED: 15;
  }

  export const OVessel: OVesselMap;
}

export class FlightSnapshotRequest extends jspb.Message {
  clearItemsList(): void;
  getItemsList(): Array<FlightSnapshotRequest.OFlightMap[keyof FlightSnapshotRequest.OFlightMap]>;
  setItemsList(value: Array<FlightSnapshotRequest.OFlightMap[keyof FlightSnapshotRequest.OFlightMap]>): void;
  addItems(value: FlightSnapshotRequest.OFlightMap[keyof FlightSnapshotRequest.OFlightMap], index?: number): FlightSnapshotRequest.OFlightMap[keyof FlightSnapshotRequest.OFlightMap];

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FlightSnapshotRequest.AsObject;
  static toObject(includeInstance: boolean, msg: FlightSnapshotRequest): FlightSnapshotRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FlightSnapshotRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FlightSnapshotRequest;
  static deserializeBinaryFromReader(message: FlightSnapshotRequest, reader: jspb.BinaryReader): FlightSnapshotRequest;
}

export namespace FlightSnapshotRequest {
  export type AsObject = {
    itemsList: Array<FlightSnapshotRequest.OFlightMap[keyof FlightSnapshotRequest.OFlightMap]>,
  }

  export interface OFlightMap {
    _F: 0;
    GFORCE: 1;
    MEANALTITUDE: 2;
    SURFACEALTITUDE: 3;
    BEDROCKALTITUDE: 4;
    ELEVATION: 5;
    LATITUDE: 6;
    LONGITUDE: 7;
    SURFACESPEED: 8;
    HORIZONTALSPEED: 9;
    VERTICALSPEED: 10;
    PITCH: 11;
    YAW: 12;
    ROLL: 13;
    ATMOSPHEREDENSITY: 14;
    DYNAMICPRESSURE: 15;
    STATICPRESSUREATMSL: 16;
    STATICPRESSURE: 17;
    SPEEDOFSOUND: 18;
    MACH: 19;
    TRUEAIRSPEED: 20;
    ANGLEOFATTACK: 21;
    TOTALAIRTEMPERATURE: 22;
    STATICAIRTEMPERATURE: 23;
    ORBITSPEED: 24;
    MISSIONTIME: 25;
    SIDESLIPANGLE: 26;
    SURFACEVELOCITYPROGRADE: 27;
    ORBITALVELOCITYPROGRADE: 28;
    NAVBALLANGLES: 29;
    EXTERNALTEMPERATURE: 30;
    TWRACTUAL: 31;
    TWRMAXTHRUST: 32;
    TWRMAXTHRUSTNOLIMIT: 33;
    DRAGFORCE: 34;
    LIFTFORCE: 35;
    TERMINALVELOCITY: 36;
    LIFTUPFORCE: 37;
    ATTITUDEDATA: 38;
    UT: 39;
    NAVMODE: 40;
    STALLFRACTION: 41;
    DRAGCOEFFICIENT: 42;
    LIFTCOEFFICIENT: 43;
    BALLISTICCOEFFICIENT: 44;
    TSFC: 45;
    REYNOLDSNUMBER: 46;
    TWRDATA: 47;
  }

  export const OFlight: OFlightMap;
}

export class OrbitSnapshotRequest extends jspb.Message {
  clearItemsList(): void;
  getItemsList(): Array<OrbitSnapshotRequest.OOrbitMap[keyof OrbitSnapshotRequest.OOrbitMap]>;
  setItemsList(value: Array<OrbitSnapshotRequest.OOrbitMap[keyof OrbitSnapshotRequest.OOrbitMap]>): void;
  addItems(value: OrbitSnapshotRequest.OOrbitMap[keyof OrbitSnapshotRequest.OOrbitMap], index?: number): OrbitSnapshotRequest.OOrbitMap[keyof OrbitSnapshotRequest.OOrbitMap];

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OrbitSnapshotRequest.AsObject;
  static toObject(includeInstance: boolean, msg: OrbitSnapshotRequest): OrbitSnapshotRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OrbitSnapshotRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OrbitSnapshotRequest;
  static deserializeBinaryFromReader(message: OrbitSnapshotRequest, reader: jspb.BinaryReader): OrbitSnapshotRequest;
}

export namespace OrbitSnapshotRequest {
  export type AsObject = {
    itemsList: Array<OrbitSnapshotRequest.OOrbitMap[keyof OrbitSnapshotRequest.OOrbitMap]>,
  }

  export interface OOrbitMap {
    _O: 0;
    BODYNAME: 1;
    APOAPSIS: 2;
    PERIAPSIS: 3;
    APOAPSISALTITUDE: 4;
    PERIAPSISALTITUDE: 5;
    SEMIMAJORAXIS: 6;
    SEMIMINORAXIS: 7;
    RADIUS: 8;
    SPEED: 9;
    PERIOD: 10;
    TIMETOAPOAPSIS: 11;
    TIMETOPERIAPSIS: 12;
    ECCENTRICITY: 13;
    INCLINATION: 14;
    LONGITUDEOFASCENDINGNODE: 15;
    ARGUMENTOFPERIAPSIS: 16;
    MEANANOMALYATEPOCH: 17;
    EPOCH: 18;
    MEANANOMALY: 19;
    ECCENTRICANOMALY: 20;
    TRUEANOMALY: 21;
    TIMETOSOICHANGE: 22;
    ORBITALSPEED: 23;
  }

  export const OOrbit: OOrbitMap;
}

export class SnapshotRequest extends jspb.Message {
  getVesselid(): string;
  setVesselid(value: string): void;

  hasVessel(): boolean;
  clearVessel(): void;
  getVessel(): VesselSnapshotRequest | undefined;
  setVessel(value?: VesselSnapshotRequest): void;

  hasFlight(): boolean;
  clearFlight(): void;
  getFlight(): FlightSnapshotRequest | undefined;
  setFlight(value?: FlightSnapshotRequest): void;

  hasOrbit(): boolean;
  clearOrbit(): void;
  getOrbit(): OrbitSnapshotRequest | undefined;
  setOrbit(value?: OrbitSnapshotRequest): void;

  clearPartsList(): void;
  getPartsList(): Array<PartSnapshotRequest>;
  setPartsList(value: Array<PartSnapshotRequest>): void;
  addParts(value?: PartSnapshotRequest, index?: number): PartSnapshotRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SnapshotRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SnapshotRequest): SnapshotRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SnapshotRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SnapshotRequest;
  static deserializeBinaryFromReader(message: SnapshotRequest, reader: jspb.BinaryReader): SnapshotRequest;
}

export namespace SnapshotRequest {
  export type AsObject = {
    vesselid: string,
    vessel?: VesselSnapshotRequest.AsObject,
    flight?: FlightSnapshotRequest.AsObject,
    orbit?: OrbitSnapshotRequest.AsObject,
    partsList: Array<PartSnapshotRequest.AsObject>,
  }
}

export class VesselResource extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getCapacity(): number;
  setCapacity(value: number): void;

  getAmount(): number;
  setAmount(value: number): void;

  getRate(): number;
  setRate(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VesselResource.AsObject;
  static toObject(includeInstance: boolean, msg: VesselResource): VesselResource.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: VesselResource, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VesselResource;
  static deserializeBinaryFromReader(message: VesselResource, reader: jspb.BinaryReader): VesselResource;
}

export namespace VesselResource {
  export type AsObject = {
    name: string,
    capacity: number,
    amount: number,
    rate: number,
  }
}

export class VesselSnapshot extends jspb.Message {
  getSituation(): VesselSnapshot.VesselSituationMap[keyof VesselSnapshot.VesselSituationMap];
  setSituation(value: VesselSnapshot.VesselSituationMap[keyof VesselSnapshot.VesselSituationMap]): void;

  getMet(): number;
  setMet(value: number): void;

  getBiome(): string;
  setBiome(value: string): void;

  getMass(): number;
  setMass(value: number): void;

  getStage(): number;
  setStage(value: number): void;

  getTotalresourcesMap(): jspb.Map<string, VesselResource>;
  clearTotalresourcesMap(): void;
  getStageresourcesMap(): jspb.Map<string, VesselResource>;
  clearStageresourcesMap(): void;
  getSasmode(): VesselSnapshot.SASModeMap[keyof VesselSnapshot.SASModeMap];
  setSasmode(value: VesselSnapshot.SASModeMap[keyof VesselSnapshot.SASModeMap]): void;

  getOrbitingbody(): string;
  setOrbitingbody(value: string): void;

  getMainthrottle(): number;
  setMainthrottle(value: number): void;

  getSasenabled(): boolean;
  setSasenabled(value: boolean): void;

  getRcsenabled(): boolean;
  setRcsenabled(value: boolean): void;

  getGearenabled(): boolean;
  setGearenabled(value: boolean): void;

  getLightenabled(): boolean;
  setLightenabled(value: boolean): void;

  getBrakesenabled(): boolean;
  setBrakesenabled(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VesselSnapshot.AsObject;
  static toObject(includeInstance: boolean, msg: VesselSnapshot): VesselSnapshot.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: VesselSnapshot, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VesselSnapshot;
  static deserializeBinaryFromReader(message: VesselSnapshot, reader: jspb.BinaryReader): VesselSnapshot;
}

export namespace VesselSnapshot {
  export type AsObject = {
    situation: VesselSnapshot.VesselSituationMap[keyof VesselSnapshot.VesselSituationMap],
    met: number,
    biome: string,
    mass: number,
    stage: number,
    totalresourcesMap: Array<[string, VesselResource.AsObject]>,
    stageresourcesMap: Array<[string, VesselResource.AsObject]>,
    sasmode: VesselSnapshot.SASModeMap[keyof VesselSnapshot.SASModeMap],
    orbitingbody: string,
    mainthrottle: number,
    sasenabled: boolean,
    rcsenabled: boolean,
    gearenabled: boolean,
    lightenabled: boolean,
    brakesenabled: boolean,
  }

  export interface VesselSituationMap {
    LANDED: 0;
    SPLASHED: 1;
    PRELAUNCH: 2;
    FLYING: 3;
    SUBORBITAL: 4;
    ORBITING: 5;
    ESCAPING: 6;
    DOCKED: 7;
  }

  export const VesselSituation: VesselSituationMap;

  export interface SASModeMap {
    STABILITYASSIST: 0;
    PROGRADE: 1;
    RETROGRADE: 2;
    NORMAL: 3;
    ANTINORMAL: 4;
    RADIALIN: 5;
    RADIALOUT: 6;
    TARGET: 7;
    ANTITARGET: 8;
    MANEUVER: 9;
  }

  export const SASMode: SASModeMap;
}

export class Vector3d extends jspb.Message {
  getX(): number;
  setX(value: number): void;

  getY(): number;
  setY(value: number): void;

  getZ(): number;
  setZ(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Vector3d.AsObject;
  static toObject(includeInstance: boolean, msg: Vector3d): Vector3d.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Vector3d, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Vector3d;
  static deserializeBinaryFromReader(message: Vector3d, reader: jspb.BinaryReader): Vector3d;
}

export namespace Vector3d {
  export type AsObject = {
    x: number,
    y: number,
    z: number,
  }
}

export class QuaternionD extends jspb.Message {
  getX(): number;
  setX(value: number): void;

  getY(): number;
  setY(value: number): void;

  getZ(): number;
  setZ(value: number): void;

  getW(): number;
  setW(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QuaternionD.AsObject;
  static toObject(includeInstance: boolean, msg: QuaternionD): QuaternionD.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QuaternionD, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QuaternionD;
  static deserializeBinaryFromReader(message: QuaternionD, reader: jspb.BinaryReader): QuaternionD;
}

export namespace QuaternionD {
  export type AsObject = {
    x: number,
    y: number,
    z: number,
    w: number,
  }
}

export class NavBallMarker extends jspb.Message {
  getYaw(): number;
  setYaw(value: number): void;

  getPitch(): number;
  setPitch(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NavBallMarker.AsObject;
  static toObject(includeInstance: boolean, msg: NavBallMarker): NavBallMarker.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: NavBallMarker, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NavBallMarker;
  static deserializeBinaryFromReader(message: NavBallMarker, reader: jspb.BinaryReader): NavBallMarker;
}

export namespace NavBallMarker {
  export type AsObject = {
    yaw: number,
    pitch: number,
  }
}

export class AttitudeInfo extends jspb.Message {
  hasPosition(): boolean;
  clearPosition(): void;
  getPosition(): Vector3d | undefined;
  setPosition(value?: Vector3d): void;

  hasDirection(): boolean;
  clearDirection(): void;
  getDirection(): Vector3d | undefined;
  setDirection(value?: Vector3d): void;

  hasVelocity(): boolean;
  clearVelocity(): void;
  getVelocity(): Vector3d | undefined;
  setVelocity(value?: Vector3d): void;

  hasPrograde(): boolean;
  clearPrograde(): void;
  getPrograde(): Vector3d | undefined;
  setPrograde(value?: Vector3d): void;

  hasNormal(): boolean;
  clearNormal(): void;
  getNormal(): Vector3d | undefined;
  setNormal(value?: Vector3d): void;

  hasRadialout(): boolean;
  clearRadialout(): void;
  getRadialout(): Vector3d | undefined;
  setRadialout(value?: Vector3d): void;

  hasUp(): boolean;
  clearUp(): void;
  getUp(): Vector3d | undefined;
  setUp(value?: Vector3d): void;

  hasForward(): boolean;
  clearForward(): void;
  getForward(): Vector3d | undefined;
  setForward(value?: Vector3d): void;

  hasRight(): boolean;
  clearRight(): void;
  getRight(): Vector3d | undefined;
  setRight(value?: Vector3d): void;

  hasRotation(): boolean;
  clearRotation(): void;
  getRotation(): QuaternionD | undefined;
  setRotation(value?: QuaternionD): void;

  hasSrfreferenceframerotation(): boolean;
  clearSrfreferenceframerotation(): void;
  getSrfreferenceframerotation(): QuaternionD | undefined;
  setSrfreferenceframerotation(value?: QuaternionD): void;

  hasOrbitprograde(): boolean;
  clearOrbitprograde(): void;
  getOrbitprograde(): NavBallMarker | undefined;
  setOrbitprograde(value?: NavBallMarker): void;

  hasOrbitretrograde(): boolean;
  clearOrbitretrograde(): void;
  getOrbitretrograde(): NavBallMarker | undefined;
  setOrbitretrograde(value?: NavBallMarker): void;

  hasOrbitnormal(): boolean;
  clearOrbitnormal(): void;
  getOrbitnormal(): NavBallMarker | undefined;
  setOrbitnormal(value?: NavBallMarker): void;

  hasOrbitantinormal(): boolean;
  clearOrbitantinormal(): void;
  getOrbitantinormal(): NavBallMarker | undefined;
  setOrbitantinormal(value?: NavBallMarker): void;

  hasOrbitradialin(): boolean;
  clearOrbitradialin(): void;
  getOrbitradialin(): NavBallMarker | undefined;
  setOrbitradialin(value?: NavBallMarker): void;

  hasOrbitradialout(): boolean;
  clearOrbitradialout(): void;
  getOrbitradialout(): NavBallMarker | undefined;
  setOrbitradialout(value?: NavBallMarker): void;

  hasSrfprograde(): boolean;
  clearSrfprograde(): void;
  getSrfprograde(): NavBallMarker | undefined;
  setSrfprograde(value?: NavBallMarker): void;

  hasSrfretrograde(): boolean;
  clearSrfretrograde(): void;
  getSrfretrograde(): NavBallMarker | undefined;
  setSrfretrograde(value?: NavBallMarker): void;

  hasTarget(): boolean;
  clearTarget(): void;
  getTarget(): NavBallMarker | undefined;
  setTarget(value?: NavBallMarker): void;

  hasAntitarget(): boolean;
  clearAntitarget(): void;
  getAntitarget(): NavBallMarker | undefined;
  setAntitarget(value?: NavBallMarker): void;

  hasTargetrelvel(): boolean;
  clearTargetrelvel(): void;
  getTargetrelvel(): NavBallMarker | undefined;
  setTargetrelvel(value?: NavBallMarker): void;

  hasAntitargetrelvel(): boolean;
  clearAntitargetrelvel(): void;
  getAntitargetrelvel(): NavBallMarker | undefined;
  setAntitargetrelvel(value?: NavBallMarker): void;

  hasManeuvernode(): boolean;
  clearManeuvernode(): void;
  getManeuvernode(): NavBallMarker | undefined;
  setManeuvernode(value?: NavBallMarker): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AttitudeInfo.AsObject;
  static toObject(includeInstance: boolean, msg: AttitudeInfo): AttitudeInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AttitudeInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AttitudeInfo;
  static deserializeBinaryFromReader(message: AttitudeInfo, reader: jspb.BinaryReader): AttitudeInfo;
}

export namespace AttitudeInfo {
  export type AsObject = {
    position?: Vector3d.AsObject,
    direction?: Vector3d.AsObject,
    velocity?: Vector3d.AsObject,
    prograde?: Vector3d.AsObject,
    normal?: Vector3d.AsObject,
    radialout?: Vector3d.AsObject,
    up?: Vector3d.AsObject,
    forward?: Vector3d.AsObject,
    right?: Vector3d.AsObject,
    rotation?: QuaternionD.AsObject,
    srfreferenceframerotation?: QuaternionD.AsObject,
    orbitprograde?: NavBallMarker.AsObject,
    orbitretrograde?: NavBallMarker.AsObject,
    orbitnormal?: NavBallMarker.AsObject,
    orbitantinormal?: NavBallMarker.AsObject,
    orbitradialin?: NavBallMarker.AsObject,
    orbitradialout?: NavBallMarker.AsObject,
    srfprograde?: NavBallMarker.AsObject,
    srfretrograde?: NavBallMarker.AsObject,
    target?: NavBallMarker.AsObject,
    antitarget?: NavBallMarker.AsObject,
    targetrelvel?: NavBallMarker.AsObject,
    antitargetrelvel?: NavBallMarker.AsObject,
    maneuvernode?: NavBallMarker.AsObject,
  }
}

export class FlightSnapshot extends jspb.Message {
  getVesselid(): string;
  setVesselid(value: string): void;

  getGforce(): number;
  setGforce(value: number): void;

  getMeanaltitude(): number;
  setMeanaltitude(value: number): void;

  getSurfacealtitude(): number;
  setSurfacealtitude(value: number): void;

  getBedrockaltitude(): number;
  setBedrockaltitude(value: number): void;

  getElevation(): number;
  setElevation(value: number): void;

  getLatitude(): number;
  setLatitude(value: number): void;

  getLongitude(): number;
  setLongitude(value: number): void;

  getSurfacespeed(): number;
  setSurfacespeed(value: number): void;

  getHorizontalspeed(): number;
  setHorizontalspeed(value: number): void;

  getVerticalspeed(): number;
  setVerticalspeed(value: number): void;

  getPitch(): number;
  setPitch(value: number): void;

  getYaw(): number;
  setYaw(value: number): void;

  getRoll(): number;
  setRoll(value: number): void;

  getAtmospheredensity(): number;
  setAtmospheredensity(value: number): void;

  getDynamicpressure(): number;
  setDynamicpressure(value: number): void;

  getStaticpressureatmsl(): number;
  setStaticpressureatmsl(value: number): void;

  getStaticpressure(): number;
  setStaticpressure(value: number): void;

  getSpeedofsound(): number;
  setSpeedofsound(value: number): void;

  getMach(): number;
  setMach(value: number): void;

  getTrueairspeed(): number;
  setTrueairspeed(value: number): void;

  getAngleofattack(): number;
  setAngleofattack(value: number): void;

  getTotalairtemperature(): number;
  setTotalairtemperature(value: number): void;

  getStaticairtemperature(): number;
  setStaticairtemperature(value: number): void;

  getOrbitspeed(): number;
  setOrbitspeed(value: number): void;

  getMissiontime(): number;
  setMissiontime(value: number): void;

  getSideslipangle(): number;
  setSideslipangle(value: number): void;

  hasSurfacevelocityprograde(): boolean;
  clearSurfacevelocityprograde(): void;
  getSurfacevelocityprograde(): Vector3d | undefined;
  setSurfacevelocityprograde(value?: Vector3d): void;

  hasOrbitalvelocityprograde(): boolean;
  clearOrbitalvelocityprograde(): void;
  getOrbitalvelocityprograde(): Vector3d | undefined;
  setOrbitalvelocityprograde(value?: Vector3d): void;

  hasNavballangles(): boolean;
  clearNavballangles(): void;
  getNavballangles(): Vector3d | undefined;
  setNavballangles(value?: Vector3d): void;

  getExternaltemperature(): number;
  setExternaltemperature(value: number): void;

  getTwractual(): number;
  setTwractual(value: number): void;

  getTwrmaxthrust(): number;
  setTwrmaxthrust(value: number): void;

  getTwrmaxthrustnolimit(): number;
  setTwrmaxthrustnolimit(value: number): void;

  getDragforce(): number;
  setDragforce(value: number): void;

  getLiftforce(): number;
  setLiftforce(value: number): void;

  getTerminalvelocity(): number;
  setTerminalvelocity(value: number): void;

  getLiftupforce(): number;
  setLiftupforce(value: number): void;

  hasAttitudeinfo(): boolean;
  clearAttitudeinfo(): void;
  getAttitudeinfo(): AttitudeInfo | undefined;
  setAttitudeinfo(value?: AttitudeInfo): void;

  getUt(): number;
  setUt(value: number): void;

  getNavmode(): string;
  setNavmode(value: string): void;

  getStallfraction(): number;
  setStallfraction(value: number): void;

  getDragcoefficient(): number;
  setDragcoefficient(value: number): void;

  getLiftcoefficient(): number;
  setLiftcoefficient(value: number): void;

  getBallisticcoefficient(): number;
  setBallisticcoefficient(value: number): void;

  getTsfc(): number;
  setTsfc(value: number): void;

  getReynoldsnumber(): number;
  setReynoldsnumber(value: number): void;

  hasTwrdata(): boolean;
  clearTwrdata(): void;
  getTwrdata(): Vector3d | undefined;
  setTwrdata(value?: Vector3d): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FlightSnapshot.AsObject;
  static toObject(includeInstance: boolean, msg: FlightSnapshot): FlightSnapshot.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FlightSnapshot, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FlightSnapshot;
  static deserializeBinaryFromReader(message: FlightSnapshot, reader: jspb.BinaryReader): FlightSnapshot;
}

export namespace FlightSnapshot {
  export type AsObject = {
    vesselid: string,
    gforce: number,
    meanaltitude: number,
    surfacealtitude: number,
    bedrockaltitude: number,
    elevation: number,
    latitude: number,
    longitude: number,
    surfacespeed: number,
    horizontalspeed: number,
    verticalspeed: number,
    pitch: number,
    yaw: number,
    roll: number,
    atmospheredensity: number,
    dynamicpressure: number,
    staticpressureatmsl: number,
    staticpressure: number,
    speedofsound: number,
    mach: number,
    trueairspeed: number,
    angleofattack: number,
    totalairtemperature: number,
    staticairtemperature: number,
    orbitspeed: number,
    missiontime: number,
    sideslipangle: number,
    surfacevelocityprograde?: Vector3d.AsObject,
    orbitalvelocityprograde?: Vector3d.AsObject,
    navballangles?: Vector3d.AsObject,
    externaltemperature: number,
    twractual: number,
    twrmaxthrust: number,
    twrmaxthrustnolimit: number,
    dragforce: number,
    liftforce: number,
    terminalvelocity: number,
    liftupforce: number,
    attitudeinfo?: AttitudeInfo.AsObject,
    ut: number,
    navmode: string,
    stallfraction: number,
    dragcoefficient: number,
    liftcoefficient: number,
    ballisticcoefficient: number,
    tsfc: number,
    reynoldsnumber: number,
    twrdata?: Vector3d.AsObject,
  }
}

export class OrbitSnapshot extends jspb.Message {
  getBodyname(): string;
  setBodyname(value: string): void;

  getApoapsis(): number;
  setApoapsis(value: number): void;

  getPeriapsis(): number;
  setPeriapsis(value: number): void;

  getApoapsisaltitude(): number;
  setApoapsisaltitude(value: number): void;

  getPeriapsisaltitude(): number;
  setPeriapsisaltitude(value: number): void;

  getSemimajoraxis(): number;
  setSemimajoraxis(value: number): void;

  getSemiminoraxis(): number;
  setSemiminoraxis(value: number): void;

  getRadius(): number;
  setRadius(value: number): void;

  getSpeed(): number;
  setSpeed(value: number): void;

  getPeriod(): number;
  setPeriod(value: number): void;

  getTimetoapoapsis(): number;
  setTimetoapoapsis(value: number): void;

  getTimetoperiapsis(): number;
  setTimetoperiapsis(value: number): void;

  getEccentricity(): number;
  setEccentricity(value: number): void;

  getInclination(): number;
  setInclination(value: number): void;

  getLongitudeofascendingnode(): number;
  setLongitudeofascendingnode(value: number): void;

  getArgumentofperiapsis(): number;
  setArgumentofperiapsis(value: number): void;

  getMeananomalyatepoch(): number;
  setMeananomalyatepoch(value: number): void;

  getEpoch(): number;
  setEpoch(value: number): void;

  getMeananomaly(): number;
  setMeananomaly(value: number): void;

  getEccentricanomaly(): number;
  setEccentricanomaly(value: number): void;

  getTrueanomaly(): number;
  setTrueanomaly(value: number): void;

  getTimetosoichange(): number;
  setTimetosoichange(value: number): void;

  getOrbitalspeed(): number;
  setOrbitalspeed(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OrbitSnapshot.AsObject;
  static toObject(includeInstance: boolean, msg: OrbitSnapshot): OrbitSnapshot.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OrbitSnapshot, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OrbitSnapshot;
  static deserializeBinaryFromReader(message: OrbitSnapshot, reader: jspb.BinaryReader): OrbitSnapshot;
}

export namespace OrbitSnapshot {
  export type AsObject = {
    bodyname: string,
    apoapsis: number,
    periapsis: number,
    apoapsisaltitude: number,
    periapsisaltitude: number,
    semimajoraxis: number,
    semiminoraxis: number,
    radius: number,
    speed: number,
    period: number,
    timetoapoapsis: number,
    timetoperiapsis: number,
    eccentricity: number,
    inclination: number,
    longitudeofascendingnode: number,
    argumentofperiapsis: number,
    meananomalyatepoch: number,
    epoch: number,
    meananomaly: number,
    eccentricanomaly: number,
    trueanomaly: number,
    timetosoichange: number,
    orbitalspeed: number,
  }
}

export class WheelSnapshot extends jspb.Message {
  getState(): WheelSnapshot.WheelStateMap[keyof WheelSnapshot.WheelStateMap];
  setState(value: WheelSnapshot.WheelStateMap[keyof WheelSnapshot.WheelStateMap]): void;

  getGrounded(): boolean;
  setGrounded(value: boolean): void;

  getDeployed(): boolean;
  setDeployed(value: boolean): void;

  getPowered(): boolean;
  setPowered(value: boolean): void;

  getMotorenabled(): boolean;
  setMotorenabled(value: boolean): void;

  getMotorstate(): WheelSnapshot.MotorStateMap[keyof WheelSnapshot.MotorStateMap];
  setMotorstate(value: WheelSnapshot.MotorStateMap[keyof WheelSnapshot.MotorStateMap]): void;

  getMotoroutput(): number;
  setMotoroutput(value: number): void;

  getInverted(): boolean;
  setInverted(value: boolean): void;

  getTractioncontrolenabled(): boolean;
  setTractioncontrolenabled(value: boolean): void;

  getTractioncontrol(): number;
  setTractioncontrol(value: number): void;

  getDrivelimiter(): number;
  setDrivelimiter(value: number): void;

  getAutofrictioncontrolenabled(): boolean;
  setAutofrictioncontrolenabled(value: boolean): void;

  getManualfrictioncontrol(): number;
  setManualfrictioncontrol(value: number): void;

  getSteeringenabled(): boolean;
  setSteeringenabled(value: boolean): void;

  getSteeringinverted(): boolean;
  setSteeringinverted(value: boolean): void;

  getBroken(): boolean;
  setBroken(value: boolean): void;

  getStress(): number;
  setStress(value: number): void;

  getStresspercentage(): number;
  setStresspercentage(value: number): void;

  getDeflection(): number;
  setDeflection(value: number): void;

  getSlip(): number;
  setSlip(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WheelSnapshot.AsObject;
  static toObject(includeInstance: boolean, msg: WheelSnapshot): WheelSnapshot.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: WheelSnapshot, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WheelSnapshot;
  static deserializeBinaryFromReader(message: WheelSnapshot, reader: jspb.BinaryReader): WheelSnapshot;
}

export namespace WheelSnapshot {
  export type AsObject = {
    state: WheelSnapshot.WheelStateMap[keyof WheelSnapshot.WheelStateMap],
    grounded: boolean,
    deployed: boolean,
    powered: boolean,
    motorenabled: boolean,
    motorstate: WheelSnapshot.MotorStateMap[keyof WheelSnapshot.MotorStateMap],
    motoroutput: number,
    inverted: boolean,
    tractioncontrolenabled: boolean,
    tractioncontrol: number,
    drivelimiter: number,
    autofrictioncontrolenabled: boolean,
    manualfrictioncontrol: number,
    steeringenabled: boolean,
    steeringinverted: boolean,
    broken: boolean,
    stress: number,
    stresspercentage: number,
    deflection: number,
    slip: number,
  }

  export interface WheelTypeMap {
    FREE: 0;
    MOTORIZED: 1;
    LEG: 2;
  }

  export const WheelType: WheelTypeMap;

  export interface WheelStateMap {
    RETRACTED: 0;
    DEPLOYED: 1;
    RETRACTING: 2;
    DEPLOYING: 3;
    BROKEN: 4;
  }

  export const WheelState: WheelStateMap;

  export interface MotorStateMap {
    INOPERABLE: 0;
    NOTENOUGHRESOURCES: 11;
    DISABLED: 2;
    IDLE: 3;
    RUNNING: 4;
  }

  export const MotorState: MotorStateMap;
}

export class SolarPanelSnapshot extends jspb.Message {
  getState(): SolarPanelSnapshot.SolarPanelStateMap[keyof SolarPanelSnapshot.SolarPanelStateMap];
  setState(value: SolarPanelSnapshot.SolarPanelStateMap[keyof SolarPanelSnapshot.SolarPanelStateMap]): void;

  getDeployed(): boolean;
  setDeployed(value: boolean): void;

  getEnergyflow(): number;
  setEnergyflow(value: number): void;

  getSunexposure(): number;
  setSunexposure(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SolarPanelSnapshot.AsObject;
  static toObject(includeInstance: boolean, msg: SolarPanelSnapshot): SolarPanelSnapshot.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SolarPanelSnapshot, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SolarPanelSnapshot;
  static deserializeBinaryFromReader(message: SolarPanelSnapshot, reader: jspb.BinaryReader): SolarPanelSnapshot;
}

export namespace SolarPanelSnapshot {
  export type AsObject = {
    state: SolarPanelSnapshot.SolarPanelStateMap[keyof SolarPanelSnapshot.SolarPanelStateMap],
    deployed: boolean,
    energyflow: number,
    sunexposure: number,
  }

  export interface SolarPanelStateMap {
    RETRACTED: 0;
    EXTENDED: 1;
    RETRACTING: 2;
    EXTENDING: 3;
    BROKEN: 4;
  }

  export const SolarPanelState: SolarPanelStateMap;
}

export class SensorSnapshot extends jspb.Message {
  getActivated(): boolean;
  setActivated(value: boolean): void;

  getReading(): string;
  setReading(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SensorSnapshot.AsObject;
  static toObject(includeInstance: boolean, msg: SensorSnapshot): SensorSnapshot.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SensorSnapshot, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SensorSnapshot;
  static deserializeBinaryFromReader(message: SensorSnapshot, reader: jspb.BinaryReader): SensorSnapshot;
}

export namespace SensorSnapshot {
  export type AsObject = {
    activated: boolean,
    reading: string,
  }
}

export class ResourceHarvesterSnapshot extends jspb.Message {
  getState(): ResourceHarvesterSnapshot.ResourceHarvesterStateMap[keyof ResourceHarvesterSnapshot.ResourceHarvesterStateMap];
  setState(value: ResourceHarvesterSnapshot.ResourceHarvesterStateMap[keyof ResourceHarvesterSnapshot.ResourceHarvesterStateMap]): void;

  getDeployed(): boolean;
  setDeployed(value: boolean): void;

  getActivated(): boolean;
  setActivated(value: boolean): void;

  getExtractionrate(): number;
  setExtractionrate(value: number): void;

  getThermalefficiency(): number;
  setThermalefficiency(value: number): void;

  getCoretemperature(): number;
  setCoretemperature(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResourceHarvesterSnapshot.AsObject;
  static toObject(includeInstance: boolean, msg: ResourceHarvesterSnapshot): ResourceHarvesterSnapshot.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ResourceHarvesterSnapshot, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResourceHarvesterSnapshot;
  static deserializeBinaryFromReader(message: ResourceHarvesterSnapshot, reader: jspb.BinaryReader): ResourceHarvesterSnapshot;
}

export namespace ResourceHarvesterSnapshot {
  export type AsObject = {
    state: ResourceHarvesterSnapshot.ResourceHarvesterStateMap[keyof ResourceHarvesterSnapshot.ResourceHarvesterStateMap],
    deployed: boolean,
    activated: boolean,
    extractionrate: number,
    thermalefficiency: number,
    coretemperature: number,
  }

  export interface ResourceHarvesterStateMap {
    RETRACTED: 0;
    DEPLOYED: 1;
    RETRACTING: 2;
    DEPLOYING: 3;
    ACTIVE: 4;
  }

  export const ResourceHarvesterState: ResourceHarvesterStateMap;
}

export class ConverterSnapshot extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getState(): ConverterSnapshot.ResourceConverterStateMap[keyof ConverterSnapshot.ResourceConverterStateMap];
  setState(value: ConverterSnapshot.ResourceConverterStateMap[keyof ConverterSnapshot.ResourceConverterStateMap]): void;

  getThermalefficiency(): number;
  setThermalefficiency(value: number): void;

  getCoretemperature(): number;
  setCoretemperature(value: number): void;

  getActive(): boolean;
  setActive(value: boolean): void;

  getStatus(): string;
  setStatus(value: string): void;

  getOverheating(): boolean;
  setOverheating(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConverterSnapshot.AsObject;
  static toObject(includeInstance: boolean, msg: ConverterSnapshot): ConverterSnapshot.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ConverterSnapshot, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConverterSnapshot;
  static deserializeBinaryFromReader(message: ConverterSnapshot, reader: jspb.BinaryReader): ConverterSnapshot;
}

export namespace ConverterSnapshot {
  export type AsObject = {
    name: string,
    state: ConverterSnapshot.ResourceConverterStateMap[keyof ConverterSnapshot.ResourceConverterStateMap],
    thermalefficiency: number,
    coretemperature: number,
    active: boolean,
    status: string,
    overheating: boolean,
  }

  export interface ResourceConverterStateMap {
    UNKNOWN: 0;
    RUNNING: 1;
    IDLE: 2;
    MISSINGRESOURCE: 3;
    STORAGEFULL: 4;
    CAPACITY: 5;
  }

  export const ResourceConverterState: ResourceConverterStateMap;
}

export class ResourceConverterSnapshot extends jspb.Message {
  getConvertersMap(): jspb.Map<string, ConverterSnapshot>;
  clearConvertersMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResourceConverterSnapshot.AsObject;
  static toObject(includeInstance: boolean, msg: ResourceConverterSnapshot): ResourceConverterSnapshot.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ResourceConverterSnapshot, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResourceConverterSnapshot;
  static deserializeBinaryFromReader(message: ResourceConverterSnapshot, reader: jspb.BinaryReader): ResourceConverterSnapshot;
}

export namespace ResourceConverterSnapshot {
  export type AsObject = {
    convertersMap: Array<[string, ConverterSnapshot.AsObject]>,
  }
}

export class ReactionWheelSnapshot extends jspb.Message {
  getState(): ReactionWheelSnapshot.ReactionWheelStateMap[keyof ReactionWheelSnapshot.ReactionWheelStateMap];
  setState(value: ReactionWheelSnapshot.ReactionWheelStateMap[keyof ReactionWheelSnapshot.ReactionWheelStateMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReactionWheelSnapshot.AsObject;
  static toObject(includeInstance: boolean, msg: ReactionWheelSnapshot): ReactionWheelSnapshot.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ReactionWheelSnapshot, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReactionWheelSnapshot;
  static deserializeBinaryFromReader(message: ReactionWheelSnapshot, reader: jspb.BinaryReader): ReactionWheelSnapshot;
}

export namespace ReactionWheelSnapshot {
  export type AsObject = {
    state: ReactionWheelSnapshot.ReactionWheelStateMap[keyof ReactionWheelSnapshot.ReactionWheelStateMap],
  }

  export interface ReactionWheelStateMap {
    ACTIVE: 0;
    DISABLED: 1;
    BROKEN: 2;
  }

  export const ReactionWheelState: ReactionWheelStateMap;
}

export class RCSSnapshot extends jspb.Message {
  getEnabled(): boolean;
  setEnabled(value: boolean): void;

  getThrustlimit(): number;
  setThrustlimit(value: number): void;

  getPitchenabled(): boolean;
  setPitchenabled(value: boolean): void;

  getYawenabled(): boolean;
  setYawenabled(value: boolean): void;

  getRollenabled(): boolean;
  setRollenabled(value: boolean): void;

  getUpenabled(): boolean;
  setUpenabled(value: boolean): void;

  getForwardenabled(): boolean;
  setForwardenabled(value: boolean): void;

  getRightenabled(): boolean;
  setRightenabled(value: boolean): void;

  getHasfuel(): boolean;
  setHasfuel(value: boolean): void;

  getPropellantinfoMap(): jspb.Map<string, Propellant>;
  clearPropellantinfoMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RCSSnapshot.AsObject;
  static toObject(includeInstance: boolean, msg: RCSSnapshot): RCSSnapshot.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RCSSnapshot, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RCSSnapshot;
  static deserializeBinaryFromReader(message: RCSSnapshot, reader: jspb.BinaryReader): RCSSnapshot;
}

export namespace RCSSnapshot {
  export type AsObject = {
    enabled: boolean,
    thrustlimit: number,
    pitchenabled: boolean,
    yawenabled: boolean,
    rollenabled: boolean,
    upenabled: boolean,
    forwardenabled: boolean,
    rightenabled: boolean,
    hasfuel: boolean,
    propellantinfoMap: Array<[string, Propellant.AsObject]>,
  }
}

export class RadiatorSnapshot extends jspb.Message {
  getState(): RadiatorSnapshot.RadiatorStateMap[keyof RadiatorSnapshot.RadiatorStateMap];
  setState(value: RadiatorSnapshot.RadiatorStateMap[keyof RadiatorSnapshot.RadiatorStateMap]): void;

  getDeployed(): boolean;
  setDeployed(value: boolean): void;

  getCooling(): boolean;
  setCooling(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RadiatorSnapshot.AsObject;
  static toObject(includeInstance: boolean, msg: RadiatorSnapshot): RadiatorSnapshot.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RadiatorSnapshot, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RadiatorSnapshot;
  static deserializeBinaryFromReader(message: RadiatorSnapshot, reader: jspb.BinaryReader): RadiatorSnapshot;
}

export namespace RadiatorSnapshot {
  export type AsObject = {
    state: RadiatorSnapshot.RadiatorStateMap[keyof RadiatorSnapshot.RadiatorStateMap],
    deployed: boolean,
    cooling: boolean,
  }

  export interface RadiatorStateMap {
    RETRACTED: 0;
    EXTENDED: 1;
    RETRACTING: 2;
    EXTENDING: 3;
    BROKEN: 4;
  }

  export const RadiatorState: RadiatorStateMap;
}

export class ParachuteSnapshot extends jspb.Message {
  getState(): ParachuteSnapshot.ParachuteStateMap[keyof ParachuteSnapshot.ParachuteStateMap];
  setState(value: ParachuteSnapshot.ParachuteStateMap[keyof ParachuteSnapshot.ParachuteStateMap]): void;

  getDeployed(): boolean;
  setDeployed(value: boolean): void;

  getDeployaltitude(): number;
  setDeployaltitude(value: number): void;

  getDeployminpressure(): number;
  setDeployminpressure(value: number): void;

  getDeploymentsafestate(): ParachuteSnapshot.DeploymentSafeStateMap[keyof ParachuteSnapshot.DeploymentSafeStateMap];
  setDeploymentsafestate(value: ParachuteSnapshot.DeploymentSafeStateMap[keyof ParachuteSnapshot.DeploymentSafeStateMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ParachuteSnapshot.AsObject;
  static toObject(includeInstance: boolean, msg: ParachuteSnapshot): ParachuteSnapshot.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ParachuteSnapshot, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ParachuteSnapshot;
  static deserializeBinaryFromReader(message: ParachuteSnapshot, reader: jspb.BinaryReader): ParachuteSnapshot;
}

export namespace ParachuteSnapshot {
  export type AsObject = {
    state: ParachuteSnapshot.ParachuteStateMap[keyof ParachuteSnapshot.ParachuteStateMap],
    deployed: boolean,
    deployaltitude: number,
    deployminpressure: number,
    deploymentsafestate: ParachuteSnapshot.DeploymentSafeStateMap[keyof ParachuteSnapshot.DeploymentSafeStateMap],
  }

  export interface ParachuteStateMap {
    STOWED: 0;
    ACTIVE: 1;
    SEMIDEPLOYED: 2;
    DEPLOYED: 3;
    CUT: 4;
  }

  export const ParachuteState: ParachuteStateMap;

  export interface DeploymentSafeStateMap {
    SAFE: 0;
    RISKY: 1;
    UNSAFE: 2;
    NONE: 3;
  }

  export const DeploymentSafeState: DeploymentSafeStateMap;
}

export class LightSnapshot extends jspb.Message {
  getOn(): boolean;
  setOn(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LightSnapshot.AsObject;
  static toObject(includeInstance: boolean, msg: LightSnapshot): LightSnapshot.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LightSnapshot, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LightSnapshot;
  static deserializeBinaryFromReader(message: LightSnapshot, reader: jspb.BinaryReader): LightSnapshot;
}

export namespace LightSnapshot {
  export type AsObject = {
    on: boolean,
  }
}

export class LegSnapshot extends jspb.Message {
  getState(): LegSnapshot.LegStateMap[keyof LegSnapshot.LegStateMap];
  setState(value: LegSnapshot.LegStateMap[keyof LegSnapshot.LegStateMap]): void;

  getDeployed(): boolean;
  setDeployed(value: boolean): void;

  getGrounded(): boolean;
  setGrounded(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LegSnapshot.AsObject;
  static toObject(includeInstance: boolean, msg: LegSnapshot): LegSnapshot.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LegSnapshot, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LegSnapshot;
  static deserializeBinaryFromReader(message: LegSnapshot, reader: jspb.BinaryReader): LegSnapshot;
}

export namespace LegSnapshot {
  export type AsObject = {
    state: LegSnapshot.LegStateMap[keyof LegSnapshot.LegStateMap],
    deployed: boolean,
    grounded: boolean,
  }

  export interface LegStateMap {
    RETRACTED: 0;
    DEPLOYED: 1;
    RETRACTING: 2;
    DEPLOYING: 3;
    BROKEN: 4;
  }

  export const LegState: LegStateMap;
}

export class IntakeSnapshot extends jspb.Message {
  getOpen(): boolean;
  setOpen(value: boolean): void;

  getSpeed(): number;
  setSpeed(value: number): void;

  getFlow(): number;
  setFlow(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IntakeSnapshot.AsObject;
  static toObject(includeInstance: boolean, msg: IntakeSnapshot): IntakeSnapshot.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: IntakeSnapshot, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IntakeSnapshot;
  static deserializeBinaryFromReader(message: IntakeSnapshot, reader: jspb.BinaryReader): IntakeSnapshot;
}

export namespace IntakeSnapshot {
  export type AsObject = {
    open: boolean,
    speed: number,
    flow: number,
  }
}

export class FairingSnapshot extends jspb.Message {
  getJettisoned(): boolean;
  setJettisoned(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FairingSnapshot.AsObject;
  static toObject(includeInstance: boolean, msg: FairingSnapshot): FairingSnapshot.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FairingSnapshot, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FairingSnapshot;
  static deserializeBinaryFromReader(message: FairingSnapshot, reader: jspb.BinaryReader): FairingSnapshot;
}

export namespace FairingSnapshot {
  export type AsObject = {
    jettisoned: boolean,
  }
}

export class Propellant extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getCurrentamount(): number;
  setCurrentamount(value: number): void;

  getCurrentrequirement(): number;
  setCurrentrequirement(value: number): void;

  getTotalresourceavailable(): number;
  setTotalresourceavailable(value: number): void;

  getTotalresourcecapacity(): number;
  setTotalresourcecapacity(value: number): void;

  getIsdeprived(): boolean;
  setIsdeprived(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Propellant.AsObject;
  static toObject(includeInstance: boolean, msg: Propellant): Propellant.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Propellant, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Propellant;
  static deserializeBinaryFromReader(message: Propellant, reader: jspb.BinaryReader): Propellant;
}

export namespace Propellant {
  export type AsObject = {
    name: string,
    currentamount: number,
    currentrequirement: number,
    totalresourceavailable: number,
    totalresourcecapacity: number,
    isdeprived: boolean,
  }
}

export class EngineSnapshot extends jspb.Message {
  getActive(): boolean;
  setActive(value: boolean): void;

  getThrust(): number;
  setThrust(value: number): void;

  getThrustpercentage(): number;
  setThrustpercentage(value: number): void;

  getThrottle(): number;
  setThrottle(value: number): void;

  getSpecificimpulse(): number;
  setSpecificimpulse(value: number): void;

  getVacuumspecificimpulse(): number;
  setVacuumspecificimpulse(value: number): void;

  getPropellantinfoMap(): jspb.Map<string, Propellant>;
  clearPropellantinfoMap(): void;
  getHasfuel(): boolean;
  setHasfuel(value: boolean): void;

  getMode(): string;
  setMode(value: string): void;

  getAutoswitchmode(): boolean;
  setAutoswitchmode(value: boolean): void;

  getGimballimit(): number;
  setGimballimit(value: number): void;

  getFlameout(): boolean;
  setFlameout(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EngineSnapshot.AsObject;
  static toObject(includeInstance: boolean, msg: EngineSnapshot): EngineSnapshot.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EngineSnapshot, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EngineSnapshot;
  static deserializeBinaryFromReader(message: EngineSnapshot, reader: jspb.BinaryReader): EngineSnapshot;
}

export namespace EngineSnapshot {
  export type AsObject = {
    active: boolean,
    thrust: number,
    thrustpercentage: number,
    throttle: number,
    specificimpulse: number,
    vacuumspecificimpulse: number,
    propellantinfoMap: Array<[string, Propellant.AsObject]>,
    hasfuel: boolean,
    mode: string,
    autoswitchmode: boolean,
    gimballimit: number,
    flameout: boolean,
  }
}

export class DockingPortSnapshot extends jspb.Message {
  getState(): DockingPortSnapshot.DockingPortStateMap[keyof DockingPortSnapshot.DockingPortStateMap];
  setState(value: DockingPortSnapshot.DockingPortStateMap[keyof DockingPortSnapshot.DockingPortStateMap]): void;

  getShieled(): boolean;
  setShieled(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DockingPortSnapshot.AsObject;
  static toObject(includeInstance: boolean, msg: DockingPortSnapshot): DockingPortSnapshot.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DockingPortSnapshot, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DockingPortSnapshot;
  static deserializeBinaryFromReader(message: DockingPortSnapshot, reader: jspb.BinaryReader): DockingPortSnapshot;
}

export namespace DockingPortSnapshot {
  export type AsObject = {
    state: DockingPortSnapshot.DockingPortStateMap[keyof DockingPortSnapshot.DockingPortStateMap],
    shieled: boolean,
  }

  export interface DockingPortStateMap {
    READY: 0;
    DOCKED: 1;
    DOCKING: 2;
    UNDOCKING: 3;
    SHIELDED: 4;
    MOVING: 5;
    PREATTACHED: 6;
  }

  export const DockingPortState: DockingPortStateMap;
}

export class DecouplerSnapshot extends jspb.Message {
  getDecoupled(): boolean;
  setDecoupled(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DecouplerSnapshot.AsObject;
  static toObject(includeInstance: boolean, msg: DecouplerSnapshot): DecouplerSnapshot.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DecouplerSnapshot, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DecouplerSnapshot;
  static deserializeBinaryFromReader(message: DecouplerSnapshot, reader: jspb.BinaryReader): DecouplerSnapshot;
}

export namespace DecouplerSnapshot {
  export type AsObject = {
    decoupled: boolean,
  }
}

export class ControlSurfaceSnapshot extends jspb.Message {
  getPitchenabled(): boolean;
  setPitchenabled(value: boolean): void;

  getYawenabled(): boolean;
  setYawenabled(value: boolean): void;

  getRollenabled(): boolean;
  setRollenabled(value: boolean): void;

  getAuthoritylimiter(): number;
  setAuthoritylimiter(value: number): void;

  getDeployed(): boolean;
  setDeployed(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ControlSurfaceSnapshot.AsObject;
  static toObject(includeInstance: boolean, msg: ControlSurfaceSnapshot): ControlSurfaceSnapshot.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ControlSurfaceSnapshot, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ControlSurfaceSnapshot;
  static deserializeBinaryFromReader(message: ControlSurfaceSnapshot, reader: jspb.BinaryReader): ControlSurfaceSnapshot;
}

export namespace ControlSurfaceSnapshot {
  export type AsObject = {
    pitchenabled: boolean,
    yawenabled: boolean,
    rollenabled: boolean,
    authoritylimiter: number,
    deployed: boolean,
  }
}

export class CargoBaySnapshot extends jspb.Message {
  getState(): CargoBaySnapshot.CargoBayStateMap[keyof CargoBaySnapshot.CargoBayStateMap];
  setState(value: CargoBaySnapshot.CargoBayStateMap[keyof CargoBaySnapshot.CargoBayStateMap]): void;

  getDeploypercent(): number;
  setDeploypercent(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CargoBaySnapshot.AsObject;
  static toObject(includeInstance: boolean, msg: CargoBaySnapshot): CargoBaySnapshot.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CargoBaySnapshot, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CargoBaySnapshot;
  static deserializeBinaryFromReader(message: CargoBaySnapshot, reader: jspb.BinaryReader): CargoBaySnapshot;
}

export namespace CargoBaySnapshot {
  export type AsObject = {
    state: CargoBaySnapshot.CargoBayStateMap[keyof CargoBaySnapshot.CargoBayStateMap],
    deploypercent: number,
  }

  export interface CargoBayStateMap {
    CLOSED: 0;
    OPEN: 1;
    CLOSING: 2;
    OPENING: 3;
  }

  export const CargoBayState: CargoBayStateMap;
}

export class AntennaSnapshot extends jspb.Message {
  getState(): AntennaSnapshot.AntennaStateMap[keyof AntennaSnapshot.AntennaStateMap];
  setState(value: AntennaSnapshot.AntennaStateMap[keyof AntennaSnapshot.AntennaStateMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AntennaSnapshot.AsObject;
  static toObject(includeInstance: boolean, msg: AntennaSnapshot): AntennaSnapshot.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AntennaSnapshot, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AntennaSnapshot;
  static deserializeBinaryFromReader(message: AntennaSnapshot, reader: jspb.BinaryReader): AntennaSnapshot;
}

export namespace AntennaSnapshot {
  export type AsObject = {
    state: AntennaSnapshot.AntennaStateMap[keyof AntennaSnapshot.AntennaStateMap],
  }

  export interface AntennaStateMap {
    RETRACTED: 0;
    EXTENDED: 1;
    RETRACTING: 2;
    EXTENDING: 3;
    BROKEN: 4;
  }

  export const AntennaState: AntennaStateMap;
}

export class PartSnapshot extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getMass(): number;
  setMass(value: number): void;

  getShielded(): boolean;
  setShielded(value: boolean): void;

  getTemperature(): number;
  setTemperature(value: number): void;

  getSkintemperature(): number;
  setSkintemperature(value: number): void;

  hasAntenna(): boolean;
  clearAntenna(): void;
  getAntenna(): AntennaSnapshot | undefined;
  setAntenna(value?: AntennaSnapshot): void;

  hasCargobay(): boolean;
  clearCargobay(): void;
  getCargobay(): CargoBaySnapshot | undefined;
  setCargobay(value?: CargoBaySnapshot): void;

  hasControlsurface(): boolean;
  clearControlsurface(): void;
  getControlsurface(): ControlSurfaceSnapshot | undefined;
  setControlsurface(value?: ControlSurfaceSnapshot): void;

  hasDecoupler(): boolean;
  clearDecoupler(): void;
  getDecoupler(): DecouplerSnapshot | undefined;
  setDecoupler(value?: DecouplerSnapshot): void;

  hasDockingport(): boolean;
  clearDockingport(): void;
  getDockingport(): DockingPortSnapshot | undefined;
  setDockingport(value?: DockingPortSnapshot): void;

  hasEngine(): boolean;
  clearEngine(): void;
  getEngine(): EngineSnapshot | undefined;
  setEngine(value?: EngineSnapshot): void;

  hasFairing(): boolean;
  clearFairing(): void;
  getFairing(): FairingSnapshot | undefined;
  setFairing(value?: FairingSnapshot): void;

  hasIntake(): boolean;
  clearIntake(): void;
  getIntake(): IntakeSnapshot | undefined;
  setIntake(value?: IntakeSnapshot): void;

  hasLeg(): boolean;
  clearLeg(): void;
  getLeg(): LegSnapshot | undefined;
  setLeg(value?: LegSnapshot): void;

  hasLight(): boolean;
  clearLight(): void;
  getLight(): LightSnapshot | undefined;
  setLight(value?: LightSnapshot): void;

  hasParachute(): boolean;
  clearParachute(): void;
  getParachute(): ParachuteSnapshot | undefined;
  setParachute(value?: ParachuteSnapshot): void;

  hasRadiator(): boolean;
  clearRadiator(): void;
  getRadiator(): RadiatorSnapshot | undefined;
  setRadiator(value?: RadiatorSnapshot): void;

  hasRcs(): boolean;
  clearRcs(): void;
  getRcs(): RCSSnapshot | undefined;
  setRcs(value?: RCSSnapshot): void;

  hasReactionwheel(): boolean;
  clearReactionwheel(): void;
  getReactionwheel(): ReactionWheelSnapshot | undefined;
  setReactionwheel(value?: ReactionWheelSnapshot): void;

  hasResourceconverter(): boolean;
  clearResourceconverter(): void;
  getResourceconverter(): ResourceConverterSnapshot | undefined;
  setResourceconverter(value?: ResourceConverterSnapshot): void;

  hasResourceharvester(): boolean;
  clearResourceharvester(): void;
  getResourceharvester(): ResourceHarvesterSnapshot | undefined;
  setResourceharvester(value?: ResourceHarvesterSnapshot): void;

  hasSensor(): boolean;
  clearSensor(): void;
  getSensor(): SensorSnapshot | undefined;
  setSensor(value?: SensorSnapshot): void;

  hasSolarpanel(): boolean;
  clearSolarpanel(): void;
  getSolarpanel(): SolarPanelSnapshot | undefined;
  setSolarpanel(value?: SolarPanelSnapshot): void;

  hasWheel(): boolean;
  clearWheel(): void;
  getWheel(): WheelSnapshot | undefined;
  setWheel(value?: WheelSnapshot): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PartSnapshot.AsObject;
  static toObject(includeInstance: boolean, msg: PartSnapshot): PartSnapshot.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PartSnapshot, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PartSnapshot;
  static deserializeBinaryFromReader(message: PartSnapshot, reader: jspb.BinaryReader): PartSnapshot;
}

export namespace PartSnapshot {
  export type AsObject = {
    name: string,
    mass: number,
    shielded: boolean,
    temperature: number,
    skintemperature: number,
    antenna?: AntennaSnapshot.AsObject,
    cargobay?: CargoBaySnapshot.AsObject,
    controlsurface?: ControlSurfaceSnapshot.AsObject,
    decoupler?: DecouplerSnapshot.AsObject,
    dockingport?: DockingPortSnapshot.AsObject,
    engine?: EngineSnapshot.AsObject,
    fairing?: FairingSnapshot.AsObject,
    intake?: IntakeSnapshot.AsObject,
    leg?: LegSnapshot.AsObject,
    light?: LightSnapshot.AsObject,
    parachute?: ParachuteSnapshot.AsObject,
    radiator?: RadiatorSnapshot.AsObject,
    rcs?: RCSSnapshot.AsObject,
    reactionwheel?: ReactionWheelSnapshot.AsObject,
    resourceconverter?: ResourceConverterSnapshot.AsObject,
    resourceharvester?: ResourceHarvesterSnapshot.AsObject,
    sensor?: SensorSnapshot.AsObject,
    solarpanel?: SolarPanelSnapshot.AsObject,
    wheel?: WheelSnapshot.AsObject,
  }
}

export class SnapshotResponse extends jspb.Message {
  hasVessel(): boolean;
  clearVessel(): void;
  getVessel(): VesselSnapshot | undefined;
  setVessel(value?: VesselSnapshot): void;

  hasFlight(): boolean;
  clearFlight(): void;
  getFlight(): FlightSnapshot | undefined;
  setFlight(value?: FlightSnapshot): void;

  hasOrbit(): boolean;
  clearOrbit(): void;
  getOrbit(): OrbitSnapshot | undefined;
  setOrbit(value?: OrbitSnapshot): void;

  getPartsMap(): jspb.Map<number, PartSnapshot>;
  clearPartsMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SnapshotResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SnapshotResponse): SnapshotResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SnapshotResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SnapshotResponse;
  static deserializeBinaryFromReader(message: SnapshotResponse, reader: jspb.BinaryReader): SnapshotResponse;
}

export namespace SnapshotResponse {
  export type AsObject = {
    vessel?: VesselSnapshot.AsObject,
    flight?: FlightSnapshot.AsObject,
    orbit?: OrbitSnapshot.AsObject,
    partsMap: Array<[number, PartSnapshot.AsObject]>,
  }
}

