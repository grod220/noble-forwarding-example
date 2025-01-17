// @generated by protoc-gen-es v1.10.0 with parameter "target=ts"
// @generated from file tendermint/types/evidence.proto (package tendermint.types, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, protoInt64, Timestamp } from "@bufbuild/protobuf";
import { LightBlock, Vote } from "./types_pb.js";
import { Validator } from "./validator_pb.js";

/**
 * @generated from message tendermint.types.Evidence
 */
export class Evidence extends Message<Evidence> {
  /**
   * @generated from oneof tendermint.types.Evidence.sum
   */
  sum: {
    /**
     * @generated from field: tendermint.types.DuplicateVoteEvidence duplicate_vote_evidence = 1;
     */
    value: DuplicateVoteEvidence;
    case: "duplicateVoteEvidence";
  } | {
    /**
     * @generated from field: tendermint.types.LightClientAttackEvidence light_client_attack_evidence = 2;
     */
    value: LightClientAttackEvidence;
    case: "lightClientAttackEvidence";
  } | { case: undefined; value?: undefined } = { case: undefined };

  constructor(data?: PartialMessage<Evidence>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "tendermint.types.Evidence";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "duplicate_vote_evidence", kind: "message", T: DuplicateVoteEvidence, oneof: "sum" },
    { no: 2, name: "light_client_attack_evidence", kind: "message", T: LightClientAttackEvidence, oneof: "sum" },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Evidence {
    return new Evidence().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Evidence {
    return new Evidence().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Evidence {
    return new Evidence().fromJsonString(jsonString, options);
  }

  static equals(a: Evidence | PlainMessage<Evidence> | undefined, b: Evidence | PlainMessage<Evidence> | undefined): boolean {
    return proto3.util.equals(Evidence, a, b);
  }
}

/**
 * DuplicateVoteEvidence contains evidence of a validator signed two conflicting votes.
 *
 * @generated from message tendermint.types.DuplicateVoteEvidence
 */
export class DuplicateVoteEvidence extends Message<DuplicateVoteEvidence> {
  /**
   * @generated from field: tendermint.types.Vote vote_a = 1;
   */
  voteA?: Vote;

  /**
   * @generated from field: tendermint.types.Vote vote_b = 2;
   */
  voteB?: Vote;

  /**
   * @generated from field: int64 total_voting_power = 3;
   */
  totalVotingPower = protoInt64.zero;

  /**
   * @generated from field: int64 validator_power = 4;
   */
  validatorPower = protoInt64.zero;

  /**
   * @generated from field: google.protobuf.Timestamp timestamp = 5;
   */
  timestamp?: Timestamp;

  constructor(data?: PartialMessage<DuplicateVoteEvidence>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "tendermint.types.DuplicateVoteEvidence";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "vote_a", kind: "message", T: Vote },
    { no: 2, name: "vote_b", kind: "message", T: Vote },
    { no: 3, name: "total_voting_power", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 4, name: "validator_power", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 5, name: "timestamp", kind: "message", T: Timestamp },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DuplicateVoteEvidence {
    return new DuplicateVoteEvidence().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DuplicateVoteEvidence {
    return new DuplicateVoteEvidence().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DuplicateVoteEvidence {
    return new DuplicateVoteEvidence().fromJsonString(jsonString, options);
  }

  static equals(a: DuplicateVoteEvidence | PlainMessage<DuplicateVoteEvidence> | undefined, b: DuplicateVoteEvidence | PlainMessage<DuplicateVoteEvidence> | undefined): boolean {
    return proto3.util.equals(DuplicateVoteEvidence, a, b);
  }
}

/**
 * LightClientAttackEvidence contains evidence of a set of validators attempting to mislead a light client.
 *
 * @generated from message tendermint.types.LightClientAttackEvidence
 */
export class LightClientAttackEvidence extends Message<LightClientAttackEvidence> {
  /**
   * @generated from field: tendermint.types.LightBlock conflicting_block = 1;
   */
  conflictingBlock?: LightBlock;

  /**
   * @generated from field: int64 common_height = 2;
   */
  commonHeight = protoInt64.zero;

  /**
   * @generated from field: repeated tendermint.types.Validator byzantine_validators = 3;
   */
  byzantineValidators: Validator[] = [];

  /**
   * @generated from field: int64 total_voting_power = 4;
   */
  totalVotingPower = protoInt64.zero;

  /**
   * @generated from field: google.protobuf.Timestamp timestamp = 5;
   */
  timestamp?: Timestamp;

  constructor(data?: PartialMessage<LightClientAttackEvidence>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "tendermint.types.LightClientAttackEvidence";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "conflicting_block", kind: "message", T: LightBlock },
    { no: 2, name: "common_height", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 3, name: "byzantine_validators", kind: "message", T: Validator, repeated: true },
    { no: 4, name: "total_voting_power", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 5, name: "timestamp", kind: "message", T: Timestamp },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): LightClientAttackEvidence {
    return new LightClientAttackEvidence().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): LightClientAttackEvidence {
    return new LightClientAttackEvidence().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): LightClientAttackEvidence {
    return new LightClientAttackEvidence().fromJsonString(jsonString, options);
  }

  static equals(a: LightClientAttackEvidence | PlainMessage<LightClientAttackEvidence> | undefined, b: LightClientAttackEvidence | PlainMessage<LightClientAttackEvidence> | undefined): boolean {
    return proto3.util.equals(LightClientAttackEvidence, a, b);
  }
}

/**
 * @generated from message tendermint.types.EvidenceList
 */
export class EvidenceList extends Message<EvidenceList> {
  /**
   * @generated from field: repeated tendermint.types.Evidence evidence = 1;
   */
  evidence: Evidence[] = [];

  constructor(data?: PartialMessage<EvidenceList>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "tendermint.types.EvidenceList";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "evidence", kind: "message", T: Evidence, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EvidenceList {
    return new EvidenceList().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EvidenceList {
    return new EvidenceList().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EvidenceList {
    return new EvidenceList().fromJsonString(jsonString, options);
  }

  static equals(a: EvidenceList | PlainMessage<EvidenceList> | undefined, b: EvidenceList | PlainMessage<EvidenceList> | undefined): boolean {
    return proto3.util.equals(EvidenceList, a, b);
  }
}

