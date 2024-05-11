<!--  -->
<template>
  <div>
    <div class="new-tag">
      <el-input
        ref="saveTagInput"
        v-model.trim="inputValue"
        class="input-new-tag"
        placeholder="请输入标签"
        @keyup.enter.native="handleInputConfirm"
      />
      <el-button
        icon="el-icon-plus"
        class="button-new-tag"
        size="small"
        @click="handleInputConfirm"
        >添加</el-button
      >
    </div>

    <div v-for="(tag, index) in dynamicTags" :key="index" class="tags-inline">
      <el-input
        v-if="editable[index]"
        :ref="'editableInput' + index"
        v-model="tag.label"
        class="input-edit-tag"
        size="small"
        placeholder="请输入标签"
        maxlength="100"
        @keyup.enter.native="handleEditableInputConfirm(tag, index)"
        @change="handleEditableInputConfirm(tag, index)"
        @blur="handleEditableInputBlur(tag, index)"
      />
      <el-tag
        v-else
        closable
        :disable-transitions="false"
        @click="showEditTagInput(index)"
        @close="handleClose(tag, index)"
        >{{ tag.label }}</el-tag
      >
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dynamicTags: [],
      inputVisible: false,
      inputValue: "",
      editable: [],
    };
  },
  methods: {
    // 确认添加标签
    handleInputConfirm() {
      const inputValue = this.inputValue;
      if (inputValue) {
        this.dynamicTags.push({ label: inputValue });
      }
      this.inputVisible = false;
      this.inputValue = "";
      this.$nextTick((_) => {
        this.$refs.saveTagInput.$refs.input.focus();
      });
    },
    // 编辑 标签 input显示
    showEditTagInput(index) {
      this.$set(this.editable, index, true);
      this.$nextTick((_) => {
        const editableInput = "editableInput" + index;
        this.$refs[editableInput][0].$refs.input.focus();
      });
    },
    // 编辑 标签 input发生改变
    handleEditableInputConfirm(item, index) {
      if (item.label) {
        this.$set(this.editable, index, false);
      } else {
        this.$message({ message: "请输入标签", type: "info" });
      }
    },
    // 编辑 标签 input失去焦点
    handleEditableInputBlur(item, index) {
      this.$set(this.editable, index, false);
    },
    // 删除 标签
    handleClose(tag, index) {
      this.dynamicTags.splice(index, 1);
    },
  },
};
</script>
