// @generated by protoc-gen-es v1.10.0 with parameter "target=ts"
// @generated from file cosmos/base/tendermint/v1beta1/query.proto (package cosmos.base.tendermint.v1beta1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Any, Message, proto3, protoInt64 } from "@bufbuild/protobuf";
import { PageRequest, PageResponse } from "../../query/v1beta1/pagination_pb.js";
import { BlockID } from "../../../../tendermint/types/types_pb.js";
import { Block } from "../../../../tendermint/types/block_pb.js";
import { Block as Block$1 } from "./types_pb.js";
import { DefaultNodeInfo } from "../../../../tendermint/p2p/types_pb.js";

/**
 * GetValidatorSetByHeightRequest is the request type for the Query/GetValidatorSetByHeight RPC method.
 *
 * @generated from message cosmos.base.tendermint.v1beta1.GetValidatorSetByHeightRequest
 */
export class GetValidatorSetByHeightRequest extends Message<GetValidatorSetByHeightRequest> {
  /**
   * @generated from field: int64 height = 1;
   */
  height = protoInt64.zero;

  /**
   * pagination defines an pagination for the request.
   *
   * @generated from field: cosmos.base.query.v1beta1.PageRequest pagination = 2;
   */
  pagination?: PageRequest;

  constructor(data?: PartialMessage<GetValidatorSetByHeightRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmos.base.tendermint.v1beta1.GetValidatorSetByHeightRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "height", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 2, name: "pagination", kind: "message", T: PageRequest },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetValidatorSetByHeightRequest {
    return new GetValidatorSetByHeightRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetValidatorSetByHeightRequest {
    return new GetValidatorSetByHeightRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetValidatorSetByHeightRequest {
    return new GetValidatorSetByHeightRequest().fromJsonString(jsonString, options);
  }

  static equals(a: GetValidatorSetByHeightRequest | PlainMessage<GetValidatorSetByHeightRequest> | undefined, b: GetValidatorSetByHeightRequest | PlainMessage<GetValidatorSetByHeightRequest> | undefined): boolean {
    return proto3.util.equals(GetValidatorSetByHeightRequest, a, b);
  }
}

/**
 * GetValidatorSetByHeightResponse is the response type for the Query/GetValidatorSetByHeight RPC method.
 *
 * @generated from message cosmos.base.tendermint.v1beta1.GetValidatorSetByHeightResponse
 */
export class GetValidatorSetByHeightResponse extends Message<GetValidatorSetByHeightResponse> {
  /**
   * @generated from field: int64 block_height = 1;
   */
  blockHeight = protoInt64.zero;

  /**
   * @generated from field: repeated cosmos.base.tendermint.v1beta1.Validator validators = 2;
   */
  validators: Validator[] = [];

  /**
   * pagination defines an pagination for the response.
   *
   * @generated from field: cosmos.base.query.v1beta1.PageResponse pagination = 3;
   */
  pagination?: PageResponse;

  constructor(data?: PartialMessage<GetValidatorSetByHeightResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmos.base.tendermint.v1beta1.GetValidatorSetByHeightResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "block_height", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 2, name: "validators", kind: "message", T: Validator, repeated: true },
    { no: 3, name: "pagination", kind: "message", T: PageResponse },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetValidatorSetByHeightResponse {
    return new GetValidatorSetByHeightResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetValidatorSetByHeightResponse {
    return new GetValidatorSetByHeightResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetValidatorSetByHeightResponse {
    return new GetValidatorSetByHeightResponse().fromJsonString(jsonString, options);
  }

  static equals(a: GetValidatorSetByHeightResponse | PlainMessage<GetValidatorSetByHeightResponse> | undefined, b: GetValidatorSetByHeightResponse | PlainMessage<GetValidatorSetByHeightResponse> | undefined): boolean {
    return proto3.util.equals(GetValidatorSetByHeightResponse, a, b);
  }
}

/**
 * GetLatestValidatorSetRequest is the request type for the Query/GetValidatorSetByHeight RPC method.
 *
 * @generated from message cosmos.base.tendermint.v1beta1.GetLatestValidatorSetRequest
 */
export class GetLatestValidatorSetRequest extends Message<GetLatestValidatorSetRequest> {
  /**
   * pagination defines an pagination for the request.
   *
   * @generated from field: cosmos.base.query.v1beta1.PageRequest pagination = 1;
   */
  pagination?: PageRequest;

  constructor(data?: PartialMessage<GetLatestValidatorSetRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmos.base.tendermint.v1beta1.GetLatestValidatorSetRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "pagination", kind: "message", T: PageRequest },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetLatestValidatorSetRequest {
    return new GetLatestValidatorSetRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetLatestValidatorSetRequest {
    return new GetLatestValidatorSetRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetLatestValidatorSetRequest {
    return new GetLatestValidatorSetRequest().fromJsonString(jsonString, options);
  }

  static equals(a: GetLatestValidatorSetRequest | PlainMessage<GetLatestValidatorSetRequest> | undefined, b: GetLatestValidatorSetRequest | PlainMessage<GetLatestValidatorSetRequest> | undefined): boolean {
    return proto3.util.equals(GetLatestValidatorSetRequest, a, b);
  }
}

/**
 * GetLatestValidatorSetResponse is the response type for the Query/GetValidatorSetByHeight RPC method.
 *
 * @generated from message cosmos.base.tendermint.v1beta1.GetLatestValidatorSetResponse
 */
export class GetLatestValidatorSetResponse extends Message<GetLatestValidatorSetResponse> {
  /**
   * @generated from field: int64 block_height = 1;
   */
  blockHeight = protoInt64.zero;

  /**
   * @generated from field: repeated cosmos.base.tendermint.v1beta1.Validator validators = 2;
   */
  validators: Validator[] = [];

  /**
   * pagination defines an pagination for the response.
   *
   * @generated from field: cosmos.base.query.v1beta1.PageResponse pagination = 3;
   */
  pagination?: PageResponse;

  constructor(data?: PartialMessage<GetLatestValidatorSetResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmos.base.tendermint.v1beta1.GetLatestValidatorSetResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "block_height", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 2, name: "validators", kind: "message", T: Validator, repeated: true },
    { no: 3, name: "pagination", kind: "message", T: PageResponse },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetLatestValidatorSetResponse {
    return new GetLatestValidatorSetResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetLatestValidatorSetResponse {
    return new GetLatestValidatorSetResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetLatestValidatorSetResponse {
    return new GetLatestValidatorSetResponse().fromJsonString(jsonString, options);
  }

  static equals(a: GetLatestValidatorSetResponse | PlainMessage<GetLatestValidatorSetResponse> | undefined, b: GetLatestValidatorSetResponse | PlainMessage<GetLatestValidatorSetResponse> | undefined): boolean {
    return proto3.util.equals(GetLatestValidatorSetResponse, a, b);
  }
}

/**
 * Validator is the type for the validator-set.
 *
 * @generated from message cosmos.base.tendermint.v1beta1.Validator
 */
export class Validator extends Message<Validator> {
  /**
   * @generated from field: string address = 1;
   */
  address = "";

  /**
   * @generated from field: google.protobuf.Any pub_key = 2;
   */
  pubKey?: Any;

  /**
   * @generated from field: int64 voting_power = 3;
   */
  votingPower = protoInt64.zero;

  /**
   * @generated from field: int64 proposer_priority = 4;
   */
  proposerPriority = protoInt64.zero;

  constructor(data?: PartialMessage<Validator>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmos.base.tendermint.v1beta1.Validator";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "pub_key", kind: "message", T: Any },
    { no: 3, name: "voting_power", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 4, name: "proposer_priority", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Validator {
    return new Validator().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Validator {
    return new Validator().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Validator {
    return new Validator().fromJsonString(jsonString, options);
  }

  static equals(a: Validator | PlainMessage<Validator> | undefined, b: Validator | PlainMessage<Validator> | undefined): boolean {
    return proto3.util.equals(Validator, a, b);
  }
}

/**
 * GetBlockByHeightRequest is the request type for the Query/GetBlockByHeight RPC method.
 *
 * @generated from message cosmos.base.tendermint.v1beta1.GetBlockByHeightRequest
 */
export class GetBlockByHeightRequest extends Message<GetBlockByHeightRequest> {
  /**
   * @generated from field: int64 height = 1;
   */
  height = protoInt64.zero;

  constructor(data?: PartialMessage<GetBlockByHeightRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmos.base.tendermint.v1beta1.GetBlockByHeightRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "height", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetBlockByHeightRequest {
    return new GetBlockByHeightRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetBlockByHeightRequest {
    return new GetBlockByHeightRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetBlockByHeightRequest {
    return new GetBlockByHeightRequest().fromJsonString(jsonString, options);
  }

  static equals(a: GetBlockByHeightRequest | PlainMessage<GetBlockByHeightRequest> | undefined, b: GetBlockByHeightRequest | PlainMessage<GetBlockByHeightRequest> | undefined): boolean {
    return proto3.util.equals(GetBlockByHeightRequest, a, b);
  }
}

/**
 * GetBlockByHeightResponse is the response type for the Query/GetBlockByHeight RPC method.
 *
 * @generated from message cosmos.base.tendermint.v1beta1.GetBlockByHeightResponse
 */
export class GetBlockByHeightResponse extends Message<GetBlockByHeightResponse> {
  /**
   * @generated from field: tendermint.types.BlockID block_id = 1;
   */
  blockId?: BlockID;

  /**
   * Deprecated: please use `sdk_block` instead
   *
   * @generated from field: tendermint.types.Block block = 2;
   */
  block?: Block;

  /**
   * Since: cosmos-sdk 0.47
   *
   * @generated from field: cosmos.base.tendermint.v1beta1.Block sdk_block = 3;
   */
  sdkBlock?: Block$1;

  constructor(data?: PartialMessage<GetBlockByHeightResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmos.base.tendermint.v1beta1.GetBlockByHeightResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "block_id", kind: "message", T: BlockID },
    { no: 2, name: "block", kind: "message", T: Block },
    { no: 3, name: "sdk_block", kind: "message", T: Block$1 },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetBlockByHeightResponse {
    return new GetBlockByHeightResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetBlockByHeightResponse {
    return new GetBlockByHeightResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetBlockByHeightResponse {
    return new GetBlockByHeightResponse().fromJsonString(jsonString, options);
  }

  static equals(a: GetBlockByHeightResponse | PlainMessage<GetBlockByHeightResponse> | undefined, b: GetBlockByHeightResponse | PlainMessage<GetBlockByHeightResponse> | undefined): boolean {
    return proto3.util.equals(GetBlockByHeightResponse, a, b);
  }
}

/**
 * GetLatestBlockRequest is the request type for the Query/GetLatestBlock RPC method.
 *
 * @generated from message cosmos.base.tendermint.v1beta1.GetLatestBlockRequest
 */
export class GetLatestBlockRequest extends Message<GetLatestBlockRequest> {
  constructor(data?: PartialMessage<GetLatestBlockRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmos.base.tendermint.v1beta1.GetLatestBlockRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetLatestBlockRequest {
    return new GetLatestBlockRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetLatestBlockRequest {
    return new GetLatestBlockRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetLatestBlockRequest {
    return new GetLatestBlockRequest().fromJsonString(jsonString, options);
  }

  static equals(a: GetLatestBlockRequest | PlainMessage<GetLatestBlockRequest> | undefined, b: GetLatestBlockRequest | PlainMessage<GetLatestBlockRequest> | undefined): boolean {
    return proto3.util.equals(GetLatestBlockRequest, a, b);
  }
}

/**
 * GetLatestBlockResponse is the response type for the Query/GetLatestBlock RPC method.
 *
 * @generated from message cosmos.base.tendermint.v1beta1.GetLatestBlockResponse
 */
export class GetLatestBlockResponse extends Message<GetLatestBlockResponse> {
  /**
   * @generated from field: tendermint.types.BlockID block_id = 1;
   */
  blockId?: BlockID;

  /**
   * Deprecated: please use `sdk_block` instead
   *
   * @generated from field: tendermint.types.Block block = 2;
   */
  block?: Block;

  /**
   * Since: cosmos-sdk 0.47
   *
   * @generated from field: cosmos.base.tendermint.v1beta1.Block sdk_block = 3;
   */
  sdkBlock?: Block$1;

  constructor(data?: PartialMessage<GetLatestBlockResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmos.base.tendermint.v1beta1.GetLatestBlockResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "block_id", kind: "message", T: BlockID },
    { no: 2, name: "block", kind: "message", T: Block },
    { no: 3, name: "sdk_block", kind: "message", T: Block$1 },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetLatestBlockResponse {
    return new GetLatestBlockResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetLatestBlockResponse {
    return new GetLatestBlockResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetLatestBlockResponse {
    return new GetLatestBlockResponse().fromJsonString(jsonString, options);
  }

  static equals(a: GetLatestBlockResponse | PlainMessage<GetLatestBlockResponse> | undefined, b: GetLatestBlockResponse | PlainMessage<GetLatestBlockResponse> | undefined): boolean {
    return proto3.util.equals(GetLatestBlockResponse, a, b);
  }
}

/**
 * GetSyncingRequest is the request type for the Query/GetSyncing RPC method.
 *
 * @generated from message cosmos.base.tendermint.v1beta1.GetSyncingRequest
 */
export class GetSyncingRequest extends Message<GetSyncingRequest> {
  constructor(data?: PartialMessage<GetSyncingRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmos.base.tendermint.v1beta1.GetSyncingRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetSyncingRequest {
    return new GetSyncingRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetSyncingRequest {
    return new GetSyncingRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetSyncingRequest {
    return new GetSyncingRequest().fromJsonString(jsonString, options);
  }

  static equals(a: GetSyncingRequest | PlainMessage<GetSyncingRequest> | undefined, b: GetSyncingRequest | PlainMessage<GetSyncingRequest> | undefined): boolean {
    return proto3.util.equals(GetSyncingRequest, a, b);
  }
}

/**
 * GetSyncingResponse is the response type for the Query/GetSyncing RPC method.
 *
 * @generated from message cosmos.base.tendermint.v1beta1.GetSyncingResponse
 */
export class GetSyncingResponse extends Message<GetSyncingResponse> {
  /**
   * @generated from field: bool syncing = 1;
   */
  syncing = false;

  constructor(data?: PartialMessage<GetSyncingResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmos.base.tendermint.v1beta1.GetSyncingResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "syncing", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetSyncingResponse {
    return new GetSyncingResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetSyncingResponse {
    return new GetSyncingResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetSyncingResponse {
    return new GetSyncingResponse().fromJsonString(jsonString, options);
  }

  static equals(a: GetSyncingResponse | PlainMessage<GetSyncingResponse> | undefined, b: GetSyncingResponse | PlainMessage<GetSyncingResponse> | undefined): boolean {
    return proto3.util.equals(GetSyncingResponse, a, b);
  }
}

/**
 * GetNodeInfoRequest is the request type for the Query/GetNodeInfo RPC method.
 *
 * @generated from message cosmos.base.tendermint.v1beta1.GetNodeInfoRequest
 */
export class GetNodeInfoRequest extends Message<GetNodeInfoRequest> {
  constructor(data?: PartialMessage<GetNodeInfoRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmos.base.tendermint.v1beta1.GetNodeInfoRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetNodeInfoRequest {
    return new GetNodeInfoRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetNodeInfoRequest {
    return new GetNodeInfoRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetNodeInfoRequest {
    return new GetNodeInfoRequest().fromJsonString(jsonString, options);
  }

  static equals(a: GetNodeInfoRequest | PlainMessage<GetNodeInfoRequest> | undefined, b: GetNodeInfoRequest | PlainMessage<GetNodeInfoRequest> | undefined): boolean {
    return proto3.util.equals(GetNodeInfoRequest, a, b);
  }
}

/**
 * GetNodeInfoResponse is the response type for the Query/GetNodeInfo RPC method.
 *
 * @generated from message cosmos.base.tendermint.v1beta1.GetNodeInfoResponse
 */
export class GetNodeInfoResponse extends Message<GetNodeInfoResponse> {
  /**
   * @generated from field: tendermint.p2p.DefaultNodeInfo default_node_info = 1;
   */
  defaultNodeInfo?: DefaultNodeInfo;

  /**
   * @generated from field: cosmos.base.tendermint.v1beta1.VersionInfo application_version = 2;
   */
  applicationVersion?: VersionInfo;

  constructor(data?: PartialMessage<GetNodeInfoResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmos.base.tendermint.v1beta1.GetNodeInfoResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "default_node_info", kind: "message", T: DefaultNodeInfo },
    { no: 2, name: "application_version", kind: "message", T: VersionInfo },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetNodeInfoResponse {
    return new GetNodeInfoResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetNodeInfoResponse {
    return new GetNodeInfoResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetNodeInfoResponse {
    return new GetNodeInfoResponse().fromJsonString(jsonString, options);
  }

  static equals(a: GetNodeInfoResponse | PlainMessage<GetNodeInfoResponse> | undefined, b: GetNodeInfoResponse | PlainMessage<GetNodeInfoResponse> | undefined): boolean {
    return proto3.util.equals(GetNodeInfoResponse, a, b);
  }
}

/**
 * VersionInfo is the type for the GetNodeInfoResponse message.
 *
 * @generated from message cosmos.base.tendermint.v1beta1.VersionInfo
 */
export class VersionInfo extends Message<VersionInfo> {
  /**
   * @generated from field: string name = 1;
   */
  name = "";

  /**
   * @generated from field: string app_name = 2;
   */
  appName = "";

  /**
   * @generated from field: string version = 3;
   */
  version = "";

  /**
   * @generated from field: string git_commit = 4;
   */
  gitCommit = "";

  /**
   * @generated from field: string build_tags = 5;
   */
  buildTags = "";

  /**
   * @generated from field: string go_version = 6;
   */
  goVersion = "";

  /**
   * @generated from field: repeated cosmos.base.tendermint.v1beta1.Module build_deps = 7;
   */
  buildDeps: Module[] = [];

  /**
   * Since: cosmos-sdk 0.43
   *
   * @generated from field: string cosmos_sdk_version = 8;
   */
  cosmosSdkVersion = "";

  constructor(data?: PartialMessage<VersionInfo>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmos.base.tendermint.v1beta1.VersionInfo";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "app_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "version", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "git_commit", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "build_tags", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "go_version", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 7, name: "build_deps", kind: "message", T: Module, repeated: true },
    { no: 8, name: "cosmos_sdk_version", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): VersionInfo {
    return new VersionInfo().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): VersionInfo {
    return new VersionInfo().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): VersionInfo {
    return new VersionInfo().fromJsonString(jsonString, options);
  }

  static equals(a: VersionInfo | PlainMessage<VersionInfo> | undefined, b: VersionInfo | PlainMessage<VersionInfo> | undefined): boolean {
    return proto3.util.equals(VersionInfo, a, b);
  }
}

/**
 * Module is the type for VersionInfo
 *
 * @generated from message cosmos.base.tendermint.v1beta1.Module
 */
export class Module extends Message<Module> {
  /**
   * module path
   *
   * @generated from field: string path = 1;
   */
  path = "";

  /**
   * module version
   *
   * @generated from field: string version = 2;
   */
  version = "";

  /**
   * checksum
   *
   * @generated from field: string sum = 3;
   */
  sum = "";

  constructor(data?: PartialMessage<Module>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmos.base.tendermint.v1beta1.Module";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "path", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "version", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "sum", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Module {
    return new Module().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Module {
    return new Module().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Module {
    return new Module().fromJsonString(jsonString, options);
  }

  static equals(a: Module | PlainMessage<Module> | undefined, b: Module | PlainMessage<Module> | undefined): boolean {
    return proto3.util.equals(Module, a, b);
  }
}

/**
 * ABCIQueryRequest defines the request structure for the ABCIQuery gRPC query.
 *
 * @generated from message cosmos.base.tendermint.v1beta1.ABCIQueryRequest
 */
export class ABCIQueryRequest extends Message<ABCIQueryRequest> {
  /**
   * @generated from field: bytes data = 1;
   */
  data = new Uint8Array(0);

  /**
   * @generated from field: string path = 2;
   */
  path = "";

  /**
   * @generated from field: int64 height = 3;
   */
  height = protoInt64.zero;

  /**
   * @generated from field: bool prove = 4;
   */
  prove = false;

  constructor(data?: PartialMessage<ABCIQueryRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmos.base.tendermint.v1beta1.ABCIQueryRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "data", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 2, name: "path", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "height", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 4, name: "prove", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ABCIQueryRequest {
    return new ABCIQueryRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ABCIQueryRequest {
    return new ABCIQueryRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ABCIQueryRequest {
    return new ABCIQueryRequest().fromJsonString(jsonString, options);
  }

  static equals(a: ABCIQueryRequest | PlainMessage<ABCIQueryRequest> | undefined, b: ABCIQueryRequest | PlainMessage<ABCIQueryRequest> | undefined): boolean {
    return proto3.util.equals(ABCIQueryRequest, a, b);
  }
}

/**
 * ABCIQueryResponse defines the response structure for the ABCIQuery gRPC query.
 *
 * Note: This type is a duplicate of the ResponseQuery proto type defined in
 * Tendermint.
 *
 * @generated from message cosmos.base.tendermint.v1beta1.ABCIQueryResponse
 */
export class ABCIQueryResponse extends Message<ABCIQueryResponse> {
  /**
   * @generated from field: uint32 code = 1;
   */
  code = 0;

  /**
   * nondeterministic
   *
   * @generated from field: string log = 3;
   */
  log = "";

  /**
   * nondeterministic
   *
   * @generated from field: string info = 4;
   */
  info = "";

  /**
   * @generated from field: int64 index = 5;
   */
  index = protoInt64.zero;

  /**
   * @generated from field: bytes key = 6;
   */
  key = new Uint8Array(0);

  /**
   * @generated from field: bytes value = 7;
   */
  value = new Uint8Array(0);

  /**
   * @generated from field: cosmos.base.tendermint.v1beta1.ProofOps proof_ops = 8;
   */
  proofOps?: ProofOps;

  /**
   * @generated from field: int64 height = 9;
   */
  height = protoInt64.zero;

  /**
   * @generated from field: string codespace = 10;
   */
  codespace = "";

  constructor(data?: PartialMessage<ABCIQueryResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmos.base.tendermint.v1beta1.ABCIQueryResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "code", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 3, name: "log", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "info", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "index", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 6, name: "key", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 7, name: "value", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 8, name: "proof_ops", kind: "message", T: ProofOps },
    { no: 9, name: "height", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 10, name: "codespace", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ABCIQueryResponse {
    return new ABCIQueryResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ABCIQueryResponse {
    return new ABCIQueryResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ABCIQueryResponse {
    return new ABCIQueryResponse().fromJsonString(jsonString, options);
  }

  static equals(a: ABCIQueryResponse | PlainMessage<ABCIQueryResponse> | undefined, b: ABCIQueryResponse | PlainMessage<ABCIQueryResponse> | undefined): boolean {
    return proto3.util.equals(ABCIQueryResponse, a, b);
  }
}

/**
 * ProofOp defines an operation used for calculating Merkle root. The data could
 * be arbitrary format, providing necessary data for example neighbouring node
 * hash.
 *
 * Note: This type is a duplicate of the ProofOp proto type defined in Tendermint.
 *
 * @generated from message cosmos.base.tendermint.v1beta1.ProofOp
 */
export class ProofOp extends Message<ProofOp> {
  /**
   * @generated from field: string type = 1;
   */
  type = "";

  /**
   * @generated from field: bytes key = 2;
   */
  key = new Uint8Array(0);

  /**
   * @generated from field: bytes data = 3;
   */
  data = new Uint8Array(0);

  constructor(data?: PartialMessage<ProofOp>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmos.base.tendermint.v1beta1.ProofOp";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "type", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "key", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 3, name: "data", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ProofOp {
    return new ProofOp().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ProofOp {
    return new ProofOp().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ProofOp {
    return new ProofOp().fromJsonString(jsonString, options);
  }

  static equals(a: ProofOp | PlainMessage<ProofOp> | undefined, b: ProofOp | PlainMessage<ProofOp> | undefined): boolean {
    return proto3.util.equals(ProofOp, a, b);
  }
}

/**
 * ProofOps is Merkle proof defined by the list of ProofOps.
 *
 * Note: This type is a duplicate of the ProofOps proto type defined in Tendermint.
 *
 * @generated from message cosmos.base.tendermint.v1beta1.ProofOps
 */
export class ProofOps extends Message<ProofOps> {
  /**
   * @generated from field: repeated cosmos.base.tendermint.v1beta1.ProofOp ops = 1;
   */
  ops: ProofOp[] = [];

  constructor(data?: PartialMessage<ProofOps>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmos.base.tendermint.v1beta1.ProofOps";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "ops", kind: "message", T: ProofOp, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ProofOps {
    return new ProofOps().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ProofOps {
    return new ProofOps().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ProofOps {
    return new ProofOps().fromJsonString(jsonString, options);
  }

  static equals(a: ProofOps | PlainMessage<ProofOps> | undefined, b: ProofOps | PlainMessage<ProofOps> | undefined): boolean {
    return proto3.util.equals(ProofOps, a, b);
  }
}

