<script setup>

const quiz = inject('quiz');

</script>


<template>
    <div v-if="quiz.isQuizFinished.value" class="text-center">
        <p class="text-2xl font-bold text-purple-500 mb-4">Quiz Terminé</p>
        <p class="text-lg">
            Score : <span class="font-semibold">{{ quiz.score }}/15</span> 
        </p>
        <ul class="mt-6 space-y-3"> 
            <li v-for="(response, index) in quiz.userAnswer" :key="index" class="p-3 rounded-lg" :class="{
                'bg-green-100 text-green-700': response.isCorrect, 
                'bg-red-100 text-red-700': !response.isCorrect 
            }"
            >
            Question {{ response.index + 1 }} :
            <strong>{{ response.isCorrect ? 'Correcte' : 'Incorrecte' }}</strong>
            </li>
        </ul>
    </div>
</template>