// @generated by protoc-gen-es v1.10.0 with parameter "target=ts"
// @generated from file tendermint/crypto/keys.proto (package tendermint.crypto, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * PublicKey defines the keys available for use with Validators
 *
 * @generated from message tendermint.crypto.PublicKey
 */
export class PublicKey extends Message<PublicKey> {
  /**
   * @generated from oneof tendermint.crypto.PublicKey.sum
   */
  sum: {
    /**
     * @generated from field: bytes ed25519 = 1;
     */
    value: Uint8Array;
    case: "ed25519";
  } | {
    /**
     * @generated from field: bytes secp256k1 = 2;
     */
    value: Uint8Array;
    case: "secp256k1";
  } | { case: undefined; value?: undefined } = { case: undefined };

  constructor(data?: PartialMessage<PublicKey>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "tendermint.crypto.PublicKey";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "ed25519", kind: "scalar", T: 12 /* ScalarType.BYTES */, oneof: "sum" },
    { no: 2, name: "secp256k1", kind: "scalar", T: 12 /* ScalarType.BYTES */, oneof: "sum" },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PublicKey {
    return new PublicKey().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PublicKey {
    return new PublicKey().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PublicKey {
    return new PublicKey().fromJsonString(jsonString, options);
  }

  static equals(a: PublicKey | PlainMessage<PublicKey> | undefined, b: PublicKey | PlainMessage<PublicKey> | undefined): boolean {
    return proto3.util.equals(PublicKey, a, b);
  }
}

