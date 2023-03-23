<template>
    <div>
        <div v-for="(task, index) in tasks" :key="index">
            {{task.name}}
        </div>
    </div>
</template>

<script>
    export default {
        name : "SingleList",
        data : () => ({
            tasks : [
                {name : 'Task One', status : false}, {name : 'Task Two', status : false}
            ],
        })
    }
</script>

