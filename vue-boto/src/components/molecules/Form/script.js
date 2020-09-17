import Button from '../Button/Button'
import { required, minLength, alpha, numeric, email } from 'vuelidate/lib/validators'
// numeric
export default {
    name: 'Form',
    components: {Button},
    data() {
        return {
            name: '',
            mail: '',
            phone: '',
            submitStatus: null,
            showing: false,
            animate: null
        }
    },
    validations: {
        name: {
            required,
            alpha,
            minLength: minLength(4)
        },

        mail: {
            required,
            email
        },

        phone: {
            required,
            numeric
        }
    },
    mounted() {
        this.show()
    },
    destroyed() {
        this.stopShow()
    },
    methods: {
        show(){
            this.animate = setTimeout(()=>{
                this.showing = true
            }, 500)
        },

        stopShow(){
            clearTimeout(this.animate)
        },
        submit() {
            console.log('submit!')
            this.$v.$touch()
            if (this.$v.$invalid) this.submitStatus = 'ERROR'

            else {
                // do your submit logic here
                this.submitStatus = 'PENDING'
                setTimeout(() => {
                    this.submitStatus = 'OK'
                }, 500)
            }
        }
  }
}