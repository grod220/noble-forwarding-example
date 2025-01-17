// @generated by protoc-gen-connect-es v1.6.1 with parameter "target=ts"
// @generated from file noble/forwarding/v1/tx.proto (package noble.forwarding.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { MsgClearAccount, MsgClearAccountResponse, MsgRegisterAccount, MsgRegisterAccountResponse } from "./tx_pb.js";
import { MethodKind } from "@bufbuild/protobuf";

/**
 * @generated from service noble.forwarding.v1.Msg
 */
export const Msg = {
  typeName: "noble.forwarding.v1.Msg",
  methods: {
    /**
     * @generated from rpc noble.forwarding.v1.Msg.RegisterAccount
     */
    registerAccount: {
      name: "RegisterAccount",
      I: MsgRegisterAccount,
      O: MsgRegisterAccountResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc noble.forwarding.v1.Msg.ClearAccount
     */
    clearAccount: {
      name: "ClearAccount",
      I: MsgClearAccount,
      O: MsgClearAccountResponse,
      kind: MethodKind.Unary,
    },
  }
} as const;

