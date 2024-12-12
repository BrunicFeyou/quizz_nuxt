<script setup>
    const props  = defineProps({
        task: {
            type: Object,
            required: true
        }
    });

    // console.log(quiz);

</script>

<template>
    <div class="w-full flex justify-center items-center">
        <div class="w-2/4 flex flex-col p-2 gap-4  ">
            <h2 class="t">{{ task.title }}</h2>
            <p>ce quizz contient  {{ Object.keys(task["quizz"]).length}} question</p>
            <NuxtLink class="border-2 rounded border-purple-500 text-center p-2 hover:bg-purple-200 " :to="`/${task._path.split('/').pop()}`" :quiz="myQuizz" >Commencer le quiz</NuxtLink>
        </div>
    </div>
       
</template>