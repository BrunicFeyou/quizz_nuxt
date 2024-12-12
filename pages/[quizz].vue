<script setup>
import useQuiz from '~/composables/useQuiz';

const { params } = useRoute();
const quizz = await queryContent(`quizz/${params.quizz}`).findOne();
const quiz = quizz["quizz"];
const myQuiz = useQuiz(quiz);

const numberActiveQuestion = Object.keys(quiz).length;
// const selectedAnswer = ref("");
const isQuizFinished = ref(false);

const finishQuiz = () => {
    myQuiz.nextQuestion(myQuiz.selectedAnswer.value);  
    isQuizFinished.value = true;
}

</script>

<template>
    <div class="min-h-screen bg-gray-50 flex justify-center items-center text-gray-800">
      <div class="w-3/4 md:w-2/4 flex flex-col p-6 bg-white rounded-lg shadow">
        <div v-if="!isQuizFinished && myQuiz.quiz">
          <p class="text-xl font-semibold text-center mb-4">
            {{ myQuiz.quiz[`quizz${myQuiz.indexQuestion.value + 1}`].question }}
          </p>
          <p class="text-sm text-center text-gray-500 mb-4">
            Question {{ myQuiz.indexQuestion.value + 1 }} / {{ numberActiveQuestion }}
          </p>
          <ul class="space-y-3">
            <li
              v-for="(choice, index) in myQuiz.quiz[`quizz${myQuiz.indexQuestion.value + 1}`].choose"
              :key="index" @click="myQuiz.VerifiedSelectedAnswer(myQuiz.selectedAnswer)">
              <label class="flex items-center gap-3 p-3 border rounded-lg hover:bg-gray-100 cursor-pointer">
                <input type="radio" name="choices" :value="choice" v-model="myQuiz.selectedAnswer"  class="w-4 h-4 text-purple-500 focus:ring-1 focus:ring-purple-400"/>
                {{ choice }}
              </label>
            </li>
          </ul>
        </div>
        <div v-if="isQuizFinished" class="text-center">
          <p class="text-2xl font-bold text-purple-500 mb-4">Quiz Terminé</p>
          <p class="text-lg">
            Score : <span class="font-semibold">{{ myQuiz.score }}</span> / {{ numberActiveQuestion }}
          </p>
          <ul class="mt-6 space-y-3"> 
            <li v-for="(response, index) in myQuiz.userAnswer" :key="index" class="p-3 rounded-lg" :class="{
                'bg-green-100 text-green-700': response.isCorrect, 
                'bg-red-100 text-red-700': !response.isCorrect 
              }"
            >
              Question {{ response.index + 1 }} :
              <strong>{{ response.isCorrect ? 'Correcte' : 'Incorrecte' }}</strong>
            </li>
          </ul>
        </div>
        <p class="text-sm text-gray-500">Réponse sélectionnée : {{ myQuiz.selectedAnswer }}</p>
        <div class="flex justify-between mt-6">
          <button class="text-sm bg-gray-200 text-gray-700 px-4 py-2 rounded hover:bg-gray-300 disabled:opacity-50" :disabled="myQuiz.indexQuestion.value === 0" @click="myQuiz.previousQuestions"> 
            Précédent
          </button>
          <button v-if="!isQuizFinished && myQuiz.indexQuestion.value < Object.keys(myQuiz.quiz).length - 1" class="text-sm bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600" @click="myQuiz.nextQuestion(myQuiz.selectedAnswer)">
            Suivant
          </button>
          <button 
            v-if="!isQuizFinished && myQuiz.indexQuestion.value === Object.keys(myQuiz.quiz).length - 1" class="text-sm bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600" @click="finishQuiz">
            Terminer 
          </button>
        </div>
      </div>
    </div>
  </template>