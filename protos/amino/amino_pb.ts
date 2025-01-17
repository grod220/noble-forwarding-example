// @generated by protoc-gen-es v1.10.0 with parameter "target=ts"
// @generated from file amino/amino.proto (package amino, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { FieldOptions, MessageOptions, proto3 } from "@bufbuild/protobuf";

/**
 * name is the string used when registering a concrete
 * type into the Amino type registry, via the Amino codec's
 * `RegisterConcrete()` method. This string MUST be at most 39
 * characters long, or else the message will be rejected by the
 * Ledger hardware device.
 *
 * @generated from extension: string name = 11110001;
 */
export const name = proto3.makeExtension<MessageOptions, string>(
  "amino.name", 
  MessageOptions, 
  { no: 11110001, kind: "scalar", T: 9 /* ScalarType.STRING */ },
);

/**
 * encoding describes the encoding format used by Amino for the given
 * message. The field type is chosen to be a string for
 * flexibility, but it should ideally be short and expected to be
 * machine-readable, for example "base64" or "utf8_json". We
 * highly recommend to use underscores for word separation instead of spaces.
 *
 * If left empty, then the Amino encoding is expected to be the same as the
 * Protobuf one.
 *
 * This annotation should not be confused with the `encoding`
 * one which operates on the field level.
 *
 * @generated from extension: string message_encoding = 11110002;
 */
export const message_encoding = proto3.makeExtension<MessageOptions, string>(
  "amino.message_encoding", 
  MessageOptions, 
  { no: 11110002, kind: "scalar", T: 9 /* ScalarType.STRING */ },
);

/**
 * encoding describes the encoding format used by Amino for
 * the given field. The field type is chosen to be a string for
 * flexibility, but it should ideally be short and expected to be
 * machine-readable, for example "base64" or "utf8_json". We
 * highly recommend to use underscores for word separation instead of spaces.
 *
 * If left empty, then the Amino encoding is expected to be the same as the
 * Protobuf one.
 *
 * This annotation should not be confused with the
 * `message_encoding` one which operates on the message level.
 *
 * @generated from extension: string encoding = 11110003;
 */
export const encoding = proto3.makeExtension<FieldOptions, string>(
  "amino.encoding", 
  FieldOptions, 
  { no: 11110003, kind: "scalar", T: 9 /* ScalarType.STRING */ },
);

/**
 * field_name sets a different field name (i.e. key name) in
 * the amino JSON object for the given field.
 *
 * Example:
 *
 * message Foo {
 *   string bar = 1 [(amino.field_name) = "baz"];
 * }
 *
 * Then the Amino encoding of Foo will be:
 * `{"baz":"some value"}`
 *
 * @generated from extension: string field_name = 11110004;
 */
export const field_name = proto3.makeExtension<FieldOptions, string>(
  "amino.field_name", 
  FieldOptions, 
  { no: 11110004, kind: "scalar", T: 9 /* ScalarType.STRING */ },
);

/**
 * dont_omitempty sets the field in the JSON object even if
 * its value is empty, i.e. equal to the Golang zero value. To learn what
 * the zero values are, see https://go.dev/ref/spec#The_zero_value.
 *
 * Fields default to `omitempty`, which is the default behavior when this
 * annotation is unset. When set to true, then the field value in the
 * JSON object will be set, i.e. not `undefined`.
 *
 * Example:
 *
 * message Foo {
 *   string bar = 1;
 *   string baz = 2 [(amino.dont_omitempty) = true];
 * }
 *
 * f := Foo{};
 * out := AminoJSONEncoder(&f);
 * out == {"baz":""}
 *
 * @generated from extension: bool dont_omitempty = 11110005;
 */
export const dont_omitempty = proto3.makeExtension<FieldOptions, boolean>(
  "amino.dont_omitempty", 
  FieldOptions, 
  { no: 11110005, kind: "scalar", T: 8 /* ScalarType.BOOL */ },
);

/**
 * oneof_name sets the type name for the given field oneof field.  This is used
 * by the Amino JSON encoder to encode the type of the oneof field, and must be the same string in
 * the RegisterConcrete() method usage used to register the concrete type.
 *
 * @generated from extension: string oneof_name = 11110006;
 */
export const oneof_name = proto3.makeExtension<FieldOptions, string>(
  "amino.oneof_name", 
  FieldOptions, 
  { no: 11110006, kind: "scalar", T: 9 /* ScalarType.STRING */ },
);

