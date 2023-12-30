<p align="center">
<img height="200" src="./assets/kv.png" alt="fast-create-variable">
</p>
<p align="center"> <a href="./README.md">English</a> | 简体中文</p>

选中变量名快速提供创建类型，比如ref、computed、methods、 function、 arrowFunction、 watch、 reactive,等等，根据当前是vue2还是vue3，生成对应的变量，并跳转到新创建的变量位置

解释一下这个插件的作用，正常我们写代码，是先去写template，比如el-input然后写v-model 或者 @click等事件，然后再去顶部去定义ref，或者 function，通过这个插件可以直接在js逻辑生成对应的变量或者方法，然后你再去根据你的需求去初始化变量值和补充function逻辑即可，会节约你很多的时间，和初始化变量的coding负担。

## VUE
![vue](/assets/vue.gif)

## JSX
![jsx](/assets/jsx.gif)

## 🚀 支持
- vue
- jsx | tsx (react)
- svelte

## ⌨️ 按键
- win: ctrl+g
- mac: cmd+g

## Configuration
```javascript
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
        }
      }
    }
```

## :coffee:

[请我喝一杯咖啡](https://github.com/Simon-He95/sponsor)

## Sponsors

<p align="center">
  <a href="https://cdn.jsdelivr.net/gh/Simon-He95/sponsor@main/sponsors.svg">
    <img src="https://cdn.jsdelivr.net/gh/Simon-He95/sponsor@main/sponsors.png"/>
  </a>
</p>
