<script setup>
const error = useError();


</script>

<template>
    <NuxtLayout>
        <div class="flex flex-col gap-12 h-screen w-full items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
            <h1 class="text-6xl  font-bold text-center text-white">Revenez sur vos pas !</h1>
            <p class="text-center text-white "> Vous êtes tombé sur une erreur : {{ error.statusCode }}</p>
            <NuxtLink 
                class="block text-center py-2 px-6 bg-purple-100 text-purple-500 font-semibold rounded-md  hover:bg-purple-500 hover:text-white transition-all duration-300"
                to="/">
                Retourner à la page d'accueil
            </NuxtLink>
        </div>
    </NuxtLayout>
  </template>