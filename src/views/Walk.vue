<template>
    <div class="walk-container">
      <!-- 上半部分 -->
      <div class="upper-section">
        <div class="content-wrapper">
          <!-- 视频部分 -->
          <div class="video-container">
            <video controls>
              <source :src="videoSrc" type="video/mp4">
            </video>
            <p class="video-caption">走进云州</p>
          </div>
          
          <!-- 文字描述部分 -->
          <div class="text-container">
            <p class="description">
              云州区位于大同市东郊，距市区20公里，国土面积1478平方公里，耕地73万亩，
              常住总人口15万，辖9个乡镇(云州镇，倍加造镇，周士庄镇，吉家庄乡，韩马乡，
              杜庄乡，采虎乡，张家窑乡，许堡乡)，1个社区服务中心，12个社区...
            </p>
          </div>
        </div>
      </div>
  
      <!-- 下半部分 - 导航图标 -->
      <div class="lower-section">
        <div class="nav-grid">
          <div v-for="item in navItems" 
               :key="item.path" 
               class="nav-item"
               @click="navigateTo(item.path)">
            <img :src="item.imgSrc" :alt="item.title">
            <p>{{ item.title }}</p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  // 导入图片
  import folkImg from '@/assets/folk.png'
  import locationImg from '@/assets/location.png'
  import sourceImg from '@/assets/source.png'
  import historyImg from '@/assets/history.png'
  import economicImg from '@/assets/economic.png'
  // 导入视频
  import walkVideo from '@/assets/walk.mp4'
  
  export default {
    name: 'WalkPage',
    data() {
      return {
        videoSrc: walkVideo,
        navItems: [
          {
            title: '民俗风情',
            imgSrc: folkImg,
            path: '/folk2'
          },
          {
            title: '地理位置',
            imgSrc: locationImg,
            path: '/location'
          },
          {
            title: '自然资源',
            imgSrc: sourceImg,
            path: '/source'
          },
          {
            title: '历史沿革',
            imgSrc: historyImg,
            path: '/history'
          },
          {
            title: '经济社会发展',
            imgSrc: economicImg,
            path: '/economic'
          }
        ]
      }
    },
    methods: {
      navigateTo(path) {
        this.$router.push(path)
      }
    }
  }
  </script>
  
  <style scoped>
  .walk-container {
    width: 100%;
    min-height: 90vh;
    background-color: #ffffff;
  }
  
  .upper-section {
    padding: 2rem;
    background-color: #f8f9fa;
    margin-bottom: 40px;
  }
  
  .content-wrapper {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    gap: 2rem;
  }
  
  .video-container {
    flex: 1;
  }
  
  .video-container video {
    width: 100%;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  
  .video-caption {
    text-align: center;
    margin-top: 0.5rem;
    color: #666;
  }
  
  .text-container {
    flex: 1;
    background-color: white;
    padding: 1.5rem;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    height: 29vh;
  }
  
  .description {
    line-height: 1.6;
    color: #333;
    font-size: 22px;
  }
  
  .lower-section {
    padding: 2rem;
    margin-top: 100px;
  }
  
  .nav-grid {
    max-width: 1300px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 2rem;
    align-items: center;
  }
  
  .nav-item {
    width: 170px;
    height: 100px;
    padding: 1rem;
    text-align: center;
    cursor: pointer;
    background-color: white;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
  }
  
  .nav-item:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  }
  
  .nav-item img {
    width: 64px;
    height: 64px;
    margin-bottom: 0.5rem;
  }
  
  .nav-item p {
    margin: 0;
    font-size: 0.9rem;
    color: #333;
  }
  
  @media (max-width: 768px) {
    .content-wrapper {
      flex-direction: column;
    }
  
    .nav-grid {
      gap: 1rem;
    }
  
    .nav-item {
      width: 100px;
    }
  }
  </style>