<template>
	<section class="product-list">
		<article 
			v-for="product of productsList" 
			:key="product.id+product.name"
			class="product" 
			:class="{'favourite': product.isActive}"
			:id="product.id">

			<DiscountLable :product="product"/>

			<FavoriteBtn :productData="product"/>

			<div class="image product_img" @click="getProduct(product)">
				<img :src="product.img[0]" alt="">
			</div>

			<div class="product__title">
				<h3 class="ellipsis" @click="getProduct(product)">{{product.name}} </h3>
				<Prices :product="product"/>
				<Counter :product="product"/>
			</div>

		</article>
	</section>
	
</template>

<script>
	import DiscountLable from '../../molecules/DiscountLabel/DiscountLable.vue'
	import FavoriteBtn from '../../molecules/FavoriteBtn/FavoriteBtn.vue'
	import Prices from '../../molecules/Prices/Price.vue'
	import Counter from '../../molecules/ProductCounter/Counter.vue'
	import { mapGetters, mapMutations } from 'vuex';
	export default {
		name: "Product",
		components: {DiscountLable, FavoriteBtn, Counter, Prices},
		computed: mapGetters(['productsList', 'allProducts']),
		props: {state: Object},

		methods:{
			...mapMutations(['setState', 'filterByID', 'setRecomended', 'getBreadcrumbs']),
			
			getProduct(data) {
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
					isProduct: false, 
					isCurrentProduct: true, 
					isIdes: {...this.state.isIdes, product: data.id}
				})
			},
		},
	}
</script>

<style src="./productList.css"></style>