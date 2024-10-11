// @generated by protoc-gen-es v1.10.0 with parameter "target=ts"
// @generated from file cosmos/upgrade/v1beta1/upgrade.proto (package cosmos.upgrade.v1beta1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Any, Message, proto3, protoInt64, Timestamp } from "@bufbuild/protobuf";

/**
 * Plan specifies information about a planned upgrade and when it should occur.
 *
 * @generated from message cosmos.upgrade.v1beta1.Plan
 */
export class Plan extends Message<Plan> {
  /**
   * Sets the name for the upgrade. This name will be used by the upgraded
   * version of the software to apply any special "on-upgrade" commands during
   * the first BeginBlock method after the upgrade is applied. It is also used
   * to detect whether a software version can handle a given upgrade. If no
   * upgrade handler with this name has been set in the software, it will be
   * assumed that the software is out-of-date when the upgrade Time or Height is
   * reached and the software will exit.
   *
   * @generated from field: string name = 1;
   */
  name = "";

  /**
   * Deprecated: Time based upgrades have been deprecated. Time based upgrade logic
   * has been removed from the SDK.
   * If this field is not empty, an error will be thrown.
   *
   * @generated from field: google.protobuf.Timestamp time = 2 [deprecated = true];
   * @deprecated
   */
  time?: Timestamp;

  /**
   * The height at which the upgrade must be performed.
   *
   * @generated from field: int64 height = 3;
   */
  height = protoInt64.zero;

  /**
   * Any application specific upgrade info to be included on-chain
   * such as a git commit that validators could automatically upgrade to
   *
   * @generated from field: string info = 4;
   */
  info = "";

  /**
   * Deprecated: UpgradedClientState field has been deprecated. IBC upgrade logic has been
   * moved to the IBC module in the sub module 02-client.
   * If this field is not empty, an error will be thrown.
   *
   * @generated from field: google.protobuf.Any upgraded_client_state = 5 [deprecated = true];
   * @deprecated
   */
  upgradedClientState?: Any;

  constructor(data?: PartialMessage<Plan>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmos.upgrade.v1beta1.Plan";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "time", kind: "message", T: Timestamp },
    { no: 3, name: "height", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 4, name: "info", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "upgraded_client_state", kind: "message", T: Any },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Plan {
    return new Plan().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Plan {
    return new Plan().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Plan {
    return new Plan().fromJsonString(jsonString, options);
  }

  static equals(a: Plan | PlainMessage<Plan> | undefined, b: Plan | PlainMessage<Plan> | undefined): boolean {
    return proto3.util.equals(Plan, a, b);
  }
}

/**
 * SoftwareUpgradeProposal is a gov Content type for initiating a software
 * upgrade.
 * Deprecated: This legacy proposal is deprecated in favor of Msg-based gov
 * proposals, see MsgSoftwareUpgrade.
 *
 * @generated from message cosmos.upgrade.v1beta1.SoftwareUpgradeProposal
 * @deprecated
 */
export class SoftwareUpgradeProposal extends Message<SoftwareUpgradeProposal> {
  /**
   * title of the proposal
   *
   * @generated from field: string title = 1;
   */
  title = "";

  /**
   * description of the proposal
   *
   * @generated from field: string description = 2;
   */
  description = "";

  /**
   * plan of the proposal
   *
   * @generated from field: cosmos.upgrade.v1beta1.Plan plan = 3;
   */
  plan?: Plan;

  constructor(data?: PartialMessage<SoftwareUpgradeProposal>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmos.upgrade.v1beta1.SoftwareUpgradeProposal";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "title", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "plan", kind: "message", T: Plan },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SoftwareUpgradeProposal {
    return new SoftwareUpgradeProposal().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SoftwareUpgradeProposal {
    return new SoftwareUpgradeProposal().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SoftwareUpgradeProposal {
    return new SoftwareUpgradeProposal().fromJsonString(jsonString, options);
  }

  static equals(a: SoftwareUpgradeProposal | PlainMessage<SoftwareUpgradeProposal> | undefined, b: SoftwareUpgradeProposal | PlainMessage<SoftwareUpgradeProposal> | undefined): boolean {
    return proto3.util.equals(SoftwareUpgradeProposal, a, b);
  }
}

/**
 * CancelSoftwareUpgradeProposal is a gov Content type for cancelling a software
 * upgrade.
 * Deprecated: This legacy proposal is deprecated in favor of Msg-based gov
 * proposals, see MsgCancelUpgrade.
 *
 * @generated from message cosmos.upgrade.v1beta1.CancelSoftwareUpgradeProposal
 * @deprecated
 */
export class CancelSoftwareUpgradeProposal extends Message<CancelSoftwareUpgradeProposal> {
  /**
   * title of the proposal
   *
   * @generated from field: string title = 1;
   */
  title = "";

  /**
   * description of the proposal
   *
   * @generated from field: string description = 2;
   */
  description = "";

  constructor(data?: PartialMessage<CancelSoftwareUpgradeProposal>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmos.upgrade.v1beta1.CancelSoftwareUpgradeProposal";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "title", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CancelSoftwareUpgradeProposal {
    return new CancelSoftwareUpgradeProposal().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CancelSoftwareUpgradeProposal {
    return new CancelSoftwareUpgradeProposal().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CancelSoftwareUpgradeProposal {
    return new CancelSoftwareUpgradeProposal().fromJsonString(jsonString, options);
  }

  static equals(a: CancelSoftwareUpgradeProposal | PlainMessage<CancelSoftwareUpgradeProposal> | undefined, b: CancelSoftwareUpgradeProposal | PlainMessage<CancelSoftwareUpgradeProposal> | undefined): boolean {
    return proto3.util.equals(CancelSoftwareUpgradeProposal, a, b);
  }
}

/**
 * ModuleVersion specifies a module and its consensus version.
 *
 * Since: cosmos-sdk 0.43
 *
 * @generated from message cosmos.upgrade.v1beta1.ModuleVersion
 */
export class ModuleVersion extends Message<ModuleVersion> {
  /**
   * name of the app module
   *
   * @generated from field: string name = 1;
   */
  name = "";

  /**
   * consensus version of the app module
   *
   * @generated from field: uint64 version = 2;
   */
  version = protoInt64.zero;

  constructor(data?: PartialMessage<ModuleVersion>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmos.upgrade.v1beta1.ModuleVersion";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "version", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ModuleVersion {
    return new ModuleVersion().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ModuleVersion {
    return new ModuleVersion().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ModuleVersion {
    return new ModuleVersion().fromJsonString(jsonString, options);
  }

  static equals(a: ModuleVersion | PlainMessage<ModuleVersion> | undefined, b: ModuleVersion | PlainMessage<ModuleVersion> | undefined): boolean {
    return proto3.util.equals(ModuleVersion, a, b);
  }
}

