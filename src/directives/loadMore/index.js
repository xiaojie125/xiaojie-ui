// 在table中加载更多的指令
export default {
  name: "loadMore",
  bind(el, binding, vNode) {
    const { expand } = binding.modifiers;
    // 使用更丰富的功能，支持父组件的指令作用在指定的子组件上
    if (expand) {
      /**
       * target 目标DOM节点的类名
       * distance 减少触发加载的距离阈值，单位为px
       * func 触发的方法
       * delay 防抖时延，单位为ms
       * load-more-disabled 是否禁用无限加载
       */
      let { target, distance = 0, func, delay = 200 } = binding.value;
      if (typeof target !== "string") return;
      let targetEl = el.querySelector(target);
      if (!targetEl) {
        console.log("找不到容器");
        return;
      }
      binding.handler = debounce(function () {
        const { scrollTop, scrollHeight, clientHeight } = targetEl;
        let disabled = el.getAttribute("load-more-disabled");
        disabled = vNode[disabled] || disabled;

        if (scrollHeight <= scrollTop + clientHeight + distance) {
          if (disabled) return;
          func && func();
        }
      }, delay);
      targetEl.addEventListener("scroll", binding.handler);
    } else {
      binding.handler = helper.debounce(function () {
        const { scrollTop, scrollHeight, clientHeight } = el;
        if (scrollHeight === scrollTop + clientHeight) {
          binding.value && binding.value();
        }
      }, 200);
      el.addEventListener("scroll", binding.handler);
    }
  },

  unbind(el, binding) {
    let { arg } = binding;
    // 使用更丰富的功能，支持父组件的指令作用在指定的子组件上
    if (arg === "expand") {
      /**
       * target 目标DOM节点的类名
       * offset 触发加载的距离阈值，单位为px
       * method 触发的方法
       * delay 防抖时延，单位为ms
       */
      const { target } = binding.value;
      if (typeof target !== "string") return;
      let targetEl = el.querySelector(target);
      targetEl && targetEl.removeEventListener("scroll", binding.handler);
      targetEl = null;
    } else {
      el.removeEventListener("scroll", binding.handler);
      el = null;
    }
  },
};

function debounce(func, delay) {
  let timer = null;
  return function () {
    if (timer) clearTimeout(timer);
    timer = null;
    let self = this;
    let args = arguments;
    timer = setTimeout(() => {
      func.apply(self, args);
    }, delay);
  };
}
