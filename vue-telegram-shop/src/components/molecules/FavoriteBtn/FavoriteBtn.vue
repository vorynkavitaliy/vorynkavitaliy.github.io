<template>
  <div class="favoritBtn"
    :class="{'active': isActive}"
    @click="onChecked">
        <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg" class="jsx-1431268232">
            <path d="M7.6169 1.95643L8.00227 2.41992L8.38657 1.95553C9.12259 1.06612 10.236 0.5 11.4796 0.5C12.1845 0.5 12.8446 0.682198 13.4212 0.999719C14.6621 1.68812 15.5 3.00728 15.5 4.52133C15.5 4.9535 15.4289 5.36952 15.3009 5.7591L15.2933 5.78244L15.2879 5.80642C15.149 6.43003 14.767 7.13501 14.2064 7.87862C13.6504 8.61628 12.9432 9.35998 12.1946 10.0597C10.6975 11.4589 9.07114 12.6487 8.252 13.222C8.09743 13.3301 7.90249 13.3302 7.74791 13.222C6.92861 12.6487 5.30182 11.4589 3.80451 10.0597C3.05579 9.35999 2.34851 8.61628 1.79245 7.87863C1.2319 7.13502 0.850014 6.43008 0.7113 5.80656L0.705949 5.78251L0.698259 5.7591C0.570458 5.37004 0.5 4.95466 0.5 4.52133C0.5 3.00652 1.338 1.68714 2.57835 0.999905C3.15694 0.682016 3.81588 0.5 4.51851 0.5C5.76374 0.5 6.87654 1.06599 7.6169 1.95643Z" class="jsx-1431268232"></path>
        </svg>
  </div>
</template>

<script>
    export default {
        name: "FavoriteBtn",
        props: {
            productData: Object,
            setFavourite: Function,
            favourites: Array,
        },

        data(){
            return {
                isActive: false
            }
        },

        methods: {
            onChecked(){
                this.setFavourite(this.productData)
                this.isActive = this.favourites.findIndex(item => item.id === this.productData.id) !== -1 ? true : false
            }
            
        }
    }
</script>

<style src="./style.css"></style>