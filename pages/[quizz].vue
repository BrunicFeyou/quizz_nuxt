<script setup>

const { params } = useRoute();
const data = await queryContent(`quizz/${params.quizz}`).findOne();
const quiz = useQuiz(data); 
provide('quiz', quiz);

</script>

<template>
    <div class="flex flex-col"> 
        <NuxtLayout>
            <Quiz :quiz="quiz" />
        </NuxtLayout>
    </div>
</template>
