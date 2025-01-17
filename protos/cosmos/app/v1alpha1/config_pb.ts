// @generated by protoc-gen-es v1.10.0 with parameter "target=ts"
// @generated from file cosmos/app/v1alpha1/config.proto (package cosmos.app.v1alpha1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Any, Message, proto3 } from "@bufbuild/protobuf";

/**
 * Config represents the configuration for a Cosmos SDK ABCI app.
 * It is intended that all state machine logic including the version of
 * baseapp and tx handlers (and possibly even Tendermint) that an app needs
 * can be described in a config object. For compatibility, the framework should
 * allow a mixture of declarative and imperative app wiring, however, apps
 * that strive for the maximum ease of maintainability should be able to describe
 * their state machine with a config object alone.
 *
 * @generated from message cosmos.app.v1alpha1.Config
 */
export class Config extends Message<Config> {
  /**
   * modules are the module configurations for the app.
   *
   * @generated from field: repeated cosmos.app.v1alpha1.ModuleConfig modules = 1;
   */
  modules: ModuleConfig[] = [];

  /**
   * golang_bindings specifies explicit interface to implementation type bindings which
   * depinject uses to resolve interface inputs to provider functions.  The scope of this
   * field's configuration is global (not module specific).
   *
   * @generated from field: repeated cosmos.app.v1alpha1.GolangBinding golang_bindings = 2;
   */
  golangBindings: GolangBinding[] = [];

  constructor(data?: PartialMessage<Config>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmos.app.v1alpha1.Config";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "modules", kind: "message", T: ModuleConfig, repeated: true },
    { no: 2, name: "golang_bindings", kind: "message", T: GolangBinding, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Config {
    return new Config().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Config {
    return new Config().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Config {
    return new Config().fromJsonString(jsonString, options);
  }

  static equals(a: Config | PlainMessage<Config> | undefined, b: Config | PlainMessage<Config> | undefined): boolean {
    return proto3.util.equals(Config, a, b);
  }
}

/**
 * ModuleConfig is a module configuration for an app.
 *
 * @generated from message cosmos.app.v1alpha1.ModuleConfig
 */
export class ModuleConfig extends Message<ModuleConfig> {
  /**
   * name is the unique name of the module within the app. It should be a name
   * that persists between different versions of a module so that modules
   * can be smoothly upgraded to new versions.
   *
   * For example, for the module cosmos.bank.module.v1.Module, we may chose
   * to simply name the module "bank" in the app. When we upgrade to
   * cosmos.bank.module.v2.Module, the app-specific name "bank" stays the same
   * and the framework knows that the v2 module should receive all the same state
   * that the v1 module had. Note: modules should provide info on which versions
   * they can migrate from in the ModuleDescriptor.can_migration_from field.
   *
   * @generated from field: string name = 1;
   */
  name = "";

  /**
   * config is the config object for the module. Module config messages should
   * define a ModuleDescriptor using the cosmos.app.v1alpha1.is_module extension.
   *
   * @generated from field: google.protobuf.Any config = 2;
   */
  config?: Any;

  /**
   * golang_bindings specifies explicit interface to implementation type bindings which
   * depinject uses to resolve interface inputs to provider functions.  The scope of this
   * field's configuration is module specific.
   *
   * @generated from field: repeated cosmos.app.v1alpha1.GolangBinding golang_bindings = 3;
   */
  golangBindings: GolangBinding[] = [];

  constructor(data?: PartialMessage<ModuleConfig>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmos.app.v1alpha1.ModuleConfig";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "config", kind: "message", T: Any },
    { no: 3, name: "golang_bindings", kind: "message", T: GolangBinding, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ModuleConfig {
    return new ModuleConfig().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ModuleConfig {
    return new ModuleConfig().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ModuleConfig {
    return new ModuleConfig().fromJsonString(jsonString, options);
  }

  static equals(a: ModuleConfig | PlainMessage<ModuleConfig> | undefined, b: ModuleConfig | PlainMessage<ModuleConfig> | undefined): boolean {
    return proto3.util.equals(ModuleConfig, a, b);
  }
}

/**
 * GolangBinding is an explicit interface type to implementing type binding for dependency injection.
 *
 * @generated from message cosmos.app.v1alpha1.GolangBinding
 */
export class GolangBinding extends Message<GolangBinding> {
  /**
   * interface_type is the interface type which will be bound to a specific implementation type
   *
   * @generated from field: string interface_type = 1;
   */
  interfaceType = "";

  /**
   * implementation is the implementing type which will be supplied when an input of type interface is requested
   *
   * @generated from field: string implementation = 2;
   */
  implementation = "";

  constructor(data?: PartialMessage<GolangBinding>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmos.app.v1alpha1.GolangBinding";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "interface_type", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "implementation", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GolangBinding {
    return new GolangBinding().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GolangBinding {
    return new GolangBinding().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GolangBinding {
    return new GolangBinding().fromJsonString(jsonString, options);
  }

  static equals(a: GolangBinding | PlainMessage<GolangBinding> | undefined, b: GolangBinding | PlainMessage<GolangBinding> | undefined): boolean {
    return proto3.util.equals(GolangBinding, a, b);
  }
}

