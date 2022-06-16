export interface IRPCMap {
  [chainId: number]: string;
}
export interface IWalletConnectProviderOptions {
  useProvider?: "rpc" | "infuraId" | "bridge";
  provider?: {
    bridge?: string;
    infuraId?: string;
    rpc?: IRPCMap;
  };
}

export interface IProvider extends IWalletConnectProviderOptions {
  name: string;
}

export interface IEvent {
  name: string;
  address: string;
  network: {
    name: string;
    chainId: number;
  };
}

export interface INativeCurrency {
  name: string,
  symbol: string,
  decimals: number,
}

export interface IEventError extends IEvent {
  code: number;
  message?: {
    title: string;
    subtitle: string;
    text: string;
  };
}

export interface IConnectorMessage {
  code: number;
  type?: string;
  connected: boolean;
  provider?: string | any;
  message?: {
    title: string;
    subtitle: string;
    text: string;
  };
}

export interface IError {
  code: number;
  type?: string;
  message?: {
    title: string;
    subtitle: string;
    text: string;
  };
}

export interface ISettings {
  providerType?: boolean;
}

export interface INativeCurrency {
  name: string;
  symbol: string;
  decimals: number;
}

export interface INetwork {
  chainName: string;
  chainID: number;
  nativeCurrency?: INativeCurrency;
  rpc?: string;
  blockExplorerUrl?: string;
}

export interface IMessageProvider {
  code: number;
  message?: {
    title?: string;
    text: string;
  };
  provider?: string;
}
