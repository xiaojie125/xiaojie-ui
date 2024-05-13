import ElementMap from "./element-map";
import { isFunction } from "element-ui/src/utils/types";

export function computeFormItem(config, form) {
  const item = { ...config };
  // 计算组件真实对应的名称并传入一些默认配置
  const res = ElementMap[item.type || "input"];
  item.type = res.component;
  item.props = Object.assign({}, res.props, item.props);

  // 处理联动
  if (isFunction(item.getProps)) {
    Object.assign(item.props, item.getProps(form));
  }
  item._isShow = isFunction(item.isShow)
    ? !!item.isShow(form)
    : typeof item.isShow === "boolean"
    ? item.isShow
    : true;

  // 增加动画控制变量
  item._isActive = item._isActive === undefined ? false : item._isActive;

  // 设置内容宽度
  if (item.contentWidth) {
    const temp =
      typeof item.contentWidth === "number"
        ? `${item.contentWidth}px`
        : item.contentWidth;
    item.props.style = { width: temp };
  }

  return item;
}
