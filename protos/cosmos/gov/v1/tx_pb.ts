// Since: cosmos-sdk 0.46

// @generated by protoc-gen-es v1.10.0 with parameter "target=ts"
// @generated from file cosmos/gov/v1/tx.proto (package cosmos.gov.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Any, Message, proto3, protoInt64, Timestamp } from "@bufbuild/protobuf";
import { Coin } from "../../base/v1beta1/coin_pb.js";
import { Params, VoteOption, WeightedVoteOption } from "./gov_pb.js";

/**
 * MsgSubmitProposal defines an sdk.Msg type that supports submitting arbitrary
 * proposal Content.
 *
 * @generated from message cosmos.gov.v1.MsgSubmitProposal
 */
export class MsgSubmitProposal extends Message<MsgSubmitProposal> {
  /**
   * messages are the arbitrary messages to be executed if proposal passes.
   *
   * @generated from field: repeated google.protobuf.Any messages = 1;
   */
  messages: Any[] = [];

  /**
   * initial_deposit is the deposit value that must be paid at proposal submission.
   *
   * @generated from field: repeated cosmos.base.v1beta1.Coin initial_deposit = 2;
   */
  initialDeposit: Coin[] = [];

  /**
   * proposer is the account address of the proposer.
   *
   * @generated from field: string proposer = 3;
   */
  proposer = "";

  /**
   * metadata is any arbitrary metadata attached to the proposal.
   *
   * @generated from field: string metadata = 4;
   */
  metadata = "";

  /**
   * title is the title of the proposal.
   *
   * Since: cosmos-sdk 0.47
   *
   * @generated from field: string title = 5;
   */
  title = "";

  /**
   * summary is the summary of the proposal
   *
   * Since: cosmos-sdk 0.47
   *
   * @generated from field: string summary = 6;
   */
  summary = "";

  /**
   * expedided defines if the proposal is expedited or not
   *
   * Since: cosmos-sdk 0.48
   *
   * @generated from field: bool expedited = 7;
   */
  expedited = false;

  constructor(data?: PartialMessage<MsgSubmitProposal>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmos.gov.v1.MsgSubmitProposal";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "messages", kind: "message", T: Any, repeated: true },
    { no: 2, name: "initial_deposit", kind: "message", T: Coin, repeated: true },
    { no: 3, name: "proposer", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "metadata", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "title", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "summary", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 7, name: "expedited", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgSubmitProposal {
    return new MsgSubmitProposal().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgSubmitProposal {
    return new MsgSubmitProposal().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgSubmitProposal {
    return new MsgSubmitProposal().fromJsonString(jsonString, options);
  }

  static equals(a: MsgSubmitProposal | PlainMessage<MsgSubmitProposal> | undefined, b: MsgSubmitProposal | PlainMessage<MsgSubmitProposal> | undefined): boolean {
    return proto3.util.equals(MsgSubmitProposal, a, b);
  }
}

/**
 * MsgSubmitProposalResponse defines the Msg/SubmitProposal response type.
 *
 * @generated from message cosmos.gov.v1.MsgSubmitProposalResponse
 */
export class MsgSubmitProposalResponse extends Message<MsgSubmitProposalResponse> {
  /**
   * proposal_id defines the unique id of the proposal.
   *
   * @generated from field: uint64 proposal_id = 1;
   */
  proposalId = protoInt64.zero;

  constructor(data?: PartialMessage<MsgSubmitProposalResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmos.gov.v1.MsgSubmitProposalResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "proposal_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgSubmitProposalResponse {
    return new MsgSubmitProposalResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgSubmitProposalResponse {
    return new MsgSubmitProposalResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgSubmitProposalResponse {
    return new MsgSubmitProposalResponse().fromJsonString(jsonString, options);
  }

  static equals(a: MsgSubmitProposalResponse | PlainMessage<MsgSubmitProposalResponse> | undefined, b: MsgSubmitProposalResponse | PlainMessage<MsgSubmitProposalResponse> | undefined): boolean {
    return proto3.util.equals(MsgSubmitProposalResponse, a, b);
  }
}

/**
 * MsgExecLegacyContent is used to wrap the legacy content field into a message.
 * This ensures backwards compatibility with v1beta1.MsgSubmitProposal.
 *
 * @generated from message cosmos.gov.v1.MsgExecLegacyContent
 */
export class MsgExecLegacyContent extends Message<MsgExecLegacyContent> {
  /**
   * content is the proposal's content.
   *
   * @generated from field: google.protobuf.Any content = 1;
   */
  content?: Any;

  /**
   * authority must be the gov module address.
   *
   * @generated from field: string authority = 2;
   */
  authority = "";

  constructor(data?: PartialMessage<MsgExecLegacyContent>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmos.gov.v1.MsgExecLegacyContent";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "content", kind: "message", T: Any },
    { no: 2, name: "authority", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgExecLegacyContent {
    return new MsgExecLegacyContent().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgExecLegacyContent {
    return new MsgExecLegacyContent().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgExecLegacyContent {
    return new MsgExecLegacyContent().fromJsonString(jsonString, options);
  }

  static equals(a: MsgExecLegacyContent | PlainMessage<MsgExecLegacyContent> | undefined, b: MsgExecLegacyContent | PlainMessage<MsgExecLegacyContent> | undefined): boolean {
    return proto3.util.equals(MsgExecLegacyContent, a, b);
  }
}

/**
 * MsgExecLegacyContentResponse defines the Msg/ExecLegacyContent response type.
 *
 * @generated from message cosmos.gov.v1.MsgExecLegacyContentResponse
 */
export class MsgExecLegacyContentResponse extends Message<MsgExecLegacyContentResponse> {
  constructor(data?: PartialMessage<MsgExecLegacyContentResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmos.gov.v1.MsgExecLegacyContentResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgExecLegacyContentResponse {
    return new MsgExecLegacyContentResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgExecLegacyContentResponse {
    return new MsgExecLegacyContentResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgExecLegacyContentResponse {
    return new MsgExecLegacyContentResponse().fromJsonString(jsonString, options);
  }

  static equals(a: MsgExecLegacyContentResponse | PlainMessage<MsgExecLegacyContentResponse> | undefined, b: MsgExecLegacyContentResponse | PlainMessage<MsgExecLegacyContentResponse> | undefined): boolean {
    return proto3.util.equals(MsgExecLegacyContentResponse, a, b);
  }
}

/**
 * MsgVote defines a message to cast a vote.
 *
 * @generated from message cosmos.gov.v1.MsgVote
 */
export class MsgVote extends Message<MsgVote> {
  /**
   * proposal_id defines the unique id of the proposal.
   *
   * @generated from field: uint64 proposal_id = 1;
   */
  proposalId = protoInt64.zero;

  /**
   * voter is the voter address for the proposal.
   *
   * @generated from field: string voter = 2;
   */
  voter = "";

  /**
   * option defines the vote option.
   *
   * @generated from field: cosmos.gov.v1.VoteOption option = 3;
   */
  option = VoteOption.UNSPECIFIED;

  /**
   * metadata is any arbitrary metadata attached to the Vote.
   *
   * @generated from field: string metadata = 4;
   */
  metadata = "";

  constructor(data?: PartialMessage<MsgVote>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmos.gov.v1.MsgVote";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "proposal_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: "voter", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "option", kind: "enum", T: proto3.getEnumType(VoteOption) },
    { no: 4, name: "metadata", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgVote {
    return new MsgVote().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgVote {
    return new MsgVote().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgVote {
    return new MsgVote().fromJsonString(jsonString, options);
  }

  static equals(a: MsgVote | PlainMessage<MsgVote> | undefined, b: MsgVote | PlainMessage<MsgVote> | undefined): boolean {
    return proto3.util.equals(MsgVote, a, b);
  }
}

/**
 * MsgVoteResponse defines the Msg/Vote response type.
 *
 * @generated from message cosmos.gov.v1.MsgVoteResponse
 */
export class MsgVoteResponse extends Message<MsgVoteResponse> {
  constructor(data?: PartialMessage<MsgVoteResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmos.gov.v1.MsgVoteResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgVoteResponse {
    return new MsgVoteResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgVoteResponse {
    return new MsgVoteResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgVoteResponse {
    return new MsgVoteResponse().fromJsonString(jsonString, options);
  }

  static equals(a: MsgVoteResponse | PlainMessage<MsgVoteResponse> | undefined, b: MsgVoteResponse | PlainMessage<MsgVoteResponse> | undefined): boolean {
    return proto3.util.equals(MsgVoteResponse, a, b);
  }
}

/**
 * MsgVoteWeighted defines a message to cast a vote.
 *
 * @generated from message cosmos.gov.v1.MsgVoteWeighted
 */
export class MsgVoteWeighted extends Message<MsgVoteWeighted> {
  /**
   * proposal_id defines the unique id of the proposal.
   *
   * @generated from field: uint64 proposal_id = 1;
   */
  proposalId = protoInt64.zero;

  /**
   * voter is the voter address for the proposal.
   *
   * @generated from field: string voter = 2;
   */
  voter = "";

  /**
   * options defines the weighted vote options.
   *
   * @generated from field: repeated cosmos.gov.v1.WeightedVoteOption options = 3;
   */
  options: WeightedVoteOption[] = [];

  /**
   * metadata is any arbitrary metadata attached to the VoteWeighted.
   *
   * @generated from field: string metadata = 4;
   */
  metadata = "";

  constructor(data?: PartialMessage<MsgVoteWeighted>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmos.gov.v1.MsgVoteWeighted";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "proposal_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: "voter", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "options", kind: "message", T: WeightedVoteOption, repeated: true },
    { no: 4, name: "metadata", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgVoteWeighted {
    return new MsgVoteWeighted().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgVoteWeighted {
    return new MsgVoteWeighted().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgVoteWeighted {
    return new MsgVoteWeighted().fromJsonString(jsonString, options);
  }

  static equals(a: MsgVoteWeighted | PlainMessage<MsgVoteWeighted> | undefined, b: MsgVoteWeighted | PlainMessage<MsgVoteWeighted> | undefined): boolean {
    return proto3.util.equals(MsgVoteWeighted, a, b);
  }
}

/**
 * MsgVoteWeightedResponse defines the Msg/VoteWeighted response type.
 *
 * @generated from message cosmos.gov.v1.MsgVoteWeightedResponse
 */
export class MsgVoteWeightedResponse extends Message<MsgVoteWeightedResponse> {
  constructor(data?: PartialMessage<MsgVoteWeightedResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmos.gov.v1.MsgVoteWeightedResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgVoteWeightedResponse {
    return new MsgVoteWeightedResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgVoteWeightedResponse {
    return new MsgVoteWeightedResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgVoteWeightedResponse {
    return new MsgVoteWeightedResponse().fromJsonString(jsonString, options);
  }

  static equals(a: MsgVoteWeightedResponse | PlainMessage<MsgVoteWeightedResponse> | undefined, b: MsgVoteWeightedResponse | PlainMessage<MsgVoteWeightedResponse> | undefined): boolean {
    return proto3.util.equals(MsgVoteWeightedResponse, a, b);
  }
}

/**
 * MsgDeposit defines a message to submit a deposit to an existing proposal.
 *
 * @generated from message cosmos.gov.v1.MsgDeposit
 */
export class MsgDeposit extends Message<MsgDeposit> {
  /**
   * proposal_id defines the unique id of the proposal.
   *
   * @generated from field: uint64 proposal_id = 1;
   */
  proposalId = protoInt64.zero;

  /**
   * depositor defines the deposit addresses from the proposals.
   *
   * @generated from field: string depositor = 2;
   */
  depositor = "";

  /**
   * amount to be deposited by depositor.
   *
   * @generated from field: repeated cosmos.base.v1beta1.Coin amount = 3;
   */
  amount: Coin[] = [];

  constructor(data?: PartialMessage<MsgDeposit>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmos.gov.v1.MsgDeposit";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "proposal_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: "depositor", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "amount", kind: "message", T: Coin, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgDeposit {
    return new MsgDeposit().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgDeposit {
    return new MsgDeposit().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgDeposit {
    return new MsgDeposit().fromJsonString(jsonString, options);
  }

  static equals(a: MsgDeposit | PlainMessage<MsgDeposit> | undefined, b: MsgDeposit | PlainMessage<MsgDeposit> | undefined): boolean {
    return proto3.util.equals(MsgDeposit, a, b);
  }
}

/**
 * MsgDepositResponse defines the Msg/Deposit response type.
 *
 * @generated from message cosmos.gov.v1.MsgDepositResponse
 */
export class MsgDepositResponse extends Message<MsgDepositResponse> {
  constructor(data?: PartialMessage<MsgDepositResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmos.gov.v1.MsgDepositResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgDepositResponse {
    return new MsgDepositResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgDepositResponse {
    return new MsgDepositResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgDepositResponse {
    return new MsgDepositResponse().fromJsonString(jsonString, options);
  }

  static equals(a: MsgDepositResponse | PlainMessage<MsgDepositResponse> | undefined, b: MsgDepositResponse | PlainMessage<MsgDepositResponse> | undefined): boolean {
    return proto3.util.equals(MsgDepositResponse, a, b);
  }
}

/**
 * MsgUpdateParams is the Msg/UpdateParams request type.
 *
 * Since: cosmos-sdk 0.47
 *
 * @generated from message cosmos.gov.v1.MsgUpdateParams
 */
export class MsgUpdateParams extends Message<MsgUpdateParams> {
  /**
   * authority is the address that controls the module (defaults to x/gov unless overwritten).
   *
   * @generated from field: string authority = 1;
   */
  authority = "";

  /**
   * params defines the x/gov parameters to update.
   *
   * NOTE: All parameters must be supplied.
   *
   * @generated from field: cosmos.gov.v1.Params params = 2;
   */
  params?: Params;

  constructor(data?: PartialMessage<MsgUpdateParams>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmos.gov.v1.MsgUpdateParams";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "authority", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "params", kind: "message", T: Params },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgUpdateParams {
    return new MsgUpdateParams().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgUpdateParams {
    return new MsgUpdateParams().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgUpdateParams {
    return new MsgUpdateParams().fromJsonString(jsonString, options);
  }

  static equals(a: MsgUpdateParams | PlainMessage<MsgUpdateParams> | undefined, b: MsgUpdateParams | PlainMessage<MsgUpdateParams> | undefined): boolean {
    return proto3.util.equals(MsgUpdateParams, a, b);
  }
}

/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 *
 * Since: cosmos-sdk 0.47
 *
 * @generated from message cosmos.gov.v1.MsgUpdateParamsResponse
 */
export class MsgUpdateParamsResponse extends Message<MsgUpdateParamsResponse> {
  constructor(data?: PartialMessage<MsgUpdateParamsResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmos.gov.v1.MsgUpdateParamsResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgUpdateParamsResponse {
    return new MsgUpdateParamsResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgUpdateParamsResponse {
    return new MsgUpdateParamsResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgUpdateParamsResponse {
    return new MsgUpdateParamsResponse().fromJsonString(jsonString, options);
  }

  static equals(a: MsgUpdateParamsResponse | PlainMessage<MsgUpdateParamsResponse> | undefined, b: MsgUpdateParamsResponse | PlainMessage<MsgUpdateParamsResponse> | undefined): boolean {
    return proto3.util.equals(MsgUpdateParamsResponse, a, b);
  }
}

/**
 * MsgCancelProposal is the Msg/CancelProposal request type.
 *
 * Since: cosmos-sdk 0.48
 *
 * @generated from message cosmos.gov.v1.MsgCancelProposal
 */
export class MsgCancelProposal extends Message<MsgCancelProposal> {
  /**
   * @generated from field: uint64 proposal_id = 1;
   */
  proposalId = protoInt64.zero;

  /**
   * @generated from field: string proposer = 2;
   */
  proposer = "";

  constructor(data?: PartialMessage<MsgCancelProposal>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmos.gov.v1.MsgCancelProposal";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "proposal_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: "proposer", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgCancelProposal {
    return new MsgCancelProposal().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgCancelProposal {
    return new MsgCancelProposal().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgCancelProposal {
    return new MsgCancelProposal().fromJsonString(jsonString, options);
  }

  static equals(a: MsgCancelProposal | PlainMessage<MsgCancelProposal> | undefined, b: MsgCancelProposal | PlainMessage<MsgCancelProposal> | undefined): boolean {
    return proto3.util.equals(MsgCancelProposal, a, b);
  }
}

/**
 * MsgCancelProposalResponse defines the response structure for executing a
 * MsgCancelProposal message.
 *
 * Since: cosmos-sdk 0.48
 *
 * @generated from message cosmos.gov.v1.MsgCancelProposalResponse
 */
export class MsgCancelProposalResponse extends Message<MsgCancelProposalResponse> {
  /**
   * @generated from field: uint64 proposal_id = 1;
   */
  proposalId = protoInt64.zero;

  /**
   * canceled_time is the time when proposal is canceled.
   *
   * @generated from field: google.protobuf.Timestamp canceled_time = 2;
   */
  canceledTime?: Timestamp;

  /**
   * canceled_height defines the block height at which the proposal is canceled.
   *
   * @generated from field: uint64 canceled_height = 3;
   */
  canceledHeight = protoInt64.zero;

  constructor(data?: PartialMessage<MsgCancelProposalResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmos.gov.v1.MsgCancelProposalResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "proposal_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: "canceled_time", kind: "message", T: Timestamp },
    { no: 3, name: "canceled_height", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgCancelProposalResponse {
    return new MsgCancelProposalResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgCancelProposalResponse {
    return new MsgCancelProposalResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgCancelProposalResponse {
    return new MsgCancelProposalResponse().fromJsonString(jsonString, options);
  }

  static equals(a: MsgCancelProposalResponse | PlainMessage<MsgCancelProposalResponse> | undefined, b: MsgCancelProposalResponse | PlainMessage<MsgCancelProposalResponse> | undefined): boolean {
    return proto3.util.equals(MsgCancelProposalResponse, a, b);
  }
}

