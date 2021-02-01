<template>
    <ul class="breadcrumbs-list">
        <li v-for="crumb of breadcrumbs" :key="crumb.name" @click="setBreadcrumbs(crumb)">
            {{crumb.name}}
        </li>
    </ul>
</template>

<script>
    import { mapGetters, mapMutations } from 'vuex';
    export default {
        name: 'Breadcrumbs',
        computed: mapGetters(['breadcrumbs', 'allProducts']),
        props: {state: Object},
        methods: {
            ...mapMutations(['setState', 'filterByID', 'removeLastBreadcrumbs', 'resetBreadcrumbs']),

            setBreadcrumbs(e){
				let selfName = e.name
				const lastName = this.breadcrumbs[this.breadcrumbs.length - 1].name

				// this.breadcrumbs = this.breadcrumbs.slice(0, this.breadcrumbs.indexOf(e)+1)
				if(e.name === 'Главная') {
                    this.resetBreadcrumbs()
                    this.setState({
                        ...this.state,
                        isCart: false,
                        isFavorite: false,
                        isProduct: false,
                        isCategory: true,
                        isCurrentProduct: false,
                    }
                )}

				else if(this.state.isCurrentProduct && selfName != lastName){
                    this.removeLastBreadcrumbs()

                    this.filterByID({
                        type: 'productsList', 
                        arr: this.allProducts.products, 
                        id: e.id, 
                        key: 'category_id'
                    })
					this.setState({
						...this.state,
						isCart: false,
						isFavorite: false,
						isProduct: true,
						isCategory: false,
						isCurrentProduct: false,
					})
				}
			},
        }
    }
</script>

<style>
    .breadcrumbs-list{
        padding: 16px;
        list-style: none;
        font-size: 12px;
        display: flex;
        font-weight: normal;
        font-style: normal;
        overflow: auto;
        
    }

    .breadcrumbs-list li{
        color: rgb(48, 48, 48);
        font-weight: 400;
        font-style: normal;
        font-size: 14px;
        display: flex;
        align-items: center;
        margin-right: 6px;
        white-space: nowrap;

    }

    .breadcrumbs-list li::after{
        content: '';
        display: block;
        width: 6px;
        height: 6px;
        margin-left: 4px;
        border-right: 1px solid rgb(159, 159, 159);
        border-bottom: 1px solid rgb(159, 159, 159);
        transform: rotate(-45deg);
    }

    .breadcrumbs-list li:last-child{
        color: rgb(159, 159, 159);
    }

    .breadcrumbs-list li:last-child::after{
        display: none;
    }
</style>