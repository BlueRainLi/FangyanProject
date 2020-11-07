<template>
<div id="news">
  <v-carousel>
    <v-carousel-item
    v-for="(item,i) in news_items"
    :key="i" :src="item.src"
    reverse-transition="fade-transition"
    transition="fade-transition">
        <v-row
          class="fill-height display"
          align="end"
          justify="end">
          <div class="display-3 dis">
            {{item.title}}
          </div>
          <div class="display-1 dis">
            {{item.description}}
          </div>
        </v-row>
    </v-carousel-item>
  </v-carousel>
</div>
</template>

<script>
export default {
  name: "news",
  data() {
    return {
      news_items:[]
    }
  },
  mounted() {
    this.news_items = [
      {src: "http://127.0.0.1:8000/image.png", title:"Gasly!", description:"Pierre Gasly won the Italy Grand Prix!"}
    ]
  }
}
</script>

<style scoped>
.display{
  display: flex;
  flex-direction: column;
  padding: 50px 20px 50px 40px;
}
div.dis{
  background: rgba(0,0,0,0.3);
}
</style>