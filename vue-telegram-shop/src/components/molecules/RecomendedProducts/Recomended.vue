<template>
    <section class="recomended-carousel">
        <h3>Так же рекомендуем</h3>
        <Carousel 
            :perPage="2"
            :paginationEnabled="false" 
            :loop="true"
            :navigationEnabled="true" 
            :navigationNextLabel="''"
            :navigationPrevLabel="''">
            <template v-for="product in recomendedList">
                <Slide v-if="product" :key="product.id">
                    <article class="recomended-item" @click="getProduct(product)">
                        <img :src="product.img[0]" :alt="product.name">
                        <DiscountLable :product="product"/>

                        <h4 class="recomended-title">{{product.name}}</h4>
                        <Prices :product="product"/>
                    </article>
                </Slide>
            </template>
        </Carousel>
    </section>
</template>

<script>
    import { Carousel, Slide } from 'vue-carousel';
    import { mapGetters, mapMutations } from 'vuex';
    import DiscountLable from '../DiscountLabel/DiscountLable.vue';
    import Prices from '../Prices/Price.vue';

    export default {
        name: 'Recomended.vue',
        computed: mapGetters(['recomendedList', 'allProducts', 'productsList', 'state']),
        components: { Carousel, Slide, DiscountLable, Prices },
        
        methods: {
            ...mapMutations(['setState', 'filterByID', 'setRecomended', 'getBreadcrumbs', 'removeLastBreadcrumbs']),

            getProduct(data) {
                this.removeLastBreadcrumbs();
                this.getBreadcrumbs({...data})

                this.filterByID({
					type: 'recomendedList', 
					arr: this.allProducts.products, 
					id: this.state.isIdes.category, 
					key: 'category_id'
                })
                
				this.filterByID({
					type: 'currentProduct', 
					arr: this.productsList, 
					id: data.id, 
					key: 'id'
				})

				this.setRecomended(data)

				this.setState({
					...this.state, 
					isIdes: {...this.state.isIdes, product: data.id}
				})
			},
        }
    }
</script>

<style>

    .VueCarousel-navigation .VueCarousel-navigation-next{
        right: 30px!important;
        height: 18px;
        width: 18px;
    }

    .VueCarousel-navigation .VueCarousel-navigation-prev{
        left: 30px!important;
        height: 18px;
        width: 18px;
    }
    .VueCarousel-navigation .VueCarousel-navigation-button{
        outline: none;
    }

    .VueCarousel-navigation .VueCarousel-navigation-button::before{
        content: '';
        display: block;
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        border-bottom: 2px solid #2196f3;
    }

    .VueCarousel-navigation .VueCarousel-navigation-next::before{
        border-right: 2px solid #2196f3;
        transform: rotate(-45deg);
    }

    .VueCarousel-navigation .VueCarousel-navigation-prev::before{
        border-left: 2px solid #2196f3;
        transform: rotate(45deg);
    }


    .recomended-carousel h3{
        margin-bottom: 16px;
    }
    .recomended-item{
        display: block;
        position: relative;
        display: flex;
        flex-direction: column;
        padding: 10px;
        /* height: 190px; */
        height: 35vh;
    }

    .recomended-item img{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: contain;
    }

    .recomended-item .recomended-title {
        position: relative;
        margin-top: auto;
        text-align: right;
        font-size: 13px;
    }

    .recomended-item .price-wrapper{
        position: relative;
        margin-top: 5px;
        text-align: right;
    }
</style>