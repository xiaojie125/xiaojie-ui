import Ruler from "./Ruler";
import SplitPane from "./SplitPane";
import SvgIcon from "./SvgIcon";
import button from "./Button";

const tempArr = [Ruler, SplitPane, SvgIcon, button];

export default function install(Vue) {
  tempArr.forEach((item) => {
    Vue.component(item.name, item);
  });
}
