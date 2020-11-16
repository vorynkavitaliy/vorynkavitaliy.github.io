<template>
    <div class="modal-window">
        <div class="inner">
            <!-- {{crypto[0].crypto[type].US}}$ -->
            <LineChart 
                :chartData="crypto" 
				:options="chartOptions" 
				:label="type"/>
        </div>
    </div>
</template>

<script>
    import LineChart from './LineChart.vue'
    export default {
        name: 'Modal',
        components: {LineChart},
        props: {crypto: Object, type: String, chartOptions: Object}
    }
</script>

<style lang="sass">

    .modal-window
        position: fixed
        top: 0
        left: 0
        width: 100%
        height: 100%
        z-index: 100
        background: rgba(0, 0, 0, 0.6)

        .inner
            width: 70%
            height: 80vh
            margin: -30vh auto
            transform: translateY(50%)
            background: #ffffff
            border-radius: 20px
            padding: 20px
</style>