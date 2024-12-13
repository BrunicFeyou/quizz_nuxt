<script setup>
 const quiz = inject('quiz');
</script>

<template>
    <div class="min-h-screen bg-gray-50 flex justify-center items-center text-gray-800">
        <Display :quiz="quiz"/>
    </div>
</template>