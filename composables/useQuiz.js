export default function useQuiz(quiz, selectedAnswer) {
    const indexQuestion = ref(0);
    const score = ref(0);
    const answer = ref("");
    const userAnswer = reactive([]); 
    const isQuizFinished = ref(false);
    var startTimer = Date.now(); 
    console.log(startTimer, "le timer de départ");

    const resetPage = () => {
        indexQuestion.value = 0;
        score.value = 0;
        userAnswer.splice(0, userAnswer.length);
        isQuizFinished.value = false;
        startTimer; 
    }
  
    const nextQuestion = (answer) => {
        console.log(answer.value, "la réponse sélectionnée ");
        const currentQuestion = quiz.questions[indexQuestion.value];
        const isCorrect = currentQuestion.answer === answer.value;
        // console.log(currentQuestion.answer, "la réponse correcte");
        var responseTime = (Date.now() - startTimer ) / 1000;  //ici le temps est calculé en secondes
        console.log(responseTime, "le temps de réponse");  
        userAnswer.push({
            index: indexQuestion.value,
            answer,
            isCorrect,
        });
        if (isCorrect && responseTime <= 10) { // 
            score.value+= 5;

        }else if (isCorrect && responseTime > 10) {
            score.value += 1;
        }

        if (indexQuestion.value < quiz.questions.length - 1) {
            indexQuestion.value++;
        } else {
            isQuizFinished.value = true;
        }
        answer.value = "";
        startTimer = Date.now();
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
        startTimer, 
        resetPage,
        nextQuestion,
        previousQuestions,
    };
}
