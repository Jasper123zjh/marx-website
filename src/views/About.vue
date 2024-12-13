<template>
    <div class="about-container">
      <!-- 团队成员部分 -->
      <section class="team-section">
        <h2 class="section-title">团队成员</h2>
        <div class="team-members">
          <div v-for="member in teamMembers" :key="member.id" class="member-card">
            <h3>{{ member.name }}</h3>
            <p>学号：{{ member.studentId }}</p>
            <p>分工：{{ member.responsibility }}</p>
          </div>
        </div>
      </section>
  
      <!-- 项目介绍部分 -->
      <section class="project-section">
        <h2 class="section-title">项目介绍</h2>
        <div class="project-info">
          <div class="tech-stack">
            <h3>技术栈</h3>
            <ul>
              <li v-for="tech in techStack" :key="tech.name">
                <strong>{{ tech.name }}:</strong> {{ tech.description }}
              </li>
            </ul>
          </div>
          <div class="project-structure">
            <h3>项目结构</h3>
            <pre>{{ projectStructure }}</pre>
          </div>
        </div>
      </section>
  
      <!-- 代码展示部分 -->
      <section class="code-section">
    <h2 class="section-title">代码展示</h2>
    <div class="code-gallery">
      <div v-for="(image, index) in codeImages" 
           :key="index" 
           class="code-image"
           @click="showImage(image.src)">
        <div class="image-wrapper">
          <img :src="image.src" :alt="image.description">
        </div>
        <p class="image-description">{{ image.description }}</p>
      </div>
    </div>

    <!-- 图片预览弹窗 -->
    <div class="image-modal" v-if="showModal" @click="closeModal">
      <img :src="selectedImage" alt="预览图片">
      <span class="close-button">&times;</span>
    </div>
  </section>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import code1 from '../assets/code1.png'
  import code2 from '../assets/code2.png'
  import code3 from '../assets/code3.png'
  import code4 from '../assets/code4.png'
  import codeCout from '../assets/codeCout.png'
  
  // 团队成员数据
  const teamMembers = ref([
    {
      id: 1,
      name: '张蛟泓',
      studentId: '202301004151',
      responsibility: '负责网页制作，代码撰写'
    },
    {
      id: 2,
      name: '李美霖',
      studentId: '202301004117',
      responsibility: '负责资料整理收集，页面设计'
    },
    {
      id: 2,
      name: '杨雨悦',
      studentId: '202301004147',
      responsibility: '负责资料整理收集，页面设计'
    },
    // 添加更多成员...
  ])
  
  // 技术栈数据
  const techStack = ref([
    {
      name:'HTML',
      description:'定义网页的结构和内容，包括文本、图片、视频、音频和其他多媒体元素。'
    },
    {
      name: 'CSS',
      description: '控制网页的视觉表现'
    },
    {
      name: 'JavaScript',
      description: '为网页添加交互性。允许网页对用户的操作做出响应，如点击按钮、填写表单等。'
    },
    {
      name: 'Vue 3',
      description: '使用 Composition API 构建用户界面'
    },
    {
      name: 'Vite',
      description: '项目构建工具'
    },
    {
      name: 'Vue Router',
      description: '实现单页面应用路由管理'
    },
    // 添加更多技术栈...
  ])
  
  // 项目结构
  const projectStructure = ref(`
marxism-prac-webpage_code/
├── .vscode/
├── .VSCodeCounter/
├── assets/
├── dist/
├── node_modules/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Card.vue
│   │   ├── Economic.vue
│   │   ├── Folk2.vue
│   │   ├── Footer.vue
│   │   ├── History.vue
│   │   ├── Location.vue
│   │   ├── Navbar.vue
│   │   └── Source.vue
│   ├── router/
│   │   └── index.js
│   ├── views/
│   │   ├── About.vue
│   │   ├── Article1.vue
│   │   ├── Article2.vue
│   │   ├── Article3.vue
│   │   ├── Character.vue
│   │   ├── Economics.vue
│   │   ├── Folk.vue
│   │   ├── Home.vue
│   │   ├── Tour.vue
│   │   ├── Town.vue
│   │   └── Walk.vue
│   ├── App.vue
│   └── main.js
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
├── README.md
├── vite.config.js
└── jsconfig.json
  `)
  
  // 代码展示图片
  const codeImages = ref([
    {
      src: code1,
      description: '主页Home代码'
    },
    {
      src: code2,
      description: '路由配置代码'
    },
    {
      src: code3,
      description: '主页样式代码'
    },
    {
      src: code4,
      description: 'Walk组件代码'
    },
    {
      src: codeCout,
      description: '代码行数'
    },
    // 添加更多代码截图...
  ])

  // 添加预览相关的响应式变量
const showModal = ref(false)
const selectedImage = ref('')

// 显示图片预览
const showImage = (src) => {
  selectedImage.value = src
  showModal.value = true
}

// 关闭图片预览
const closeModal = () => {
  showModal.value = false
}
  </script>
  
  <style scoped>
  .about-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem;
  }
  
  .section-title {
    font-size: 2rem;
    color: #2c3e50;
    margin-bottom: 2rem;
    text-align: center;
  }
  
  /* 团队成员样式 */
  .team-section {
    margin-bottom: 4rem;
  }
  
  .team-members {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
  }
  
  .member-card {
    background: #f8f9fa;
    padding: 1.5rem;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  /* 项目介绍样式 */
  .project-section {
    margin-bottom: 4rem;
  }
  
  .project-info {
    background: #f8f9fa;
    padding: 2rem;
    border-radius: 8px;
  }
  
  .tech-stack ul {
    list-style: none;
    padding: 0;
  }
  
  .tech-stack li {
    margin-bottom: 1rem;
  }
  
  .project-structure pre {
    background: #2c3e50;
    color: #fff;
    padding: 1rem;
    border-radius: 4px;
    overflow-x: auto;
  }
  
  /* 代码展示样式 */
  .code-gallery {
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* 固定两列 */
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.code-image {
  background: #fff;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: transform 0.3s ease;
}

.code-image:hover {
  transform: scale(1.03);
}

.image-wrapper {
  overflow: hidden;
  border-radius: 4px;
}

.code-image img {
  width: 100%;
  height: auto;
  display: block;
  transition: transform 0.3s ease;
}

.image-description {
  margin-top: 1rem;
  text-align: center;
  color: #666;
}

/* 图片预览弹窗样式 */
.image-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  cursor: pointer;
}

.image-modal img {
  max-width: 90%;
  max-height: 90%;
  object-fit: contain;
}

.close-button {
  position: absolute;
  top: 20px;
  right: 30px;
  color: #fff;
  font-size: 40px;
  cursor: pointer;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .code-gallery {
    grid-template-columns: 1fr; /* 在小屏幕上改为单列 */
  }
}
  </style>