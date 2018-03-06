<template>
    <des class="desbox">
        {{ title }}
    </des> 
</template>

<script>
    export default {
        props: ['title']
    }
</script>

<style>
    .desbox {
        background-color: #B9DDDF;
        color: #477C89;
        border-radius: 6px;
        box-shadow: 0 1px 6px 0 #477C89;
    }
</style>
