<template>
    <section>
        <div>
            <p> Name :{{ name }} </p>
            <p> Age :  {{ age }}</p>
            <p> Gender :  {{ gender }}</p>
            <p> Address : {{ address }}</p>
        </div>
    </section>
</template>

<script>
export default {
   props : ['id','name','age','gender','address'],
}
</script>