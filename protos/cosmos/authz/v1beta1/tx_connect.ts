// Since: cosmos-sdk 0.43

// @generated by protoc-gen-connect-es v1.6.1 with parameter "target=ts"
// @generated from file cosmos/authz/v1beta1/tx.proto (package cosmos.authz.v1beta1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { MsgExec, MsgExecResponse, MsgGrant, MsgGrantResponse, MsgRevoke, MsgRevokeResponse } from "./tx_pb.js";
import { MethodKind } from "@bufbuild/protobuf";

/**
 * Msg defines the authz Msg service.
 *
 * @generated from service cosmos.authz.v1beta1.Msg
 */
export const Msg = {
  typeName: "cosmos.authz.v1beta1.Msg",
  methods: {
    /**
     * Grant grants the provided authorization to the grantee on the granter's
     * account with the provided expiration time. If there is already a grant
     * for the given (granter, grantee, Authorization) triple, then the grant
     * will be overwritten.
     *
     * @generated from rpc cosmos.authz.v1beta1.Msg.Grant
     */
    grant: {
      name: "Grant",
      I: MsgGrant,
      O: MsgGrantResponse,
      kind: MethodKind.Unary,
    },
    /**
     * Exec attempts to execute the provided messages using
     * authorizations granted to the grantee. Each message should have only
     * one signer corresponding to the granter of the authorization.
     *
     * @generated from rpc cosmos.authz.v1beta1.Msg.Exec
     */
    exec: {
      name: "Exec",
      I: MsgExec,
      O: MsgExecResponse,
      kind: MethodKind.Unary,
    },
    /**
     * Revoke revokes any authorization corresponding to the provided method name on the
     * granter's account that has been granted to the grantee.
     *
     * @generated from rpc cosmos.authz.v1beta1.Msg.Revoke
     */
    revoke: {
      name: "Revoke",
      I: MsgRevoke,
      O: MsgRevokeResponse,
      kind: MethodKind.Unary,
    },
  }
} as const;

