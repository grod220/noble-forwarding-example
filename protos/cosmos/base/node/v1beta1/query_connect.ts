// @generated by protoc-gen-connect-es v1.6.1 with parameter "target=ts"
// @generated from file cosmos/base/node/v1beta1/query.proto (package cosmos.base.node.v1beta1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { ConfigRequest, ConfigResponse, StatusRequest, StatusResponse } from "./query_pb.js";
import { MethodKind } from "@bufbuild/protobuf";

/**
 * Service defines the gRPC querier service for node related queries.
 *
 * @generated from service cosmos.base.node.v1beta1.Service
 */
export const Service = {
  typeName: "cosmos.base.node.v1beta1.Service",
  methods: {
    /**
     * Config queries for the operator configuration.
     *
     * @generated from rpc cosmos.base.node.v1beta1.Service.Config
     */
    config: {
      name: "Config",
      I: ConfigRequest,
      O: ConfigResponse,
      kind: MethodKind.Unary,
    },
    /**
     * Status queries for the node status.
     *
     * @generated from rpc cosmos.base.node.v1beta1.Service.Status
     */
    status: {
      name: "Status",
      I: StatusRequest,
      O: StatusResponse,
      kind: MethodKind.Unary,
    },
  }
} as const;
