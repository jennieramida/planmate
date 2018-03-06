<template>
    <div class="bg">
        <img :src="require(`assets/${image}`)" alt="" class="_pdt-24px">
        <p class="name _pdbt-12px">{{ title }}</p>
    </div>
</template>

<script>
    export default {
        props: ['title', 'image']
    }
</script>

<style scoped>

.bg {
    background-color: white;
    border-radius: 6px;
    margin: 10px;
    box-shadow: 0 1px 6px 0 #477C89;
    min-height: 125px;
}

.name {
    color: #477C89;
    line-height: 18px;
    padding: 10px;
    font-size: 14px;
}
</style>
