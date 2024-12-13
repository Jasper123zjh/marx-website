<template>
  <div class="main-container">
  <!-- 轮播图部分 -->
  <section class="banner">
    <div class="carousel">
      <div 
        v-for="(item, index) in carouselItems" 
        :key="index"
        class="carousel-item"
        :class="{ active: currentSlide === index }"
      >
        <img :src="item.image" :alt="item.alt" />
        <div class="carousel-caption">{{ item.caption }}</div>
      </div>
      
      <!-- 轮播图控制按钮 -->
      <button class="carousel-control prev" @click="prevSlide">❮</button>
      <button class="carousel-control next" @click="nextSlide">❯</button>
      
      <!-- 轮播图指示器 -->
      <div class="carousel-indicators">
        <button 
          v-for="(_, index) in carouselItems" 
          :key="index"
          class="indicator"
          :class="{ active: currentSlide === index }"
          @click="goToSlide(index)"
        ></button>
      </div>
    </div>
  </section>

    <!-- Rest of the content remains the same -->
    <div class="content-grid">
      <section class="announcements">
        <div class="section-header">
          <h2>通知公告</h2>
          <!-- <a href="#" class="more-link">More ></a> -->
        </div>
        <div class="featured-item">
          <img src="../assets/report1.jpg" alt="特色1" />
          <div class="text">
            <h2>重要政策举措及实施结果</h2>
            <p>2023年3月份以来，贯彻落实党中央决策部署，国务院部署及时出台...</p>
            <a href="https://www.gov.cn/zhengce/zczhjd/" class="btn">了解更多</a>
          </div>
        </div>
      </section>

      <section class="news">
        <div class="section-header">
          <h2>通知公告</h2>
          <!-- <a href="#" class="more-link">More ></a> -->
        </div>
        <div class="featured-item">
          <img src="../assets/report2.jpg" alt="特色2" />
          <div class="text">
            <h2>2024年度国务院推动高质量发展综合督察问题线索征集</h2>
            <p>为深入推动党中央、国务院重大决策部署和政策措施贯彻落实...</p>
            <a href="https://tousu.www.gov.cn/dc/" class="btn">了解更多</a>
          </div>
        </div>
      </section>
    </div>

    <section class="three-column-grid">
      <div class="column">
        <div class="section-header">
          <h2>专题热点</h2>
          <a href="https://marxism.ssap.com.cn/" class="more-link">More ></a>
        </div>
        <Card 
          v-for="item in articles.slice(0,1)" 
          :key="item.id" 
          :title="item.title" 
          :content="item.content" 
          :link="item.link"
        />
      </div>
      <div class="column">
        <div class="section-header">
          <h2>最新文章</h2>
          <a href="https://marxism.ssap.com.cn/" class="more-link">More ></a>
        </div>
        <Card 
          v-for="item in articles.slice(1,2)" 
          :key="item.id" 
          :title="item.title" 
          :content="item.content" 
          :link="item.link"
        />
      </div>
      <div class="column">
        <div class="section-header">
          <h2>著作推介</h2>
          <a href="https://marxism.ssap.com.cn/" class="more-link">More ></a>
        </div>
        <div class="book-showcase">
          <!-- Book content here -->
          <Card 
          v-for="item in articles.slice(2,3)" 
          :key="item.id" 
          :title="item.title" 
          :content="item.content" 
        />
        </div>
      </div>
    </section>
  </div>

      <!-- 添加图片导航区域 -->
      <div class="image-nav-container">
      <div class="image-nav-item">
        <img src="@/assets/marx.png" alt="马克思主义研究" />
        <div class="overlay">
          <h3>马克思主义研究</h3>
          <div class="sub-links">
            <a href="https://www.marxists.org/chinese/abc/index.htm">经典理论</a>
            <a href="https://baike.baidu.com/item/%E8%A5%BF%E6%96%B9%E9%A9%AC%E5%85%8B%E6%80%9D%E4%B8%BB%E4%B9%89/632982?fr=ge_ala">国外马克思主义</a>
            <a href="https://baike.baidu.com/item/%E5%BD%93%E4%BB%A3%E8%B5%84%E6%9C%AC%E4%B8%BB%E4%B9%89%E7%A0%94%E7%A9%B6/62841602?fr=ge_ala">当代资本主义研究</a>
            <a href="https://baike.baidu.com/item/%E9%A9%AC%E5%85%8B%E6%80%9D%E4%B8%BB%E4%B9%89%E7%A0%94%E7%A9%B6/12509386?fr=ge_ala">中国马克思主义研究</a>
          </div>
        </div>
      </div>
      <div class="image-nav-item">
        <img src="@/assets/proletariat.png" alt="社会理论" />
        <div class="overlay">
          <h3>社会理论</h3>
          <div class="sub-links">
            <a href="https://www.marxists.org/chinese/abc/index.htm">经典理论</a>
            <a href="http://xinmapai.com">新马学派</a>
            <a href="https://baike.baidu.com/item/%E6%96%B0%E9%9F%A6%E4%BC%AF%E4%B8%BB%E4%B9%89/9681577">新韦伯主义</a>
            <a href="https://theory.gmw.cn/2024-12/06/content_37723370.htm">中国问题研究</a>
          </div>
        </div>
      </div>
      <div class="image-nav-item">
        <img src="@/assets/foriegn.jpg" alt="国外社会思潮" />
        <div class="overlay">
          <h3>国外社会思潮</h3>
          <div class="sub-links">
            <a href="https://www.marxists.org/chinese/abc/index.htm">西方经典理论</a>
            <a href="https://www.cssn.cn/zzx/202302/t20230220_5589439.shtml">当代社会思潮</a>
            <a href="https://baike.baidu.com/item/%E5%90%8E%E7%8E%B0%E4%BB%A3%E4%B8%BB%E4%B9%89%E6%80%9D%E6%BD%AE/5708215">后现代主义思潮</a>
            <a href="https://www.igcu.pku.edu.cn/info/2070/4111.htm">全球化研究</a>
          </div>
        </div>
      </div>
      <div class="image-nav-item">
        <img src="@/assets/datongfo.png" alt="文化研究" />
        <div class="overlay">
          <h3>文化研究</h3>
          <div class="sub-links">
            <a href="https://www.sxdaily.com.cn/2022-02/23/content_9462398.html">电影研究</a>
            <a href="https://d.wanfangdata.com.cn/thesis/ChNNaW5lclRoZXNpczIwMjMwMzIxEglEMDIyOTM1MTgaCGZ1c254NzFx">音乐研究</a>
            <a href="https://news.gmw.cn/2018-03/14/content_27975670.htm">艺术与文化理论</a>
            <a href="http://marxism.cass.cn/mksjbyl/202406/t20240607_5757685.shtml">心理与精神分析</a>
          </div>
        </div>
      </div>
    </div>

    <!-- 标签云区域 -->
    <div class="tags-section">
      <div class="tags-container">
        <h2>学术前沿</h2>
        <div class="tags-group">
          <h3>概念</h3>
          <div class="tags">
            <a href="https://baike.baidu.com/item/1844%E5%B9%B4%E7%BB%8F%E6%B5%8E%E5%AD%A6%E5%93%B2%E5%AD%A6%E6%89%8B%E7%A8%BF/7619158?fr=ge_ala" class="tag">《1844年经济学哲学手稿》</a>
            <a href="https://baike.baidu.com/item/%E7%BB%8F%E6%B5%8E%E5%AD%A6%E6%89%8B%E7%A8%BF%281857-1858%29/15220833?fr=ge_ala" class="tag">《1857-1858年经济学手稿》</a>
            <a href="https://baike.baidu.com/item/%E8%BE%A9%E8%AF%81%E6%B3%95/100991?fr=ge_ala" class="tag">MEGA</a>
            <a href="https://baike.baidu.com/item/%E9%A9%AC%E5%85%8B%E6%80%9D%E6%81%A9%E6%A0%BC%E6%96%AF%E5%85%A8%E9%9B%86/9938790?fr=ge_ala" class="tag">辩证法</a>
            <a href="https://www.dswxyjy.org.cn/n1/2019/0617/c427184-31160152.html" class="tag">辩证唯物主义</a>
            <a href="https://baike.baidu.com/item/%E9%A9%AC%E5%85%8B%E6%80%9D%E4%B8%BB%E4%B9%89%E5%9F%8E%E5%B8%82%E6%80%9D%E6%83%B3/4024394?fr=ge_ala" class="tag">城市</a>
            <!-- 添加更多标签 -->
          </div>
        </div>
        <div class="tags-group">
          <h3>人物</h3>
          <div class="tags">
            <a href="https://www.marxists.org/chinese/adorno/index.htm" class="tag">阿多诺</a>
            <a href="https://www.marxists.org/chinese/althusser/index.htm" class="tag">阿尔都塞</a>
            <a href="https://www.marxists.org/chinese/liebknecht-w/index.htm" class="tag">阿甘本</a>
            <a href="https://www.marxists.org/chinese/ernest-mandel/index.htm" class="tag">阿伦特</a>
            <!-- 添加更多标签 -->
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue';
import Card from '@/components/Card.vue';
// 导入图片
import townImage1 from '@/assets/view-page1.jpg'
import townImage2 from '@/assets/view-page2.jpg'
import townImage3 from '@/assets/view-page3.png'

export default {
  components: { Card },
  setup() {
    const currentSlide = ref(0);
    const carouselItems = ref([
      { 
        image: townImage1,  // 使用导入的图片
        alt: '轮播图1',
        caption: '马克思雕像'
      },
      {
        image: townImage2,  // 使用导入的图片
        alt: '轮播图2',
        caption: '马克思在演讲'
      },
      {
        image: townImage3,   // 使用导入的图片
        alt: '轮播图3',
        caption: '马克思、恩格斯、列宁'
      }
    ]);
    
    let autoPlayInterval;
    
    const nextSlide = () => {
      currentSlide.value = (currentSlide.value + 1) % carouselItems.value.length;
    };
    
    const prevSlide = () => {
      currentSlide.value = currentSlide.value === 0 
        ? carouselItems.value.length - 1 
        : currentSlide.value - 1;
    };
    
    const goToSlide = (index) => {
      currentSlide.value = index;
    };
    
    const startAutoPlay = () => {
      autoPlayInterval = setInterval(nextSlide, 5000); // Change slide every 5 seconds
    };
    
    onMounted(() => {
      startAutoPlay();
    });
    
    onUnmounted(() => {
      if (autoPlayInterval) clearInterval(autoPlayInterval);
    });

    return {
      currentSlide,
      carouselItems,
      nextSlide,
      prevSlide,
      goToSlide,
      articles: [
        { id: 1, title: '关于推进气象高质量发展的实施意见', content: '为深入贯彻习近平总书记关于...', link: '/article1' },
        { id: 2, title: '云州区政府第48次常务会议召开', content: '云州区政府第48次常务会议召开...', link: '/article2' },
        { id: 2, title: '马克思主义研究数据库', content: '中国式现代化研究...', link: '/article3' },
      ],
    };
  },
};
</script>

<style scoped>
.main-container {
  max-width: 1300px;
  margin: 0 auto;
  padding: 20px;
}

/* 修改轮播图相关样式 */
.carousel {
  position: relative;
  overflow: hidden;
  border: 1px solid #e5e5e5;
  height: 500px;
  width: 100%;
}

.carousel-item {
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: opacity 0.5s ease-in-out;
}

.carousel-item.active {
  opacity: 1;
}

.carousel-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.carousel-caption {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.6);
  color: white;
  padding: 10px;
}

/* Carousel Controls */
.carousel-control {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  padding: 15px;
  cursor: pointer;
  font-size: 18px;
  z-index: 2;
}

.carousel-control:hover {
  background: rgba(0, 0, 0, 0.8);
}

.prev {
  left: 0;
}

.next {
  right: 0;
}

/* Carousel Indicators */
.carousel-indicators {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 10px;
  z-index: 2;
}

.indicator {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.5);
  border: none;
  cursor: pointer;
}

.indicator.active {
  background: white;
}

/* Rest of the styles remain the same */
.content-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-bottom: 20px;
  padding-top: 20px;
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
  border-bottom: 2px solid #8b0000;
  padding-bottom: 8px;
}

.section-header h2 {
  font-size: 18px;
  color: #333;
  margin: 0;
}

.more-link {
  color: #999;
  text-decoration: none;
  font-size: 14px;
}

.three-column-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.column {
  background: white;
  border: 1px solid #e5e5e5;
  padding: 15px;
}

.featured-item {
  border: 1px solid #e5e5e5;
  background: white;
  margin-bottom: 15px;
}

.featured-item img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.featured-item .text {
  padding: 15px;
}

.featured-item h2 {
  font-size: 16px;
  color: #333;
  margin-bottom: 10px;
}

.featured-item p {
  font-size: 14px;
  color: #666;
  line-height: 1.5;
}

.btn {
  display: inline-block;
  padding: 8px 15px;
  background-color: #8b0000;
  color: white;
  text-decoration: none;
  border-radius: 3px;
  font-size: 14px;
}

.btn:hover {
  background-color: #660000;
}

:deep(.card) {
  border: 1px solid #e5e5e5;
  background: white;
  padding: 15px;
  margin-bottom: 15px;
}

:deep(.card h3) {
  font-size: 16px;
  color: #333;
  margin-bottom: 10px;
}

:deep(.card p) {
  font-size: 14px;
  color: #666;
  line-height: 1.5;
}

:deep(.card a) {
  color: #8b0000;
  text-decoration: none;
}

:deep(.card a:hover) {
  text-decoration: underline;
}

/* 图片导航样式 */
.image-nav-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin: 0 auto 40px; /* 上边距0，左右自动，下边距40px */
  max-width: 1300px;
}

.image-nav-item {
  position: relative;
  height: 300px;
  overflow: hidden;
}

.image-nav-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 20px;
  opacity: 0;
  transition: opacity 0.3s ease;
  display: flex;
  flex-direction: column;
}

.image-nav-item:hover .overlay {
  opacity: 1;
}

.image-nav-item:hover img {
  transform: scale(1.05);
}

.overlay h3 {
  font-size: 24px;
  margin-bottom: 15px;
}

.sub-links {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.sub-links a {
  color: white;
  text-decoration: none;
  font-size: 16px;
}

.sub-links a:hover {
  text-decoration: underline;
}

/* 标签云样式 */
.tags-section {
  margin: 40px 0;
  padding: 20px;
  background: #f5f5f5;
}

.tags-container {
  max-width: 1300px; /* 确保与主容器一致 */
  margin: 0 auto;
}

.tags-container h2 {
  font-size: 24px;
  margin-bottom: 20px;
  color: #8b0000;
  border-bottom: 2px solid #8b0000;
  padding-bottom: 10px;
}

.tags-group {
  margin-bottom: 30px;
}

.tags-group h3 {
  font-size: 18px;
  margin-bottom: 15px;
  color: #333;
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.tag {
  display: inline-block;
  padding: 5px 15px;
  background: white;
  border: 1px solid #ddd;
  border-radius: 20px;
  text-decoration: none;
  color: #333;
  font-size: 14px;
  transition: all 0.3s ease;
}

.tag:hover {
  background: #8b0000;
  color: white;
  border-color: #8b0000;
}
</style>