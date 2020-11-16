<script>
    import { Line } from 'vue-chartjs'

    export default {
        extends: Line,
        props: {
            label: String,

            chartData: Array,

            options: Object
        },

        mounted(){
            const dates = this.chartData.map(d => d[this.label]).reverse()
            const totals = dates.map(d => d.USD)
            this.renderChart({
                labels: '',
                datasets:[{
                    label: this.label,
                    data: totals,
                
                }]
            }, this.options)
        }
    }
</script>