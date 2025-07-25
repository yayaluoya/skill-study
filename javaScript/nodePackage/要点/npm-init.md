# 关于 npm init 命令的深度理解

具体文档见 https://docs.npmjs.com/cli/v9/commands/npm-init

npm init <package-spec> (same as `npx <package-spec>`)
npm init <@scope> (same as `npx <@scope>/create`)

aliases: create, innit

npm init <initializer>可用于设置新的或现有的 npm 包。

initializer在本例中是一个名为 的 npm 包， 它将由 npm-exec 安装，然后具有其 主 bin 已执行 -- 大概是创建或更新和 运行任何其他与初始化相关的操作。create-<initializer>package.json

init 命令转换为相应的操作，如下所示 遵循：npm exec

npm init foo -> npm exec create-foo
npm init @usr/foo -> npm exec @usr/create-foo
npm init @usr -> npm exec @usr/create
npm init @usr@2.0.0 -> npm exec @usr/create@2.0.0
npm init @usr/foo@2.0.0 -> npm exec @usr/create-foo@2.0.0
如果省略了初始值设定项（仅通过调用），init 将下降 回到旧版初始化行为。它会问你一堆问题，以及 然后为你写一个package.json。它将试图使合理 基于现有字段、依赖项和所选选项的猜测。是的 严格相加，因此它将保留已经存在的任何字段和值 设置。您也可以使用 / 完全跳过问卷。如果 您传递 ，它将创建一个作用域包。npm init-y--yes--scope

注意：如果用户已经拥有包 全局安装，这将是用途。如果你想要 npm 使用最新版本或必须指定的其他特定版本 它：create-<initializer>npm init

npm init foo@latest# 获取并运行最新的 书记官处create-foo
npm init foo@1.2.3# 专门运行create-foo@1.2.3
