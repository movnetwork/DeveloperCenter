---
sidebar: auto
---

# FAQ


## 1.Why does my address start with bm/0x？

A:Bytom mainnet address is named in a different way from erc20 address. Bytom mainnet addresses start with bm while erc20 token is 0x. You can’t transfer mainnet asset to erc20 address and vice versa.

## 2.There isn’t any transaction and balance in my wallet.

A:Maybe your block isn’t fully sync. If you need to check your balance in your wallet, you have to sync to the block that contains your transaction.Check it in “MAINNET SYNC STATUS” whether your block is fully sync.

## 3.What can I do if I forget my password？

A:You can try to reset your password in “KEYS”. You need to enter your former password so you could try with your common password. If it doesn’t work，I’m very sorry that You have lost your asset. Please do remember your password, you cant get back your password once you forget it.

## 4.There is no address of previous transaction in the wallet I recovered, and the balance cannot be found even sync to the latest block

A:The current backup function of Bytom wallet is only a snapshot of the wallet. For the transactions that occur after the backup will not be recorded in the backup file, which needs to be obtained by extra calculation.
Copy the backup TXT file and find the following in the TXT file:
“quorum”:1,”id”:”0DEAKHD000A02",”alias”:”xxx”,”keyIndex”:1},”contractIndex”:4} 
Increase the number behind contractindex，such as 4 into 10 (if your backup file not contractIndex, add according to the above format )，save this txt file and delete former wallet ，recover the backup TXT .

## 5.tx rejected:

 checking result 0: checking output source: checking value source: checking gas input: checking control program: data stack underflow [prog 76ab143801979674e656c09620d94623dd900a40e9bb2788ae7cac = DUP HASH160 0x3801979674e656c09620d94623dd900a40e9bb27 EQUALVERIFY TXSIGHASH SWAP CHECKSIG; args 0b1434bea15d0585d447df613e463306ad92237701807f9655655b12ee6e7f76]

A：password error. Try again in 5 minutes. If you forget your password, You‘d better to reset your password.

## 6.Errors occurred in one or more actions-<action index 0:

 reserving utxos: reservation found outputs already reserved>

A:To prevent password brute force cracking, you must wait five minutes for a second transaction when the first one fails.

## 7.How can I confirm whether my transaction is recorded on blockchain？

A:You can search txid by blockchain explorer.

official blockchain explorer：[http://blockmeta.com/](http://blockmeta.com/)
community explorer：[http://www.btmscan.com/](http://www.btmscan.com/)；[https://bytomscan.io/](https://bytomscan.io/)

## 8.Will my BTM be invalid if exchanges doesn’t support swap anymore？

A：We suggest you to transfer your BTM to exchanges which support mainnet asset swap. BTM wont be obsoleted. If exchanges doesn’t support swap anymore, your BTM cannot be traded anymore

## 9.My wallet can’t sync.

A:Maybe you can’t connect with other nodes because of network problem，please wait patiently.

## 10.Why can’t I transfer a large amount of BTM？

A:UTXO is too fragmented to support more than 10 UTXO transactions in one single transaction. If you cannot transfer large assets, split them into small amount.

## 11.What if block sync is too slow？

A: Go to the official website wallet page： [https://bytom.io/wallet/](https://bytom.io/wallet/)download block record package, extract package to get core.db, and replace the file of the same name according to the path of Bytom wallet. Path of each system is as following：

Windows ： ‘%APPDATA%/Roaming/Bytom/data/core.db’
Mac ：’~/Library/Bytom/data/core.db’
Linux：’~/.bytom/data/core.db’