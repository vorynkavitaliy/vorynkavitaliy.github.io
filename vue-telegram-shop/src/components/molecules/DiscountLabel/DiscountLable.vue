<template>
    <span 
        v-if="product.discount.discount && product.discount.discount_type === 1" 
        class="product-label"
        >-{{Math.floor(+product.discount.discount)}}₴</span>
    
    <span 
        v-else-if="product.discount.discount && product.discount.discount_type === 2" 
        class="product-label"
        >-{{Math.floor(+product.discount.discount)}}%</span>
</template>

<script>
    export default {
        name: "DiscountLabel",
        props:{
            product: Object
        }
    }
</script>

<style src="./style.css"></style>