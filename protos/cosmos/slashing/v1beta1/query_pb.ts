// @generated by protoc-gen-es v1.10.0 with parameter "target=ts"
// @generated from file cosmos/slashing/v1beta1/query.proto (package cosmos.slashing.v1beta1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { Params, ValidatorSigningInfo } from "./slashing_pb.js";
import { PageRequest, PageResponse } from "../../base/query/v1beta1/pagination_pb.js";

/**
 * QueryParamsRequest is the request type for the Query/Params RPC method
 *
 * @generated from message cosmos.slashing.v1beta1.QueryParamsRequest
 */
export class QueryParamsRequest extends Message<QueryParamsRequest> {
  constructor(data?: PartialMessage<QueryParamsRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmos.slashing.v1beta1.QueryParamsRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryParamsRequest {
    return new QueryParamsRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryParamsRequest {
    return new QueryParamsRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryParamsRequest {
    return new QueryParamsRequest().fromJsonString(jsonString, options);
  }

  static equals(a: QueryParamsRequest | PlainMessage<QueryParamsRequest> | undefined, b: QueryParamsRequest | PlainMessage<QueryParamsRequest> | undefined): boolean {
    return proto3.util.equals(QueryParamsRequest, a, b);
  }
}

/**
 * QueryParamsResponse is the response type for the Query/Params RPC method
 *
 * @generated from message cosmos.slashing.v1beta1.QueryParamsResponse
 */
export class QueryParamsResponse extends Message<QueryParamsResponse> {
  /**
   * @generated from field: cosmos.slashing.v1beta1.Params params = 1;
   */
  params?: Params;

  constructor(data?: PartialMessage<QueryParamsResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmos.slashing.v1beta1.QueryParamsResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "params", kind: "message", T: Params },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryParamsResponse {
    return new QueryParamsResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryParamsResponse {
    return new QueryParamsResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryParamsResponse {
    return new QueryParamsResponse().fromJsonString(jsonString, options);
  }

  static equals(a: QueryParamsResponse | PlainMessage<QueryParamsResponse> | undefined, b: QueryParamsResponse | PlainMessage<QueryParamsResponse> | undefined): boolean {
    return proto3.util.equals(QueryParamsResponse, a, b);
  }
}

/**
 * QuerySigningInfoRequest is the request type for the Query/SigningInfo RPC
 * method
 *
 * @generated from message cosmos.slashing.v1beta1.QuerySigningInfoRequest
 */
export class QuerySigningInfoRequest extends Message<QuerySigningInfoRequest> {
  /**
   * cons_address is the address to query signing info of
   *
   * @generated from field: string cons_address = 1;
   */
  consAddress = "";

  constructor(data?: PartialMessage<QuerySigningInfoRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmos.slashing.v1beta1.QuerySigningInfoRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "cons_address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QuerySigningInfoRequest {
    return new QuerySigningInfoRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QuerySigningInfoRequest {
    return new QuerySigningInfoRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QuerySigningInfoRequest {
    return new QuerySigningInfoRequest().fromJsonString(jsonString, options);
  }

  static equals(a: QuerySigningInfoRequest | PlainMessage<QuerySigningInfoRequest> | undefined, b: QuerySigningInfoRequest | PlainMessage<QuerySigningInfoRequest> | undefined): boolean {
    return proto3.util.equals(QuerySigningInfoRequest, a, b);
  }
}

/**
 * QuerySigningInfoResponse is the response type for the Query/SigningInfo RPC
 * method
 *
 * @generated from message cosmos.slashing.v1beta1.QuerySigningInfoResponse
 */
export class QuerySigningInfoResponse extends Message<QuerySigningInfoResponse> {
  /**
   * val_signing_info is the signing info of requested val cons address
   *
   * @generated from field: cosmos.slashing.v1beta1.ValidatorSigningInfo val_signing_info = 1;
   */
  valSigningInfo?: ValidatorSigningInfo;

  constructor(data?: PartialMessage<QuerySigningInfoResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmos.slashing.v1beta1.QuerySigningInfoResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "val_signing_info", kind: "message", T: ValidatorSigningInfo },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QuerySigningInfoResponse {
    return new QuerySigningInfoResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QuerySigningInfoResponse {
    return new QuerySigningInfoResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QuerySigningInfoResponse {
    return new QuerySigningInfoResponse().fromJsonString(jsonString, options);
  }

  static equals(a: QuerySigningInfoResponse | PlainMessage<QuerySigningInfoResponse> | undefined, b: QuerySigningInfoResponse | PlainMessage<QuerySigningInfoResponse> | undefined): boolean {
    return proto3.util.equals(QuerySigningInfoResponse, a, b);
  }
}

/**
 * QuerySigningInfosRequest is the request type for the Query/SigningInfos RPC
 * method
 *
 * @generated from message cosmos.slashing.v1beta1.QuerySigningInfosRequest
 */
export class QuerySigningInfosRequest extends Message<QuerySigningInfosRequest> {
  /**
   * @generated from field: cosmos.base.query.v1beta1.PageRequest pagination = 1;
   */
  pagination?: PageRequest;

  constructor(data?: PartialMessage<QuerySigningInfosRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmos.slashing.v1beta1.QuerySigningInfosRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "pagination", kind: "message", T: PageRequest },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QuerySigningInfosRequest {
    return new QuerySigningInfosRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QuerySigningInfosRequest {
    return new QuerySigningInfosRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QuerySigningInfosRequest {
    return new QuerySigningInfosRequest().fromJsonString(jsonString, options);
  }

  static equals(a: QuerySigningInfosRequest | PlainMessage<QuerySigningInfosRequest> | undefined, b: QuerySigningInfosRequest | PlainMessage<QuerySigningInfosRequest> | undefined): boolean {
    return proto3.util.equals(QuerySigningInfosRequest, a, b);
  }
}

/**
 * QuerySigningInfosResponse is the response type for the Query/SigningInfos RPC
 * method
 *
 * @generated from message cosmos.slashing.v1beta1.QuerySigningInfosResponse
 */
export class QuerySigningInfosResponse extends Message<QuerySigningInfosResponse> {
  /**
   * info is the signing info of all validators
   *
   * @generated from field: repeated cosmos.slashing.v1beta1.ValidatorSigningInfo info = 1;
   */
  info: ValidatorSigningInfo[] = [];

  /**
   * @generated from field: cosmos.base.query.v1beta1.PageResponse pagination = 2;
   */
  pagination?: PageResponse;

  constructor(data?: PartialMessage<QuerySigningInfosResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmos.slashing.v1beta1.QuerySigningInfosResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "info", kind: "message", T: ValidatorSigningInfo, repeated: true },
    { no: 2, name: "pagination", kind: "message", T: PageResponse },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QuerySigningInfosResponse {
    return new QuerySigningInfosResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QuerySigningInfosResponse {
    return new QuerySigningInfosResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QuerySigningInfosResponse {
    return new QuerySigningInfosResponse().fromJsonString(jsonString, options);
  }

  static equals(a: QuerySigningInfosResponse | PlainMessage<QuerySigningInfosResponse> | undefined, b: QuerySigningInfosResponse | PlainMessage<QuerySigningInfosResponse> | undefined): boolean {
    return proto3.util.equals(QuerySigningInfosResponse, a, b);
  }
}

