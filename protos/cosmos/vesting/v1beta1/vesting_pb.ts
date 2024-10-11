// @generated by protoc-gen-es v1.10.0 with parameter "target=ts"
// @generated from file cosmos/vesting/v1beta1/vesting.proto (package cosmos.vesting.v1beta1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, protoInt64 } from "@bufbuild/protobuf";
import { BaseAccount } from "../../auth/v1beta1/auth_pb.js";
import { Coin } from "../../base/v1beta1/coin_pb.js";

/**
 * BaseVestingAccount implements the VestingAccount interface. It contains all
 * the necessary fields needed for any vesting account implementation.
 *
 * @generated from message cosmos.vesting.v1beta1.BaseVestingAccount
 */
export class BaseVestingAccount extends Message<BaseVestingAccount> {
  /**
   * @generated from field: cosmos.auth.v1beta1.BaseAccount base_account = 1;
   */
  baseAccount?: BaseAccount;

  /**
   * @generated from field: repeated cosmos.base.v1beta1.Coin original_vesting = 2;
   */
  originalVesting: Coin[] = [];

  /**
   * @generated from field: repeated cosmos.base.v1beta1.Coin delegated_free = 3;
   */
  delegatedFree: Coin[] = [];

  /**
   * @generated from field: repeated cosmos.base.v1beta1.Coin delegated_vesting = 4;
   */
  delegatedVesting: Coin[] = [];

  /**
   * Vesting end time, as unix timestamp (in seconds).
   *
   * @generated from field: int64 end_time = 5;
   */
  endTime = protoInt64.zero;

  constructor(data?: PartialMessage<BaseVestingAccount>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmos.vesting.v1beta1.BaseVestingAccount";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "base_account", kind: "message", T: BaseAccount },
    { no: 2, name: "original_vesting", kind: "message", T: Coin, repeated: true },
    { no: 3, name: "delegated_free", kind: "message", T: Coin, repeated: true },
    { no: 4, name: "delegated_vesting", kind: "message", T: Coin, repeated: true },
    { no: 5, name: "end_time", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): BaseVestingAccount {
    return new BaseVestingAccount().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): BaseVestingAccount {
    return new BaseVestingAccount().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): BaseVestingAccount {
    return new BaseVestingAccount().fromJsonString(jsonString, options);
  }

  static equals(a: BaseVestingAccount | PlainMessage<BaseVestingAccount> | undefined, b: BaseVestingAccount | PlainMessage<BaseVestingAccount> | undefined): boolean {
    return proto3.util.equals(BaseVestingAccount, a, b);
  }
}

/**
 * ContinuousVestingAccount implements the VestingAccount interface. It
 * continuously vests by unlocking coins linearly with respect to time.
 *
 * @generated from message cosmos.vesting.v1beta1.ContinuousVestingAccount
 */
export class ContinuousVestingAccount extends Message<ContinuousVestingAccount> {
  /**
   * @generated from field: cosmos.vesting.v1beta1.BaseVestingAccount base_vesting_account = 1;
   */
  baseVestingAccount?: BaseVestingAccount;

  /**
   * Vesting start time, as unix timestamp (in seconds).
   *
   * @generated from field: int64 start_time = 2;
   */
  startTime = protoInt64.zero;

  constructor(data?: PartialMessage<ContinuousVestingAccount>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmos.vesting.v1beta1.ContinuousVestingAccount";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "base_vesting_account", kind: "message", T: BaseVestingAccount },
    { no: 2, name: "start_time", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ContinuousVestingAccount {
    return new ContinuousVestingAccount().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ContinuousVestingAccount {
    return new ContinuousVestingAccount().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ContinuousVestingAccount {
    return new ContinuousVestingAccount().fromJsonString(jsonString, options);
  }

  static equals(a: ContinuousVestingAccount | PlainMessage<ContinuousVestingAccount> | undefined, b: ContinuousVestingAccount | PlainMessage<ContinuousVestingAccount> | undefined): boolean {
    return proto3.util.equals(ContinuousVestingAccount, a, b);
  }
}

/**
 * DelayedVestingAccount implements the VestingAccount interface. It vests all
 * coins after a specific time, but non prior. In other words, it keeps them
 * locked until a specified time.
 *
 * @generated from message cosmos.vesting.v1beta1.DelayedVestingAccount
 */
export class DelayedVestingAccount extends Message<DelayedVestingAccount> {
  /**
   * @generated from field: cosmos.vesting.v1beta1.BaseVestingAccount base_vesting_account = 1;
   */
  baseVestingAccount?: BaseVestingAccount;

  constructor(data?: PartialMessage<DelayedVestingAccount>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmos.vesting.v1beta1.DelayedVestingAccount";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "base_vesting_account", kind: "message", T: BaseVestingAccount },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DelayedVestingAccount {
    return new DelayedVestingAccount().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DelayedVestingAccount {
    return new DelayedVestingAccount().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DelayedVestingAccount {
    return new DelayedVestingAccount().fromJsonString(jsonString, options);
  }

  static equals(a: DelayedVestingAccount | PlainMessage<DelayedVestingAccount> | undefined, b: DelayedVestingAccount | PlainMessage<DelayedVestingAccount> | undefined): boolean {
    return proto3.util.equals(DelayedVestingAccount, a, b);
  }
}

/**
 * Period defines a length of time and amount of coins that will vest.
 *
 * @generated from message cosmos.vesting.v1beta1.Period
 */
export class Period extends Message<Period> {
  /**
   * Period duration in seconds.
   *
   * @generated from field: int64 length = 1;
   */
  length = protoInt64.zero;

  /**
   * @generated from field: repeated cosmos.base.v1beta1.Coin amount = 2;
   */
  amount: Coin[] = [];

  constructor(data?: PartialMessage<Period>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmos.vesting.v1beta1.Period";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "length", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 2, name: "amount", kind: "message", T: Coin, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Period {
    return new Period().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Period {
    return new Period().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Period {
    return new Period().fromJsonString(jsonString, options);
  }

  static equals(a: Period | PlainMessage<Period> | undefined, b: Period | PlainMessage<Period> | undefined): boolean {
    return proto3.util.equals(Period, a, b);
  }
}

/**
 * PeriodicVestingAccount implements the VestingAccount interface. It
 * periodically vests by unlocking coins during each specified period.
 *
 * @generated from message cosmos.vesting.v1beta1.PeriodicVestingAccount
 */
export class PeriodicVestingAccount extends Message<PeriodicVestingAccount> {
  /**
   * @generated from field: cosmos.vesting.v1beta1.BaseVestingAccount base_vesting_account = 1;
   */
  baseVestingAccount?: BaseVestingAccount;

  /**
   * @generated from field: int64 start_time = 2;
   */
  startTime = protoInt64.zero;

  /**
   * @generated from field: repeated cosmos.vesting.v1beta1.Period vesting_periods = 3;
   */
  vestingPeriods: Period[] = [];

  constructor(data?: PartialMessage<PeriodicVestingAccount>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmos.vesting.v1beta1.PeriodicVestingAccount";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "base_vesting_account", kind: "message", T: BaseVestingAccount },
    { no: 2, name: "start_time", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 3, name: "vesting_periods", kind: "message", T: Period, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PeriodicVestingAccount {
    return new PeriodicVestingAccount().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PeriodicVestingAccount {
    return new PeriodicVestingAccount().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PeriodicVestingAccount {
    return new PeriodicVestingAccount().fromJsonString(jsonString, options);
  }

  static equals(a: PeriodicVestingAccount | PlainMessage<PeriodicVestingAccount> | undefined, b: PeriodicVestingAccount | PlainMessage<PeriodicVestingAccount> | undefined): boolean {
    return proto3.util.equals(PeriodicVestingAccount, a, b);
  }
}

/**
 * PermanentLockedAccount implements the VestingAccount interface. It does
 * not ever release coins, locking them indefinitely. Coins in this account can
 * still be used for delegating and for governance votes even while locked.
 *
 * Since: cosmos-sdk 0.43
 *
 * @generated from message cosmos.vesting.v1beta1.PermanentLockedAccount
 */
export class PermanentLockedAccount extends Message<PermanentLockedAccount> {
  /**
   * @generated from field: cosmos.vesting.v1beta1.BaseVestingAccount base_vesting_account = 1;
   */
  baseVestingAccount?: BaseVestingAccount;

  constructor(data?: PartialMessage<PermanentLockedAccount>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmos.vesting.v1beta1.PermanentLockedAccount";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "base_vesting_account", kind: "message", T: BaseVestingAccount },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PermanentLockedAccount {
    return new PermanentLockedAccount().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PermanentLockedAccount {
    return new PermanentLockedAccount().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PermanentLockedAccount {
    return new PermanentLockedAccount().fromJsonString(jsonString, options);
  }

  static equals(a: PermanentLockedAccount | PlainMessage<PermanentLockedAccount> | undefined, b: PermanentLockedAccount | PlainMessage<PermanentLockedAccount> | undefined): boolean {
    return proto3.util.equals(PermanentLockedAccount, a, b);
  }
}

