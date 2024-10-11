// @generated by protoc-gen-connect-es v1.6.1 with parameter "target=ts"
// @generated from file cosmos/bank/v1beta1/tx.proto (package cosmos.bank.v1beta1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { MsgMultiSend, MsgMultiSendResponse, MsgSend, MsgSendResponse, MsgSetSendEnabled, MsgSetSendEnabledResponse, MsgUpdateParams, MsgUpdateParamsResponse } from "./tx_pb.js";
import { MethodKind } from "@bufbuild/protobuf";

/**
 * Msg defines the bank Msg service.
 *
 * @generated from service cosmos.bank.v1beta1.Msg
 */
export const Msg = {
  typeName: "cosmos.bank.v1beta1.Msg",
  methods: {
    /**
     * Send defines a method for sending coins from one account to another account.
     *
     * @generated from rpc cosmos.bank.v1beta1.Msg.Send
     */
    send: {
      name: "Send",
      I: MsgSend,
      O: MsgSendResponse,
      kind: MethodKind.Unary,
    },
    /**
     * MultiSend defines a method for sending coins from some accounts to other accounts.
     *
     * @generated from rpc cosmos.bank.v1beta1.Msg.MultiSend
     */
    multiSend: {
      name: "MultiSend",
      I: MsgMultiSend,
      O: MsgMultiSendResponse,
      kind: MethodKind.Unary,
    },
    /**
     * UpdateParams defines a governance operation for updating the x/bank module parameters.
     * The authority is defined in the keeper.
     *
     * Since: cosmos-sdk 0.47
     *
     * @generated from rpc cosmos.bank.v1beta1.Msg.UpdateParams
     */
    updateParams: {
      name: "UpdateParams",
      I: MsgUpdateParams,
      O: MsgUpdateParamsResponse,
      kind: MethodKind.Unary,
    },
    /**
     * SetSendEnabled is a governance operation for setting the SendEnabled flag
     * on any number of Denoms. Only the entries to add or update should be
     * included. Entries that already exist in the store, but that aren't
     * included in this message, will be left unchanged.
     *
     * Since: cosmos-sdk 0.47
     *
     * @generated from rpc cosmos.bank.v1beta1.Msg.SetSendEnabled
     */
    setSendEnabled: {
      name: "SetSendEnabled",
      I: MsgSetSendEnabled,
      O: MsgSetSendEnabledResponse,
      kind: MethodKind.Unary,
    },
  }
} as const;

