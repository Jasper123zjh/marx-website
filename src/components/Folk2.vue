<template>
    <div class="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div class="max-w-7xl mx-auto">
        <!-- 页面标题 -->
        <div class="text-center mb-16">
          <h1 class="text-4xl font-bold text-gray-900 mb-4">民俗风情</h1>
          <div class="w-24 h-1 bg-red-600 mx-auto rounded-full"></div>
        </div>
  
        <!-- 内容部分 -->
        <div class="space-y-16">
          <!-- 踢鼓秧歌部分 -->
          <div class="custom-card">
            <div class="card-content">
              <div class="content-grid">
                <div class="image-container">
                  <img 
                    src="@/assets/folk1.jpg"
                    alt="踢鼓秧歌"
                    class="content-image"
                  />
                </div>
                <div class="text-container">
                  <h2 class="section-title">
                    <span class="title-accent"></span>
                    踢鼓秧歌
                  </h2>
                  <div class="text-content">
                    <p>流行于杜庄、吉家庄、麻峪口、峰峪一带，以利仁皂出名。舞蹈动作与场面变换较为复杂，所以人们又称之为"乱秧歌"。</p>
                    <p>踢鼓秧歌在组织形式上每班由十七人组成，包括秧歌头、公子、大脚婆、踢鼓、拉花、打棒、看书先生、络毛猴等角色。</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
  
          <!-- 挠阁部分 -->
          <div class="custom-card">
            <div class="card-content">
              <div class="content-grid reverse">
                <div class="text-container">
                  <h2 class="section-title">
                    <span class="title-accent"></span>
                    挠阁
                  </h2>
                  <div class="text-content">
                    <p>历史悠久，颇具特色，据清《大同县志·风土》记载，此种民间艺术形式，不同地区有不同的名称。</p>
                    <p>挠阁由上下两人表演，下由一男性青壮年双肩缚有一特制铁架，架上再缚一男（女）稚童，扮演《白蛇传》、《唐僧取经》、《翠屏山》等节目。</p>
                  </div>
                </div>
                <div class="image-container">
                  <img 
                    src="@/assets/folk2.jpg"
                    alt="挠阁"
                    class="content-image"
                  />
                </div>
              </div>
            </div>
          </div>
  
          <!-- 高跷部分 -->
          <div class="custom-card">
            <div class="card-content">
              <div class="content-grid">
                <div class="image-container">
                  <img 
                    src="@/assets/folk3.jpg"
                    alt="高跷"
                    class="content-image"
                  />
                </div>
                <div class="text-container">
                  <h2 class="section-title">
                    <span class="title-accent"></span>
                    高跷
                  </h2>
                  <div class="text-content">
                    <p>据《通典》载：后魏六年增修杂戏有长跷。这种游戏始于战国，盛于宋、元民间。</p>
                    <p>高跷装扮仍与戏曲人物结合，高跷也叫扎拐子，以木制的一双高跷腿子（约三、四尺）分绑在表演者的腿上，撑高身子，在行进中随鼓点做各种舞蹈动作。</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'FolkCustomsPage',
    data() {
      return {
        // 如果需要可以在这里添加数据
      }
    }
  }
  </script>
  
  <style scoped>
  .min-h-screen {
    min-height: 100vh;
  }
  
  .bg-gray-50 {
    background-color: #f9fafb;
  }
  
  .max-w-7xl {
    max-width: 80rem;
  }
  
  .mx-auto {
    margin-left: auto;
    margin-right: auto;
  }
  
  .text-center {
    text-align: center;
  }
  
  .mb-16 {
    margin-bottom: 4rem;
  }
  
  .text-4xl {
    font-size: 2.25rem;
    line-height: 2.5rem;
  }
  
  .font-bold {
    font-weight: 700;
  }
  
  .text-gray-900 {
    color: #111827;
  }
  
  .mb-4 {
    margin-bottom: 1rem;
  }
  
  .w-24 {
    width: 6rem;
  }
  
  .h-1 {
    height: 0.25rem;
  }
  
  .bg-red-600 {
    background-color: #dc2626;
  }
  
  .rounded-full {
    border-radius: 9999px;
  }
  
  .space-y-16 > * + * {
    margin-top: 4rem;
  }
  
  .custom-card {
    background-color: white;
    border-radius: 0.5rem;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    transition: box-shadow 0.3s ease;
  }
  
  .custom-card:hover {
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  
  .card-content {
    padding: 2rem;
  }
  
  .content-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    align-items: center;
  }
  
  .content-grid.reverse {
    direction: rtl;
  }
  
  .content-grid.reverse > * {
    direction: ltr;
  }
  
  .image-container {
    position: relative;
    width: 100%;
    height: 100%;
  }
  
  .content-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 0.5rem;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: box-shadow 0.3s ease;
  }
  
  .content-image:hover {
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  
  .text-container {
    padding: 1rem;
  }
  
  .section-title {
    font-size: 1.875rem;
    font-weight: 700;
    color: #1f2937;
    margin-bottom: 1.5rem;
    display: flex;
    align-items: center;
  }
  
  .title-accent {
    width: 0.5rem;
    height: 2rem;
    background-color: #dc2626;
    margin-right: 1rem;
    border-radius: 9999px;
    display: inline-block;
  }
  
  .text-content {
    color: #4b5563;
    line-height: 1.75;
  }
  
  .text-content p {
    margin-bottom: 1rem;
    font-size: 1.125rem;
  }
  
  @media (max-width: 768px) {
    .content-grid {
      grid-template-columns: 1fr;
    }
  
    .content-grid.reverse {
      direction: ltr;
    }
  
    .card-content {
      padding: 1rem;
    }
  
    .text-container {
      padding: 1rem 0;
    }
  }
  </style>