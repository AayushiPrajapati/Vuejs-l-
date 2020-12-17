<template>
    <dialog open>
        <slot></slot>
    </dialog>
</template>
<script>
export default {
    
}
</script>

<style scoped>

dialog{
    position:fixed;
    height: 20%;
    width: 50%;
    top : 20vh;
    background-color: white;
    box-shadow: rgba(0, 0, 0, 0.28);
    padding: 2rem;
}

</style>