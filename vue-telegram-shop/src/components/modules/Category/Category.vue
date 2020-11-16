<template>
	<section class="categories">
		<div v-for="category of categories" :key="category.id+category.name" 
			class="category" 
			:id="category.id" 
			@click="getCategory(category.id, category.name)">

			<div class="image category_img"><img :src="category.img" alt=""></div>
			<div class="category_name"><p class="ellipsis">{{category.name}}</p></div>
		</div>
	</section>
	
</template>

<script>
	export default {
		name: "category",
		props: {
			categories: Array,
			state: Object,
			setState: Function,
			getProductsList: Function,
			getBreadcrumbs: Function
		},
		methods: {
			getCategory(id, name){
				this.$emit('getProductsList', id)
				this.$emit('setState', {
					...this.state,
					isCategory: false, 
					isProduct: true, 
					isIdes: {...this.state.isIdes, category: id}
				})
				this.$emit('getBreadcrumbs', {id, name})
			}
		},
	}
</script>

<style src="./style.css"></style>
