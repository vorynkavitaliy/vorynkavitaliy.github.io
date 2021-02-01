const urlParams = new URLSearchParams(window.location.search).get('order_id');
const domen = 'https://delivery-shop.amemory.pro';
const url = '/shop/menu/'

export default {
    actions: {
        // получем все данный при первой загрузке
        async fetchProducts(ctx){
            try {
                const response = await fetch(`${domen+url}get-data?order_id=${urlParams}`, {method: "GET"})
                if (response.ok) {
                    const products = await response.json();
                    ctx.commit("updateProducts", products)
                    ctx.commit("updatePrice", {sum: products.sum, cartTotalSum: products.sum})
                } else {
                    console.log("HTTP error: " + response.status);
                }
            } catch (e) {
                console.log(e);
            }
        },

        async counterPlus(ctx, product) {
            product.quantity++;
            product.btnImage = false;
            ctx.commit("changeTotalSum", {...product, id: product.id});
            ctx.commit("fetchUrl", {id: product.id, quantity: product.quantity});
        },

        async counterMinus(ctx, product) {
            if(product.quantity > 0) {
                product.quantity--;
                ctx.commit("changeTotalSum", {...product, price: -+product.price, id: product.id});
                ctx.commit("fetchUrl", {id: product.id, quantity: product.quantity});
            }
           
        },

    },
    mutations: {
        setState: (state, newState) => {
            window.scroll(0,0); 
            state.appState = newState
        },

        filterByID: (state, data) => state[data.type] = data.arr.filter(item => item[data.key] === data.id),
        
        updateProducts: (state, products) => state.products = products,

        updatePrice: (state, prices) => state.prices = prices,

        async fetchUrl(state, data){
            try {
                await fetch(`${domen+url}set-quantity?order_id=${urlParams}&product_id=${data.id}&quantity=${data.quantity}`, {method: "GET"});
            } catch (e) {
                console.log(e);
            }
        },

        changeTotalSum: (state, data) => {
            // когда меняется количество продуктов
            const {discount, price, quantity, id} = {...data}
            const sum = price * quantity;
            const calcOfAmount = () => {
                if(discount.discount){
                    if(sum > 0){
                        return discount.discount_type === 1 ? +price - +discount.discount : +price - Math.ceil(+price*(+discount.discount/100))
                    }else{
                        return discount.discount_type === 1 ? +price + +discount.discount : +price - Math.floor(+price*(+discount.discount/100))
                    }
                }else return +price
            } 
            

            state.prices.sum += Number(calcOfAmount());
            state.prices.cartTotalSum = state.prices.sum;

            const updateProductQuantity = () => {
                // когда пользователь изменил количество продуктов
                for(let product in state.products) {
                    if(state.products[product].id && state.products[product].id === id) {
                        state.products[product].quantity = Number(quantity);
                    }
                }
            }
            updateProductQuantity()
        },

        setCartItems(state){
            let productsList = [];
            for(let product in state.products.products) {
                if(state.products.products[product] && state.products.products[product].quantity > 0) {
                    productsList.push(state.products.products[product])
                }
            }
            state.cartProducts = productsList;
        },

        setFavourite(state, data){
            const item = state.favourites.findIndex(item => item.id === data.id);
            if(item !== -1) {
                state.favourites.splice(item, 1)
                data.isActive = false
            } else{
                state.favourites.push(data);
                data.isActive = true
            }
        },

        setRecomended(state, product){
            const filter = id => state.productsList.findIndex(item => item.id === id);
            delete state.recomendedList[filter(product.id)]
            for (let i = 0; i < state.recomendedList.length; i++) {
                const item = state.recomendedList[i];
                (item && item.quantity > 0) && delete state.recomendedList[i];
            }
        },

        getBreadcrumbs(state, data){
            const productCurrent = state.products.products.filter(item => item.id === data.id)
            const categoryCurrent = 
                productCurrent.length > 0 
                && state.products.categories.filter(item => item.id === productCurrent[0].category_id)
            

            if(categoryCurrent && state.appState.isFavorite){
                state.breadcrumbs.push({name: categoryCurrent[0].name, id: categoryCurrent[0].id})
                state.breadcrumbs.push({name: data.name, id: data.id})
            }else{
                state.breadcrumbs.push({name: data.name, id: data.id})
            }
            
            state.breadcrumbs = state.breadcrumbs.slice(0, state.breadcrumbs.length);
        },

        resetBreadcrumbs(state){
            state.breadcrumbs = [{name: 'Главная', id: null}]
        },

        removeLastBreadcrumbs(state){
            state.breadcrumbs.length !== 1 && state.breadcrumbs.pop()
        },
    },
    state: {
        appState: {
            isCart: false,
            isFavorite: false,
            isProduct: false,
            isCategory: true,
            isCurrentProduct: false,
            isIdes: {
                category: Number,
                product: Number
            }
        },

        products: {},
        productsList: [],
        recomendedList: [],
        currentProduct: [],
        cartProducts: [],
        favourites: [],
        breadcrumbs: [{name: 'Главная', id: null, category_id: null}],

        prices: {
            sum: 0,
            cartTotalSum: 0
        }
    },

    getters: {
        state: state => state.appState,

        allProducts: state => state.products,

        cartProducts: state => state.cartProducts,
        
        productsList: state => state.productsList,

        currentProduct: state => state.currentProduct,

        recomendedList: state => state.recomendedList,

        breadcrumbs: state => state.breadcrumbs,

        favourites: state => state.favourites,

        prices: state => state.prices
    }
}