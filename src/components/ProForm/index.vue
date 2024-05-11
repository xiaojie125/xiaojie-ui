<template>
  <el-form class="pro-form" ref="form" :model="form" v-bind="$attrs">
    <el-row :gutter="16">
      <el-col v-for="item in formItems" :key="item.key" :span="item.span || 24">
        <el-form-item
          v-if="item._isShow"
          :rules="item._rule"
          :prop="item.key"
          :label="item.title"
        >
          <component
            :is="item.type"
            v-model="form[item.key]"
            :options="item.options"
            v-bind="item.props"
          />
        </el-form-item>
      </el-col>
    </el-row>
    <el-form-item v-if="hasControl">
      <el-button type="primary" @click="submit">{{ submitText }}</el-button>
      <el-button @click="reset">{{ resetText }}</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import BaSelect from "../base-components/ba-select";
import BaRadio from "../base-components/ba-radio";
import { computeFormItem } from "./core";

export default {
  name: "ProForm",
  components: { BaSelect, BaRadio },
  props: {
    fields: {
      type: Array,
      default: () => [],
    },
    hasControl: {
      type: Boolean,
      default: true,
    },
    submitText: {
      type: String,
      default: "提交",
    },
    resetText: {
      type: String,
      default: "重置",
    },
  },
  data() {
    return {
      form: this.initForm(),
    };
  },
  created() {
    const obj = { a: 1 };
    console.log(Object.assign(obj, { a: 2 }));
    console.log(this);
  },
  computed: {
    formItems() {
      return this.fields.map((item) => computeFormItem(item, this.form));
    },
  },
  methods: {
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
      // console.log("form", form);
      return form;
    },
    submit() {
      this.$refs.form.validate((valid) => {
        this.$emit("submit", this.form, valid);
      });
    },
    reset() {
      this.$refs.form.resetFields();
    },
    clear() {
      this.$refs.form.clearValidate();
    },
  },
};
</script>

<style scoped>
.pro-form {
  padding: 12px;
  background: white;
}
</style>
