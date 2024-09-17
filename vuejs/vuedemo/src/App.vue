<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import './App.css'
import { useCounterStore } from './stores/counter';

const counter = useCounterStore()
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <button @click="counter.increment">+</button>
        <p>{{ counter.count }}</p>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
</style>
