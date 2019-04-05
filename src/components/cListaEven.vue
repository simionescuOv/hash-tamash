<template>
    <v-layout align-start justify-center row fill-height class="green ">
       <v-flex xs12 md9 shrink>
            <v-card class="ma-3 " elevation='12'>
              <!-- <h2 class="title font-weight-medium pt-3 pl-2"> Detalii </h2> -->
              <v-card-title primary-title
                            class="title font-weight-medium green lighten-4"
              >
               Detalii :
              </v-card-title>
                <v-list class="ma-1"
                        dense
                >
                    <template  v-for='(item, index) in items'>
                    <v-list-tile   :key='index'
                                    :class="esteEven(index)" 
                                    
                    >
                    <!-- <v-list-tile-content> -->
                            <v-list-tile-title>
                                    {{item.proprietate}}
                            </v-list-tile-title>
                            <v-list-tile-action>
                                    {{item.valoare}}
                            </v-list-tile-action>
                    <!-- </v-list-tile-content> -->
                    </v-list-tile>
                    </template>
                </v-list>
            </v-card>
       </v-flex>
    </v-layout>
  
</template>

<script>
  export default {
    data () {

      return {
        items: [
            {
                proprietate:'xxxx',
                valoare:'xxxx'
            },
            {
                proprietate:'xxxx',
                valoare:'xxxx'
            },
            {
                proprietate:'xxxx',
                valoare:'xxxx'
            },
            {
                proprietate:'xxxx',
                valoare:'xxxx'
            },
            {
                proprietate:'xxxx',
                valoare:'xxxx'
            },
            {
                proprietate:'xxxx',
                valoare:'xxxx'
            },
            {
                proprietate:'xxxx',
                valoare:'xxxx'
            },
            {
                proprietate:'xxxx',
                valoare:'xxxx'
            },
        ],
        culoareEven: 'grey lighten-2 '
      }
    },
    methods:{
      esteEven: function(i){
        
        let rez=''
        if (i%2==0) {} else rez=this.culoareEven
        return rez
      
      }

    }
  }
</script>