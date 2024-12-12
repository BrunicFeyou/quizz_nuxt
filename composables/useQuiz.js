export default function useQuiz(quiz) {
    const indexQuestion = ref(0);
    const score = ref(0);
    const selectedAnswer = ref("");
    const userAnswer = reactive([]); 
    console.log(selectedAnswer.value, 'selectedAnswer');

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
      }
    }; 

    return {
      quiz,
      indexQuestion,
      score,
      selectedAnswer,
      userAnswer,
      VerifiedSelectedAnswer,
      nextQuestion,
      previousQuestions,
    };
  }
  
  