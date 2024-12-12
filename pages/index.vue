<script setup>
    const contentQuery  = await queryContent('quizz').find();
    // console.log(contentQuery[0]);
    // console.log(contentQuery[0]._path);
</script>

<template>
    <div> 
        <QuizListeTitle class="flex flex-col max-m-2 " v-for="task in contentQuery" :key="task._path" :task="task" /> 
    </div>
</template>