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
        <div style="padding: 12px;">
          <input type="text"  name="searchterm" v-model="searchterm" placeholder="Search New Friends" style="padding: 8px 300px;border: solid black 1px">
          <button style="padding: 8px;" @click="search">Confirm</button>
        </div>
        <div class="friends" v-for="i in friends" :key="i.id" style="margin: 30px 211px;">
            <div class="friendrequest" style="padding: 0px 0px 0px 88px;">
              <div>
                <br>
                <span v-if="i.img">
                  <img :src="i.img" alt="">
                </span>
                <span v-else>
                  <img src="../assets/user.svg" width="23" height="23">
                </span>
                  <br>
                  <span v-if="i.fullName">
                    <p>{{i.fullName}}</p>
                  </span>
                  <span v-else>
                    <p>User</p>
                  </span>
                
                <!-- <p> {{i.}} </p> -->
              </div>
              <div class="iconsforaddblock" style="display:flex">
                <div class="AddFriendUnFriend" style="padding: 21px;">
                  <span class="AUtiptext" >AddFriend/Un</span>
                  <img :id="i" src="http://localhost:8080/img/user-add.5047d004.svg" style="padding: 17px;" @click="changeImageadddis(i,i.userName)">
                </div>
                <div  class="Block/UnBlock" style="padding: 21px;">
                <span class="BUtiptext" >Block</span>
                <img :id="i+'i'" src="http://localhost:8080/img/user-block.80ef950f.svg" style="padding: 17px;" @click="changeImageblockun(i,i.userName)">
                </div>
              </div>
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
export default {
  name:'searchpage',
    data () {
        return{
            friends :0,
            searchterm: '',
            myProfilePic:''
        }
    },
  components: {
    profilecover: profilecover,
    Navbar
 },
 mounted () {
   if(localStorage.getItem('sessionId')===null){
      this.$alert('Please Login First')
      this.$router.push('/')
    }
   this.myProfilePic=localStorage.getItem('myProfilePic')
  },
 methods : {
   search(){
     localStorage.setItem('searchterm',this.searchterm)
     axios
      .get('http://10.177.68.130:8100/search/'+ this.searchterm,{ headers: { Authorization: localStorage.getItem('sessionId') } })//priyank
      .then(response => {
        console.log(response)
        this.friends = response.data
      })
      .catch(error => {
        this.errorMessage = error.message
        console.log(error)
      })
   },
   changeImageadddis(id,userName) {
     var obj = {
       sessionId: localStorage.getItem('sessionId'),
       toWhom: userName,
       selfDetails: {
         userName: localStorage.getItem('myName'),
         fullName: localStorage.getItem('myName'),
         profilePic: localStorage.getItem('myProfilePic')
       }
     }
     console.log(obj)
     axios.post('http://10.177.68.67:8089/friendRequest',obj).then(res => {//Deepak
       console.log(res.data.message)
     }).catch(err => {
       console.log(err)
     })
        var image = document.getElementById(id);
        if (image.src.match("http://localhost:8080/img/user-add.5047d004.svg")) {
            image.src = "http://localhost:8080/img/user-remove.7fad484d.svg";
        }
        else {
            image.src = "http://localhost:8080/img/user-add.5047d004.svg";
        }
    },
    changeImageblockun(id,userName) {
      var obj = {
       userName: localStorage.getItem('myName'),
       friendUserName: userName,
       selfDetails: {
         userName: localStorage.getItem('myName'),
         fullName: localStorage.getItem('myFullName'),
         profilePic: localStorage.getItem('myProfilePic')
       }
     }
     console.log(obj)
      axios.post('http://10.177.68.67:8082/blockUser',obj,{headers: {sessionId: localStorage.getItem('sessionId')}})//Deepak
      .then(res => {
       console.log(res.data.message)
     }).catch(err => {
       console.log(err)
     })
        var image = document.getElementById(id+'i');
        if (image.src.match("http://localhost:8080/img/user-block.80ef950f.svg")) {
            image.src = "http://localhost:8080/img/user-unblock.33597ea2.svg";
        }
        else {
            image.src = "http://localhost:8080/img/user-block.80ef950f.svg";
        }
    }
 }
}
</script>
<style scoped>
.friendrequest{
  display: flex;
}
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
  height: 15%;
  text-align: center;
  border: solid black 2px;
  box-shadow: 3px 3px gray;
  
}
</style>