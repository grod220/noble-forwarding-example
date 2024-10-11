// @generated by protoc-gen-connect-es v1.6.1 with parameter "target=ts"
// @generated from file cosmos/evidence/v1beta1/tx.proto (package cosmos.evidence.v1beta1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { MsgSubmitEvidence, MsgSubmitEvidenceResponse } from "./tx_pb.js";
import { MethodKind } from "@bufbuild/protobuf";

/**
 * Msg defines the evidence Msg service.
 *
 * @generated from service cosmos.evidence.v1beta1.Msg
 */
export const Msg = {
  typeName: "cosmos.evidence.v1beta1.Msg",
  methods: {
    /**
     * SubmitEvidence submits an arbitrary Evidence of misbehavior such as equivocation or
     * counterfactual signing.
     *
     * @generated from rpc cosmos.evidence.v1beta1.Msg.SubmitEvidence
     */
    submitEvidence: {
      name: "SubmitEvidence",
      I: MsgSubmitEvidence,
      O: MsgSubmitEvidenceResponse,
      kind: MethodKind.Unary,
    },
  }
} as const;

