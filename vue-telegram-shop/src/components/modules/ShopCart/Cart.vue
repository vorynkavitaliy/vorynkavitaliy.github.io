<template>
<div class="shopcart_product">
	<div class="shopcart__container">
		<article class="product__picture">
			<DiscountLable :product="product"/>
			<img :src="product.img[0]" alt="">
		</article>

		<article class="product__description">
			<h3 class="name">{{product.name}}</h3>
			<Prices :product="product"/>

			<Counter :product="product"/>
		</article>

	</div>
</div>
</template>

<script>
	import DiscountLable from '../../molecules/DiscountLabel/DiscountLable.vue';
	import Prices from '../../molecules/Prices/Price.vue';
	import Counter from '../../molecules/ProductCounter/Counter.vue';

	
	export default {
		name: "Cart",
		components: {Counter, Prices, DiscountLable},
		props: {product: Object}
	}
</script>

<style src="./cart.css"></style>