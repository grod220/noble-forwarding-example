// @generated by protoc-gen-es v1.10.0 with parameter "target=ts"
// @generated from file cosmos/orm/query/v1alpha1/query.proto (package cosmos.orm.query.v1alpha1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Any, Duration, Message, proto3, Timestamp } from "@bufbuild/protobuf";
import { PageRequest, PageResponse } from "../../../base/query/v1beta1/pagination_pb.js";

/**
 * GetRequest is the Query/Get request type.
 *
 * @generated from message cosmos.orm.query.v1alpha1.GetRequest
 */
export class GetRequest extends Message<GetRequest> {
  /**
   * message_name is the fully-qualified message name of the ORM table being queried.
   *
   * @generated from field: string message_name = 1;
   */
  messageName = "";

  /**
   * index is the index fields expression used in orm definitions. If it
   * is empty, the table's primary key is assumed. If it is non-empty, it must
   * refer to an unique index.
   *
   * @generated from field: string index = 2;
   */
  index = "";

  /**
   * values are the values of the fields corresponding to the requested index.
   * There must be as many values provided as there are fields in the index and
   * these values must correspond to the index field types.
   *
   * @generated from field: repeated cosmos.orm.query.v1alpha1.IndexValue values = 3;
   */
  values: IndexValue[] = [];

  constructor(data?: PartialMessage<GetRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmos.orm.query.v1alpha1.GetRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "message_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "index", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "values", kind: "message", T: IndexValue, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetRequest {
    return new GetRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetRequest {
    return new GetRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetRequest {
    return new GetRequest().fromJsonString(jsonString, options);
  }

  static equals(a: GetRequest | PlainMessage<GetRequest> | undefined, b: GetRequest | PlainMessage<GetRequest> | undefined): boolean {
    return proto3.util.equals(GetRequest, a, b);
  }
}

/**
 * GetResponse is the Query/Get response type.
 *
 * @generated from message cosmos.orm.query.v1alpha1.GetResponse
 */
export class GetResponse extends Message<GetResponse> {
  /**
   * result is the result of the get query. If no value is found, the gRPC
   * status code NOT_FOUND will be returned.
   *
   * @generated from field: google.protobuf.Any result = 1;
   */
  result?: Any;

  constructor(data?: PartialMessage<GetResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmos.orm.query.v1alpha1.GetResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "result", kind: "message", T: Any },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetResponse {
    return new GetResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetResponse {
    return new GetResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetResponse {
    return new GetResponse().fromJsonString(jsonString, options);
  }

  static equals(a: GetResponse | PlainMessage<GetResponse> | undefined, b: GetResponse | PlainMessage<GetResponse> | undefined): boolean {
    return proto3.util.equals(GetResponse, a, b);
  }
}

/**
 * ListRequest is the Query/List request type.
 *
 * @generated from message cosmos.orm.query.v1alpha1.ListRequest
 */
export class ListRequest extends Message<ListRequest> {
  /**
   * message_name is the fully-qualified message name of the ORM table being queried.
   *
   * @generated from field: string message_name = 1;
   */
  messageName = "";

  /**
   * index is the index fields expression used in orm definitions. If it
   * is empty, the table's primary key is assumed.
   *
   * @generated from field: string index = 2;
   */
  index = "";

  /**
   * query is the query expression corresponding to the provided index. If
   * neither prefix nor range is specified, the query will list all the fields
   * in the index.
   *
   * @generated from oneof cosmos.orm.query.v1alpha1.ListRequest.query
   */
  query: {
    /**
     * prefix defines a prefix query.
     *
     * @generated from field: cosmos.orm.query.v1alpha1.ListRequest.Prefix prefix = 3;
     */
    value: ListRequest_Prefix;
    case: "prefix";
  } | {
    /**
     * range defines a range query.
     *
     * @generated from field: cosmos.orm.query.v1alpha1.ListRequest.Range range = 4;
     */
    value: ListRequest_Range;
    case: "range";
  } | { case: undefined; value?: undefined } = { case: undefined };

  /**
   * pagination is the pagination request.
   *
   * @generated from field: cosmos.base.query.v1beta1.PageRequest pagination = 5;
   */
  pagination?: PageRequest;

  constructor(data?: PartialMessage<ListRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmos.orm.query.v1alpha1.ListRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "message_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "index", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "prefix", kind: "message", T: ListRequest_Prefix, oneof: "query" },
    { no: 4, name: "range", kind: "message", T: ListRequest_Range, oneof: "query" },
    { no: 5, name: "pagination", kind: "message", T: PageRequest },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListRequest {
    return new ListRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListRequest {
    return new ListRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListRequest {
    return new ListRequest().fromJsonString(jsonString, options);
  }

  static equals(a: ListRequest | PlainMessage<ListRequest> | undefined, b: ListRequest | PlainMessage<ListRequest> | undefined): boolean {
    return proto3.util.equals(ListRequest, a, b);
  }
}

/**
 * Prefix specifies the arguments to a prefix query.
 *
 * @generated from message cosmos.orm.query.v1alpha1.ListRequest.Prefix
 */
export class ListRequest_Prefix extends Message<ListRequest_Prefix> {
  /**
   * values specifies the index values for the prefix query.
   * It is valid to special a partial prefix with fewer values than
   * the number of fields in the index.
   *
   * @generated from field: repeated cosmos.orm.query.v1alpha1.IndexValue values = 1;
   */
  values: IndexValue[] = [];

  constructor(data?: PartialMessage<ListRequest_Prefix>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmos.orm.query.v1alpha1.ListRequest.Prefix";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "values", kind: "message", T: IndexValue, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListRequest_Prefix {
    return new ListRequest_Prefix().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListRequest_Prefix {
    return new ListRequest_Prefix().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListRequest_Prefix {
    return new ListRequest_Prefix().fromJsonString(jsonString, options);
  }

  static equals(a: ListRequest_Prefix | PlainMessage<ListRequest_Prefix> | undefined, b: ListRequest_Prefix | PlainMessage<ListRequest_Prefix> | undefined): boolean {
    return proto3.util.equals(ListRequest_Prefix, a, b);
  }
}

/**
 * Range specifies the arguments to a range query.
 *
 * @generated from message cosmos.orm.query.v1alpha1.ListRequest.Range
 */
export class ListRequest_Range extends Message<ListRequest_Range> {
  /**
   * start specifies the starting index values for the range query.
   * It is valid to provide fewer values than the number of fields in the
   * index.
   *
   * @generated from field: repeated cosmos.orm.query.v1alpha1.IndexValue start = 1;
   */
  start: IndexValue[] = [];

  /**
   * end specifies the inclusive ending index values for the range query.
   * It is valid to provide fewer values than the number of fields in the
   * index.
   *
   * @generated from field: repeated cosmos.orm.query.v1alpha1.IndexValue end = 2;
   */
  end: IndexValue[] = [];

  constructor(data?: PartialMessage<ListRequest_Range>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmos.orm.query.v1alpha1.ListRequest.Range";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "start", kind: "message", T: IndexValue, repeated: true },
    { no: 2, name: "end", kind: "message", T: IndexValue, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListRequest_Range {
    return new ListRequest_Range().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListRequest_Range {
    return new ListRequest_Range().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListRequest_Range {
    return new ListRequest_Range().fromJsonString(jsonString, options);
  }

  static equals(a: ListRequest_Range | PlainMessage<ListRequest_Range> | undefined, b: ListRequest_Range | PlainMessage<ListRequest_Range> | undefined): boolean {
    return proto3.util.equals(ListRequest_Range, a, b);
  }
}

/**
 * ListResponse is the Query/List response type.
 *
 * @generated from message cosmos.orm.query.v1alpha1.ListResponse
 */
export class ListResponse extends Message<ListResponse> {
  /**
   * results are the results of the query.
   *
   * @generated from field: repeated google.protobuf.Any results = 1;
   */
  results: Any[] = [];

  /**
   * pagination is the pagination response.
   *
   * @generated from field: cosmos.base.query.v1beta1.PageResponse pagination = 5;
   */
  pagination?: PageResponse;

  constructor(data?: PartialMessage<ListResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmos.orm.query.v1alpha1.ListResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "results", kind: "message", T: Any, repeated: true },
    { no: 5, name: "pagination", kind: "message", T: PageResponse },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListResponse {
    return new ListResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListResponse {
    return new ListResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListResponse {
    return new ListResponse().fromJsonString(jsonString, options);
  }

  static equals(a: ListResponse | PlainMessage<ListResponse> | undefined, b: ListResponse | PlainMessage<ListResponse> | undefined): boolean {
    return proto3.util.equals(ListResponse, a, b);
  }
}

/**
 * IndexValue represents the value of a field in an ORM index expression.
 *
 * @generated from message cosmos.orm.query.v1alpha1.IndexValue
 */
export class IndexValue extends Message<IndexValue> {
  /**
   * value specifies the index value
   *
   * @generated from oneof cosmos.orm.query.v1alpha1.IndexValue.value
   */
  value: {
    /**
     * uint specifies a value for an uint32, fixed32, uint64, or fixed64
     * index field.
     *
     * @generated from field: uint64 uint = 1;
     */
    value: bigint;
    case: "uint";
  } | {
    /**
     * int64 specifies a value for an int32, sfixed32, int64, or sfixed64
     * index field.
     *
     * @generated from field: int64 int = 2;
     */
    value: bigint;
    case: "int";
  } | {
    /**
     * str specifies a value for a string index field.
     *
     * @generated from field: string str = 3;
     */
    value: string;
    case: "str";
  } | {
    /**
     * bytes specifies a value for a bytes index field.
     *
     * @generated from field: bytes bytes = 4;
     */
    value: Uint8Array;
    case: "bytes";
  } | {
    /**
     * enum specifies a value for an enum index field.
     *
     * @generated from field: string enum = 5;
     */
    value: string;
    case: "enum";
  } | {
    /**
     * bool specifies a value for a bool index field.
     *
     * @generated from field: bool bool = 6;
     */
    value: boolean;
    case: "bool";
  } | {
    /**
     * timestamp specifies a value for a timestamp index field.
     *
     * @generated from field: google.protobuf.Timestamp timestamp = 7;
     */
    value: Timestamp;
    case: "timestamp";
  } | {
    /**
     * duration specifies a value for a duration index field.
     *
     * @generated from field: google.protobuf.Duration duration = 8;
     */
    value: Duration;
    case: "duration";
  } | { case: undefined; value?: undefined } = { case: undefined };

  constructor(data?: PartialMessage<IndexValue>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmos.orm.query.v1alpha1.IndexValue";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "uint", kind: "scalar", T: 4 /* ScalarType.UINT64 */, oneof: "value" },
    { no: 2, name: "int", kind: "scalar", T: 3 /* ScalarType.INT64 */, oneof: "value" },
    { no: 3, name: "str", kind: "scalar", T: 9 /* ScalarType.STRING */, oneof: "value" },
    { no: 4, name: "bytes", kind: "scalar", T: 12 /* ScalarType.BYTES */, oneof: "value" },
    { no: 5, name: "enum", kind: "scalar", T: 9 /* ScalarType.STRING */, oneof: "value" },
    { no: 6, name: "bool", kind: "scalar", T: 8 /* ScalarType.BOOL */, oneof: "value" },
    { no: 7, name: "timestamp", kind: "message", T: Timestamp, oneof: "value" },
    { no: 8, name: "duration", kind: "message", T: Duration, oneof: "value" },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): IndexValue {
    return new IndexValue().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): IndexValue {
    return new IndexValue().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): IndexValue {
    return new IndexValue().fromJsonString(jsonString, options);
  }

  static equals(a: IndexValue | PlainMessage<IndexValue> | undefined, b: IndexValue | PlainMessage<IndexValue> | undefined): boolean {
    return proto3.util.equals(IndexValue, a, b);
  }
}

