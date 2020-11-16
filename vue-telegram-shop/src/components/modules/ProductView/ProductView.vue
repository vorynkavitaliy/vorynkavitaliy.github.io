<template>
	<section class="product-section" :class="{'favourite': currentProduct.isActive}">
		<div class="product-carousel">
		<DiscountLable :product="currentProduct"/>

		<FavoriteBtn 
			:productData="currentProduct" 
			:setFavourite="setFavourite"
			:favourites="favourites"/>
		
		<Carousel 
			:perPage="1"
			:paginationEnabled="false" 
			:loop="true"
			:navigationEnabled="true" 
			:navigationNextLabel="''"
			:navigationPrevLabel="''">
			<template  v-for="item of currentProduct.img" >
				<Slide v-if="item" :key="item.img">
				<img :src="item" alt="">
				</Slide>
			</template> 
		</Carousel>

		</div>

		<h3 
			class="product-title">
			{{currentProduct.name}}

			<Counter :product="currentProduct" @changeTotalSum="changeTotalSum"/>
		</h3>

		<Prices :product="currentProduct"/>
		
		<p class="product-description" v-html="currentProduct.description"></p>

		<!-- <button class="btn" @click="openCart">Оформить заказ</button> -->
	</section>

</template>

<script>
import { Carousel, Slide } from 'vue-carousel';

import FavoriteBtn from '../../molecules/FavoriteBtn/FavoriteBtn.vue';
import Prices from '../../molecules/Prices/Price.vue';
import DiscountLable from '../../molecules/DiscountLabel/DiscountLable.vue';
import Counter from '../../molecules/ProductCounter/Counter.vue';

export default {
	name: 'ProductView.vue',
	components: { Carousel, Slide, Counter, Prices, DiscountLable, FavoriteBtn },
	props: {
		products: Array,
		filterByID: Function,
		state: Object,
		setState: Function,
		favourites: Array,
		setFavourite: Function,
		changeTotalSum: Function
	},
	data(){
		return{
			currentProduct: this.filterByID(this.products, this.state.isIdes.product, 'id')[0],
		}
	},
}
</script>

<style lang="scss" scoped src="./productView.scss"></style>