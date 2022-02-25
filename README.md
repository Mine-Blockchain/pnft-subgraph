# pnft-subgraph

Install 

```
npm install -g @graphprotocol/graph-cli
npm install

nano subgraph.yaml
# Update Miner & PNFT address
# Update Network to ropsten / mainnet
# Update startBlock: {...} (Under source.abi) 

graph auth --product hosted-service b39d7dc405374dca8bd8e78f586480c2

graph codegen
graph deploy --product hosted-service ncodespot/pnft-ropsten

```

Eval

```
curl -i -H "Content-Type: application/json" -d '{"query": "{ skuInfoAddedEntities { id, blockTm, blockNum, skuId } }", "variables":null}' \
https://api.thegraph.com/subgraphs/name/ncodespot/pnft-ropsten
```