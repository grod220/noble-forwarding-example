// @generated by protoc-gen-es v1.10.0 with parameter "target=ts"
// @generated from file cosmos/params/v1beta1/params.proto (package cosmos.params.v1beta1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * ParameterChangeProposal defines a proposal to change one or more parameters.
 *
 * @generated from message cosmos.params.v1beta1.ParameterChangeProposal
 */
export class ParameterChangeProposal extends Message<ParameterChangeProposal> {
  /**
   * @generated from field: string title = 1;
   */
  title = "";

  /**
   * @generated from field: string description = 2;
   */
  description = "";

  /**
   * @generated from field: repeated cosmos.params.v1beta1.ParamChange changes = 3;
   */
  changes: ParamChange[] = [];

  constructor(data?: PartialMessage<ParameterChangeProposal>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmos.params.v1beta1.ParameterChangeProposal";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "title", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "changes", kind: "message", T: ParamChange, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ParameterChangeProposal {
    return new ParameterChangeProposal().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ParameterChangeProposal {
    return new ParameterChangeProposal().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ParameterChangeProposal {
    return new ParameterChangeProposal().fromJsonString(jsonString, options);
  }

  static equals(a: ParameterChangeProposal | PlainMessage<ParameterChangeProposal> | undefined, b: ParameterChangeProposal | PlainMessage<ParameterChangeProposal> | undefined): boolean {
    return proto3.util.equals(ParameterChangeProposal, a, b);
  }
}

/**
 * ParamChange defines an individual parameter change, for use in
 * ParameterChangeProposal.
 *
 * @generated from message cosmos.params.v1beta1.ParamChange
 */
export class ParamChange extends Message<ParamChange> {
  /**
   * @generated from field: string subspace = 1;
   */
  subspace = "";

  /**
   * @generated from field: string key = 2;
   */
  key = "";

  /**
   * @generated from field: string value = 3;
   */
  value = "";

  constructor(data?: PartialMessage<ParamChange>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmos.params.v1beta1.ParamChange";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "subspace", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "key", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "value", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ParamChange {
    return new ParamChange().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ParamChange {
    return new ParamChange().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ParamChange {
    return new ParamChange().fromJsonString(jsonString, options);
  }

  static equals(a: ParamChange | PlainMessage<ParamChange> | undefined, b: ParamChange | PlainMessage<ParamChange> | undefined): boolean {
    return proto3.util.equals(ParamChange, a, b);
  }
}

