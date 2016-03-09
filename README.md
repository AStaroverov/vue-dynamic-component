# vue-dynamic-component
Component for fast creating dynamical components. <br/  
This component can help for fast migrate from pjax to vue

## [Usage and example](./index.html)

## props :component
* required: true
* type: Object
* value
  * Default
  * The standard content component: data, methods, watch, events, etc
  * keepAliveId - ID for caching the component by using [keep-alive](http://vuejs.org/guide/components.html#keep-alive)
    * required: false
    * type: String
  * inlineTemplate - Using the template from DOM, like [this](http://vuejs.org/guide/components.html#Inline_Template)
  * required: false
  * type: Boolean

## plugin options
``componentName``: changes the name of the component (default name ``'vue-dynamic-component'``)
