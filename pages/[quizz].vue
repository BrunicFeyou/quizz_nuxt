<script setup>

const { params } = useRoute();
const data = await queryContent(`quizz/${params.quizz}`).findOne();
const quiz = useQuiz(data); 

</script>

<template>
    <div class="flex flex-col"> 
        <NuxtLayout>
            <div class="min-h-screen bg-gray-50 flex justify-center items-center text-gray-800">
                <div class="w-3/4 md:w-2/4 flex flex-col p-6 bg-white rounded-lg shadow">
                    <div v-if="!quiz.isQuizFinished.value">
                        <p class="text-xl font-semibold text-center mb-4">
                            {{ quiz.questions[quiz.indexQuestion.value].question }}
                        </p>
                        <p class="text-sm text-center text-gray-500 mb-4">
                            Question {{ quiz.indexQuestion.value + 1 }} / {{ quiz.questions.length }}
                        </p>
                        <ul class="space-y-3">
                            <li
                            v-for="(choice, index) in quiz.questions[quiz.indexQuestion.value].choose"
                            :key="index">
                            <label class="flex items-center gap-3 p-3 border rounded-lg hover:bg-gray-100 cursor-pointer">
                                <input type="radio" name="choices" :value="choice" v-model="quiz.answer.value" class="w-4 h-4 text-purple-500 focus:ring-1 focus:ring-purple-400"/>
                                {{ choice }}
                            </label>
                            </li>
                        </ul>
                    </div>
                    <div v-if="quiz.isQuizFinished.value" class="text-center">
                        <p class="text-2xl font-bold text-purple-500 mb-4">Quiz Terminé</p>
                        <p class="text-lg">
                            Score : <span class="font-semibold">{{ quiz.score }}</span> 
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
                </div>
            </div>
        </NuxtLayout>
    </div>
</template>
