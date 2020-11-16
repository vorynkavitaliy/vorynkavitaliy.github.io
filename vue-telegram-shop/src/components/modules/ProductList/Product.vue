<template>
	<section class="product-list">
		<article 
			v-for="product of products" 
			:key="product.id+product.name"
			class="product" 
			:class="{'favourite': product.isActive}"
			:id="product.id">

			<DiscountLable :product="product"/>

			<FavoriteBtn 
				:productData="product" 
				:setFavourite="setFavourite" 
				:favourites="favourites"/>

			<div class="image product_img" @click="getProduct(product.id, product.name)">
				<img :src="product.img[0]" alt="">
			</div>

			<div class="product__title">
				<h3 class="ellipsis" @click="getProduct(product.id, product.name)">{{product.name}} </h3>
				<Prices :product="product"/>
				<Counter :product="product" @changeTotalSum="changeTotalSum"/>
			</div>

		</article>
	</section>
	
</template>

<script>
	import DiscountLable from '../../molecules/DiscountLabel/DiscountLable.vue'
	import FavoriteBtn from '../../molecules/FavoriteBtn/FavoriteBtn.vue'
	import Prices from '../../molecules/Prices/Price.vue'
	import Counter from '../../molecules/ProductCounter/Counter.vue'

	export default {
		name: "Product",
		components: {DiscountLable, FavoriteBtn, Counter, Prices},
		props: {
			products: Array,
			filterByID: Function,
			state: Object,
			setState: Function,
			changeTotalSum: Function,
			favourites: Array,
			setFavourite: Function,
			getBreadcrumbs: Function
			
		},
		// data() {
		// 	return {
		// 		productList: this.filterByID(this.products, this.state.isIdes.category, 'category_id'),
		// 	}
		// },
		methods:{
			getProduct(id, name) {
				this.setState({
					...this.state, 
					isProduct: false, 
					isCurrentProduct: true, 
					isIdes: {...this.state.isIdes, product: id}
				})

				this.$emit('getBreadcrumbs', {id, name})
			},
		},
	}
</script>

<style src="./style.css"></style>