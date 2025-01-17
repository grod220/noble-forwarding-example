// @generated by protoc-gen-connect-es v1.6.1 with parameter "target=ts"
// @generated from file cosmos/nft/v1beta1/query.proto (package cosmos.nft.v1beta1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { QueryBalanceRequest, QueryBalanceResponse, QueryClassesRequest, QueryClassesResponse, QueryClassRequest, QueryClassResponse, QueryNFTRequest, QueryNFTResponse, QueryNFTsRequest, QueryNFTsResponse, QueryOwnerRequest, QueryOwnerResponse, QuerySupplyRequest, QuerySupplyResponse } from "./query_pb.js";
import { MethodKind } from "@bufbuild/protobuf";

/**
 * Query defines the gRPC querier service.
 *
 * @generated from service cosmos.nft.v1beta1.Query
 */
export const Query = {
  typeName: "cosmos.nft.v1beta1.Query",
  methods: {
    /**
     * Balance queries the number of NFTs of a given class owned by the owner, same as balanceOf in ERC721
     *
     * @generated from rpc cosmos.nft.v1beta1.Query.Balance
     */
    balance: {
      name: "Balance",
      I: QueryBalanceRequest,
      O: QueryBalanceResponse,
      kind: MethodKind.Unary,
    },
    /**
     * Owner queries the owner of the NFT based on its class and id, same as ownerOf in ERC721
     *
     * @generated from rpc cosmos.nft.v1beta1.Query.Owner
     */
    owner: {
      name: "Owner",
      I: QueryOwnerRequest,
      O: QueryOwnerResponse,
      kind: MethodKind.Unary,
    },
    /**
     * Supply queries the number of NFTs from the given class, same as totalSupply of ERC721.
     *
     * @generated from rpc cosmos.nft.v1beta1.Query.Supply
     */
    supply: {
      name: "Supply",
      I: QuerySupplyRequest,
      O: QuerySupplyResponse,
      kind: MethodKind.Unary,
    },
    /**
     * NFTs queries all NFTs of a given class or owner,choose at least one of the two, similar to tokenByIndex in
     * ERC721Enumerable
     *
     * @generated from rpc cosmos.nft.v1beta1.Query.NFTs
     */
    nFTs: {
      name: "NFTs",
      I: QueryNFTsRequest,
      O: QueryNFTsResponse,
      kind: MethodKind.Unary,
    },
    /**
     * NFT queries an NFT based on its class and id.
     *
     * @generated from rpc cosmos.nft.v1beta1.Query.NFT
     */
    nFT: {
      name: "NFT",
      I: QueryNFTRequest,
      O: QueryNFTResponse,
      kind: MethodKind.Unary,
    },
    /**
     * Class queries an NFT class based on its id
     *
     * @generated from rpc cosmos.nft.v1beta1.Query.Class
     */
    class: {
      name: "Class",
      I: QueryClassRequest,
      O: QueryClassResponse,
      kind: MethodKind.Unary,
    },
    /**
     * Classes queries all NFT classes
     *
     * @generated from rpc cosmos.nft.v1beta1.Query.Classes
     */
    classes: {
      name: "Classes",
      I: QueryClassesRequest,
      O: QueryClassesResponse,
      kind: MethodKind.Unary,
    },
  }
} as const;

