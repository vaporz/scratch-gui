/**
 * @fileoverview gRPC-Web generated client stub for 
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var observor_pb = require('./observor_pb.js')

var apimessage_pb = require('./apimessage_pb.js')
const proto = require('./scratchservice_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.ScratchServiceClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.ScratchServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.SetCameraFocussedVesselRequest,
 *   !proto.SetCameraFocussedVesselResponse>}
 */
const methodDescriptor_ScratchService_setCameraFocussedVessel = new grpc.web.MethodDescriptor(
  '/ScratchService/setCameraFocussedVessel',
  grpc.web.MethodType.UNARY,
  apimessage_pb.SetCameraFocussedVesselRequest,
  apimessage_pb.SetCameraFocussedVesselResponse,
  /**
   * @param {!proto.SetCameraFocussedVesselRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  apimessage_pb.SetCameraFocussedVesselResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.SetCameraFocussedVesselRequest,
 *   !proto.SetCameraFocussedVesselResponse>}
 */
const methodInfo_ScratchService_setCameraFocussedVessel = new grpc.web.AbstractClientBase.MethodInfo(
  apimessage_pb.SetCameraFocussedVesselResponse,
  /**
   * @param {!proto.SetCameraFocussedVesselRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  apimessage_pb.SetCameraFocussedVesselResponse.deserializeBinary
);


/**
 * @param {!proto.SetCameraFocussedVesselRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.SetCameraFocussedVesselResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.SetCameraFocussedVesselResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ScratchServiceClient.prototype.setCameraFocussedVessel =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ScratchService/setCameraFocussedVessel',
      request,
      metadata || {},
      methodDescriptor_ScratchService_setCameraFocussedVessel,
      callback);
};


/**
 * @param {!proto.SetCameraFocussedVesselRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.SetCameraFocussedVesselResponse>}
 *     A native promise that resolves to the response
 */
proto.ScratchServicePromiseClient.prototype.setCameraFocussedVessel =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ScratchService/setCameraFocussedVessel',
      request,
      metadata || {},
      methodDescriptor_ScratchService_setCameraFocussedVessel);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.SetCameraModeRequest,
 *   !proto.SetCameraModeResponse>}
 */
const methodDescriptor_ScratchService_setCameraMode = new grpc.web.MethodDescriptor(
  '/ScratchService/setCameraMode',
  grpc.web.MethodType.UNARY,
  apimessage_pb.SetCameraModeRequest,
  apimessage_pb.SetCameraModeResponse,
  /**
   * @param {!proto.SetCameraModeRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  apimessage_pb.SetCameraModeResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.SetCameraModeRequest,
 *   !proto.SetCameraModeResponse>}
 */
const methodInfo_ScratchService_setCameraMode = new grpc.web.AbstractClientBase.MethodInfo(
  apimessage_pb.SetCameraModeResponse,
  /**
   * @param {!proto.SetCameraModeRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  apimessage_pb.SetCameraModeResponse.deserializeBinary
);


/**
 * @param {!proto.SetCameraModeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.SetCameraModeResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.SetCameraModeResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ScratchServiceClient.prototype.setCameraMode =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ScratchService/setCameraMode',
      request,
      metadata || {},
      methodDescriptor_ScratchService_setCameraMode,
      callback);
};


/**
 * @param {!proto.SetCameraModeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.SetCameraModeResponse>}
 *     A native promise that resolves to the response
 */
proto.ScratchServicePromiseClient.prototype.setCameraMode =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ScratchService/setCameraMode',
      request,
      metadata || {},
      methodDescriptor_ScratchService_setCameraMode);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.SetManeuverNodeRequest,
 *   !proto.SetManeuverNodeResponse>}
 */
const methodDescriptor_ScratchService_setManeuverNode = new grpc.web.MethodDescriptor(
  '/ScratchService/setManeuverNode',
  grpc.web.MethodType.UNARY,
  apimessage_pb.SetManeuverNodeRequest,
  apimessage_pb.SetManeuverNodeResponse,
  /**
   * @param {!proto.SetManeuverNodeRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  apimessage_pb.SetManeuverNodeResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.SetManeuverNodeRequest,
 *   !proto.SetManeuverNodeResponse>}
 */
const methodInfo_ScratchService_setManeuverNode = new grpc.web.AbstractClientBase.MethodInfo(
  apimessage_pb.SetManeuverNodeResponse,
  /**
   * @param {!proto.SetManeuverNodeRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  apimessage_pb.SetManeuverNodeResponse.deserializeBinary
);


/**
 * @param {!proto.SetManeuverNodeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.SetManeuverNodeResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.SetManeuverNodeResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ScratchServiceClient.prototype.setManeuverNode =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ScratchService/setManeuverNode',
      request,
      metadata || {},
      methodDescriptor_ScratchService_setManeuverNode,
      callback);
};


/**
 * @param {!proto.SetManeuverNodeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.SetManeuverNodeResponse>}
 *     A native promise that resolves to the response
 */
proto.ScratchServicePromiseClient.prototype.setManeuverNode =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ScratchService/setManeuverNode',
      request,
      metadata || {},
      methodDescriptor_ScratchService_setManeuverNode);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.GetManeuverNodeRequest,
 *   !proto.GetManeuverNodeResponse>}
 */
const methodDescriptor_ScratchService_getManeuverNode = new grpc.web.MethodDescriptor(
  '/ScratchService/getManeuverNode',
  grpc.web.MethodType.UNARY,
  apimessage_pb.GetManeuverNodeRequest,
  apimessage_pb.GetManeuverNodeResponse,
  /**
   * @param {!proto.GetManeuverNodeRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  apimessage_pb.GetManeuverNodeResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.GetManeuverNodeRequest,
 *   !proto.GetManeuverNodeResponse>}
 */
const methodInfo_ScratchService_getManeuverNode = new grpc.web.AbstractClientBase.MethodInfo(
  apimessage_pb.GetManeuverNodeResponse,
  /**
   * @param {!proto.GetManeuverNodeRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  apimessage_pb.GetManeuverNodeResponse.deserializeBinary
);


/**
 * @param {!proto.GetManeuverNodeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.GetManeuverNodeResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.GetManeuverNodeResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ScratchServiceClient.prototype.getManeuverNode =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ScratchService/getManeuverNode',
      request,
      metadata || {},
      methodDescriptor_ScratchService_getManeuverNode,
      callback);
};


/**
 * @param {!proto.GetManeuverNodeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.GetManeuverNodeResponse>}
 *     A native promise that resolves to the response
 */
proto.ScratchServicePromiseClient.prototype.getManeuverNode =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ScratchService/getManeuverNode',
      request,
      metadata || {},
      methodDescriptor_ScratchService_getManeuverNode);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ListManeuverNodesRequest,
 *   !proto.ListManeuverNodesResponse>}
 */
const methodDescriptor_ScratchService_listManeuverNodes = new grpc.web.MethodDescriptor(
  '/ScratchService/listManeuverNodes',
  grpc.web.MethodType.UNARY,
  apimessage_pb.ListManeuverNodesRequest,
  apimessage_pb.ListManeuverNodesResponse,
  /**
   * @param {!proto.ListManeuverNodesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  apimessage_pb.ListManeuverNodesResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ListManeuverNodesRequest,
 *   !proto.ListManeuverNodesResponse>}
 */
const methodInfo_ScratchService_listManeuverNodes = new grpc.web.AbstractClientBase.MethodInfo(
  apimessage_pb.ListManeuverNodesResponse,
  /**
   * @param {!proto.ListManeuverNodesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  apimessage_pb.ListManeuverNodesResponse.deserializeBinary
);


/**
 * @param {!proto.ListManeuverNodesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ListManeuverNodesResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ListManeuverNodesResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ScratchServiceClient.prototype.listManeuverNodes =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ScratchService/listManeuverNodes',
      request,
      metadata || {},
      methodDescriptor_ScratchService_listManeuverNodes,
      callback);
};


/**
 * @param {!proto.ListManeuverNodesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ListManeuverNodesResponse>}
 *     A native promise that resolves to the response
 */
proto.ScratchServicePromiseClient.prototype.listManeuverNodes =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ScratchService/listManeuverNodes',
      request,
      metadata || {},
      methodDescriptor_ScratchService_listManeuverNodes);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.RemoveManeuverNodeRequest,
 *   !proto.RemoveManeuverNodeResponse>}
 */
const methodDescriptor_ScratchService_removeManeuverNode = new grpc.web.MethodDescriptor(
  '/ScratchService/removeManeuverNode',
  grpc.web.MethodType.UNARY,
  apimessage_pb.RemoveManeuverNodeRequest,
  apimessage_pb.RemoveManeuverNodeResponse,
  /**
   * @param {!proto.RemoveManeuverNodeRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  apimessage_pb.RemoveManeuverNodeResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.RemoveManeuverNodeRequest,
 *   !proto.RemoveManeuverNodeResponse>}
 */
const methodInfo_ScratchService_removeManeuverNode = new grpc.web.AbstractClientBase.MethodInfo(
  apimessage_pb.RemoveManeuverNodeResponse,
  /**
   * @param {!proto.RemoveManeuverNodeRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  apimessage_pb.RemoveManeuverNodeResponse.deserializeBinary
);


/**
 * @param {!proto.RemoveManeuverNodeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.RemoveManeuverNodeResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.RemoveManeuverNodeResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ScratchServiceClient.prototype.removeManeuverNode =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ScratchService/removeManeuverNode',
      request,
      metadata || {},
      methodDescriptor_ScratchService_removeManeuverNode,
      callback);
};


/**
 * @param {!proto.RemoveManeuverNodeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.RemoveManeuverNodeResponse>}
 *     A native promise that resolves to the response
 */
proto.ScratchServicePromiseClient.prototype.removeManeuverNode =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ScratchService/removeManeuverNode',
      request,
      metadata || {},
      methodDescriptor_ScratchService_removeManeuverNode);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.UniversalTimeRequest,
 *   !proto.UniversalTimeResponse>}
 */
const methodDescriptor_ScratchService_universalTime = new grpc.web.MethodDescriptor(
  '/ScratchService/universalTime',
  grpc.web.MethodType.UNARY,
  apimessage_pb.UniversalTimeRequest,
  apimessage_pb.UniversalTimeResponse,
  /**
   * @param {!proto.UniversalTimeRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  apimessage_pb.UniversalTimeResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.UniversalTimeRequest,
 *   !proto.UniversalTimeResponse>}
 */
const methodInfo_ScratchService_universalTime = new grpc.web.AbstractClientBase.MethodInfo(
  apimessage_pb.UniversalTimeResponse,
  /**
   * @param {!proto.UniversalTimeRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  apimessage_pb.UniversalTimeResponse.deserializeBinary
);


/**
 * @param {!proto.UniversalTimeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.UniversalTimeResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.UniversalTimeResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ScratchServiceClient.prototype.universalTime =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ScratchService/universalTime',
      request,
      metadata || {},
      methodDescriptor_ScratchService_universalTime,
      callback);
};


/**
 * @param {!proto.UniversalTimeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.UniversalTimeResponse>}
 *     A native promise that resolves to the response
 */
proto.ScratchServicePromiseClient.prototype.universalTime =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ScratchService/universalTime',
      request,
      metadata || {},
      methodDescriptor_ScratchService_universalTime);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.WarpToRequest,
 *   !proto.WarpToResponse>}
 */
const methodDescriptor_ScratchService_warpTo = new grpc.web.MethodDescriptor(
  '/ScratchService/warpTo',
  grpc.web.MethodType.UNARY,
  apimessage_pb.WarpToRequest,
  apimessage_pb.WarpToResponse,
  /**
   * @param {!proto.WarpToRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  apimessage_pb.WarpToResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.WarpToRequest,
 *   !proto.WarpToResponse>}
 */
const methodInfo_ScratchService_warpTo = new grpc.web.AbstractClientBase.MethodInfo(
  apimessage_pb.WarpToResponse,
  /**
   * @param {!proto.WarpToRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  apimessage_pb.WarpToResponse.deserializeBinary
);


/**
 * @param {!proto.WarpToRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.WarpToResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.WarpToResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ScratchServiceClient.prototype.warpTo =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ScratchService/warpTo',
      request,
      metadata || {},
      methodDescriptor_ScratchService_warpTo,
      callback);
};


/**
 * @param {!proto.WarpToRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.WarpToResponse>}
 *     A native promise that resolves to the response
 */
proto.ScratchServicePromiseClient.prototype.warpTo =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ScratchService/warpTo',
      request,
      metadata || {},
      methodDescriptor_ScratchService_warpTo);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.IncreaseTimeWarpRateRequest,
 *   !proto.IncreaseTimeWarpRateResponse>}
 */
const methodDescriptor_ScratchService_increaseTimeWarpRate = new grpc.web.MethodDescriptor(
  '/ScratchService/increaseTimeWarpRate',
  grpc.web.MethodType.UNARY,
  apimessage_pb.IncreaseTimeWarpRateRequest,
  apimessage_pb.IncreaseTimeWarpRateResponse,
  /**
   * @param {!proto.IncreaseTimeWarpRateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  apimessage_pb.IncreaseTimeWarpRateResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.IncreaseTimeWarpRateRequest,
 *   !proto.IncreaseTimeWarpRateResponse>}
 */
const methodInfo_ScratchService_increaseTimeWarpRate = new grpc.web.AbstractClientBase.MethodInfo(
  apimessage_pb.IncreaseTimeWarpRateResponse,
  /**
   * @param {!proto.IncreaseTimeWarpRateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  apimessage_pb.IncreaseTimeWarpRateResponse.deserializeBinary
);


/**
 * @param {!proto.IncreaseTimeWarpRateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.IncreaseTimeWarpRateResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.IncreaseTimeWarpRateResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ScratchServiceClient.prototype.increaseTimeWarpRate =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ScratchService/increaseTimeWarpRate',
      request,
      metadata || {},
      methodDescriptor_ScratchService_increaseTimeWarpRate,
      callback);
};


/**
 * @param {!proto.IncreaseTimeWarpRateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.IncreaseTimeWarpRateResponse>}
 *     A native promise that resolves to the response
 */
proto.ScratchServicePromiseClient.prototype.increaseTimeWarpRate =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ScratchService/increaseTimeWarpRate',
      request,
      metadata || {},
      methodDescriptor_ScratchService_increaseTimeWarpRate);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.DecreaseTimeWarpRateRequest,
 *   !proto.DecreaseTimeWarpRateResponse>}
 */
const methodDescriptor_ScratchService_decreaseTimeWarpRate = new grpc.web.MethodDescriptor(
  '/ScratchService/decreaseTimeWarpRate',
  grpc.web.MethodType.UNARY,
  apimessage_pb.DecreaseTimeWarpRateRequest,
  apimessage_pb.DecreaseTimeWarpRateResponse,
  /**
   * @param {!proto.DecreaseTimeWarpRateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  apimessage_pb.DecreaseTimeWarpRateResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.DecreaseTimeWarpRateRequest,
 *   !proto.DecreaseTimeWarpRateResponse>}
 */
const methodInfo_ScratchService_decreaseTimeWarpRate = new grpc.web.AbstractClientBase.MethodInfo(
  apimessage_pb.DecreaseTimeWarpRateResponse,
  /**
   * @param {!proto.DecreaseTimeWarpRateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  apimessage_pb.DecreaseTimeWarpRateResponse.deserializeBinary
);


/**
 * @param {!proto.DecreaseTimeWarpRateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.DecreaseTimeWarpRateResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.DecreaseTimeWarpRateResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ScratchServiceClient.prototype.decreaseTimeWarpRate =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ScratchService/decreaseTimeWarpRate',
      request,
      metadata || {},
      methodDescriptor_ScratchService_decreaseTimeWarpRate,
      callback);
};


/**
 * @param {!proto.DecreaseTimeWarpRateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.DecreaseTimeWarpRateResponse>}
 *     A native promise that resolves to the response
 */
proto.ScratchServicePromiseClient.prototype.decreaseTimeWarpRate =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ScratchService/decreaseTimeWarpRate',
      request,
      metadata || {},
      methodDescriptor_ScratchService_decreaseTimeWarpRate);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.IncreaseTimeWarpRateByRequest,
 *   !proto.IncreaseTimeWarpRateByResponse>}
 */
const methodDescriptor_ScratchService_increaseTimeWarpRateBy = new grpc.web.MethodDescriptor(
  '/ScratchService/increaseTimeWarpRateBy',
  grpc.web.MethodType.UNARY,
  apimessage_pb.IncreaseTimeWarpRateByRequest,
  apimessage_pb.IncreaseTimeWarpRateByResponse,
  /**
   * @param {!proto.IncreaseTimeWarpRateByRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  apimessage_pb.IncreaseTimeWarpRateByResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.IncreaseTimeWarpRateByRequest,
 *   !proto.IncreaseTimeWarpRateByResponse>}
 */
const methodInfo_ScratchService_increaseTimeWarpRateBy = new grpc.web.AbstractClientBase.MethodInfo(
  apimessage_pb.IncreaseTimeWarpRateByResponse,
  /**
   * @param {!proto.IncreaseTimeWarpRateByRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  apimessage_pb.IncreaseTimeWarpRateByResponse.deserializeBinary
);


/**
 * @param {!proto.IncreaseTimeWarpRateByRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.IncreaseTimeWarpRateByResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.IncreaseTimeWarpRateByResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ScratchServiceClient.prototype.increaseTimeWarpRateBy =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ScratchService/increaseTimeWarpRateBy',
      request,
      metadata || {},
      methodDescriptor_ScratchService_increaseTimeWarpRateBy,
      callback);
};


/**
 * @param {!proto.IncreaseTimeWarpRateByRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.IncreaseTimeWarpRateByResponse>}
 *     A native promise that resolves to the response
 */
proto.ScratchServicePromiseClient.prototype.increaseTimeWarpRateBy =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ScratchService/increaseTimeWarpRateBy',
      request,
      metadata || {},
      methodDescriptor_ScratchService_increaseTimeWarpRateBy);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.DecreaseTimeWarpRateByRequest,
 *   !proto.DecreaseTimeWarpRateByResponse>}
 */
const methodDescriptor_ScratchService_decreaseTimeWarpRateBy = new grpc.web.MethodDescriptor(
  '/ScratchService/decreaseTimeWarpRateBy',
  grpc.web.MethodType.UNARY,
  apimessage_pb.DecreaseTimeWarpRateByRequest,
  apimessage_pb.DecreaseTimeWarpRateByResponse,
  /**
   * @param {!proto.DecreaseTimeWarpRateByRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  apimessage_pb.DecreaseTimeWarpRateByResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.DecreaseTimeWarpRateByRequest,
 *   !proto.DecreaseTimeWarpRateByResponse>}
 */
const methodInfo_ScratchService_decreaseTimeWarpRateBy = new grpc.web.AbstractClientBase.MethodInfo(
  apimessage_pb.DecreaseTimeWarpRateByResponse,
  /**
   * @param {!proto.DecreaseTimeWarpRateByRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  apimessage_pb.DecreaseTimeWarpRateByResponse.deserializeBinary
);


/**
 * @param {!proto.DecreaseTimeWarpRateByRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.DecreaseTimeWarpRateByResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.DecreaseTimeWarpRateByResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ScratchServiceClient.prototype.decreaseTimeWarpRateBy =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ScratchService/decreaseTimeWarpRateBy',
      request,
      metadata || {},
      methodDescriptor_ScratchService_decreaseTimeWarpRateBy,
      callback);
};


/**
 * @param {!proto.DecreaseTimeWarpRateByRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.DecreaseTimeWarpRateByResponse>}
 *     A native promise that resolves to the response
 */
proto.ScratchServicePromiseClient.prototype.decreaseTimeWarpRateBy =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ScratchService/decreaseTimeWarpRateBy',
      request,
      metadata || {},
      methodDescriptor_ScratchService_decreaseTimeWarpRateBy);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.StopTimeWarpRequest,
 *   !proto.StopTimeWarpResponse>}
 */
const methodDescriptor_ScratchService_stopTimeWarp = new grpc.web.MethodDescriptor(
  '/ScratchService/stopTimeWarp',
  grpc.web.MethodType.UNARY,
  apimessage_pb.StopTimeWarpRequest,
  apimessage_pb.StopTimeWarpResponse,
  /**
   * @param {!proto.StopTimeWarpRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  apimessage_pb.StopTimeWarpResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.StopTimeWarpRequest,
 *   !proto.StopTimeWarpResponse>}
 */
const methodInfo_ScratchService_stopTimeWarp = new grpc.web.AbstractClientBase.MethodInfo(
  apimessage_pb.StopTimeWarpResponse,
  /**
   * @param {!proto.StopTimeWarpRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  apimessage_pb.StopTimeWarpResponse.deserializeBinary
);


/**
 * @param {!proto.StopTimeWarpRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.StopTimeWarpResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.StopTimeWarpResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ScratchServiceClient.prototype.stopTimeWarp =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ScratchService/stopTimeWarp',
      request,
      metadata || {},
      methodDescriptor_ScratchService_stopTimeWarp,
      callback);
};


/**
 * @param {!proto.StopTimeWarpRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.StopTimeWarpResponse>}
 *     A native promise that resolves to the response
 */
proto.ScratchServicePromiseClient.prototype.stopTimeWarp =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ScratchService/stopTimeWarp',
      request,
      metadata || {},
      methodDescriptor_ScratchService_stopTimeWarp);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.GetTimeWarpRateRequest,
 *   !proto.GetTimeWarpRateResponse>}
 */
const methodDescriptor_ScratchService_getTimeWarpRate = new grpc.web.MethodDescriptor(
  '/ScratchService/getTimeWarpRate',
  grpc.web.MethodType.UNARY,
  apimessage_pb.GetTimeWarpRateRequest,
  apimessage_pb.GetTimeWarpRateResponse,
  /**
   * @param {!proto.GetTimeWarpRateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  apimessage_pb.GetTimeWarpRateResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.GetTimeWarpRateRequest,
 *   !proto.GetTimeWarpRateResponse>}
 */
const methodInfo_ScratchService_getTimeWarpRate = new grpc.web.AbstractClientBase.MethodInfo(
  apimessage_pb.GetTimeWarpRateResponse,
  /**
   * @param {!proto.GetTimeWarpRateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  apimessage_pb.GetTimeWarpRateResponse.deserializeBinary
);


/**
 * @param {!proto.GetTimeWarpRateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.GetTimeWarpRateResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.GetTimeWarpRateResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ScratchServiceClient.prototype.getTimeWarpRate =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ScratchService/getTimeWarpRate',
      request,
      metadata || {},
      methodDescriptor_ScratchService_getTimeWarpRate,
      callback);
};


/**
 * @param {!proto.GetTimeWarpRateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.GetTimeWarpRateResponse>}
 *     A native promise that resolves to the response
 */
proto.ScratchServicePromiseClient.prototype.getTimeWarpRate =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ScratchService/getTimeWarpRate',
      request,
      metadata || {},
      methodDescriptor_ScratchService_getTimeWarpRate);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.GetFlightSceneStartTimeRequest,
 *   !proto.GetFlightSceneStartTimeResponse>}
 */
const methodDescriptor_ScratchService_getFlightSceneStartTime = new grpc.web.MethodDescriptor(
  '/ScratchService/getFlightSceneStartTime',
  grpc.web.MethodType.UNARY,
  apimessage_pb.GetFlightSceneStartTimeRequest,
  apimessage_pb.GetFlightSceneStartTimeResponse,
  /**
   * @param {!proto.GetFlightSceneStartTimeRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  apimessage_pb.GetFlightSceneStartTimeResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.GetFlightSceneStartTimeRequest,
 *   !proto.GetFlightSceneStartTimeResponse>}
 */
const methodInfo_ScratchService_getFlightSceneStartTime = new grpc.web.AbstractClientBase.MethodInfo(
  apimessage_pb.GetFlightSceneStartTimeResponse,
  /**
   * @param {!proto.GetFlightSceneStartTimeRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  apimessage_pb.GetFlightSceneStartTimeResponse.deserializeBinary
);


/**
 * @param {!proto.GetFlightSceneStartTimeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.GetFlightSceneStartTimeResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.GetFlightSceneStartTimeResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ScratchServiceClient.prototype.getFlightSceneStartTime =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ScratchService/getFlightSceneStartTime',
      request,
      metadata || {},
      methodDescriptor_ScratchService_getFlightSceneStartTime,
      callback);
};


/**
 * @param {!proto.GetFlightSceneStartTimeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.GetFlightSceneStartTimeResponse>}
 *     A native promise that resolves to the response
 */
proto.ScratchServicePromiseClient.prototype.getFlightSceneStartTime =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ScratchService/getFlightSceneStartTime',
      request,
      metadata || {},
      methodDescriptor_ScratchService_getFlightSceneStartTime);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.SwitchActiveVesselRequest,
 *   !proto.SwitchActiveVesselResponse>}
 */
const methodDescriptor_ScratchService_switchActiveVessel = new grpc.web.MethodDescriptor(
  '/ScratchService/switchActiveVessel',
  grpc.web.MethodType.UNARY,
  apimessage_pb.SwitchActiveVesselRequest,
  apimessage_pb.SwitchActiveVesselResponse,
  /**
   * @param {!proto.SwitchActiveVesselRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  apimessage_pb.SwitchActiveVesselResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.SwitchActiveVesselRequest,
 *   !proto.SwitchActiveVesselResponse>}
 */
const methodInfo_ScratchService_switchActiveVessel = new grpc.web.AbstractClientBase.MethodInfo(
  apimessage_pb.SwitchActiveVesselResponse,
  /**
   * @param {!proto.SwitchActiveVesselRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  apimessage_pb.SwitchActiveVesselResponse.deserializeBinary
);


/**
 * @param {!proto.SwitchActiveVesselRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.SwitchActiveVesselResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.SwitchActiveVesselResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ScratchServiceClient.prototype.switchActiveVessel =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ScratchService/switchActiveVessel',
      request,
      metadata || {},
      methodDescriptor_ScratchService_switchActiveVessel,
      callback);
};


/**
 * @param {!proto.SwitchActiveVesselRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.SwitchActiveVesselResponse>}
 *     A native promise that resolves to the response
 */
proto.ScratchServicePromiseClient.prototype.switchActiveVessel =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ScratchService/switchActiveVessel',
      request,
      metadata || {},
      methodDescriptor_ScratchService_switchActiveVessel);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.SnapshotRequest,
 *   !proto.SnapshotResponse>}
 */
const methodDescriptor_ScratchService_snapshot = new grpc.web.MethodDescriptor(
  '/ScratchService/snapshot',
  grpc.web.MethodType.UNARY,
  observor_pb.SnapshotRequest,
  observor_pb.SnapshotResponse,
  /**
   * @param {!proto.SnapshotRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  observor_pb.SnapshotResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.SnapshotRequest,
 *   !proto.SnapshotResponse>}
 */
const methodInfo_ScratchService_snapshot = new grpc.web.AbstractClientBase.MethodInfo(
  observor_pb.SnapshotResponse,
  /**
   * @param {!proto.SnapshotRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  observor_pb.SnapshotResponse.deserializeBinary
);


/**
 * @param {!proto.SnapshotRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.SnapshotResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.SnapshotResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ScratchServiceClient.prototype.snapshot =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ScratchService/snapshot',
      request,
      metadata || {},
      methodDescriptor_ScratchService_snapshot,
      callback);
};


/**
 * @param {!proto.SnapshotRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.SnapshotResponse>}
 *     A native promise that resolves to the response
 */
proto.ScratchServicePromiseClient.prototype.snapshot =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ScratchService/snapshot',
      request,
      metadata || {},
      methodDescriptor_ScratchService_snapshot);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.GetVesselPartsByTypeRequest,
 *   !proto.GetVesselPartsByTypeResponse>}
 */
const methodDescriptor_ScratchService_getVesselPartsByType = new grpc.web.MethodDescriptor(
  '/ScratchService/getVesselPartsByType',
  grpc.web.MethodType.UNARY,
  apimessage_pb.GetVesselPartsByTypeRequest,
  apimessage_pb.GetVesselPartsByTypeResponse,
  /**
   * @param {!proto.GetVesselPartsByTypeRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  apimessage_pb.GetVesselPartsByTypeResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.GetVesselPartsByTypeRequest,
 *   !proto.GetVesselPartsByTypeResponse>}
 */
const methodInfo_ScratchService_getVesselPartsByType = new grpc.web.AbstractClientBase.MethodInfo(
  apimessage_pb.GetVesselPartsByTypeResponse,
  /**
   * @param {!proto.GetVesselPartsByTypeRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  apimessage_pb.GetVesselPartsByTypeResponse.deserializeBinary
);


/**
 * @param {!proto.GetVesselPartsByTypeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.GetVesselPartsByTypeResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.GetVesselPartsByTypeResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ScratchServiceClient.prototype.getVesselPartsByType =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ScratchService/getVesselPartsByType',
      request,
      metadata || {},
      methodDescriptor_ScratchService_getVesselPartsByType,
      callback);
};


/**
 * @param {!proto.GetVesselPartsByTypeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.GetVesselPartsByTypeResponse>}
 *     A native promise that resolves to the response
 */
proto.ScratchServicePromiseClient.prototype.getVesselPartsByType =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ScratchService/getVesselPartsByType',
      request,
      metadata || {},
      methodDescriptor_ScratchService_getVesselPartsByType);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.StageRequest,
 *   !proto.StageResponse>}
 */
const methodDescriptor_ScratchService_stage = new grpc.web.MethodDescriptor(
  '/ScratchService/stage',
  grpc.web.MethodType.UNARY,
  apimessage_pb.StageRequest,
  apimessage_pb.StageResponse,
  /**
   * @param {!proto.StageRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  apimessage_pb.StageResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.StageRequest,
 *   !proto.StageResponse>}
 */
const methodInfo_ScratchService_stage = new grpc.web.AbstractClientBase.MethodInfo(
  apimessage_pb.StageResponse,
  /**
   * @param {!proto.StageRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  apimessage_pb.StageResponse.deserializeBinary
);


/**
 * @param {!proto.StageRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.StageResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.StageResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ScratchServiceClient.prototype.stage =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ScratchService/stage',
      request,
      metadata || {},
      methodDescriptor_ScratchService_stage,
      callback);
};


/**
 * @param {!proto.StageRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.StageResponse>}
 *     A native promise that resolves to the response
 */
proto.ScratchServicePromiseClient.prototype.stage =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ScratchService/stage',
      request,
      metadata || {},
      methodDescriptor_ScratchService_stage);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ThrottleRequest,
 *   !proto.ThrottleResponse>}
 */
const methodDescriptor_ScratchService_throttle = new grpc.web.MethodDescriptor(
  '/ScratchService/throttle',
  grpc.web.MethodType.UNARY,
  apimessage_pb.ThrottleRequest,
  apimessage_pb.ThrottleResponse,
  /**
   * @param {!proto.ThrottleRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  apimessage_pb.ThrottleResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ThrottleRequest,
 *   !proto.ThrottleResponse>}
 */
const methodInfo_ScratchService_throttle = new grpc.web.AbstractClientBase.MethodInfo(
  apimessage_pb.ThrottleResponse,
  /**
   * @param {!proto.ThrottleRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  apimessage_pb.ThrottleResponse.deserializeBinary
);


/**
 * @param {!proto.ThrottleRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ThrottleResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ThrottleResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ScratchServiceClient.prototype.throttle =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ScratchService/throttle',
      request,
      metadata || {},
      methodDescriptor_ScratchService_throttle,
      callback);
};


/**
 * @param {!proto.ThrottleRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ThrottleResponse>}
 *     A native promise that resolves to the response
 */
proto.ScratchServicePromiseClient.prototype.throttle =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ScratchService/throttle',
      request,
      metadata || {},
      methodDescriptor_ScratchService_throttle);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.SetSASRequest,
 *   !proto.SetSASResponse>}
 */
const methodDescriptor_ScratchService_setSAS = new grpc.web.MethodDescriptor(
  '/ScratchService/setSAS',
  grpc.web.MethodType.UNARY,
  apimessage_pb.SetSASRequest,
  apimessage_pb.SetSASResponse,
  /**
   * @param {!proto.SetSASRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  apimessage_pb.SetSASResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.SetSASRequest,
 *   !proto.SetSASResponse>}
 */
const methodInfo_ScratchService_setSAS = new grpc.web.AbstractClientBase.MethodInfo(
  apimessage_pb.SetSASResponse,
  /**
   * @param {!proto.SetSASRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  apimessage_pb.SetSASResponse.deserializeBinary
);


/**
 * @param {!proto.SetSASRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.SetSASResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.SetSASResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ScratchServiceClient.prototype.setSAS =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ScratchService/setSAS',
      request,
      metadata || {},
      methodDescriptor_ScratchService_setSAS,
      callback);
};


/**
 * @param {!proto.SetSASRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.SetSASResponse>}
 *     A native promise that resolves to the response
 */
proto.ScratchServicePromiseClient.prototype.setSAS =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ScratchService/setSAS',
      request,
      metadata || {},
      methodDescriptor_ScratchService_setSAS);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.SetRCSRequest,
 *   !proto.SetRCSResponse>}
 */
const methodDescriptor_ScratchService_setRCS = new grpc.web.MethodDescriptor(
  '/ScratchService/setRCS',
  grpc.web.MethodType.UNARY,
  apimessage_pb.SetRCSRequest,
  apimessage_pb.SetRCSResponse,
  /**
   * @param {!proto.SetRCSRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  apimessage_pb.SetRCSResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.SetRCSRequest,
 *   !proto.SetRCSResponse>}
 */
const methodInfo_ScratchService_setRCS = new grpc.web.AbstractClientBase.MethodInfo(
  apimessage_pb.SetRCSResponse,
  /**
   * @param {!proto.SetRCSRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  apimessage_pb.SetRCSResponse.deserializeBinary
);


/**
 * @param {!proto.SetRCSRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.SetRCSResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.SetRCSResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ScratchServiceClient.prototype.setRCS =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ScratchService/setRCS',
      request,
      metadata || {},
      methodDescriptor_ScratchService_setRCS,
      callback);
};


/**
 * @param {!proto.SetRCSRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.SetRCSResponse>}
 *     A native promise that resolves to the response
 */
proto.ScratchServicePromiseClient.prototype.setRCS =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ScratchService/setRCS',
      request,
      metadata || {},
      methodDescriptor_ScratchService_setRCS);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.SetLightsRequest,
 *   !proto.SetLightsResponse>}
 */
const methodDescriptor_ScratchService_setLights = new grpc.web.MethodDescriptor(
  '/ScratchService/setLights',
  grpc.web.MethodType.UNARY,
  apimessage_pb.SetLightsRequest,
  apimessage_pb.SetLightsResponse,
  /**
   * @param {!proto.SetLightsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  apimessage_pb.SetLightsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.SetLightsRequest,
 *   !proto.SetLightsResponse>}
 */
const methodInfo_ScratchService_setLights = new grpc.web.AbstractClientBase.MethodInfo(
  apimessage_pb.SetLightsResponse,
  /**
   * @param {!proto.SetLightsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  apimessage_pb.SetLightsResponse.deserializeBinary
);


/**
 * @param {!proto.SetLightsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.SetLightsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.SetLightsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ScratchServiceClient.prototype.setLights =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ScratchService/setLights',
      request,
      metadata || {},
      methodDescriptor_ScratchService_setLights,
      callback);
};


/**
 * @param {!proto.SetLightsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.SetLightsResponse>}
 *     A native promise that resolves to the response
 */
proto.ScratchServicePromiseClient.prototype.setLights =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ScratchService/setLights',
      request,
      metadata || {},
      methodDescriptor_ScratchService_setLights);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.SetAntennasRequest,
 *   !proto.SetAntennasResponse>}
 */
const methodDescriptor_ScratchService_setAntennas = new grpc.web.MethodDescriptor(
  '/ScratchService/setAntennas',
  grpc.web.MethodType.UNARY,
  apimessage_pb.SetAntennasRequest,
  apimessage_pb.SetAntennasResponse,
  /**
   * @param {!proto.SetAntennasRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  apimessage_pb.SetAntennasResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.SetAntennasRequest,
 *   !proto.SetAntennasResponse>}
 */
const methodInfo_ScratchService_setAntennas = new grpc.web.AbstractClientBase.MethodInfo(
  apimessage_pb.SetAntennasResponse,
  /**
   * @param {!proto.SetAntennasRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  apimessage_pb.SetAntennasResponse.deserializeBinary
);


/**
 * @param {!proto.SetAntennasRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.SetAntennasResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.SetAntennasResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ScratchServiceClient.prototype.setAntennas =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ScratchService/setAntennas',
      request,
      metadata || {},
      methodDescriptor_ScratchService_setAntennas,
      callback);
};


/**
 * @param {!proto.SetAntennasRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.SetAntennasResponse>}
 *     A native promise that resolves to the response
 */
proto.ScratchServicePromiseClient.prototype.setAntennas =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ScratchService/setAntennas',
      request,
      metadata || {},
      methodDescriptor_ScratchService_setAntennas);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.SetSolarPanelsRequest,
 *   !proto.SetSolarPanelsResponse>}
 */
const methodDescriptor_ScratchService_setSolarPanels = new grpc.web.MethodDescriptor(
  '/ScratchService/setSolarPanels',
  grpc.web.MethodType.UNARY,
  apimessage_pb.SetSolarPanelsRequest,
  apimessage_pb.SetSolarPanelsResponse,
  /**
   * @param {!proto.SetSolarPanelsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  apimessage_pb.SetSolarPanelsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.SetSolarPanelsRequest,
 *   !proto.SetSolarPanelsResponse>}
 */
const methodInfo_ScratchService_setSolarPanels = new grpc.web.AbstractClientBase.MethodInfo(
  apimessage_pb.SetSolarPanelsResponse,
  /**
   * @param {!proto.SetSolarPanelsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  apimessage_pb.SetSolarPanelsResponse.deserializeBinary
);


/**
 * @param {!proto.SetSolarPanelsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.SetSolarPanelsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.SetSolarPanelsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ScratchServiceClient.prototype.setSolarPanels =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ScratchService/setSolarPanels',
      request,
      metadata || {},
      methodDescriptor_ScratchService_setSolarPanels,
      callback);
};


/**
 * @param {!proto.SetSolarPanelsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.SetSolarPanelsResponse>}
 *     A native promise that resolves to the response
 */
proto.ScratchServicePromiseClient.prototype.setSolarPanels =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ScratchService/setSolarPanels',
      request,
      metadata || {},
      methodDescriptor_ScratchService_setSolarPanels);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.SetHeadingRequest,
 *   !proto.SetHeadingResponse>}
 */
const methodDescriptor_ScratchService_setHeading = new grpc.web.MethodDescriptor(
  '/ScratchService/setHeading',
  grpc.web.MethodType.UNARY,
  apimessage_pb.SetHeadingRequest,
  apimessage_pb.SetHeadingResponse,
  /**
   * @param {!proto.SetHeadingRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  apimessage_pb.SetHeadingResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.SetHeadingRequest,
 *   !proto.SetHeadingResponse>}
 */
const methodInfo_ScratchService_setHeading = new grpc.web.AbstractClientBase.MethodInfo(
  apimessage_pb.SetHeadingResponse,
  /**
   * @param {!proto.SetHeadingRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  apimessage_pb.SetHeadingResponse.deserializeBinary
);


/**
 * @param {!proto.SetHeadingRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.SetHeadingResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.SetHeadingResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ScratchServiceClient.prototype.setHeading =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ScratchService/setHeading',
      request,
      metadata || {},
      methodDescriptor_ScratchService_setHeading,
      callback);
};


/**
 * @param {!proto.SetHeadingRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.SetHeadingResponse>}
 *     A native promise that resolves to the response
 */
proto.ScratchServicePromiseClient.prototype.setHeading =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ScratchService/setHeading',
      request,
      metadata || {},
      methodDescriptor_ScratchService_setHeading);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.SetHeadingRollFirstRequest,
 *   !proto.SetHeadingRollFirstResponse>}
 */
const methodDescriptor_ScratchService_setHeadingRollFirst = new grpc.web.MethodDescriptor(
  '/ScratchService/setHeadingRollFirst',
  grpc.web.MethodType.UNARY,
  apimessage_pb.SetHeadingRollFirstRequest,
  apimessage_pb.SetHeadingRollFirstResponse,
  /**
   * @param {!proto.SetHeadingRollFirstRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  apimessage_pb.SetHeadingRollFirstResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.SetHeadingRollFirstRequest,
 *   !proto.SetHeadingRollFirstResponse>}
 */
const methodInfo_ScratchService_setHeadingRollFirst = new grpc.web.AbstractClientBase.MethodInfo(
  apimessage_pb.SetHeadingRollFirstResponse,
  /**
   * @param {!proto.SetHeadingRollFirstRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  apimessage_pb.SetHeadingRollFirstResponse.deserializeBinary
);


/**
 * @param {!proto.SetHeadingRollFirstRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.SetHeadingRollFirstResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.SetHeadingRollFirstResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ScratchServiceClient.prototype.setHeadingRollFirst =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ScratchService/setHeadingRollFirst',
      request,
      metadata || {},
      methodDescriptor_ScratchService_setHeadingRollFirst,
      callback);
};


/**
 * @param {!proto.SetHeadingRollFirstRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.SetHeadingRollFirstResponse>}
 *     A native promise that resolves to the response
 */
proto.ScratchServicePromiseClient.prototype.setHeadingRollFirst =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ScratchService/setHeadingRollFirst',
      request,
      metadata || {},
      methodDescriptor_ScratchService_setHeadingRollFirst);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.SetOrientationRequest,
 *   !proto.SetOrientationResponse>}
 */
const methodDescriptor_ScratchService_setOrientation = new grpc.web.MethodDescriptor(
  '/ScratchService/setOrientation',
  grpc.web.MethodType.UNARY,
  apimessage_pb.SetOrientationRequest,
  apimessage_pb.SetOrientationResponse,
  /**
   * @param {!proto.SetOrientationRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  apimessage_pb.SetOrientationResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.SetOrientationRequest,
 *   !proto.SetOrientationResponse>}
 */
const methodInfo_ScratchService_setOrientation = new grpc.web.AbstractClientBase.MethodInfo(
  apimessage_pb.SetOrientationResponse,
  /**
   * @param {!proto.SetOrientationRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  apimessage_pb.SetOrientationResponse.deserializeBinary
);


/**
 * @param {!proto.SetOrientationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.SetOrientationResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.SetOrientationResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ScratchServiceClient.prototype.setOrientation =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ScratchService/setOrientation',
      request,
      metadata || {},
      methodDescriptor_ScratchService_setOrientation,
      callback);
};


/**
 * @param {!proto.SetOrientationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.SetOrientationResponse>}
 *     A native promise that resolves to the response
 */
proto.ScratchServicePromiseClient.prototype.setOrientation =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ScratchService/setOrientation',
      request,
      metadata || {},
      methodDescriptor_ScratchService_setOrientation);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.SetOrientationRollFirstRequest,
 *   !proto.SetOrientationRollFirstResponse>}
 */
const methodDescriptor_ScratchService_setOrientationRollFirst = new grpc.web.MethodDescriptor(
  '/ScratchService/setOrientationRollFirst',
  grpc.web.MethodType.UNARY,
  apimessage_pb.SetOrientationRollFirstRequest,
  apimessage_pb.SetOrientationRollFirstResponse,
  /**
   * @param {!proto.SetOrientationRollFirstRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  apimessage_pb.SetOrientationRollFirstResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.SetOrientationRollFirstRequest,
 *   !proto.SetOrientationRollFirstResponse>}
 */
const methodInfo_ScratchService_setOrientationRollFirst = new grpc.web.AbstractClientBase.MethodInfo(
  apimessage_pb.SetOrientationRollFirstResponse,
  /**
   * @param {!proto.SetOrientationRollFirstRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  apimessage_pb.SetOrientationRollFirstResponse.deserializeBinary
);


/**
 * @param {!proto.SetOrientationRollFirstRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.SetOrientationRollFirstResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.SetOrientationRollFirstResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ScratchServiceClient.prototype.setOrientationRollFirst =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ScratchService/setOrientationRollFirst',
      request,
      metadata || {},
      methodDescriptor_ScratchService_setOrientationRollFirst,
      callback);
};


/**
 * @param {!proto.SetOrientationRollFirstRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.SetOrientationRollFirstResponse>}
 *     A native promise that resolves to the response
 */
proto.ScratchServicePromiseClient.prototype.setOrientationRollFirst =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ScratchService/setOrientationRollFirst',
      request,
      metadata || {},
      methodDescriptor_ScratchService_setOrientationRollFirst);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.DisengageAutoPilotRequest,
 *   !proto.DisengageAutoPilotResponse>}
 */
const methodDescriptor_ScratchService_disengageAutoPilot = new grpc.web.MethodDescriptor(
  '/ScratchService/disengageAutoPilot',
  grpc.web.MethodType.UNARY,
  apimessage_pb.DisengageAutoPilotRequest,
  apimessage_pb.DisengageAutoPilotResponse,
  /**
   * @param {!proto.DisengageAutoPilotRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  apimessage_pb.DisengageAutoPilotResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.DisengageAutoPilotRequest,
 *   !proto.DisengageAutoPilotResponse>}
 */
const methodInfo_ScratchService_disengageAutoPilot = new grpc.web.AbstractClientBase.MethodInfo(
  apimessage_pb.DisengageAutoPilotResponse,
  /**
   * @param {!proto.DisengageAutoPilotRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  apimessage_pb.DisengageAutoPilotResponse.deserializeBinary
);


/**
 * @param {!proto.DisengageAutoPilotRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.DisengageAutoPilotResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.DisengageAutoPilotResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ScratchServiceClient.prototype.disengageAutoPilot =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ScratchService/disengageAutoPilot',
      request,
      metadata || {},
      methodDescriptor_ScratchService_disengageAutoPilot,
      callback);
};


/**
 * @param {!proto.DisengageAutoPilotRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.DisengageAutoPilotResponse>}
 *     A native promise that resolves to the response
 */
proto.ScratchServicePromiseClient.prototype.disengageAutoPilot =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ScratchService/disengageAutoPilot',
      request,
      metadata || {},
      methodDescriptor_ScratchService_disengageAutoPilot);
};


module.exports = proto;

