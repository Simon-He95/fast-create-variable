<p align="center">
<img height="200" src="./assets/kv.png" alt="fast-create-variable">
</p>
<p align="center"> English | <a href="./README_zh.md">简体中文</a></p>

Select the variable name to quickly provide the creation type, such as ref, computed, methods, function, arrowFunction, watch, reactive, etc. According to whether it is currently vue2 or vue3, generate the corresponding variable and jump to the newly created variable location.

Let me explain the function of this plugin. Normally, when we write code, we first write a template, such as el-input, then write v-model or @click and other events, and then go to the top to define ref or function. With this plugin, you can directly generate corresponding variables or methods in js logic (supports generating multiple variables and methods at the same time), and then you can initialize variable values ​​and supplement function logic according to your needs, which will save you a lot of time and the burden of coding to initialize variables.

>If you can’t use it in Cursor, because Cursor’s Github Login is not ready yet, here is another way. You can use command: `fast-create-variable.inputGithubToken`, enter your `Github Token`, and then you can use it. This process is absolutely safe. This token only needs the permission of user:account.

Currently, this plugin has a [paid plan](#-charge-plan). If you haven’t tried it yet, you can find me on [discord](https://discord.com/invite/ZnjxzMKWNW) and get a one-month free trial.

## VUE
![vue](/assets/vue.gif)


## 🚀 Support
- vue
- jsx (react)
- svelte

## ⌨️ Keybindings
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
        "description": "Generate data, methods, etc. for vue2 at the top or at the bottom"
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
      "from": "vue-router", // Dependent packages, if there are dependent packages, it will automatically determine whether to import them in the header
      "position": "top",
      "languageIds": [ // Settings take effect in those languages, vue, typescriptreact, typescript, javascriptreact, vue-vine
        "vue"
      ],
      "content": "const router = useRouter()" // Code Snippet
    },
    {
      "name": "useLocation",
      "from": "react-router-dom", // Dependent packages, if there are dependent packages, it will automatically determine whether to import them in the header
      "position": "top",
      "languageIds": [
        "typescriptreact"
      ],
      "content": "  const locations = useLocation()\n  const params = qs.parse(locations.search, { ignoreQueryPrefix: true })",
      "isInJSX": true,
      "additionalDependencies": [ // When your code snippet may use additional dependencies, you can configure them here
        {
          "name": "qs",
          "from": "qs",
          "isDefault": true // Is it the default import? The default is false. If it is false, { qs } will be imported.
        }
      ]
    },
    {
      "name": "import",
      "from": "",
      "position": "hoist-top", // Insert after the last import
      "languageIds": [
        "vue",
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
      "description": "In the vue template, create a @click event at the current location",
      "languageIds": [
        "vue"
      ],
      "content": "@click=\"${1|clickHandler,handleClick,onClick,removeHandler,onRemove,closeHandler,onClose,openHandler,onOpen,submitHandler,onSubmit,onLogin,onLogout,toggleHandler,onToggle,showHandler,onShow,hideHandler,onHide|}$2\""
    }
  ]
}
```

## 💰 Charge plan

- [Sponsor](https://github.com/Simon-He95/sponsor) me by wechat or alipay, and I will give you more permissions and time to use your GitHub account
- For users who haven't experienced it yet, you can find me on [discord](https://discord.gg/acz4n2jx2v) to get a one-month free experience qualification.
- Current plan 15Yuan/month, 150Yuan/year
- Any `bug` or `suggestion` on the plugin can be communicated on `discord`, or add me wx: `www674949287`, pull you into the wx group
- If your plugin has been activated and it doesn't work, you can try running the activation fast-create-variable command or restart vscode or cursor

## :coffee:

[buy me a cup of coffee](https://github.com/Simon-He95/sponsor)

## Sponsors

<p align="center">
  <a href="https://cdn.jsdelivr.net/gh/Simon-He95/sponsor@main/sponsors.svg">
    <img src="https://cdn.jsdelivr.net/gh/Simon-He95/sponsor@main/sponsors.png"/>
  </a>
</p>
