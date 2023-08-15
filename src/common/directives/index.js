import elDragDialog from "./elDragDialog";

let tempArr = [elDragDialog];

export default function install(Vue) {
  tempArr.forEach((item) => {
    Vue.directive(item.name, item);
  });
}
