<template>
    <nav class="navigation">
        <ul class="navigation-list">
            <li 
                class="navigation-item" 
                v-for="category of allProducts.categories"
                :class="{'active': 
                    category.id === state.isIdes.category && (state.isCurrentProduct || state.isProduct)
                }"
                @click="getCategory(category.id, category.name)"
                :key="category.id">{{category.name}}</li>
        </ul>
    </nav>

</template>

<script>
    import { mapGetters, mapMutations } from 'vuex';

    export default {
        name: "Navigation",
        computed: mapGetters(['allProducts']),
        props: {state: Object},
        methods: {
            ...mapMutations(['setState', 'filterByID', 'getBreadcrumbs', 'resetBreadcrumbs']),

			getCategory(id, name){
                this.resetBreadcrumbs()
                this.getBreadcrumbs({id, name})

                this.filterByID({
					type: 'productsList', 
					arr: this.allProducts.products, 
					id: id, 
					key: 'category_id'
                })
                
                this.setState({
                    ...this.state,
                    isCategory: false,
                    isCurrentProduct: false,
					isProduct: true, 
					isIdes: {...this.state.isIdes, category: id}
                });
                
			}
		},
    }
</script>


<style src="./navigation.css"></style>
