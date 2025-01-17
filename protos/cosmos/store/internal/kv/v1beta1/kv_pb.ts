// @generated by protoc-gen-es v1.10.0 with parameter "target=ts"
// @generated from file cosmos/store/internal/kv/v1beta1/kv.proto (package cosmos.store.internal.kv.v1beta1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * Pairs defines a repeated slice of Pair objects.
 *
 * @generated from message cosmos.store.internal.kv.v1beta1.Pairs
 */
export class Pairs extends Message<Pairs> {
  /**
   * @generated from field: repeated cosmos.store.internal.kv.v1beta1.Pair pairs = 1;
   */
  pairs: Pair[] = [];

  constructor(data?: PartialMessage<Pairs>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmos.store.internal.kv.v1beta1.Pairs";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "pairs", kind: "message", T: Pair, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Pairs {
    return new Pairs().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Pairs {
    return new Pairs().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Pairs {
    return new Pairs().fromJsonString(jsonString, options);
  }

  static equals(a: Pairs | PlainMessage<Pairs> | undefined, b: Pairs | PlainMessage<Pairs> | undefined): boolean {
    return proto3.util.equals(Pairs, a, b);
  }
}

/**
 * Pair defines a key/value bytes tuple.
 *
 * @generated from message cosmos.store.internal.kv.v1beta1.Pair
 */
export class Pair extends Message<Pair> {
  /**
   * @generated from field: bytes key = 1;
   */
  key = new Uint8Array(0);

  /**
   * @generated from field: bytes value = 2;
   */
  value = new Uint8Array(0);

  constructor(data?: PartialMessage<Pair>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmos.store.internal.kv.v1beta1.Pair";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "key", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 2, name: "value", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Pair {
    return new Pair().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Pair {
    return new Pair().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Pair {
    return new Pair().fromJsonString(jsonString, options);
  }

  static equals(a: Pair | PlainMessage<Pair> | undefined, b: Pair | PlainMessage<Pair> | undefined): boolean {
    return proto3.util.equals(Pair, a, b);
  }
}

