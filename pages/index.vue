<script setup>
    const contentQuery = await queryContent('quizz').find();
    // definePageMeta({layout: "navigationBar"})
</script>

<template>
    <NuxtLayout> 
        <div class="bg-gradient-to-r from-beige to-white text-gray-900 font-sans">
            <div class="max-w-5xl mx-auto p-8">
                <h1 class="text-4xl font-medium text-center text-gold mb-8">Tester vous !</h1>
                <div class="flex flex-col gap-8">
                    <QuizListeTitle v-for="task in contentQuery" :key="task._path" :task="task"/>
                </div>
            </div>
        </div>
    </NuxtLayout>
</template>
