// @generated by protoc-gen-es v1.10.0 with parameter "target=ts"
// @generated from file cosmos/mint/v1beta1/query.proto (package cosmos.mint.v1beta1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { Params } from "./mint_pb.js";

/**
 * QueryParamsRequest is the request type for the Query/Params RPC method.
 *
 * @generated from message cosmos.mint.v1beta1.QueryParamsRequest
 */
export class QueryParamsRequest extends Message<QueryParamsRequest> {
  constructor(data?: PartialMessage<QueryParamsRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmos.mint.v1beta1.QueryParamsRequest";
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
 * QueryParamsResponse is the response type for the Query/Params RPC method.
 *
 * @generated from message cosmos.mint.v1beta1.QueryParamsResponse
 */
export class QueryParamsResponse extends Message<QueryParamsResponse> {
  /**
   * params defines the parameters of the module.
   *
   * @generated from field: cosmos.mint.v1beta1.Params params = 1;
   */
  params?: Params;

  constructor(data?: PartialMessage<QueryParamsResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmos.mint.v1beta1.QueryParamsResponse";
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
 * QueryInflationRequest is the request type for the Query/Inflation RPC method.
 *
 * @generated from message cosmos.mint.v1beta1.QueryInflationRequest
 */
export class QueryInflationRequest extends Message<QueryInflationRequest> {
  constructor(data?: PartialMessage<QueryInflationRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmos.mint.v1beta1.QueryInflationRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryInflationRequest {
    return new QueryInflationRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryInflationRequest {
    return new QueryInflationRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryInflationRequest {
    return new QueryInflationRequest().fromJsonString(jsonString, options);
  }

  static equals(a: QueryInflationRequest | PlainMessage<QueryInflationRequest> | undefined, b: QueryInflationRequest | PlainMessage<QueryInflationRequest> | undefined): boolean {
    return proto3.util.equals(QueryInflationRequest, a, b);
  }
}

/**
 * QueryInflationResponse is the response type for the Query/Inflation RPC
 * method.
 *
 * @generated from message cosmos.mint.v1beta1.QueryInflationResponse
 */
export class QueryInflationResponse extends Message<QueryInflationResponse> {
  /**
   * inflation is the current minting inflation value.
   *
   * @generated from field: bytes inflation = 1;
   */
  inflation = new Uint8Array(0);

  constructor(data?: PartialMessage<QueryInflationResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmos.mint.v1beta1.QueryInflationResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "inflation", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryInflationResponse {
    return new QueryInflationResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryInflationResponse {
    return new QueryInflationResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryInflationResponse {
    return new QueryInflationResponse().fromJsonString(jsonString, options);
  }

  static equals(a: QueryInflationResponse | PlainMessage<QueryInflationResponse> | undefined, b: QueryInflationResponse | PlainMessage<QueryInflationResponse> | undefined): boolean {
    return proto3.util.equals(QueryInflationResponse, a, b);
  }
}

/**
 * QueryAnnualProvisionsRequest is the request type for the
 * Query/AnnualProvisions RPC method.
 *
 * @generated from message cosmos.mint.v1beta1.QueryAnnualProvisionsRequest
 */
export class QueryAnnualProvisionsRequest extends Message<QueryAnnualProvisionsRequest> {
  constructor(data?: PartialMessage<QueryAnnualProvisionsRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmos.mint.v1beta1.QueryAnnualProvisionsRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryAnnualProvisionsRequest {
    return new QueryAnnualProvisionsRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryAnnualProvisionsRequest {
    return new QueryAnnualProvisionsRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryAnnualProvisionsRequest {
    return new QueryAnnualProvisionsRequest().fromJsonString(jsonString, options);
  }

  static equals(a: QueryAnnualProvisionsRequest | PlainMessage<QueryAnnualProvisionsRequest> | undefined, b: QueryAnnualProvisionsRequest | PlainMessage<QueryAnnualProvisionsRequest> | undefined): boolean {
    return proto3.util.equals(QueryAnnualProvisionsRequest, a, b);
  }
}

/**
 * QueryAnnualProvisionsResponse is the response type for the
 * Query/AnnualProvisions RPC method.
 *
 * @generated from message cosmos.mint.v1beta1.QueryAnnualProvisionsResponse
 */
export class QueryAnnualProvisionsResponse extends Message<QueryAnnualProvisionsResponse> {
  /**
   * annual_provisions is the current minting annual provisions value.
   *
   * @generated from field: bytes annual_provisions = 1;
   */
  annualProvisions = new Uint8Array(0);

  constructor(data?: PartialMessage<QueryAnnualProvisionsResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmos.mint.v1beta1.QueryAnnualProvisionsResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "annual_provisions", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryAnnualProvisionsResponse {
    return new QueryAnnualProvisionsResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryAnnualProvisionsResponse {
    return new QueryAnnualProvisionsResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryAnnualProvisionsResponse {
    return new QueryAnnualProvisionsResponse().fromJsonString(jsonString, options);
  }

  static equals(a: QueryAnnualProvisionsResponse | PlainMessage<QueryAnnualProvisionsResponse> | undefined, b: QueryAnnualProvisionsResponse | PlainMessage<QueryAnnualProvisionsResponse> | undefined): boolean {
    return proto3.util.equals(QueryAnnualProvisionsResponse, a, b);
  }
}

