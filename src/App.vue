<template>
  <div id="app">
    <sidebar></sidebar>
    <subject></subject>   
  </div>
</template>

<script>
import Sidebar from './components/Sidebar'
import Subject from './components/Subject'
export default {
  name: 'app',
  components: {
    Sidebar,
    Subject
  }
}
</script>

<style>
#app {
    width: 1200px;
    margin: auto;
    font-size: 0;
    box-shadow: 0 0 5px #333;

}
  .sidebar{
    display: inline-block;
    width: 25%; 
    min-height: 700px;
    height: 100vh;    
    background-color: #4da2fd;  
    color: #fff;
    vertical-align: top;
  }
  .subject{
    display: inline-block;
    width: 75%;   
    min-height: 700px; 
    height: 100vh;           
    background-color: #eee;  
    color: #333;
  }
</style>
