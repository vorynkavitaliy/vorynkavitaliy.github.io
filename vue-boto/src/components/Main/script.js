import Form from '../molecules/Form/Form'
import Title from '../molecules/Title/Title'
import Subtitle from '../molecules/Subtitle/Subtitle'

export default {
    name: 'Main',
    components: {Form,Title,Subtitle},
    data() {
        return {
            showing: false,
            animate: null
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
    }
}