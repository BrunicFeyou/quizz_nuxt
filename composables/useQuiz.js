export default function useQuiz(quiz, selectedAnswer) {
    const indexQuestion = ref(0);
    const score = ref(0);
    const answer = ref("");
    const userAnswer = reactive([]); 
    const isQuizFinished = ref(false);

    const resetPage = () => {
        indexQuestion.value = 0;
        score.value = 0;
        userAnswer.splice(0, userAnswer.length);
        isQuizFinished.value = false;
    }
  
    const nextQuestion = (answer) => {
        console.log(answer.value, "la réponse sélectionnée ");
        const currentQuestion = quiz.questions[indexQuestion.value];
        const isCorrect = currentQuestion.answer === answer.value;
        console.log(currentQuestion.answer, "la réponse correcte");
        

        userAnswer.push({
            index: indexQuestion.value,
            answer,
            isCorrect,
        });
        console.log(userAnswer);
        if (isCorrect) {
            score.value++;
        }
        if (indexQuestion.value < quiz.questions.length - 1) {
            indexQuestion.value++;
        } else {
            isQuizFinished.value = true;
        }
        answer.value = "";
    };

    const previousQuestions = () => { 
        if (indexQuestion.value > 0) {
            indexQuestion.value--;
            userAnswer.splice(indexQuestion.value, 1);
        }
    };

    return {
        title: quiz.title,
        questions: quiz.questions,
        indexQuestion,
        score,
        answer, 
        userAnswer,
        isQuizFinished,
        resetPage,
        nextQuestion,
        previousQuestions,
    };
}
