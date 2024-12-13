<template>
  <div class="character-container">
    <section class="character-section">
      <h2 class="main-title">强化党建引领 做强特色产业</h2>
      
      <div class="section-content">
        <div class="content-wrapper">
          <div class="text-content">
            <h3>黄花产业</h3>
            <p>为使“小黄花”真正做成大品牌，云州区大力进行品牌培育。在认真研究全国各地发展黄花产业的经验后，该区摈弃“小而散”的发展模式，集中精力培育“大同黄花”区域公用品牌，把它作为品牌化战略的突破口。当地的农民、合作社和企业既可以直接使用“大同黄花”统一的包装和品牌标识，也可以在这个大品牌之下拥有自己的子品牌和个性化商标，用公用品牌为全产业链赋能。目前，该区已经培育出80多个子品牌、100多种深加工产品。除了传统的黄花干菜以外，还有黄花饼、黄花酱、黄花饮料、黄花化妆品、各种文创产品等等。</p>
          </div>
          <div class="image-wrapper">
            <img src="@/assets/cha-img1.jpg" alt="黄花产业" class="character-image">
          </div>
        </div>
      </div>
    </section>

    <section class="character-section">
      <div class="section-content">
        <div class="content-wrapper reverse">
          <div class="text-content">
            <h3>养殖产业</h3>
            <p>近年来，大同市在“草牧结合、农牧循环”方面取得显著成效，重点加强生猪、家禽、肉牛、肉羊、奶牛和饲草产业的建设。肉牛产业方面，依托天镇、阳高等县的增量提质项目，已有139个规模养殖场，灵丘佳农牧业为省内最大单体养殖园区。肉羊产业利用本地优质品种，现有236个养殖场。奶牛产业借助牧同乳业品牌，提升乳品质量，现有40个养殖场。生猪产业围绕马身猪保种场发展，全市有297个养殖场。家禽产业以百胜中国为引领，已有109个规模养殖场。饲草产业方面，大力推广优质苜蓿、燕麦种植，已建设15个饲草加工企业。</p>
          </div>
          <div class="image-wrapper">
            <img src="@/assets/cha-img2.jpg" alt="养殖产业" class="character-image">
          </div>
        </div>
      </div>
    </section>

    <section class="character-section">
      <div class="section-content">
        <div class="content-wrapper">
          <div class="text-content">
            <h3>云冈纸业</h3>
            <p>云冈纸业谱新篇，持续发展领前沿。云岗纸业集研发、生产、销售于一体，技术精湛，设备一流。秉持可持续发展的理念，践行循环经济之路，为区域经济发展做出了重要贡献。先锋队队员们亲临现场，从云岗纸业先进的发展理念中深刻领悟到可持续发展、将科技和生产结合是现代企业焕发新生机的关键所在。</p>
          </div>
          <div class="image-wrapper">
            <img src="@/assets/cha-img3.jpg" alt="云冈纸业" class="character-image">
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Character'
};
</script>

<style scoped>
.character-container {
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
  background-color: #fff;
}

.character-section {
  margin-bottom: 60px;
}

.main-title {
  color: #333;
  text-align: center;
  font-size: 28px;
  position: relative;
  margin-bottom: 40px;
  padding-bottom: 15px;
}

.main-title::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 3px;
  background-color: #e74c3c;
}

.content-wrapper {
  display: flex;
  align-items: center;
  gap: 40px;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.content-wrapper.reverse {
  flex-direction: row-reverse;
}

.text-content {
  flex: 1;
  padding: 20px;
}

.image-wrapper {
  flex: 1;
  padding: 10px;
}

.character-section h3 {
  color: #2c3e50;
  font-size: 24px;
  margin-bottom: 15px;
  position: relative;
  padding-left: 15px;
}

.character-section h3::before {
  content: '';
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 4px;
  height: 20px;
  background-color: #e74c3c;
}

.character-section p {
  font-size: 16px;
  line-height: 1.8;
  color: #666;
  margin-bottom: 20px;
}

.character-image {
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: 8px;
  transition: transform 0.3s ease;
}

.character-image:hover {
  transform: scale(1.02);
}

/* 响应式设计 */
@media screen and (max-width: 768px) {
  .content-wrapper {
    flex-direction: column;
    gap: 20px;
  }
  
  .content-wrapper.reverse {
    flex-direction: column;
  }
  
  .character-image {
    height: 200px;
  }
  
  .main-title {
    font-size: 24px;
  }
  
  .character-section h3 {
    font-size: 20px;
  }
}

@media screen and (max-width: 480px) {
  .character-container {
    padding: 10px;
  }
  
  .content-wrapper {
    padding: 10px;
  }
  
  .text-content {
    padding: 10px;
  }
  
  .character-image {
    height: 180px;
  }
}
</style>