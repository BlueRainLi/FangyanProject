<template>
  <v-app>
    <navigation></navigation>
    <v-main>
    <router-view>
    </router-view>
    </v-main>
  </v-app>
</template>

<script>
import navigation from "@/components/navigation";


export default {
  name: 'App',

  components: {
    navigation
  },

  data: () => ({

  }),
};
</script>
