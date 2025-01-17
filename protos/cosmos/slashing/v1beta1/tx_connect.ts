// @generated by protoc-gen-connect-es v1.6.1 with parameter "target=ts"
// @generated from file cosmos/slashing/v1beta1/tx.proto (package cosmos.slashing.v1beta1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { MsgUnjail, MsgUnjailResponse, MsgUpdateParams, MsgUpdateParamsResponse } from "./tx_pb.js";
import { MethodKind } from "@bufbuild/protobuf";

/**
 * Msg defines the slashing Msg service.
 *
 * @generated from service cosmos.slashing.v1beta1.Msg
 */
export const Msg = {
  typeName: "cosmos.slashing.v1beta1.Msg",
  methods: {
    /**
     * Unjail defines a method for unjailing a jailed validator, thus returning
     * them into the bonded validator set, so they can begin receiving provisions
     * and rewards again.
     *
     * @generated from rpc cosmos.slashing.v1beta1.Msg.Unjail
     */
    unjail: {
      name: "Unjail",
      I: MsgUnjail,
      O: MsgUnjailResponse,
      kind: MethodKind.Unary,
    },
    /**
     * UpdateParams defines a governance operation for updating the x/slashing module
     * parameters. The authority defaults to the x/gov module account.
     *
     * Since: cosmos-sdk 0.47
     *
     * @generated from rpc cosmos.slashing.v1beta1.Msg.UpdateParams
     */
    updateParams: {
      name: "UpdateParams",
      I: MsgUpdateParams,
      O: MsgUpdateParamsResponse,
      kind: MethodKind.Unary,
    },
  }
} as const;

