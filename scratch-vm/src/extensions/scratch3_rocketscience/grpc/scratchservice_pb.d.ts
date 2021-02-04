// package: 
// file: scratchservice.proto

import * as jspb from "google-protobuf";
import * as observor_pb from "./observor_pb";
import * as apimessage_pb from "./apimessage_pb";

export class Vessel extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getName(): string;
  setName(value: string): void;

  getType(): VesselTypeMap[keyof VesselTypeMap];
  setType(value: VesselTypeMap[keyof VesselTypeMap]): void;

  getSituation(): observor_pb.VesselSnapshot.VesselSituationMap[keyof observor_pb.VesselSnapshot.VesselSituationMap];
  setSituation(value: observor_pb.VesselSnapshot.VesselSituationMap[keyof observor_pb.VesselSnapshot.VesselSituationMap]): void;

  getMet(): number;
  setMet(value: number): void;

  getStage(): number;
  setStage(value: number): void;

  getBiome(): string;
  setBiome(value: string): void;

  getRecoverable(): boolean;
  setRecoverable(value: boolean): void;

  getCrewcapacity(): number;
  setCrewcapacity(value: number): void;

  getCrewcount(): number;
  setCrewcount(value: number): void;

  getMass(): number;
  setMass(value: number): void;

  getDrymass(): number;
  setDrymass(value: number): void;

  getOrbitingbody(): string;
  setOrbitingbody(value: string): void;

  getSasmode(): observor_pb.VesselSnapshot.SASModeMap[keyof observor_pb.VesselSnapshot.SASModeMap];
  setSasmode(value: observor_pb.VesselSnapshot.SASModeMap[keyof observor_pb.VesselSnapshot.SASModeMap]): void;

  getTotalresourcesMap(): jspb.Map<string, observor_pb.VesselResource>;
  clearTotalresourcesMap(): void;
  getStageresourcesMap(): jspb.Map<string, observor_pb.VesselResource>;
  clearStageresourcesMap(): void;
  hasOrbit(): boolean;
  clearOrbit(): void;
  getOrbit(): Orbit | undefined;
  setOrbit(value?: Orbit): void;

  getLaunchtime(): number;
  setLaunchtime(value: number): void;

  getTargetname(): string;
  setTargetname(value: string): void;

  getTargetvesselid(): string;
  setTargetvesselid(value: string): void;

  getTargetpartid(): number;
  setTargetpartid(value: number): void;

  hasTargetdirection(): boolean;
  clearTargetdirection(): void;
  getTargetdirection(): observor_pb.Vector3d | undefined;
  setTargetdirection(value?: observor_pb.Vector3d): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Vessel.AsObject;
  static toObject(includeInstance: boolean, msg: Vessel): Vessel.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Vessel, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Vessel;
  static deserializeBinaryFromReader(message: Vessel, reader: jspb.BinaryReader): Vessel;
}

export namespace Vessel {
  export type AsObject = {
    id: string,
    name: string,
    type: VesselTypeMap[keyof VesselTypeMap],
    situation: observor_pb.VesselSnapshot.VesselSituationMap[keyof observor_pb.VesselSnapshot.VesselSituationMap],
    met: number,
    stage: number,
    biome: string,
    recoverable: boolean,
    crewcapacity: number,
    crewcount: number,
    mass: number,
    drymass: number,
    orbitingbody: string,
    sasmode: observor_pb.VesselSnapshot.SASModeMap[keyof observor_pb.VesselSnapshot.SASModeMap],
    totalresourcesMap: Array<[string, observor_pb.VesselResource.AsObject]>,
    stageresourcesMap: Array<[string, observor_pb.VesselResource.AsObject]>,
    orbit?: Orbit.AsObject,
    launchtime: number,
    targetname: string,
    targetvesselid: string,
    targetpartid: number,
    targetdirection?: observor_pb.Vector3d.AsObject,
  }
}

export class Orbit extends jspb.Message {
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

  hasNextorbit(): boolean;
  clearNextorbit(): void;
  getNextorbit(): Orbit | undefined;
  setNextorbit(value?: Orbit): void;

  getOrbitalspeed(): number;
  setOrbitalspeed(value: number): void;

  getType(): OrbitTypeMap[keyof OrbitTypeMap];
  setType(value: OrbitTypeMap[keyof OrbitTypeMap]): void;

  getTimetoan(): number;
  setTimetoan(value: number): void;

  getTimetodn(): number;
  setTimetodn(value: number): void;

  getStarttransitiontype(): OrbitTransitionTypeMap[keyof OrbitTransitionTypeMap];
  setStarttransitiontype(value: OrbitTransitionTypeMap[keyof OrbitTransitionTypeMap]): void;

  getEndtransitiontype(): OrbitTransitionTypeMap[keyof OrbitTransitionTypeMap];
  setEndtransitiontype(value: OrbitTransitionTypeMap[keyof OrbitTransitionTypeMap]): void;

  getTimetosoichange(): number;
  setTimetosoichange(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Orbit.AsObject;
  static toObject(includeInstance: boolean, msg: Orbit): Orbit.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Orbit, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Orbit;
  static deserializeBinaryFromReader(message: Orbit, reader: jspb.BinaryReader): Orbit;
}

export namespace Orbit {
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
    nextorbit?: Orbit.AsObject,
    orbitalspeed: number,
    type: OrbitTypeMap[keyof OrbitTypeMap],
    timetoan: number,
    timetodn: number,
    starttransitiontype: OrbitTransitionTypeMap[keyof OrbitTransitionTypeMap],
    endtransitiontype: OrbitTransitionTypeMap[keyof OrbitTransitionTypeMap],
    timetosoichange: number,
  }
}

export class CelestialBody extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  clearSatellitesList(): void;
  getSatellitesList(): Array<CelestialBody>;
  setSatellitesList(value: Array<CelestialBody>): void;
  addSatellites(value?: CelestialBody, index?: number): CelestialBody;

  getMass(): number;
  setMass(value: number): void;

  getGravitationalparameter(): number;
  setGravitationalparameter(value: number): void;

  getSurfacegravity(): number;
  setSurfacegravity(value: number): void;

  getRotationalperiod(): number;
  setRotationalperiod(value: number): void;

  getRotationalspeed(): number;
  setRotationalspeed(value: number): void;

  getRotationangle(): number;
  setRotationangle(value: number): void;

  getInitialrotation(): number;
  setInitialrotation(value: number): void;

  getEquatorialradius(): number;
  setEquatorialradius(value: number): void;

  getSphereofinfluence(): number;
  setSphereofinfluence(value: number): void;

  hasOrbit(): boolean;
  clearOrbit(): void;
  getOrbit(): Orbit | undefined;
  setOrbit(value?: Orbit): void;

  getHasatmosphere(): boolean;
  setHasatmosphere(value: boolean): void;

  getAtmospheredepth(): number;
  setAtmospheredepth(value: number): void;

  getHasatmosphericoxygen(): boolean;
  setHasatmosphericoxygen(value: boolean): void;

  clearBiomesList(): void;
  getBiomesList(): Array<string>;
  setBiomesList(value: Array<string>): void;
  addBiomes(value: string, index?: number): string;

  getFlyinghighaltitudethreshold(): number;
  setFlyinghighaltitudethreshold(value: number): void;

  getSpacehighaltitudethreshold(): number;
  setSpacehighaltitudethreshold(value: number): void;

  hasAttitudeinfo(): boolean;
  clearAttitudeinfo(): void;
  getAttitudeinfo(): observor_pb.AttitudeInfo | undefined;
  setAttitudeinfo(value?: observor_pb.AttitudeInfo): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CelestialBody.AsObject;
  static toObject(includeInstance: boolean, msg: CelestialBody): CelestialBody.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CelestialBody, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CelestialBody;
  static deserializeBinaryFromReader(message: CelestialBody, reader: jspb.BinaryReader): CelestialBody;
}

export namespace CelestialBody {
  export type AsObject = {
    name: string,
    satellitesList: Array<CelestialBody.AsObject>,
    mass: number,
    gravitationalparameter: number,
    surfacegravity: number,
    rotationalperiod: number,
    rotationalspeed: number,
    rotationangle: number,
    initialrotation: number,
    equatorialradius: number,
    sphereofinfluence: number,
    orbit?: Orbit.AsObject,
    hasatmosphere: boolean,
    atmospheredepth: number,
    hasatmosphericoxygen: boolean,
    biomesList: Array<string>,
    flyinghighaltitudethreshold: number,
    spacehighaltitudethreshold: number,
    attitudeinfo?: observor_pb.AttitudeInfo.AsObject,
  }
}

export class TargetOrbitInfo extends jspb.Message {
  getClosestapproachtime(): number;
  setClosestapproachtime(value: number): void;

  getTimetoclosestapproach(): number;
  setTimetoclosestapproach(value: number): void;

  getClosestapproachdistance(): number;
  setClosestapproachdistance(value: number): void;

  getTrueanomalyatan(): number;
  setTrueanomalyatan(value: number): void;

  getTimetotargetan(): number;
  setTimetotargetan(value: number): void;

  getTrueanomalyatdn(): number;
  setTrueanomalyatdn(value: number): void;

  getTimetotargetdn(): number;
  setTimetotargetdn(value: number): void;

  getRelativeinclination(): number;
  setRelativeinclination(value: number): void;

  getTargetrelativespeed(): number;
  setTargetrelativespeed(value: number): void;

  getTargetdistance(): number;
  setTargetdistance(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TargetOrbitInfo.AsObject;
  static toObject(includeInstance: boolean, msg: TargetOrbitInfo): TargetOrbitInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TargetOrbitInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TargetOrbitInfo;
  static deserializeBinaryFromReader(message: TargetOrbitInfo, reader: jspb.BinaryReader): TargetOrbitInfo;
}

export namespace TargetOrbitInfo {
  export type AsObject = {
    closestapproachtime: number,
    timetoclosestapproach: number,
    closestapproachdistance: number,
    trueanomalyatan: number,
    timetotargetan: number,
    trueanomalyatdn: number,
    timetotargetdn: number,
    relativeinclination: number,
    targetrelativespeed: number,
    targetdistance: number,
  }
}

export class GetTargetVesselOrbitInfoResponse extends jspb.Message {
  hasOrbit(): boolean;
  clearOrbit(): void;
  getOrbit(): Orbit | undefined;
  setOrbit(value?: Orbit): void;

  hasTargetorbit(): boolean;
  clearTargetorbit(): void;
  getTargetorbit(): Orbit | undefined;
  setTargetorbit(value?: Orbit): void;

  hasTargetorbitinfo(): boolean;
  clearTargetorbitinfo(): void;
  getTargetorbitinfo(): TargetOrbitInfo | undefined;
  setTargetorbitinfo(value?: TargetOrbitInfo): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTargetVesselOrbitInfoResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetTargetVesselOrbitInfoResponse): GetTargetVesselOrbitInfoResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetTargetVesselOrbitInfoResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetTargetVesselOrbitInfoResponse;
  static deserializeBinaryFromReader(message: GetTargetVesselOrbitInfoResponse, reader: jspb.BinaryReader): GetTargetVesselOrbitInfoResponse;
}

export namespace GetTargetVesselOrbitInfoResponse {
  export type AsObject = {
    orbit?: Orbit.AsObject,
    targetorbit?: Orbit.AsObject,
    targetorbitinfo?: TargetOrbitInfo.AsObject,
  }
}

export class GetTargetBodyOrbitInfoResponse extends jspb.Message {
  hasOrbit(): boolean;
  clearOrbit(): void;
  getOrbit(): Orbit | undefined;
  setOrbit(value?: Orbit): void;

  hasTargetorbit(): boolean;
  clearTargetorbit(): void;
  getTargetorbit(): Orbit | undefined;
  setTargetorbit(value?: Orbit): void;

  hasTargetorbitinfo(): boolean;
  clearTargetorbitinfo(): void;
  getTargetorbitinfo(): TargetOrbitInfo | undefined;
  setTargetorbitinfo(value?: TargetOrbitInfo): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTargetBodyOrbitInfoResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetTargetBodyOrbitInfoResponse): GetTargetBodyOrbitInfoResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetTargetBodyOrbitInfoResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetTargetBodyOrbitInfoResponse;
  static deserializeBinaryFromReader(message: GetTargetBodyOrbitInfoResponse, reader: jspb.BinaryReader): GetTargetBodyOrbitInfoResponse;
}

export namespace GetTargetBodyOrbitInfoResponse {
  export type AsObject = {
    orbit?: Orbit.AsObject,
    targetorbit?: Orbit.AsObject,
    targetorbitinfo?: TargetOrbitInfo.AsObject,
  }
}

export class GetTargetVesselOrbitInfoFromManeuverNodeResponse extends jspb.Message {
  hasNextorbit(): boolean;
  clearNextorbit(): void;
  getNextorbit(): Orbit | undefined;
  setNextorbit(value?: Orbit): void;

  hasTargetorbit(): boolean;
  clearTargetorbit(): void;
  getTargetorbit(): Orbit | undefined;
  setTargetorbit(value?: Orbit): void;

  hasTargetorbitinfo(): boolean;
  clearTargetorbitinfo(): void;
  getTargetorbitinfo(): TargetOrbitInfo | undefined;
  setTargetorbitinfo(value?: TargetOrbitInfo): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTargetVesselOrbitInfoFromManeuverNodeResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetTargetVesselOrbitInfoFromManeuverNodeResponse): GetTargetVesselOrbitInfoFromManeuverNodeResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetTargetVesselOrbitInfoFromManeuverNodeResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetTargetVesselOrbitInfoFromManeuverNodeResponse;
  static deserializeBinaryFromReader(message: GetTargetVesselOrbitInfoFromManeuverNodeResponse, reader: jspb.BinaryReader): GetTargetVesselOrbitInfoFromManeuverNodeResponse;
}

export namespace GetTargetVesselOrbitInfoFromManeuverNodeResponse {
  export type AsObject = {
    nextorbit?: Orbit.AsObject,
    targetorbit?: Orbit.AsObject,
    targetorbitinfo?: TargetOrbitInfo.AsObject,
  }
}

export class GetTargetBodyOrbitInfoFromManeuverNodeResponse extends jspb.Message {
  hasNextorbit(): boolean;
  clearNextorbit(): void;
  getNextorbit(): Orbit | undefined;
  setNextorbit(value?: Orbit): void;

  hasTargetorbit(): boolean;
  clearTargetorbit(): void;
  getTargetorbit(): Orbit | undefined;
  setTargetorbit(value?: Orbit): void;

  hasTargetorbitinfo(): boolean;
  clearTargetorbitinfo(): void;
  getTargetorbitinfo(): TargetOrbitInfo | undefined;
  setTargetorbitinfo(value?: TargetOrbitInfo): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTargetBodyOrbitInfoFromManeuverNodeResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetTargetBodyOrbitInfoFromManeuverNodeResponse): GetTargetBodyOrbitInfoFromManeuverNodeResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetTargetBodyOrbitInfoFromManeuverNodeResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetTargetBodyOrbitInfoFromManeuverNodeResponse;
  static deserializeBinaryFromReader(message: GetTargetBodyOrbitInfoFromManeuverNodeResponse, reader: jspb.BinaryReader): GetTargetBodyOrbitInfoFromManeuverNodeResponse;
}

export namespace GetTargetBodyOrbitInfoFromManeuverNodeResponse {
  export type AsObject = {
    nextorbit?: Orbit.AsObject,
    targetorbit?: Orbit.AsObject,
    targetorbitinfo?: TargetOrbitInfo.AsObject,
  }
}

export class GetTargetDockingPortInfoResponse extends jspb.Message {
  getTargetvesselname(): string;
  setTargetvesselname(value: string): void;

  getTargetpartname(): string;
  setTargetpartname(value: string): void;

  getTargetparttag(): string;
  setTargetparttag(value: string): void;

  hasRelativeangles(): boolean;
  clearRelativeangles(): void;
  getRelativeangles(): observor_pb.Vector3d | undefined;
  setRelativeangles(value?: observor_pb.Vector3d): void;

  hasRelativedistance(): boolean;
  clearRelativedistance(): void;
  getRelativedistance(): observor_pb.Vector3d | undefined;
  setRelativedistance(value?: observor_pb.Vector3d): void;

  hasRelativevelocity(): boolean;
  clearRelativevelocity(): void;
  getRelativevelocity(): observor_pb.Vector3d | undefined;
  setRelativevelocity(value?: observor_pb.Vector3d): void;

  getDistance(): number;
  setDistance(value: number): void;

  getRelativespeed(): number;
  setRelativespeed(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTargetDockingPortInfoResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetTargetDockingPortInfoResponse): GetTargetDockingPortInfoResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetTargetDockingPortInfoResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetTargetDockingPortInfoResponse;
  static deserializeBinaryFromReader(message: GetTargetDockingPortInfoResponse, reader: jspb.BinaryReader): GetTargetDockingPortInfoResponse;
}

export namespace GetTargetDockingPortInfoResponse {
  export type AsObject = {
    targetvesselname: string,
    targetpartname: string,
    targetparttag: string,
    relativeangles?: observor_pb.Vector3d.AsObject,
    relativedistance?: observor_pb.Vector3d.AsObject,
    relativevelocity?: observor_pb.Vector3d.AsObject,
    distance: number,
    relativespeed: number,
  }
}

export class GetVerticalLandingInfoResponse extends jspb.Message {
  getYaw(): number;
  setYaw(value: number): void;

  getPitch(): number;
  setPitch(value: number): void;

  hasVelocity(): boolean;
  clearVelocity(): void;
  getVelocity(): observor_pb.Vector3d | undefined;
  setVelocity(value?: observor_pb.Vector3d): void;

  hasAcceleration(): boolean;
  clearAcceleration(): void;
  getAcceleration(): observor_pb.Vector3d | undefined;
  setAcceleration(value?: observor_pb.Vector3d): void;

  getSurfacealtitude(): number;
  setSurfacealtitude(value: number): void;

  getSurfaceslope(): number;
  setSurfaceslope(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetVerticalLandingInfoResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetVerticalLandingInfoResponse): GetVerticalLandingInfoResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetVerticalLandingInfoResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetVerticalLandingInfoResponse;
  static deserializeBinaryFromReader(message: GetVerticalLandingInfoResponse, reader: jspb.BinaryReader): GetVerticalLandingInfoResponse;
}

export namespace GetVerticalLandingInfoResponse {
  export type AsObject = {
    yaw: number,
    pitch: number,
    velocity?: observor_pb.Vector3d.AsObject,
    acceleration?: observor_pb.Vector3d.AsObject,
    surfacealtitude: number,
    surfaceslope: number,
  }
}

export class GetReentryInfoResponse extends jspb.Message {
  getSurfacealtitude(): number;
  setSurfacealtitude(value: number): void;

  getAirspeed(): number;
  setAirspeed(value: number): void;

  getMach(): number;
  setMach(value: number): void;

  getSurfacespeed(): number;
  setSurfacespeed(value: number): void;

  getTerminalspeed(): number;
  setTerminalspeed(value: number): void;

  getExternaltemperature(): number;
  setExternaltemperature(value: number): void;

  getTotaltemperature(): number;
  setTotaltemperature(value: number): void;

  getStatictemperature(): number;
  setStatictemperature(value: number): void;

  getPodtemperature(): number;
  setPodtemperature(value: number): void;

  getPodskintemperature(): number;
  setPodskintemperature(value: number): void;

  getPodmaxskintemperature(): number;
  setPodmaxskintemperature(value: number): void;

  getShieldtemperature(): number;
  setShieldtemperature(value: number): void;

  getShieldskintemperature(): number;
  setShieldskintemperature(value: number): void;

  getShieldmaxskintemperature(): number;
  setShieldmaxskintemperature(value: number): void;

  getDrag(): number;
  setDrag(value: number): void;

  getDragacc(): number;
  setDragacc(value: number): void;

  hasAblator(): boolean;
  clearAblator(): void;
  getAblator(): observor_pb.VesselResource | undefined;
  setAblator(value?: observor_pb.VesselResource): void;

  getDynamicpressure(): number;
  setDynamicpressure(value: number): void;

  hasAcceleration(): boolean;
  clearAcceleration(): void;
  getAcceleration(): observor_pb.Vector3d | undefined;
  setAcceleration(value?: observor_pb.Vector3d): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetReentryInfoResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetReentryInfoResponse): GetReentryInfoResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetReentryInfoResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetReentryInfoResponse;
  static deserializeBinaryFromReader(message: GetReentryInfoResponse, reader: jspb.BinaryReader): GetReentryInfoResponse;
}

export namespace GetReentryInfoResponse {
  export type AsObject = {
    surfacealtitude: number,
    airspeed: number,
    mach: number,
    surfacespeed: number,
    terminalspeed: number,
    externaltemperature: number,
    totaltemperature: number,
    statictemperature: number,
    podtemperature: number,
    podskintemperature: number,
    podmaxskintemperature: number,
    shieldtemperature: number,
    shieldskintemperature: number,
    shieldmaxskintemperature: number,
    drag: number,
    dragacc: number,
    ablator?: observor_pb.VesselResource.AsObject,
    dynamicpressure: number,
    acceleration?: observor_pb.Vector3d.AsObject,
  }
}

export class GetManeuverNodeInfoResponse extends jspb.Message {
  getUt(): number;
  setUt(value: number): void;

  getUtpe(): number;
  setUtpe(value: number): void;

  getUtap(): number;
  setUtap(value: number): void;

  getUtan(): number;
  setUtan(value: number): void;

  getUtdn(): number;
  setUtdn(value: number): void;

  getUttargetan(): number;
  setUttargetan(value: number): void;

  getUttargetdn(): number;
  setUttargetdn(value: number): void;

  getUttargetclosestapproach(): number;
  setUttargetclosestapproach(value: number): void;

  hasNode(): boolean;
  clearNode(): void;
  getNode(): apimessage_pb.ManeuverNode | undefined;
  setNode(value?: apimessage_pb.ManeuverNode): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetManeuverNodeInfoResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetManeuverNodeInfoResponse): GetManeuverNodeInfoResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetManeuverNodeInfoResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetManeuverNodeInfoResponse;
  static deserializeBinaryFromReader(message: GetManeuverNodeInfoResponse, reader: jspb.BinaryReader): GetManeuverNodeInfoResponse;
}

export namespace GetManeuverNodeInfoResponse {
  export type AsObject = {
    ut: number,
    utpe: number,
    utap: number,
    utan: number,
    utdn: number,
    uttargetan: number,
    uttargetdn: number,
    uttargetclosestapproach: number,
    node?: apimessage_pb.ManeuverNode.AsObject,
  }
}

export class GetRunwayLandingInfoResponse extends jspb.Message {
  getAltitude(): number;
  setAltitude(value: number): void;

  getDistance(): number;
  setDistance(value: number): void;

  getYawoffset(): number;
  setYawoffset(value: number): void;

  getSurfacespeed(): number;
  setSurfacespeed(value: number): void;

  getForwarderror(): number;
  setForwarderror(value: number): void;

  getVelocityerror(): number;
  setVelocityerror(value: number): void;

  getPitch(): number;
  setPitch(value: number): void;

  getRoll(): number;
  setRoll(value: number): void;

  getVerticalspeed(): number;
  setVerticalspeed(value: number): void;

  getRunwaymeanaltitude(): number;
  setRunwaymeanaltitude(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetRunwayLandingInfoResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetRunwayLandingInfoResponse): GetRunwayLandingInfoResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetRunwayLandingInfoResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetRunwayLandingInfoResponse;
  static deserializeBinaryFromReader(message: GetRunwayLandingInfoResponse, reader: jspb.BinaryReader): GetRunwayLandingInfoResponse;
}

export namespace GetRunwayLandingInfoResponse {
  export type AsObject = {
    altitude: number,
    distance: number,
    yawoffset: number,
    surfacespeed: number,
    forwarderror: number,
    velocityerror: number,
    pitch: number,
    roll: number,
    verticalspeed: number,
    runwaymeanaltitude: number,
  }
}

export interface VesselTypeMap {
  DEBRIS: 0;
  SPACEOBJECT: 1;
  UNKNOWN: 2;
  PROBE: 3;
  RELAY: 4;
  ROVER: 5;
  LANDER: 6;
  SHIP: 7;
  PLANE: 8;
  STATION: 9;
  BASE: 10;
  EVA: 11;
  FLAG: 12;
  DEPLOYEDSCIENCECONTROLLER: 13;
  DEPLOYEDSCIENCEPART: 14;
}

export const VesselType: VesselTypeMap;

export interface OrbitTypeMap {
  SYNCHRONOUS: 0;
  STATIONARY: 1;
  POLAR: 2;
  EQUATORIAL: 3;
  KOLNIYA: 4;
  TUNDRA: 5;
  RANDOM: 6;
}

export const OrbitType: OrbitTypeMap;

export interface OrbitTransitionTypeMap {
  INITIAL: 0;
  FINAL: 1;
  ENCOUNTER: 2;
  ESCAPE: 3;
  MANEUVER: 4;
  IMPACT: 5;
}

export const OrbitTransitionType: OrbitTransitionTypeMap;

export interface AutoPilotPhaseMap {
  INVALID: 0;
  NEW: 1;
  CLEARROLL: 2;
  CLEARPITCHYAW: 3;
  TOTARGET: 4;
}

export const AutoPilotPhase: AutoPilotPhaseMap;

