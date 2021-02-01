<template>
    <section class="favourite__product">
        <div class="placeholder" v-if="favourites.length < 1">Вы еще не добавили в избронные ни одного продукта</div>
        <div 
            v-else v-for="item of favourites" 
            :key="item.id" 
            :data-id="item.id"
            class="favourite__container"
        >
            <article class="product__picture">
                <DiscountLable :product="item"/>
                <img :src="item.img[0]" alt="" @click="getProduct(item.id, item.name)">
            </article>
            <article class="product__description">
                <h3 class="name" @click="getProduct(item.id, item.name)">{{item.name}}</h3>
                <!-- <div class="details" v-html="item.description"></div> -->
                <Prices :product="item"/>
                

                <div class="favourite__btns">
                    <button class="add__to-basket" @click="counterPlus(item)">В Корзину</button>
                    <button class="remove__favourite" @click="removeFavourite(item)">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18.026" height="24.358" viewBox="0 0 18.026 24.358">
                            <g id="noun_Delete_1366343" transform="translate(-18 -6.76)">
                                <path id="Контур_436" data-name="Контур 436" d="M29.314,6.76h-4.6a1.69,1.69,0,0,0-1.69,1.69V9.8H19.408A1.408,1.408,0,0,0,18,11.207v1.746a1.408,1.408,0,0,0,1.408,1.408h.318V28.02a3.1,3.1,0,0,0,3.1,3.1H31.2a3.1,3.1,0,0,0,3.1-3.1V14.362h.318a1.408,1.408,0,0,0,1.408-1.408V11.207A1.408,1.408,0,0,0,34.618,9.8H31V8.45A1.69,1.69,0,0,0,29.314,6.76ZM24.709,8.45h4.605V9.8h-4.6ZM32.6,28.02a1.408,1.408,0,0,1-1.408,1.408H22.822a1.408,1.408,0,0,1-1.408-1.408V14.362h11.2Zm1.741-15.348H19.69V11.489H34.337Z" fill="#f95959"/>
                                <path id="Контур_437" data-name="Контур 437" d="M47.845,52.338a.845.845,0,0,0,.845-.845V41.945a.845.845,0,0,0-1.69,0v9.548A.845.845,0,0,0,47.845,52.338Z" transform="translate(-20.832 -24.668)" fill="#f95959"/>
                                <path id="Контур_438" data-name="Контур 438" d="M58.845,52.338a.845.845,0,0,0,.845-.845V41.945a.845.845,0,0,0-1.69,0v9.548A.845.845,0,0,0,58.845,52.338Z" transform="translate(-28.733 -24.668)" fill="#f95959"/>
                                <path id="Контур_439" data-name="Контур 439" d="M36.845,52.338a.845.845,0,0,0,.845-.845V41.945a.845.845,0,0,0-1.69,0v9.548A.845.845,0,0,0,36.845,52.338Z" transform="translate(-12.93 -24.668)" fill="#f95959"/>
                            </g>
                        </svg>
                    </button>
                </div>
                
            </article>
        </div>
    </section>
</template>

<script>
    import DiscountLable from '../../molecules/DiscountLabel/DiscountLable.vue'
    import Prices from '../../molecules/Prices/Price.vue'
    import { mapGetters, mapMutations, mapActions } from 'vuex';
    export default {
        name: 'Favourites',
        components: {Prices, DiscountLable},
        computed: mapGetters(['favourites']),
        props: {state: Object},

        methods:{
            ...mapActions(['counterPlus']),
            ...mapMutations(['setFavourite', 'setState', 'getBreadcrumbs', 'resetBreadcrumbs']),

			getProduct(id, name) {
                this.resetBreadcrumbs()
                this.getBreadcrumbs({id, name})

				this.setState({
					...this.state, 
					isFavorite: false, 
					isCurrentProduct: true, 
					isIdes: {...this.state.isIdes, product: id}
                })

                
            },
            
            removeFavourite(product){
                const favouriteIontainer = document.querySelectorAll('.favourite__container')

                for (const item of favouriteIontainer) {
                    if(+item.dataset.id === product.id){
                        item.classList.add('removing')
                        const removing = setTimeout(() => {
                            this.setFavourite(product)
                            item.classList.remove('removing')
                            clearTimeout(removing)
                        }, 450)
                    }
                }  
            }
		},
    }
</script>

<style src="./favourite.css"></style>