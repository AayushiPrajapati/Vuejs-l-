<template>
    <div>
        <h2> Name :{{ name }} </h2>
    </div>
    <div>
        <h4> Age : {{ age }} </h4>
    </div>
</template>

<script>
export default {
    props : {
        name : {
            type : String,
            required : true,
        },
        age : {
            type : Number,
            required : true,
        }
    }
}
</script>