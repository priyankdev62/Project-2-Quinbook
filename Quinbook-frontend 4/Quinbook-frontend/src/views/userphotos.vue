<template>
  <div class="container">
    <Navbar style="width: 100.3%;margin-bottom: 3px;" />
    <div class="userprofile"> 
      <span  v-if="this.myProfilePic"> 
          <img :src="this.myProfilePic" alt="Avatar" class="avatar" style="border: solid white 2px">
        </span>
        <span v-else>
          <img src="https://www.pngitem.com/pimgs/m/78-786293_1240-x-1240-0-avatar-profile-icon-png.png" alt="Avatar" class="avatar">
        </span>
    </div><br>
    <div class="user">
      <profilecover class="userdetails"/>
      <div class="userphotos">
        <div class="photos" v-for="i in photos.id" :key="i.id">
            <div v-bind:id="i" class="pic">
              <img src="https://www.indiaeducation.net/imagesvr_ce/7180/AAEAAQAAAAAAAAgHAAAAJDU0ZDYwNzNjLTMwZGYtNGU4NC05OTA0LWMyOWZkNDhjZDc3Yw.jpg" height="175" width="235">
            </div>
        </div>
      </div>
    </div>
    </div>
</template>

<script scoped>
import Navbar from '../components/navbar5.vue'
import profilecover from '../components/profile-cover.vue'
// import axios from 'axios'
export default {
  name:'userphotos',
    data () {
        return{
          photos: {
            id: 100
          },
          myProfilePic : localStorage.getItem('myProfilePic')
        }
    },
  components: {
    profilecover: profilecover,
    Navbar
 },
 methods : {
 },
 mounted(){
   if(localStorage.getItem('sessionId')===null){
      this.$alert('Please Login First')
      this.$router.push('/')
    }
  //  axios
  //  .get('',{ headers: { Authorization: localStorage.getItem('sessionID') } }) 
  //  .then(response => {
  //    console.log(response)
  //    this.info = response.data
  //  })
  //  .catch(error =>{
  //    console.log(error)
  //  })
 }
}
</script>

<style scoped>
/* .pic > img:hover {
  transform: scale(1.3);
  transition: transform 0.5s;
  border: solid #7cad3e 2px;
} */
.pic > img:hover {
  width: 400px;
  height: 400px;
  border: solid #7cad3e 2px;
  border-radius: 25px;
}
.userphotos{
    width: 60%;
    height: 680px;
    display: flex;
    flex-wrap: wrap;
    border: solid black 2px;
    overflow: scroll;
}
.photos{
  margin: 2%;
  width: 28%;
  height: 30%;
  text-align: center;
  border: solid green 2px;
  box-shadow: 3px 4px #7cad3e;
  
}
.photos:hover {
  animation: shake 0.5s;
  animation-iteration-count: infinite;
}
@keyframes shake {
  0% { transform: translate(1px, 1px) rotate(0deg); }
  50% { transform: translate(1px, 2px) rotate(0deg); }
  100% { transform: translate(1px, -2px) rotate(-1deg); }
}
</style>