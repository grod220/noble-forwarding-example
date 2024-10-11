// Since: cosmos-sdk 0.46

// @generated by protoc-gen-connect-es v1.6.1 with parameter "target=ts"
// @generated from file cosmos/gov/v1/tx.proto (package cosmos.gov.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { MsgCancelProposal, MsgCancelProposalResponse, MsgDeposit, MsgDepositResponse, MsgExecLegacyContent, MsgExecLegacyContentResponse, MsgSubmitProposal, MsgSubmitProposalResponse, MsgUpdateParams, MsgUpdateParamsResponse, MsgVote, MsgVoteResponse, MsgVoteWeighted, MsgVoteWeightedResponse } from "./tx_pb.js";
import { MethodKind } from "@bufbuild/protobuf";

/**
 * Msg defines the gov Msg service.
 *
 * @generated from service cosmos.gov.v1.Msg
 */
export const Msg = {
  typeName: "cosmos.gov.v1.Msg",
  methods: {
    /**
     * SubmitProposal defines a method to create new proposal given the messages.
     *
     * @generated from rpc cosmos.gov.v1.Msg.SubmitProposal
     */
    submitProposal: {
      name: "SubmitProposal",
      I: MsgSubmitProposal,
      O: MsgSubmitProposalResponse,
      kind: MethodKind.Unary,
    },
    /**
     * ExecLegacyContent defines a Msg to be in included in a MsgSubmitProposal
     * to execute a legacy content-based proposal.
     *
     * @generated from rpc cosmos.gov.v1.Msg.ExecLegacyContent
     */
    execLegacyContent: {
      name: "ExecLegacyContent",
      I: MsgExecLegacyContent,
      O: MsgExecLegacyContentResponse,
      kind: MethodKind.Unary,
    },
    /**
     * Vote defines a method to add a vote on a specific proposal.
     *
     * @generated from rpc cosmos.gov.v1.Msg.Vote
     */
    vote: {
      name: "Vote",
      I: MsgVote,
      O: MsgVoteResponse,
      kind: MethodKind.Unary,
    },
    /**
     * VoteWeighted defines a method to add a weighted vote on a specific proposal.
     *
     * @generated from rpc cosmos.gov.v1.Msg.VoteWeighted
     */
    voteWeighted: {
      name: "VoteWeighted",
      I: MsgVoteWeighted,
      O: MsgVoteWeightedResponse,
      kind: MethodKind.Unary,
    },
    /**
     * Deposit defines a method to add deposit on a specific proposal.
     *
     * @generated from rpc cosmos.gov.v1.Msg.Deposit
     */
    deposit: {
      name: "Deposit",
      I: MsgDeposit,
      O: MsgDepositResponse,
      kind: MethodKind.Unary,
    },
    /**
     * UpdateParams defines a governance operation for updating the x/gov module
     * parameters. The authority is defined in the keeper.
     *
     * Since: cosmos-sdk 0.47
     *
     * @generated from rpc cosmos.gov.v1.Msg.UpdateParams
     */
    updateParams: {
      name: "UpdateParams",
      I: MsgUpdateParams,
      O: MsgUpdateParamsResponse,
      kind: MethodKind.Unary,
    },
    /**
     * CancelProposal defines a method to cancel governance proposal
     *
     * Since: cosmos-sdk 0.48
     *
     * @generated from rpc cosmos.gov.v1.Msg.CancelProposal
     */
    cancelProposal: {
      name: "CancelProposal",
      I: MsgCancelProposal,
      O: MsgCancelProposalResponse,
      kind: MethodKind.Unary,
    },
  }
} as const;
