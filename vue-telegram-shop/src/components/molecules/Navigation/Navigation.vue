<template>
    <nav class="navigation">
        <ul class="navigation-list">
            <li 
                class="navigation-item" 
                v-for="category of categories"
                :class="{'active': category.id === state.isIdes.category}"
                @click="getCategory(category.id, category.name)"
                :key="category.id">{{category.name}}</li>
        </ul>
    </nav>

</template>

<script>
    export default {
        name: "Navigation",
        props: {
            categories: Array,
            state: Object,
            setState: Function,
            getProductsList: Function,
            getBreadcrumbs: Function,
            resetBreadcrumbs: Function
			
        },

        // data(){
        //     return{
        //         active: 
        //     }
        // },
        methods: {
			getCategory(id, name){
                this.$emit("getProductsList", id);
                this.$emit('resetBreadcrumbs')
                this.$emit("setState", {
                    ...this.state,
                    isCategory: false,
                    isCurrentProduct: false,
					isProduct: true, 
					isIdes: {...this.state.isIdes, category: id}
                });
                this.$emit('getBreadcrumbs', {id, name})
			}
		},
    }
</script>


<style lang="scss" scoped src="./navigation.scss"></style>