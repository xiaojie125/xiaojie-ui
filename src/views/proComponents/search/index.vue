<template>
  <div class="pro-form-demo-container">
    <el-card>
      <pro-search :fields="fields1" @submit="onSubmit" />
    </el-card>
    <br />
  </div>
</template>

<script>
import ProSearch from "@/components/ProSearch";
export default {
  name: "SearchPage",
  components: { ProSearch },
  data() {
    return {
      visible: false,
      fields1: [
        {
          key: "name",
          title: "用户名",
          type: "input",
          span: 3.5,
        },
        {
          key: "age",
          title: "年龄",
          type: "input",
          span: 3.5,
        },
        {
          key: "height",
          title: "体重",
          type: "input",
          span: 3.5,
        },
        {
          key: "hobby",
          title: "爱好",
          type: "select",
          options: [
            {
              label: "唱",
              value: "唱",
            },
            {
              label: "跳",
              value: "跳",
            },
            {
              label: "rap",
              value: "rap",
            },
            {
              label: "篮球",
              value: "篮球",
            },
          ],
          span: 3.5,
        },
        {
          key: "publishTime",
          title: "发布时间",
          type: "datetime",
          span: 3.5,
        },
        {
          key: "activeTime",
          title: "活动时间",
          type: "datetime",
          props: {
            type: "datetimerange",
          },
          span: 6.2,
        },
        {
          key: "activeTime1",
          title: "活动时间",
          type: "datetime",
          props: {
            type: "datetimerange",
          },
          span: 6,
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
