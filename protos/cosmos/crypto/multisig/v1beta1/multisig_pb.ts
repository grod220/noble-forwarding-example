// @generated by protoc-gen-es v1.10.0 with parameter "target=ts"
// @generated from file cosmos/crypto/multisig/v1beta1/multisig.proto (package cosmos.crypto.multisig.v1beta1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * MultiSignature wraps the signatures from a multisig.LegacyAminoPubKey.
 * See cosmos.tx.v1betata1.ModeInfo.Multi for how to specify which signers
 * signed and with which modes.
 *
 * @generated from message cosmos.crypto.multisig.v1beta1.MultiSignature
 */
export class MultiSignature extends Message<MultiSignature> {
  /**
   * @generated from field: repeated bytes signatures = 1;
   */
  signatures: Uint8Array[] = [];

  constructor(data?: PartialMessage<MultiSignature>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmos.crypto.multisig.v1beta1.MultiSignature";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "signatures", kind: "scalar", T: 12 /* ScalarType.BYTES */, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MultiSignature {
    return new MultiSignature().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MultiSignature {
    return new MultiSignature().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MultiSignature {
    return new MultiSignature().fromJsonString(jsonString, options);
  }

  static equals(a: MultiSignature | PlainMessage<MultiSignature> | undefined, b: MultiSignature | PlainMessage<MultiSignature> | undefined): boolean {
    return proto3.util.equals(MultiSignature, a, b);
  }
}

/**
 * CompactBitArray is an implementation of a space efficient bit array.
 * This is used to ensure that the encoded data takes up a minimal amount of
 * space after proto encoding.
 * This is not thread safe, and is not intended for concurrent usage.
 *
 * @generated from message cosmos.crypto.multisig.v1beta1.CompactBitArray
 */
export class CompactBitArray extends Message<CompactBitArray> {
  /**
   * @generated from field: uint32 extra_bits_stored = 1;
   */
  extraBitsStored = 0;

  /**
   * @generated from field: bytes elems = 2;
   */
  elems = new Uint8Array(0);

  constructor(data?: PartialMessage<CompactBitArray>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmos.crypto.multisig.v1beta1.CompactBitArray";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "extra_bits_stored", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 2, name: "elems", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CompactBitArray {
    return new CompactBitArray().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CompactBitArray {
    return new CompactBitArray().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CompactBitArray {
    return new CompactBitArray().fromJsonString(jsonString, options);
  }

  static equals(a: CompactBitArray | PlainMessage<CompactBitArray> | undefined, b: CompactBitArray | PlainMessage<CompactBitArray> | undefined): boolean {
    return proto3.util.equals(CompactBitArray, a, b);
  }
}

