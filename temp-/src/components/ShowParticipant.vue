<template>
<base-card>
        <div>
            <p>Name : {{ name }}</p>
            <p>Age : {{ age }} </p>
            <p> Interest : </p>
            <ol>
             <li  v-for="intr in interest" :key="intr"> {{ intr }}
                    </li>
                </ol>
            <p>Type : {{ type }}</p>
        </div>
</base-card>
</template>

<script>
export default {
    props : ['id','age','name','interest','type'],
}
</script>

<style scoped>
p{
  margin : 2px auto;
}
</style>