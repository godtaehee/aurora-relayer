import { SkeletonServer } from './skeleton.js';
import * as web3 from '../web3.js';
import pg from 'pg';
import sql from 'sql-bricks';
export declare class DatabaseServer extends SkeletonServer {
    protected pgClient?: pg.Client;
    protected _init(): Promise<void>;
    protected _query(query: string | sql.SelectStatement, args?: unknown[]): Promise<pg.QueryResult<any>>;
    eth_blockNumber(_request: any): Promise<web3.Quantity>;
    eth_call(_request: any, transaction: web3.TransactionForCall, blockNumberOrHash?: web3.Quantity | web3.Tag | web3.Data): Promise<web3.Data>;
    eth_chainId(_request: any): Promise<web3.Quantity>;
    eth_coinbase(_request: any): Promise<web3.Data>;
    eth_getBalance(_request: any, address: web3.Data, blockNumber?: web3.Quantity | web3.Tag): Promise<web3.Quantity>;
    eth_getBlockByHash(_request: any, blockHash: web3.Data, fullObject?: boolean): Promise<web3.BlockResult | null>;
    eth_getBlockByNumber(_request: any, blockNumber: web3.Quantity | web3.Tag, fullObject?: boolean): Promise<web3.BlockResult | null>;
    eth_getBlockTransactionCountByHash(_request: any, blockHash: web3.Data): Promise<web3.Quantity | null>;
    eth_getBlockTransactionCountByNumber(_request: any, blockNumber: web3.Quantity | web3.Tag): Promise<web3.Quantity | null>;
    eth_getCode(_request: any, address: web3.Data, blockNumber: web3.Quantity | web3.Tag): Promise<web3.Data>;
    eth_getFilterChanges(_request: any, filterID: web3.Quantity): Promise<web3.LogObject[]>;
    eth_getFilterLogs(_request: any, filterID: web3.Quantity): Promise<web3.LogObject[]>;
    eth_getLogs(_request: any, filter: web3.FilterOptions): Promise<web3.LogObject[]>;
    eth_getStorageAt(_request: any, address: web3.Data, key: web3.Quantity, blockNumber: web3.Quantity | web3.Tag): Promise<web3.Data>;
    eth_getTransactionByBlockHashAndIndex(_request: any, blockHash: web3.Data, transactionIndex: web3.Quantity): Promise<web3.TransactionResult | null>;
    eth_getTransactionByBlockNumberAndIndex(_request: any, blockNumber: web3.Quantity | web3.Tag, transactionIndex: web3.Quantity): Promise<web3.TransactionResult | null>;
    eth_getTransactionByHash(_request: any, transactionHash: web3.Data): Promise<web3.TransactionResult | null>;
    eth_getTransactionCount(_request: any, address: web3.Data, blockNumber: web3.Quantity | web3.Tag): Promise<web3.Quantity>;
    eth_getTransactionReceipt(_request: any, transactionHash: string): Promise<web3.TransactionReceipt | null>;
    eth_getUncleCountByBlockHash(_request: any, blockHash: web3.Data): Promise<web3.Quantity | null>;
    eth_getUncleCountByBlockNumber(_request: any, blockNumber: web3.Quantity | web3.Tag): Promise<web3.Quantity | null>;
    eth_newBlockFilter(_request: any): Promise<web3.Quantity>;
    eth_newFilter(_request: any, filter: web3.FilterOptions): Promise<web3.Quantity>;
    eth_newPendingTransactionFilter(_request: any): Promise<web3.Quantity>;
    eth_sendRawTransaction(_request: any, transaction: web3.Data): Promise<web3.Data>;
    eth_uninstallFilter(_request: any, filterID: web3.Quantity): Promise<boolean>;
    protected _fetchCurrentBlockID(): Promise<number>;
    protected _fetchEvents(transactionID: Uint8Array): Promise<unknown[]>;
    protected _fetchTransactions(blockID: number | Uint8Array, fullObject: boolean): Promise<unknown[] | string[]>;
}
