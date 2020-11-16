<template>
  <div class="price-wrapper">
        <span 
            class="price" 
            :class="{'old-price': product.discount.discount}"
            >{{product.price}} грн</span>

        <span 
            v-if="product.discount.discount && product.discount.discount_type === 1" 
            class="new-price">
                {{product.price - Math.ceil(product.discount.discount)}} грн</span>

        <span 
            v-else-if="product.discount.discount && product.discount.discount_type === 2" 
            class="new-price">
                {{product.price - Math.ceil(product.price*(+product.discount.discount/100))}} грн</span>
    </div>
</template>

<script>
    export default {
        name: 'Prices',
        props: {
            product: Object
        }
    }
</script>

<style lang="scss" scoped src="./prices.scss"></style>