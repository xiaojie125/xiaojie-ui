<!-- 查询表单 -->
<template>
  <el-form inline>
    <el-form-item
      v-for="(searchItem, index) in searchList"
      :key="index"
      :label="searchItem.label"
      class="inner-label-layout"
      :class="{ 'is-active': form[searchItem.prop] || searchItem.isActive }"
    >
      <template v-if="searchItem.type == 'input'">
        <el-input
          v-model="form[searchItem.prop]"
          @focus="labelActiveHandler(searchItem)"
          @blur="searchItem.isActive = false"
        />
      </template>
      <template v-else-if="searchItem.type == 'select'">
        <el-select
          v-model="form[searchItem.prop]"
          @change="labelActiveHandler(searchItem)"
          clearable
        >
          <el-option
            v-for="(op, index) in searchItem.options"
            :key="`searchItem.prop${index}`"
            :label="op.label"
            :value="op.value"
          />
        </el-select>
      </template>
    </el-form-item>
    <el-form-item>
      <slot name="other"></slot>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="getSearchFormHandler">查询</el-button>
      <slot name="afterSearchBtn"></slot>
    </el-form-item>
  </el-form>
</template>

<script>
/**
 * searchList 数据格式
 * [
 *  {
 *     type: 'input',
 *     label: '输入框1',
 *     prop: '',
 *     isActive: false
 *  }
 * ]
 */
export default {
  name: "SearchForm",
  props: {
    searchList: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      form: {},
    };
  },
  methods: {
    // 获取表单数据
    getSearchFormHandler() {
      // 将不为空的参数提取出来
      const data = Object.fromEntries(
        Object.entries(this.form).filter(
          ([key, value]) =>
            value !== null &&
            value !== undefined &&
            Object.keys(value).length !== 0
        )
      );
      this.$emit("getSearchForm", data);
    },
    // label动画设置
    labelActiveHandler(item) {
      if (item.type === "input") {
        item.isActive = true;
      } else if (item.type === "select") {
        item.isActive = Boolean(item.value === "");
      }
    },
  },
};
</script>
<style lang="scss">
// 给el-input添加动画
// 使用is-active来控制动画的显示
.inner-label-layout {
  position: relative;
  .el-form-item__label {
    position: absolute;
    top: 10px;
    left: 8px;
    z-index: 2;
    font-size: 12px;
    background: #fff;
    height: 20px;
    line-height: 20px;
    padding: 0 8px;
    transition: top 0.3s;
    // 去除点击事件
    pointer-events: none;
  }
  &.is-active .el-form-item__label {
    top: -8px;
  }
}
</style>
