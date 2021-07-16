# Bytom Java-sdk

## 安装

### 从源代码构建

```shell
git clone https://github.com/Bytom/bytom-java-sdk.git
cd java-sdk
mvn package -Dmaven.test.skip=true
mvn install
```

## 使用方式

```java
public static Client generateClient() throws BytomException {
    String coreURL = Configuration.getValue("bytom.api.url");
    String accessToken = Configuration.getValue("client.access.token");
    if (coreURL == null || coreURL.isEmpty()) {
        coreURL = "http://127.0.0.1:9888/";
    }
    return new Client(coreURL, accessToken);
}

Client client = Client.generateClient();
```
> 注意:你可以创建一个文件 ```config.properties``` 来本地配置```bytom.api.url``` 和 ```client.access.token```

## 使用案例

* [`第一步：创建密钥`](#create-a-key)
* [`第二步：创建账户`](#create-an-account)
* [`第三步：创建接收者`](#create-an-receiver)
* [`第四步：创建资产`](#create-an-asset)
* [`第五步：资产上链`](#issue-asset)
    * [`创建交易`](#firstly-build-the-transaction)
    * [`签名交易`](#secondly-sign-the-transaction)
    * [`提交交易`](#finally-submit-the-transaction)

> For more details, see [API methods](https://github.com/Bytom/bytom-java-sdk/blob/master/java-sdk/doc/index.md#api-methods)

### 创建密钥

```java
String alias = "test";
String password = "123456";

Key.Builder builder = new Key.Builder().setAlias(alias).setPassword(password);
Key key = Key.create(client, builder);
```

### 创建账户

```java
String alias = "sender-account";
Integer quorum = 1;
List<String> root_xpubs = new ArrayList<String>();
root_xpubs.add(senderKey.xpub);

Account.Builder builder = new Account.Builder().setAlias(alias).setQuorum(quorum).setRootXpub(root_xpubs);

Account account = Account.create(client, builder);
```

### 创建接收者

```java
String alias = receiverAccount.alias;
String id = receiverAccount.id;

Account.ReceiverBuilder receiverBuilder = new Account.ReceiverBuilder().setAccountAlias(alias).setAccountId(id);
Receiver receiver = receiverBuilder.create(client);
```

### 创建资产

```java
 String alias = "receiver-asset";

List<String> xpubs = receiverAccount.xpubs;

Asset.Builder builder = new Asset.Builder()
                        .setAlias(alias)
                        .setQuorum(1)
                        .setRootXpubs(xpubs);
receiverAsset = builder.create(client);
```

### 资产上链

更多交易细节： [transactions](https://github.com/Bytom/bytom-java-sdk/blob/master/java-sdk/doc/transactions.md)

#### 创建交易

```java
Transaction.Template controlAddress = new Transaction.Builder()
        .addAction(
                new Transaction.Action.SpendFromAccount()
                        .setAccountId(senderAccount.id)
                        .setAssetId(senderAsset.id)
                        .setAmount(300000000)
        )
        .addAction(
                new Transaction.Action.ControlWithAddress()
                        .setAddress(receiverAddress.address)
                        .setAssetId(senderAsset.id)
                        .setAmount(200000000)
        ).build(client);
```

#### 签名交易

```java
Transaction.Template singer = new Transaction.SignerBuilder().sign(client,
        controlAddress, "123456");
```

#### 提交交易

```java
Transaction.SubmitResponse txs = Transaction.submit(client, singer);
```

### 更多的使用案例

案例：[doc](https://github.com/Bytom/bytom-java-sdk/blob/master/doc/index.md#api-methods). 

测试用例： [Junit Test Cases](https://github.com/Bytom/bytom-java-sdk/tree/master/src/test/java/io/bytom/integration)

