<template>
  <div class="pro-form-demo-container">
    <el-card>
      <pro-form :fields="fields1" label-width="100px" @submit="onSubmit" />
    </el-card>
    <br />
  </div>
</template>

<script>
import ProForm from "@/components/ProForm";
export default {
  name: "FormPage",
  components: { ProForm },
  data() {
    return {
      visible: false,
      fields1: [
        {
          key: "name",
          title: "用户名",
          type: "input",
          isRequired: true,
        },
        {
          key: "publishTime",
          title: "发布时间",
          type: "datetime",
          isRequired: true,
        },
        {
          key: "activeTime",
          title: "活动时间",
          type: "datetime",
          props: {
            type: "datetimerange",
          },
        },
        {
          key: "moreConditions",
          title: "更多条件",
          type: "select",
          options: [
            {
              label: 1,
              value: 1,
            },
          ],
        },
      ],
    };
  },
  methods: {
    onSubmit(form, valid) {
      console.log(form, valid);
    },
  },
};
</script>
