<template>
    <h1>Principal</h1>
    <dates  />    
</template>
<script setup>
  // Instanciar el store
  const dateStore = useDateStore()
  

  await useAsyncData('dates', async () => {
    await dateStore.fetchDates()    
  })
  
</script>