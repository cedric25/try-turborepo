<template>
  <header>
    <img
      alt="Vue logo"
      class="logo"
      src="@/assets/logo.svg"
      width="125"
      height="125"
    />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>

      <div>
        <div>
          <p>
            bo-client will call bo-server through trpc.<br />
            bo-server will then go fetch fruits from a SQLite database through
            Prisma client.
          </p>
          <Button @click="listFruits"> List existing fruits </Button>
          <div>
            <div v-for="fruit in fruits">
              {{ fruit }}
            </div>
          </div>
        </div>

        <!--        <div>-->
        <!--          <Button @click="deleteBanana"> Delete banana </Button>-->
        <!--        </div>-->

        <div style="margin-top: 24px">
          name: 'Banana', color: 'yellow'
          <Button @click="doCreateFruit">Create fruit</Button>
        </div>
      </div>
    </div>
  </header>

  <RouterView />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from '@/components/HelloWorld.vue'

import { Button } from 'ui-kit'

import { callStuff, goCreateFruit, goListFruits } from '@/services/callStuff'

callStuff()

const fruits = ref([])

async function listFruits() {
  const backendAnswer = await goListFruits()
  console.log('backendAnswer', backendAnswer)
  fruits.value = backendAnswer
}

async function doCreateFruit() {
  console.log('doCreateFruit')
  const backendAnswer = await goCreateFruit()
  console.log('backendAnswer', backendAnswer)
}
</script>

<style>
@import '@/assets/base.css';

#app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;

  font-weight: normal;
}

header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

a,
.green {
  text-decoration: none;
  color: hsla(160, 100%, 37%, 1);
  transition: 0.4s;
}

@media (hover: hover) {
  a:hover {
    background-color: hsla(160, 100%, 37%, 0.2);
  }
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  body {
    display: flex;
    place-items: center;
  }

  #app {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 0 2rem;
  }

  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
