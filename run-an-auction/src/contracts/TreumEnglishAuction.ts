/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "./common";

export declare namespace TreumEnglishAuction {
  export type AuctionStruct = {
    tokenId: PromiseOrValue<BigNumberish>;
    tokenContract: PromiseOrValue<string>;
    tokenType: PromiseOrValue<BigNumberish>;
    winningBidAmount: PromiseOrValue<BigNumberish>;
    duration: PromiseOrValue<BigNumberish>;
    startTime: PromiseOrValue<BigNumberish>;
    startingBid: PromiseOrValue<BigNumberish>;
    seller: PromiseOrValue<string>;
    winningBidder: PromiseOrValue<string>;
    paymentCurrency: PromiseOrValue<string>;
    extensionWindow: PromiseOrValue<BigNumberish>;
    minBidIncrement: PromiseOrValue<BigNumberish>;
    feeRecipients: PromiseOrValue<string>[];
    feePercentages: PromiseOrValue<BigNumberish>[];
  };

  export type AuctionStructOutput = [
    BigNumber,
    string,
    number,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    string,
    string,
    string,
    BigNumber,
    BigNumber,
    string[],
    number[]
  ] & {
    tokenId: BigNumber;
    tokenContract: string;
    tokenType: number;
    winningBidAmount: BigNumber;
    duration: BigNumber;
    startTime: BigNumber;
    startingBid: BigNumber;
    seller: string;
    winningBidder: string;
    paymentCurrency: string;
    extensionWindow: BigNumber;
    minBidIncrement: BigNumber;
    feeRecipients: string[];
    feePercentages: number[];
  };
}

export interface TreumEnglishAuctionInterface extends utils.Interface {
  functions: {
    "cancelAuction(uint256)": FunctionFragment;
    "createAuction(uint256,address,uint8,uint256,uint256,uint256,address,uint256,uint256,address[],uint32[])": FunctionFragment;
    "getAuction(uint256)": FunctionFragment;
    "getAuctionEndTime(uint256)": FunctionFragment;
    "getAuctionId(address,uint256)": FunctionFragment;
    "isAuctionComplete(uint256)": FunctionFragment;
    "onERC1155BatchReceived(address,address,uint256[],uint256[],bytes)": FunctionFragment;
    "onERC1155Received(address,address,uint256,uint256,bytes)": FunctionFragment;
    "onERC721Received(address,address,uint256,bytes)": FunctionFragment;
    "owner()": FunctionFragment;
    "placeBid(uint256,uint256)": FunctionFragment;
    "placeBidInEth(uint256)": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "settleAuction(uint256)": FunctionFragment;
    "supportsInterface(bytes4)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "wrappedAddress()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "cancelAuction"
      | "createAuction"
      | "getAuction"
      | "getAuctionEndTime"
      | "getAuctionId"
      | "isAuctionComplete"
      | "onERC1155BatchReceived"
      | "onERC1155Received"
      | "onERC721Received"
      | "owner"
      | "placeBid"
      | "placeBidInEth"
      | "renounceOwnership"
      | "settleAuction"
      | "supportsInterface"
      | "transferOwnership"
      | "wrappedAddress"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "cancelAuction",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "createAuction",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>[],
      PromiseOrValue<BigNumberish>[]
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "getAuction",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getAuctionEndTime",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getAuctionId",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "isAuctionComplete",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "onERC1155BatchReceived",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>[],
      PromiseOrValue<BigNumberish>[],
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "onERC1155Received",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "onERC721Received",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "placeBid",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "placeBidInEth",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "settleAuction",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "supportsInterface",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "wrappedAddress",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "cancelAuction",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "createAuction",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getAuction", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getAuctionEndTime",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getAuctionId",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isAuctionComplete",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "onERC1155BatchReceived",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "onERC1155Received",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "onERC721Received",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "placeBid", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "placeBidInEth",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "settleAuction",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "supportsInterface",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "wrappedAddress",
    data: BytesLike
  ): Result;

  events: {
    "AuctionCreated(uint256,address,uint256,address,uint256,uint256,uint256,address,uint256,uint256,address[],uint32[])": EventFragment;
    "AuctionSettled(uint256,address,address)": EventFragment;
    "BidPlaced(uint256,address,uint256,bool)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "AuctionCreated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "AuctionSettled"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "BidPlaced"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
}

export interface AuctionCreatedEventObject {
  auctionId: BigNumber;
  seller: string;
  tokenId: BigNumber;
  tokenContract: string;
  duration: BigNumber;
  startTime: BigNumber;
  startingBid: BigNumber;
  paymentCurrency: string;
  extensionWindow: BigNumber;
  minBidIncrement: BigNumber;
  feeRecipients: string[];
  feePercentages: number[];
}
export type AuctionCreatedEvent = TypedEvent<
  [
    BigNumber,
    string,
    BigNumber,
    string,
    BigNumber,
    BigNumber,
    BigNumber,
    string,
    BigNumber,
    BigNumber,
    string[],
    number[]
  ],
  AuctionCreatedEventObject
>;

export type AuctionCreatedEventFilter = TypedEventFilter<AuctionCreatedEvent>;

export interface AuctionSettledEventObject {
  auctionId: BigNumber;
  seller: string;
  buyer: string;
}
export type AuctionSettledEvent = TypedEvent<
  [BigNumber, string, string],
  AuctionSettledEventObject
>;

export type AuctionSettledEventFilter = TypedEventFilter<AuctionSettledEvent>;

export interface BidPlacedEventObject {
  auctionId: BigNumber;
  bidder: string;
  amount: BigNumber;
  extended: boolean;
}
export type BidPlacedEvent = TypedEvent<
  [BigNumber, string, BigNumber, boolean],
  BidPlacedEventObject
>;

export type BidPlacedEventFilter = TypedEventFilter<BidPlacedEvent>;

export interface OwnershipTransferredEventObject {
  previousOwner: string;
  newOwner: string;
}
export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  OwnershipTransferredEventObject
>;

export type OwnershipTransferredEventFilter =
  TypedEventFilter<OwnershipTransferredEvent>;

export interface TreumEnglishAuction extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: TreumEnglishAuctionInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    cancelAuction(
      auctionId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    createAuction(
      tokenId: PromiseOrValue<BigNumberish>,
      tokenContract: PromiseOrValue<string>,
      tokenType: PromiseOrValue<BigNumberish>,
      duration: PromiseOrValue<BigNumberish>,
      startTime: PromiseOrValue<BigNumberish>,
      startingBid: PromiseOrValue<BigNumberish>,
      paymentCurrency: PromiseOrValue<string>,
      extensionWindow: PromiseOrValue<BigNumberish>,
      minBidIncrement: PromiseOrValue<BigNumberish>,
      feeRecipients: PromiseOrValue<string>[],
      feePercentages: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    getAuction(
      auctionId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[TreumEnglishAuction.AuctionStructOutput]>;

    getAuctionEndTime(
      auctionId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getAuctionId(
      token: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    isAuctionComplete(
      auctionId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    onERC1155BatchReceived(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      arg2: PromiseOrValue<BigNumberish>[],
      arg3: PromiseOrValue<BigNumberish>[],
      arg4: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    onERC1155Received(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      arg2: PromiseOrValue<BigNumberish>,
      arg3: PromiseOrValue<BigNumberish>,
      arg4: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    onERC721Received(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      arg2: PromiseOrValue<BigNumberish>,
      arg3: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    placeBid(
      auctionId: PromiseOrValue<BigNumberish>,
      bidAmount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    placeBidInEth(
      auctionId: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    settleAuction(
      auctionId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    supportsInterface(
      interfaceId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    wrappedAddress(overrides?: CallOverrides): Promise<[string]>;
  };

  cancelAuction(
    auctionId: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  createAuction(
    tokenId: PromiseOrValue<BigNumberish>,
    tokenContract: PromiseOrValue<string>,
    tokenType: PromiseOrValue<BigNumberish>,
    duration: PromiseOrValue<BigNumberish>,
    startTime: PromiseOrValue<BigNumberish>,
    startingBid: PromiseOrValue<BigNumberish>,
    paymentCurrency: PromiseOrValue<string>,
    extensionWindow: PromiseOrValue<BigNumberish>,
    minBidIncrement: PromiseOrValue<BigNumberish>,
    feeRecipients: PromiseOrValue<string>[],
    feePercentages: PromiseOrValue<BigNumberish>[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  getAuction(
    auctionId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<TreumEnglishAuction.AuctionStructOutput>;

  getAuctionEndTime(
    auctionId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getAuctionId(
    token: PromiseOrValue<string>,
    tokenId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  isAuctionComplete(
    auctionId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  onERC1155BatchReceived(
    arg0: PromiseOrValue<string>,
    arg1: PromiseOrValue<string>,
    arg2: PromiseOrValue<BigNumberish>[],
    arg3: PromiseOrValue<BigNumberish>[],
    arg4: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  onERC1155Received(
    arg0: PromiseOrValue<string>,
    arg1: PromiseOrValue<string>,
    arg2: PromiseOrValue<BigNumberish>,
    arg3: PromiseOrValue<BigNumberish>,
    arg4: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  onERC721Received(
    arg0: PromiseOrValue<string>,
    arg1: PromiseOrValue<string>,
    arg2: PromiseOrValue<BigNumberish>,
    arg3: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  owner(overrides?: CallOverrides): Promise<string>;

  placeBid(
    auctionId: PromiseOrValue<BigNumberish>,
    bidAmount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  placeBidInEth(
    auctionId: PromiseOrValue<BigNumberish>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  renounceOwnership(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  settleAuction(
    auctionId: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  supportsInterface(
    interfaceId: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  transferOwnership(
    newOwner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  wrappedAddress(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    cancelAuction(
      auctionId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    createAuction(
      tokenId: PromiseOrValue<BigNumberish>,
      tokenContract: PromiseOrValue<string>,
      tokenType: PromiseOrValue<BigNumberish>,
      duration: PromiseOrValue<BigNumberish>,
      startTime: PromiseOrValue<BigNumberish>,
      startingBid: PromiseOrValue<BigNumberish>,
      paymentCurrency: PromiseOrValue<string>,
      extensionWindow: PromiseOrValue<BigNumberish>,
      minBidIncrement: PromiseOrValue<BigNumberish>,
      feeRecipients: PromiseOrValue<string>[],
      feePercentages: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<void>;

    getAuction(
      auctionId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<TreumEnglishAuction.AuctionStructOutput>;

    getAuctionEndTime(
      auctionId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getAuctionId(
      token: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isAuctionComplete(
      auctionId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    onERC1155BatchReceived(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      arg2: PromiseOrValue<BigNumberish>[],
      arg3: PromiseOrValue<BigNumberish>[],
      arg4: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<string>;

    onERC1155Received(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      arg2: PromiseOrValue<BigNumberish>,
      arg3: PromiseOrValue<BigNumberish>,
      arg4: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<string>;

    onERC721Received(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      arg2: PromiseOrValue<BigNumberish>,
      arg3: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<string>;

    owner(overrides?: CallOverrides): Promise<string>;

    placeBid(
      auctionId: PromiseOrValue<BigNumberish>,
      bidAmount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    placeBidInEth(
      auctionId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    settleAuction(
      auctionId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    supportsInterface(
      interfaceId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    wrappedAddress(overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    "AuctionCreated(uint256,address,uint256,address,uint256,uint256,uint256,address,uint256,uint256,address[],uint32[])"(
      auctionId?: PromiseOrValue<BigNumberish> | null,
      seller?: PromiseOrValue<string> | null,
      tokenId?: null,
      tokenContract?: null,
      duration?: null,
      startTime?: PromiseOrValue<BigNumberish> | null,
      startingBid?: null,
      paymentCurrency?: null,
      extensionWindow?: null,
      minBidIncrement?: null,
      feeRecipients?: null,
      feePercentages?: null
    ): AuctionCreatedEventFilter;
    AuctionCreated(
      auctionId?: PromiseOrValue<BigNumberish> | null,
      seller?: PromiseOrValue<string> | null,
      tokenId?: null,
      tokenContract?: null,
      duration?: null,
      startTime?: PromiseOrValue<BigNumberish> | null,
      startingBid?: null,
      paymentCurrency?: null,
      extensionWindow?: null,
      minBidIncrement?: null,
      feeRecipients?: null,
      feePercentages?: null
    ): AuctionCreatedEventFilter;

    "AuctionSettled(uint256,address,address)"(
      auctionId?: PromiseOrValue<BigNumberish> | null,
      seller?: PromiseOrValue<string> | null,
      buyer?: PromiseOrValue<string> | null
    ): AuctionSettledEventFilter;
    AuctionSettled(
      auctionId?: PromiseOrValue<BigNumberish> | null,
      seller?: PromiseOrValue<string> | null,
      buyer?: PromiseOrValue<string> | null
    ): AuctionSettledEventFilter;

    "BidPlaced(uint256,address,uint256,bool)"(
      auctionId?: PromiseOrValue<BigNumberish> | null,
      bidder?: PromiseOrValue<string> | null,
      amount?: null,
      extended?: null
    ): BidPlacedEventFilter;
    BidPlaced(
      auctionId?: PromiseOrValue<BigNumberish> | null,
      bidder?: PromiseOrValue<string> | null,
      amount?: null,
      extended?: null
    ): BidPlacedEventFilter;

    "OwnershipTransferred(address,address)"(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;
  };

  estimateGas: {
    cancelAuction(
      auctionId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    createAuction(
      tokenId: PromiseOrValue<BigNumberish>,
      tokenContract: PromiseOrValue<string>,
      tokenType: PromiseOrValue<BigNumberish>,
      duration: PromiseOrValue<BigNumberish>,
      startTime: PromiseOrValue<BigNumberish>,
      startingBid: PromiseOrValue<BigNumberish>,
      paymentCurrency: PromiseOrValue<string>,
      extensionWindow: PromiseOrValue<BigNumberish>,
      minBidIncrement: PromiseOrValue<BigNumberish>,
      feeRecipients: PromiseOrValue<string>[],
      feePercentages: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    getAuction(
      auctionId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getAuctionEndTime(
      auctionId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getAuctionId(
      token: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isAuctionComplete(
      auctionId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    onERC1155BatchReceived(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      arg2: PromiseOrValue<BigNumberish>[],
      arg3: PromiseOrValue<BigNumberish>[],
      arg4: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    onERC1155Received(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      arg2: PromiseOrValue<BigNumberish>,
      arg3: PromiseOrValue<BigNumberish>,
      arg4: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    onERC721Received(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      arg2: PromiseOrValue<BigNumberish>,
      arg3: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    placeBid(
      auctionId: PromiseOrValue<BigNumberish>,
      bidAmount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    placeBidInEth(
      auctionId: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    settleAuction(
      auctionId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    supportsInterface(
      interfaceId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    wrappedAddress(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    cancelAuction(
      auctionId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    createAuction(
      tokenId: PromiseOrValue<BigNumberish>,
      tokenContract: PromiseOrValue<string>,
      tokenType: PromiseOrValue<BigNumberish>,
      duration: PromiseOrValue<BigNumberish>,
      startTime: PromiseOrValue<BigNumberish>,
      startingBid: PromiseOrValue<BigNumberish>,
      paymentCurrency: PromiseOrValue<string>,
      extensionWindow: PromiseOrValue<BigNumberish>,
      minBidIncrement: PromiseOrValue<BigNumberish>,
      feeRecipients: PromiseOrValue<string>[],
      feePercentages: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    getAuction(
      auctionId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getAuctionEndTime(
      auctionId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getAuctionId(
      token: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isAuctionComplete(
      auctionId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    onERC1155BatchReceived(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      arg2: PromiseOrValue<BigNumberish>[],
      arg3: PromiseOrValue<BigNumberish>[],
      arg4: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    onERC1155Received(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      arg2: PromiseOrValue<BigNumberish>,
      arg3: PromiseOrValue<BigNumberish>,
      arg4: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    onERC721Received(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      arg2: PromiseOrValue<BigNumberish>,
      arg3: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    placeBid(
      auctionId: PromiseOrValue<BigNumberish>,
      bidAmount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    placeBidInEth(
      auctionId: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    settleAuction(
      auctionId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    supportsInterface(
      interfaceId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    wrappedAddress(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
