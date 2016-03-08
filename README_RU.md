# vue-dynamic-template
Компонент для быстрого создания компонентов отдельно из template-а и model-и. <br/>
Этот компонент может помочь для быстрого перехода от pja к vue

## Использование
```
<div id='app'>
  <vue-dynamic-template :template="tmpl" :model="mdl"></vue-dynamic-template>
</div>
```
```
import vueDynamicTemplate from 'vue-dynamic-template'

Vue.use(vueDynamicTemplate)

new Vue({
  el: '#app',
  data() {
    return {
      tmpl: `
        <span>текст + {{text}}<span>
        <vue-my-component></vue-my-component>
      `,
      mdl: {
        data() {
          return {
            text: 'текст из модели'
          }
        },
        components: {
          'vue-my-component': {
            template: '<div>мой компонент</div>'
          }
        }
      }
    }
  },
})
```
## [Пример](./index.html)

## Компонент props
* ``template``
  * type: String
  * required: true
* ``model``
  * type: Object
  * default: {}
*  ``options``
  * type: Boolean
  * value:
    * cache - Когда вы передаете в компонент template и model из них создается экземпляр компонента, он же и кэшируется. В последствии при передаче в компонент идентичных template и model будет активирован старый, закэшированный компонент, если данная опция установленна в состояние true. Пример работы с [cache](./index.html)
      * type: Boolean
      * default: true

## Plugin options
``componentName``: change default component name (default ``'vue-dynamic-template'``)
