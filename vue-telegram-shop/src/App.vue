<template>
	<div id="app">
		<div class="container">
			<div class="appbar">
				<Back :state="appState" :setState="setState" @removeLastBreadcrumbs="removeLastBreadcrumbs"/>
			</div>

			<Navigation
				:categories="database.categories"
				:state="appState"
				@resetBreadcrumbs="resetBreadcrumbs"
				@setState="setState"
				@getProductsList="getProductsList"
				@getBreadcrumbs="getBreadcrumbs"
			/>

			<ul class="breadcrumbs-list" v-if="appState.isCurrentProduct">
				<li
					v-for="crumb of breadcrumbs" :key="crumb.name" 
					@click="setBreadcrumbs(crumb)"
				>
					{{crumb.name}}
				</li>
			</ul>

			<div class="cards">
				<Category 
					v-if="appState.isCategory"
					:categories="database.categories"
					:state="appState"
					@setState="setState"
					@getProductsList="getProductsList"
					@getBreadcrumbs="getBreadcrumbs"
				></Category>

				<Product
					v-else-if="appState.isProduct"
					:products="productList"
					:state="appState"
					:setState="setState"
					:favourites="favouritesProducts"
					:setFavourite="setFavourite"
					:changeTotalSum="changeTotalSum"
					@getBreadcrumbs="getBreadcrumbs"
				/>

				<ProductView 
					v-else-if="appState.isCurrentProduct"
					:products="database.products"
					:state="appState"
					:setState="setState"
					:filterByID="filterByID"
					:favourites="favouritesProducts"
					:setFavourite="setFavourite"
					:changeTotalSum="changeTotalSum"
				></ProductView>

				<Favourites 
					v-else-if="appState.isFavorite"
					:state="appState"
					:setState="setState"
					:favourites="favouritesProducts" 
					@getBreadcrumbs="getBreadcrumbs"
				/>

				<ShopCart 
					v-else-if="appState.isCart"
					:cartProducts="cartProducts"
					:cartTotalSum="cartTotalSum"
					:changeTotalSum="changeTotalSum"
					:sum="sum"
				/>
			</div>

			<Footer 
				:state="appState"
				:setState="setState"
				:setCartItems="setCartItems"
				@resetBreadcrumbs="resetBreadcrumbs"
				:sum="sum"/>
		</div>
	</div>
</template>

<script src="./app.js"></script>

<style scoped src="./app.css"></style>