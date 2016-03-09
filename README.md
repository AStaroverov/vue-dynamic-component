# vue-dynamic-component ([ru](./README_RU.md))
Component for fast creating dynamical components. <br/>
This component can help for fast migrate from pjax to vue

## Usage
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

## [Example](./index.html)

## props :component
* required: true
* type: Object
* value
  * The standard content component: data, methods, watch, events, etc
  * keepAliveId - ID for caching the component by using [keep-alive](http://vuejs.org/guide/components.html#keep-alive)
    * required: false
    * type: String
  * inlineTemplate - Using the template from DOM, like [this](http://vuejs.org/guide/components.html#Inline_Template)
    * required: false
    * type: Boolean

## plugin options
``componentName``: changes the name of the component (default name ``'vue-dynamic-component'``)
