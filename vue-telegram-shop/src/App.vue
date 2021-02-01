<template>
	<div id="app">
		<div class="container">
			<div class="appbar"><Back :state="state"/></div>

			<Navigation v-if="state.isProduct" :state="state"/>

			<Breadcrumbs v-if="state.isCurrentProduct" :state="state"/>

			<div class="cards">

				<Category v-if="state.isCategory" :state="state" @animation="animation"/>

				<Product v-else-if="state.isProduct" :state="state"/>

				<ProductView v-else-if="state.isCurrentProduct" :state="state"/>

				<Favourites v-else-if="state.isFavorite" :state="state"/>

				<ShopCart v-else-if="state.isCart"/>

			</div>

			<Footer :state="state"/>
		</div>
	</div>
</template>

<script>

	import { mapGetters, mapMutations, mapActions } from 'vuex';
	import ProductView from "./components/modules/ProductView/ProductView.vue";
	import Favourites from './components/modules/Favourites/Favourites.vue';
	import Footer from './components/modules/Footer/Footer.vue';
	import Back from './components/molecules/ToBack/Back.vue';
	import Category from './components/modules/Category/Category.vue';
	import Product from './components/modules/ProductList/Product.vue';
	import ShopCart from './components/modules/ShopCart/ShopCart.vue';
	import Navigation from './components/molecules/Navigation/Navigation.vue';
	import Breadcrumbs from './components/molecules/Breadcrumbs/Breadcrumbs';

	export default {
		name: "app",
		components: {
			ShopCart, Category, Product, ProductView, Favourites, Footer, Back, Navigation, Breadcrumbs
		},
		computed: mapGetters(['state', 'breadcrumbs']),
		async mounted() {
			// получаем все данные (категории, продукты, стоимость доставки, стоимость заказа)
			this.fetchProducts()
		},

		methods: {
			...mapActions(['fetchProducts']),
			...mapMutations(['setState']),
			
			animation(state, data, newState){
				this.setState(state)
				

				setTimeout(() =>{
					const parentItem = document.querySelector(`.${data.parentItem}`)
					const currentItem = document.querySelector(`.${data.currentItem}`)
				
					console.log(parentItem);
					console.log(currentItem);
					
					// parentItem.classList.add('hide')
					// currentItem.classList.remove('showing')
				}, 0)
				

				const animate = setTimeout(() => {
					// parentItem.classList.remove('hide')
					this.setState({...this.state, ...newState})
					clearTimeout(animate)
				}, 450)
			},
		}
	}


</script>

<style scoped lang="sass" src="./app.sass"></style>