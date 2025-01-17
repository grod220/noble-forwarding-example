// Since: cosmos-sdk 0.46

// @generated by protoc-gen-es v1.10.0 with parameter "target=ts"
// @generated from file cosmos/group/v1/types.proto (package cosmos.group.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Any, Duration, Message, proto3, protoInt64, Timestamp } from "@bufbuild/protobuf";

/**
 * VoteOption enumerates the valid vote options for a given proposal.
 *
 * @generated from enum cosmos.group.v1.VoteOption
 */
export enum VoteOption {
  /**
   * VOTE_OPTION_UNSPECIFIED defines an unspecified vote option which will
   * return an error.
   *
   * @generated from enum value: VOTE_OPTION_UNSPECIFIED = 0;
   */
  UNSPECIFIED = 0,

  /**
   * VOTE_OPTION_YES defines a yes vote option.
   *
   * @generated from enum value: VOTE_OPTION_YES = 1;
   */
  YES = 1,

  /**
   * VOTE_OPTION_ABSTAIN defines an abstain vote option.
   *
   * @generated from enum value: VOTE_OPTION_ABSTAIN = 2;
   */
  ABSTAIN = 2,

  /**
   * VOTE_OPTION_NO defines a no vote option.
   *
   * @generated from enum value: VOTE_OPTION_NO = 3;
   */
  NO = 3,

  /**
   * VOTE_OPTION_NO_WITH_VETO defines a no with veto vote option.
   *
   * @generated from enum value: VOTE_OPTION_NO_WITH_VETO = 4;
   */
  NO_WITH_VETO = 4,
}
// Retrieve enum metadata with: proto3.getEnumType(VoteOption)
proto3.util.setEnumType(VoteOption, "cosmos.group.v1.VoteOption", [
  { no: 0, name: "VOTE_OPTION_UNSPECIFIED" },
  { no: 1, name: "VOTE_OPTION_YES" },
  { no: 2, name: "VOTE_OPTION_ABSTAIN" },
  { no: 3, name: "VOTE_OPTION_NO" },
  { no: 4, name: "VOTE_OPTION_NO_WITH_VETO" },
]);

/**
 * ProposalStatus defines proposal statuses.
 *
 * @generated from enum cosmos.group.v1.ProposalStatus
 */
export enum ProposalStatus {
  /**
   * An empty value is invalid and not allowed.
   *
   * @generated from enum value: PROPOSAL_STATUS_UNSPECIFIED = 0;
   */
  UNSPECIFIED = 0,

  /**
   * Initial status of a proposal when submitted.
   *
   * @generated from enum value: PROPOSAL_STATUS_SUBMITTED = 1;
   */
  SUBMITTED = 1,

  /**
   * Final status of a proposal when the final tally is done and the outcome
   * passes the group policy's decision policy.
   *
   * @generated from enum value: PROPOSAL_STATUS_ACCEPTED = 2;
   */
  ACCEPTED = 2,

  /**
   * Final status of a proposal when the final tally is done and the outcome
   * is rejected by the group policy's decision policy.
   *
   * @generated from enum value: PROPOSAL_STATUS_REJECTED = 3;
   */
  REJECTED = 3,

  /**
   * Final status of a proposal when the group policy is modified before the
   * final tally.
   *
   * @generated from enum value: PROPOSAL_STATUS_ABORTED = 4;
   */
  ABORTED = 4,

  /**
   * A proposal can be withdrawn before the voting start time by the owner.
   * When this happens the final status is Withdrawn.
   *
   * @generated from enum value: PROPOSAL_STATUS_WITHDRAWN = 5;
   */
  WITHDRAWN = 5,
}
// Retrieve enum metadata with: proto3.getEnumType(ProposalStatus)
proto3.util.setEnumType(ProposalStatus, "cosmos.group.v1.ProposalStatus", [
  { no: 0, name: "PROPOSAL_STATUS_UNSPECIFIED" },
  { no: 1, name: "PROPOSAL_STATUS_SUBMITTED" },
  { no: 2, name: "PROPOSAL_STATUS_ACCEPTED" },
  { no: 3, name: "PROPOSAL_STATUS_REJECTED" },
  { no: 4, name: "PROPOSAL_STATUS_ABORTED" },
  { no: 5, name: "PROPOSAL_STATUS_WITHDRAWN" },
]);

/**
 * ProposalExecutorResult defines types of proposal executor results.
 *
 * @generated from enum cosmos.group.v1.ProposalExecutorResult
 */
export enum ProposalExecutorResult {
  /**
   * An empty value is not allowed.
   *
   * @generated from enum value: PROPOSAL_EXECUTOR_RESULT_UNSPECIFIED = 0;
   */
  UNSPECIFIED = 0,

  /**
   * We have not yet run the executor.
   *
   * @generated from enum value: PROPOSAL_EXECUTOR_RESULT_NOT_RUN = 1;
   */
  NOT_RUN = 1,

  /**
   * The executor was successful and proposed action updated state.
   *
   * @generated from enum value: PROPOSAL_EXECUTOR_RESULT_SUCCESS = 2;
   */
  SUCCESS = 2,

  /**
   * The executor returned an error and proposed action didn't update state.
   *
   * @generated from enum value: PROPOSAL_EXECUTOR_RESULT_FAILURE = 3;
   */
  FAILURE = 3,
}
// Retrieve enum metadata with: proto3.getEnumType(ProposalExecutorResult)
proto3.util.setEnumType(ProposalExecutorResult, "cosmos.group.v1.ProposalExecutorResult", [
  { no: 0, name: "PROPOSAL_EXECUTOR_RESULT_UNSPECIFIED" },
  { no: 1, name: "PROPOSAL_EXECUTOR_RESULT_NOT_RUN" },
  { no: 2, name: "PROPOSAL_EXECUTOR_RESULT_SUCCESS" },
  { no: 3, name: "PROPOSAL_EXECUTOR_RESULT_FAILURE" },
]);

/**
 * Member represents a group member with an account address,
 * non-zero weight, metadata and added_at timestamp.
 *
 * @generated from message cosmos.group.v1.Member
 */
export class Member extends Message<Member> {
  /**
   * address is the member's account address.
   *
   * @generated from field: string address = 1;
   */
  address = "";

  /**
   * weight is the member's voting weight that should be greater than 0.
   *
   * @generated from field: string weight = 2;
   */
  weight = "";

  /**
   * metadata is any arbitrary metadata attached to the member.
   *
   * @generated from field: string metadata = 3;
   */
  metadata = "";

  /**
   * added_at is a timestamp specifying when a member was added.
   *
   * @generated from field: google.protobuf.Timestamp added_at = 4;
   */
  addedAt?: Timestamp;

  constructor(data?: PartialMessage<Member>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmos.group.v1.Member";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "weight", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "metadata", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "added_at", kind: "message", T: Timestamp },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Member {
    return new Member().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Member {
    return new Member().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Member {
    return new Member().fromJsonString(jsonString, options);
  }

  static equals(a: Member | PlainMessage<Member> | undefined, b: Member | PlainMessage<Member> | undefined): boolean {
    return proto3.util.equals(Member, a, b);
  }
}

/**
 * MemberRequest represents a group member to be used in Msg server requests.
 * Contrary to `Member`, it doesn't have any `added_at` field
 * since this field cannot be set as part of requests.
 *
 * @generated from message cosmos.group.v1.MemberRequest
 */
export class MemberRequest extends Message<MemberRequest> {
  /**
   * address is the member's account address.
   *
   * @generated from field: string address = 1;
   */
  address = "";

  /**
   * weight is the member's voting weight that should be greater than 0.
   *
   * @generated from field: string weight = 2;
   */
  weight = "";

  /**
   * metadata is any arbitrary metadata attached to the member.
   *
   * @generated from field: string metadata = 3;
   */
  metadata = "";

  constructor(data?: PartialMessage<MemberRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmos.group.v1.MemberRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "weight", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "metadata", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MemberRequest {
    return new MemberRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MemberRequest {
    return new MemberRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MemberRequest {
    return new MemberRequest().fromJsonString(jsonString, options);
  }

  static equals(a: MemberRequest | PlainMessage<MemberRequest> | undefined, b: MemberRequest | PlainMessage<MemberRequest> | undefined): boolean {
    return proto3.util.equals(MemberRequest, a, b);
  }
}

/**
 * ThresholdDecisionPolicy is a decision policy where a proposal passes when it
 * satisfies the two following conditions:
 * 1. The sum of all `YES` voter's weights is greater or equal than the defined
 *    `threshold`.
 * 2. The voting and execution periods of the proposal respect the parameters
 *    given by `windows`.
 *
 * @generated from message cosmos.group.v1.ThresholdDecisionPolicy
 */
export class ThresholdDecisionPolicy extends Message<ThresholdDecisionPolicy> {
  /**
   * threshold is the minimum weighted sum of `YES` votes that must be met or
   * exceeded for a proposal to succeed.
   *
   * @generated from field: string threshold = 1;
   */
  threshold = "";

  /**
   * windows defines the different windows for voting and execution.
   *
   * @generated from field: cosmos.group.v1.DecisionPolicyWindows windows = 2;
   */
  windows?: DecisionPolicyWindows;

  constructor(data?: PartialMessage<ThresholdDecisionPolicy>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmos.group.v1.ThresholdDecisionPolicy";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "threshold", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "windows", kind: "message", T: DecisionPolicyWindows },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ThresholdDecisionPolicy {
    return new ThresholdDecisionPolicy().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ThresholdDecisionPolicy {
    return new ThresholdDecisionPolicy().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ThresholdDecisionPolicy {
    return new ThresholdDecisionPolicy().fromJsonString(jsonString, options);
  }

  static equals(a: ThresholdDecisionPolicy | PlainMessage<ThresholdDecisionPolicy> | undefined, b: ThresholdDecisionPolicy | PlainMessage<ThresholdDecisionPolicy> | undefined): boolean {
    return proto3.util.equals(ThresholdDecisionPolicy, a, b);
  }
}

/**
 * PercentageDecisionPolicy is a decision policy where a proposal passes when
 * it satisfies the two following conditions:
 * 1. The percentage of all `YES` voters' weights out of the total group weight
 *    is greater or equal than the given `percentage`.
 * 2. The voting and execution periods of the proposal respect the parameters
 *    given by `windows`.
 *
 * @generated from message cosmos.group.v1.PercentageDecisionPolicy
 */
export class PercentageDecisionPolicy extends Message<PercentageDecisionPolicy> {
  /**
   * percentage is the minimum percentage of the weighted sum of `YES` votes must
   * meet for a proposal to succeed.
   *
   * @generated from field: string percentage = 1;
   */
  percentage = "";

  /**
   * windows defines the different windows for voting and execution.
   *
   * @generated from field: cosmos.group.v1.DecisionPolicyWindows windows = 2;
   */
  windows?: DecisionPolicyWindows;

  constructor(data?: PartialMessage<PercentageDecisionPolicy>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmos.group.v1.PercentageDecisionPolicy";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "percentage", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "windows", kind: "message", T: DecisionPolicyWindows },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PercentageDecisionPolicy {
    return new PercentageDecisionPolicy().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PercentageDecisionPolicy {
    return new PercentageDecisionPolicy().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PercentageDecisionPolicy {
    return new PercentageDecisionPolicy().fromJsonString(jsonString, options);
  }

  static equals(a: PercentageDecisionPolicy | PlainMessage<PercentageDecisionPolicy> | undefined, b: PercentageDecisionPolicy | PlainMessage<PercentageDecisionPolicy> | undefined): boolean {
    return proto3.util.equals(PercentageDecisionPolicy, a, b);
  }
}

/**
 * DecisionPolicyWindows defines the different windows for voting and execution.
 *
 * @generated from message cosmos.group.v1.DecisionPolicyWindows
 */
export class DecisionPolicyWindows extends Message<DecisionPolicyWindows> {
  /**
   * voting_period is the duration from submission of a proposal to the end of voting period
   * Within this times votes can be submitted with MsgVote.
   *
   * @generated from field: google.protobuf.Duration voting_period = 1;
   */
  votingPeriod?: Duration;

  /**
   * min_execution_period is the minimum duration after the proposal submission
   * where members can start sending MsgExec. This means that the window for
   * sending a MsgExec transaction is:
   * `[ submission + min_execution_period ; submission + voting_period + max_execution_period]`
   * where max_execution_period is a app-specific config, defined in the keeper.
   * If not set, min_execution_period will default to 0.
   *
   * Please make sure to set a `min_execution_period` that is smaller than
   * `voting_period + max_execution_period`, or else the above execution window
   * is empty, meaning that all proposals created with this decision policy
   * won't be able to be executed.
   *
   * @generated from field: google.protobuf.Duration min_execution_period = 2;
   */
  minExecutionPeriod?: Duration;

  constructor(data?: PartialMessage<DecisionPolicyWindows>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmos.group.v1.DecisionPolicyWindows";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "voting_period", kind: "message", T: Duration },
    { no: 2, name: "min_execution_period", kind: "message", T: Duration },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DecisionPolicyWindows {
    return new DecisionPolicyWindows().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DecisionPolicyWindows {
    return new DecisionPolicyWindows().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DecisionPolicyWindows {
    return new DecisionPolicyWindows().fromJsonString(jsonString, options);
  }

  static equals(a: DecisionPolicyWindows | PlainMessage<DecisionPolicyWindows> | undefined, b: DecisionPolicyWindows | PlainMessage<DecisionPolicyWindows> | undefined): boolean {
    return proto3.util.equals(DecisionPolicyWindows, a, b);
  }
}

/**
 * GroupInfo represents the high-level on-chain information for a group.
 *
 * @generated from message cosmos.group.v1.GroupInfo
 */
export class GroupInfo extends Message<GroupInfo> {
  /**
   * id is the unique ID of the group.
   *
   * @generated from field: uint64 id = 1;
   */
  id = protoInt64.zero;

  /**
   * admin is the account address of the group's admin.
   *
   * @generated from field: string admin = 2;
   */
  admin = "";

  /**
   * metadata is any arbitrary metadata to attached to the group.
   * the recommended format of the metadata is to be found here: https://docs.cosmos.network/v0.47/modules/group#group-1
   *
   * @generated from field: string metadata = 3;
   */
  metadata = "";

  /**
   * version is used to track changes to a group's membership structure that
   * would break existing proposals. Whenever any members weight is changed,
   * or any member is added or removed this version is incremented and will
   * cause proposals based on older versions of this group to fail
   *
   * @generated from field: uint64 version = 4;
   */
  version = protoInt64.zero;

  /**
   * total_weight is the sum of the group members' weights.
   *
   * @generated from field: string total_weight = 5;
   */
  totalWeight = "";

  /**
   * created_at is a timestamp specifying when a group was created.
   *
   * @generated from field: google.protobuf.Timestamp created_at = 6;
   */
  createdAt?: Timestamp;

  constructor(data?: PartialMessage<GroupInfo>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmos.group.v1.GroupInfo";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: "admin", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "metadata", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "version", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 5, name: "total_weight", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "created_at", kind: "message", T: Timestamp },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GroupInfo {
    return new GroupInfo().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GroupInfo {
    return new GroupInfo().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GroupInfo {
    return new GroupInfo().fromJsonString(jsonString, options);
  }

  static equals(a: GroupInfo | PlainMessage<GroupInfo> | undefined, b: GroupInfo | PlainMessage<GroupInfo> | undefined): boolean {
    return proto3.util.equals(GroupInfo, a, b);
  }
}

/**
 * GroupMember represents the relationship between a group and a member.
 *
 * @generated from message cosmos.group.v1.GroupMember
 */
export class GroupMember extends Message<GroupMember> {
  /**
   * group_id is the unique ID of the group.
   *
   * @generated from field: uint64 group_id = 1;
   */
  groupId = protoInt64.zero;

  /**
   * member is the member data.
   *
   * @generated from field: cosmos.group.v1.Member member = 2;
   */
  member?: Member;

  constructor(data?: PartialMessage<GroupMember>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmos.group.v1.GroupMember";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "group_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: "member", kind: "message", T: Member },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GroupMember {
    return new GroupMember().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GroupMember {
    return new GroupMember().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GroupMember {
    return new GroupMember().fromJsonString(jsonString, options);
  }

  static equals(a: GroupMember | PlainMessage<GroupMember> | undefined, b: GroupMember | PlainMessage<GroupMember> | undefined): boolean {
    return proto3.util.equals(GroupMember, a, b);
  }
}

/**
 * GroupPolicyInfo represents the high-level on-chain information for a group policy.
 *
 * @generated from message cosmos.group.v1.GroupPolicyInfo
 */
export class GroupPolicyInfo extends Message<GroupPolicyInfo> {
  /**
   * address is the account address of group policy.
   *
   * @generated from field: string address = 1;
   */
  address = "";

  /**
   * group_id is the unique ID of the group.
   *
   * @generated from field: uint64 group_id = 2;
   */
  groupId = protoInt64.zero;

  /**
   * admin is the account address of the group admin.
   *
   * @generated from field: string admin = 3;
   */
  admin = "";

  /**
   * metadata is any arbitrary metadata attached to the group policy.
   * the recommended format of the metadata is to be found here: https://docs.cosmos.network/v0.47/modules/group#decision-policy-1
   *
   * @generated from field: string metadata = 4;
   */
  metadata = "";

  /**
   * version is used to track changes to a group's GroupPolicyInfo structure that
   * would create a different result on a running proposal.
   *
   * @generated from field: uint64 version = 5;
   */
  version = protoInt64.zero;

  /**
   * decision_policy specifies the group policy's decision policy.
   *
   * @generated from field: google.protobuf.Any decision_policy = 6;
   */
  decisionPolicy?: Any;

  /**
   * created_at is a timestamp specifying when a group policy was created.
   *
   * @generated from field: google.protobuf.Timestamp created_at = 7;
   */
  createdAt?: Timestamp;

  constructor(data?: PartialMessage<GroupPolicyInfo>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmos.group.v1.GroupPolicyInfo";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "group_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 3, name: "admin", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "metadata", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "version", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 6, name: "decision_policy", kind: "message", T: Any },
    { no: 7, name: "created_at", kind: "message", T: Timestamp },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GroupPolicyInfo {
    return new GroupPolicyInfo().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GroupPolicyInfo {
    return new GroupPolicyInfo().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GroupPolicyInfo {
    return new GroupPolicyInfo().fromJsonString(jsonString, options);
  }

  static equals(a: GroupPolicyInfo | PlainMessage<GroupPolicyInfo> | undefined, b: GroupPolicyInfo | PlainMessage<GroupPolicyInfo> | undefined): boolean {
    return proto3.util.equals(GroupPolicyInfo, a, b);
  }
}

/**
 * Proposal defines a group proposal. Any member of a group can submit a proposal
 * for a group policy to decide upon.
 * A proposal consists of a set of `sdk.Msg`s that will be executed if the proposal
 * passes as well as some optional metadata associated with the proposal.
 *
 * @generated from message cosmos.group.v1.Proposal
 */
export class Proposal extends Message<Proposal> {
  /**
   * id is the unique id of the proposal.
   *
   * @generated from field: uint64 id = 1;
   */
  id = protoInt64.zero;

  /**
   * group_policy_address is the account address of group policy.
   *
   * @generated from field: string group_policy_address = 2;
   */
  groupPolicyAddress = "";

  /**
   * metadata is any arbitrary metadata attached to the proposal.
   * the recommended format of the metadata is to be found here: https://docs.cosmos.network/v0.47/modules/group#proposal-4
   *
   * @generated from field: string metadata = 3;
   */
  metadata = "";

  /**
   * proposers are the account addresses of the proposers.
   *
   * @generated from field: repeated string proposers = 4;
   */
  proposers: string[] = [];

  /**
   * submit_time is a timestamp specifying when a proposal was submitted.
   *
   * @generated from field: google.protobuf.Timestamp submit_time = 5;
   */
  submitTime?: Timestamp;

  /**
   * group_version tracks the version of the group at proposal submission.
   * This field is here for informational purposes only.
   *
   * @generated from field: uint64 group_version = 6;
   */
  groupVersion = protoInt64.zero;

  /**
   * group_policy_version tracks the version of the group policy at proposal submission.
   * When a decision policy is changed, existing proposals from previous policy
   * versions will become invalid with the `ABORTED` status.
   * This field is here for informational purposes only.
   *
   * @generated from field: uint64 group_policy_version = 7;
   */
  groupPolicyVersion = protoInt64.zero;

  /**
   * status represents the high level position in the life cycle of the proposal. Initial value is Submitted.
   *
   * @generated from field: cosmos.group.v1.ProposalStatus status = 8;
   */
  status = ProposalStatus.UNSPECIFIED;

  /**
   * final_tally_result contains the sums of all weighted votes for this
   * proposal for each vote option. It is empty at submission, and only
   * populated after tallying, at voting period end or at proposal execution,
   * whichever happens first.
   *
   * @generated from field: cosmos.group.v1.TallyResult final_tally_result = 9;
   */
  finalTallyResult?: TallyResult;

  /**
   * voting_period_end is the timestamp before which voting must be done.
   * Unless a successful MsgExec is called before (to execute a proposal whose
   * tally is successful before the voting period ends), tallying will be done
   * at this point, and the `final_tally_result`and `status` fields will be
   * accordingly updated.
   *
   * @generated from field: google.protobuf.Timestamp voting_period_end = 10;
   */
  votingPeriodEnd?: Timestamp;

  /**
   * executor_result is the final result of the proposal execution. Initial value is NotRun.
   *
   * @generated from field: cosmos.group.v1.ProposalExecutorResult executor_result = 11;
   */
  executorResult = ProposalExecutorResult.UNSPECIFIED;

  /**
   * messages is a list of `sdk.Msg`s that will be executed if the proposal passes.
   *
   * @generated from field: repeated google.protobuf.Any messages = 12;
   */
  messages: Any[] = [];

  /**
   * title is the title of the proposal
   *
   * Since: cosmos-sdk 0.47
   *
   * @generated from field: string title = 13;
   */
  title = "";

  /**
   * summary is a short summary of the proposal
   *
   * Since: cosmos-sdk 0.47
   *
   * @generated from field: string summary = 14;
   */
  summary = "";

  constructor(data?: PartialMessage<Proposal>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmos.group.v1.Proposal";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: "group_policy_address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "metadata", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "proposers", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 5, name: "submit_time", kind: "message", T: Timestamp },
    { no: 6, name: "group_version", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 7, name: "group_policy_version", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 8, name: "status", kind: "enum", T: proto3.getEnumType(ProposalStatus) },
    { no: 9, name: "final_tally_result", kind: "message", T: TallyResult },
    { no: 10, name: "voting_period_end", kind: "message", T: Timestamp },
    { no: 11, name: "executor_result", kind: "enum", T: proto3.getEnumType(ProposalExecutorResult) },
    { no: 12, name: "messages", kind: "message", T: Any, repeated: true },
    { no: 13, name: "title", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 14, name: "summary", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Proposal {
    return new Proposal().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Proposal {
    return new Proposal().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Proposal {
    return new Proposal().fromJsonString(jsonString, options);
  }

  static equals(a: Proposal | PlainMessage<Proposal> | undefined, b: Proposal | PlainMessage<Proposal> | undefined): boolean {
    return proto3.util.equals(Proposal, a, b);
  }
}

/**
 * TallyResult represents the sum of weighted votes for each vote option.
 *
 * @generated from message cosmos.group.v1.TallyResult
 */
export class TallyResult extends Message<TallyResult> {
  /**
   * yes_count is the weighted sum of yes votes.
   *
   * @generated from field: string yes_count = 1;
   */
  yesCount = "";

  /**
   * abstain_count is the weighted sum of abstainers.
   *
   * @generated from field: string abstain_count = 2;
   */
  abstainCount = "";

  /**
   * no_count is the weighted sum of no votes.
   *
   * @generated from field: string no_count = 3;
   */
  noCount = "";

  /**
   * no_with_veto_count is the weighted sum of veto.
   *
   * @generated from field: string no_with_veto_count = 4;
   */
  noWithVetoCount = "";

  constructor(data?: PartialMessage<TallyResult>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmos.group.v1.TallyResult";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "yes_count", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "abstain_count", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "no_count", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "no_with_veto_count", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TallyResult {
    return new TallyResult().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TallyResult {
    return new TallyResult().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TallyResult {
    return new TallyResult().fromJsonString(jsonString, options);
  }

  static equals(a: TallyResult | PlainMessage<TallyResult> | undefined, b: TallyResult | PlainMessage<TallyResult> | undefined): boolean {
    return proto3.util.equals(TallyResult, a, b);
  }
}

/**
 * Vote represents a vote for a proposal.string metadata
 *
 * @generated from message cosmos.group.v1.Vote
 */
export class Vote extends Message<Vote> {
  /**
   * proposal is the unique ID of the proposal.
   *
   * @generated from field: uint64 proposal_id = 1;
   */
  proposalId = protoInt64.zero;

  /**
   * voter is the account address of the voter.
   *
   * @generated from field: string voter = 2;
   */
  voter = "";

  /**
   * option is the voter's choice on the proposal.
   *
   * @generated from field: cosmos.group.v1.VoteOption option = 3;
   */
  option = VoteOption.UNSPECIFIED;

  /**
   * metadata is any arbitrary metadata attached to the vote.
   * the recommended format of the metadata is to be found here: https://docs.cosmos.network/v0.47/modules/group#vote-2
   *
   * @generated from field: string metadata = 4;
   */
  metadata = "";

  /**
   * submit_time is the timestamp when the vote was submitted.
   *
   * @generated from field: google.protobuf.Timestamp submit_time = 5;
   */
  submitTime?: Timestamp;

  constructor(data?: PartialMessage<Vote>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmos.group.v1.Vote";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "proposal_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: "voter", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "option", kind: "enum", T: proto3.getEnumType(VoteOption) },
    { no: 4, name: "metadata", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "submit_time", kind: "message", T: Timestamp },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Vote {
    return new Vote().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Vote {
    return new Vote().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Vote {
    return new Vote().fromJsonString(jsonString, options);
  }

  static equals(a: Vote | PlainMessage<Vote> | undefined, b: Vote | PlainMessage<Vote> | undefined): boolean {
    return proto3.util.equals(Vote, a, b);
  }
}

