<template>
    <section class="shopcart_product">
        <div class="placeholder" v-if="favourites.length < 1">Вы еще не добавили в избронные ни одного продукта</div>
        <div 
            v-else v-for="item of favourites" 
            :key="item.id" 
            class="shopcart__container"
        >
            <article class="product__picture">
                <DiscountLable :product="item"/>
                <img :src="item.img[0]" alt="" @click="getProduct(item.id, item.name)">
            </article>
            <article class="product__description">
                <h3 class="name" @click="getProduct(item.id, item.name)">{{item.name}}</h3>
                <Prices :product="item"/>
            </article>
        </div>
    </section>
</template>

<script>
    import DiscountLable from '../../molecules/DiscountLabel/DiscountLable.vue'
    import Prices from '../../molecules/Prices/Price.vue'

    export default {
        name: 'Favourites',
        components: {Prices, DiscountLable},
        props: {
            favourites: Array,
            state: Object,
            setState: Function,
            getBreadcrumbs: Function
        },

        methods:{
			getProduct(id, name) {
                this.$emit('getBreadcrumbs', {id, name})
				this.setState({
					...this.state, 
					isFavorite: false, 
					isCurrentProduct: true, 
					isIdes: {...this.state.isIdes, product: id}
                })
				
			},
		},
    }
</script>

<style src="./style.css"></style>