<template>
    <div class="container">
        <button @click="render"></button>
        <div class="canvasDiv">
            <canvas id="chart"></canvas>
        </div>
    </div>
</template>


<script>
export default {
  name: 'Canvas',

  methods:{
      render(){
          const chart = document.getElementById('chart')
          let ctx = chart.getContext('2d');
          chart.height = 480;
          chart.width  = 640;
          ctx.clearRect(0, 0, chart.width, chart.height);
          ctx.beginPath();
            ctx.moveTo(10, 15);
            ctx.bezierCurveTo(75, 55, 175, 20, 250, 15);
            ctx.moveTo(10, 15);
            ctx.quadraticCurveTo(100, 100, 250, 15);
            ctx.stroke();
        }
    }
}
</script>

<style scoped>
.canvasDiv{
    border: 1px solid black;
}
</style>
