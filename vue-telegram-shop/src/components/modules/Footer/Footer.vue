<template>
    <footer id="tabBar" class="bottombar">     
        <div class="tabs-inner">
            <button 
                data-type="Menu" 
                class="tab" 
                :class="{ active: state.isCategory }" 
                @click="switchState('Menu')" 
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="46.002" height="56.003" viewBox="0 0 46.002 56.003">
                    <g id="Catalog" transform="translate(-9 -3.998)">
                        <path id="Исключение_1" data-name="Исключение 1" d="M-21888-2720h-40a1,1,0,0,1-1-1v-3h3a3.011,3.011,0,0,0,3-3v-6a3.011,3.011,0,0,0-3-3h-3v-24h3a3.011,3.011,0,0,0,3-3v-6a3.018,3.018,0,0,0-3-3h-3v-3a1,1,0,0,1,1-1h40a3.018,3.018,0,0,1,3,3.005v50A3.011,3.011,0,0,1-21888-2720Zm-32-10a1,1,0,0,0-1,1,1,1,0,0,0,1,1h17a1,1,0,0,0,1-1,1,1,0,0,0-1-1Zm0-6a1,1,0,0,0-1,1,1,1,0,0,0,1,1h22a1,1,0,0,0,1-1,1,1,0,0,0-1-1Zm0-6a1,1,0,0,0-1,1,1,1,0,0,0,1,1h14a1,1,0,0,0,1-1,1,1,0,0,0-1-1Zm0-6a1,1,0,0,0-1,1,1,1,0,0,0,1,1h21a1,1,0,0,0,1-1,1,1,0,0,0-1-1Zm0-6a1,1,0,0,0-1,1,1,1,0,0,0,1,1h28a1,1,0,0,0,1-1,1,1,0,0,0-1-1Zm0-6a1,1,0,0,0-1,1,1,1,0,0,0,1,1h28a1,1,0,0,0,1-1,1,1,0,0,0-1-1Zm0-6a1,1,0,0,0-1,1,1,1,0,0,0,1,1h22a1,1,0,0,0,1-1,1,1,0,0,0-1-1Zm-6,40h-4a1,1,0,0,1-1-1v-6a1,1,0,0,1,1-1h4a1,1,0,0,1,1,1v6A1,1,0,0,1-21926-2726Zm0-36h-4a1,1,0,0,1-1-1v-6a1,1,0,0,1,1-1h4a1,1,0,0,1,1,1v6A1,1,0,0,1-21926-2762Z" transform="translate(21940 2780)"/>
                    </g>
                </svg>
                <span>Меню</span>
            </button>

            <button 
                data-type="Favorites" 
                class="tab" 
                :class="{ active: state.isFavorite }" 
                @click="switchState('Favorites')" 
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="96.319" height="81.447" viewBox="0 0 96.319 81.447">
                    <path id="favorites_" data-name="favorites " d="M55.3,83.68H7.59a5.74,5.74,0,0,1-5.74-5.74V15A5.74,5.74,0,0,1,7.59,9.28H31.963a2.5,2.5,0,0,1,1.55.355,1.87,1.87,0,0,1,.335,1.4V44.929a2.4,2.4,0,0,0,.406,1.631A2.521,2.521,0,0,0,35.9,47H43a2.561,2.561,0,0,0,1.5-.246c.465-.368.359-1.226.359-1.226V10.595a1.382,1.382,0,0,1,.285-1.038,1.994,1.994,0,0,1,1.187-.277H70.51A5.74,5.74,0,0,1,76.25,15V41.68A9.5,9.5,0,0,0,67.67,47l-3.8,7.69-8.49,1.23a9.56,9.56,0,0,0-5.3,16.31l6.15,6ZM96.09,63,83.87,61.25,78.4,50.18a2.4,2.4,0,0,0-4.31,0L68.63,61.25,56.41,63a2.4,2.4,0,0,0-1.33,4.09l8.84,8.62-2.08,12.2a2.4,2.4,0,0,0,3.49,2.53l10.93-5.75,10.93,5.75a2.4,2.4,0,0,0,3.48-2.53L88.58,75.74l8.84-8.62A2.4,2.4,0,0,0,96.09,63Z" transform="translate(-1.85 -9.273)"/>
                </svg>
                <span>Избранные</span>
            </button>

            <button 
                data-type="Cart" 
                class="tab" 
                @click="switchState('Cart')" 
                :class="{ active: state.isCart }"
            >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="Bold">
                    <path d="M23,5.947A1.929,1.929,0,0,0,21.1,4H19.251A.25.25,0,0,1,19,3.75V3a3,3,0,0,0-3-3H13a3,3,0,0,0-3,3v.75a.25.25,0,0,1-.25.25h-2a.25.25,0,0,1-.25-.25V3a1,1,0,0,1,1-1,1,1,0,0,0,0-2,3,3,0,0,0-3,3v.75a.25.25,0,0,1-.25.25H3.5A2,2,0,0,0,1.434,5.859L0,22.053A2.014,2.014,0,0,0,2.072,24H22.1A1.941,1.941,0,0,0,24,21.99ZM12,3a1,1,0,0,1,1-1h3a1,1,0,0,1,1,1v.75a.25.25,0,0,1-.25.25h-4.5A.25.25,0,0,1,12,3.75ZM2.559,21.975a.5.5,0,0,1-.5-.547l1.4-14.974A.5.5,0,0,1,3.957,6H6.582a.5.5,0,0,1,.5.472l.833,14.994a.5.5,0,0,1-.5.528Z"></path>
                </svg>
                <span>Корзина</span>
                <span class="total-sum" :key="sum">{{sum}} грн</span>
            </button>
        </div>
    </footer>

</template>

<script>
    export default {
        props: {
            state: Object,
            setState: Function,
            setCartItems: Function,
            resetBreadcrumbs: Function,
            sum: Number
        },

        methods: {
            switchState(type){
                this.$emit('resetBreadcrumbs')
                switch (type) {
                    case "Menu":
                        
                        this.setState({
                            ...this.state,
                            isCart: false,
                            isFavorite: false,
                            isProduct: false,
                            isCategory: true,
                            isCurrentProduct: false,
                        })
                        break;

                    case "Favorites":
                        this.setState({
                            ...this.state,
                            isCart: false,
                            isFavorite: true,
                            isProduct: false,
                            isCategory: false,
                            isCurrentProduct: false,
                        })
                        break;

                    case "Cart":
                        this.setCartItems()
                        this.setState({
                            ...this.state,
                            isCart: true,
                            isFavorite: false,
                            isProduct: false,
                            isCategory: false,
                            isCurrentProduct: false,
                        })
                        break;
                
                    default:
                        break;
                }
            }
        }
    }
</script>

<style src="./style.css"></style>
