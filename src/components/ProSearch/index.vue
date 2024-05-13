<template>
  <el-form
    class="pro-search"
    ref="form"
    :model="form"
    v-bind="$attrs"
    :inline="true"
  >
    <el-form-item
      v-for="item in formItems"
      :key="item.key"
      :rules="item._rule"
      :prop="item.key"
      :label="item.title"
      class="inner-label-layout"
      :class="{ 'is-active': form[item.key] || item._isActive }"
    >
      <component
        :is="item.type"
        v-model="form[item.key]"
        :options="item.options"
        v-bind="item.props"
        @focus="labelActiveHandler(item)"
        @blur="item._isActive = false"
      />
    </el-form-item>
    <el-form-item v-if="hasControl">
      <el-button type="primary" icon="el-icon-search" @click="onSearch">
        查询
      </el-button>
      <el-button v-if="isResetShow" type="primary" icon="el-icon-refresh-right" @click="onReset">
        重置
      </el-button>
      <!-- <el-button v-if="toggleFormItems.length > 0" type="text" @click="toggle">
        {{ searchFormToggle ? "收起" : "展开"
        }}<i
          :class="`el-icon-arrow-${
            searchFormToggle ? 'up' : 'down'
          } el-icon--right`"
        />
      </el-button> -->
    </el-form-item>
  </el-form>
</template>

<script>
import BaSelect from "../base-components/ba-select";
import BaRadio from "../base-components/ba-radio";
import { computeFormItem } from "./core";

export default {
  name: "ProSearch",
  components: { BaSelect, BaRadio },
  props: {
    isDefaultShow: {
      type: Boolean,
      default: true,
    },
    fields: {
      type: Array,
      default: () => [],
    },
    hasControl: {
      type: Boolean,
      default: true,
    },
    isResetShow: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      form: {},
      formItems: [],
      toggleFormItems: [],
      searchFormToggle: false,
    };
  },
  created() {
    this.init();
  },
  methods: {
    // 数据初始化
    init() {
      this.form = this.initForm();
      this.formItems = [];
      this.fields.forEach((item) => {
        const temp = computeFormItem(item, this.form);
        if (temp._isShow) {
          this.formItems.push(temp);
        }
      });
    },
    initForm() {
      const form = {};
      const map = {
        input: "",
        inputNumber: 0,
        select: "",
        datetime: "",
      };
      this.fields.forEach((item) => {
        if (item.defaultValue !== undefined) {
          form[item.key] = item.defaultValue;
        } else {
          // 每种表单类型元素不一样，所以默认值也有所不同
          form[item.key] = map[item.type];
        }
      });
      return form;
    },
    onSearch() {
      this.$refs.form.validate((valid) => {
        this.$emit("submit", this.form, valid);
      });
    },
    onReset() {
      this.form = this.initForm();
    },
    clear() {
      this.$refs.form.clearValidate();
    },
    // label动画设置
    labelActiveHandler(item) {
      console.log(item);
      if (item.type === "el-input") {
        item._isActive = true;
      }
    },
    // 调整搜索表单收起/隐藏
    toggle() {
      // 修改状态
      this.searchFormToggle = !this.searchFormToggle;
    },
  },
};
</script>

<style lang="scss" scoped>
.pro-search {
  padding: 12px;
  background: white;
  overflow: hidden;
}
// 给el-input添加动画
// 使用is-active来控制动画的显示
::v-deep .inner-label-layout {
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
  .el-select .el-input .el-input__inner::placeholder {
    opacity: 0;
  }
}
</style>
