<template>
    <div class="v-carousel">
        <div class="v-carousel-wrapper">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Carousel",
        props: {
            perPage: Number,
            offset: Number
        },

        data: () => ({
            count: 0,
            items: this.perPage || 1,
            margin: this.offset || 0
        }),

        mounted(){
            const carouselItem = document.querySelectorAll('.v-carousel-item');
            carouselItem.forEach(slide => {
                slide.setAttribute('style', `
                    width: calc(100%/${this.items} - ${this.margin}px);
                `)
            })
        },
    }
</script>

<style>
    .v-carousel{
        overflow: hidden;
        position: relative;
    }

    .v-carousel .v-carousel-wrapper{
        min-width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: stretch;
    }

    .v-carousel .v-carousel-item{
        width: 100%;
        height: 100%;
    }
</style>