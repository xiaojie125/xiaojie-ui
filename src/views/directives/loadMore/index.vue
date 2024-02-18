<!-- 加载更多 -->
<template>
  <el-table
    border
    height="400"
    :data="visibleData"
    :row-key="getRowKeys"
    v-load-more.expand="{
      func: loadMore,
      target: '.el-table__body-wrapper',
      delay: 300,
    }"
    :load-more-disabled="disabledLoad"
    @selection-change="handleSelectionChange"
  >
    <el-table-column type="selection" :reserve-selection="true" width="55">
    </el-table-column>
    <el-table-column prop="date" label="日期" width="180"></el-table-column>
    <div slot="append" style="text-align: center">滚动到底部加载更多</div>
  </el-table>
</template>

<script>
export default {
  name: "index",
  data() {
    return {
      visibleCount: 10,
      tableData: [
        { id: "234", date: "2016-06-01" },
        { id: "34", date: "2016-06-01" },
        { id: "24", date: "2016-06-01" },
        { id: "23242", date: "2016-06-01" },
        { id: "23243", date: "2016-06-01" },
        { id: "23244", date: "2016-06-01" },
        { id: "23245", date: "2016-06-01" },
        { id: "23246", date: "2016-06-01" },
        { id: "23247", date: "2016-06-01" },
        { id: "23248", date: "2016-06-01" },
      ],
      multipleSelection: [],
    };
  },
  created() {
    let count = 1;
    while (count >= 0) {
      count--;
      this.tableData.push(
        { id: "1213", date: "2016-05-02" },
        { id: "11123", date: "2016-05-02" },
        { id: "123023", date: "2016-05-02" },
        { id: "1253", date: "2016-05-02" },
        { id: "1243", date: "2016-05-02" },
        { id: "1263", date: "2016-05-02" },
        { id: "1273", date: "2016-05-02" },
        { id: "1283", date: "2016-05-02" },
        { id: "1293", date: "2016-05-02" },
        { id: "1203", date: "2016-05-02" },
        { id: "1323", date: "2016-05-02" },
        { id: "1423", date: "2016-05-02" },
        { id: "1523", date: "2016-05-02" },
        { id: "1623", date: "2016-05-02" },
        { id: "1723", date: "2016-05-02" },
        { id: "1823", date: "2016-05-02" },
        { id: "1923", date: "2016-05-02" },
        { id: "1023", date: "2016-05-02" },
        { id: "12323", date: "2016-05-02" },
        { id: "134323", date: "2016-05-02" }
      );
    }
  },

  computed: {
    disabledLoad() {
      return false;
    },
    visibleData() {
      return this.tableData.slice(
        0,
        Math.min(this.tableData.length, this.visibleCount)
      );
    },
  },
  methods: {
    loadMore() {
      console.log("滚动到底部了");
      this.visibleCount += 10;
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
      console.log(this.multipleSelection);
      const ids = this.multipleSelection.map((item) => {
        return item.id;
      });
      console.log(ids);
    },
    getRowKeys(row) {
      return row.id;
    },
  },
};
</script>
<style lang="scss" scoped></style>
