<template>
<div id="navigation"
>
  <v-container class="grey lighten-5">
    <v-row no-gutters>
      <v-col md="2">
        <h1 @click="$router.push({path:'/'})">方言保育小队</h1>
      </v-col>
      <v-col md="7" style="display: flex; justify-content: center; align-items: center">
          <v-btn v-for="(item) in items" :key="item.link" large
                 style="font-size: 22px;" text
                 @click="$router.push({path:'/'+item.link+'/'})">
            {{item.text}}
          </v-btn>
      </v-col>
      <v-col md="3">
        <v-text-field
            label="搜索" hide-details="auto">
        </v-text-field>
      </v-col>
    </v-row>



  </v-container>


</div>
</template>

<script>

export default {
name: "navigation",
  data() {
    return {
      items:[
        {link: "news",text: "最新消息"},
        {link: "article",text: "文章列表"},
        {link: "database",text: "资料库"},
        {link: "about", text: "关于我们"}
      ]
    }
  },
  methods:{

  }
}
</script>

<style scoped>
#navigation{
  box-shadow: 2px 2px 5px #000;
}
</style>