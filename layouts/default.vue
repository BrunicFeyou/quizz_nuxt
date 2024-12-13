<template>
    <div>
        <nav class="flex justify-between items-center py-6 px-10 bg-beige shadow-xl rounded-lg">
                <NuxtLink to="/" class="text-3xl font-medium text-gold hover:text-purple-500 transition-all">LQAT</NuxtLink>
                <ul class="flex space-x-8">
                    <li>
                        <NuxtLink to="/" class="text-lg text-gray-700 hover:text-gold transition-all">Home</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/quizz1" class="text-lg text-gray-700 hover:text-gold transition-all">Quiz 1</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/quizz2" class="text-lg text-gray-700 hover:text-gold transition-all">Quiz 2</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/quizz3" class="text-lg text-gray-700 hover:text-gold transition-all">Quiz 3</NuxtLink>
                    </li>
                </ul>
        </nav>
        <slot />
    </div>
</template>