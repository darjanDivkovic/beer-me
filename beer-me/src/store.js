import axios from 'axios';
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        beers: [],
    },
    mutations: {
        fetchBeers() {
            console.log('I raq!')
            axios.get('https://api.punkapi.com/v2/beers?page=1&per_page=80')
                 .then(res => this.state.beers = res.data.map(beer => {
                     console.log('beer', beer)
                     const id = beer.id
                     const name = beer.name
                     const tagline = beer.tagline
                     const firstBrewed = beer.first_brewed
                     const imageUrl = beer.image_url
                     const volume = beer.volume
                     console.log('beer:',id, name,tagline, firstBrewed, imageUrl, volume)
                     return {id, name, tagline, firstBrewed, imageUrl, volume}
                    }))
            /*
                const beerList = [
                {id: 1, name: 'Tuzlak'},
                {id: 2, name: 'Pan'},
                {id: 3, name: 'Ozujssss'},
                {id: 1, name: 'Tuzlak'},
                {id: 2, name: 'Pan'},
                {id: 3, name: 'Ozujssss'},
                {id: 1, name: 'Tuzlak'},
                {id: 2, name: 'Pan'},
                {id: 3, name: 'Ozujssss'},
            ];
            this.state.beers = beerList
            */
        }
    }
});