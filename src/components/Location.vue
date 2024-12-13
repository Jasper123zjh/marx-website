<template>
    <div class="location-container">
      <div class="location-header">
        <h1>地理位置</h1>
      </div>
      <div class="location-content">
        <p>云州区位于东经113°20′-113°55′，北纬39°43′-40°16′，东接阳高县、南连浑源县和怀仁市、北邻新荣区、西依平城区、云冈区，区境东西相距约45千米，南北相隔约60千米，总面积1478平方千米，属晋冀蒙交汇之地。</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'LocationPage',
    data() {
      return {
        // 如果有需要，可以在这里添加数据
      }
    }
  }
  </script>
  
  <style scoped>
  .location-container {
    max-width: 1200px;
    min-height: 100vh;
    background-color: #ffffff;
    padding: 2rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    margin: 0 auto;
  }
  
  .location-header {
    font-size: 1.8rem;
    color: #333;
    margin-bottom: 1rem;
    text-align: center;
  }
  
  .location-content {
    font-size: 1rem;
    line-height: 1.6;
    color: #666;
    margin-bottom: 2rem;
  }
  </style>