# vue-dynamic-component
Компонент для быстрого создания динамических компонентов. <br/>
Этот компонент может помочь для быстрого перехода от pjax к vue

## Использование
```javascript
import vueDynamicComponent from 'vue-dynamic-component'

Vue.use(vueDynamicComponent [, {componentName: 'name-for-component'}])

new Vue({
  ...
  data() {
    return {
      comp: {
        template: '<div>default component with {{msg}} <button @click="msg += \'!\'">add !</button></div>',
        data() {
          return {msg: 'some text'}
        },
      }
    }
  },
  ...
})
```
```html
<vue-dynamic-component :component="comp"></vue-dynamic-component>
```

## [Пример](./index.html)

## props :component
* required: true
* type: Object
* value
  * Стандартное наполнения компонента: data, methods, watch, events и тд
  * keepAliveId - ID для кэширования компонента при помощи [keep-alive](http://vuejs.org/guide/components.html#keep-alive)
    * required: false
    * type: String
  * inlineTemplate - Использование шаблона из DOM-a, подобно [этому](http://vuejs.org/guide/components.html#Inline_Template)
    * required: false
    * type: Boolean

## plugin options
``componentName``: изменяет имя компонента (стандартное имя ``'vue-dynamic-component'``)
