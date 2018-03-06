<template>
    <div class="button">
        {{ title }}
    </div> 
    
</template>

<script>
    export default {
        props: ['title']
    }
</script>

<style scoped>
    div {
        cursor: pointer;
        background-color: #477C89;
        border: none;
        padding: 10px 20px;
        text-align: center;
        display: inline-block;
        font-size: 16px;
        color: white;
        border-radius: 6px;
        box-shadow: 0 1px 6px 0 #477C89;
        font-family: 'Helvetica';
        font-weight: 540;
        font-size: 1.2em;
    }
</style>
