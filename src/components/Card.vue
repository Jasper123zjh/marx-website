<template>
  <div class="card" @click="handleClick">
    <h3>{{ title }}</h3>
    <p>{{ content }}</p>
  </div>
</template>

<script>
import { useRouter } from 'vue-router'

export default {
  props: {
    title: String,
    content: String,
    link: String
  },
  setup(props) {
    const router = useRouter()

    const handleClick = () => {
      router.push(props.link)
    }

    return {
      handleClick
    }
  }
};
</script>

<style scoped>
  .card {
    background-color: #ffffff;
    border-radius: 8px;
    padding: 1.5rem;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }

  .card:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }

  .card h3 {
    font-size: 1.5rem;
    color: #333;
  }

  .card p {
    font-size: 1rem;
    color: #666;
    line-height: 1.5;
  }
</style>
