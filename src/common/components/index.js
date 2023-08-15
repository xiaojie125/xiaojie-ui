import ruler from "./ruler";

let tempArr = [ruler];

export default function install(Vue) {
  tempArr.forEach((item) => {
    Vue.component(item.name, item);
  });
}
