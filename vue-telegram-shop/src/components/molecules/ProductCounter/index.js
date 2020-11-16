export default {
    name: "Counter",
    props: {
        product: {},
        pic: false
    },
    data() {
        return {
            sum: this.product.price * this.product.quantity,
            quantity: this.product.quantity,
            btnImage: this.quantity > 0 ? false : true,
            discount: this.product.discount.discount,
            type: this.product.discount.discount_type,
        }
    },
    mounted(){
        this.sum = this.calcOfAmount()
    },
    methods: {
        calcOfAmount() {
            if(this.discount){
              return this.type === 1 ? +this.product.price - +this.discount : +this.product.price - Math.ceil(+this.product.price*(+this.discount/100))
            }else return +this.product.price
        },

        async fetchUrl(argument, id){
            const urlParams = new URLSearchParams(window.location.search);
            const order_id = urlParams.get('order_id');
            const domen = 'https://delivery-shop.amemory.pro';
            const url = '/shop/menu/get-all-data'

            try {
                await fetch(`${domen+url}?order_id=${order_id}&product_id=${id}&quantity=${argument}`, {method: "GET"});
            } catch (e) {
                console.log(e);
            }
        },

        async counterPlus(id) {
            this.quantity++;
            this.btnImage = false;
            this.sum = this.calcOfAmount() * this.quantity;

            this.$emit("changeTotalSum", {
                discount: this.product.discount.discount, 
                type: this.product.discount.discount_type, 
                price: this.product.price, 
                quantity: this.quantity, 
                id: this.product.id
            });

            this.fetchUrl(this.quantity, id)
        },
        async counterMinus(id) {
            if(this.quantity > 0) {
                this.quantity--;
                this.sum = this.calcOfAmount() * this.quantity;
                this.$emit("changeTotalSum", {
                    discount: this.product.discount.discount, 
                    type: this.product.discount.discount_type, 
                    price: -this.product.price, 
                    quantity: this.quantity, 
                    id: this.product.id
                });
                this.fetchUrl(this.quantity, id)
            }
        }
    }
}