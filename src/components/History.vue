<template>
    <div class="history-container">
      <div class="history-header">
        <h1>历史沿革</h1>
      </div>
      <div class="history-content">
        <p><strong>战国</strong>，属赵。</p>
        <p><strong>秦朝</strong>，置平城县，故治在今大同城东北古城，属雁门郡。新莽改平城县为平顺县，</p>
        <p><strong>东汉</strong>，复旧。建安末年废，</p>
        <p><strong>三国</strong>，魏复置，属新兴郡。</p>
        <p><strong>晋朝</strong>，改属雁门郡。</p>
        <p><strong>北魏</strong>，延和元年（432年）改万年县。太和十七年（493年）复名平城，属恒州，兼为州治，故治在今大同城东3千米无忧坡上。</p>
        <p><strong>北齐</strong>，天保七年（556年）改太平县，属代郡。时又于县西北置临塞县和临阳县。</p>
        <p><strong>北周</strong>，废置，同时改太平县为云中县，属长宁郡，故治在大同城西北15千米。</p>
        <p><strong>隋朝</strong>，开皇二年（582年）改云内县，属马邑郡。</p>
        <p><strong>唐朝</strong>，贞观十四年（640年）定襄县自朔州北界定襄城故址徙此，属云州，兼为州治，云内县废入，故治在今大同城西北15千米。永淳元年（682年）为默啜所破，州、县俱废。开元十八年（730年）复为云中县，属云州，故治在今大同城东3千米。</p>
        <p><strong>五代</strong>，晋割入契丹，隶西京道。</p>
        <p><strong>辽朝</strong>，重熙十七年（1048年）析云中县地置大同县，属西京道。</p>
        <p><strong>金朝</strong>，初于县境置裕民县，故治在今大同城西北，皇统初年废。</p>
        <p><strong>元朝</strong>，至元二年（1265年）云中县废入大同县，属大同路。</p>
        <p><strong>明朝、清朝</strong>，俱属大同府。</p>
        <p><strong>中华民国</strong>，初年属雁门道，后属省。抗日战争时期分置东、西大同县，分属晋察冀边区与晋绥边区。抗日战争胜利后复为一县。</p>
        <p><strong>1949年</strong>，属察哈尔省。</p>
        <p><strong>1952年</strong>，复归山西省。</p>
        <p><strong>1954年</strong>，与怀仁县合并为大仁县，县政府驻大同市城区。</p>
        <p><strong>1958年</strong>，大仁县并入大同市，以之置郊区，区政府仍驻大同市内。</p>
        <p><strong>1960年</strong>，以原大同县置古城区。</p>
        <p><strong>1964年</strong>，复为大同县，属大同市。</p>
        <p><strong>1965年</strong>，改属雁北专区。</p>
        <p><strong>1967年</strong>，属雁北地区。</p>
        <p><strong>1971年</strong>，与大同市分治，县政府迁驻西坪镇。</p>
        <p><strong>1993年</strong>，撤销雁北地区，县改属大同市。</p>
        <p><strong>2001年</strong>，原西坪镇、中高庄乡合并设立新的西坪镇，原许堡乡、西册田乡合并设立新的许堡乡，原瓜园乡、城庄乡合并设立新的瓜园乡，原聚乐堡乡、阁老山乡合并设立新的聚乐堡乡，原峰峪乡、徐团乡合并设立新的峰峪乡，原吉家庄乡、麻峪口乡合并设立新的吉家庄乡。区划调整后，全县辖3个镇、7个乡：西坪镇、倍加皂镇、周士庄镇、吉家庄乡、峰峪乡、杜庄乡、党留庄乡、瓜园乡、聚乐堡乡、许堡乡。县人民政府驻西坪镇。</p>
        <p><strong>2018年2月9日</strong>，国务院批复撤销大同县，设立大同市云州区。</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'HistoryPage',
    data() {
      return {
        // 如果有需要，可以在这里添加数据
      }
    }
  }
  </script>
  
  <style scoped>
  .history-container {
    max-width: 1200px;
    min-height: 100vh;
    background-color: #ffffff;
    padding: 2rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    margin: 0 auto; /* 水平居中 */
  }
  
  .history-header {
    font-size: 1.8rem;
    color: #333;
    margin-bottom: 1rem;
    text-align: center;
  }
  
  .history-content {
    font-size: 1rem;
    line-height: 1.6;
    color: #666;
    margin-bottom: 2rem;
  }
  
  .history-content p {
    margin-bottom: 0.5rem;
  }
  
  .history-content strong {
    font-weight: bold;
    font-size: 1.2rem; /* 加大字体大小 */
  }
  </style>