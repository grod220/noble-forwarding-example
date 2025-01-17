// Since: cosmos-sdk 0.43

// @generated by protoc-gen-es v1.10.0 with parameter "target=ts"
// @generated from file cosmos/feegrant/v1beta1/query.proto (package cosmos.feegrant.v1beta1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { Grant } from "./feegrant_pb.js";
import { PageRequest, PageResponse } from "../../base/query/v1beta1/pagination_pb.js";

/**
 * QueryAllowanceRequest is the request type for the Query/Allowance RPC method.
 *
 * @generated from message cosmos.feegrant.v1beta1.QueryAllowanceRequest
 */
export class QueryAllowanceRequest extends Message<QueryAllowanceRequest> {
  /**
   * granter is the address of the user granting an allowance of their funds.
   *
   * @generated from field: string granter = 1;
   */
  granter = "";

  /**
   * grantee is the address of the user being granted an allowance of another user's funds.
   *
   * @generated from field: string grantee = 2;
   */
  grantee = "";

  constructor(data?: PartialMessage<QueryAllowanceRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmos.feegrant.v1beta1.QueryAllowanceRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "granter", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "grantee", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryAllowanceRequest {
    return new QueryAllowanceRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryAllowanceRequest {
    return new QueryAllowanceRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryAllowanceRequest {
    return new QueryAllowanceRequest().fromJsonString(jsonString, options);
  }

  static equals(a: QueryAllowanceRequest | PlainMessage<QueryAllowanceRequest> | undefined, b: QueryAllowanceRequest | PlainMessage<QueryAllowanceRequest> | undefined): boolean {
    return proto3.util.equals(QueryAllowanceRequest, a, b);
  }
}

/**
 * QueryAllowanceResponse is the response type for the Query/Allowance RPC method.
 *
 * @generated from message cosmos.feegrant.v1beta1.QueryAllowanceResponse
 */
export class QueryAllowanceResponse extends Message<QueryAllowanceResponse> {
  /**
   * allowance is a allowance granted for grantee by granter.
   *
   * @generated from field: cosmos.feegrant.v1beta1.Grant allowance = 1;
   */
  allowance?: Grant;

  constructor(data?: PartialMessage<QueryAllowanceResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmos.feegrant.v1beta1.QueryAllowanceResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "allowance", kind: "message", T: Grant },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryAllowanceResponse {
    return new QueryAllowanceResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryAllowanceResponse {
    return new QueryAllowanceResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryAllowanceResponse {
    return new QueryAllowanceResponse().fromJsonString(jsonString, options);
  }

  static equals(a: QueryAllowanceResponse | PlainMessage<QueryAllowanceResponse> | undefined, b: QueryAllowanceResponse | PlainMessage<QueryAllowanceResponse> | undefined): boolean {
    return proto3.util.equals(QueryAllowanceResponse, a, b);
  }
}

/**
 * QueryAllowancesRequest is the request type for the Query/Allowances RPC method.
 *
 * @generated from message cosmos.feegrant.v1beta1.QueryAllowancesRequest
 */
export class QueryAllowancesRequest extends Message<QueryAllowancesRequest> {
  /**
   * @generated from field: string grantee = 1;
   */
  grantee = "";

  /**
   * pagination defines an pagination for the request.
   *
   * @generated from field: cosmos.base.query.v1beta1.PageRequest pagination = 2;
   */
  pagination?: PageRequest;

  constructor(data?: PartialMessage<QueryAllowancesRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmos.feegrant.v1beta1.QueryAllowancesRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "grantee", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "pagination", kind: "message", T: PageRequest },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryAllowancesRequest {
    return new QueryAllowancesRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryAllowancesRequest {
    return new QueryAllowancesRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryAllowancesRequest {
    return new QueryAllowancesRequest().fromJsonString(jsonString, options);
  }

  static equals(a: QueryAllowancesRequest | PlainMessage<QueryAllowancesRequest> | undefined, b: QueryAllowancesRequest | PlainMessage<QueryAllowancesRequest> | undefined): boolean {
    return proto3.util.equals(QueryAllowancesRequest, a, b);
  }
}

/**
 * QueryAllowancesResponse is the response type for the Query/Allowances RPC method.
 *
 * @generated from message cosmos.feegrant.v1beta1.QueryAllowancesResponse
 */
export class QueryAllowancesResponse extends Message<QueryAllowancesResponse> {
  /**
   * allowances are allowance's granted for grantee by granter.
   *
   * @generated from field: repeated cosmos.feegrant.v1beta1.Grant allowances = 1;
   */
  allowances: Grant[] = [];

  /**
   * pagination defines an pagination for the response.
   *
   * @generated from field: cosmos.base.query.v1beta1.PageResponse pagination = 2;
   */
  pagination?: PageResponse;

  constructor(data?: PartialMessage<QueryAllowancesResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmos.feegrant.v1beta1.QueryAllowancesResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "allowances", kind: "message", T: Grant, repeated: true },
    { no: 2, name: "pagination", kind: "message", T: PageResponse },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryAllowancesResponse {
    return new QueryAllowancesResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryAllowancesResponse {
    return new QueryAllowancesResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryAllowancesResponse {
    return new QueryAllowancesResponse().fromJsonString(jsonString, options);
  }

  static equals(a: QueryAllowancesResponse | PlainMessage<QueryAllowancesResponse> | undefined, b: QueryAllowancesResponse | PlainMessage<QueryAllowancesResponse> | undefined): boolean {
    return proto3.util.equals(QueryAllowancesResponse, a, b);
  }
}

/**
 * QueryAllowancesByGranterRequest is the request type for the Query/AllowancesByGranter RPC method.
 *
 * Since: cosmos-sdk 0.46
 *
 * @generated from message cosmos.feegrant.v1beta1.QueryAllowancesByGranterRequest
 */
export class QueryAllowancesByGranterRequest extends Message<QueryAllowancesByGranterRequest> {
  /**
   * @generated from field: string granter = 1;
   */
  granter = "";

  /**
   * pagination defines an pagination for the request.
   *
   * @generated from field: cosmos.base.query.v1beta1.PageRequest pagination = 2;
   */
  pagination?: PageRequest;

  constructor(data?: PartialMessage<QueryAllowancesByGranterRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmos.feegrant.v1beta1.QueryAllowancesByGranterRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "granter", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "pagination", kind: "message", T: PageRequest },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryAllowancesByGranterRequest {
    return new QueryAllowancesByGranterRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryAllowancesByGranterRequest {
    return new QueryAllowancesByGranterRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryAllowancesByGranterRequest {
    return new QueryAllowancesByGranterRequest().fromJsonString(jsonString, options);
  }

  static equals(a: QueryAllowancesByGranterRequest | PlainMessage<QueryAllowancesByGranterRequest> | undefined, b: QueryAllowancesByGranterRequest | PlainMessage<QueryAllowancesByGranterRequest> | undefined): boolean {
    return proto3.util.equals(QueryAllowancesByGranterRequest, a, b);
  }
}

/**
 * QueryAllowancesByGranterResponse is the response type for the Query/AllowancesByGranter RPC method.
 *
 * Since: cosmos-sdk 0.46
 *
 * @generated from message cosmos.feegrant.v1beta1.QueryAllowancesByGranterResponse
 */
export class QueryAllowancesByGranterResponse extends Message<QueryAllowancesByGranterResponse> {
  /**
   * allowances that have been issued by the granter.
   *
   * @generated from field: repeated cosmos.feegrant.v1beta1.Grant allowances = 1;
   */
  allowances: Grant[] = [];

  /**
   * pagination defines an pagination for the response.
   *
   * @generated from field: cosmos.base.query.v1beta1.PageResponse pagination = 2;
   */
  pagination?: PageResponse;

  constructor(data?: PartialMessage<QueryAllowancesByGranterResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmos.feegrant.v1beta1.QueryAllowancesByGranterResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "allowances", kind: "message", T: Grant, repeated: true },
    { no: 2, name: "pagination", kind: "message", T: PageResponse },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryAllowancesByGranterResponse {
    return new QueryAllowancesByGranterResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryAllowancesByGranterResponse {
    return new QueryAllowancesByGranterResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryAllowancesByGranterResponse {
    return new QueryAllowancesByGranterResponse().fromJsonString(jsonString, options);
  }

  static equals(a: QueryAllowancesByGranterResponse | PlainMessage<QueryAllowancesByGranterResponse> | undefined, b: QueryAllowancesByGranterResponse | PlainMessage<QueryAllowancesByGranterResponse> | undefined): boolean {
    return proto3.util.equals(QueryAllowancesByGranterResponse, a, b);
  }
}

