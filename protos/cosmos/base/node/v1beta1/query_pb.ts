// @generated by protoc-gen-es v1.10.0 with parameter "target=ts"
// @generated from file cosmos/base/node/v1beta1/query.proto (package cosmos.base.node.v1beta1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, protoInt64, Timestamp } from "@bufbuild/protobuf";

/**
 * ConfigRequest defines the request structure for the Config gRPC query.
 *
 * @generated from message cosmos.base.node.v1beta1.ConfigRequest
 */
export class ConfigRequest extends Message<ConfigRequest> {
  constructor(data?: PartialMessage<ConfigRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmos.base.node.v1beta1.ConfigRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ConfigRequest {
    return new ConfigRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ConfigRequest {
    return new ConfigRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ConfigRequest {
    return new ConfigRequest().fromJsonString(jsonString, options);
  }

  static equals(a: ConfigRequest | PlainMessage<ConfigRequest> | undefined, b: ConfigRequest | PlainMessage<ConfigRequest> | undefined): boolean {
    return proto3.util.equals(ConfigRequest, a, b);
  }
}

/**
 * ConfigResponse defines the response structure for the Config gRPC query.
 *
 * @generated from message cosmos.base.node.v1beta1.ConfigResponse
 */
export class ConfigResponse extends Message<ConfigResponse> {
  /**
   * @generated from field: string minimum_gas_price = 1;
   */
  minimumGasPrice = "";

  /**
   * pruning settings
   *
   * @generated from field: string pruning_keep_recent = 2;
   */
  pruningKeepRecent = "";

  /**
   * @generated from field: string pruning_interval = 3;
   */
  pruningInterval = "";

  constructor(data?: PartialMessage<ConfigResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmos.base.node.v1beta1.ConfigResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "minimum_gas_price", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "pruning_keep_recent", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "pruning_interval", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ConfigResponse {
    return new ConfigResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ConfigResponse {
    return new ConfigResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ConfigResponse {
    return new ConfigResponse().fromJsonString(jsonString, options);
  }

  static equals(a: ConfigResponse | PlainMessage<ConfigResponse> | undefined, b: ConfigResponse | PlainMessage<ConfigResponse> | undefined): boolean {
    return proto3.util.equals(ConfigResponse, a, b);
  }
}

/**
 * StateRequest defines the request structure for the status of a node.
 *
 * @generated from message cosmos.base.node.v1beta1.StatusRequest
 */
export class StatusRequest extends Message<StatusRequest> {
  constructor(data?: PartialMessage<StatusRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmos.base.node.v1beta1.StatusRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): StatusRequest {
    return new StatusRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): StatusRequest {
    return new StatusRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): StatusRequest {
    return new StatusRequest().fromJsonString(jsonString, options);
  }

  static equals(a: StatusRequest | PlainMessage<StatusRequest> | undefined, b: StatusRequest | PlainMessage<StatusRequest> | undefined): boolean {
    return proto3.util.equals(StatusRequest, a, b);
  }
}

/**
 * StateResponse defines the response structure for the status of a node.
 *
 * @generated from message cosmos.base.node.v1beta1.StatusResponse
 */
export class StatusResponse extends Message<StatusResponse> {
  /**
   * earliest block height available in the store
   *
   * @generated from field: uint64 earliest_store_height = 1;
   */
  earliestStoreHeight = protoInt64.zero;

  /**
   * current block height
   *
   * @generated from field: uint64 height = 2;
   */
  height = protoInt64.zero;

  /**
   * block height timestamp
   *
   * @generated from field: google.protobuf.Timestamp timestamp = 3;
   */
  timestamp?: Timestamp;

  /**
   * app hash of the current block
   *
   * @generated from field: bytes app_hash = 4;
   */
  appHash = new Uint8Array(0);

  /**
   * validator hash provided by the consensus header
   *
   * @generated from field: bytes validator_hash = 5;
   */
  validatorHash = new Uint8Array(0);

  constructor(data?: PartialMessage<StatusResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmos.base.node.v1beta1.StatusResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "earliest_store_height", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: "height", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 3, name: "timestamp", kind: "message", T: Timestamp },
    { no: 4, name: "app_hash", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 5, name: "validator_hash", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): StatusResponse {
    return new StatusResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): StatusResponse {
    return new StatusResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): StatusResponse {
    return new StatusResponse().fromJsonString(jsonString, options);
  }

  static equals(a: StatusResponse | PlainMessage<StatusResponse> | undefined, b: StatusResponse | PlainMessage<StatusResponse> | undefined): boolean {
    return proto3.util.equals(StatusResponse, a, b);
  }
}
