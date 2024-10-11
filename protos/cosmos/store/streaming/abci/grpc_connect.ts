// @generated by protoc-gen-connect-es v1.6.1 with parameter "target=ts"
// @generated from file cosmos/store/streaming/abci/grpc.proto (package cosmos.store.streaming.abci, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { ListenBeginBlockRequest, ListenBeginBlockResponse, ListenCommitRequest, ListenCommitResponse, ListenDeliverTxRequest, ListenDeliverTxResponse, ListenEndBlockRequest, ListenEndBlockResponse } from "./grpc_pb.js";
import { MethodKind } from "@bufbuild/protobuf";

/**
 * ABCIListenerService is the service for the BaseApp ABCIListener interface
 *
 * @generated from service cosmos.store.streaming.abci.ABCIListenerService
 */
export const ABCIListenerService = {
  typeName: "cosmos.store.streaming.abci.ABCIListenerService",
  methods: {
    /**
     * ListenBeginBlock is the corresponding endpoint for ABCIListener.ListenBeginBlock
     *
     * @generated from rpc cosmos.store.streaming.abci.ABCIListenerService.ListenBeginBlock
     */
    listenBeginBlock: {
      name: "ListenBeginBlock",
      I: ListenBeginBlockRequest,
      O: ListenBeginBlockResponse,
      kind: MethodKind.Unary,
    },
    /**
     * ListenEndBlock is the corresponding endpoint for ABCIListener.ListenEndBlock
     *
     * @generated from rpc cosmos.store.streaming.abci.ABCIListenerService.ListenEndBlock
     */
    listenEndBlock: {
      name: "ListenEndBlock",
      I: ListenEndBlockRequest,
      O: ListenEndBlockResponse,
      kind: MethodKind.Unary,
    },
    /**
     * ListenDeliverTx is the corresponding endpoint for ABCIListener.ListenDeliverTx
     *
     * @generated from rpc cosmos.store.streaming.abci.ABCIListenerService.ListenDeliverTx
     */
    listenDeliverTx: {
      name: "ListenDeliverTx",
      I: ListenDeliverTxRequest,
      O: ListenDeliverTxResponse,
      kind: MethodKind.Unary,
    },
    /**
     * ListenCommit is the corresponding endpoint for ABCIListener.ListenCommit
     *
     * @generated from rpc cosmos.store.streaming.abci.ABCIListenerService.ListenCommit
     */
    listenCommit: {
      name: "ListenCommit",
      I: ListenCommitRequest,
      O: ListenCommitResponse,
      kind: MethodKind.Unary,
    },
  }
} as const;
