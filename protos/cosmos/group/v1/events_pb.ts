// Since: cosmos-sdk 0.46

// @generated by protoc-gen-es v1.10.0 with parameter "target=ts"
// @generated from file cosmos/group/v1/events.proto (package cosmos.group.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, protoInt64 } from "@bufbuild/protobuf";
import { ProposalExecutorResult } from "./types_pb.js";

/**
 * EventCreateGroup is an event emitted when a group is created.
 *
 * @generated from message cosmos.group.v1.EventCreateGroup
 */
export class EventCreateGroup extends Message<EventCreateGroup> {
  /**
   * group_id is the unique ID of the group.
   *
   * @generated from field: uint64 group_id = 1;
   */
  groupId = protoInt64.zero;

  constructor(data?: PartialMessage<EventCreateGroup>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmos.group.v1.EventCreateGroup";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "group_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EventCreateGroup {
    return new EventCreateGroup().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EventCreateGroup {
    return new EventCreateGroup().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EventCreateGroup {
    return new EventCreateGroup().fromJsonString(jsonString, options);
  }

  static equals(a: EventCreateGroup | PlainMessage<EventCreateGroup> | undefined, b: EventCreateGroup | PlainMessage<EventCreateGroup> | undefined): boolean {
    return proto3.util.equals(EventCreateGroup, a, b);
  }
}

/**
 * EventUpdateGroup is an event emitted when a group is updated.
 *
 * @generated from message cosmos.group.v1.EventUpdateGroup
 */
export class EventUpdateGroup extends Message<EventUpdateGroup> {
  /**
   * group_id is the unique ID of the group.
   *
   * @generated from field: uint64 group_id = 1;
   */
  groupId = protoInt64.zero;

  constructor(data?: PartialMessage<EventUpdateGroup>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmos.group.v1.EventUpdateGroup";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "group_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EventUpdateGroup {
    return new EventUpdateGroup().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EventUpdateGroup {
    return new EventUpdateGroup().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EventUpdateGroup {
    return new EventUpdateGroup().fromJsonString(jsonString, options);
  }

  static equals(a: EventUpdateGroup | PlainMessage<EventUpdateGroup> | undefined, b: EventUpdateGroup | PlainMessage<EventUpdateGroup> | undefined): boolean {
    return proto3.util.equals(EventUpdateGroup, a, b);
  }
}

/**
 * EventCreateGroupPolicy is an event emitted when a group policy is created.
 *
 * @generated from message cosmos.group.v1.EventCreateGroupPolicy
 */
export class EventCreateGroupPolicy extends Message<EventCreateGroupPolicy> {
  /**
   * address is the account address of the group policy.
   *
   * @generated from field: string address = 1;
   */
  address = "";

  constructor(data?: PartialMessage<EventCreateGroupPolicy>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmos.group.v1.EventCreateGroupPolicy";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EventCreateGroupPolicy {
    return new EventCreateGroupPolicy().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EventCreateGroupPolicy {
    return new EventCreateGroupPolicy().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EventCreateGroupPolicy {
    return new EventCreateGroupPolicy().fromJsonString(jsonString, options);
  }

  static equals(a: EventCreateGroupPolicy | PlainMessage<EventCreateGroupPolicy> | undefined, b: EventCreateGroupPolicy | PlainMessage<EventCreateGroupPolicy> | undefined): boolean {
    return proto3.util.equals(EventCreateGroupPolicy, a, b);
  }
}

/**
 * EventUpdateGroupPolicy is an event emitted when a group policy is updated.
 *
 * @generated from message cosmos.group.v1.EventUpdateGroupPolicy
 */
export class EventUpdateGroupPolicy extends Message<EventUpdateGroupPolicy> {
  /**
   * address is the account address of the group policy.
   *
   * @generated from field: string address = 1;
   */
  address = "";

  constructor(data?: PartialMessage<EventUpdateGroupPolicy>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmos.group.v1.EventUpdateGroupPolicy";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EventUpdateGroupPolicy {
    return new EventUpdateGroupPolicy().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EventUpdateGroupPolicy {
    return new EventUpdateGroupPolicy().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EventUpdateGroupPolicy {
    return new EventUpdateGroupPolicy().fromJsonString(jsonString, options);
  }

  static equals(a: EventUpdateGroupPolicy | PlainMessage<EventUpdateGroupPolicy> | undefined, b: EventUpdateGroupPolicy | PlainMessage<EventUpdateGroupPolicy> | undefined): boolean {
    return proto3.util.equals(EventUpdateGroupPolicy, a, b);
  }
}

/**
 * EventSubmitProposal is an event emitted when a proposal is created.
 *
 * @generated from message cosmos.group.v1.EventSubmitProposal
 */
export class EventSubmitProposal extends Message<EventSubmitProposal> {
  /**
   * proposal_id is the unique ID of the proposal.
   *
   * @generated from field: uint64 proposal_id = 1;
   */
  proposalId = protoInt64.zero;

  constructor(data?: PartialMessage<EventSubmitProposal>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmos.group.v1.EventSubmitProposal";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "proposal_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EventSubmitProposal {
    return new EventSubmitProposal().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EventSubmitProposal {
    return new EventSubmitProposal().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EventSubmitProposal {
    return new EventSubmitProposal().fromJsonString(jsonString, options);
  }

  static equals(a: EventSubmitProposal | PlainMessage<EventSubmitProposal> | undefined, b: EventSubmitProposal | PlainMessage<EventSubmitProposal> | undefined): boolean {
    return proto3.util.equals(EventSubmitProposal, a, b);
  }
}

/**
 * EventWithdrawProposal is an event emitted when a proposal is withdrawn.
 *
 * @generated from message cosmos.group.v1.EventWithdrawProposal
 */
export class EventWithdrawProposal extends Message<EventWithdrawProposal> {
  /**
   * proposal_id is the unique ID of the proposal.
   *
   * @generated from field: uint64 proposal_id = 1;
   */
  proposalId = protoInt64.zero;

  constructor(data?: PartialMessage<EventWithdrawProposal>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmos.group.v1.EventWithdrawProposal";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "proposal_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EventWithdrawProposal {
    return new EventWithdrawProposal().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EventWithdrawProposal {
    return new EventWithdrawProposal().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EventWithdrawProposal {
    return new EventWithdrawProposal().fromJsonString(jsonString, options);
  }

  static equals(a: EventWithdrawProposal | PlainMessage<EventWithdrawProposal> | undefined, b: EventWithdrawProposal | PlainMessage<EventWithdrawProposal> | undefined): boolean {
    return proto3.util.equals(EventWithdrawProposal, a, b);
  }
}

/**
 * EventVote is an event emitted when a voter votes on a proposal.
 *
 * @generated from message cosmos.group.v1.EventVote
 */
export class EventVote extends Message<EventVote> {
  /**
   * proposal_id is the unique ID of the proposal.
   *
   * @generated from field: uint64 proposal_id = 1;
   */
  proposalId = protoInt64.zero;

  constructor(data?: PartialMessage<EventVote>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmos.group.v1.EventVote";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "proposal_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EventVote {
    return new EventVote().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EventVote {
    return new EventVote().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EventVote {
    return new EventVote().fromJsonString(jsonString, options);
  }

  static equals(a: EventVote | PlainMessage<EventVote> | undefined, b: EventVote | PlainMessage<EventVote> | undefined): boolean {
    return proto3.util.equals(EventVote, a, b);
  }
}

/**
 * EventExec is an event emitted when a proposal is executed.
 *
 * @generated from message cosmos.group.v1.EventExec
 */
export class EventExec extends Message<EventExec> {
  /**
   * proposal_id is the unique ID of the proposal.
   *
   * @generated from field: uint64 proposal_id = 1;
   */
  proposalId = protoInt64.zero;

  /**
   * result is the proposal execution result.
   *
   * @generated from field: cosmos.group.v1.ProposalExecutorResult result = 2;
   */
  result = ProposalExecutorResult.UNSPECIFIED;

  /**
   * logs contains error logs in case the execution result is FAILURE.
   *
   * @generated from field: string logs = 3;
   */
  logs = "";

  constructor(data?: PartialMessage<EventExec>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmos.group.v1.EventExec";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "proposal_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: "result", kind: "enum", T: proto3.getEnumType(ProposalExecutorResult) },
    { no: 3, name: "logs", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EventExec {
    return new EventExec().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EventExec {
    return new EventExec().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EventExec {
    return new EventExec().fromJsonString(jsonString, options);
  }

  static equals(a: EventExec | PlainMessage<EventExec> | undefined, b: EventExec | PlainMessage<EventExec> | undefined): boolean {
    return proto3.util.equals(EventExec, a, b);
  }
}

/**
 * EventLeaveGroup is an event emitted when group member leaves the group.
 *
 * @generated from message cosmos.group.v1.EventLeaveGroup
 */
export class EventLeaveGroup extends Message<EventLeaveGroup> {
  /**
   * group_id is the unique ID of the group.
   *
   * @generated from field: uint64 group_id = 1;
   */
  groupId = protoInt64.zero;

  /**
   * address is the account address of the group member.
   *
   * @generated from field: string address = 2;
   */
  address = "";

  constructor(data?: PartialMessage<EventLeaveGroup>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmos.group.v1.EventLeaveGroup";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "group_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: "address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EventLeaveGroup {
    return new EventLeaveGroup().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EventLeaveGroup {
    return new EventLeaveGroup().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EventLeaveGroup {
    return new EventLeaveGroup().fromJsonString(jsonString, options);
  }

  static equals(a: EventLeaveGroup | PlainMessage<EventLeaveGroup> | undefined, b: EventLeaveGroup | PlainMessage<EventLeaveGroup> | undefined): boolean {
    return proto3.util.equals(EventLeaveGroup, a, b);
  }
}

