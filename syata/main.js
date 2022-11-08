import './src/assets/styles/styles.scss'
import DoctorAnim from './src/assets/json-animation/doctor.json'
import PillAnim from './src/assets/json-animation/pill.json'
import MedicalHeartAnim from './src/assets/json-animation/pill.json'
bodymovin.loadAnimation({
    container: document.getElementById('pill-loading-animation'),
    // path: 'src/assets/json-animation/pill.json',
    renderer: 'svg',
    loop: true,
    autoplay: true,
    name: 'Pill Loading Animation Animation',
    animationData: PillAnim,
})

bodymovin.loadAnimation({
    container: document.getElementById('doctor-animation'),
    // path: 'src/assets/json-animation/doctor.json',
    renderer: 'svg',
    loop: true,
    autoplay: true,
    name: 'Doctor Animation',
    animationData: DoctorAnim,
})

bodymovin.loadAnimation({
    container: document.getElementById('heart-medical-animation'),
    // path: 'src/assets/json-animation/medical-heart-pressure-timer.json',
    renderer: 'svg',
    loop: true,
    autoplay: true,
    name: 'Heart Medical Animation',
    animationData: MedicalHeartAnim,
})
