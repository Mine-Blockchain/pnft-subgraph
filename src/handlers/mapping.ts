
// import { SetGreet } from "../../generated/GraphNodeTest/Greeter"
// import { SetGreetEntity } from "../../generated/schema"

import { SkuInfoAdded, SkuInfoUpdated, Purchased, WithdrawFund, Claimed, Miner} from "../../generated/GraphNodeMiner/Miner"
import { PNFTMint, Transfer, PNFT } from "../../generated/GraphNodePNFT/PNFT"

import { SkuInfoAddedEntity, SkuInfoUpdatedEntity, PurchasedEntity, WithdrawFundEntity, ClaimedEntity, PNFTMintEntity, PNFTTransferEntity } from "../../generated/schema"

export function handleSkuInfoAdded(event: SkuInfoAdded): void {
    let obj = new SkuInfoAddedEntity(event.transaction.hash.toHex());
    obj.blockNum = event.block.number;
    obj.blockTm = event.block.timestamp;
  
    obj.skuId = event.params.skuId;
    obj.unitPrice = event.params.unitPrice;
    obj.stockSize = event.params.stockSize;
    obj.paymentToken = event.params.paymentToken;
    obj.pRewardToken = event.params.pRewardToken;
    obj.xRewardToken = event.params.xRewardToken;
    obj.lifeTime = event.params.lifeTime;
    obj.save();
}

export function handleSkuInfoUpdated(event: SkuInfoUpdated): void {
    let obj = new SkuInfoUpdatedEntity(event.transaction.hash.toHex());
    obj.blockNum = event.block.number;
    obj.blockTm = event.block.timestamp;
  
    obj.skuId = event.params.skuId;
    obj.unitPrice = event.params.unitPrice;
    obj.stockSize = event.params.stockSize;
    obj.save();
}

export function handleClaimed(event: Claimed): void {
    let obj = new ClaimedEntity(event.transaction.hash.toHex());
    obj.blockNum = event.block.number;
    obj.blockTm = event.block.timestamp;
  
    obj.user = event.params.user;
    obj.skuId = event.params.skuId;
    obj.pRewardAmount = event.params.pRewardAmount;
    obj.xRewardAmount = event.params.xRewardAmount;
    obj.prevRewardIndex = event.params.prevRewardIndex;
    obj.curRewardIndex = event.params.curRewardIndex;
    obj.tm = event.params.tm;
    obj.save();
}

export function handlePurchased(event: Purchased): void {
    let obj = new PurchasedEntity(event.transaction.hash.toHex());
    obj.blockNum = event.block.number;
    obj.blockTm = event.block.timestamp;
  
    obj.user = event.params.user;
    obj.skuId = event.params.skuId;
    obj.size = event.params.size;
    obj.cost = event.params.cost;
    obj.tokenId = event.params.tokenId;
    obj.save();
}

export function handleWithdrawFund(event: WithdrawFund): void {
    let obj = new WithdrawFundEntity(event.transaction.hash.toHex());
    obj.blockNum = event.block.number;
    obj.blockTm = event.block.timestamp;
  
    obj.to = event.params.to;
    obj.tokenAddr = event.params.tokenAddr;
    obj.amount = event.params.amount;
    obj.save();
}

// ----------------------------------------------------------------------------

export function handlePNFTMint(event: PNFTMint): void {
    let obj = new PNFTMintEntity(event.transaction.hash.toHex());
    obj.blockNum = event.block.number;
    obj.blockTm = event.block.timestamp;
  
    obj.tokenId = event.params.tokenId;
    obj.to = event.params.to;
    obj.skuId = event.params.skuId;
    obj.size = event.params.size;
    obj.ctime = event.params.ctime;
    obj.save();
}

export function handleTransfer(event: Transfer): void {
    let obj = new PNFTTransferEntity(event.transaction.hash.toHex());
    obj.blockNum = event.block.number;
    obj.blockTm = event.block.timestamp;
  
    obj.from = event.params.from;
    obj.to = event.params.to;
    obj.tokenId = event.params.tokenId;

    let pNft = PNFT.bind(event.address);
    let meta = pNft.getMeta(event.params.tokenId);
    obj.skuId = meta.value0;
    obj.size = meta.value1;
    obj.ctime = meta.value2;

    obj.save();
}
