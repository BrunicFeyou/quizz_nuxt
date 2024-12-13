<script setup>
    const props = defineProps({
        task: {
            type: Object,
            required: true
        }
    });
    const quiz = useQuiz(props.task);
</script>

<template>
    <div class="w-full flex justify-center items-center">
        <div class="w-3/4 bg-white shadow-xl p-8 rounded-lg transform transition-all hover:scale-105 duration-300 ease-in-out">
            <h2 class="text-2xl font-medium text-gold mb-4">{{ task.title }}</h2>
            <p class="text-gray-500 mb-6"> {{ task.questions.length }} questions </p>
            <NuxtLink
                class="block text-center py-2 px-6 bg-purple-100 text-purple-500 font-semibold rounded-md hover:bg-purple-500 hover:text-white transition-all duration-300"
                :to="`/${task._path.split('/').pop()}`" @click="quiz.startTimer()">
                Commencer le quiz
            </NuxtLink>
        </div>
    </div>
</template>
