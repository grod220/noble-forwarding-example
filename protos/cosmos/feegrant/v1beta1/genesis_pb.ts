// Since: cosmos-sdk 0.43

// @generated by protoc-gen-es v1.10.0 with parameter "target=ts"
// @generated from file cosmos/feegrant/v1beta1/genesis.proto (package cosmos.feegrant.v1beta1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { Grant } from "./feegrant_pb.js";

/**
 * GenesisState contains a set of fee allowances, persisted from the store
 *
 * @generated from message cosmos.feegrant.v1beta1.GenesisState
 */
export class GenesisState extends Message<GenesisState> {
  /**
   * @generated from field: repeated cosmos.feegrant.v1beta1.Grant allowances = 1;
   */
  allowances: Grant[] = [];

  constructor(data?: PartialMessage<GenesisState>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmos.feegrant.v1beta1.GenesisState";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "allowances", kind: "message", T: Grant, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GenesisState {
    return new GenesisState().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GenesisState {
    return new GenesisState().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GenesisState {
    return new GenesisState().fromJsonString(jsonString, options);
  }

  static equals(a: GenesisState | PlainMessage<GenesisState> | undefined, b: GenesisState | PlainMessage<GenesisState> | undefined): boolean {
    return proto3.util.equals(GenesisState, a, b);
  }
}

