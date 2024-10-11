// @generated by protoc-gen-es v1.10.0 with parameter "target=ts"
// @generated from file tendermint/types/params.proto (package tendermint.types, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Duration, Message, proto3, protoInt64 } from "@bufbuild/protobuf";

/**
 * ConsensusParams contains consensus critical parameters that determine the
 * validity of blocks.
 *
 * @generated from message tendermint.types.ConsensusParams
 */
export class ConsensusParams extends Message<ConsensusParams> {
  /**
   * @generated from field: tendermint.types.BlockParams block = 1;
   */
  block?: BlockParams;

  /**
   * @generated from field: tendermint.types.EvidenceParams evidence = 2;
   */
  evidence?: EvidenceParams;

  /**
   * @generated from field: tendermint.types.ValidatorParams validator = 3;
   */
  validator?: ValidatorParams;

  /**
   * @generated from field: tendermint.types.VersionParams version = 4;
   */
  version?: VersionParams;

  constructor(data?: PartialMessage<ConsensusParams>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "tendermint.types.ConsensusParams";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "block", kind: "message", T: BlockParams },
    { no: 2, name: "evidence", kind: "message", T: EvidenceParams },
    { no: 3, name: "validator", kind: "message", T: ValidatorParams },
    { no: 4, name: "version", kind: "message", T: VersionParams },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ConsensusParams {
    return new ConsensusParams().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ConsensusParams {
    return new ConsensusParams().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ConsensusParams {
    return new ConsensusParams().fromJsonString(jsonString, options);
  }

  static equals(a: ConsensusParams | PlainMessage<ConsensusParams> | undefined, b: ConsensusParams | PlainMessage<ConsensusParams> | undefined): boolean {
    return proto3.util.equals(ConsensusParams, a, b);
  }
}

/**
 * BlockParams contains limits on the block size.
 *
 * @generated from message tendermint.types.BlockParams
 */
export class BlockParams extends Message<BlockParams> {
  /**
   * Max block size, in bytes.
   * Note: must be greater than 0
   *
   * @generated from field: int64 max_bytes = 1;
   */
  maxBytes = protoInt64.zero;

  /**
   * Max gas per block.
   * Note: must be greater or equal to -1
   *
   * @generated from field: int64 max_gas = 2;
   */
  maxGas = protoInt64.zero;

  constructor(data?: PartialMessage<BlockParams>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "tendermint.types.BlockParams";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "max_bytes", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 2, name: "max_gas", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): BlockParams {
    return new BlockParams().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): BlockParams {
    return new BlockParams().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): BlockParams {
    return new BlockParams().fromJsonString(jsonString, options);
  }

  static equals(a: BlockParams | PlainMessage<BlockParams> | undefined, b: BlockParams | PlainMessage<BlockParams> | undefined): boolean {
    return proto3.util.equals(BlockParams, a, b);
  }
}

/**
 * EvidenceParams determine how we handle evidence of malfeasance.
 *
 * @generated from message tendermint.types.EvidenceParams
 */
export class EvidenceParams extends Message<EvidenceParams> {
  /**
   * Max age of evidence, in blocks.
   *
   * The basic formula for calculating this is: MaxAgeDuration / {average block
   * time}.
   *
   * @generated from field: int64 max_age_num_blocks = 1;
   */
  maxAgeNumBlocks = protoInt64.zero;

  /**
   * Max age of evidence, in time.
   *
   * It should correspond with an app's "unbonding period" or other similar
   * mechanism for handling [Nothing-At-Stake
   * attacks](https://github.com/ethereum/wiki/wiki/Proof-of-Stake-FAQ#what-is-the-nothing-at-stake-problem-and-how-can-it-be-fixed).
   *
   * @generated from field: google.protobuf.Duration max_age_duration = 2;
   */
  maxAgeDuration?: Duration;

  /**
   * This sets the maximum size of total evidence in bytes that can be committed in a single block.
   * and should fall comfortably under the max block bytes.
   * Default is 1048576 or 1MB
   *
   * @generated from field: int64 max_bytes = 3;
   */
  maxBytes = protoInt64.zero;

  constructor(data?: PartialMessage<EvidenceParams>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "tendermint.types.EvidenceParams";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "max_age_num_blocks", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 2, name: "max_age_duration", kind: "message", T: Duration },
    { no: 3, name: "max_bytes", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EvidenceParams {
    return new EvidenceParams().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EvidenceParams {
    return new EvidenceParams().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EvidenceParams {
    return new EvidenceParams().fromJsonString(jsonString, options);
  }

  static equals(a: EvidenceParams | PlainMessage<EvidenceParams> | undefined, b: EvidenceParams | PlainMessage<EvidenceParams> | undefined): boolean {
    return proto3.util.equals(EvidenceParams, a, b);
  }
}

/**
 * ValidatorParams restrict the public key types validators can use.
 * NOTE: uses ABCI pubkey naming, not Amino names.
 *
 * @generated from message tendermint.types.ValidatorParams
 */
export class ValidatorParams extends Message<ValidatorParams> {
  /**
   * @generated from field: repeated string pub_key_types = 1;
   */
  pubKeyTypes: string[] = [];

  constructor(data?: PartialMessage<ValidatorParams>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "tendermint.types.ValidatorParams";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "pub_key_types", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ValidatorParams {
    return new ValidatorParams().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ValidatorParams {
    return new ValidatorParams().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ValidatorParams {
    return new ValidatorParams().fromJsonString(jsonString, options);
  }

  static equals(a: ValidatorParams | PlainMessage<ValidatorParams> | undefined, b: ValidatorParams | PlainMessage<ValidatorParams> | undefined): boolean {
    return proto3.util.equals(ValidatorParams, a, b);
  }
}

/**
 * VersionParams contains the ABCI application version.
 *
 * @generated from message tendermint.types.VersionParams
 */
export class VersionParams extends Message<VersionParams> {
  /**
   * @generated from field: uint64 app = 1;
   */
  app = protoInt64.zero;

  constructor(data?: PartialMessage<VersionParams>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "tendermint.types.VersionParams";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "app", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): VersionParams {
    return new VersionParams().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): VersionParams {
    return new VersionParams().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): VersionParams {
    return new VersionParams().fromJsonString(jsonString, options);
  }

  static equals(a: VersionParams | PlainMessage<VersionParams> | undefined, b: VersionParams | PlainMessage<VersionParams> | undefined): boolean {
    return proto3.util.equals(VersionParams, a, b);
  }
}

/**
 * HashedParams is a subset of ConsensusParams.
 *
 * It is hashed into the Header.ConsensusHash.
 *
 * @generated from message tendermint.types.HashedParams
 */
export class HashedParams extends Message<HashedParams> {
  /**
   * @generated from field: int64 block_max_bytes = 1;
   */
  blockMaxBytes = protoInt64.zero;

  /**
   * @generated from field: int64 block_max_gas = 2;
   */
  blockMaxGas = protoInt64.zero;

  constructor(data?: PartialMessage<HashedParams>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "tendermint.types.HashedParams";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "block_max_bytes", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 2, name: "block_max_gas", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): HashedParams {
    return new HashedParams().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): HashedParams {
    return new HashedParams().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): HashedParams {
    return new HashedParams().fromJsonString(jsonString, options);
  }

  static equals(a: HashedParams | PlainMessage<HashedParams> | undefined, b: HashedParams | PlainMessage<HashedParams> | undefined): boolean {
    return proto3.util.equals(HashedParams, a, b);
  }
}

