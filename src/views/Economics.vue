<template>
    <div class="economics-container">
      <!-- 标题栏 -->
      <div class="header">
        <h1 class="header-title">国民经济和社会发展统计信息</h1>
        <div class="search-box">
          <input type="text" placeholder="按日内搜索" class="search-input">
          <button class="search-button">搜索</button>
        </div>
      </div>
  
      <!-- 数据列表 -->
      <div class="content-list">
        <div v-for="(item, index) in economicsData" 
             :key="index" 
             class="list-item">
          <div class="item-content">
            <a :href="item.link" class="item-title">{{ item.title }}</a>
            <span class="item-date">{{ item.date }}</span>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Economics',
    data() {
      return {
        economicsData: [
          {
            title: '大同市云州区2023年国民经济和社会发展统计公报', 
            link: 'https://www.yunzhou.gov.cn/yzqrmzfz/gmjjtj/202406/c50180456dc747658f4120bb44a91c64.shtml', 
            date: '2024-06-12' 
          },
          {
            title: '大同市云州区2022年国民经济和社会发展统计公报', 
            link: 'https://www.yunzhou.gov.cn/yzqrmzfz/gmjjtj/202306/38426a3d1833496884676f7510f49515.shtml', 
            date: '2023-06-15' 
          },
          {
            title: '大同市云州区2021年国民经济和社会发展统计公报', 
            link: 'https://www.yunzhou.gov.cn/yzqrmzfz/gmjjtj/202207/b889bacd6a384b10b20df039fd1d8c8e.shtml', 
            date: '2022-07-07' 
          },
          {
            title: '大同市云州区2020年国民经济和社会发展统计公报', 
            link: 'https://www.yunzhou.gov.cn/yzqrmzfz/gmjjtj/202108/f47632f363494052abfd339fe124a834.shtml', 
            date: '2021-08-20' 
          },
          {
            title: '大同市云州区第七次全国人口普查公报', 
            link: 'https://www.yunzhou.gov.cn/yzqrmzfz/gmjjtj/202107/ce064df39ac64ba2a835f05f1e8f7790.shtml', 
            date: '2021-07-29' 
          },
          {
            title: '大同市云州区2019年国民经济和社会发展统计公报', 
            link: 'https://www.yunzhou.gov.cn/yzqrmzfz/gmjjtj/202010/4fe7b7f98d5d4882b9cb699ad2e180f7.shtml', 
            date: '2020-06-03' 
          },
          {
            title: '大同市云州区2018年国民经济和社会发展统计公报', 
            link: 'https://www.yunzhou.gov.cn/yzqrmzfz/gmjjtj/202010/cb57b8bb2bda43a4b252e07fc2b5ae70.shtml', 
            date: '2019-07-04' 
          },
          {
            title: '大同县2017年国民经济和社会发展统计公报', 
            link: 'https://www.yunzhou.gov.cn/yzqrmzfz/gmjjtj/202011/a9c3f12a9714415db9df56b66b568fb9.shtml', 
            date: '2019-03-07' 
          },
        ]
      }
    }
  }
  </script>
  
  <style scoped>
  .economics-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
  
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;
    padding-bottom: 15px;
    border-bottom: 2px solid #e6e6e6;
  }
  
  .header-title {
    color: #333;
    font-size: 20px;
    font-weight: bold;
  }
  
  .search-box {
    display: flex;
    gap: 10px;
  }
  
  .search-input {
    padding: 8px 12px;
    border: 1px solid #ddd;
    border-radius: 4px;
    width: 200px;
  }
  
  .search-button {
    padding: 8px 20px;
    background-color: #0052cc;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.2s;
  }
  
  .search-button:hover {
    background-color: #0043a4;
  }
  
  .content-list {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
  
  .list-item {
    padding: 5px 0;
  }
  
  .item-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .item-title {
    color: #0066cc;
    text-decoration: none;
    font-size: 16px;
  }
  
  .item-title:hover {
    color: #004499;
    text-decoration: underline;
  }
  
  .item-date {
    color: #666;
    font-size: 14px;
  }
  </style>