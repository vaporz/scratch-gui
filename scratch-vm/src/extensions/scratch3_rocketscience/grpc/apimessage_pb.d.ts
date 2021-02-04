// package: 
// file: apimessage.proto

import * as jspb from "google-protobuf";
import * as observor_pb from "./observor_pb";

export class RCSesEnabledRequest extends jspb.Message {
  clearIdsList(): void;
  getIdsList(): Array<number>;
  setIdsList(value: Array<number>): void;
  addIds(value: number, index?: number): number;

  getEnabled(): boolean;
  setEnabled(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RCSesEnabledRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RCSesEnabledRequest): RCSesEnabledRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RCSesEnabledRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RCSesEnabledRequest;
  static deserializeBinaryFromReader(message: RCSesEnabledRequest, reader: jspb.BinaryReader): RCSesEnabledRequest;
}

export namespace RCSesEnabledRequest {
  export type AsObject = {
    idsList: Array<number>,
    enabled: boolean,
  }
}

export class RCSesEnabledResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getMessage(): string;
  setMessage(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RCSesEnabledResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RCSesEnabledResponse): RCSesEnabledResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RCSesEnabledResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RCSesEnabledResponse;
  static deserializeBinaryFromReader(message: RCSesEnabledResponse, reader: jspb.BinaryReader): RCSesEnabledResponse;
}

export namespace RCSesEnabledResponse {
  export type AsObject = {
    code: number,
    message: string,
  }
}

export class ParachutesDeployRequest extends jspb.Message {
  clearIdsList(): void;
  getIdsList(): Array<number>;
  setIdsList(value: Array<number>): void;
  addIds(value: number, index?: number): number;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ParachutesDeployRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ParachutesDeployRequest): ParachutesDeployRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ParachutesDeployRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ParachutesDeployRequest;
  static deserializeBinaryFromReader(message: ParachutesDeployRequest, reader: jspb.BinaryReader): ParachutesDeployRequest;
}

export namespace ParachutesDeployRequest {
  export type AsObject = {
    idsList: Array<number>,
  }
}

export class ParachutesDeployResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getMessage(): string;
  setMessage(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ParachutesDeployResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ParachutesDeployResponse): ParachutesDeployResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ParachutesDeployResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ParachutesDeployResponse;
  static deserializeBinaryFromReader(message: ParachutesDeployResponse, reader: jspb.BinaryReader): ParachutesDeployResponse;
}

export namespace ParachutesDeployResponse {
  export type AsObject = {
    code: number,
    message: string,
  }
}

export class FairingsJettisonRequest extends jspb.Message {
  clearIdsList(): void;
  getIdsList(): Array<number>;
  setIdsList(value: Array<number>): void;
  addIds(value: number, index?: number): number;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FairingsJettisonRequest.AsObject;
  static toObject(includeInstance: boolean, msg: FairingsJettisonRequest): FairingsJettisonRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FairingsJettisonRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FairingsJettisonRequest;
  static deserializeBinaryFromReader(message: FairingsJettisonRequest, reader: jspb.BinaryReader): FairingsJettisonRequest;
}

export namespace FairingsJettisonRequest {
  export type AsObject = {
    idsList: Array<number>,
  }
}

export class FairingsJettisonResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getMessage(): string;
  setMessage(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FairingsJettisonResponse.AsObject;
  static toObject(includeInstance: boolean, msg: FairingsJettisonResponse): FairingsJettisonResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FairingsJettisonResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FairingsJettisonResponse;
  static deserializeBinaryFromReader(message: FairingsJettisonResponse, reader: jspb.BinaryReader): FairingsJettisonResponse;
}

export namespace FairingsJettisonResponse {
  export type AsObject = {
    code: number,
    message: string,
  }
}

export class AblatorsDecoupleRequest extends jspb.Message {
  clearIdsList(): void;
  getIdsList(): Array<number>;
  setIdsList(value: Array<number>): void;
  addIds(value: number, index?: number): number;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AblatorsDecoupleRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AblatorsDecoupleRequest): AblatorsDecoupleRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AblatorsDecoupleRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AblatorsDecoupleRequest;
  static deserializeBinaryFromReader(message: AblatorsDecoupleRequest, reader: jspb.BinaryReader): AblatorsDecoupleRequest;
}

export namespace AblatorsDecoupleRequest {
  export type AsObject = {
    idsList: Array<number>,
  }
}

export class AblatorsDecoupleResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getMessage(): string;
  setMessage(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AblatorsDecoupleResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AblatorsDecoupleResponse): AblatorsDecoupleResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AblatorsDecoupleResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AblatorsDecoupleResponse;
  static deserializeBinaryFromReader(message: AblatorsDecoupleResponse, reader: jspb.BinaryReader): AblatorsDecoupleResponse;
}

export namespace AblatorsDecoupleResponse {
  export type AsObject = {
    code: number,
    message: string,
  }
}

export class DecouplersActivateRequest extends jspb.Message {
  clearIdsList(): void;
  getIdsList(): Array<number>;
  setIdsList(value: Array<number>): void;
  addIds(value: number, index?: number): number;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DecouplersActivateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DecouplersActivateRequest): DecouplersActivateRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DecouplersActivateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DecouplersActivateRequest;
  static deserializeBinaryFromReader(message: DecouplersActivateRequest, reader: jspb.BinaryReader): DecouplersActivateRequest;
}

export namespace DecouplersActivateRequest {
  export type AsObject = {
    idsList: Array<number>,
  }
}

export class DecouplersActivateResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getMessage(): string;
  setMessage(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DecouplersActivateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DecouplersActivateResponse): DecouplersActivateResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DecouplersActivateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DecouplersActivateResponse;
  static deserializeBinaryFromReader(message: DecouplersActivateResponse, reader: jspb.BinaryReader): DecouplersActivateResponse;
}

export namespace DecouplersActivateResponse {
  export type AsObject = {
    code: number,
    message: string,
  }
}

export class EnginesActivateRequest extends jspb.Message {
  clearIdsList(): void;
  getIdsList(): Array<number>;
  setIdsList(value: Array<number>): void;
  addIds(value: number, index?: number): number;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EnginesActivateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: EnginesActivateRequest): EnginesActivateRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EnginesActivateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EnginesActivateRequest;
  static deserializeBinaryFromReader(message: EnginesActivateRequest, reader: jspb.BinaryReader): EnginesActivateRequest;
}

export namespace EnginesActivateRequest {
  export type AsObject = {
    idsList: Array<number>,
  }
}

export class EnginesActivateResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getMessage(): string;
  setMessage(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EnginesActivateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: EnginesActivateResponse): EnginesActivateResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EnginesActivateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EnginesActivateResponse;
  static deserializeBinaryFromReader(message: EnginesActivateResponse, reader: jspb.BinaryReader): EnginesActivateResponse;
}

export namespace EnginesActivateResponse {
  export type AsObject = {
    code: number,
    message: string,
  }
}

export class EnginesShutDownRequest extends jspb.Message {
  clearIdsList(): void;
  getIdsList(): Array<number>;
  setIdsList(value: Array<number>): void;
  addIds(value: number, index?: number): number;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EnginesShutDownRequest.AsObject;
  static toObject(includeInstance: boolean, msg: EnginesShutDownRequest): EnginesShutDownRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EnginesShutDownRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EnginesShutDownRequest;
  static deserializeBinaryFromReader(message: EnginesShutDownRequest, reader: jspb.BinaryReader): EnginesShutDownRequest;
}

export namespace EnginesShutDownRequest {
  export type AsObject = {
    idsList: Array<number>,
  }
}

export class EnginesShutDownResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getMessage(): string;
  setMessage(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EnginesShutDownResponse.AsObject;
  static toObject(includeInstance: boolean, msg: EnginesShutDownResponse): EnginesShutDownResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EnginesShutDownResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EnginesShutDownResponse;
  static deserializeBinaryFromReader(message: EnginesShutDownResponse, reader: jspb.BinaryReader): EnginesShutDownResponse;
}

export namespace EnginesShutDownResponse {
  export type AsObject = {
    code: number,
    message: string,
  }
}

export class LaunchClampsReleaseRequest extends jspb.Message {
  clearIdsList(): void;
  getIdsList(): Array<number>;
  setIdsList(value: Array<number>): void;
  addIds(value: number, index?: number): number;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LaunchClampsReleaseRequest.AsObject;
  static toObject(includeInstance: boolean, msg: LaunchClampsReleaseRequest): LaunchClampsReleaseRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LaunchClampsReleaseRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LaunchClampsReleaseRequest;
  static deserializeBinaryFromReader(message: LaunchClampsReleaseRequest, reader: jspb.BinaryReader): LaunchClampsReleaseRequest;
}

export namespace LaunchClampsReleaseRequest {
  export type AsObject = {
    idsList: Array<number>,
  }
}

export class LaunchClampsReleaseResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getMessage(): string;
  setMessage(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LaunchClampsReleaseResponse.AsObject;
  static toObject(includeInstance: boolean, msg: LaunchClampsReleaseResponse): LaunchClampsReleaseResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LaunchClampsReleaseResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LaunchClampsReleaseResponse;
  static deserializeBinaryFromReader(message: LaunchClampsReleaseResponse, reader: jspb.BinaryReader): LaunchClampsReleaseResponse;
}

export namespace LaunchClampsReleaseResponse {
  export type AsObject = {
    code: number,
    message: string,
  }
}

export class RestoreCameraRequest extends jspb.Message {
  getDisplay(): number;
  setDisplay(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RestoreCameraRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RestoreCameraRequest): RestoreCameraRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RestoreCameraRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RestoreCameraRequest;
  static deserializeBinaryFromReader(message: RestoreCameraRequest, reader: jspb.BinaryReader): RestoreCameraRequest;
}

export namespace RestoreCameraRequest {
  export type AsObject = {
    display: number,
  }
}

export class RestoreCameraResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getMessage(): string;
  setMessage(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RestoreCameraResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RestoreCameraResponse): RestoreCameraResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RestoreCameraResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RestoreCameraResponse;
  static deserializeBinaryFromReader(message: RestoreCameraResponse, reader: jspb.BinaryReader): RestoreCameraResponse;
}

export namespace RestoreCameraResponse {
  export type AsObject = {
    code: number,
    message: string,
  }
}

export class SetCameraFocussedVesselRequest extends jspb.Message {
  getVesselid(): string;
  setVesselid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetCameraFocussedVesselRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SetCameraFocussedVesselRequest): SetCameraFocussedVesselRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SetCameraFocussedVesselRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetCameraFocussedVesselRequest;
  static deserializeBinaryFromReader(message: SetCameraFocussedVesselRequest, reader: jspb.BinaryReader): SetCameraFocussedVesselRequest;
}

export namespace SetCameraFocussedVesselRequest {
  export type AsObject = {
    vesselid: string,
  }
}

export class SetCameraFocussedVesselResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getMessage(): string;
  setMessage(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetCameraFocussedVesselResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SetCameraFocussedVesselResponse): SetCameraFocussedVesselResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SetCameraFocussedVesselResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetCameraFocussedVesselResponse;
  static deserializeBinaryFromReader(message: SetCameraFocussedVesselResponse, reader: jspb.BinaryReader): SetCameraFocussedVesselResponse;
}

export namespace SetCameraFocussedVesselResponse {
  export type AsObject = {
    code: number,
    message: string,
  }
}

export class SetCameraModeRequest extends jspb.Message {
  getMode(): CameraModeMap[keyof CameraModeMap];
  setMode(value: CameraModeMap[keyof CameraModeMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetCameraModeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SetCameraModeRequest): SetCameraModeRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SetCameraModeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetCameraModeRequest;
  static deserializeBinaryFromReader(message: SetCameraModeRequest, reader: jspb.BinaryReader): SetCameraModeRequest;
}

export namespace SetCameraModeRequest {
  export type AsObject = {
    mode: CameraModeMap[keyof CameraModeMap],
  }
}

export class SetCameraModeResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getMessage(): string;
  setMessage(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetCameraModeResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SetCameraModeResponse): SetCameraModeResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SetCameraModeResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetCameraModeResponse;
  static deserializeBinaryFromReader(message: SetCameraModeResponse, reader: jspb.BinaryReader): SetCameraModeResponse;
}

export namespace SetCameraModeResponse {
  export type AsObject = {
    code: number,
    message: string,
  }
}

export class ManeuverNode extends jspb.Message {
  getVesselid(): string;
  setVesselid(value: string): void;

  getUt(): number;
  setUt(value: number): void;

  hasDeltavvector(): boolean;
  clearDeltavvector(): void;
  getDeltavvector(): observor_pb.Vector3d | undefined;
  setDeltavvector(value?: observor_pb.Vector3d): void;

  getDeltav(): number;
  setDeltav(value: number): void;

  hasRemainingburnvector(): boolean;
  clearRemainingburnvector(): void;
  getRemainingburnvector(): observor_pb.Vector3d | undefined;
  setRemainingburnvector(value?: observor_pb.Vector3d): void;

  getRemainingdeltav(): number;
  setRemainingdeltav(value: number): void;

  getStartburnin(): number;
  setStartburnin(value: number): void;

  getBurntime(): number;
  setBurntime(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ManeuverNode.AsObject;
  static toObject(includeInstance: boolean, msg: ManeuverNode): ManeuverNode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ManeuverNode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ManeuverNode;
  static deserializeBinaryFromReader(message: ManeuverNode, reader: jspb.BinaryReader): ManeuverNode;
}

export namespace ManeuverNode {
  export type AsObject = {
    vesselid: string,
    ut: number,
    deltavvector?: observor_pb.Vector3d.AsObject,
    deltav: number,
    remainingburnvector?: observor_pb.Vector3d.AsObject,
    remainingdeltav: number,
    startburnin: number,
    burntime: number,
  }
}

export class SetManeuverNodeRequest extends jspb.Message {
  getVesselid(): string;
  setVesselid(value: string): void;

  getUt(): number;
  setUt(value: number): void;

  getPrograde(): number;
  setPrograde(value: number): void;

  getNormal(): number;
  setNormal(value: number): void;

  getRadial(): number;
  setRadial(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetManeuverNodeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SetManeuverNodeRequest): SetManeuverNodeRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SetManeuverNodeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetManeuverNodeRequest;
  static deserializeBinaryFromReader(message: SetManeuverNodeRequest, reader: jspb.BinaryReader): SetManeuverNodeRequest;
}

export namespace SetManeuverNodeRequest {
  export type AsObject = {
    vesselid: string,
    ut: number,
    prograde: number,
    normal: number,
    radial: number,
  }
}

export class SetManeuverNodeResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getMessage(): string;
  setMessage(value: string): void;

  hasNode(): boolean;
  clearNode(): void;
  getNode(): ManeuverNode | undefined;
  setNode(value?: ManeuverNode): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetManeuverNodeResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SetManeuverNodeResponse): SetManeuverNodeResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SetManeuverNodeResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetManeuverNodeResponse;
  static deserializeBinaryFromReader(message: SetManeuverNodeResponse, reader: jspb.BinaryReader): SetManeuverNodeResponse;
}

export namespace SetManeuverNodeResponse {
  export type AsObject = {
    code: number,
    message: string,
    node?: ManeuverNode.AsObject,
  }
}

export class GetManeuverNodeRequest extends jspb.Message {
  getVesselid(): string;
  setVesselid(value: string): void;

  getUt(): number;
  setUt(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetManeuverNodeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetManeuverNodeRequest): GetManeuverNodeRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetManeuverNodeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetManeuverNodeRequest;
  static deserializeBinaryFromReader(message: GetManeuverNodeRequest, reader: jspb.BinaryReader): GetManeuverNodeRequest;
}

export namespace GetManeuverNodeRequest {
  export type AsObject = {
    vesselid: string,
    ut: number,
  }
}

export class GetManeuverNodeResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getMessage(): string;
  setMessage(value: string): void;

  hasNode(): boolean;
  clearNode(): void;
  getNode(): ManeuverNode | undefined;
  setNode(value?: ManeuverNode): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetManeuverNodeResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetManeuverNodeResponse): GetManeuverNodeResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetManeuverNodeResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetManeuverNodeResponse;
  static deserializeBinaryFromReader(message: GetManeuverNodeResponse, reader: jspb.BinaryReader): GetManeuverNodeResponse;
}

export namespace GetManeuverNodeResponse {
  export type AsObject = {
    code: number,
    message: string,
    node?: ManeuverNode.AsObject,
  }
}

export class ListManeuverNodesRequest extends jspb.Message {
  getVesselid(): string;
  setVesselid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListManeuverNodesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListManeuverNodesRequest): ListManeuverNodesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListManeuverNodesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListManeuverNodesRequest;
  static deserializeBinaryFromReader(message: ListManeuverNodesRequest, reader: jspb.BinaryReader): ListManeuverNodesRequest;
}

export namespace ListManeuverNodesRequest {
  export type AsObject = {
    vesselid: string,
  }
}

export class ListManeuverNodesResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getMessage(): string;
  setMessage(value: string): void;

  clearNodesList(): void;
  getNodesList(): Array<ManeuverNode>;
  setNodesList(value: Array<ManeuverNode>): void;
  addNodes(value?: ManeuverNode, index?: number): ManeuverNode;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListManeuverNodesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListManeuverNodesResponse): ListManeuverNodesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListManeuverNodesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListManeuverNodesResponse;
  static deserializeBinaryFromReader(message: ListManeuverNodesResponse, reader: jspb.BinaryReader): ListManeuverNodesResponse;
}

export namespace ListManeuverNodesResponse {
  export type AsObject = {
    code: number,
    message: string,
    nodesList: Array<ManeuverNode.AsObject>,
  }
}

export class RemoveManeuverNodeRequest extends jspb.Message {
  getVesselid(): string;
  setVesselid(value: string): void;

  getUt(): number;
  setUt(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RemoveManeuverNodeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RemoveManeuverNodeRequest): RemoveManeuverNodeRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RemoveManeuverNodeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RemoveManeuverNodeRequest;
  static deserializeBinaryFromReader(message: RemoveManeuverNodeRequest, reader: jspb.BinaryReader): RemoveManeuverNodeRequest;
}

export namespace RemoveManeuverNodeRequest {
  export type AsObject = {
    vesselid: string,
    ut: number,
  }
}

export class RemoveManeuverNodeResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getMessage(): string;
  setMessage(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RemoveManeuverNodeResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RemoveManeuverNodeResponse): RemoveManeuverNodeResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RemoveManeuverNodeResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RemoveManeuverNodeResponse;
  static deserializeBinaryFromReader(message: RemoveManeuverNodeResponse, reader: jspb.BinaryReader): RemoveManeuverNodeResponse;
}

export namespace RemoveManeuverNodeResponse {
  export type AsObject = {
    code: number,
    message: string,
  }
}

export class UniversalTimeRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UniversalTimeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UniversalTimeRequest): UniversalTimeRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UniversalTimeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UniversalTimeRequest;
  static deserializeBinaryFromReader(message: UniversalTimeRequest, reader: jspb.BinaryReader): UniversalTimeRequest;
}

export namespace UniversalTimeRequest {
  export type AsObject = {
  }
}

export class UniversalTimeResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getMessage(): string;
  setMessage(value: string): void;

  getUt(): number;
  setUt(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UniversalTimeResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UniversalTimeResponse): UniversalTimeResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UniversalTimeResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UniversalTimeResponse;
  static deserializeBinaryFromReader(message: UniversalTimeResponse, reader: jspb.BinaryReader): UniversalTimeResponse;
}

export namespace UniversalTimeResponse {
  export type AsObject = {
    code: number,
    message: string,
    ut: number,
  }
}

export class WarpToRequest extends jspb.Message {
  getUt(): number;
  setUt(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WarpToRequest.AsObject;
  static toObject(includeInstance: boolean, msg: WarpToRequest): WarpToRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: WarpToRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WarpToRequest;
  static deserializeBinaryFromReader(message: WarpToRequest, reader: jspb.BinaryReader): WarpToRequest;
}

export namespace WarpToRequest {
  export type AsObject = {
    ut: number,
  }
}

export class WarpToResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getMessage(): string;
  setMessage(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WarpToResponse.AsObject;
  static toObject(includeInstance: boolean, msg: WarpToResponse): WarpToResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: WarpToResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WarpToResponse;
  static deserializeBinaryFromReader(message: WarpToResponse, reader: jspb.BinaryReader): WarpToResponse;
}

export namespace WarpToResponse {
  export type AsObject = {
    code: number,
    message: string,
  }
}

export class IncreaseTimeWarpRateRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IncreaseTimeWarpRateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: IncreaseTimeWarpRateRequest): IncreaseTimeWarpRateRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: IncreaseTimeWarpRateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IncreaseTimeWarpRateRequest;
  static deserializeBinaryFromReader(message: IncreaseTimeWarpRateRequest, reader: jspb.BinaryReader): IncreaseTimeWarpRateRequest;
}

export namespace IncreaseTimeWarpRateRequest {
  export type AsObject = {
  }
}

export class IncreaseTimeWarpRateResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getMessage(): string;
  setMessage(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IncreaseTimeWarpRateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: IncreaseTimeWarpRateResponse): IncreaseTimeWarpRateResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: IncreaseTimeWarpRateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IncreaseTimeWarpRateResponse;
  static deserializeBinaryFromReader(message: IncreaseTimeWarpRateResponse, reader: jspb.BinaryReader): IncreaseTimeWarpRateResponse;
}

export namespace IncreaseTimeWarpRateResponse {
  export type AsObject = {
    code: number,
    message: string,
  }
}

export class DecreaseTimeWarpRateRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DecreaseTimeWarpRateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DecreaseTimeWarpRateRequest): DecreaseTimeWarpRateRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DecreaseTimeWarpRateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DecreaseTimeWarpRateRequest;
  static deserializeBinaryFromReader(message: DecreaseTimeWarpRateRequest, reader: jspb.BinaryReader): DecreaseTimeWarpRateRequest;
}

export namespace DecreaseTimeWarpRateRequest {
  export type AsObject = {
  }
}

export class DecreaseTimeWarpRateResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getMessage(): string;
  setMessage(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DecreaseTimeWarpRateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DecreaseTimeWarpRateResponse): DecreaseTimeWarpRateResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DecreaseTimeWarpRateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DecreaseTimeWarpRateResponse;
  static deserializeBinaryFromReader(message: DecreaseTimeWarpRateResponse, reader: jspb.BinaryReader): DecreaseTimeWarpRateResponse;
}

export namespace DecreaseTimeWarpRateResponse {
  export type AsObject = {
    code: number,
    message: string,
  }
}

export class IncreaseTimeWarpRateByRequest extends jspb.Message {
  getLevels(): number;
  setLevels(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IncreaseTimeWarpRateByRequest.AsObject;
  static toObject(includeInstance: boolean, msg: IncreaseTimeWarpRateByRequest): IncreaseTimeWarpRateByRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: IncreaseTimeWarpRateByRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IncreaseTimeWarpRateByRequest;
  static deserializeBinaryFromReader(message: IncreaseTimeWarpRateByRequest, reader: jspb.BinaryReader): IncreaseTimeWarpRateByRequest;
}

export namespace IncreaseTimeWarpRateByRequest {
  export type AsObject = {
    levels: number,
  }
}

export class IncreaseTimeWarpRateByResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getMessage(): string;
  setMessage(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IncreaseTimeWarpRateByResponse.AsObject;
  static toObject(includeInstance: boolean, msg: IncreaseTimeWarpRateByResponse): IncreaseTimeWarpRateByResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: IncreaseTimeWarpRateByResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IncreaseTimeWarpRateByResponse;
  static deserializeBinaryFromReader(message: IncreaseTimeWarpRateByResponse, reader: jspb.BinaryReader): IncreaseTimeWarpRateByResponse;
}

export namespace IncreaseTimeWarpRateByResponse {
  export type AsObject = {
    code: number,
    message: string,
  }
}

export class DecreaseTimeWarpRateByRequest extends jspb.Message {
  getLevels(): number;
  setLevels(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DecreaseTimeWarpRateByRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DecreaseTimeWarpRateByRequest): DecreaseTimeWarpRateByRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DecreaseTimeWarpRateByRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DecreaseTimeWarpRateByRequest;
  static deserializeBinaryFromReader(message: DecreaseTimeWarpRateByRequest, reader: jspb.BinaryReader): DecreaseTimeWarpRateByRequest;
}

export namespace DecreaseTimeWarpRateByRequest {
  export type AsObject = {
    levels: number,
  }
}

export class DecreaseTimeWarpRateByResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getMessage(): string;
  setMessage(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DecreaseTimeWarpRateByResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DecreaseTimeWarpRateByResponse): DecreaseTimeWarpRateByResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DecreaseTimeWarpRateByResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DecreaseTimeWarpRateByResponse;
  static deserializeBinaryFromReader(message: DecreaseTimeWarpRateByResponse, reader: jspb.BinaryReader): DecreaseTimeWarpRateByResponse;
}

export namespace DecreaseTimeWarpRateByResponse {
  export type AsObject = {
    code: number,
    message: string,
  }
}

export class StopTimeWarpRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StopTimeWarpRequest.AsObject;
  static toObject(includeInstance: boolean, msg: StopTimeWarpRequest): StopTimeWarpRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StopTimeWarpRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StopTimeWarpRequest;
  static deserializeBinaryFromReader(message: StopTimeWarpRequest, reader: jspb.BinaryReader): StopTimeWarpRequest;
}

export namespace StopTimeWarpRequest {
  export type AsObject = {
  }
}

export class StopTimeWarpResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getMessage(): string;
  setMessage(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StopTimeWarpResponse.AsObject;
  static toObject(includeInstance: boolean, msg: StopTimeWarpResponse): StopTimeWarpResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StopTimeWarpResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StopTimeWarpResponse;
  static deserializeBinaryFromReader(message: StopTimeWarpResponse, reader: jspb.BinaryReader): StopTimeWarpResponse;
}

export namespace StopTimeWarpResponse {
  export type AsObject = {
    code: number,
    message: string,
  }
}

export class GetTimeWarpRateRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTimeWarpRateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetTimeWarpRateRequest): GetTimeWarpRateRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetTimeWarpRateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetTimeWarpRateRequest;
  static deserializeBinaryFromReader(message: GetTimeWarpRateRequest, reader: jspb.BinaryReader): GetTimeWarpRateRequest;
}

export namespace GetTimeWarpRateRequest {
  export type AsObject = {
  }
}

export class GetTimeWarpRateResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getMessage(): string;
  setMessage(value: string): void;

  getRate(): number;
  setRate(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTimeWarpRateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetTimeWarpRateResponse): GetTimeWarpRateResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetTimeWarpRateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetTimeWarpRateResponse;
  static deserializeBinaryFromReader(message: GetTimeWarpRateResponse, reader: jspb.BinaryReader): GetTimeWarpRateResponse;
}

export namespace GetTimeWarpRateResponse {
  export type AsObject = {
    code: number,
    message: string,
    rate: number,
  }
}

export class GetFlightSceneStartTimeRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetFlightSceneStartTimeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetFlightSceneStartTimeRequest): GetFlightSceneStartTimeRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetFlightSceneStartTimeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetFlightSceneStartTimeRequest;
  static deserializeBinaryFromReader(message: GetFlightSceneStartTimeRequest, reader: jspb.BinaryReader): GetFlightSceneStartTimeRequest;
}

export namespace GetFlightSceneStartTimeRequest {
  export type AsObject = {
  }
}

export class GetFlightSceneStartTimeResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getMessage(): string;
  setMessage(value: string): void;

  getTime(): number;
  setTime(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetFlightSceneStartTimeResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetFlightSceneStartTimeResponse): GetFlightSceneStartTimeResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetFlightSceneStartTimeResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetFlightSceneStartTimeResponse;
  static deserializeBinaryFromReader(message: GetFlightSceneStartTimeResponse, reader: jspb.BinaryReader): GetFlightSceneStartTimeResponse;
}

export namespace GetFlightSceneStartTimeResponse {
  export type AsObject = {
    code: number,
    message: string,
    time: number,
  }
}

export class SwitchActiveVesselRequest extends jspb.Message {
  getVesselid(): string;
  setVesselid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SwitchActiveVesselRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SwitchActiveVesselRequest): SwitchActiveVesselRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SwitchActiveVesselRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SwitchActiveVesselRequest;
  static deserializeBinaryFromReader(message: SwitchActiveVesselRequest, reader: jspb.BinaryReader): SwitchActiveVesselRequest;
}

export namespace SwitchActiveVesselRequest {
  export type AsObject = {
    vesselid: string,
  }
}

export class SwitchActiveVesselResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getMessage(): string;
  setMessage(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SwitchActiveVesselResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SwitchActiveVesselResponse): SwitchActiveVesselResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SwitchActiveVesselResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SwitchActiveVesselResponse;
  static deserializeBinaryFromReader(message: SwitchActiveVesselResponse, reader: jspb.BinaryReader): SwitchActiveVesselResponse;
}

export namespace SwitchActiveVesselResponse {
  export type AsObject = {
    code: number,
    message: string,
  }
}

export class SearchVesselPartsByTagRequest extends jspb.Message {
  getVesselid(): string;
  setVesselid(value: string): void;

  getTag(): string;
  setTag(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SearchVesselPartsByTagRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SearchVesselPartsByTagRequest): SearchVesselPartsByTagRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SearchVesselPartsByTagRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SearchVesselPartsByTagRequest;
  static deserializeBinaryFromReader(message: SearchVesselPartsByTagRequest, reader: jspb.BinaryReader): SearchVesselPartsByTagRequest;
}

export namespace SearchVesselPartsByTagRequest {
  export type AsObject = {
    vesselid: string,
    tag: string,
  }
}

export class SearchVesselPartsByTagResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getMessage(): string;
  setMessage(value: string): void;

  clearPartsList(): void;
  getPartsList(): Array<Part>;
  setPartsList(value: Array<Part>): void;
  addParts(value?: Part, index?: number): Part;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SearchVesselPartsByTagResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SearchVesselPartsByTagResponse): SearchVesselPartsByTagResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SearchVesselPartsByTagResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SearchVesselPartsByTagResponse;
  static deserializeBinaryFromReader(message: SearchVesselPartsByTagResponse, reader: jspb.BinaryReader): SearchVesselPartsByTagResponse;
}

export namespace SearchVesselPartsByTagResponse {
  export type AsObject = {
    code: number,
    message: string,
    partsList: Array<Part.AsObject>,
  }
}

export class GetVesselPartsByTypeRequest extends jspb.Message {
  getVesselid(): string;
  setVesselid(value: string): void;

  getParttype(): Part.PartTypeMap[keyof Part.PartTypeMap];
  setParttype(value: Part.PartTypeMap[keyof Part.PartTypeMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetVesselPartsByTypeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetVesselPartsByTypeRequest): GetVesselPartsByTypeRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetVesselPartsByTypeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetVesselPartsByTypeRequest;
  static deserializeBinaryFromReader(message: GetVesselPartsByTypeRequest, reader: jspb.BinaryReader): GetVesselPartsByTypeRequest;
}

export namespace GetVesselPartsByTypeRequest {
  export type AsObject = {
    vesselid: string,
    parttype: Part.PartTypeMap[keyof Part.PartTypeMap],
  }
}

export class GetVesselPartsByTypeResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getMessage(): string;
  setMessage(value: string): void;

  clearPartsList(): void;
  getPartsList(): Array<Part>;
  setPartsList(value: Array<Part>): void;
  addParts(value?: Part, index?: number): Part;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetVesselPartsByTypeResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetVesselPartsByTypeResponse): GetVesselPartsByTypeResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetVesselPartsByTypeResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetVesselPartsByTypeResponse;
  static deserializeBinaryFromReader(message: GetVesselPartsByTypeResponse, reader: jspb.BinaryReader): GetVesselPartsByTypeResponse;
}

export namespace GetVesselPartsByTypeResponse {
  export type AsObject = {
    code: number,
    message: string,
    partsList: Array<Part.AsObject>,
  }
}

export class StageRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StageRequest.AsObject;
  static toObject(includeInstance: boolean, msg: StageRequest): StageRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StageRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StageRequest;
  static deserializeBinaryFromReader(message: StageRequest, reader: jspb.BinaryReader): StageRequest;
}

export namespace StageRequest {
  export type AsObject = {
  }
}

export class StageResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getMessage(): string;
  setMessage(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StageResponse.AsObject;
  static toObject(includeInstance: boolean, msg: StageResponse): StageResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StageResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StageResponse;
  static deserializeBinaryFromReader(message: StageResponse, reader: jspb.BinaryReader): StageResponse;
}

export namespace StageResponse {
  export type AsObject = {
    code: number,
    message: string,
  }
}

export class ThrottleRequest extends jspb.Message {
  getVesselid(): string;
  setVesselid(value: string): void;

  getValue(): number;
  setValue(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ThrottleRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ThrottleRequest): ThrottleRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ThrottleRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ThrottleRequest;
  static deserializeBinaryFromReader(message: ThrottleRequest, reader: jspb.BinaryReader): ThrottleRequest;
}

export namespace ThrottleRequest {
  export type AsObject = {
    vesselid: string,
    value: number,
  }
}

export class ThrottleResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getMessage(): string;
  setMessage(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ThrottleResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ThrottleResponse): ThrottleResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ThrottleResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ThrottleResponse;
  static deserializeBinaryFromReader(message: ThrottleResponse, reader: jspb.BinaryReader): ThrottleResponse;
}

export namespace ThrottleResponse {
  export type AsObject = {
    code: number,
    message: string,
  }
}

export class SetSASRequest extends jspb.Message {
  getVesselid(): string;
  setVesselid(value: string): void;

  getEnabled(): boolean;
  setEnabled(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetSASRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SetSASRequest): SetSASRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SetSASRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetSASRequest;
  static deserializeBinaryFromReader(message: SetSASRequest, reader: jspb.BinaryReader): SetSASRequest;
}

export namespace SetSASRequest {
  export type AsObject = {
    vesselid: string,
    enabled: boolean,
  }
}

export class SetSASResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getMessage(): string;
  setMessage(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetSASResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SetSASResponse): SetSASResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SetSASResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetSASResponse;
  static deserializeBinaryFromReader(message: SetSASResponse, reader: jspb.BinaryReader): SetSASResponse;
}

export namespace SetSASResponse {
  export type AsObject = {
    code: number,
    message: string,
  }
}

export class SetSASModeRequest extends jspb.Message {
  getVesselid(): string;
  setVesselid(value: string): void;

  getMode(): number;
  setMode(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetSASModeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SetSASModeRequest): SetSASModeRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SetSASModeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetSASModeRequest;
  static deserializeBinaryFromReader(message: SetSASModeRequest, reader: jspb.BinaryReader): SetSASModeRequest;
}

export namespace SetSASModeRequest {
  export type AsObject = {
    vesselid: string,
    mode: number,
  }
}

export class SetSASModeResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getMessage(): string;
  setMessage(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetSASModeResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SetSASModeResponse): SetSASModeResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SetSASModeResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetSASModeResponse;
  static deserializeBinaryFromReader(message: SetSASModeResponse, reader: jspb.BinaryReader): SetSASModeResponse;
}

export namespace SetSASModeResponse {
  export type AsObject = {
    code: number,
    message: string,
  }
}

export class SetRCSRequest extends jspb.Message {
  getVesselid(): string;
  setVesselid(value: string): void;

  getEnabled(): boolean;
  setEnabled(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetRCSRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SetRCSRequest): SetRCSRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SetRCSRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetRCSRequest;
  static deserializeBinaryFromReader(message: SetRCSRequest, reader: jspb.BinaryReader): SetRCSRequest;
}

export namespace SetRCSRequest {
  export type AsObject = {
    vesselid: string,
    enabled: boolean,
  }
}

export class SetRCSResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getMessage(): string;
  setMessage(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetRCSResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SetRCSResponse): SetRCSResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SetRCSResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetRCSResponse;
  static deserializeBinaryFromReader(message: SetRCSResponse, reader: jspb.BinaryReader): SetRCSResponse;
}

export namespace SetRCSResponse {
  export type AsObject = {
    code: number,
    message: string,
  }
}

export class SetLightsRequest extends jspb.Message {
  getVesselid(): string;
  setVesselid(value: string): void;

  getEnabled(): boolean;
  setEnabled(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetLightsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SetLightsRequest): SetLightsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SetLightsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetLightsRequest;
  static deserializeBinaryFromReader(message: SetLightsRequest, reader: jspb.BinaryReader): SetLightsRequest;
}

export namespace SetLightsRequest {
  export type AsObject = {
    vesselid: string,
    enabled: boolean,
  }
}

export class SetLightsResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getMessage(): string;
  setMessage(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetLightsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SetLightsResponse): SetLightsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SetLightsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetLightsResponse;
  static deserializeBinaryFromReader(message: SetLightsResponse, reader: jspb.BinaryReader): SetLightsResponse;
}

export namespace SetLightsResponse {
  export type AsObject = {
    code: number,
    message: string,
  }
}

export class SetAntennasRequest extends jspb.Message {
  getVesselid(): string;
  setVesselid(value: string): void;

  getEnabled(): boolean;
  setEnabled(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetAntennasRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SetAntennasRequest): SetAntennasRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SetAntennasRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetAntennasRequest;
  static deserializeBinaryFromReader(message: SetAntennasRequest, reader: jspb.BinaryReader): SetAntennasRequest;
}

export namespace SetAntennasRequest {
  export type AsObject = {
    vesselid: string,
    enabled: boolean,
  }
}

export class SetAntennasResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getMessage(): string;
  setMessage(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetAntennasResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SetAntennasResponse): SetAntennasResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SetAntennasResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetAntennasResponse;
  static deserializeBinaryFromReader(message: SetAntennasResponse, reader: jspb.BinaryReader): SetAntennasResponse;
}

export namespace SetAntennasResponse {
  export type AsObject = {
    code: number,
    message: string,
  }
}

export class ToggleActionGroupRequest extends jspb.Message {
  getVesselid(): string;
  setVesselid(value: string): void;

  getGroupid(): number;
  setGroupid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ToggleActionGroupRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ToggleActionGroupRequest): ToggleActionGroupRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ToggleActionGroupRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ToggleActionGroupRequest;
  static deserializeBinaryFromReader(message: ToggleActionGroupRequest, reader: jspb.BinaryReader): ToggleActionGroupRequest;
}

export namespace ToggleActionGroupRequest {
  export type AsObject = {
    vesselid: string,
    groupid: number,
  }
}

export class ToggleActionGroupResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getMessage(): string;
  setMessage(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ToggleActionGroupResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ToggleActionGroupResponse): ToggleActionGroupResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ToggleActionGroupResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ToggleActionGroupResponse;
  static deserializeBinaryFromReader(message: ToggleActionGroupResponse, reader: jspb.BinaryReader): ToggleActionGroupResponse;
}

export namespace ToggleActionGroupResponse {
  export type AsObject = {
    code: number,
    message: string,
  }
}

export class SetSolarPanelsRequest extends jspb.Message {
  getVesselid(): string;
  setVesselid(value: string): void;

  getEnabled(): boolean;
  setEnabled(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetSolarPanelsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SetSolarPanelsRequest): SetSolarPanelsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SetSolarPanelsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetSolarPanelsRequest;
  static deserializeBinaryFromReader(message: SetSolarPanelsRequest, reader: jspb.BinaryReader): SetSolarPanelsRequest;
}

export namespace SetSolarPanelsRequest {
  export type AsObject = {
    vesselid: string,
    enabled: boolean,
  }
}

export class SetSolarPanelsResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getMessage(): string;
  setMessage(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetSolarPanelsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SetSolarPanelsResponse): SetSolarPanelsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SetSolarPanelsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetSolarPanelsResponse;
  static deserializeBinaryFromReader(message: SetSolarPanelsResponse, reader: jspb.BinaryReader): SetSolarPanelsResponse;
}

export namespace SetSolarPanelsResponse {
  export type AsObject = {
    code: number,
    message: string,
  }
}

export class SetHeadingRequest extends jspb.Message {
  getVesselid(): string;
  setVesselid(value: string): void;

  getPitch(): number;
  setPitch(value: number): void;

  getYaw(): number;
  setYaw(value: number): void;

  getStablefirst(): boolean;
  setStablefirst(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetHeadingRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SetHeadingRequest): SetHeadingRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SetHeadingRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetHeadingRequest;
  static deserializeBinaryFromReader(message: SetHeadingRequest, reader: jspb.BinaryReader): SetHeadingRequest;
}

export namespace SetHeadingRequest {
  export type AsObject = {
    vesselid: string,
    pitch: number,
    yaw: number,
    stablefirst: boolean,
  }
}

export class SetHeadingResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getMessage(): string;
  setMessage(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetHeadingResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SetHeadingResponse): SetHeadingResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SetHeadingResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetHeadingResponse;
  static deserializeBinaryFromReader(message: SetHeadingResponse, reader: jspb.BinaryReader): SetHeadingResponse;
}

export namespace SetHeadingResponse {
  export type AsObject = {
    code: number,
    message: string,
  }
}

export class SetHeadingRollFirstRequest extends jspb.Message {
  getVesselid(): string;
  setVesselid(value: string): void;

  getPitch(): number;
  setPitch(value: number): void;

  getYaw(): number;
  setYaw(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetHeadingRollFirstRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SetHeadingRollFirstRequest): SetHeadingRollFirstRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SetHeadingRollFirstRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetHeadingRollFirstRequest;
  static deserializeBinaryFromReader(message: SetHeadingRollFirstRequest, reader: jspb.BinaryReader): SetHeadingRollFirstRequest;
}

export namespace SetHeadingRollFirstRequest {
  export type AsObject = {
    vesselid: string,
    pitch: number,
    yaw: number,
  }
}

export class SetHeadingRollFirstResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getMessage(): string;
  setMessage(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetHeadingRollFirstResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SetHeadingRollFirstResponse): SetHeadingRollFirstResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SetHeadingRollFirstResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetHeadingRollFirstResponse;
  static deserializeBinaryFromReader(message: SetHeadingRollFirstResponse, reader: jspb.BinaryReader): SetHeadingRollFirstResponse;
}

export namespace SetHeadingRollFirstResponse {
  export type AsObject = {
    code: number,
    message: string,
  }
}

export class SetOrientationRequest extends jspb.Message {
  getVesselid(): string;
  setVesselid(value: string): void;

  getPitch(): number;
  setPitch(value: number): void;

  getYaw(): number;
  setYaw(value: number): void;

  getRoll(): number;
  setRoll(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetOrientationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SetOrientationRequest): SetOrientationRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SetOrientationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetOrientationRequest;
  static deserializeBinaryFromReader(message: SetOrientationRequest, reader: jspb.BinaryReader): SetOrientationRequest;
}

export namespace SetOrientationRequest {
  export type AsObject = {
    vesselid: string,
    pitch: number,
    yaw: number,
    roll: number,
  }
}

export class SetOrientationResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getMessage(): string;
  setMessage(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetOrientationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SetOrientationResponse): SetOrientationResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SetOrientationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetOrientationResponse;
  static deserializeBinaryFromReader(message: SetOrientationResponse, reader: jspb.BinaryReader): SetOrientationResponse;
}

export namespace SetOrientationResponse {
  export type AsObject = {
    code: number,
    message: string,
  }
}

export class SetOrientationRollFirstRequest extends jspb.Message {
  getVesselid(): string;
  setVesselid(value: string): void;

  getPitch(): number;
  setPitch(value: number): void;

  getYaw(): number;
  setYaw(value: number): void;

  getRoll(): number;
  setRoll(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetOrientationRollFirstRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SetOrientationRollFirstRequest): SetOrientationRollFirstRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SetOrientationRollFirstRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetOrientationRollFirstRequest;
  static deserializeBinaryFromReader(message: SetOrientationRollFirstRequest, reader: jspb.BinaryReader): SetOrientationRollFirstRequest;
}

export namespace SetOrientationRollFirstRequest {
  export type AsObject = {
    vesselid: string,
    pitch: number,
    yaw: number,
    roll: number,
  }
}

export class SetOrientationRollFirstResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getMessage(): string;
  setMessage(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetOrientationRollFirstResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SetOrientationRollFirstResponse): SetOrientationRollFirstResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SetOrientationRollFirstResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetOrientationRollFirstResponse;
  static deserializeBinaryFromReader(message: SetOrientationRollFirstResponse, reader: jspb.BinaryReader): SetOrientationRollFirstResponse;
}

export namespace SetOrientationRollFirstResponse {
  export type AsObject = {
    code: number,
    message: string,
  }
}

export class DisengageAutoPilotRequest extends jspb.Message {
  getVesselid(): string;
  setVesselid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DisengageAutoPilotRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DisengageAutoPilotRequest): DisengageAutoPilotRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DisengageAutoPilotRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DisengageAutoPilotRequest;
  static deserializeBinaryFromReader(message: DisengageAutoPilotRequest, reader: jspb.BinaryReader): DisengageAutoPilotRequest;
}

export namespace DisengageAutoPilotRequest {
  export type AsObject = {
    vesselid: string,
  }
}

export class DisengageAutoPilotResponse extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getMessage(): string;
  setMessage(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DisengageAutoPilotResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DisengageAutoPilotResponse): DisengageAutoPilotResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DisengageAutoPilotResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DisengageAutoPilotResponse;
  static deserializeBinaryFromReader(message: DisengageAutoPilotResponse, reader: jspb.BinaryReader): DisengageAutoPilotResponse;
}

export namespace DisengageAutoPilotResponse {
  export type AsObject = {
    code: number,
    message: string,
  }
}

export class Request extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Request.AsObject;
  static toObject(includeInstance: boolean, msg: Request): Request.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Request, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Request;
  static deserializeBinaryFromReader(message: Request, reader: jspb.BinaryReader): Request;
}

export namespace Request {
  export type AsObject = {
  }
}

export class Response extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getMessage(): string;
  setMessage(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Response.AsObject;
  static toObject(includeInstance: boolean, msg: Response): Response.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Response, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Response;
  static deserializeBinaryFromReader(message: Response, reader: jspb.BinaryReader): Response;
}

export namespace Response {
  export type AsObject = {
    code: number,
    message: string,
  }
}

export class Wheel extends jspb.Message {
  getType(): observor_pb.WheelSnapshot.WheelTypeMap[keyof observor_pb.WheelSnapshot.WheelTypeMap];
  setType(value: observor_pb.WheelSnapshot.WheelTypeMap[keyof observor_pb.WheelSnapshot.WheelTypeMap]): void;

  getState(): observor_pb.WheelSnapshot.WheelStateMap[keyof observor_pb.WheelSnapshot.WheelStateMap];
  setState(value: observor_pb.WheelSnapshot.WheelStateMap[keyof observor_pb.WheelSnapshot.WheelStateMap]): void;

  getRadius(): number;
  setRadius(value: number): void;

  getGrounded(): boolean;
  setGrounded(value: boolean): void;

  getHasbrakes(): boolean;
  setHasbrakes(value: boolean): void;

  getBrakeforce(): number;
  setBrakeforce(value: number): void;

  getAutofrictioncontrol(): boolean;
  setAutofrictioncontrol(value: boolean): void;

  getManualfrictioncontrol(): number;
  setManualfrictioncontrol(value: number): void;

  getDeployable(): boolean;
  setDeployable(value: boolean): void;

  getDeployed(): boolean;
  setDeployed(value: boolean): void;

  getPowered(): boolean;
  setPowered(value: boolean): void;

  getMotorenabled(): boolean;
  setMotorenabled(value: boolean): void;

  getMotorinverted(): boolean;
  setMotorinverted(value: boolean): void;

  getMotorstate(): observor_pb.WheelSnapshot.MotorStateMap[keyof observor_pb.WheelSnapshot.MotorStateMap];
  setMotorstate(value: observor_pb.WheelSnapshot.MotorStateMap[keyof observor_pb.WheelSnapshot.MotorStateMap]): void;

  getMotoroutput(): number;
  setMotoroutput(value: number): void;

  getTractioncontrolenabled(): boolean;
  setTractioncontrolenabled(value: boolean): void;

  getTractioncontrol(): number;
  setTractioncontrol(value: number): void;

  getDrivelimiter(): number;
  setDrivelimiter(value: number): void;

  getSteerable(): boolean;
  setSteerable(value: boolean): void;

  getSteeringenabled(): boolean;
  setSteeringenabled(value: boolean): void;

  getSteeringinverted(): boolean;
  setSteeringinverted(value: boolean): void;

  getHassuspension(): boolean;
  setHassuspension(value: boolean): void;

  getSuspensionspringstrength(): number;
  setSuspensionspringstrength(value: number): void;

  getSuspensiondamperstrength(): number;
  setSuspensiondamperstrength(value: number): void;

  getBroken(): boolean;
  setBroken(value: boolean): void;

  getRepairable(): boolean;
  setRepairable(value: boolean): void;

  getStress(): number;
  setStress(value: number): void;

  getStresstolerance(): number;
  setStresstolerance(value: number): void;

  getStresspercentage(): number;
  setStresspercentage(value: number): void;

  getDeflection(): number;
  setDeflection(value: number): void;

  getSlip(): number;
  setSlip(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Wheel.AsObject;
  static toObject(includeInstance: boolean, msg: Wheel): Wheel.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Wheel, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Wheel;
  static deserializeBinaryFromReader(message: Wheel, reader: jspb.BinaryReader): Wheel;
}

export namespace Wheel {
  export type AsObject = {
    type: observor_pb.WheelSnapshot.WheelTypeMap[keyof observor_pb.WheelSnapshot.WheelTypeMap],
    state: observor_pb.WheelSnapshot.WheelStateMap[keyof observor_pb.WheelSnapshot.WheelStateMap],
    radius: number,
    grounded: boolean,
    hasbrakes: boolean,
    brakeforce: number,
    autofrictioncontrol: boolean,
    manualfrictioncontrol: number,
    deployable: boolean,
    deployed: boolean,
    powered: boolean,
    motorenabled: boolean,
    motorinverted: boolean,
    motorstate: observor_pb.WheelSnapshot.MotorStateMap[keyof observor_pb.WheelSnapshot.MotorStateMap],
    motoroutput: number,
    tractioncontrolenabled: boolean,
    tractioncontrol: number,
    drivelimiter: number,
    steerable: boolean,
    steeringenabled: boolean,
    steeringinverted: boolean,
    hassuspension: boolean,
    suspensionspringstrength: number,
    suspensiondamperstrength: number,
    broken: boolean,
    repairable: boolean,
    stress: number,
    stresstolerance: number,
    stresspercentage: number,
    deflection: number,
    slip: number,
  }
}

export class SolarPanel extends jspb.Message {
  getState(): observor_pb.SolarPanelSnapshot.SolarPanelStateMap[keyof observor_pb.SolarPanelSnapshot.SolarPanelStateMap];
  setState(value: observor_pb.SolarPanelSnapshot.SolarPanelStateMap[keyof observor_pb.SolarPanelSnapshot.SolarPanelStateMap]): void;

  getDeployable(): boolean;
  setDeployable(value: boolean): void;

  getDeployed(): boolean;
  setDeployed(value: boolean): void;

  getEnergyflow(): number;
  setEnergyflow(value: number): void;

  getSunexposure(): number;
  setSunexposure(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SolarPanel.AsObject;
  static toObject(includeInstance: boolean, msg: SolarPanel): SolarPanel.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SolarPanel, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SolarPanel;
  static deserializeBinaryFromReader(message: SolarPanel, reader: jspb.BinaryReader): SolarPanel;
}

export namespace SolarPanel {
  export type AsObject = {
    state: observor_pb.SolarPanelSnapshot.SolarPanelStateMap[keyof observor_pb.SolarPanelSnapshot.SolarPanelStateMap],
    deployable: boolean,
    deployed: boolean,
    energyflow: number,
    sunexposure: number,
  }
}

export class Sensor extends jspb.Message {
  getActivated(): boolean;
  setActivated(value: boolean): void;

  getReading(): string;
  setReading(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Sensor.AsObject;
  static toObject(includeInstance: boolean, msg: Sensor): Sensor.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Sensor, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Sensor;
  static deserializeBinaryFromReader(message: Sensor, reader: jspb.BinaryReader): Sensor;
}

export namespace Sensor {
  export type AsObject = {
    activated: boolean,
    reading: string,
  }
}

export class ResourceHarvester extends jspb.Message {
  getState(): observor_pb.ResourceHarvesterSnapshot.ResourceHarvesterStateMap[keyof observor_pb.ResourceHarvesterSnapshot.ResourceHarvesterStateMap];
  setState(value: observor_pb.ResourceHarvesterSnapshot.ResourceHarvesterStateMap[keyof observor_pb.ResourceHarvesterSnapshot.ResourceHarvesterStateMap]): void;

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

  getOptimumcoretemperature(): number;
  setOptimumcoretemperature(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResourceHarvester.AsObject;
  static toObject(includeInstance: boolean, msg: ResourceHarvester): ResourceHarvester.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ResourceHarvester, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResourceHarvester;
  static deserializeBinaryFromReader(message: ResourceHarvester, reader: jspb.BinaryReader): ResourceHarvester;
}

export namespace ResourceHarvester {
  export type AsObject = {
    state: observor_pb.ResourceHarvesterSnapshot.ResourceHarvesterStateMap[keyof observor_pb.ResourceHarvesterSnapshot.ResourceHarvesterStateMap],
    deployed: boolean,
    activated: boolean,
    extractionrate: number,
    thermalefficiency: number,
    coretemperature: number,
    optimumcoretemperature: number,
  }
}

export class ConverterResource extends jspb.Message {
  getResourcename(): string;
  setResourcename(value: string): void;

  getRatio(): number;
  setRatio(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConverterResource.AsObject;
  static toObject(includeInstance: boolean, msg: ConverterResource): ConverterResource.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ConverterResource, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConverterResource;
  static deserializeBinaryFromReader(message: ConverterResource, reader: jspb.BinaryReader): ConverterResource;
}

export namespace ConverterResource {
  export type AsObject = {
    resourcename: string,
    ratio: number,
  }
}

export class Converter extends jspb.Message {
  getState(): observor_pb.ConverterSnapshot.ResourceConverterStateMap[keyof observor_pb.ConverterSnapshot.ResourceConverterStateMap];
  setState(value: observor_pb.ConverterSnapshot.ResourceConverterStateMap[keyof observor_pb.ConverterSnapshot.ResourceConverterStateMap]): void;

  getName(): string;
  setName(value: string): void;

  getActive(): boolean;
  setActive(value: boolean): void;

  getStatus(): string;
  setStatus(value: string): void;

  getThermalefficiency(): number;
  setThermalefficiency(value: number): void;

  getCoretemperature(): number;
  setCoretemperature(value: number): void;

  getOptimumcoretemperature(): number;
  setOptimumcoretemperature(value: number): void;

  clearInputsList(): void;
  getInputsList(): Array<ConverterResource>;
  setInputsList(value: Array<ConverterResource>): void;
  addInputs(value?: ConverterResource, index?: number): ConverterResource;

  clearOutputsList(): void;
  getOutputsList(): Array<ConverterResource>;
  setOutputsList(value: Array<ConverterResource>): void;
  addOutputs(value?: ConverterResource, index?: number): ConverterResource;

  clearRequirementsList(): void;
  getRequirementsList(): Array<ConverterResource>;
  setRequirementsList(value: Array<ConverterResource>): void;
  addRequirements(value?: ConverterResource, index?: number): ConverterResource;

  getIndex(): number;
  setIndex(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Converter.AsObject;
  static toObject(includeInstance: boolean, msg: Converter): Converter.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Converter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Converter;
  static deserializeBinaryFromReader(message: Converter, reader: jspb.BinaryReader): Converter;
}

export namespace Converter {
  export type AsObject = {
    state: observor_pb.ConverterSnapshot.ResourceConverterStateMap[keyof observor_pb.ConverterSnapshot.ResourceConverterStateMap],
    name: string,
    active: boolean,
    status: string,
    thermalefficiency: number,
    coretemperature: number,
    optimumcoretemperature: number,
    inputsList: Array<ConverterResource.AsObject>,
    outputsList: Array<ConverterResource.AsObject>,
    requirementsList: Array<ConverterResource.AsObject>,
    index: number,
  }
}

export class ResourceConverter extends jspb.Message {
  clearConvertersList(): void;
  getConvertersList(): Array<Converter>;
  setConvertersList(value: Array<Converter>): void;
  addConverters(value?: Converter, index?: number): Converter;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResourceConverter.AsObject;
  static toObject(includeInstance: boolean, msg: ResourceConverter): ResourceConverter.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ResourceConverter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResourceConverter;
  static deserializeBinaryFromReader(message: ResourceConverter, reader: jspb.BinaryReader): ResourceConverter;
}

export namespace ResourceConverter {
  export type AsObject = {
    convertersList: Array<Converter.AsObject>,
  }
}

export class ReactionWheel extends jspb.Message {
  getState(): observor_pb.ReactionWheelSnapshot.ReactionWheelStateMap[keyof observor_pb.ReactionWheelSnapshot.ReactionWheelStateMap];
  setState(value: observor_pb.ReactionWheelSnapshot.ReactionWheelStateMap[keyof observor_pb.ReactionWheelSnapshot.ReactionWheelStateMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReactionWheel.AsObject;
  static toObject(includeInstance: boolean, msg: ReactionWheel): ReactionWheel.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ReactionWheel, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReactionWheel;
  static deserializeBinaryFromReader(message: ReactionWheel, reader: jspb.BinaryReader): ReactionWheel;
}

export namespace ReactionWheel {
  export type AsObject = {
    state: observor_pb.ReactionWheelSnapshot.ReactionWheelStateMap[keyof observor_pb.ReactionWheelSnapshot.ReactionWheelStateMap],
  }
}

export class RCS extends jspb.Message {
  getEnabled(): boolean;
  setEnabled(value: boolean): void;

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

  clearPropellantnamesList(): void;
  getPropellantnamesList(): Array<string>;
  setPropellantnamesList(value: Array<string>): void;
  addPropellantnames(value: string, index?: number): string;

  getPropellantsMap(): jspb.Map<string, observor_pb.Propellant>;
  clearPropellantsMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RCS.AsObject;
  static toObject(includeInstance: boolean, msg: RCS): RCS.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RCS, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RCS;
  static deserializeBinaryFromReader(message: RCS, reader: jspb.BinaryReader): RCS;
}

export namespace RCS {
  export type AsObject = {
    enabled: boolean,
    pitchenabled: boolean,
    yawenabled: boolean,
    rollenabled: boolean,
    upenabled: boolean,
    forwardenabled: boolean,
    rightenabled: boolean,
    hasfuel: boolean,
    propellantnamesList: Array<string>,
    propellantsMap: Array<[string, observor_pb.Propellant.AsObject]>,
  }
}

export class Radiator extends jspb.Message {
  getState(): observor_pb.RadiatorSnapshot.RadiatorStateMap[keyof observor_pb.RadiatorSnapshot.RadiatorStateMap];
  setState(value: observor_pb.RadiatorSnapshot.RadiatorStateMap[keyof observor_pb.RadiatorSnapshot.RadiatorStateMap]): void;

  getDeployable(): boolean;
  setDeployable(value: boolean): void;

  getDeployed(): boolean;
  setDeployed(value: boolean): void;

  getCooling(): boolean;
  setCooling(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Radiator.AsObject;
  static toObject(includeInstance: boolean, msg: Radiator): Radiator.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Radiator, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Radiator;
  static deserializeBinaryFromReader(message: Radiator, reader: jspb.BinaryReader): Radiator;
}

export namespace Radiator {
  export type AsObject = {
    state: observor_pb.RadiatorSnapshot.RadiatorStateMap[keyof observor_pb.RadiatorSnapshot.RadiatorStateMap],
    deployable: boolean,
    deployed: boolean,
    cooling: boolean,
  }
}

export class Parachute extends jspb.Message {
  getState(): observor_pb.ParachuteSnapshot.ParachuteStateMap[keyof observor_pb.ParachuteSnapshot.ParachuteStateMap];
  setState(value: observor_pb.ParachuteSnapshot.ParachuteStateMap[keyof observor_pb.ParachuteSnapshot.ParachuteStateMap]): void;

  getDeployed(): boolean;
  setDeployed(value: boolean): void;

  getDeployaltitude(): number;
  setDeployaltitude(value: number): void;

  getDeployminpressure(): number;
  setDeployminpressure(value: number): void;

  getDeploymentsafestate(): observor_pb.ParachuteSnapshot.DeploymentSafeStateMap[keyof observor_pb.ParachuteSnapshot.DeploymentSafeStateMap];
  setDeploymentsafestate(value: observor_pb.ParachuteSnapshot.DeploymentSafeStateMap[keyof observor_pb.ParachuteSnapshot.DeploymentSafeStateMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Parachute.AsObject;
  static toObject(includeInstance: boolean, msg: Parachute): Parachute.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Parachute, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Parachute;
  static deserializeBinaryFromReader(message: Parachute, reader: jspb.BinaryReader): Parachute;
}

export namespace Parachute {
  export type AsObject = {
    state: observor_pb.ParachuteSnapshot.ParachuteStateMap[keyof observor_pb.ParachuteSnapshot.ParachuteStateMap],
    deployed: boolean,
    deployaltitude: number,
    deployminpressure: number,
    deploymentsafestate: observor_pb.ParachuteSnapshot.DeploymentSafeStateMap[keyof observor_pb.ParachuteSnapshot.DeploymentSafeStateMap],
  }
}

export class Light extends jspb.Message {
  getOn(): boolean;
  setOn(value: boolean): void;

  getPowerusage(): number;
  setPowerusage(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Light.AsObject;
  static toObject(includeInstance: boolean, msg: Light): Light.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Light, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Light;
  static deserializeBinaryFromReader(message: Light, reader: jspb.BinaryReader): Light;
}

export namespace Light {
  export type AsObject = {
    on: boolean,
    powerusage: number,
  }
}

export class Leg extends jspb.Message {
  getState(): observor_pb.LegSnapshot.LegStateMap[keyof observor_pb.LegSnapshot.LegStateMap];
  setState(value: observor_pb.LegSnapshot.LegStateMap[keyof observor_pb.LegSnapshot.LegStateMap]): void;

  getDeployable(): boolean;
  setDeployable(value: boolean): void;

  getDeployed(): boolean;
  setDeployed(value: boolean): void;

  getGrounded(): boolean;
  setGrounded(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Leg.AsObject;
  static toObject(includeInstance: boolean, msg: Leg): Leg.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Leg, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Leg;
  static deserializeBinaryFromReader(message: Leg, reader: jspb.BinaryReader): Leg;
}

export namespace Leg {
  export type AsObject = {
    state: observor_pb.LegSnapshot.LegStateMap[keyof observor_pb.LegSnapshot.LegStateMap],
    deployable: boolean,
    deployed: boolean,
    grounded: boolean,
  }
}

export class Intake extends jspb.Message {
  getOpen(): boolean;
  setOpen(value: boolean): void;

  getSpeed(): number;
  setSpeed(value: number): void;

  getFlow(): number;
  setFlow(value: number): void;

  getArea(): number;
  setArea(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Intake.AsObject;
  static toObject(includeInstance: boolean, msg: Intake): Intake.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Intake, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Intake;
  static deserializeBinaryFromReader(message: Intake, reader: jspb.BinaryReader): Intake;
}

export namespace Intake {
  export type AsObject = {
    open: boolean,
    speed: number,
    flow: number,
    area: number,
  }
}

export class Fairing extends jspb.Message {
  getJettisoned(): boolean;
  setJettisoned(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Fairing.AsObject;
  static toObject(includeInstance: boolean, msg: Fairing): Fairing.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Fairing, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Fairing;
  static deserializeBinaryFromReader(message: Fairing, reader: jspb.BinaryReader): Fairing;
}

export namespace Fairing {
  export type AsObject = {
    jettisoned: boolean,
  }
}

export class Engine extends jspb.Message {
  getActive(): boolean;
  setActive(value: boolean): void;

  getThrust(): number;
  setThrust(value: number): void;

  getMaxvacuumthrust(): number;
  setMaxvacuumthrust(value: number): void;

  getThrustpercentage(): number;
  setThrustpercentage(value: number): void;

  getSpecificimpulse(): number;
  setSpecificimpulse(value: number): void;

  getVacuumspecificimpulse(): number;
  setVacuumspecificimpulse(value: number): void;

  getKerbinsealevelspecificimpulse(): number;
  setKerbinsealevelspecificimpulse(value: number): void;

  clearPropellantnamesList(): void;
  getPropellantnamesList(): Array<string>;
  setPropellantnamesList(value: Array<string>): void;
  addPropellantnames(value: string, index?: number): string;

  getPropellantsMap(): jspb.Map<string, observor_pb.Propellant>;
  clearPropellantsMap(): void;
  getHasfuel(): boolean;
  setHasfuel(value: boolean): void;

  getThrottle(): number;
  setThrottle(value: number): void;

  getThrottlelocked(): boolean;
  setThrottlelocked(value: boolean): void;

  getCanrestart(): boolean;
  setCanrestart(value: boolean): void;

  getCanshutdown(): boolean;
  setCanshutdown(value: boolean): void;

  getHasmodes(): boolean;
  setHasmodes(value: boolean): void;

  getAutoswitchmode(): boolean;
  setAutoswitchmode(value: boolean): void;

  getMode(): string;
  setMode(value: string): void;

  clearModesList(): void;
  getModesList(): Array<string>;
  setModesList(value: Array<string>): void;
  addModes(value: string, index?: number): string;

  getGimballed(): boolean;
  setGimballed(value: boolean): void;

  getGimbalrange(): number;
  setGimbalrange(value: number): void;

  getGimballocked(): boolean;
  setGimballocked(value: boolean): void;

  getGimballimit(): number;
  setGimballimit(value: number): void;

  getFlameout(): boolean;
  setFlameout(value: boolean): void;

  getElectricitychargerate(): number;
  setElectricitychargerate(value: number): void;

  getRemainingignitions(): number;
  setRemainingignitions(value: number): void;

  getIgnitions(): number;
  setIgnitions(value: number): void;

  getActualthrottle(): number;
  setActualthrottle(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Engine.AsObject;
  static toObject(includeInstance: boolean, msg: Engine): Engine.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Engine, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Engine;
  static deserializeBinaryFromReader(message: Engine, reader: jspb.BinaryReader): Engine;
}

export namespace Engine {
  export type AsObject = {
    active: boolean,
    thrust: number,
    maxvacuumthrust: number,
    thrustpercentage: number,
    specificimpulse: number,
    vacuumspecificimpulse: number,
    kerbinsealevelspecificimpulse: number,
    propellantnamesList: Array<string>,
    propellantsMap: Array<[string, observor_pb.Propellant.AsObject]>,
    hasfuel: boolean,
    throttle: number,
    throttlelocked: boolean,
    canrestart: boolean,
    canshutdown: boolean,
    hasmodes: boolean,
    autoswitchmode: boolean,
    mode: string,
    modesList: Array<string>,
    gimballed: boolean,
    gimbalrange: number,
    gimballocked: boolean,
    gimballimit: number,
    flameout: boolean,
    electricitychargerate: number,
    remainingignitions: number,
    ignitions: number,
    actualthrottle: number,
  }
}

export class DockingPort extends jspb.Message {
  getState(): observor_pb.DockingPortSnapshot.DockingPortStateMap[keyof observor_pb.DockingPortSnapshot.DockingPortStateMap];
  setState(value: observor_pb.DockingPortSnapshot.DockingPortStateMap[keyof observor_pb.DockingPortSnapshot.DockingPortStateMap]): void;

  getHasshield(): boolean;
  setHasshield(value: boolean): void;

  getShieled(): boolean;
  setShieled(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DockingPort.AsObject;
  static toObject(includeInstance: boolean, msg: DockingPort): DockingPort.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DockingPort, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DockingPort;
  static deserializeBinaryFromReader(message: DockingPort, reader: jspb.BinaryReader): DockingPort;
}

export namespace DockingPort {
  export type AsObject = {
    state: observor_pb.DockingPortSnapshot.DockingPortStateMap[keyof observor_pb.DockingPortSnapshot.DockingPortStateMap],
    hasshield: boolean,
    shieled: boolean,
  }
}

export class Decoupler extends jspb.Message {
  getDecoupled(): boolean;
  setDecoupled(value: boolean): void;

  getStagingenabled(): boolean;
  setStagingenabled(value: boolean): void;

  getEjectionforce(): number;
  setEjectionforce(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Decoupler.AsObject;
  static toObject(includeInstance: boolean, msg: Decoupler): Decoupler.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Decoupler, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Decoupler;
  static deserializeBinaryFromReader(message: Decoupler, reader: jspb.BinaryReader): Decoupler;
}

export namespace Decoupler {
  export type AsObject = {
    decoupled: boolean,
    stagingenabled: boolean,
    ejectionforce: number,
  }
}

export class ControlSurface extends jspb.Message {
  getPitchenabled(): boolean;
  setPitchenabled(value: boolean): void;

  getYawenabled(): boolean;
  setYawenabled(value: boolean): void;

  getRollenabled(): boolean;
  setRollenabled(value: boolean): void;

  getAuthoritylimiter(): number;
  setAuthoritylimiter(value: number): void;

  getInverted(): boolean;
  setInverted(value: boolean): void;

  getDeployed(): boolean;
  setDeployed(value: boolean): void;

  getSurfacearea(): number;
  setSurfacearea(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ControlSurface.AsObject;
  static toObject(includeInstance: boolean, msg: ControlSurface): ControlSurface.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ControlSurface, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ControlSurface;
  static deserializeBinaryFromReader(message: ControlSurface, reader: jspb.BinaryReader): ControlSurface;
}

export namespace ControlSurface {
  export type AsObject = {
    pitchenabled: boolean,
    yawenabled: boolean,
    rollenabled: boolean,
    authoritylimiter: number,
    inverted: boolean,
    deployed: boolean,
    surfacearea: number,
  }
}

export class CargoBay extends jspb.Message {
  getState(): observor_pb.CargoBaySnapshot.CargoBayStateMap[keyof observor_pb.CargoBaySnapshot.CargoBayStateMap];
  setState(value: observor_pb.CargoBaySnapshot.CargoBayStateMap[keyof observor_pb.CargoBaySnapshot.CargoBayStateMap]): void;

  getDeploypercent(): number;
  setDeploypercent(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CargoBay.AsObject;
  static toObject(includeInstance: boolean, msg: CargoBay): CargoBay.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CargoBay, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CargoBay;
  static deserializeBinaryFromReader(message: CargoBay, reader: jspb.BinaryReader): CargoBay;
}

export namespace CargoBay {
  export type AsObject = {
    state: observor_pb.CargoBaySnapshot.CargoBayStateMap[keyof observor_pb.CargoBaySnapshot.CargoBayStateMap],
    deploypercent: number,
  }
}

export class Antenna extends jspb.Message {
  getState(): observor_pb.AntennaSnapshot.AntennaStateMap[keyof observor_pb.AntennaSnapshot.AntennaStateMap];
  setState(value: observor_pb.AntennaSnapshot.AntennaStateMap[keyof observor_pb.AntennaSnapshot.AntennaStateMap]): void;

  getCantransmit(): boolean;
  setCantransmit(value: boolean): void;

  getAllowpartial(): boolean;
  setAllowpartial(value: boolean): void;

  getPower(): number;
  setPower(value: number): void;

  getCombinable(): boolean;
  setCombinable(value: boolean): void;

  getCombinableexponent(): number;
  setCombinableexponent(value: number): void;

  getPacketinterval(): number;
  setPacketinterval(value: number): void;

  getPacketsize(): number;
  setPacketsize(value: number): void;

  getPacketresourcecost(): number;
  setPacketresourcecost(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Antenna.AsObject;
  static toObject(includeInstance: boolean, msg: Antenna): Antenna.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Antenna, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Antenna;
  static deserializeBinaryFromReader(message: Antenna, reader: jspb.BinaryReader): Antenna;
}

export namespace Antenna {
  export type AsObject = {
    state: observor_pb.AntennaSnapshot.AntennaStateMap[keyof observor_pb.AntennaSnapshot.AntennaStateMap],
    cantransmit: boolean,
    allowpartial: boolean,
    power: number,
    combinable: boolean,
    combinableexponent: number,
    packetinterval: number,
    packetsize: number,
    packetresourcecost: number,
  }
}

export class Resource extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getCapacity(): number;
  setCapacity(value: number): void;

  getAmount(): number;
  setAmount(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Resource.AsObject;
  static toObject(includeInstance: boolean, msg: Resource): Resource.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Resource, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Resource;
  static deserializeBinaryFromReader(message: Resource, reader: jspb.BinaryReader): Resource;
}

export namespace Resource {
  export type AsObject = {
    name: string,
    capacity: number,
    amount: number,
  }
}

export class Resources extends jspb.Message {
  clearResourcesList(): void;
  getResourcesList(): Array<Resource>;
  setResourcesList(value: Array<Resource>): void;
  addResources(value?: Resource, index?: number): Resource;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Resources.AsObject;
  static toObject(includeInstance: boolean, msg: Resources): Resources.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Resources, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Resources;
  static deserializeBinaryFromReader(message: Resources, reader: jspb.BinaryReader): Resources;
}

export namespace Resources {
  export type AsObject = {
    resourcesList: Array<Resource.AsObject>,
  }
}

export class Command extends jspb.Message {
  getRequirespilot(): boolean;
  setRequirespilot(value: boolean): void;

  getSignalstrengthlevel(): Command.SignalStrengthLevelMap[keyof Command.SignalStrengthLevelMap];
  setSignalstrengthlevel(value: Command.SignalStrengthLevelMap[keyof Command.SignalStrengthLevelMap]): void;

  getSignalstrength(): number;
  setSignalstrength(value: number): void;

  getMinimumcrew(): number;
  setMinimumcrew(value: number): void;

  getVesselcontrolstate(): Command.VesselControlStateMap[keyof Command.VesselControlStateMap];
  setVesselcontrolstate(value: Command.VesselControlStateMap[keyof Command.VesselControlStateMap]): void;

  getModulecontrolstate(): Command.ModuleControlStateMap[keyof Command.ModuleControlStateMap];
  setModulecontrolstate(value: Command.ModuleControlStateMap[keyof Command.ModuleControlStateMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Command.AsObject;
  static toObject(includeInstance: boolean, msg: Command): Command.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Command, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Command;
  static deserializeBinaryFromReader(message: Command, reader: jspb.BinaryReader): Command;
}

export namespace Command {
  export type AsObject = {
    requirespilot: boolean,
    signalstrengthlevel: Command.SignalStrengthLevelMap[keyof Command.SignalStrengthLevelMap],
    signalstrength: number,
    minimumcrew: number,
    vesselcontrolstate: Command.VesselControlStateMap[keyof Command.VesselControlStateMap],
    modulecontrolstate: Command.ModuleControlStateMap[keyof Command.ModuleControlStateMap],
  }

  export interface SignalStrengthLevelMap {
    NONE: 0;
    RED: 1;
    ORANGE: 2;
    YELLOW: 3;
    GREEN: 4;
  }

  export const SignalStrengthLevel: SignalStrengthLevelMap;

  export interface VesselControlStateMap {
    INVALID: 0;
    PROBENONE: 2;
    KERBALNONE: 4;
    PARTIAL: 8;
    PROBEPARTIAL: 10;
    KERBALPARTIAL: 12;
    FULL: 16;
    PROBEFULL: 18;
    KERBALFULL: 20;
  }

  export const VesselControlState: VesselControlStateMap;

  export interface ModuleControlStateMap {
    NOTENOUGHCREW: 0;
    NOTENOUGHRESOURCES: 1;
    PARTIALMANNED: 2;
    NOCONTROLPOINT: 3;
    TOURISTCREW: 4;
    PARTIALPROBE: 5;
    NOMINAL: 6;
  }

  export const ModuleControlState: ModuleControlStateMap;
}

export class Ablator extends jspb.Message {
  getLoss(): number;
  setLoss(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Ablator.AsObject;
  static toObject(includeInstance: boolean, msg: Ablator): Ablator.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Ablator, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Ablator;
  static deserializeBinaryFromReader(message: Ablator, reader: jspb.BinaryReader): Ablator;
}

export namespace Ablator {
  export type AsObject = {
    loss: number,
  }
}

export class Generator extends jspb.Message {
  getIsactive(): boolean;
  setIsactive(value: boolean): void;

  getRate(): number;
  setRate(value: number): void;

  getEfficiency(): number;
  setEfficiency(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Generator.AsObject;
  static toObject(includeInstance: boolean, msg: Generator): Generator.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Generator, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Generator;
  static deserializeBinaryFromReader(message: Generator, reader: jspb.BinaryReader): Generator;
}

export namespace Generator {
  export type AsObject = {
    isactive: boolean,
    rate: number,
    efficiency: number,
  }
}

export class Part extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getName(): string;
  setName(value: string): void;

  getTitle(): string;
  setTitle(value: string): void;

  getTag(): string;
  setTag(value: string): void;

  getStage(): number;
  setStage(value: number): void;

  getMass(): number;
  setMass(value: number): void;

  getDrymass(): number;
  setDrymass(value: number): void;

  getShielded(): boolean;
  setShielded(value: boolean): void;

  getTemperature(): number;
  setTemperature(value: number): void;

  getSkintemperature(): number;
  setSkintemperature(value: number): void;

  getMaxtemperature(): number;
  setMaxtemperature(value: number): void;

  getMaxskintemperature(): number;
  setMaxskintemperature(value: number): void;

  hasResources(): boolean;
  clearResources(): void;
  getResources(): Resources | undefined;
  setResources(value?: Resources): void;

  hasAntenna(): boolean;
  clearAntenna(): void;
  getAntenna(): Antenna | undefined;
  setAntenna(value?: Antenna): void;

  hasCargobay(): boolean;
  clearCargobay(): void;
  getCargobay(): CargoBay | undefined;
  setCargobay(value?: CargoBay): void;

  hasControlsurface(): boolean;
  clearControlsurface(): void;
  getControlsurface(): ControlSurface | undefined;
  setControlsurface(value?: ControlSurface): void;

  hasDecoupler(): boolean;
  clearDecoupler(): void;
  getDecoupler(): Decoupler | undefined;
  setDecoupler(value?: Decoupler): void;

  hasDockingport(): boolean;
  clearDockingport(): void;
  getDockingport(): DockingPort | undefined;
  setDockingport(value?: DockingPort): void;

  hasEngine(): boolean;
  clearEngine(): void;
  getEngine(): Engine | undefined;
  setEngine(value?: Engine): void;

  hasFairing(): boolean;
  clearFairing(): void;
  getFairing(): Fairing | undefined;
  setFairing(value?: Fairing): void;

  hasIntake(): boolean;
  clearIntake(): void;
  getIntake(): Intake | undefined;
  setIntake(value?: Intake): void;

  hasLeg(): boolean;
  clearLeg(): void;
  getLeg(): Leg | undefined;
  setLeg(value?: Leg): void;

  hasLight(): boolean;
  clearLight(): void;
  getLight(): Light | undefined;
  setLight(value?: Light): void;

  hasParachute(): boolean;
  clearParachute(): void;
  getParachute(): Parachute | undefined;
  setParachute(value?: Parachute): void;

  hasRadiator(): boolean;
  clearRadiator(): void;
  getRadiator(): Radiator | undefined;
  setRadiator(value?: Radiator): void;

  hasRcs(): boolean;
  clearRcs(): void;
  getRcs(): RCS | undefined;
  setRcs(value?: RCS): void;

  hasReactionwheel(): boolean;
  clearReactionwheel(): void;
  getReactionwheel(): ReactionWheel | undefined;
  setReactionwheel(value?: ReactionWheel): void;

  hasResourceconverter(): boolean;
  clearResourceconverter(): void;
  getResourceconverter(): ResourceConverter | undefined;
  setResourceconverter(value?: ResourceConverter): void;

  hasResourceharvester(): boolean;
  clearResourceharvester(): void;
  getResourceharvester(): ResourceHarvester | undefined;
  setResourceharvester(value?: ResourceHarvester): void;

  hasSensor(): boolean;
  clearSensor(): void;
  getSensor(): Sensor | undefined;
  setSensor(value?: Sensor): void;

  hasSolarpanel(): boolean;
  clearSolarpanel(): void;
  getSolarpanel(): SolarPanel | undefined;
  setSolarpanel(value?: SolarPanel): void;

  hasWheel(): boolean;
  clearWheel(): void;
  getWheel(): Wheel | undefined;
  setWheel(value?: Wheel): void;

  hasCommand(): boolean;
  clearCommand(): void;
  getCommand(): Command | undefined;
  setCommand(value?: Command): void;

  hasAblator(): boolean;
  clearAblator(): void;
  getAblator(): Ablator | undefined;
  setAblator(value?: Ablator): void;

  hasGenerator(): boolean;
  clearGenerator(): void;
  getGenerator(): Generator | undefined;
  setGenerator(value?: Generator): void;

  clearTypesList(): void;
  getTypesList(): Array<Part.PartTypeMap[keyof Part.PartTypeMap]>;
  setTypesList(value: Array<Part.PartTypeMap[keyof Part.PartTypeMap]>): void;
  addTypes(value: Part.PartTypeMap[keyof Part.PartTypeMap], index?: number): Part.PartTypeMap[keyof Part.PartTypeMap];

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Part.AsObject;
  static toObject(includeInstance: boolean, msg: Part): Part.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Part, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Part;
  static deserializeBinaryFromReader(message: Part, reader: jspb.BinaryReader): Part;
}

export namespace Part {
  export type AsObject = {
    id: number,
    name: string,
    title: string,
    tag: string,
    stage: number,
    mass: number,
    drymass: number,
    shielded: boolean,
    temperature: number,
    skintemperature: number,
    maxtemperature: number,
    maxskintemperature: number,
    resources?: Resources.AsObject,
    antenna?: Antenna.AsObject,
    cargobay?: CargoBay.AsObject,
    controlsurface?: ControlSurface.AsObject,
    decoupler?: Decoupler.AsObject,
    dockingport?: DockingPort.AsObject,
    engine?: Engine.AsObject,
    fairing?: Fairing.AsObject,
    intake?: Intake.AsObject,
    leg?: Leg.AsObject,
    light?: Light.AsObject,
    parachute?: Parachute.AsObject,
    radiator?: Radiator.AsObject,
    rcs?: RCS.AsObject,
    reactionwheel?: ReactionWheel.AsObject,
    resourceconverter?: ResourceConverter.AsObject,
    resourceharvester?: ResourceHarvester.AsObject,
    sensor?: Sensor.AsObject,
    solarpanel?: SolarPanel.AsObject,
    wheel?: Wheel.AsObject,
    command?: Command.AsObject,
    ablator?: Ablator.AsObject,
    generator?: Generator.AsObject,
    typesList: Array<Part.PartTypeMap[keyof Part.PartTypeMap]>,
  }

  export interface PartTypeMap {
    UNKNOWN: 0;
    HASRESOURCE: 1;
    ANTENNA: 2;
    CARGOBAY: 3;
    CONTROLSURFACE: 4;
    DECOUPLER: 5;
    DOCKINGPORT: 6;
    ENGINE: 7;
    FAIRING: 8;
    INTAKE: 9;
    LEG: 10;
    LAUNCHCLAMP: 11;
    LIGHT: 12;
    PARACHUTE: 13;
    RADIATOR: 14;
    RCS: 15;
    REACTIONWHEEL: 16;
    RESOURCECONVERTER: 17;
    RESOURCEHARVESTER: 18;
    SENSOR: 19;
    SOLARPANEL: 20;
    WHEEL: 21;
    COMMAND: 22;
    ABLATOR: 23;
    GENERATOR: 24;
  }

  export const PartType: PartTypeMap;
}

export interface CameraModeMap {
  AUTO: 0;
  FREE: 1;
  ORBITAL: 2;
  CHASE: 3;
  LOCKED: 4;
  IVA: 5;
  MAP: 6;
}

export const CameraMode: CameraModeMap;

