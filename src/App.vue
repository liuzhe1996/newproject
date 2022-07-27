<template>
  <div id="app">
    <router-view/>
  </div>
</template> 

<script>

export default {
    name:'app',
 
   beforeDestroy(){
     window.localStorage.setItem('clientWidth', document.body.scrollWidth)
     window.localStorage.setItem('clientHeight', document.body.scrollHeight)
      //  window.removeEventListener('beforeunload',()=>this.Outlocal())
    
   },
   mounted() {
    //  window.localStorage.setItem('clientWidth', document.body.clientWidth)
    //  window.addEventListener('beforeunload',()=>this.Outlocal())
   },
   methods:{
      Outlocal(){
        window.localStorage.setItem('clientWidth', document.body.clientWidth)
        // if(document.body.clientWidth===0){
        //    localStorage.clear();
        // }
      },
   }
}
</script>
