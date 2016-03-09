# vue-dynamic-component
Компонент для быстрого создания динамических компонентов. <br/>
Этот компонент может помочь для быстрого перехода от pjax к vue

## [Использование и пример](./index.html)

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
