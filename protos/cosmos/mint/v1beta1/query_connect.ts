// @generated by protoc-gen-connect-es v1.6.1 with parameter "target=ts"
// @generated from file cosmos/mint/v1beta1/query.proto (package cosmos.mint.v1beta1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { QueryAnnualProvisionsRequest, QueryAnnualProvisionsResponse, QueryInflationRequest, QueryInflationResponse, QueryParamsRequest, QueryParamsResponse } from "./query_pb.js";
import { MethodKind } from "@bufbuild/protobuf";

/**
 * Query provides defines the gRPC querier service.
 *
 * @generated from service cosmos.mint.v1beta1.Query
 */
export const Query = {
  typeName: "cosmos.mint.v1beta1.Query",
  methods: {
    /**
     * Params returns the total set of minting parameters.
     *
     * @generated from rpc cosmos.mint.v1beta1.Query.Params
     */
    params: {
      name: "Params",
      I: QueryParamsRequest,
      O: QueryParamsResponse,
      kind: MethodKind.Unary,
    },
    /**
     * Inflation returns the current minting inflation value.
     *
     * @generated from rpc cosmos.mint.v1beta1.Query.Inflation
     */
    inflation: {
      name: "Inflation",
      I: QueryInflationRequest,
      O: QueryInflationResponse,
      kind: MethodKind.Unary,
    },
    /**
     * AnnualProvisions current minting annual provisions value.
     *
     * @generated from rpc cosmos.mint.v1beta1.Query.AnnualProvisions
     */
    annualProvisions: {
      name: "AnnualProvisions",
      I: QueryAnnualProvisionsRequest,
      O: QueryAnnualProvisionsResponse,
      kind: MethodKind.Unary,
    },
  }
} as const;

