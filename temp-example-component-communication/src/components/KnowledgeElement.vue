<template>
<section>
    <div>
        {{ title }}
    </div>
      <div>
        {{ description }}
    </div>
    <div>
        <button @click="$emit('set-active',id)">learn more</button>
    </div>
</section>
</template>

<script>
export default {
    props :['id','title','description'],
    emits:['set-active']
}
</script>