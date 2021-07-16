# 编译运行全节点


## 构建可执行文件

### 基础编译

切换到比原仓库的根目录.
```bash
$ cd $GOPATH/src/github.com/bytom
$ make bytomd    # build bytomd
```
当你成功构建了项目，`bytom` 二进制文件将会在 `cmd/bytomd` 目录下.

### 运行 `bytomd`

#### 初始化

首先，初始节点:

```bash
$ cd ./cmd/bytomd
$ ./bytomd init --chain_id testnet
```

有三个选项 `--chain_id`:

- `testnet`: 连接到测试网络.
- `mainnet`: 连接到主网.
- `solonet`: 连接到单机网络

运行该指令后，你会发现 `.bytomd` 在当前文件夹生产,然后就可以启动节点了。

#### 启动节点

``` bash
$ ./bytomd node
```

下面是一些可用参数:

```
      --help        Help about any command
      --init        Initialize blockchain
      --node        Run the bytomd
      --version     Show version info
```

 `bytomd` 节点运行后,你可以进行以下操作:

- 创建密钥,然后你可以创建账户和资产.
- 发送交易, 需要构建，签名和提交交易.
- 查询所有的信息, 比如可用的密钥，账户，余额和交易等等.

#### 测试

测试library:

```
go test -v ./account 
```

推荐使用选项 `-v` (没有错误也会记录日志) 。

只测试一些方法:

```
go test -v ./account -run TestCreateAccount
```

**注意**: here all tests with prefix _TestMethod_ will be run, so if you got TestMethod, TestMethod1, then both!

**测试基准**:
切换到测试目录.
```bash
cd $GOPATH/src/github.com/bytom/test
go test -v -bench=. -benchtime=3s -run=none
```

使用 `-bench`选项去指定测试目录, 并且使用 `-benchtime` 来指定测试时间。

更多请参考 [go test flags](http://golang.org/cmd/go/#hdr-Description_of_testing_flags)