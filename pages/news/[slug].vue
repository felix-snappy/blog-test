<script setup>
const slug = useRoute().params.slug
const { data: post } = await useAsyncData(`news-${slug}`, () => {
  return queryCollection('news').path(`/news/${slug}`).first()
})
</script>

<template>
  <!-- Render the news post as Prose & Vue components -->
  <ContentRenderer :value="post" />
</template>
