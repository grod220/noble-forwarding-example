// @generated by protoc-gen-es v1.10.0 with parameter "target=ts"
// @generated from file cosmos/base/abci/v1beta1/abci.proto (package cosmos.base.abci.v1beta1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Any, Message, proto3, protoInt64 } from "@bufbuild/protobuf";
import { Event } from "../../../../tendermint/abci/types_pb.js";
import { Block } from "../../../../tendermint/types/block_pb.js";

/**
 * TxResponse defines a structure containing relevant tx data and metadata. The
 * tags are stringified and the log is JSON decoded.
 *
 * @generated from message cosmos.base.abci.v1beta1.TxResponse
 */
export class TxResponse extends Message<TxResponse> {
  /**
   * The block height
   *
   * @generated from field: int64 height = 1;
   */
  height = protoInt64.zero;

  /**
   * The transaction hash.
   *
   * @generated from field: string txhash = 2;
   */
  txhash = "";

  /**
   * Namespace for the Code
   *
   * @generated from field: string codespace = 3;
   */
  codespace = "";

  /**
   * Response code.
   *
   * @generated from field: uint32 code = 4;
   */
  code = 0;

  /**
   * Result bytes, if any.
   *
   * @generated from field: string data = 5;
   */
  data = "";

  /**
   * The output of the application's logger (raw string). May be
   * non-deterministic.
   *
   * @generated from field: string raw_log = 6;
   */
  rawLog = "";

  /**
   * The output of the application's logger (typed). May be non-deterministic.
   *
   * @generated from field: repeated cosmos.base.abci.v1beta1.ABCIMessageLog logs = 7;
   */
  logs: ABCIMessageLog[] = [];

  /**
   * Additional information. May be non-deterministic.
   *
   * @generated from field: string info = 8;
   */
  info = "";

  /**
   * Amount of gas requested for transaction.
   *
   * @generated from field: int64 gas_wanted = 9;
   */
  gasWanted = protoInt64.zero;

  /**
   * Amount of gas consumed by transaction.
   *
   * @generated from field: int64 gas_used = 10;
   */
  gasUsed = protoInt64.zero;

  /**
   * The request transaction bytes.
   *
   * @generated from field: google.protobuf.Any tx = 11;
   */
  tx?: Any;

  /**
   * Time of the previous block. For heights > 1, it's the weighted median of
   * the timestamps of the valid votes in the block.LastCommit. For height == 1,
   * it's genesis time.
   *
   * @generated from field: string timestamp = 12;
   */
  timestamp = "";

  /**
   * Events defines all the events emitted by processing a transaction. Note,
   * these events include those emitted by processing all the messages and those
   * emitted from the ante. Whereas Logs contains the events, with
   * additional metadata, emitted only by processing the messages.
   *
   * Since: cosmos-sdk 0.42.11, 0.44.5, 0.45
   *
   * @generated from field: repeated tendermint.abci.Event events = 13;
   */
  events: Event[] = [];

  constructor(data?: PartialMessage<TxResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmos.base.abci.v1beta1.TxResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "height", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 2, name: "txhash", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "codespace", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "code", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 5, name: "data", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "raw_log", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 7, name: "logs", kind: "message", T: ABCIMessageLog, repeated: true },
    { no: 8, name: "info", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 9, name: "gas_wanted", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 10, name: "gas_used", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 11, name: "tx", kind: "message", T: Any },
    { no: 12, name: "timestamp", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 13, name: "events", kind: "message", T: Event, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TxResponse {
    return new TxResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TxResponse {
    return new TxResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TxResponse {
    return new TxResponse().fromJsonString(jsonString, options);
  }

  static equals(a: TxResponse | PlainMessage<TxResponse> | undefined, b: TxResponse | PlainMessage<TxResponse> | undefined): boolean {
    return proto3.util.equals(TxResponse, a, b);
  }
}

/**
 * ABCIMessageLog defines a structure containing an indexed tx ABCI message log.
 *
 * @generated from message cosmos.base.abci.v1beta1.ABCIMessageLog
 */
export class ABCIMessageLog extends Message<ABCIMessageLog> {
  /**
   * @generated from field: uint32 msg_index = 1;
   */
  msgIndex = 0;

  /**
   * @generated from field: string log = 2;
   */
  log = "";

  /**
   * Events contains a slice of Event objects that were emitted during some
   * execution.
   *
   * @generated from field: repeated cosmos.base.abci.v1beta1.StringEvent events = 3;
   */
  events: StringEvent[] = [];

  constructor(data?: PartialMessage<ABCIMessageLog>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmos.base.abci.v1beta1.ABCIMessageLog";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "msg_index", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 2, name: "log", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "events", kind: "message", T: StringEvent, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ABCIMessageLog {
    return new ABCIMessageLog().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ABCIMessageLog {
    return new ABCIMessageLog().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ABCIMessageLog {
    return new ABCIMessageLog().fromJsonString(jsonString, options);
  }

  static equals(a: ABCIMessageLog | PlainMessage<ABCIMessageLog> | undefined, b: ABCIMessageLog | PlainMessage<ABCIMessageLog> | undefined): boolean {
    return proto3.util.equals(ABCIMessageLog, a, b);
  }
}

/**
 * StringEvent defines en Event object wrapper where all the attributes
 * contain key/value pairs that are strings instead of raw bytes.
 *
 * @generated from message cosmos.base.abci.v1beta1.StringEvent
 */
export class StringEvent extends Message<StringEvent> {
  /**
   * @generated from field: string type = 1;
   */
  type = "";

  /**
   * @generated from field: repeated cosmos.base.abci.v1beta1.Attribute attributes = 2;
   */
  attributes: Attribute[] = [];

  constructor(data?: PartialMessage<StringEvent>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmos.base.abci.v1beta1.StringEvent";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "type", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "attributes", kind: "message", T: Attribute, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): StringEvent {
    return new StringEvent().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): StringEvent {
    return new StringEvent().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): StringEvent {
    return new StringEvent().fromJsonString(jsonString, options);
  }

  static equals(a: StringEvent | PlainMessage<StringEvent> | undefined, b: StringEvent | PlainMessage<StringEvent> | undefined): boolean {
    return proto3.util.equals(StringEvent, a, b);
  }
}

/**
 * Attribute defines an attribute wrapper where the key and value are
 * strings instead of raw bytes.
 *
 * @generated from message cosmos.base.abci.v1beta1.Attribute
 */
export class Attribute extends Message<Attribute> {
  /**
   * @generated from field: string key = 1;
   */
  key = "";

  /**
   * @generated from field: string value = 2;
   */
  value = "";

  constructor(data?: PartialMessage<Attribute>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmos.base.abci.v1beta1.Attribute";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "key", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "value", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Attribute {
    return new Attribute().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Attribute {
    return new Attribute().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Attribute {
    return new Attribute().fromJsonString(jsonString, options);
  }

  static equals(a: Attribute | PlainMessage<Attribute> | undefined, b: Attribute | PlainMessage<Attribute> | undefined): boolean {
    return proto3.util.equals(Attribute, a, b);
  }
}

/**
 * GasInfo defines tx execution gas context.
 *
 * @generated from message cosmos.base.abci.v1beta1.GasInfo
 */
export class GasInfo extends Message<GasInfo> {
  /**
   * GasWanted is the maximum units of work we allow this tx to perform.
   *
   * @generated from field: uint64 gas_wanted = 1;
   */
  gasWanted = protoInt64.zero;

  /**
   * GasUsed is the amount of gas actually consumed.
   *
   * @generated from field: uint64 gas_used = 2;
   */
  gasUsed = protoInt64.zero;

  constructor(data?: PartialMessage<GasInfo>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmos.base.abci.v1beta1.GasInfo";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "gas_wanted", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: "gas_used", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GasInfo {
    return new GasInfo().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GasInfo {
    return new GasInfo().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GasInfo {
    return new GasInfo().fromJsonString(jsonString, options);
  }

  static equals(a: GasInfo | PlainMessage<GasInfo> | undefined, b: GasInfo | PlainMessage<GasInfo> | undefined): boolean {
    return proto3.util.equals(GasInfo, a, b);
  }
}

/**
 * Result is the union of ResponseFormat and ResponseCheckTx.
 *
 * @generated from message cosmos.base.abci.v1beta1.Result
 */
export class Result extends Message<Result> {
  /**
   * Data is any data returned from message or handler execution. It MUST be
   * length prefixed in order to separate data from multiple message executions.
   * Deprecated. This field is still populated, but prefer msg_response instead
   * because it also contains the Msg response typeURL.
   *
   * @generated from field: bytes data = 1 [deprecated = true];
   * @deprecated
   */
  data = new Uint8Array(0);

  /**
   * Log contains the log information from message or handler execution.
   *
   * @generated from field: string log = 2;
   */
  log = "";

  /**
   * Events contains a slice of Event objects that were emitted during message
   * or handler execution.
   *
   * @generated from field: repeated tendermint.abci.Event events = 3;
   */
  events: Event[] = [];

  /**
   * msg_responses contains the Msg handler responses type packed in Anys.
   *
   * Since: cosmos-sdk 0.46
   *
   * @generated from field: repeated google.protobuf.Any msg_responses = 4;
   */
  msgResponses: Any[] = [];

  constructor(data?: PartialMessage<Result>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmos.base.abci.v1beta1.Result";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "data", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 2, name: "log", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "events", kind: "message", T: Event, repeated: true },
    { no: 4, name: "msg_responses", kind: "message", T: Any, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Result {
    return new Result().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Result {
    return new Result().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Result {
    return new Result().fromJsonString(jsonString, options);
  }

  static equals(a: Result | PlainMessage<Result> | undefined, b: Result | PlainMessage<Result> | undefined): boolean {
    return proto3.util.equals(Result, a, b);
  }
}

/**
 * SimulationResponse defines the response generated when a transaction is
 * successfully simulated.
 *
 * @generated from message cosmos.base.abci.v1beta1.SimulationResponse
 */
export class SimulationResponse extends Message<SimulationResponse> {
  /**
   * @generated from field: cosmos.base.abci.v1beta1.GasInfo gas_info = 1;
   */
  gasInfo?: GasInfo;

  /**
   * @generated from field: cosmos.base.abci.v1beta1.Result result = 2;
   */
  result?: Result;

  constructor(data?: PartialMessage<SimulationResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmos.base.abci.v1beta1.SimulationResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "gas_info", kind: "message", T: GasInfo },
    { no: 2, name: "result", kind: "message", T: Result },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SimulationResponse {
    return new SimulationResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SimulationResponse {
    return new SimulationResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SimulationResponse {
    return new SimulationResponse().fromJsonString(jsonString, options);
  }

  static equals(a: SimulationResponse | PlainMessage<SimulationResponse> | undefined, b: SimulationResponse | PlainMessage<SimulationResponse> | undefined): boolean {
    return proto3.util.equals(SimulationResponse, a, b);
  }
}

/**
 * MsgData defines the data returned in a Result object during message
 * execution.
 *
 * @generated from message cosmos.base.abci.v1beta1.MsgData
 * @deprecated
 */
export class MsgData extends Message<MsgData> {
  /**
   * @generated from field: string msg_type = 1;
   */
  msgType = "";

  /**
   * @generated from field: bytes data = 2;
   */
  data = new Uint8Array(0);

  constructor(data?: PartialMessage<MsgData>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmos.base.abci.v1beta1.MsgData";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "msg_type", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "data", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgData {
    return new MsgData().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgData {
    return new MsgData().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgData {
    return new MsgData().fromJsonString(jsonString, options);
  }

  static equals(a: MsgData | PlainMessage<MsgData> | undefined, b: MsgData | PlainMessage<MsgData> | undefined): boolean {
    return proto3.util.equals(MsgData, a, b);
  }
}

/**
 * TxMsgData defines a list of MsgData. A transaction will have a MsgData object
 * for each message.
 *
 * @generated from message cosmos.base.abci.v1beta1.TxMsgData
 */
export class TxMsgData extends Message<TxMsgData> {
  /**
   * data field is deprecated and not populated.
   *
   * @generated from field: repeated cosmos.base.abci.v1beta1.MsgData data = 1 [deprecated = true];
   * @deprecated
   */
  data: MsgData[] = [];

  /**
   * msg_responses contains the Msg handler responses packed into Anys.
   *
   * Since: cosmos-sdk 0.46
   *
   * @generated from field: repeated google.protobuf.Any msg_responses = 2;
   */
  msgResponses: Any[] = [];

  constructor(data?: PartialMessage<TxMsgData>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmos.base.abci.v1beta1.TxMsgData";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "data", kind: "message", T: MsgData, repeated: true },
    { no: 2, name: "msg_responses", kind: "message", T: Any, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TxMsgData {
    return new TxMsgData().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TxMsgData {
    return new TxMsgData().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TxMsgData {
    return new TxMsgData().fromJsonString(jsonString, options);
  }

  static equals(a: TxMsgData | PlainMessage<TxMsgData> | undefined, b: TxMsgData | PlainMessage<TxMsgData> | undefined): boolean {
    return proto3.util.equals(TxMsgData, a, b);
  }
}

/**
 * SearchTxsResult defines a structure for querying txs pageable
 *
 * @generated from message cosmos.base.abci.v1beta1.SearchTxsResult
 */
export class SearchTxsResult extends Message<SearchTxsResult> {
  /**
   * Count of all txs
   *
   * @generated from field: uint64 total_count = 1;
   */
  totalCount = protoInt64.zero;

  /**
   * Count of txs in current page
   *
   * @generated from field: uint64 count = 2;
   */
  count = protoInt64.zero;

  /**
   * Index of current page, start from 1
   *
   * @generated from field: uint64 page_number = 3;
   */
  pageNumber = protoInt64.zero;

  /**
   * Count of total pages
   *
   * @generated from field: uint64 page_total = 4;
   */
  pageTotal = protoInt64.zero;

  /**
   * Max count txs per page
   *
   * @generated from field: uint64 limit = 5;
   */
  limit = protoInt64.zero;

  /**
   * List of txs in current page
   *
   * @generated from field: repeated cosmos.base.abci.v1beta1.TxResponse txs = 6;
   */
  txs: TxResponse[] = [];

  constructor(data?: PartialMessage<SearchTxsResult>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmos.base.abci.v1beta1.SearchTxsResult";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "total_count", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: "count", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 3, name: "page_number", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 4, name: "page_total", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 5, name: "limit", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 6, name: "txs", kind: "message", T: TxResponse, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SearchTxsResult {
    return new SearchTxsResult().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SearchTxsResult {
    return new SearchTxsResult().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SearchTxsResult {
    return new SearchTxsResult().fromJsonString(jsonString, options);
  }

  static equals(a: SearchTxsResult | PlainMessage<SearchTxsResult> | undefined, b: SearchTxsResult | PlainMessage<SearchTxsResult> | undefined): boolean {
    return proto3.util.equals(SearchTxsResult, a, b);
  }
}

/**
 * SearchBlocksResult defines a structure for querying blocks pageable
 *
 * @generated from message cosmos.base.abci.v1beta1.SearchBlocksResult
 */
export class SearchBlocksResult extends Message<SearchBlocksResult> {
  /**
   * Count of all blocks
   *
   * @generated from field: int64 total_count = 1;
   */
  totalCount = protoInt64.zero;

  /**
   * Count of blocks in current page
   *
   * @generated from field: int64 count = 2;
   */
  count = protoInt64.zero;

  /**
   * Index of current page, start from 1
   *
   * @generated from field: int64 page_number = 3;
   */
  pageNumber = protoInt64.zero;

  /**
   * Count of total pages
   *
   * @generated from field: int64 page_total = 4;
   */
  pageTotal = protoInt64.zero;

  /**
   * Max count blocks per page
   *
   * @generated from field: int64 limit = 5;
   */
  limit = protoInt64.zero;

  /**
   * List of blocks in current page
   *
   * @generated from field: repeated tendermint.types.Block blocks = 6;
   */
  blocks: Block[] = [];

  constructor(data?: PartialMessage<SearchBlocksResult>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmos.base.abci.v1beta1.SearchBlocksResult";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "total_count", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 2, name: "count", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 3, name: "page_number", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 4, name: "page_total", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 5, name: "limit", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 6, name: "blocks", kind: "message", T: Block, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SearchBlocksResult {
    return new SearchBlocksResult().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SearchBlocksResult {
    return new SearchBlocksResult().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SearchBlocksResult {
    return new SearchBlocksResult().fromJsonString(jsonString, options);
  }

  static equals(a: SearchBlocksResult | PlainMessage<SearchBlocksResult> | undefined, b: SearchBlocksResult | PlainMessage<SearchBlocksResult> | undefined): boolean {
    return proto3.util.equals(SearchBlocksResult, a, b);
  }
}

