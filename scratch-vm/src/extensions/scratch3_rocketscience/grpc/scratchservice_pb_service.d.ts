// package: 
// file: scratchservice.proto

import * as scratchservice_pb from "./scratchservice_pb";
import * as observor_pb from "./observor_pb";
import * as apimessage_pb from "./apimessage_pb";
import {grpc} from "@improbable-eng/grpc-web";

type ScratchServicerestoreCamera = {
  readonly methodName: string;
  readonly service: typeof ScratchService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof apimessage_pb.RestoreCameraRequest;
  readonly responseType: typeof apimessage_pb.RestoreCameraResponse;
};

type ScratchServicesetCameraFocussedVessel = {
  readonly methodName: string;
  readonly service: typeof ScratchService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof apimessage_pb.SetCameraFocussedVesselRequest;
  readonly responseType: typeof apimessage_pb.SetCameraFocussedVesselResponse;
};

type ScratchServicesetCameraMode = {
  readonly methodName: string;
  readonly service: typeof ScratchService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof apimessage_pb.SetCameraModeRequest;
  readonly responseType: typeof apimessage_pb.SetCameraModeResponse;
};

type ScratchServicesetManeuverNode = {
  readonly methodName: string;
  readonly service: typeof ScratchService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof apimessage_pb.SetManeuverNodeRequest;
  readonly responseType: typeof apimessage_pb.SetManeuverNodeResponse;
};

type ScratchServicegetManeuverNode = {
  readonly methodName: string;
  readonly service: typeof ScratchService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof apimessage_pb.GetManeuverNodeRequest;
  readonly responseType: typeof apimessage_pb.GetManeuverNodeResponse;
};

type ScratchServicelistManeuverNodes = {
  readonly methodName: string;
  readonly service: typeof ScratchService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof apimessage_pb.ListManeuverNodesRequest;
  readonly responseType: typeof apimessage_pb.ListManeuverNodesResponse;
};

type ScratchServiceremoveManeuverNode = {
  readonly methodName: string;
  readonly service: typeof ScratchService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof apimessage_pb.RemoveManeuverNodeRequest;
  readonly responseType: typeof apimessage_pb.RemoveManeuverNodeResponse;
};

type ScratchServiceuniversalTime = {
  readonly methodName: string;
  readonly service: typeof ScratchService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof apimessage_pb.UniversalTimeRequest;
  readonly responseType: typeof apimessage_pb.UniversalTimeResponse;
};

type ScratchServicewarpTo = {
  readonly methodName: string;
  readonly service: typeof ScratchService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof apimessage_pb.WarpToRequest;
  readonly responseType: typeof apimessage_pb.WarpToResponse;
};

type ScratchServiceincreaseTimeWarpRate = {
  readonly methodName: string;
  readonly service: typeof ScratchService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof apimessage_pb.IncreaseTimeWarpRateRequest;
  readonly responseType: typeof apimessage_pb.IncreaseTimeWarpRateResponse;
};

type ScratchServicedecreaseTimeWarpRate = {
  readonly methodName: string;
  readonly service: typeof ScratchService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof apimessage_pb.DecreaseTimeWarpRateRequest;
  readonly responseType: typeof apimessage_pb.DecreaseTimeWarpRateResponse;
};

type ScratchServiceincreaseTimeWarpRateBy = {
  readonly methodName: string;
  readonly service: typeof ScratchService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof apimessage_pb.IncreaseTimeWarpRateByRequest;
  readonly responseType: typeof apimessage_pb.IncreaseTimeWarpRateByResponse;
};

type ScratchServicedecreaseTimeWarpRateBy = {
  readonly methodName: string;
  readonly service: typeof ScratchService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof apimessage_pb.DecreaseTimeWarpRateByRequest;
  readonly responseType: typeof apimessage_pb.DecreaseTimeWarpRateByResponse;
};

type ScratchServicestopTimeWarp = {
  readonly methodName: string;
  readonly service: typeof ScratchService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof apimessage_pb.StopTimeWarpRequest;
  readonly responseType: typeof apimessage_pb.StopTimeWarpResponse;
};

type ScratchServicegetTimeWarpRate = {
  readonly methodName: string;
  readonly service: typeof ScratchService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof apimessage_pb.GetTimeWarpRateRequest;
  readonly responseType: typeof apimessage_pb.GetTimeWarpRateResponse;
};

type ScratchServicegetFlightSceneStartTime = {
  readonly methodName: string;
  readonly service: typeof ScratchService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof apimessage_pb.GetFlightSceneStartTimeRequest;
  readonly responseType: typeof apimessage_pb.GetFlightSceneStartTimeResponse;
};

type ScratchServiceswitchActiveVessel = {
  readonly methodName: string;
  readonly service: typeof ScratchService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof apimessage_pb.SwitchActiveVesselRequest;
  readonly responseType: typeof apimessage_pb.SwitchActiveVesselResponse;
};

type ScratchServicesnapshot = {
  readonly methodName: string;
  readonly service: typeof ScratchService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof observor_pb.SnapshotRequest;
  readonly responseType: typeof observor_pb.SnapshotResponse;
};

type ScratchServicegetVesselPartsByType = {
  readonly methodName: string;
  readonly service: typeof ScratchService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof apimessage_pb.GetVesselPartsByTypeRequest;
  readonly responseType: typeof apimessage_pb.GetVesselPartsByTypeResponse;
};

type ScratchServicesearchVesselPartsByTag = {
  readonly methodName: string;
  readonly service: typeof ScratchService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof apimessage_pb.SearchVesselPartsByTagRequest;
  readonly responseType: typeof apimessage_pb.SearchVesselPartsByTagResponse;
};

type ScratchServicestage = {
  readonly methodName: string;
  readonly service: typeof ScratchService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof apimessage_pb.StageRequest;
  readonly responseType: typeof apimessage_pb.StageResponse;
};

type ScratchServicethrottle = {
  readonly methodName: string;
  readonly service: typeof ScratchService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof apimessage_pb.ThrottleRequest;
  readonly responseType: typeof apimessage_pb.ThrottleResponse;
};

type ScratchServicesetSAS = {
  readonly methodName: string;
  readonly service: typeof ScratchService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof apimessage_pb.SetSASRequest;
  readonly responseType: typeof apimessage_pb.SetSASResponse;
};

type ScratchServicesetSASMode = {
  readonly methodName: string;
  readonly service: typeof ScratchService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof apimessage_pb.SetSASModeRequest;
  readonly responseType: typeof apimessage_pb.SetSASModeResponse;
};

type ScratchServicesetRCS = {
  readonly methodName: string;
  readonly service: typeof ScratchService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof apimessage_pb.SetRCSRequest;
  readonly responseType: typeof apimessage_pb.SetRCSResponse;
};

type ScratchServicesetLights = {
  readonly methodName: string;
  readonly service: typeof ScratchService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof apimessage_pb.SetLightsRequest;
  readonly responseType: typeof apimessage_pb.SetLightsResponse;
};

type ScratchServicesetAntennas = {
  readonly methodName: string;
  readonly service: typeof ScratchService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof apimessage_pb.SetAntennasRequest;
  readonly responseType: typeof apimessage_pb.SetAntennasResponse;
};

type ScratchServicesetSolarPanels = {
  readonly methodName: string;
  readonly service: typeof ScratchService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof apimessage_pb.SetSolarPanelsRequest;
  readonly responseType: typeof apimessage_pb.SetSolarPanelsResponse;
};

type ScratchServicetoggleActionGroup = {
  readonly methodName: string;
  readonly service: typeof ScratchService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof apimessage_pb.ToggleActionGroupRequest;
  readonly responseType: typeof apimessage_pb.ToggleActionGroupResponse;
};

type ScratchServicesetHeading = {
  readonly methodName: string;
  readonly service: typeof ScratchService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof apimessage_pb.SetHeadingRequest;
  readonly responseType: typeof apimessage_pb.SetHeadingResponse;
};

type ScratchServicesetHeadingRollFirst = {
  readonly methodName: string;
  readonly service: typeof ScratchService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof apimessage_pb.SetHeadingRollFirstRequest;
  readonly responseType: typeof apimessage_pb.SetHeadingRollFirstResponse;
};

type ScratchServicesetOrientation = {
  readonly methodName: string;
  readonly service: typeof ScratchService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof apimessage_pb.SetOrientationRequest;
  readonly responseType: typeof apimessage_pb.SetOrientationResponse;
};

type ScratchServicesetOrientationRollFirst = {
  readonly methodName: string;
  readonly service: typeof ScratchService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof apimessage_pb.SetOrientationRollFirstRequest;
  readonly responseType: typeof apimessage_pb.SetOrientationRollFirstResponse;
};

type ScratchServicedisengageAutoPilot = {
  readonly methodName: string;
  readonly service: typeof ScratchService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof apimessage_pb.DisengageAutoPilotRequest;
  readonly responseType: typeof apimessage_pb.DisengageAutoPilotResponse;
};

type ScratchServicelaunchClampsRelease = {
  readonly methodName: string;
  readonly service: typeof ScratchService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof apimessage_pb.LaunchClampsReleaseRequest;
  readonly responseType: typeof apimessage_pb.LaunchClampsReleaseResponse;
};

type ScratchServiceablatorsDecouple = {
  readonly methodName: string;
  readonly service: typeof ScratchService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof apimessage_pb.AblatorsDecoupleRequest;
  readonly responseType: typeof apimessage_pb.AblatorsDecoupleResponse;
};

type ScratchServicedecouplersActivate = {
  readonly methodName: string;
  readonly service: typeof ScratchService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof apimessage_pb.DecouplersActivateRequest;
  readonly responseType: typeof apimessage_pb.DecouplersActivateResponse;
};

type ScratchServiceenginesActivate = {
  readonly methodName: string;
  readonly service: typeof ScratchService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof apimessage_pb.EnginesActivateRequest;
  readonly responseType: typeof apimessage_pb.EnginesActivateResponse;
};

type ScratchServiceenginesShutDown = {
  readonly methodName: string;
  readonly service: typeof ScratchService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof apimessage_pb.EnginesShutDownRequest;
  readonly responseType: typeof apimessage_pb.EnginesShutDownResponse;
};

type ScratchServicefairingsJettison = {
  readonly methodName: string;
  readonly service: typeof ScratchService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof apimessage_pb.FairingsJettisonRequest;
  readonly responseType: typeof apimessage_pb.FairingsJettisonResponse;
};

type ScratchServiceparachutesDeploy = {
  readonly methodName: string;
  readonly service: typeof ScratchService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof apimessage_pb.ParachutesDeployRequest;
  readonly responseType: typeof apimessage_pb.ParachutesDeployResponse;
};

type ScratchServiceRCSesEnabled = {
  readonly methodName: string;
  readonly service: typeof ScratchService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof apimessage_pb.RCSesEnabledRequest;
  readonly responseType: typeof apimessage_pb.RCSesEnabledResponse;
};

export class ScratchService {
  static readonly serviceName: string;
  static readonly restoreCamera: ScratchServicerestoreCamera;
  static readonly setCameraFocussedVessel: ScratchServicesetCameraFocussedVessel;
  static readonly setCameraMode: ScratchServicesetCameraMode;
  static readonly setManeuverNode: ScratchServicesetManeuverNode;
  static readonly getManeuverNode: ScratchServicegetManeuverNode;
  static readonly listManeuverNodes: ScratchServicelistManeuverNodes;
  static readonly removeManeuverNode: ScratchServiceremoveManeuverNode;
  static readonly universalTime: ScratchServiceuniversalTime;
  static readonly warpTo: ScratchServicewarpTo;
  static readonly increaseTimeWarpRate: ScratchServiceincreaseTimeWarpRate;
  static readonly decreaseTimeWarpRate: ScratchServicedecreaseTimeWarpRate;
  static readonly increaseTimeWarpRateBy: ScratchServiceincreaseTimeWarpRateBy;
  static readonly decreaseTimeWarpRateBy: ScratchServicedecreaseTimeWarpRateBy;
  static readonly stopTimeWarp: ScratchServicestopTimeWarp;
  static readonly getTimeWarpRate: ScratchServicegetTimeWarpRate;
  static readonly getFlightSceneStartTime: ScratchServicegetFlightSceneStartTime;
  static readonly switchActiveVessel: ScratchServiceswitchActiveVessel;
  static readonly snapshot: ScratchServicesnapshot;
  static readonly getVesselPartsByType: ScratchServicegetVesselPartsByType;
  static readonly searchVesselPartsByTag: ScratchServicesearchVesselPartsByTag;
  static readonly stage: ScratchServicestage;
  static readonly throttle: ScratchServicethrottle;
  static readonly setSAS: ScratchServicesetSAS;
  static readonly setSASMode: ScratchServicesetSASMode;
  static readonly setRCS: ScratchServicesetRCS;
  static readonly setLights: ScratchServicesetLights;
  static readonly setAntennas: ScratchServicesetAntennas;
  static readonly setSolarPanels: ScratchServicesetSolarPanels;
  static readonly toggleActionGroup: ScratchServicetoggleActionGroup;
  static readonly setHeading: ScratchServicesetHeading;
  static readonly setHeadingRollFirst: ScratchServicesetHeadingRollFirst;
  static readonly setOrientation: ScratchServicesetOrientation;
  static readonly setOrientationRollFirst: ScratchServicesetOrientationRollFirst;
  static readonly disengageAutoPilot: ScratchServicedisengageAutoPilot;
  static readonly launchClampsRelease: ScratchServicelaunchClampsRelease;
  static readonly ablatorsDecouple: ScratchServiceablatorsDecouple;
  static readonly decouplersActivate: ScratchServicedecouplersActivate;
  static readonly enginesActivate: ScratchServiceenginesActivate;
  static readonly enginesShutDown: ScratchServiceenginesShutDown;
  static readonly fairingsJettison: ScratchServicefairingsJettison;
  static readonly parachutesDeploy: ScratchServiceparachutesDeploy;
  static readonly RCSesEnabled: ScratchServiceRCSesEnabled;
}

export type ServiceError = { message: string, code: number; metadata: grpc.Metadata }
export type Status = { details: string, code: number; metadata: grpc.Metadata }

interface UnaryResponse {
  cancel(): void;
}
interface ResponseStream<T> {
  cancel(): void;
  on(type: 'data', handler: (message: T) => void): ResponseStream<T>;
  on(type: 'end', handler: (status?: Status) => void): ResponseStream<T>;
  on(type: 'status', handler: (status: Status) => void): ResponseStream<T>;
}
interface RequestStream<T> {
  write(message: T): RequestStream<T>;
  end(): void;
  cancel(): void;
  on(type: 'end', handler: (status?: Status) => void): RequestStream<T>;
  on(type: 'status', handler: (status: Status) => void): RequestStream<T>;
}
interface BidirectionalStream<ReqT, ResT> {
  write(message: ReqT): BidirectionalStream<ReqT, ResT>;
  end(): void;
  cancel(): void;
  on(type: 'data', handler: (message: ResT) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'end', handler: (status?: Status) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'status', handler: (status: Status) => void): BidirectionalStream<ReqT, ResT>;
}

export class ScratchServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  restoreCamera(
    requestMessage: apimessage_pb.RestoreCameraRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: apimessage_pb.RestoreCameraResponse|null) => void
  ): UnaryResponse;
  restoreCamera(
    requestMessage: apimessage_pb.RestoreCameraRequest,
    callback: (error: ServiceError|null, responseMessage: apimessage_pb.RestoreCameraResponse|null) => void
  ): UnaryResponse;
  setCameraFocussedVessel(
    requestMessage: apimessage_pb.SetCameraFocussedVesselRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: apimessage_pb.SetCameraFocussedVesselResponse|null) => void
  ): UnaryResponse;
  setCameraFocussedVessel(
    requestMessage: apimessage_pb.SetCameraFocussedVesselRequest,
    callback: (error: ServiceError|null, responseMessage: apimessage_pb.SetCameraFocussedVesselResponse|null) => void
  ): UnaryResponse;
  setCameraMode(
    requestMessage: apimessage_pb.SetCameraModeRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: apimessage_pb.SetCameraModeResponse|null) => void
  ): UnaryResponse;
  setCameraMode(
    requestMessage: apimessage_pb.SetCameraModeRequest,
    callback: (error: ServiceError|null, responseMessage: apimessage_pb.SetCameraModeResponse|null) => void
  ): UnaryResponse;
  setManeuverNode(
    requestMessage: apimessage_pb.SetManeuverNodeRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: apimessage_pb.SetManeuverNodeResponse|null) => void
  ): UnaryResponse;
  setManeuverNode(
    requestMessage: apimessage_pb.SetManeuverNodeRequest,
    callback: (error: ServiceError|null, responseMessage: apimessage_pb.SetManeuverNodeResponse|null) => void
  ): UnaryResponse;
  getManeuverNode(
    requestMessage: apimessage_pb.GetManeuverNodeRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: apimessage_pb.GetManeuverNodeResponse|null) => void
  ): UnaryResponse;
  getManeuverNode(
    requestMessage: apimessage_pb.GetManeuverNodeRequest,
    callback: (error: ServiceError|null, responseMessage: apimessage_pb.GetManeuverNodeResponse|null) => void
  ): UnaryResponse;
  listManeuverNodes(
    requestMessage: apimessage_pb.ListManeuverNodesRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: apimessage_pb.ListManeuverNodesResponse|null) => void
  ): UnaryResponse;
  listManeuverNodes(
    requestMessage: apimessage_pb.ListManeuverNodesRequest,
    callback: (error: ServiceError|null, responseMessage: apimessage_pb.ListManeuverNodesResponse|null) => void
  ): UnaryResponse;
  removeManeuverNode(
    requestMessage: apimessage_pb.RemoveManeuverNodeRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: apimessage_pb.RemoveManeuverNodeResponse|null) => void
  ): UnaryResponse;
  removeManeuverNode(
    requestMessage: apimessage_pb.RemoveManeuverNodeRequest,
    callback: (error: ServiceError|null, responseMessage: apimessage_pb.RemoveManeuverNodeResponse|null) => void
  ): UnaryResponse;
  universalTime(
    requestMessage: apimessage_pb.UniversalTimeRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: apimessage_pb.UniversalTimeResponse|null) => void
  ): UnaryResponse;
  universalTime(
    requestMessage: apimessage_pb.UniversalTimeRequest,
    callback: (error: ServiceError|null, responseMessage: apimessage_pb.UniversalTimeResponse|null) => void
  ): UnaryResponse;
  warpTo(
    requestMessage: apimessage_pb.WarpToRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: apimessage_pb.WarpToResponse|null) => void
  ): UnaryResponse;
  warpTo(
    requestMessage: apimessage_pb.WarpToRequest,
    callback: (error: ServiceError|null, responseMessage: apimessage_pb.WarpToResponse|null) => void
  ): UnaryResponse;
  increaseTimeWarpRate(
    requestMessage: apimessage_pb.IncreaseTimeWarpRateRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: apimessage_pb.IncreaseTimeWarpRateResponse|null) => void
  ): UnaryResponse;
  increaseTimeWarpRate(
    requestMessage: apimessage_pb.IncreaseTimeWarpRateRequest,
    callback: (error: ServiceError|null, responseMessage: apimessage_pb.IncreaseTimeWarpRateResponse|null) => void
  ): UnaryResponse;
  decreaseTimeWarpRate(
    requestMessage: apimessage_pb.DecreaseTimeWarpRateRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: apimessage_pb.DecreaseTimeWarpRateResponse|null) => void
  ): UnaryResponse;
  decreaseTimeWarpRate(
    requestMessage: apimessage_pb.DecreaseTimeWarpRateRequest,
    callback: (error: ServiceError|null, responseMessage: apimessage_pb.DecreaseTimeWarpRateResponse|null) => void
  ): UnaryResponse;
  increaseTimeWarpRateBy(
    requestMessage: apimessage_pb.IncreaseTimeWarpRateByRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: apimessage_pb.IncreaseTimeWarpRateByResponse|null) => void
  ): UnaryResponse;
  increaseTimeWarpRateBy(
    requestMessage: apimessage_pb.IncreaseTimeWarpRateByRequest,
    callback: (error: ServiceError|null, responseMessage: apimessage_pb.IncreaseTimeWarpRateByResponse|null) => void
  ): UnaryResponse;
  decreaseTimeWarpRateBy(
    requestMessage: apimessage_pb.DecreaseTimeWarpRateByRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: apimessage_pb.DecreaseTimeWarpRateByResponse|null) => void
  ): UnaryResponse;
  decreaseTimeWarpRateBy(
    requestMessage: apimessage_pb.DecreaseTimeWarpRateByRequest,
    callback: (error: ServiceError|null, responseMessage: apimessage_pb.DecreaseTimeWarpRateByResponse|null) => void
  ): UnaryResponse;
  stopTimeWarp(
    requestMessage: apimessage_pb.StopTimeWarpRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: apimessage_pb.StopTimeWarpResponse|null) => void
  ): UnaryResponse;
  stopTimeWarp(
    requestMessage: apimessage_pb.StopTimeWarpRequest,
    callback: (error: ServiceError|null, responseMessage: apimessage_pb.StopTimeWarpResponse|null) => void
  ): UnaryResponse;
  getTimeWarpRate(
    requestMessage: apimessage_pb.GetTimeWarpRateRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: apimessage_pb.GetTimeWarpRateResponse|null) => void
  ): UnaryResponse;
  getTimeWarpRate(
    requestMessage: apimessage_pb.GetTimeWarpRateRequest,
    callback: (error: ServiceError|null, responseMessage: apimessage_pb.GetTimeWarpRateResponse|null) => void
  ): UnaryResponse;
  getFlightSceneStartTime(
    requestMessage: apimessage_pb.GetFlightSceneStartTimeRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: apimessage_pb.GetFlightSceneStartTimeResponse|null) => void
  ): UnaryResponse;
  getFlightSceneStartTime(
    requestMessage: apimessage_pb.GetFlightSceneStartTimeRequest,
    callback: (error: ServiceError|null, responseMessage: apimessage_pb.GetFlightSceneStartTimeResponse|null) => void
  ): UnaryResponse;
  switchActiveVessel(
    requestMessage: apimessage_pb.SwitchActiveVesselRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: apimessage_pb.SwitchActiveVesselResponse|null) => void
  ): UnaryResponse;
  switchActiveVessel(
    requestMessage: apimessage_pb.SwitchActiveVesselRequest,
    callback: (error: ServiceError|null, responseMessage: apimessage_pb.SwitchActiveVesselResponse|null) => void
  ): UnaryResponse;
  snapshot(
    requestMessage: observor_pb.SnapshotRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: observor_pb.SnapshotResponse|null) => void
  ): UnaryResponse;
  snapshot(
    requestMessage: observor_pb.SnapshotRequest,
    callback: (error: ServiceError|null, responseMessage: observor_pb.SnapshotResponse|null) => void
  ): UnaryResponse;
  getVesselPartsByType(
    requestMessage: apimessage_pb.GetVesselPartsByTypeRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: apimessage_pb.GetVesselPartsByTypeResponse|null) => void
  ): UnaryResponse;
  getVesselPartsByType(
    requestMessage: apimessage_pb.GetVesselPartsByTypeRequest,
    callback: (error: ServiceError|null, responseMessage: apimessage_pb.GetVesselPartsByTypeResponse|null) => void
  ): UnaryResponse;
  searchVesselPartsByTag(
    requestMessage: apimessage_pb.SearchVesselPartsByTagRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: apimessage_pb.SearchVesselPartsByTagResponse|null) => void
  ): UnaryResponse;
  searchVesselPartsByTag(
    requestMessage: apimessage_pb.SearchVesselPartsByTagRequest,
    callback: (error: ServiceError|null, responseMessage: apimessage_pb.SearchVesselPartsByTagResponse|null) => void
  ): UnaryResponse;
  stage(
    requestMessage: apimessage_pb.StageRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: apimessage_pb.StageResponse|null) => void
  ): UnaryResponse;
  stage(
    requestMessage: apimessage_pb.StageRequest,
    callback: (error: ServiceError|null, responseMessage: apimessage_pb.StageResponse|null) => void
  ): UnaryResponse;
  throttle(
    requestMessage: apimessage_pb.ThrottleRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: apimessage_pb.ThrottleResponse|null) => void
  ): UnaryResponse;
  throttle(
    requestMessage: apimessage_pb.ThrottleRequest,
    callback: (error: ServiceError|null, responseMessage: apimessage_pb.ThrottleResponse|null) => void
  ): UnaryResponse;
  setSAS(
    requestMessage: apimessage_pb.SetSASRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: apimessage_pb.SetSASResponse|null) => void
  ): UnaryResponse;
  setSAS(
    requestMessage: apimessage_pb.SetSASRequest,
    callback: (error: ServiceError|null, responseMessage: apimessage_pb.SetSASResponse|null) => void
  ): UnaryResponse;
  setSASMode(
    requestMessage: apimessage_pb.SetSASModeRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: apimessage_pb.SetSASModeResponse|null) => void
  ): UnaryResponse;
  setSASMode(
    requestMessage: apimessage_pb.SetSASModeRequest,
    callback: (error: ServiceError|null, responseMessage: apimessage_pb.SetSASModeResponse|null) => void
  ): UnaryResponse;
  setRCS(
    requestMessage: apimessage_pb.SetRCSRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: apimessage_pb.SetRCSResponse|null) => void
  ): UnaryResponse;
  setRCS(
    requestMessage: apimessage_pb.SetRCSRequest,
    callback: (error: ServiceError|null, responseMessage: apimessage_pb.SetRCSResponse|null) => void
  ): UnaryResponse;
  setLights(
    requestMessage: apimessage_pb.SetLightsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: apimessage_pb.SetLightsResponse|null) => void
  ): UnaryResponse;
  setLights(
    requestMessage: apimessage_pb.SetLightsRequest,
    callback: (error: ServiceError|null, responseMessage: apimessage_pb.SetLightsResponse|null) => void
  ): UnaryResponse;
  setAntennas(
    requestMessage: apimessage_pb.SetAntennasRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: apimessage_pb.SetAntennasResponse|null) => void
  ): UnaryResponse;
  setAntennas(
    requestMessage: apimessage_pb.SetAntennasRequest,
    callback: (error: ServiceError|null, responseMessage: apimessage_pb.SetAntennasResponse|null) => void
  ): UnaryResponse;
  setSolarPanels(
    requestMessage: apimessage_pb.SetSolarPanelsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: apimessage_pb.SetSolarPanelsResponse|null) => void
  ): UnaryResponse;
  setSolarPanels(
    requestMessage: apimessage_pb.SetSolarPanelsRequest,
    callback: (error: ServiceError|null, responseMessage: apimessage_pb.SetSolarPanelsResponse|null) => void
  ): UnaryResponse;
  toggleActionGroup(
    requestMessage: apimessage_pb.ToggleActionGroupRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: apimessage_pb.ToggleActionGroupResponse|null) => void
  ): UnaryResponse;
  toggleActionGroup(
    requestMessage: apimessage_pb.ToggleActionGroupRequest,
    callback: (error: ServiceError|null, responseMessage: apimessage_pb.ToggleActionGroupResponse|null) => void
  ): UnaryResponse;
  setHeading(
    requestMessage: apimessage_pb.SetHeadingRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: apimessage_pb.SetHeadingResponse|null) => void
  ): UnaryResponse;
  setHeading(
    requestMessage: apimessage_pb.SetHeadingRequest,
    callback: (error: ServiceError|null, responseMessage: apimessage_pb.SetHeadingResponse|null) => void
  ): UnaryResponse;
  setHeadingRollFirst(
    requestMessage: apimessage_pb.SetHeadingRollFirstRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: apimessage_pb.SetHeadingRollFirstResponse|null) => void
  ): UnaryResponse;
  setHeadingRollFirst(
    requestMessage: apimessage_pb.SetHeadingRollFirstRequest,
    callback: (error: ServiceError|null, responseMessage: apimessage_pb.SetHeadingRollFirstResponse|null) => void
  ): UnaryResponse;
  setOrientation(
    requestMessage: apimessage_pb.SetOrientationRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: apimessage_pb.SetOrientationResponse|null) => void
  ): UnaryResponse;
  setOrientation(
    requestMessage: apimessage_pb.SetOrientationRequest,
    callback: (error: ServiceError|null, responseMessage: apimessage_pb.SetOrientationResponse|null) => void
  ): UnaryResponse;
  setOrientationRollFirst(
    requestMessage: apimessage_pb.SetOrientationRollFirstRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: apimessage_pb.SetOrientationRollFirstResponse|null) => void
  ): UnaryResponse;
  setOrientationRollFirst(
    requestMessage: apimessage_pb.SetOrientationRollFirstRequest,
    callback: (error: ServiceError|null, responseMessage: apimessage_pb.SetOrientationRollFirstResponse|null) => void
  ): UnaryResponse;
  disengageAutoPilot(
    requestMessage: apimessage_pb.DisengageAutoPilotRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: apimessage_pb.DisengageAutoPilotResponse|null) => void
  ): UnaryResponse;
  disengageAutoPilot(
    requestMessage: apimessage_pb.DisengageAutoPilotRequest,
    callback: (error: ServiceError|null, responseMessage: apimessage_pb.DisengageAutoPilotResponse|null) => void
  ): UnaryResponse;
  launchClampsRelease(
    requestMessage: apimessage_pb.LaunchClampsReleaseRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: apimessage_pb.LaunchClampsReleaseResponse|null) => void
  ): UnaryResponse;
  launchClampsRelease(
    requestMessage: apimessage_pb.LaunchClampsReleaseRequest,
    callback: (error: ServiceError|null, responseMessage: apimessage_pb.LaunchClampsReleaseResponse|null) => void
  ): UnaryResponse;
  ablatorsDecouple(
    requestMessage: apimessage_pb.AblatorsDecoupleRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: apimessage_pb.AblatorsDecoupleResponse|null) => void
  ): UnaryResponse;
  ablatorsDecouple(
    requestMessage: apimessage_pb.AblatorsDecoupleRequest,
    callback: (error: ServiceError|null, responseMessage: apimessage_pb.AblatorsDecoupleResponse|null) => void
  ): UnaryResponse;
  decouplersActivate(
    requestMessage: apimessage_pb.DecouplersActivateRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: apimessage_pb.DecouplersActivateResponse|null) => void
  ): UnaryResponse;
  decouplersActivate(
    requestMessage: apimessage_pb.DecouplersActivateRequest,
    callback: (error: ServiceError|null, responseMessage: apimessage_pb.DecouplersActivateResponse|null) => void
  ): UnaryResponse;
  enginesActivate(
    requestMessage: apimessage_pb.EnginesActivateRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: apimessage_pb.EnginesActivateResponse|null) => void
  ): UnaryResponse;
  enginesActivate(
    requestMessage: apimessage_pb.EnginesActivateRequest,
    callback: (error: ServiceError|null, responseMessage: apimessage_pb.EnginesActivateResponse|null) => void
  ): UnaryResponse;
  enginesShutDown(
    requestMessage: apimessage_pb.EnginesShutDownRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: apimessage_pb.EnginesShutDownResponse|null) => void
  ): UnaryResponse;
  enginesShutDown(
    requestMessage: apimessage_pb.EnginesShutDownRequest,
    callback: (error: ServiceError|null, responseMessage: apimessage_pb.EnginesShutDownResponse|null) => void
  ): UnaryResponse;
  fairingsJettison(
    requestMessage: apimessage_pb.FairingsJettisonRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: apimessage_pb.FairingsJettisonResponse|null) => void
  ): UnaryResponse;
  fairingsJettison(
    requestMessage: apimessage_pb.FairingsJettisonRequest,
    callback: (error: ServiceError|null, responseMessage: apimessage_pb.FairingsJettisonResponse|null) => void
  ): UnaryResponse;
  parachutesDeploy(
    requestMessage: apimessage_pb.ParachutesDeployRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: apimessage_pb.ParachutesDeployResponse|null) => void
  ): UnaryResponse;
  parachutesDeploy(
    requestMessage: apimessage_pb.ParachutesDeployRequest,
    callback: (error: ServiceError|null, responseMessage: apimessage_pb.ParachutesDeployResponse|null) => void
  ): UnaryResponse;
  rCSesEnabled(
    requestMessage: apimessage_pb.RCSesEnabledRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: apimessage_pb.RCSesEnabledResponse|null) => void
  ): UnaryResponse;
  rCSesEnabled(
    requestMessage: apimessage_pb.RCSesEnabledRequest,
    callback: (error: ServiceError|null, responseMessage: apimessage_pb.RCSesEnabledResponse|null) => void
  ): UnaryResponse;
}

