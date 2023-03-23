<template>
    <div>
        <h1 class="text-primary">{{header}}</h1>

        <Single />
    </div>
</template>

<script>
    import Single from './SingleList.vue';
    export default {
        name : "AllList",
        components : {Single},
        data : () => ({
            header : 'All List',
        })
    }
</script>

