<template>
  <div>hello isboyjc, This is toolsdog home page!</div>
  <a-space>
    <a-button type="primary" @click="handleClickMini">Primary</a-button>
    <a-button>Secondary</a-button>
    <a-button type="dashed">Dashed</a-button>
    <a-button type="outline">Outline</a-button>
    <a-button type="text">Text</a-button>
  </a-space>
  <HelloWorld/>
  <icon-ep-alarm-clock class=""/>
  <button class="bg-blue-400 hover:bg-blue-500 text-sm text-white font-mono font-light py-2 px-4 rounded border-2 border-blue-200 dark:bg-blue-500 dark:hover:bg-blue-600">
    Button
  </button>

</template>

<script setup>
import HelloWorld from '@/components/HelloWorld.vue';

const handleClickMini = () => {
  AMessage.info('This is an info message')
}
                        
</script>

<style scoped>

</style>