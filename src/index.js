export let install = function(Vue, {
  componentName = 'vue-dynamic-component'
} = {}) {

let componentModel = {
  template: '<component :is="activeComponentName" keep-alive></component>',
  props: {
    component: {
      type: Object,
      required: true,
      coerce: val => Object.create(val || {})
    }
  },
  data() {
    return {
      inlineTemplate: this.$options.el.innerHTML || false,
      componentIndex: 0,
      activeComponentName: '',
    }
  },
  watch: {
    'component': 'render',
  },
  created() {
    this.render()
  },
  methods: {
    render() {
      let {keepAliveId, inlineTemplate} = this.component

      delete this.component.keepAliveId
      delete this.component.inlineTemplate

      this.createComponent({
        keepAliveId,
        inlineTemplate,
        component: this.component,
      })
    },
    createComponent({component, keepAliveId, inlineTemplate}) {
      if (!component && !keepAliveId) return

      if (inlineTemplate && this.inlineTemplate) {
        component.template = this.inlineTemplate
      }

      if (keepAliveId && this.$options.components[keepAliveId]) {
        this.activeComponentName = keepAliveId
      } else if (component.template) {
        let name

        if (keepAliveId) {
          name = keepAliveId
        } else {
          name = 'componentIndex' + this.componentIndex++
        }

        this.$options.components[name] = Vue.extend(component)
        this.activeComponentName = name
      }
    }
  }
}

Vue.component(componentName, componentModel)
}
