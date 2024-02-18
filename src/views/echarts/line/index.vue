<!-- 折线图 -->
<template>
  <div id="line-echarts" style="width: 500px; height: 500px"></div>
</template>

<script>
import * as echarts from "echarts";
// import resize from "../mixins/resize";

export default {
  name: "lineEcharts",
  // mixins: [resize],
  data() {
    return {
      id: "line-echarts",
    };
  },
  mounted() {
    this.initCharts();
  },
  methods: {
    initCharts() {
      this.chart = echarts.init(document.getElementById(this.id));
      this.setOptions();
    },
    setOptions() {
      this.chart.setOption({
        xAxis: {
          type: "category",
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            data: [150, 230, 224, 218, 135, 147, 260],
            type: "line",
          },
        ],
      });
    },
  },
  watch: {
    options: {
      handler(options) {
        this.chart.setOption(this.options);
      },
      deep: true,
    },
  },
};
</script>
<style lang="scss" scoped></style>
