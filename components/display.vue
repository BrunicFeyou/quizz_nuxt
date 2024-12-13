<script setup>
 const quiz = inject('quiz');
</script>


<template>
    <div class="w-3/4 md:w-2/4 flex flex-col p-6 bg-white rounded-lg shadow">
        <QuizDisplay  :quiz="quiz"/>
        <QuizEnd :quiz="quiz"/>
        <ButtonsQuiz  :quiz="quiz"/>
    </div>
</template>