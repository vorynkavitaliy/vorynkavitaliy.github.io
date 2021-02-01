<template>
    <button class="appbar_btn iconbtn mirrorX" @click="goBack">
        <svg height="24" viewBox="0 0 512 512" width="24" xmlns="http://www.w3.org/2000/svg">
            <path d="m391.968 146.624a341.723 341.723 0 0 1 -27.011 131.284 342.818 342.818 0 0 1 -73.712 109.337 343 343 0 0 1 -243.245 100.755 24 24 0 0 1 0-48 294.062 294.062 0 0 0 209.3-86.7 294 294 0 0 0 86.667-206.59l24.033-32.044zm86.432 48.576a24 24 0 0 0 4.8-33.6l-96-128a24 24 0 0 0 -38.4 0l-96 128a24 24 0 1 0 38.4 28.8l76.8-102.4 76.8 102.4a24 24 0 0 0 33.6 4.8z"></path>
        </svg>
    </button>
</template>

<script>
    import {mapMutations } from 'vuex';
    export default {
        name: "Back",
        props: {state: Object},
        methods: {
            ...mapMutations(['setState', 'removeLastBreadcrumbs']),

            goBack(){
                this.removeLastBreadcrumbs()
                this.state.isProduct && this.setState({...this.state, isCategory: true, isProduct: false})
                this.state.isCurrentProduct && this.setState({...this.state, isProduct: true, isCurrentProduct: false})
                this.state.isCart && this.setState({...this.state, isCategory: true, isCart: false})
                this.state.isFavorite && this.setState({...this.state, isCategory: true, isFavorite: false})
            }
        }
    }
</script>

<style>

    .mirrorX {
        transform: scale(-1, 1);
    }

    .appbar_btn {
        position: relative;
        height: 36px;
        width: 36px;
    }

    .iconbtn {
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 25px;
        padding: 1.7px 0 0 1.7px;
        background-color: unset;
        border: unset;
    }

</style>