<template>
    <div class="source-container">
      <div class="source-header">
        <h1>自然资源</h1>
      </div>
      <div class="source-content">
        <div class="section" id="land-resources">
          <h2>土地资源</h2>
          <p>国土面积1478平方公里，耕地73万亩。</p>
        </div>
        <div class="section" id="water-resources">
          <h2>水资源</h2>
          <p>水资源总量10547万立方米，其中河川径流量3094万立方米，地下水资源储量7453万立方米，人均水资源占有量620立方米。</p>
        </div>
        <div class="section" id="product-resources">
          <h2>物产资源</h2>
          <p>农作物有玉米、谷黍、马铃薯等，特色农产品有小明绿豆、哈密杏、槟果。尤其大同黄花有600年种植史，成为“一县一业”的主导产业，获得6个国家级品牌。</p>
        </div>
        <div class="section" id="biology-resources">
          <h2>生物资源</h2>
          <p>野生动物有狍子、野兔、豺、狐子、山狸子、獾子、瞎老、黄鼠狼等，禽类有鸡、鸭、鹅和天鹅、大雁、燕子、麻雀、鸽子、喜鹊、布谷鸟、啄木鸟、老鹰以及画眉、黄莺、山雀等。</p>
        </div>
        <div class="section" id="tree-resources">
          <h2>树种</h2>
          <p>有油松、落叶松等针叶林和杨树、柳树、榆树等阔叶林。</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'SourcePage',
    data() {
      return {
        // 如果有需要，可以在这里添加数据
      }
    }
  }
  </script>
  
  <style scoped>
  .source-container {
    max-width: 1200px;
    min-height: 100vh;
    background-color: #ffffff;
    padding: 2rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    margin: 0 auto;
  }
  
  .source-header {
    font-size: 1.8rem;
    color: #333;
    margin-bottom: 1rem;
    text-align: center;
  }
  
  .source-content {
    font-size: 1rem;
    line-height: 1.6;
    color: #666;
    margin-bottom: 2rem;
  }
  
  .section {
    margin-bottom: 1rem;
  }
  </style>