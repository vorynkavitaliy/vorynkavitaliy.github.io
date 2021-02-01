<template>
	<section class="categories">
		<div v-for="category of allProducts.categories" :key="category.id+category.name" 
			class="category" 
			:id="category.id" 
			@click="getCategory(category.id, category.name)">

			<div class="image category_img"><img :src="category.img" alt=""></div>
			<div class="category_name"><p class="ellipsis">{{category.name}}</p></div>
		</div>
	</section>
	
</template>

<script>
	import { mapGetters, mapMutations } from 'vuex';
	export default {
		name: "category",
		props: {
			state: Object,
			// animation: Function
		},
		computed: mapGetters(['allProducts']),
		methods:{
			...mapMutations(['setState', 'filterByID', 'getBreadcrumbs']),

			getCategory(id, name){

				this.getBreadcrumbs({id, name})
				this.filterByID({
					type: 'productsList', 
					arr: this.allProducts.products, 
					id: id, 
					key: 'category_id'
				})

				// this.$emit('animation', 
				// 	{...this.state, isProduct: true, isIdes: {...this.state.isIdes, category: id}},
				// 	{parentItem: 'categories', currentItem: 'product-list'},
				// 	{...this.state, isCategory: true, isIdes: {...this.state.isIdes, category: id}},
				// )

				this.setState({
					...this.state,
					isCategory: false, 
					isProduct: true, 
					isIdes: {...this.state.isIdes, category: id}
				})
			}
		},
	}
</script>

<style src="./style.css"></style>
