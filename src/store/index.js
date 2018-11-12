import Vue from 'vue'
import Vuex from 'vuex'

import chunks from './chunks'

Vue.use(Vuex)

const store = new Vuex.Store({
    modules:{
        chunks
    },
    
})

export default store