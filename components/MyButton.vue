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
        border: none;
        padding: 12px 24px;
        text-align: center;
        display: inline-block;
        font-size: 16px;
        color: white;
        border-radius: 6px;
        background-color: #477c89;
        box-shadow: 1px 2px 4px 0 rgba(67, 124, 128, 0.42);
        font-family: 'Helvetica';
        font-weight: 540;
        font-size: 1.2em;
    }
</style>
