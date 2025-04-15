<script setup lang="ts">
const { data: home } = await useAsyncData(() => queryCollection('content').path('/').first())

console.log(home.title)
// => 'Title of the page'
console.log(home.description)
// => 'meta description of the page'
console.log(home.body)

useSeoMeta({
  title: home.value?.title,
  description: home.value?.description
})
</script>

<template>
  <ContentRenderer v-if="home" :value="home" />
  <div v-else>Home not found</div>
</template>
