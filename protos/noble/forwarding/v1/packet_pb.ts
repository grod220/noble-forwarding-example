// @generated by protoc-gen-es v1.10.0 with parameter "target=ts"
// @generated from file noble/forwarding/v1/packet.proto (package noble.forwarding.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * @generated from message noble.forwarding.v1.RegisterAccountData
 */
export class RegisterAccountData extends Message<RegisterAccountData> {
  /**
   * @generated from field: string recipient = 1;
   */
  recipient = "";

  /**
   * @generated from field: string channel = 2;
   */
  channel = "";

  constructor(data?: PartialMessage<RegisterAccountData>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "noble.forwarding.v1.RegisterAccountData";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "recipient", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "channel", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RegisterAccountData {
    return new RegisterAccountData().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RegisterAccountData {
    return new RegisterAccountData().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RegisterAccountData {
    return new RegisterAccountData().fromJsonString(jsonString, options);
  }

  static equals(a: RegisterAccountData | PlainMessage<RegisterAccountData> | undefined, b: RegisterAccountData | PlainMessage<RegisterAccountData> | undefined): boolean {
    return proto3.util.equals(RegisterAccountData, a, b);
  }
}

/**
 * @generated from message noble.forwarding.v1.RegisterAccountMemo
 */
export class RegisterAccountMemo extends Message<RegisterAccountMemo> {
  /**
   * @generated from field: noble.forwarding.v1.RegisterAccountMemo.RegisterAccountDataWrapper noble = 1;
   */
  noble?: RegisterAccountMemo_RegisterAccountDataWrapper;

  constructor(data?: PartialMessage<RegisterAccountMemo>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "noble.forwarding.v1.RegisterAccountMemo";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "noble", kind: "message", T: RegisterAccountMemo_RegisterAccountDataWrapper },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RegisterAccountMemo {
    return new RegisterAccountMemo().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RegisterAccountMemo {
    return new RegisterAccountMemo().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RegisterAccountMemo {
    return new RegisterAccountMemo().fromJsonString(jsonString, options);
  }

  static equals(a: RegisterAccountMemo | PlainMessage<RegisterAccountMemo> | undefined, b: RegisterAccountMemo | PlainMessage<RegisterAccountMemo> | undefined): boolean {
    return proto3.util.equals(RegisterAccountMemo, a, b);
  }
}

/**
 * @generated from message noble.forwarding.v1.RegisterAccountMemo.RegisterAccountDataWrapper
 */
export class RegisterAccountMemo_RegisterAccountDataWrapper extends Message<RegisterAccountMemo_RegisterAccountDataWrapper> {
  /**
   * @generated from field: noble.forwarding.v1.RegisterAccountData forwarding = 1;
   */
  forwarding?: RegisterAccountData;

  constructor(data?: PartialMessage<RegisterAccountMemo_RegisterAccountDataWrapper>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "noble.forwarding.v1.RegisterAccountMemo.RegisterAccountDataWrapper";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "forwarding", kind: "message", T: RegisterAccountData },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RegisterAccountMemo_RegisterAccountDataWrapper {
    return new RegisterAccountMemo_RegisterAccountDataWrapper().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RegisterAccountMemo_RegisterAccountDataWrapper {
    return new RegisterAccountMemo_RegisterAccountDataWrapper().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RegisterAccountMemo_RegisterAccountDataWrapper {
    return new RegisterAccountMemo_RegisterAccountDataWrapper().fromJsonString(jsonString, options);
  }

  static equals(a: RegisterAccountMemo_RegisterAccountDataWrapper | PlainMessage<RegisterAccountMemo_RegisterAccountDataWrapper> | undefined, b: RegisterAccountMemo_RegisterAccountDataWrapper | PlainMessage<RegisterAccountMemo_RegisterAccountDataWrapper> | undefined): boolean {
    return proto3.util.equals(RegisterAccountMemo_RegisterAccountDataWrapper, a, b);
  }
}
