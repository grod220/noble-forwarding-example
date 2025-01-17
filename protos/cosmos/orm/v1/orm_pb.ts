// @generated by protoc-gen-es v1.10.0 with parameter "target=ts"
// @generated from file cosmos/orm/v1/orm.proto (package cosmos.orm.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, MessageOptions, proto3 } from "@bufbuild/protobuf";

/**
 * TableDescriptor describes an ORM table.
 *
 * @generated from message cosmos.orm.v1.TableDescriptor
 */
export class TableDescriptor extends Message<TableDescriptor> {
  /**
   * primary_key defines the primary key for the table.
   *
   * @generated from field: cosmos.orm.v1.PrimaryKeyDescriptor primary_key = 1;
   */
  primaryKey?: PrimaryKeyDescriptor;

  /**
   * index defines one or more secondary indexes.
   *
   * @generated from field: repeated cosmos.orm.v1.SecondaryIndexDescriptor index = 2;
   */
  index: SecondaryIndexDescriptor[] = [];

  /**
   * id is a non-zero integer ID that must be unique within the
   * tables and singletons in this file. It may be deprecated in the future when this
   * can be auto-generated.
   *
   * @generated from field: uint32 id = 3;
   */
  id = 0;

  constructor(data?: PartialMessage<TableDescriptor>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmos.orm.v1.TableDescriptor";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "primary_key", kind: "message", T: PrimaryKeyDescriptor },
    { no: 2, name: "index", kind: "message", T: SecondaryIndexDescriptor, repeated: true },
    { no: 3, name: "id", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TableDescriptor {
    return new TableDescriptor().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TableDescriptor {
    return new TableDescriptor().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TableDescriptor {
    return new TableDescriptor().fromJsonString(jsonString, options);
  }

  static equals(a: TableDescriptor | PlainMessage<TableDescriptor> | undefined, b: TableDescriptor | PlainMessage<TableDescriptor> | undefined): boolean {
    return proto3.util.equals(TableDescriptor, a, b);
  }
}

/**
 * PrimaryKeyDescriptor describes a table primary key.
 *
 * @generated from message cosmos.orm.v1.PrimaryKeyDescriptor
 */
export class PrimaryKeyDescriptor extends Message<PrimaryKeyDescriptor> {
  /**
   * fields is a comma-separated list of fields in the primary key. Spaces are
   * not allowed. Supported field types, their encodings, and any applicable constraints
   * are described below.
   *   - uint32 are encoded as 2,3,4 or 5 bytes using a compact encoding that
   *     is suitable for sorted iteration (not varint encoding). This type is
   *     well-suited for small integers.
   *   - uint64 are encoded as 2,4,6 or 9 bytes using a compact encoding that
   *     is suitable for sorted iteration (not varint encoding). This type is
   *     well-suited for small integers such as auto-incrementing sequences.
   *   - fixed32, fixed64 are encoded as big-endian fixed width bytes and support
   *   sorted iteration. These types are well-suited for encoding fixed with
   *   decimals as integers.
   *   - string's are encoded as raw bytes in terminal key segments and null-terminated
   *   in non-terminal segments. Null characters are thus forbidden in strings.
   *   string fields support sorted iteration.
   *   - bytes are encoded as raw bytes in terminal segments and length-prefixed
   *   with a 32-bit unsigned varint in non-terminal segments.
   *   - int32, sint32, int64, sint64, sfixed32, sfixed64 are encoded as fixed width bytes with
   *   an encoding that enables sorted iteration.
   *   - google.protobuf.Timestamp is encoded such that values with only seconds occupy 6 bytes,
   *   values including nanos occupy 9 bytes, and nil values occupy 1 byte. When iterating, nil
   *   values will always be ordered last. Seconds and nanos values must conform to the officially
   *   specified ranges of 0001-01-01T00:00:00Z to 9999-12-31T23:59:59Z and 0 to 999,999,999 respectively.
   *   - google.protobuf.Duration is encoded as 12 bytes using an encoding that enables sorted iteration.
   *   - enum fields are encoded using varint encoding and do not support sorted
   *   iteration.
   *   - bool fields are encoded as a single byte 0 or 1.
   *
   * All other fields types are unsupported in keys including repeated and
   * oneof fields.
   *
   * Primary keys are prefixed by the varint encoded table id and the byte 0x0
   * plus any additional prefix specified by the schema.
   *
   * @generated from field: string fields = 1;
   */
  fields = "";

  /**
   * auto_increment specifies that the primary key is generated by an
   * auto-incrementing integer. If this is set to true fields must only
   * contain one field of that is of type uint64.
   *
   * @generated from field: bool auto_increment = 2;
   */
  autoIncrement = false;

  constructor(data?: PartialMessage<PrimaryKeyDescriptor>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmos.orm.v1.PrimaryKeyDescriptor";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "fields", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "auto_increment", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PrimaryKeyDescriptor {
    return new PrimaryKeyDescriptor().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PrimaryKeyDescriptor {
    return new PrimaryKeyDescriptor().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PrimaryKeyDescriptor {
    return new PrimaryKeyDescriptor().fromJsonString(jsonString, options);
  }

  static equals(a: PrimaryKeyDescriptor | PlainMessage<PrimaryKeyDescriptor> | undefined, b: PrimaryKeyDescriptor | PlainMessage<PrimaryKeyDescriptor> | undefined): boolean {
    return proto3.util.equals(PrimaryKeyDescriptor, a, b);
  }
}

/**
 * PrimaryKeyDescriptor describes a table secondary index.
 *
 * @generated from message cosmos.orm.v1.SecondaryIndexDescriptor
 */
export class SecondaryIndexDescriptor extends Message<SecondaryIndexDescriptor> {
  /**
   * fields is a comma-separated list of fields in the index. The supported
   * field types are the same as those for PrimaryKeyDescriptor.fields.
   * Index keys are prefixed by the varint encoded table id and the varint
   * encoded index id plus any additional prefix specified by the schema.
   *
   * In addition the field segments, non-unique index keys are suffixed with
   * any additional primary key fields not present in the index fields so that the
   * primary key can be reconstructed. Unique indexes instead of being suffixed
   * store the remaining primary key fields in the value..
   *
   * @generated from field: string fields = 1;
   */
  fields = "";

  /**
   * id is a non-zero integer ID that must be unique within the indexes for this
   * table and less than 32768. It may be deprecated in the future when this can
   * be auto-generated.
   *
   * @generated from field: uint32 id = 2;
   */
  id = 0;

  /**
   * unique specifies that this an unique index.
   *
   * @generated from field: bool unique = 3;
   */
  unique = false;

  constructor(data?: PartialMessage<SecondaryIndexDescriptor>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmos.orm.v1.SecondaryIndexDescriptor";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "fields", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "id", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 3, name: "unique", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SecondaryIndexDescriptor {
    return new SecondaryIndexDescriptor().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SecondaryIndexDescriptor {
    return new SecondaryIndexDescriptor().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SecondaryIndexDescriptor {
    return new SecondaryIndexDescriptor().fromJsonString(jsonString, options);
  }

  static equals(a: SecondaryIndexDescriptor | PlainMessage<SecondaryIndexDescriptor> | undefined, b: SecondaryIndexDescriptor | PlainMessage<SecondaryIndexDescriptor> | undefined): boolean {
    return proto3.util.equals(SecondaryIndexDescriptor, a, b);
  }
}

/**
 * TableDescriptor describes an ORM singleton table which has at most one instance.
 *
 * @generated from message cosmos.orm.v1.SingletonDescriptor
 */
export class SingletonDescriptor extends Message<SingletonDescriptor> {
  /**
   * id is a non-zero integer ID that must be unique within the
   * tables and singletons in this file. It may be deprecated in the future when this
   * can be auto-generated.
   *
   * @generated from field: uint32 id = 1;
   */
  id = 0;

  constructor(data?: PartialMessage<SingletonDescriptor>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmos.orm.v1.SingletonDescriptor";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "id", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SingletonDescriptor {
    return new SingletonDescriptor().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SingletonDescriptor {
    return new SingletonDescriptor().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SingletonDescriptor {
    return new SingletonDescriptor().fromJsonString(jsonString, options);
  }

  static equals(a: SingletonDescriptor | PlainMessage<SingletonDescriptor> | undefined, b: SingletonDescriptor | PlainMessage<SingletonDescriptor> | undefined): boolean {
    return proto3.util.equals(SingletonDescriptor, a, b);
  }
}

/**
 * table specifies that this message will be used as an ORM table. It cannot
 * be used together with the singleton option.
 *
 * @generated from extension: cosmos.orm.v1.TableDescriptor table = 104503790;
 */
export const table = proto3.makeExtension<MessageOptions, TableDescriptor>(
  "cosmos.orm.v1.table", 
  MessageOptions, 
  () => ({ no: 104503790, kind: "message", T: TableDescriptor }),
);

/**
 * singleton specifies that this message will be used as an ORM singleton. It cannot
 * be used together with the table option.
 *
 * @generated from extension: cosmos.orm.v1.SingletonDescriptor singleton = 104503791;
 */
export const singleton = proto3.makeExtension<MessageOptions, SingletonDescriptor>(
  "cosmos.orm.v1.singleton", 
  MessageOptions, 
  () => ({ no: 104503791, kind: "message", T: SingletonDescriptor }),
);

