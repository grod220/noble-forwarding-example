// @generated by protoc-gen-es v1.10.0 with parameter "target=ts"
// @generated from file cosmos/distribution/v1beta1/query.proto (package cosmos.distribution.v1beta1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, protoInt64 } from "@bufbuild/protobuf";
import { DelegationDelegatorReward, Params, ValidatorAccumulatedCommission, ValidatorOutstandingRewards, ValidatorSlashEvent } from "./distribution_pb.js";
import { DecCoin } from "../../base/v1beta1/coin_pb.js";
import { PageRequest, PageResponse } from "../../base/query/v1beta1/pagination_pb.js";

/**
 * QueryParamsRequest is the request type for the Query/Params RPC method.
 *
 * @generated from message cosmos.distribution.v1beta1.QueryParamsRequest
 */
export class QueryParamsRequest extends Message<QueryParamsRequest> {
  constructor(data?: PartialMessage<QueryParamsRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmos.distribution.v1beta1.QueryParamsRequest";
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
 * @generated from message cosmos.distribution.v1beta1.QueryParamsResponse
 */
export class QueryParamsResponse extends Message<QueryParamsResponse> {
  /**
   * params defines the parameters of the module.
   *
   * @generated from field: cosmos.distribution.v1beta1.Params params = 1;
   */
  params?: Params;

  constructor(data?: PartialMessage<QueryParamsResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmos.distribution.v1beta1.QueryParamsResponse";
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
 * QueryValidatorDistributionInfoRequest is the request type for the Query/ValidatorDistributionInfo RPC method.
 *
 * @generated from message cosmos.distribution.v1beta1.QueryValidatorDistributionInfoRequest
 */
export class QueryValidatorDistributionInfoRequest extends Message<QueryValidatorDistributionInfoRequest> {
  /**
   * validator_address defines the validator address to query for.
   *
   * @generated from field: string validator_address = 1;
   */
  validatorAddress = "";

  constructor(data?: PartialMessage<QueryValidatorDistributionInfoRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmos.distribution.v1beta1.QueryValidatorDistributionInfoRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "validator_address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryValidatorDistributionInfoRequest {
    return new QueryValidatorDistributionInfoRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryValidatorDistributionInfoRequest {
    return new QueryValidatorDistributionInfoRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryValidatorDistributionInfoRequest {
    return new QueryValidatorDistributionInfoRequest().fromJsonString(jsonString, options);
  }

  static equals(a: QueryValidatorDistributionInfoRequest | PlainMessage<QueryValidatorDistributionInfoRequest> | undefined, b: QueryValidatorDistributionInfoRequest | PlainMessage<QueryValidatorDistributionInfoRequest> | undefined): boolean {
    return proto3.util.equals(QueryValidatorDistributionInfoRequest, a, b);
  }
}

/**
 * QueryValidatorDistributionInfoResponse is the response type for the Query/ValidatorDistributionInfo RPC method.
 *
 * @generated from message cosmos.distribution.v1beta1.QueryValidatorDistributionInfoResponse
 */
export class QueryValidatorDistributionInfoResponse extends Message<QueryValidatorDistributionInfoResponse> {
  /**
   * operator_address defines the validator operator address.
   *
   * @generated from field: string operator_address = 1;
   */
  operatorAddress = "";

  /**
   * self_bond_rewards defines the self delegations rewards.
   *
   * @generated from field: repeated cosmos.base.v1beta1.DecCoin self_bond_rewards = 2;
   */
  selfBondRewards: DecCoin[] = [];

  /**
   * commission defines the commission the validator received.
   *
   * @generated from field: repeated cosmos.base.v1beta1.DecCoin commission = 3;
   */
  commission: DecCoin[] = [];

  constructor(data?: PartialMessage<QueryValidatorDistributionInfoResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmos.distribution.v1beta1.QueryValidatorDistributionInfoResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "operator_address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "self_bond_rewards", kind: "message", T: DecCoin, repeated: true },
    { no: 3, name: "commission", kind: "message", T: DecCoin, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryValidatorDistributionInfoResponse {
    return new QueryValidatorDistributionInfoResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryValidatorDistributionInfoResponse {
    return new QueryValidatorDistributionInfoResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryValidatorDistributionInfoResponse {
    return new QueryValidatorDistributionInfoResponse().fromJsonString(jsonString, options);
  }

  static equals(a: QueryValidatorDistributionInfoResponse | PlainMessage<QueryValidatorDistributionInfoResponse> | undefined, b: QueryValidatorDistributionInfoResponse | PlainMessage<QueryValidatorDistributionInfoResponse> | undefined): boolean {
    return proto3.util.equals(QueryValidatorDistributionInfoResponse, a, b);
  }
}

/**
 * QueryValidatorOutstandingRewardsRequest is the request type for the
 * Query/ValidatorOutstandingRewards RPC method.
 *
 * @generated from message cosmos.distribution.v1beta1.QueryValidatorOutstandingRewardsRequest
 */
export class QueryValidatorOutstandingRewardsRequest extends Message<QueryValidatorOutstandingRewardsRequest> {
  /**
   * validator_address defines the validator address to query for.
   *
   * @generated from field: string validator_address = 1;
   */
  validatorAddress = "";

  constructor(data?: PartialMessage<QueryValidatorOutstandingRewardsRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmos.distribution.v1beta1.QueryValidatorOutstandingRewardsRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "validator_address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryValidatorOutstandingRewardsRequest {
    return new QueryValidatorOutstandingRewardsRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryValidatorOutstandingRewardsRequest {
    return new QueryValidatorOutstandingRewardsRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryValidatorOutstandingRewardsRequest {
    return new QueryValidatorOutstandingRewardsRequest().fromJsonString(jsonString, options);
  }

  static equals(a: QueryValidatorOutstandingRewardsRequest | PlainMessage<QueryValidatorOutstandingRewardsRequest> | undefined, b: QueryValidatorOutstandingRewardsRequest | PlainMessage<QueryValidatorOutstandingRewardsRequest> | undefined): boolean {
    return proto3.util.equals(QueryValidatorOutstandingRewardsRequest, a, b);
  }
}

/**
 * QueryValidatorOutstandingRewardsResponse is the response type for the
 * Query/ValidatorOutstandingRewards RPC method.
 *
 * @generated from message cosmos.distribution.v1beta1.QueryValidatorOutstandingRewardsResponse
 */
export class QueryValidatorOutstandingRewardsResponse extends Message<QueryValidatorOutstandingRewardsResponse> {
  /**
   * @generated from field: cosmos.distribution.v1beta1.ValidatorOutstandingRewards rewards = 1;
   */
  rewards?: ValidatorOutstandingRewards;

  constructor(data?: PartialMessage<QueryValidatorOutstandingRewardsResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmos.distribution.v1beta1.QueryValidatorOutstandingRewardsResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "rewards", kind: "message", T: ValidatorOutstandingRewards },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryValidatorOutstandingRewardsResponse {
    return new QueryValidatorOutstandingRewardsResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryValidatorOutstandingRewardsResponse {
    return new QueryValidatorOutstandingRewardsResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryValidatorOutstandingRewardsResponse {
    return new QueryValidatorOutstandingRewardsResponse().fromJsonString(jsonString, options);
  }

  static equals(a: QueryValidatorOutstandingRewardsResponse | PlainMessage<QueryValidatorOutstandingRewardsResponse> | undefined, b: QueryValidatorOutstandingRewardsResponse | PlainMessage<QueryValidatorOutstandingRewardsResponse> | undefined): boolean {
    return proto3.util.equals(QueryValidatorOutstandingRewardsResponse, a, b);
  }
}

/**
 * QueryValidatorCommissionRequest is the request type for the
 * Query/ValidatorCommission RPC method
 *
 * @generated from message cosmos.distribution.v1beta1.QueryValidatorCommissionRequest
 */
export class QueryValidatorCommissionRequest extends Message<QueryValidatorCommissionRequest> {
  /**
   * validator_address defines the validator address to query for.
   *
   * @generated from field: string validator_address = 1;
   */
  validatorAddress = "";

  constructor(data?: PartialMessage<QueryValidatorCommissionRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmos.distribution.v1beta1.QueryValidatorCommissionRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "validator_address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryValidatorCommissionRequest {
    return new QueryValidatorCommissionRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryValidatorCommissionRequest {
    return new QueryValidatorCommissionRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryValidatorCommissionRequest {
    return new QueryValidatorCommissionRequest().fromJsonString(jsonString, options);
  }

  static equals(a: QueryValidatorCommissionRequest | PlainMessage<QueryValidatorCommissionRequest> | undefined, b: QueryValidatorCommissionRequest | PlainMessage<QueryValidatorCommissionRequest> | undefined): boolean {
    return proto3.util.equals(QueryValidatorCommissionRequest, a, b);
  }
}

/**
 * QueryValidatorCommissionResponse is the response type for the
 * Query/ValidatorCommission RPC method
 *
 * @generated from message cosmos.distribution.v1beta1.QueryValidatorCommissionResponse
 */
export class QueryValidatorCommissionResponse extends Message<QueryValidatorCommissionResponse> {
  /**
   * commission defines the commission the validator received.
   *
   * @generated from field: cosmos.distribution.v1beta1.ValidatorAccumulatedCommission commission = 1;
   */
  commission?: ValidatorAccumulatedCommission;

  constructor(data?: PartialMessage<QueryValidatorCommissionResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmos.distribution.v1beta1.QueryValidatorCommissionResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "commission", kind: "message", T: ValidatorAccumulatedCommission },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryValidatorCommissionResponse {
    return new QueryValidatorCommissionResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryValidatorCommissionResponse {
    return new QueryValidatorCommissionResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryValidatorCommissionResponse {
    return new QueryValidatorCommissionResponse().fromJsonString(jsonString, options);
  }

  static equals(a: QueryValidatorCommissionResponse | PlainMessage<QueryValidatorCommissionResponse> | undefined, b: QueryValidatorCommissionResponse | PlainMessage<QueryValidatorCommissionResponse> | undefined): boolean {
    return proto3.util.equals(QueryValidatorCommissionResponse, a, b);
  }
}

/**
 * QueryValidatorSlashesRequest is the request type for the
 * Query/ValidatorSlashes RPC method
 *
 * @generated from message cosmos.distribution.v1beta1.QueryValidatorSlashesRequest
 */
export class QueryValidatorSlashesRequest extends Message<QueryValidatorSlashesRequest> {
  /**
   * validator_address defines the validator address to query for.
   *
   * @generated from field: string validator_address = 1;
   */
  validatorAddress = "";

  /**
   * starting_height defines the optional starting height to query the slashes.
   *
   * @generated from field: uint64 starting_height = 2;
   */
  startingHeight = protoInt64.zero;

  /**
   * starting_height defines the optional ending height to query the slashes.
   *
   * @generated from field: uint64 ending_height = 3;
   */
  endingHeight = protoInt64.zero;

  /**
   * pagination defines an optional pagination for the request.
   *
   * @generated from field: cosmos.base.query.v1beta1.PageRequest pagination = 4;
   */
  pagination?: PageRequest;

  constructor(data?: PartialMessage<QueryValidatorSlashesRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmos.distribution.v1beta1.QueryValidatorSlashesRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "validator_address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "starting_height", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 3, name: "ending_height", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 4, name: "pagination", kind: "message", T: PageRequest },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryValidatorSlashesRequest {
    return new QueryValidatorSlashesRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryValidatorSlashesRequest {
    return new QueryValidatorSlashesRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryValidatorSlashesRequest {
    return new QueryValidatorSlashesRequest().fromJsonString(jsonString, options);
  }

  static equals(a: QueryValidatorSlashesRequest | PlainMessage<QueryValidatorSlashesRequest> | undefined, b: QueryValidatorSlashesRequest | PlainMessage<QueryValidatorSlashesRequest> | undefined): boolean {
    return proto3.util.equals(QueryValidatorSlashesRequest, a, b);
  }
}

/**
 * QueryValidatorSlashesResponse is the response type for the
 * Query/ValidatorSlashes RPC method.
 *
 * @generated from message cosmos.distribution.v1beta1.QueryValidatorSlashesResponse
 */
export class QueryValidatorSlashesResponse extends Message<QueryValidatorSlashesResponse> {
  /**
   * slashes defines the slashes the validator received.
   *
   * @generated from field: repeated cosmos.distribution.v1beta1.ValidatorSlashEvent slashes = 1;
   */
  slashes: ValidatorSlashEvent[] = [];

  /**
   * pagination defines the pagination in the response.
   *
   * @generated from field: cosmos.base.query.v1beta1.PageResponse pagination = 2;
   */
  pagination?: PageResponse;

  constructor(data?: PartialMessage<QueryValidatorSlashesResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmos.distribution.v1beta1.QueryValidatorSlashesResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "slashes", kind: "message", T: ValidatorSlashEvent, repeated: true },
    { no: 2, name: "pagination", kind: "message", T: PageResponse },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryValidatorSlashesResponse {
    return new QueryValidatorSlashesResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryValidatorSlashesResponse {
    return new QueryValidatorSlashesResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryValidatorSlashesResponse {
    return new QueryValidatorSlashesResponse().fromJsonString(jsonString, options);
  }

  static equals(a: QueryValidatorSlashesResponse | PlainMessage<QueryValidatorSlashesResponse> | undefined, b: QueryValidatorSlashesResponse | PlainMessage<QueryValidatorSlashesResponse> | undefined): boolean {
    return proto3.util.equals(QueryValidatorSlashesResponse, a, b);
  }
}

/**
 * QueryDelegationRewardsRequest is the request type for the
 * Query/DelegationRewards RPC method.
 *
 * @generated from message cosmos.distribution.v1beta1.QueryDelegationRewardsRequest
 */
export class QueryDelegationRewardsRequest extends Message<QueryDelegationRewardsRequest> {
  /**
   * delegator_address defines the delegator address to query for.
   *
   * @generated from field: string delegator_address = 1;
   */
  delegatorAddress = "";

  /**
   * validator_address defines the validator address to query for.
   *
   * @generated from field: string validator_address = 2;
   */
  validatorAddress = "";

  constructor(data?: PartialMessage<QueryDelegationRewardsRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmos.distribution.v1beta1.QueryDelegationRewardsRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "delegator_address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "validator_address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryDelegationRewardsRequest {
    return new QueryDelegationRewardsRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryDelegationRewardsRequest {
    return new QueryDelegationRewardsRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryDelegationRewardsRequest {
    return new QueryDelegationRewardsRequest().fromJsonString(jsonString, options);
  }

  static equals(a: QueryDelegationRewardsRequest | PlainMessage<QueryDelegationRewardsRequest> | undefined, b: QueryDelegationRewardsRequest | PlainMessage<QueryDelegationRewardsRequest> | undefined): boolean {
    return proto3.util.equals(QueryDelegationRewardsRequest, a, b);
  }
}

/**
 * QueryDelegationRewardsResponse is the response type for the
 * Query/DelegationRewards RPC method.
 *
 * @generated from message cosmos.distribution.v1beta1.QueryDelegationRewardsResponse
 */
export class QueryDelegationRewardsResponse extends Message<QueryDelegationRewardsResponse> {
  /**
   * rewards defines the rewards accrued by a delegation.
   *
   * @generated from field: repeated cosmos.base.v1beta1.DecCoin rewards = 1;
   */
  rewards: DecCoin[] = [];

  constructor(data?: PartialMessage<QueryDelegationRewardsResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmos.distribution.v1beta1.QueryDelegationRewardsResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "rewards", kind: "message", T: DecCoin, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryDelegationRewardsResponse {
    return new QueryDelegationRewardsResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryDelegationRewardsResponse {
    return new QueryDelegationRewardsResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryDelegationRewardsResponse {
    return new QueryDelegationRewardsResponse().fromJsonString(jsonString, options);
  }

  static equals(a: QueryDelegationRewardsResponse | PlainMessage<QueryDelegationRewardsResponse> | undefined, b: QueryDelegationRewardsResponse | PlainMessage<QueryDelegationRewardsResponse> | undefined): boolean {
    return proto3.util.equals(QueryDelegationRewardsResponse, a, b);
  }
}

/**
 * QueryDelegationTotalRewardsRequest is the request type for the
 * Query/DelegationTotalRewards RPC method.
 *
 * @generated from message cosmos.distribution.v1beta1.QueryDelegationTotalRewardsRequest
 */
export class QueryDelegationTotalRewardsRequest extends Message<QueryDelegationTotalRewardsRequest> {
  /**
   * delegator_address defines the delegator address to query for.
   *
   * @generated from field: string delegator_address = 1;
   */
  delegatorAddress = "";

  constructor(data?: PartialMessage<QueryDelegationTotalRewardsRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmos.distribution.v1beta1.QueryDelegationTotalRewardsRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "delegator_address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryDelegationTotalRewardsRequest {
    return new QueryDelegationTotalRewardsRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryDelegationTotalRewardsRequest {
    return new QueryDelegationTotalRewardsRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryDelegationTotalRewardsRequest {
    return new QueryDelegationTotalRewardsRequest().fromJsonString(jsonString, options);
  }

  static equals(a: QueryDelegationTotalRewardsRequest | PlainMessage<QueryDelegationTotalRewardsRequest> | undefined, b: QueryDelegationTotalRewardsRequest | PlainMessage<QueryDelegationTotalRewardsRequest> | undefined): boolean {
    return proto3.util.equals(QueryDelegationTotalRewardsRequest, a, b);
  }
}

/**
 * QueryDelegationTotalRewardsResponse is the response type for the
 * Query/DelegationTotalRewards RPC method.
 *
 * @generated from message cosmos.distribution.v1beta1.QueryDelegationTotalRewardsResponse
 */
export class QueryDelegationTotalRewardsResponse extends Message<QueryDelegationTotalRewardsResponse> {
  /**
   * rewards defines all the rewards accrued by a delegator.
   *
   * @generated from field: repeated cosmos.distribution.v1beta1.DelegationDelegatorReward rewards = 1;
   */
  rewards: DelegationDelegatorReward[] = [];

  /**
   * total defines the sum of all the rewards.
   *
   * @generated from field: repeated cosmos.base.v1beta1.DecCoin total = 2;
   */
  total: DecCoin[] = [];

  constructor(data?: PartialMessage<QueryDelegationTotalRewardsResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmos.distribution.v1beta1.QueryDelegationTotalRewardsResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "rewards", kind: "message", T: DelegationDelegatorReward, repeated: true },
    { no: 2, name: "total", kind: "message", T: DecCoin, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryDelegationTotalRewardsResponse {
    return new QueryDelegationTotalRewardsResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryDelegationTotalRewardsResponse {
    return new QueryDelegationTotalRewardsResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryDelegationTotalRewardsResponse {
    return new QueryDelegationTotalRewardsResponse().fromJsonString(jsonString, options);
  }

  static equals(a: QueryDelegationTotalRewardsResponse | PlainMessage<QueryDelegationTotalRewardsResponse> | undefined, b: QueryDelegationTotalRewardsResponse | PlainMessage<QueryDelegationTotalRewardsResponse> | undefined): boolean {
    return proto3.util.equals(QueryDelegationTotalRewardsResponse, a, b);
  }
}

/**
 * QueryDelegatorValidatorsRequest is the request type for the
 * Query/DelegatorValidators RPC method.
 *
 * @generated from message cosmos.distribution.v1beta1.QueryDelegatorValidatorsRequest
 */
export class QueryDelegatorValidatorsRequest extends Message<QueryDelegatorValidatorsRequest> {
  /**
   * delegator_address defines the delegator address to query for.
   *
   * @generated from field: string delegator_address = 1;
   */
  delegatorAddress = "";

  constructor(data?: PartialMessage<QueryDelegatorValidatorsRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmos.distribution.v1beta1.QueryDelegatorValidatorsRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "delegator_address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryDelegatorValidatorsRequest {
    return new QueryDelegatorValidatorsRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryDelegatorValidatorsRequest {
    return new QueryDelegatorValidatorsRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryDelegatorValidatorsRequest {
    return new QueryDelegatorValidatorsRequest().fromJsonString(jsonString, options);
  }

  static equals(a: QueryDelegatorValidatorsRequest | PlainMessage<QueryDelegatorValidatorsRequest> | undefined, b: QueryDelegatorValidatorsRequest | PlainMessage<QueryDelegatorValidatorsRequest> | undefined): boolean {
    return proto3.util.equals(QueryDelegatorValidatorsRequest, a, b);
  }
}

/**
 * QueryDelegatorValidatorsResponse is the response type for the
 * Query/DelegatorValidators RPC method.
 *
 * @generated from message cosmos.distribution.v1beta1.QueryDelegatorValidatorsResponse
 */
export class QueryDelegatorValidatorsResponse extends Message<QueryDelegatorValidatorsResponse> {
  /**
   * validators defines the validators a delegator is delegating for.
   *
   * @generated from field: repeated string validators = 1;
   */
  validators: string[] = [];

  constructor(data?: PartialMessage<QueryDelegatorValidatorsResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmos.distribution.v1beta1.QueryDelegatorValidatorsResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "validators", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryDelegatorValidatorsResponse {
    return new QueryDelegatorValidatorsResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryDelegatorValidatorsResponse {
    return new QueryDelegatorValidatorsResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryDelegatorValidatorsResponse {
    return new QueryDelegatorValidatorsResponse().fromJsonString(jsonString, options);
  }

  static equals(a: QueryDelegatorValidatorsResponse | PlainMessage<QueryDelegatorValidatorsResponse> | undefined, b: QueryDelegatorValidatorsResponse | PlainMessage<QueryDelegatorValidatorsResponse> | undefined): boolean {
    return proto3.util.equals(QueryDelegatorValidatorsResponse, a, b);
  }
}

/**
 * QueryDelegatorWithdrawAddressRequest is the request type for the
 * Query/DelegatorWithdrawAddress RPC method.
 *
 * @generated from message cosmos.distribution.v1beta1.QueryDelegatorWithdrawAddressRequest
 */
export class QueryDelegatorWithdrawAddressRequest extends Message<QueryDelegatorWithdrawAddressRequest> {
  /**
   * delegator_address defines the delegator address to query for.
   *
   * @generated from field: string delegator_address = 1;
   */
  delegatorAddress = "";

  constructor(data?: PartialMessage<QueryDelegatorWithdrawAddressRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmos.distribution.v1beta1.QueryDelegatorWithdrawAddressRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "delegator_address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryDelegatorWithdrawAddressRequest {
    return new QueryDelegatorWithdrawAddressRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryDelegatorWithdrawAddressRequest {
    return new QueryDelegatorWithdrawAddressRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryDelegatorWithdrawAddressRequest {
    return new QueryDelegatorWithdrawAddressRequest().fromJsonString(jsonString, options);
  }

  static equals(a: QueryDelegatorWithdrawAddressRequest | PlainMessage<QueryDelegatorWithdrawAddressRequest> | undefined, b: QueryDelegatorWithdrawAddressRequest | PlainMessage<QueryDelegatorWithdrawAddressRequest> | undefined): boolean {
    return proto3.util.equals(QueryDelegatorWithdrawAddressRequest, a, b);
  }
}

/**
 * QueryDelegatorWithdrawAddressResponse is the response type for the
 * Query/DelegatorWithdrawAddress RPC method.
 *
 * @generated from message cosmos.distribution.v1beta1.QueryDelegatorWithdrawAddressResponse
 */
export class QueryDelegatorWithdrawAddressResponse extends Message<QueryDelegatorWithdrawAddressResponse> {
  /**
   * withdraw_address defines the delegator address to query for.
   *
   * @generated from field: string withdraw_address = 1;
   */
  withdrawAddress = "";

  constructor(data?: PartialMessage<QueryDelegatorWithdrawAddressResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmos.distribution.v1beta1.QueryDelegatorWithdrawAddressResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "withdraw_address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryDelegatorWithdrawAddressResponse {
    return new QueryDelegatorWithdrawAddressResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryDelegatorWithdrawAddressResponse {
    return new QueryDelegatorWithdrawAddressResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryDelegatorWithdrawAddressResponse {
    return new QueryDelegatorWithdrawAddressResponse().fromJsonString(jsonString, options);
  }

  static equals(a: QueryDelegatorWithdrawAddressResponse | PlainMessage<QueryDelegatorWithdrawAddressResponse> | undefined, b: QueryDelegatorWithdrawAddressResponse | PlainMessage<QueryDelegatorWithdrawAddressResponse> | undefined): boolean {
    return proto3.util.equals(QueryDelegatorWithdrawAddressResponse, a, b);
  }
}

/**
 * QueryCommunityPoolRequest is the request type for the Query/CommunityPool RPC
 * method.
 *
 * @generated from message cosmos.distribution.v1beta1.QueryCommunityPoolRequest
 */
export class QueryCommunityPoolRequest extends Message<QueryCommunityPoolRequest> {
  constructor(data?: PartialMessage<QueryCommunityPoolRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmos.distribution.v1beta1.QueryCommunityPoolRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryCommunityPoolRequest {
    return new QueryCommunityPoolRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryCommunityPoolRequest {
    return new QueryCommunityPoolRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryCommunityPoolRequest {
    return new QueryCommunityPoolRequest().fromJsonString(jsonString, options);
  }

  static equals(a: QueryCommunityPoolRequest | PlainMessage<QueryCommunityPoolRequest> | undefined, b: QueryCommunityPoolRequest | PlainMessage<QueryCommunityPoolRequest> | undefined): boolean {
    return proto3.util.equals(QueryCommunityPoolRequest, a, b);
  }
}

/**
 * QueryCommunityPoolResponse is the response type for the Query/CommunityPool
 * RPC method.
 *
 * @generated from message cosmos.distribution.v1beta1.QueryCommunityPoolResponse
 */
export class QueryCommunityPoolResponse extends Message<QueryCommunityPoolResponse> {
  /**
   * pool defines community pool's coins.
   *
   * @generated from field: repeated cosmos.base.v1beta1.DecCoin pool = 1;
   */
  pool: DecCoin[] = [];

  constructor(data?: PartialMessage<QueryCommunityPoolResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmos.distribution.v1beta1.QueryCommunityPoolResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "pool", kind: "message", T: DecCoin, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryCommunityPoolResponse {
    return new QueryCommunityPoolResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryCommunityPoolResponse {
    return new QueryCommunityPoolResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryCommunityPoolResponse {
    return new QueryCommunityPoolResponse().fromJsonString(jsonString, options);
  }

  static equals(a: QueryCommunityPoolResponse | PlainMessage<QueryCommunityPoolResponse> | undefined, b: QueryCommunityPoolResponse | PlainMessage<QueryCommunityPoolResponse> | undefined): boolean {
    return proto3.util.equals(QueryCommunityPoolResponse, a, b);
  }
}

