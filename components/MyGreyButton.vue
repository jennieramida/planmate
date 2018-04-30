<template>
    <div class="button">
        {{ back }}
    </div> 
    
</template>

<script>
    export default {
        props: ['back']
    }
</script>

<style scoped>
    div {
        cursor: pointer;
        background-color: rgb(182, 182, 182);
        border: none;
        padding: 12px 24px;
        text-align: center;
        display: inline-block;
        font-size: 16px;
        color: white;
        border-radius: 6px;
        box-shadow: 1px 2px 4px 0 rgb(140, 142, 143);
        font-family: 'Helvetica';
        font-weight: 540;
        font-size: 1.2em;
    }
</style>
