# export_abi.py
# python3 export_abi.py ../pnft-contracts/artifacts/contracts/pNFT.sol/PNFT.json > ./abis/PNFT.json
# python3 export_abi.py ../pnft-contracts/artifacts/contracts/Miner.sol/Miner.json > ./abis/Miner.json

import json
import sys

abi = json.loads(open(sys.argv[1]).read())["abi"]
print(json.dumps(abi))
