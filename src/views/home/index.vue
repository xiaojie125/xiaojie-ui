<!--  -->
<template>
  <div>
    <el-form>
      <el-form-item
        label="表单"
        class="asterisk-left"
        :class="{ 'is-active': msg || isActive }"
      >
        <el-input
          v-model="msg"
          class="itemlabel"
          @blur="isActive = false"
          @focus="isActive = true"
        />
      </el-form-item>
      <el-form-item
        label="下拉框"
        class="asterisk-left"
        :class="{ 'is-active': value || isActive }"
      >
        <el-select
          v-model="value"
          @blur="isActive = false"
          @focus="isActive = true"
          clearable
        >
          <el-option label="1" value="1" />
          <el-option label="2" value="2" />
        </el-select>
      </el-form-item>
      <el-form-item
        label="时间选择器"
        class="asterisk-left"
        :class="{ 'is-active': timeValue || isActive }"
      >
        <el-time-select
          v-model="timeValue"
          @blur="isActive = false"
          @focus="isActive = true"
        />
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      msg: "",
      value: "",
      timeValue: "",
      isActive: false,
    };
  },
  methods: {},
};
</script>
<style lang="scss">
.asterisk-left {
  position: relative;
  margin-bottom: 10px;
  padding-top: 10px;
  .el-form-item__label {
    position: absolute;
    top: 18px;
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
    top: 0;
  }
}
</style>
