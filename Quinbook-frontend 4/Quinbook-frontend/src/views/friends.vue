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
      <div class="userfriends">
        <h1 style="padding-left: 256px;margin: 20px;" @click="showfriends">Show Me My Friends</h1>
        <div class="friends" v-for="friend in friends" :key="friend.id" style="margin: 30px 211px;">
            <div class="friendprofile" @click="friendprofile(friend.userName)">
                
                <span  v-if="friend.profilePic"> 
                  <img :src='friend.profilePic' alt="avatar" width="23" height="23">
                </span>
                <span v-else>
                  <img src="../assets/friends.svg" width="23" height="23">
                </span>
              <h1> {{friend.userName}} </h1>
            </div>
        </div>
      </div>

    </div>
    </div>
</template>

<script scoped>
import Navbar from '../components/navbar5.vue'
import profilecover from '../components/profile-cover.vue'
import axios from 'axios'
//import { use } from 'vue/types/umd' ==> auto imports and causes error
export default {
  name:'friends',
    data () {
        return{
          friends:'',
          img:'',
          myProfilePic:''
        }
    },
  components: {
    profilecover: profilecover,
    Navbar
 },
 methods : {
   showfriends(){
     axios
      .get('http://10.177.68.67:8082/fetchFriendList',{ headers: { sessionId: localStorage.getItem('sessionId') } }) // Deepak - for getting friends
      .then(response => {
        console.log(response)
        this.friends = response.data
        this.img = localStorage.getItem('myProfilePic')
      })
      .catch(error =>{
        console.log(error)
      })
   },
   friendprofile (userName) {
     localStorage.setItem('myFriendName',userName)
     this.$router.push('/friendprofile')
   }
 },
 mounted () {
   if(localStorage.getItem('sessionId')===null){
      this.$alert('Please Login First')
      this.$router.push('/')
    }
   this.myProfilePic=localStorage.getItem('myProfilePic')
   this.showfriends()
 }
}
</script>

<style scoped>
.userfriends{
    width: 60%;
    height: 680px;
    display: flex;
    flex-wrap: wrap;
    border: solid black 2px;
    overflow: scroll;
}
.friends{
  margin: 2%;
  width: 50%;
  height: 20%;
  text-align: center;
  border: solid green 2px;
  box-shadow: 3px 4px #7cad3e;
  
}
.friends:hover {
  animation: shake 0.5s;
  animation-iteration-count: 5;
}
@keyframes shake {
  0% { transform: translate(1px, 1px) rotate(0deg); }
  50% { transform: translate(1px, 2px) rotate(0deg); }
  100% { transform: translate(1px, -2px) rotate(-1deg); }
}
</style>