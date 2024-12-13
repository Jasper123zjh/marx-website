<template>
    <div class="tour-container">
      <!-- 头部区域 -->
      <div class="header">
        <h1>山西大同云州区旅游指南</h1>
        <p>便捷畅通的交通环境、热情好客的云州人民、优美旖旎的自然风光，让您感受云州区独特的旅游魅力。</p>
      </div>
  
      <!-- 宣传视频 -->
      <div class="video-container">
        <video controls src="@/assets/tour.mp4">
          您的浏览器不支持视频播放
        </video>
      </div>
  
      <!-- 图片网格 -->
      <div class="image-grid">
        <div class="tour-card">
          <img src="@/assets/tour-img1.png" alt="云州风光1" />
        </div>
        <div class="tour-card">
          <img src="@/assets/tour-img2.png" alt="云州风光2" />
        </div>
        <div class="tour-card">
          <img src="@/assets/tour-img3.png" alt="云州风光3" />
        </div>
        <div class="tour-card">
          <img src="@/assets/tour-img4.png" alt="云州风光4" />
        </div>
      </div>
  
      <!-- 主要景点 -->
      <div class="attractions">
        <!-- 昊天寺 -->
        <section class="attraction-section">
          <h2>古刹寻幽，昊天寺静谧</h2>
          <div class="attraction-content">
            <div class="attraction-image">
              <img src="@/assets/tour-img5.jpg" alt="昊天寺" />
            </div>
            <div class="attraction-text">
              <p>昊天山，为大同火山群之一，位于区城内北一公里处，因北魏时山上建昊天寺而得名。距今已有1600多年的历史，是北方闻名的寺院之一，在中国佛教史上占有重要地位，在中国佛教史上占有重要地位。民间曾流传着"先有昊天寺，后有华严寺"的说法。明代万历年重修，清康熙年再修。1993年重新修缮，千年古刹，重放异彩。站在山顶可观古寺新颜,还可远眺睡佛雄姿,更能遍览火山奇观。</p>
            </div>
          </div>
        </section>
  
        <!-- 土林 -->
        <section class="attraction-section">
          <h2>土林奇景，自然画卷</h2>
          <div class="attraction-content reverse">
            <div class="attraction-image">
              <img src="@/assets/tour-img6.jpg" alt="大同土林" />
            </div>
            <div class="attraction-text">
              <p>大同土林，大自然的鬼斧神工之作，以独特的土柱、土林景观著称。夕阳下，形态各异的土林更显神秘莫测，仿佛一幅幅立体的自然画卷铺展眼前。这里，每一粒沙土都记录着岁月的痕迹，每一道沟壑都诉说着风与水的故事。漫步其间，不禁让人感叹大自然的创造力与生命的顽强，同时也为这片独特的地质奇观所震撼。大同土林，是大自然赋予人类的宝贵财富，也是探索自然奥秘、感受生命力量的绝佳之地。</p>
            </div>
          </div>
        </section>
  
        <!-- 火山群 -->
        <section class="attraction-section">
          <h2>火山奇观，地质探秘</h2>
          <div class="attraction-content">
            <div class="attraction-image">
              <img src="@/assets/tour-img7.jpg" alt="大同火山群" />
            </div>
            <div class="attraction-text">
              <p>大同火山群位于中国历史文化名城、山西省第二大城市-大同市东28公里处云州区境内，是大同火山断陷盆地第四纪岩浆活动及其火山地貌的总称。现为国家级地质公园，是世界上唯一一处发育在黄土高原上的火山群，也是华北地区规模最大、保存最完整的板内裂谷系火山群，是我国著名的六大火山群之一。总面积129.8平方公里，由火山群、桑干河、秋林峪3个景区组成。火山群园区是火山地质公园的核心景区，因火山锥分布最为密集、最具代表性,形态保存完好，最为出名,因此被誉为“东亚大陆稀有的自然遗产”和“火山地质博物馆”，早在1952年北京大学就在此建立了科普教学基地。</p>
            </div>
          </div>
        </section>
      </div>
  
      <!-- 未来发展 -->
      <section class="future-development">
        <h2>未来发展</h2>
        <p>云州区预计在文旅融合发展方面投入30亿元左右，建成全国具有重要影响力的"忘忧田园、山水云州"品牌生态文旅样板地，打造"大同黄花"、"大同火山"、"桑干河风光"文化标识鲜明的文旅休闲度假目的地。</p>
      </section>
    </div>
  </template>
  
  <script>
  export default {
    name: 'TourPage',
    mounted() {
      document.title = '云州区旅游 - 忘忧田园，山水云州'
    }
  }
  </script>
  
  <style scoped>
  .tour-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
    background-color: #f9fafb;
  }
  
  .header {
    text-align: center;
    margin-bottom: 40px;
  }
  
  .header h1 {
    font-size: 2.5rem;
    color: #1a1a1a;
    margin-bottom: 20px;
  }
  
  .header p {
    font-size: 1.1rem;
    color: #666;
    max-width: 800px;
    margin: 0 auto;
  }
  
  .video-container {
    width: 100%;
    margin-bottom: 40px;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  
  .video-container video {
    width: 100%;
    display: block;
  }
  
  .image-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    margin-bottom: 40px;
  }
  
  .tour-card {
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
  }
  
  .tour-card:hover {
    transform: scale(1.02);
  }
  
  .tour-card img {
    width: 100%;
    height: 300px;
    object-fit: cover;
  }
  
  .attraction-section {
    margin-bottom: 60px;
  }
  
  .attraction-section h2 {
    font-size: 2rem;
    color: #1a1a1a;
    margin-bottom: 30px;
  }
  
  .attraction-content {
    display: flex;
    gap: 30px;
  }
  
  .attraction-content.reverse {
    flex-direction: row-reverse;
  }
  
  .attraction-image {
    flex: 1;
  }
  
  .attraction-image img {
    width: 100%;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  
  .attraction-text {
    flex: 1;
    display: flex;
    align-items: center;
  }
  
  .attraction-text p {
    color: #444;
    line-height: 1.8;
  }
  
  .future-development {
    background-color: #fff;
    padding: 30px;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    margin-top: 40px;
  }
  
  .future-development h2 {
    font-size: 2rem;
    color: #1a1a1a;
    margin-bottom: 20px;
  }
  
  .future-development p {
    color: #444;
    line-height: 1.8;
  }
  
  @media (max-width: 768px) {
    .image-grid {
      grid-template-columns: 1fr;
    }
  
    .attraction-content {
      flex-direction: column;
    }
  
    .attraction-content.reverse {
      flex-direction: column;
    }
  
    .attraction-text {
      margin-top: 20px;
    }
  
    .header h1 {
      font-size: 2rem;
    }
  
    .attraction-section h2 {
      font-size: 1.8rem;
    }
  }
  </style>