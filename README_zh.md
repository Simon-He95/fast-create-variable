<p align="center">
<img height="200" src="./assets/kv.png" alt="fast-create-variable">
</p>
<p align="center"> <a href="./README.md">English</a> | 简体中文</p>

选中变量名快速提供创建类型，比如ref、computed、methods、 function、 arrowFunction、 watch、 reactive,等等，根据当前是vue2还是vue3，生成对应的变量，并跳转到新创建的变量位置

解释一下这个插件的作用，正常我们写代码，是先去写template，比如 el-input 然后写 v-model 或者 @click 等事件，然后再去顶部去定义ref，或者 function，通过这个插件可以直接在 js 逻辑生成对应的变量或者方法( 支持同时生成多个变量和方法 )，然后你再去根据你的需求去初始化变量值和补充 function 逻辑即可，会节约你很多的时间，和初始化变量的 coding 负担。

>如果你在 Cursor 中不能使用，因为 Cursor 的 Github Login 还未做好，这边提供了另一种方式，可以通过 command: `fast-create-variable.inputGithubToken`, 输入你的 `Github Token`，然后就可以使用了。这个过程是绝对安全的，这个 token 只需要 user:account 的权限。

另外, 目前这个插件已有了[收费计划](#-收费计划)，如果你还未体验过，可以在 [discord](https://discord.gg/acz4n2jx2v) 上找到我，获得一个月免费体验资格。

## VUE
![vue](/assets/vue.gif)

## 🚀 支持
- vue
- jsx | tsx (react)
- svelte
- solid
- ts | js

## ⌨️ 按键
- win: ctrl+g
- mac: cmd+g

## Configuration
```json
{
  "configuration": {
    "type": "object",
    "title": "fast-create-variable",
    "properties": {
      "fast-create-variable.atTop": {
        "type": "boolean",
        "default": false,
        "description": "生成 data, methods, etc. 在 vue2 中的顶部或者底部"
      },
      "fast-create-variable.sound": {
        "type": "boolean",
        "default": false,
        "description": "Play sound when variable is created"
      },
      "fast-create-variable.snippet": {
        "type": "array",
        "default": [
          {
            "name": "useRouter",
            "from": "vue-router",
            "position": "top",
            "languageIds": ["vue"],
            "content": "const router = useRouter()"
          }
        ],
        "description": "user code snippet inject to variable"
      }
    }
  }
}
```

## 📦 Snippet
```json
// examples
{
  "fast-create-variable.snippet": [
    {
      "name": "useRouter",
      "from": "vue-router", // 依赖包, 如果有依赖包, 则会自动判断是否在头部导入
      "position": "top",
      "languageIds": [ // 设置在那些语音下生效, vue, typescriptreact, typescript, javascriptreact, vue-vine
        "vue"
      ],
      "content": "  const router = useRouter()" // 代码片段
    },
    {
      "name": "useLocation",
      "from": "react-router-dom", // 依赖包, 如果有依赖包, 则会自动判断是否在头部导入
      "position": "top",
      "languageIds": [
        "typescriptreact"
      ],
      "content": "  const locations = useLocation()\n  const params = qs.parse(locations.search, { ignoreQueryPrefix: true })",
      "isInJSX": true,
      "additionalDependencies": [ // 你的代码片段中可能会用到额外的依赖的时候, 可以在这里配置
        {
          "name": "qs",
          "from": "qs",
          "isDefault": true // 是否是默认导入, 默认是 false, 如果是 false, 则会导入 { qs }
        }
      ]
    },
    {
      "name": "import",
      "from": "",
      "position": "hoist-top", // 插入最后一个 import 导入之后
      "languageIds": [
        "typescriptreact",
        "typescript",
        "javascriptreact"
      ],
      "content": "import ${2:moduleName} from '${1:module}'"
    },
    {
      "name": "@click",
      "from": "",
      "position": "current",
      "description": "在 vue template 中, 当前位置创建 @click 事件",
      "languageIds": [
        "vue"
      ],
      "content": "@click=\"${1|clickHandler,handleClick,onClick,removeHandler,onRemove,closeHandler,onClose,openHandler,onOpen,submitHandler,onSubmit,onLogin,onLogout,toggleHandler,onToggle,showHandler,onShow,hideHandler,onHide|}$2\""
    }
  ]
}
```

## 💰 收费计划

- 通过微信或支付宝赞助我，我将为您提供更多使用 GitHub 帐户的权限和时间
- 对于尚未体验的用户，您可以在 [discord](https://discord.com/invite/ZnjxzMKWNW) 上找到我，获得一个月免费体验资格。
- 目前计划 15元/月，150元/年
- 插件上的任何 `bug` 或 `suggestions` 都可以在 `discord` 上交流，或者加我 wx: `simon_he95`，将您拉入 wx 群
- 如果你的插件已经被激活了, 却没生效, 可以尝试执行命令 activation fast-create-variable 或者 重启 vscode or cursor

## :coffee:

[请我喝一杯咖啡](https://github.com/Simon-He95/sponsor)

## Sponsors

<p align="center">
  <a href="https://cdn.jsdelivr.net/gh/Simon-He95/sponsor@main/sponsors.svg">
    <img src="https://cdn.jsdelivr.net/gh/Simon-He95/sponsor@main/sponsors.png"/>
  </a>
</p>
