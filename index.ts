import { Observable } from "rxjs";
import { AbstractConnector } from "./abstract-wallet";
import { codeMap, parameters } from "./helpers";
import { IProvider, INetwork, IConnectorMessage, IEvent, IEventError } from "./interface";

export class AbstractWallet implements AbstractConnector {
  public connector: any;
  public name: string = "AbstractWallet";
  private chainID: number;

  constructor(network: INetwork) {
    this.chainID = network.chainID;
  }

  /**
   * @returns return connect status and connect information with provider for Web3.
   * @example this.connect().then((connector: IConnectorMessage) => console.log(connector),(err: IConnectorMessage) => console.log(err));
   */
  public connect(
    provider?: IProvider,
    network?: INetwork
  ): Promise<IConnectorMessage> {
    return new Promise((resolve, reject) => {
      const connectorMsg: IConnectorMessage = {
        code: 1,
        connected: true,
      };
      resolve(connectorMsg);
      reject(false);
    });
  }

  public disconnect(): Promise<void> {
    return new Promise((resolve) => resolve(null));
  }

  /**
   * @returns return an Promise which contain an address information.
   * @example this.getAccounts().subscribe((account: any)=> {console.log('account',account)});
   */
  public getAccounts(): Promise<any> {
    return new Promise((resolve, reject) => {
      resolve(true);
    });
  }

  public eventSubscriber(): Observable<IEvent | IEventError> {
    return new Observable((observer) => {
      this.connector.on('chainChanged', async (chainId: string) => {
        observer.next({
          address: '',
          network: parameters.chainsMap[chainId],
          name: 'chainChanged',
        });
      });

      this.connector.on('accountsChanged', (address: Array<any>) => {
        if (address.length) {
          observer.next({
            address: address[0],
            network: parameters.chainsMap[parameters.chainIDMap[+this.chainID]],
            name: 'accountsChanged',
          });
        } else {
          observer.error({
            code: 3,
            message: {
              title: 'Error',
              subtitle: 'Authorized error',
              message: codeMap[3].name,
            },
          });
        }
      });
    });
  }
}
