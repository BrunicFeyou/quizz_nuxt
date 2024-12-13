<script setup>
    const quiz = inject('quiz');
</script>


<template>
    <div class="flex justify-between mt-6">
        <button v-if="!quiz.isQuizFinished.value" class="text-sm bg-gray-200 text-gray-700 px-4 py-2 rounded hover:bg-gray-300 disabled:opacity-50" :disabled="quiz.indexQuestion.value === 0" @click="quiz.previousQuestions"> 
            Précédent
        </button>
        <button 
            v-if="!quiz.isQuizFinished.value && quiz.answer.value && quiz.indexQuestion.value < quiz.questions.length - 1" 
            :disabled="!quiz.answer.value" 
            class="text-sm bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600" 
            @click="quiz.nextQuestion(quiz.answer)">
            Suivant
        </button>
        <button 
            v-if="!quiz.isQuizFinished.value && quiz.answer.value && quiz.indexQuestion.value === quiz.questions.length - 1" 
            class="text-sm bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600" 
            @click="quiz.nextQuestion(quiz.answer)">
            Terminer 
        </button>
        <button 
            v-if="quiz.isQuizFinished.value" 
            class="text-sm bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600" 
            @click="quiz.resetPage()">
            Recommencer 
        </button>
        <NuxtLink 
            v-if="quiz.isQuizFinished.value" 
            class="text-sm bg-white border border-purple-600 text-purple-600 px-4 py-2 rounded hover:bg-purple-200 " 
            to="/">
            Un autre quiz ! 
        </NuxtLink>
    </div>
</template>

