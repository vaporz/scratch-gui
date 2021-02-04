// package: 
// file: scratchservice.proto

var scratchservice_pb = require("./scratchservice_pb");
var observor_pb = require("./observor_pb");
var apimessage_pb = require("./apimessage_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var ScratchService = (function () {
  function ScratchService() {}
  ScratchService.serviceName = "ScratchService";
  return ScratchService;
}());

ScratchService.restoreCamera = {
  methodName: "restoreCamera",
  service: ScratchService,
  requestStream: false,
  responseStream: false,
  requestType: apimessage_pb.RestoreCameraRequest,
  responseType: apimessage_pb.RestoreCameraResponse
};

ScratchService.setCameraFocussedVessel = {
  methodName: "setCameraFocussedVessel",
  service: ScratchService,
  requestStream: false,
  responseStream: false,
  requestType: apimessage_pb.SetCameraFocussedVesselRequest,
  responseType: apimessage_pb.SetCameraFocussedVesselResponse
};

ScratchService.setCameraMode = {
  methodName: "setCameraMode",
  service: ScratchService,
  requestStream: false,
  responseStream: false,
  requestType: apimessage_pb.SetCameraModeRequest,
  responseType: apimessage_pb.SetCameraModeResponse
};

ScratchService.setManeuverNode = {
  methodName: "setManeuverNode",
  service: ScratchService,
  requestStream: false,
  responseStream: false,
  requestType: apimessage_pb.SetManeuverNodeRequest,
  responseType: apimessage_pb.SetManeuverNodeResponse
};

ScratchService.getManeuverNode = {
  methodName: "getManeuverNode",
  service: ScratchService,
  requestStream: false,
  responseStream: false,
  requestType: apimessage_pb.GetManeuverNodeRequest,
  responseType: apimessage_pb.GetManeuverNodeResponse
};

ScratchService.listManeuverNodes = {
  methodName: "listManeuverNodes",
  service: ScratchService,
  requestStream: false,
  responseStream: false,
  requestType: apimessage_pb.ListManeuverNodesRequest,
  responseType: apimessage_pb.ListManeuverNodesResponse
};

ScratchService.removeManeuverNode = {
  methodName: "removeManeuverNode",
  service: ScratchService,
  requestStream: false,
  responseStream: false,
  requestType: apimessage_pb.RemoveManeuverNodeRequest,
  responseType: apimessage_pb.RemoveManeuverNodeResponse
};

ScratchService.universalTime = {
  methodName: "universalTime",
  service: ScratchService,
  requestStream: false,
  responseStream: false,
  requestType: apimessage_pb.UniversalTimeRequest,
  responseType: apimessage_pb.UniversalTimeResponse
};

ScratchService.warpTo = {
  methodName: "warpTo",
  service: ScratchService,
  requestStream: false,
  responseStream: false,
  requestType: apimessage_pb.WarpToRequest,
  responseType: apimessage_pb.WarpToResponse
};

ScratchService.increaseTimeWarpRate = {
  methodName: "increaseTimeWarpRate",
  service: ScratchService,
  requestStream: false,
  responseStream: false,
  requestType: apimessage_pb.IncreaseTimeWarpRateRequest,
  responseType: apimessage_pb.IncreaseTimeWarpRateResponse
};

ScratchService.decreaseTimeWarpRate = {
  methodName: "decreaseTimeWarpRate",
  service: ScratchService,
  requestStream: false,
  responseStream: false,
  requestType: apimessage_pb.DecreaseTimeWarpRateRequest,
  responseType: apimessage_pb.DecreaseTimeWarpRateResponse
};

ScratchService.increaseTimeWarpRateBy = {
  methodName: "increaseTimeWarpRateBy",
  service: ScratchService,
  requestStream: false,
  responseStream: false,
  requestType: apimessage_pb.IncreaseTimeWarpRateByRequest,
  responseType: apimessage_pb.IncreaseTimeWarpRateByResponse
};

ScratchService.decreaseTimeWarpRateBy = {
  methodName: "decreaseTimeWarpRateBy",
  service: ScratchService,
  requestStream: false,
  responseStream: false,
  requestType: apimessage_pb.DecreaseTimeWarpRateByRequest,
  responseType: apimessage_pb.DecreaseTimeWarpRateByResponse
};

ScratchService.stopTimeWarp = {
  methodName: "stopTimeWarp",
  service: ScratchService,
  requestStream: false,
  responseStream: false,
  requestType: apimessage_pb.StopTimeWarpRequest,
  responseType: apimessage_pb.StopTimeWarpResponse
};

ScratchService.getTimeWarpRate = {
  methodName: "getTimeWarpRate",
  service: ScratchService,
  requestStream: false,
  responseStream: false,
  requestType: apimessage_pb.GetTimeWarpRateRequest,
  responseType: apimessage_pb.GetTimeWarpRateResponse
};

ScratchService.getFlightSceneStartTime = {
  methodName: "getFlightSceneStartTime",
  service: ScratchService,
  requestStream: false,
  responseStream: false,
  requestType: apimessage_pb.GetFlightSceneStartTimeRequest,
  responseType: apimessage_pb.GetFlightSceneStartTimeResponse
};

ScratchService.switchActiveVessel = {
  methodName: "switchActiveVessel",
  service: ScratchService,
  requestStream: false,
  responseStream: false,
  requestType: apimessage_pb.SwitchActiveVesselRequest,
  responseType: apimessage_pb.SwitchActiveVesselResponse
};

ScratchService.snapshot = {
  methodName: "snapshot",
  service: ScratchService,
  requestStream: false,
  responseStream: false,
  requestType: observor_pb.SnapshotRequest,
  responseType: observor_pb.SnapshotResponse
};

ScratchService.getVesselPartsByType = {
  methodName: "getVesselPartsByType",
  service: ScratchService,
  requestStream: false,
  responseStream: false,
  requestType: apimessage_pb.GetVesselPartsByTypeRequest,
  responseType: apimessage_pb.GetVesselPartsByTypeResponse
};

ScratchService.searchVesselPartsByTag = {
  methodName: "searchVesselPartsByTag",
  service: ScratchService,
  requestStream: false,
  responseStream: false,
  requestType: apimessage_pb.SearchVesselPartsByTagRequest,
  responseType: apimessage_pb.SearchVesselPartsByTagResponse
};

ScratchService.stage = {
  methodName: "stage",
  service: ScratchService,
  requestStream: false,
  responseStream: false,
  requestType: apimessage_pb.StageRequest,
  responseType: apimessage_pb.StageResponse
};

ScratchService.throttle = {
  methodName: "throttle",
  service: ScratchService,
  requestStream: false,
  responseStream: false,
  requestType: apimessage_pb.ThrottleRequest,
  responseType: apimessage_pb.ThrottleResponse
};

ScratchService.setSAS = {
  methodName: "setSAS",
  service: ScratchService,
  requestStream: false,
  responseStream: false,
  requestType: apimessage_pb.SetSASRequest,
  responseType: apimessage_pb.SetSASResponse
};

ScratchService.setSASMode = {
  methodName: "setSASMode",
  service: ScratchService,
  requestStream: false,
  responseStream: false,
  requestType: apimessage_pb.SetSASModeRequest,
  responseType: apimessage_pb.SetSASModeResponse
};

ScratchService.setRCS = {
  methodName: "setRCS",
  service: ScratchService,
  requestStream: false,
  responseStream: false,
  requestType: apimessage_pb.SetRCSRequest,
  responseType: apimessage_pb.SetRCSResponse
};

ScratchService.setLights = {
  methodName: "setLights",
  service: ScratchService,
  requestStream: false,
  responseStream: false,
  requestType: apimessage_pb.SetLightsRequest,
  responseType: apimessage_pb.SetLightsResponse
};

ScratchService.setAntennas = {
  methodName: "setAntennas",
  service: ScratchService,
  requestStream: false,
  responseStream: false,
  requestType: apimessage_pb.SetAntennasRequest,
  responseType: apimessage_pb.SetAntennasResponse
};

ScratchService.setSolarPanels = {
  methodName: "setSolarPanels",
  service: ScratchService,
  requestStream: false,
  responseStream: false,
  requestType: apimessage_pb.SetSolarPanelsRequest,
  responseType: apimessage_pb.SetSolarPanelsResponse
};

ScratchService.toggleActionGroup = {
  methodName: "toggleActionGroup",
  service: ScratchService,
  requestStream: false,
  responseStream: false,
  requestType: apimessage_pb.ToggleActionGroupRequest,
  responseType: apimessage_pb.ToggleActionGroupResponse
};

ScratchService.setHeading = {
  methodName: "setHeading",
  service: ScratchService,
  requestStream: false,
  responseStream: false,
  requestType: apimessage_pb.SetHeadingRequest,
  responseType: apimessage_pb.SetHeadingResponse
};

ScratchService.setHeadingRollFirst = {
  methodName: "setHeadingRollFirst",
  service: ScratchService,
  requestStream: false,
  responseStream: false,
  requestType: apimessage_pb.SetHeadingRollFirstRequest,
  responseType: apimessage_pb.SetHeadingRollFirstResponse
};

ScratchService.setOrientation = {
  methodName: "setOrientation",
  service: ScratchService,
  requestStream: false,
  responseStream: false,
  requestType: apimessage_pb.SetOrientationRequest,
  responseType: apimessage_pb.SetOrientationResponse
};

ScratchService.setOrientationRollFirst = {
  methodName: "setOrientationRollFirst",
  service: ScratchService,
  requestStream: false,
  responseStream: false,
  requestType: apimessage_pb.SetOrientationRollFirstRequest,
  responseType: apimessage_pb.SetOrientationRollFirstResponse
};

ScratchService.disengageAutoPilot = {
  methodName: "disengageAutoPilot",
  service: ScratchService,
  requestStream: false,
  responseStream: false,
  requestType: apimessage_pb.DisengageAutoPilotRequest,
  responseType: apimessage_pb.DisengageAutoPilotResponse
};

ScratchService.launchClampsRelease = {
  methodName: "launchClampsRelease",
  service: ScratchService,
  requestStream: false,
  responseStream: false,
  requestType: apimessage_pb.LaunchClampsReleaseRequest,
  responseType: apimessage_pb.LaunchClampsReleaseResponse
};

ScratchService.ablatorsDecouple = {
  methodName: "ablatorsDecouple",
  service: ScratchService,
  requestStream: false,
  responseStream: false,
  requestType: apimessage_pb.AblatorsDecoupleRequest,
  responseType: apimessage_pb.AblatorsDecoupleResponse
};

ScratchService.decouplersActivate = {
  methodName: "decouplersActivate",
  service: ScratchService,
  requestStream: false,
  responseStream: false,
  requestType: apimessage_pb.DecouplersActivateRequest,
  responseType: apimessage_pb.DecouplersActivateResponse
};

ScratchService.enginesActivate = {
  methodName: "enginesActivate",
  service: ScratchService,
  requestStream: false,
  responseStream: false,
  requestType: apimessage_pb.EnginesActivateRequest,
  responseType: apimessage_pb.EnginesActivateResponse
};

ScratchService.enginesShutDown = {
  methodName: "enginesShutDown",
  service: ScratchService,
  requestStream: false,
  responseStream: false,
  requestType: apimessage_pb.EnginesShutDownRequest,
  responseType: apimessage_pb.EnginesShutDownResponse
};

ScratchService.fairingsJettison = {
  methodName: "fairingsJettison",
  service: ScratchService,
  requestStream: false,
  responseStream: false,
  requestType: apimessage_pb.FairingsJettisonRequest,
  responseType: apimessage_pb.FairingsJettisonResponse
};

ScratchService.parachutesDeploy = {
  methodName: "parachutesDeploy",
  service: ScratchService,
  requestStream: false,
  responseStream: false,
  requestType: apimessage_pb.ParachutesDeployRequest,
  responseType: apimessage_pb.ParachutesDeployResponse
};

ScratchService.RCSesEnabled = {
  methodName: "RCSesEnabled",
  service: ScratchService,
  requestStream: false,
  responseStream: false,
  requestType: apimessage_pb.RCSesEnabledRequest,
  responseType: apimessage_pb.RCSesEnabledResponse
};

exports.ScratchService = ScratchService;

function ScratchServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

ScratchServiceClient.prototype.restoreCamera = function restoreCamera(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ScratchService.restoreCamera, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

ScratchServiceClient.prototype.setCameraFocussedVessel = function setCameraFocussedVessel(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ScratchService.setCameraFocussedVessel, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

ScratchServiceClient.prototype.setCameraMode = function setCameraMode(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ScratchService.setCameraMode, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

ScratchServiceClient.prototype.setManeuverNode = function setManeuverNode(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ScratchService.setManeuverNode, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

ScratchServiceClient.prototype.getManeuverNode = function getManeuverNode(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ScratchService.getManeuverNode, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

ScratchServiceClient.prototype.listManeuverNodes = function listManeuverNodes(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ScratchService.listManeuverNodes, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

ScratchServiceClient.prototype.removeManeuverNode = function removeManeuverNode(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ScratchService.removeManeuverNode, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

ScratchServiceClient.prototype.universalTime = function universalTime(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ScratchService.universalTime, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

ScratchServiceClient.prototype.warpTo = function warpTo(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ScratchService.warpTo, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

ScratchServiceClient.prototype.increaseTimeWarpRate = function increaseTimeWarpRate(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ScratchService.increaseTimeWarpRate, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

ScratchServiceClient.prototype.decreaseTimeWarpRate = function decreaseTimeWarpRate(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ScratchService.decreaseTimeWarpRate, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

ScratchServiceClient.prototype.increaseTimeWarpRateBy = function increaseTimeWarpRateBy(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ScratchService.increaseTimeWarpRateBy, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

ScratchServiceClient.prototype.decreaseTimeWarpRateBy = function decreaseTimeWarpRateBy(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ScratchService.decreaseTimeWarpRateBy, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

ScratchServiceClient.prototype.stopTimeWarp = function stopTimeWarp(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ScratchService.stopTimeWarp, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

ScratchServiceClient.prototype.getTimeWarpRate = function getTimeWarpRate(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ScratchService.getTimeWarpRate, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

ScratchServiceClient.prototype.getFlightSceneStartTime = function getFlightSceneStartTime(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ScratchService.getFlightSceneStartTime, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

ScratchServiceClient.prototype.switchActiveVessel = function switchActiveVessel(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ScratchService.switchActiveVessel, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

ScratchServiceClient.prototype.snapshot = function snapshot(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ScratchService.snapshot, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

ScratchServiceClient.prototype.getVesselPartsByType = function getVesselPartsByType(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ScratchService.getVesselPartsByType, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

ScratchServiceClient.prototype.searchVesselPartsByTag = function searchVesselPartsByTag(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ScratchService.searchVesselPartsByTag, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

ScratchServiceClient.prototype.stage = function stage(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ScratchService.stage, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

ScratchServiceClient.prototype.throttle = function throttle(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ScratchService.throttle, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

ScratchServiceClient.prototype.setSAS = function setSAS(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ScratchService.setSAS, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

ScratchServiceClient.prototype.setSASMode = function setSASMode(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ScratchService.setSASMode, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

ScratchServiceClient.prototype.setRCS = function setRCS(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ScratchService.setRCS, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

ScratchServiceClient.prototype.setLights = function setLights(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ScratchService.setLights, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

ScratchServiceClient.prototype.setAntennas = function setAntennas(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ScratchService.setAntennas, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

ScratchServiceClient.prototype.setSolarPanels = function setSolarPanels(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ScratchService.setSolarPanels, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

ScratchServiceClient.prototype.toggleActionGroup = function toggleActionGroup(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ScratchService.toggleActionGroup, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

ScratchServiceClient.prototype.setHeading = function setHeading(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ScratchService.setHeading, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

ScratchServiceClient.prototype.setHeadingRollFirst = function setHeadingRollFirst(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ScratchService.setHeadingRollFirst, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

ScratchServiceClient.prototype.setOrientation = function setOrientation(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ScratchService.setOrientation, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

ScratchServiceClient.prototype.setOrientationRollFirst = function setOrientationRollFirst(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ScratchService.setOrientationRollFirst, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

ScratchServiceClient.prototype.disengageAutoPilot = function disengageAutoPilot(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ScratchService.disengageAutoPilot, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

ScratchServiceClient.prototype.launchClampsRelease = function launchClampsRelease(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ScratchService.launchClampsRelease, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

ScratchServiceClient.prototype.ablatorsDecouple = function ablatorsDecouple(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ScratchService.ablatorsDecouple, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

ScratchServiceClient.prototype.decouplersActivate = function decouplersActivate(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ScratchService.decouplersActivate, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

ScratchServiceClient.prototype.enginesActivate = function enginesActivate(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ScratchService.enginesActivate, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

ScratchServiceClient.prototype.enginesShutDown = function enginesShutDown(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ScratchService.enginesShutDown, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

ScratchServiceClient.prototype.fairingsJettison = function fairingsJettison(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ScratchService.fairingsJettison, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

ScratchServiceClient.prototype.parachutesDeploy = function parachutesDeploy(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ScratchService.parachutesDeploy, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

ScratchServiceClient.prototype.rCSesEnabled = function rCSesEnabled(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(ScratchService.RCSesEnabled, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

exports.ScratchServiceClient = ScratchServiceClient;

