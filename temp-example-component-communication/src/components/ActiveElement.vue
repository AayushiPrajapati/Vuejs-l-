<template>
<section>
    <div>
        <h2>{{ title }}</h2>
    </div>
     <div>
        <h4>{{ fullText }}</h4>
    </div>
</section>
</template>


<script>
export default {
    props : ['title','fullText']
}
</script>