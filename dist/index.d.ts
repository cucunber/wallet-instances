import { Observable } from "rxjs";
import { AbstractConnector } from "./abstract-wallet";
import { INetwork, IConnectorMessage, IEvent, IEventError } from "./interface";
export declare class GameStop implements AbstractConnector {
    connector: any;
    name: string;
    private chainID;
    private chainName;
    private nativeCurrency;
    private rpc;
    private blockExplorerUrl;
    /**
     * GameStop class to connect browser metamask extension to your application
     * using connect wallet.
     */
    constructor(network: INetwork);
    /**
     * Connect GameStop browser or mobile extension to application. Create connection with connect
     * wallet and return provider for Web3.
     *
     * @returns return connect status and connect information with provider for Web3.
     * @example this.connect().then((connector: IConnectorMessage) => console.log(connector),(err: IConnectorMessage) => console.log(err));
     */
    connect(): Promise<IConnectorMessage>;
    private ethRequestAccounts;
    private getChainId;
    private checkNet;
    eventSubscriber(): Observable<IEvent | IEventError>;
    /**
     * Get account address and chain information from metamask extension.
     *
     * @returns return an Observable array with data error or connected information.
     * @example this.getAccounts().subscribe((account: any)=> {console.log('account',account)});
     */
    getAccounts(): Promise<any>;
    disconnect(): Promise<void>;
}
