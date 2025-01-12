<script setup>
const { updateSeoMeta } = useSeo();
const { getKeyword } = useKeywords();


// 使用 useAsyncData 进行服务端数据获取
const { data: keyword } = await useAsyncData("keyword", () =>
  getKeyword("truck-mounted-crane")
);

updateSeoMeta(keyword.value);

console.log(keyword);
</script>

<template>
  <div class="container">
    <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
      {{ keyword?.name }}
    </div>
  </div>
</template>

<style></style>
