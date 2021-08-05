<template>
  <div id="myHistogram" :style="{ width: '100%', height: '100%' }"></div>
</template>

<script>
export default {
  data() {
    return {
      xAxisData: [],
      seriesData: [],
    };
  },
  methods: {
    myHistogram() {
      // 基于准备好的dom，初始化echarts实例
      let myHistogram = this.$echarts.init(
        document.getElementById("myHistogram")
      );
      // 绘制图表
      myHistogram.setOption({
        title: { text: "Histogram", left: "center" },
        tooltip: {
          trigger: "item",
        },
        xAxis: {
          type: "category",
          data: this.xAxisData,
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            data: this.seriesData,
            type: "bar",
          },
        ],
      });
    },
  },
  mounted() {
    this.$axios({
      methods: "get",
      url: "https://edu.telking.com/api/?type=week",
    }).then((res) => {
      const data = res.data.data;
      this.xAxisData = data.xAxis;
      this.seriesData = data.series;
      this.myHistogram();
    });
  },
};
</script>
