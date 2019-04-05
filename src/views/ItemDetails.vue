<template>
<!-- <v-layout column justify-center  class="purple pa-2" > -->
  <div>
  <ImgModal />
 
  <ListaEven />
  </div>
<!-- </v-layout> -->
</template>

<script>
  import ListaEven from '../components/cListaEven.vue'
  import ImgModal from '../components/cImg&modal.vue'

  export default {
    components: {
      ListaEven, ImgModal
    }
  }
</script>
