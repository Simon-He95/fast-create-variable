<p align="center">
<img height="200" src="./assets/kv.png" alt="fast-create-variable">
</p>
<p align="center"> English | <a href="./README_zh.md">简体中文</a></p>

Select the variable name to quickly provide the creation type, such as ref, computed, methods, function, arrowFunction, watch, reactive, etc. According to whether it is currently vue2 or vue3, generate the corresponding variable and jump to the newly created variable location.

Explain the function of this plug-in. Normally, when we write code, we write template first, such as el-input and then write events such as v-model or @click, and then go to the top to define ref, or function. Through this plug-in, you can directly generate the corresponding variable or method in js logic, and then you can initialize the variable value and supplement the function logic according to your needs, which will save you a lot of time and initialize the coding burden of variables.

## VUE
![vue](/assets/vue.gif)

## JSX
![jsx](/assets/jsx.gif)

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
      "position": "hoist-top", // 插入最后一个 import 导入之后
      "languageIds": [
        "vue",
        "typescriptreact",
        "typescript",
        "javascriptreact"
      ],
      "content": "import ${2:moduleName} from '${1:module}'"
    }
  ]
}
```

## :coffee:

[buy me a cup of coffee](https://github.com/Simon-He95/sponsor)

## Sponsors

<p align="center">
  <a href="https://cdn.jsdelivr.net/gh/Simon-He95/sponsor@main/sponsors.svg">
    <img src="https://cdn.jsdelivr.net/gh/Simon-He95/sponsor@main/sponsors.png"/>
  </a>
</p>
