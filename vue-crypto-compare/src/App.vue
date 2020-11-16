<template>
	<div id="app">
		<section class="wrapper">
			<article v-for="(crypto, i) in cryptos" :key="crypto.USD">
				{{crypto.USD}}$
				<LineChart
					:chartData="allCryptos" 
					:options="chartOptions" 
					:label="i">
				</LineChart>
				
			</article>
		</section>

	</div>
</template>

<script>
	import { mapGetters, mapActions } from 'vuex';
	import LineChart from './components/LineChart.vue';
	export default {
		name: 'App',
		components: {LineChart},
		data: () => {
			return {
				chartOptions: {
					responsive: true,
					maintainAspectRotatio: false
				},
				
			}	
		},
		  
		async mounted(){
			this.cryptoDatabase()
			const resetCrypto = setInterval(() => {
				this.cryptoDatabase()
				// clearInterval(resetCrypto)
			}, 4000)
			
		},
		computed: mapGetters(['allCryptos', 'cryptos']),

		methods: mapActions(['cryptoDatabase'])
	}
</script>

<style lang="sass">
	body,html, *
		box-sizing: border-box
		padding: 0
		margin: 0
		text-align: left

	#app
		font-family: Avenir, Helvetica, Arial, sans-serif
		-webkit-font-smoothing: antialiased
		-moz-osx-font-smoothing: grayscale
		text-align: center
		color: #2c3e50
		margin-top: 60px

	.wrapper
		display: flex
		flex-wrap: wrap
		align-items: stretch
		justify-content: flex-start
		max-width: 1600px
		margin: auto

		article
			display: flex
			flex-direction: column
			border: 1px solid #ccc
			border-radius: 10px
			padding: 10px
			margin: 15px
			width: 100%

			@media screen and (min-width: 560px)
				width: calc( 100%/2 - 30px )

			@media screen and (min-width: 768px)
				width: calc( 100%/3 - 30px )

			@media screen and (min-width: 992px)
				width: calc( 100%/4 - 30px )

			@media screen and (min-width: 1200px)
				width: calc( 100%/5 - 30px )

</style>
