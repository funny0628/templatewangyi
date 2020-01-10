import {
  Input,
  Dialog,
  Button,
  Loading,
  Carousel,
  CarouselItem,
  Table,
  TableColumn,
  Popover,
  Pagination,
} from "element-ui"
import VueLazyload from "vue-lazyload"
import Meta from 'vue-meta'
import * as utils from "./index"
import { EMPTY_IMG } from "./dom"

export default {
  install(Vue) {
    const requireComponent = require.context(
      "@/base",
      true,
      /[a-z0-9]+\.(jsx?|vue)$/i,
    )
    console.log(requireComponent);
    console.log(requireComponent.keys(),)
    console.log(requireComponent.resolve,)
    console.log(requireComponent.id,)
    console.log(requireComponent.resolve("./tabs.vue"))
    console.log(requireComponent("./tabs.vue"));
    console.log(requireComponent("./tabs.vue") === require("@/base/tabs"));

    // 批量注册base组件
    requireComponent.keys().forEach(fileName => {
      const componentConfig = requireComponent(fileName)
      const componentName = componentConfig.default.name
      if (componentName) {
        Vue.component(componentName, componentConfig.default || componentConfig)
      }
    })
    
    

    Vue.prototype.$ELEMENT = { size: "small" }
    Vue.prototype.$utils = utils

    Vue.use(Input)
    Vue.use(Carousel)
    Vue.use(CarouselItem)
    Vue.use(Table)
    Vue.use(TableColumn)
    Vue.use(Popover)
    Vue.use(Pagination)
    Vue.use(Loading)
    Vue.use(Dialog)
    Vue.use(Button)

    Vue.use(Meta)

    Vue.use(VueLazyload, {
      loading: EMPTY_IMG,
      error: EMPTY_IMG,
    })
  },
}

// console.log(requireComponent.keys(),"------context")
// //  console.log(componentConfig);
// console.log(require("@/base/button"));
// // console.log(componentConfig === require("@/base/button"));