<template>
    <h1>Edit Project</h1>
    <form @submit.prevent="addProject">
      <label>Project Title</label>
      <input type="text" v-model="title">
      <label>Project Detail</label>
      <input type="text" v-model="detail">
      <button @click="updateProject">Update Project</button>
  </form>
</template>

<script>
export default {
 props : ['id'],
 data(){
   return {
    title : "",
    detail : "",
    complete : false,
   }
 },
 mounted(){
    fetch("http://localhost:3000/projects/" + this.id )
    .then((response)=>{
        return response.json();
    }).then((data) => {
        this.title = data.title;
        this.detail = data.detail;
    }).catch((err)=>{
        console.log(err);
    })
 },
 methods:{
  updateProject(){
    fetch("http://localhost:3000/projects/" + this.id, {
      method : 'PATCH',
      headers : {
        "Content-type" : "application/json",
      },
      body : JSON.stringify(
        {
        title : this.title,
        detail : this.detail
      }
      )
    }).then( () => {
      this.$router.push("/");
    }).catch( (err) => {
      console.log(err);
    })
   
  }
 }
}
</script>

<style>

</style>