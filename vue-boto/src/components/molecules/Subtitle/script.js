export default {
    name: 'Subtitle',
    data(){
        return {
            currentTime: 0,
            timer: null
        }
    },
    mounted() {
        this.startTimer()
    },
    destroyed() {
        this.stopTimer()
    },
    methods: {
        startTimer() {
            this.timer = setInterval(() => {
                this.currentTime+=10
            }, 10)
        },

        stopTimer() {
            clearTimeout(this.timer)
        },
    },

    watch: {
        currentTime(time) {
            if (time === 2000) {
                this.stopTimer()
            }
        }
    }
}