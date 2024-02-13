/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  EventFragment,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedLogDescription,
  TypedListener,
  TypedContractMethod,
} from "./common";

export interface ToDoListInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "createActivity"
      | "deleteActivity"
      | "getActivity"
      | "getActivityCount"
      | "markActivityAsDone"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "ActivityCreated"
      | "ActivityDeleted"
      | "ActivityMarkedAsDone"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "createActivity",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "deleteActivity",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getActivity",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getActivityCount",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "markActivityAsDone",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "createActivity",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "deleteActivity",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getActivity",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getActivityCount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "markActivityAsDone",
    data: BytesLike
  ): Result;
}

export namespace ActivityCreatedEvent {
  export type InputTuple = [
    user: AddressLike,
    activityIndex: BigNumberish,
    description: string
  ];
  export type OutputTuple = [
    user: string,
    activityIndex: bigint,
    description: string
  ];
  export interface OutputObject {
    user: string;
    activityIndex: bigint;
    description: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace ActivityDeletedEvent {
  export type InputTuple = [user: AddressLike, activityIndex: BigNumberish];
  export type OutputTuple = [user: string, activityIndex: bigint];
  export interface OutputObject {
    user: string;
    activityIndex: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace ActivityMarkedAsDoneEvent {
  export type InputTuple = [user: AddressLike, activityIndex: BigNumberish];
  export type OutputTuple = [user: string, activityIndex: bigint];
  export interface OutputObject {
    user: string;
    activityIndex: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface ToDoList extends BaseContract {
  connect(runner?: ContractRunner | null): ToDoList;
  waitForDeployment(): Promise<this>;

  interface: ToDoListInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  createActivity: TypedContractMethod<
    [_description: string],
    [void],
    "nonpayable"
  >;

  deleteActivity: TypedContractMethod<
    [_activityIndex: BigNumberish],
    [void],
    "nonpayable"
  >;

  getActivity: TypedContractMethod<
    [_activityIndex: BigNumberish],
    [[string, boolean] & { description: string; isDone: boolean }],
    "view"
  >;

  getActivityCount: TypedContractMethod<[], [bigint], "view">;

  markActivityAsDone: TypedContractMethod<
    [_activityIndex: BigNumberish],
    [void],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "createActivity"
  ): TypedContractMethod<[_description: string], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "deleteActivity"
  ): TypedContractMethod<[_activityIndex: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "getActivity"
  ): TypedContractMethod<
    [_activityIndex: BigNumberish],
    [[string, boolean] & { description: string; isDone: boolean }],
    "view"
  >;
  getFunction(
    nameOrSignature: "getActivityCount"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "markActivityAsDone"
  ): TypedContractMethod<[_activityIndex: BigNumberish], [void], "nonpayable">;

  getEvent(
    key: "ActivityCreated"
  ): TypedContractEvent<
    ActivityCreatedEvent.InputTuple,
    ActivityCreatedEvent.OutputTuple,
    ActivityCreatedEvent.OutputObject
  >;
  getEvent(
    key: "ActivityDeleted"
  ): TypedContractEvent<
    ActivityDeletedEvent.InputTuple,
    ActivityDeletedEvent.OutputTuple,
    ActivityDeletedEvent.OutputObject
  >;
  getEvent(
    key: "ActivityMarkedAsDone"
  ): TypedContractEvent<
    ActivityMarkedAsDoneEvent.InputTuple,
    ActivityMarkedAsDoneEvent.OutputTuple,
    ActivityMarkedAsDoneEvent.OutputObject
  >;

  filters: {
    "ActivityCreated(address,uint256,string)": TypedContractEvent<
      ActivityCreatedEvent.InputTuple,
      ActivityCreatedEvent.OutputTuple,
      ActivityCreatedEvent.OutputObject
    >;
    ActivityCreated: TypedContractEvent<
      ActivityCreatedEvent.InputTuple,
      ActivityCreatedEvent.OutputTuple,
      ActivityCreatedEvent.OutputObject
    >;

    "ActivityDeleted(address,uint256)": TypedContractEvent<
      ActivityDeletedEvent.InputTuple,
      ActivityDeletedEvent.OutputTuple,
      ActivityDeletedEvent.OutputObject
    >;
    ActivityDeleted: TypedContractEvent<
      ActivityDeletedEvent.InputTuple,
      ActivityDeletedEvent.OutputTuple,
      ActivityDeletedEvent.OutputObject
    >;

    "ActivityMarkedAsDone(address,uint256)": TypedContractEvent<
      ActivityMarkedAsDoneEvent.InputTuple,
      ActivityMarkedAsDoneEvent.OutputTuple,
      ActivityMarkedAsDoneEvent.OutputObject
    >;
    ActivityMarkedAsDone: TypedContractEvent<
      ActivityMarkedAsDoneEvent.InputTuple,
      ActivityMarkedAsDoneEvent.OutputTuple,
      ActivityMarkedAsDoneEvent.OutputObject
    >;
  };
}