<template>
  <div id="myCurve" :style="{ width: '100%', height: '100%' }"></div>
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
    myCurve() {
      // 基于准备好的dom，初始化echarts实例
      let myCurve = this.$echarts.init(document.getElementById("myCurve"));
      // 绘制图表
      myCurve.setOption({
        title: { text: "Curve", left: "center" },
        tooltip: {},
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: this.xAxisData,
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            data: this.seriesData,
            type: "line",
            smooth: true,
            areaStyle: {},
          },
        ],
      });
    },
  },
  mounted() {
    this.$axios({
      method: "get",
      url: "https://edu.telking.com/api/?type=month",
    }).then((res) => {
      const data = res.data.data;
      this.xAxisData = data.xAxis;
      this.seriesData = data.series;
      this.myCurve();
    });
  },
};
</script>
