<template>
	<section class="product-section" :class="{'favourite': currentProduct[0].isActive}">
		<div class="product-carousel">
			<DiscountLable :product="currentProduct[0]"/>

			<FavoriteBtn :productData="currentProduct[0]"/>
			<Carousel>
				<template  v-for="item of currentProduct[0].img" >
					<Slide v-if="item" :key="item.img">
						<img class="carousel-img" :src="item" alt="">
					</Slide>
				</template>
			</Carousel>
			<!-- <Carousel 
				:perPage="1"
				:paginationEnabled="false" 
				:loop="true"
				:navigationEnabled="true" 
				:navigationNextLabel="''"
				:navigationPrevLabel="''">
				<template  v-for="item of currentProduct[0].img" >
					<Slide v-if="item" :key="item.img">
						<img :src="item" alt="">
					</Slide>
				</template> 
			</Carousel> -->
		</div>

		<h3 class="product-title">
			{{currentProduct[0].name}}
			<Counter :product="currentProduct[0]"/>
		</h3>

		<Prices :product="currentProduct[0]"/>
		
		<p class="product-description" v-html="currentProduct[0].description"></p>

		<button class="btn" @click="openCart">Оформить заказ</button>

		<RecomendedList/>
	</section>

</template>

<script>
// import { Carousel, Slide } from 'vue-carousel';


import FavoriteBtn from '../../molecules/FavoriteBtn/FavoriteBtn.vue';
import Prices from '../../molecules/Prices/Price.vue';
import DiscountLable from '../../molecules/DiscountLabel/DiscountLable.vue';
import Counter from '../../molecules/ProductCounter/Counter.vue';
import RecomendedList from '../../molecules/RecomendedProducts/Recomended.vue';
import { mapGetters, mapMutations } from 'vuex';
import Carousel from '../../molecules/Carousel/Carousel.vue';
import Slide from '../../molecules/Carousel/Slide.vue';



export default {
	name: 'ProductView.vue',
	components: { Carousel, Slide, Counter, Prices, DiscountLable, FavoriteBtn, RecomendedList },
	computed: mapGetters(['currentProduct']),
	props: {state: Object},
	methods: {
		...mapMutations(['setState', 'setCartItems']),

		openCart(){
			this.setCartItems()
			this.setState({
				...this.state,
				isCurrentProduct: false,
				isCart: true
			})
		}
	}
}
</script>

<style src="./productView.css"></style>