<script setup>
const quiz = inject('quiz');

</script>


<template>
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
</template>