export default function useQuiz(quiz, selectedAnswer) {
    const indexQuestion = ref(0);
    const score = ref(0);
    const userAnswer = reactive([]); 

    const VerifiedSelectedAnswer = (selectedAnswer) => {
        if (selectedAnswer) {
            selectedAnswer
        }
    }
  
    const nextQuestion = (answer) => {
        const currentQuestion = quiz[`quizz${indexQuestion.value + 1}`];
        const isCorrect = currentQuestion.answer === answer;

        userAnswer.push({
            index: indexQuestion.value,
            answer,
            isCorrect,
        });
        if (isCorrect) {
            score.value++;
        }
        if (indexQuestion.value < Object.keys(quiz).length - 1) {
            indexQuestion.value++;
        }
        selectedAnswer.value = "";
    };

    const previousQuestions = () => { 
        if (indexQuestion.value > 0) {
            indexQuestion.value--;
            userAnswer.splice(indexQuestion.value, 1);
        }
    };

    return {
        quiz,
        indexQuestion,
        score,
        userAnswer,
        VerifiedSelectedAnswer,
        nextQuestion,
        previousQuestions,
    };
}
