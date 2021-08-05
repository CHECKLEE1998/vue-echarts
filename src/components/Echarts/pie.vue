<template>
  <div id="myPie" :style="{ width: '100%', height: '100%' }"></div>
</template>

<script>
export default {
  data() {
    return {
      seriesData: [],
    };
  },
  methods: {
    myPie() {
      // 基于准备好的dom，初始化echarts实例
      let myPie = this.$echarts.init(document.getElementById("myPie"));
      // 绘制图表
      myPie.setOption({
        title: { text: "Pie", left: "center" },
        tooltip: {
          trigger: "item",
        },
        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: "50%",
            data: this.seriesData,
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)",
              },
            },
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
      for (let i = 0; i < data.xAxis.length; i++) {
        this.seriesData.push({
          name: data.xAxis[i],
          value: data.series[i],
        });
      }
      this.myPie();
    });
  },
};
</script>
