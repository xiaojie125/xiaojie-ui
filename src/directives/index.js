import elDragDialog from "./elDragDialog";
import loadMore from "./loadMore";

let tempArr = [elDragDialog,loadMore];

export default function install(Vue) {
  tempArr.forEach((item) => {
    Vue.directive(item.name, item);
  });
}
