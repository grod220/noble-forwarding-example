// @generated by protoc-gen-connect-es v1.6.1 with parameter "target=ts"
// @generated from file cosmos/slashing/v1beta1/query.proto (package cosmos.slashing.v1beta1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { QueryParamsRequest, QueryParamsResponse, QuerySigningInfoRequest, QuerySigningInfoResponse, QuerySigningInfosRequest, QuerySigningInfosResponse } from "./query_pb.js";
import { MethodKind } from "@bufbuild/protobuf";

/**
 * Query provides defines the gRPC querier service
 *
 * @generated from service cosmos.slashing.v1beta1.Query
 */
export const Query = {
  typeName: "cosmos.slashing.v1beta1.Query",
  methods: {
    /**
     * Params queries the parameters of slashing module
     *
     * @generated from rpc cosmos.slashing.v1beta1.Query.Params
     */
    params: {
      name: "Params",
      I: QueryParamsRequest,
      O: QueryParamsResponse,
      kind: MethodKind.Unary,
    },
    /**
     * SigningInfo queries the signing info of given cons address
     *
     * @generated from rpc cosmos.slashing.v1beta1.Query.SigningInfo
     */
    signingInfo: {
      name: "SigningInfo",
      I: QuerySigningInfoRequest,
      O: QuerySigningInfoResponse,
      kind: MethodKind.Unary,
    },
    /**
     * SigningInfos queries signing info of all validators
     *
     * @generated from rpc cosmos.slashing.v1beta1.Query.SigningInfos
     */
    signingInfos: {
      name: "SigningInfos",
      I: QuerySigningInfosRequest,
      O: QuerySigningInfosResponse,
      kind: MethodKind.Unary,
    },
  }
} as const;

