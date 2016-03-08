import objectHash from 'object-hash'

export let install = function(Vue, {
  componentName = 'vue-dynamic-template'
} = {}) {

let componentModel = {
  template: '<div><component :is="activeComponentName" keep-alive></component></div>',
  props: {
    template: {
      type: String,
      required: true,
    },
    model: {
      type: Object,
      default: {}
    },
    options: {
      type: Object,
      coerce(opt) {
        return Object.assign({
          cache: true,
        }, opt)
      }
    },
  },
  data() {
    return {
      activeComponentName: '',
    }
  },
  watch: {
    'template && model': 'render',
  },
  created() {
    this.render()
  },
  methods: {
    render() {
      this.createComponent({
        model:          this.model,
        template:       this.template,
        options:        this.options,
        templateInline: this.templateInline
      })
    },
    createComponent({model, template, options}) {
      if (!template || template.length === 0) return

      let component =  Object.assign({}, {template: template}, model)
      let id = objectHash(component)

      if (options.cache && this.$options.components[id]) {
        this.activeComponentName = id
      } else if (template && template.length > 0) {
        this.$options.components[id] = Vue.extend(component)
        this.activeComponentName = id
      }
    }
  }
}

Vue.component(componentName, componentModel)
}
