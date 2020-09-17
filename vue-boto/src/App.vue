<template>
  <div id="app">
    <Main/>
  </div>
</template>

<script>
import Main from './components/Main/Main'


export default {
  name: 'App',
  components: {
    Main
  }
}
</script>

<style lang="sass">

  @font-face 
    font-family: 'GothamPro'
    src: url('./assets/fonts/regular/GothamPro.woff') format('woff')
    font-weight: bold
    font-style: normal
  
  @font-face 
    font-family: 'GothamProBlack'
    src: url('./assets/fonts/black/GothamPro-Black.woff') format('woff')
    font-weight: bold
    font-style: normal

  $bold: 'GothamProBlack'
  $regular: 'GothamPro'

  *
    box-sizing: border-box
    margin: 0
    padding: 0
  
  html, body
    min-width: 300px 
    font-family: $regular, Avenir, Helvetica, Arial, sans-serif
    -webkit-font-smoothing: antialiased
    -moz-osx-font-smoothing: grayscale
    color: #000
    font-size: 16px
    position: relative
	
  h1,h2,h3,h4,h5,h6,p,a,i,em,strong
    font-style: normal 
    text-decoration: none
    font-weight: normal
    color: inherit   
    padding: 0
    margin: 0

</style>
