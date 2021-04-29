<template>
  <div class="navbar">
      <header>
        <nav>
            <ul class="navbarpointer">
                <li> <a class="tooltip" data-tooltip="Feed" href="/feed"> <img id="logo" src="../assets/logo-color.jpeg" alt="" width="50px" height="50px"> </a> </li>
                <li id="space1"></li>
                
                <li> <a class="tooltip" data-tooltip="Feed" href="/ownfeed" > <img id="ownFeed" src="../assets/ownfeed.png" alt="" width="35px" height="35px" style="border:solid black .5px;border-radius:50%"> </a> </li>
                <li> <a class="tooltip active" data-tooltip="Profile" href="/about" id="about"> <img src="../assets/profile.png" alt="" width="45px" height="45px"> </a> </li>
                <li> <a class="tooltip" data-tooltip="Friends" href="/friends" id="friends"> <img src="../assets/friends.png" alt="" width="35px" height="35px" style="border:solid black .5px;border-radius:50%"> </a> </li>
                <li> <a class="tooltip" data-tooltip="Photos" href="/userphotos" id="friends"> <img src="../assets/myPhotos.png" alt="" width="35px" height="35px" style="border:solid black .5px;border-radius:50%"> </a> </li>
                
                <li id="space1"></li>
                <li> <a class="tooltip active" data-tooltip="Search" href="/search" id="search"> <img src="../assets/search.gif" alt="" width="40px" height="40px"> </a> </li>
                <li> <a class="tooltip active" data-tooltip="Edit_My_Profile" href="/editprofile" id="editmyrofile"><img src="../assets/edit.gif" alt="" width="35px" height="35px"> </a></li>
                <li>  <a class="tooltip active" data-tooltip="Notification" href="/notification" id="notification"><img src="../assets/notification.gif" alt="" width="35px" height="35px"> </a></li>
                <li>  <a class="tooltip active" data-tooltip="Logout"><img @click="logoutUser" id="logout" src="../assets/logout.gif" alt="" width="35px" height="35px"> </a></li>
            </ul>
        </nav>
    </header>
  </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'quinbooknavbar',
    data(){
        return{

        }
    },
    methods:{
        logoutUser(){
         var obj = {
           sessionId : localStorage.getItem('sessionId')
         }
         axios.post("http://10.177.68.27:8090/logout",obj).then(res => { //ishika - logout
           console.log("loggin out navbar" + res)
         })
         .catch(err=>console.log(err))
         axios.get("http://10.177.68.70:8090/QuinBookPost/"+localStorage.getItem('myName')).then(res => { //meghana - logout
           console.log("loggin out meghana" + res)
         })
        .catch(err=>console.log(err))
         axios.get("http://10.177.68.67:8082/"+localStorage.getItem('myName')).then(res => { //deepak - logout
           console.log("loggin out deepak" + res)
           localStorage.clear()
            this.$router.push("/")
         })
        .catch(err=>console.log(err))
      }
    }
}
</script>

<style scoped>
.navbarpointer{
    cursor: pointer;
}
*{
        box-sizing: border-box;
    }
    :root{
        --btn-width-100: 100px;
    }
    body{
        margin: 0;
        padding: 0;
    }
    nav{
        margin: 0;
        padding: 0;
    }
    nav ul {
        margin: 0;
        padding: 8px 15px;
        list-style: none;
        display: flex;
        box-shadow: 0 1px 8px rgba(0,0,0,0.3);
    }
    nav ul li {
        padding: 3px;
    }
    nav ul li a{
        display: inline-block;
        text-decoration: none;
    }
    nav ul li #fb{
        background: #EC3C6C;
        color: #fff;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 2rem;
    }
    nav ul li#space1{
        flex: 1;
    }
    nav ul li#space2{
        flex: 2;
    }
    nav ul li a{
        height: 40px;
        width: var(--btn-width-100);
        font-size: 1.5rem;
        display: flex;
        justify-content: center;
        align-items: center;
        color: rgb(158, 158, 158);
        transition: .5s;

    }
    nav ul li #btn_plus,
    nav ul li #btn_msg,
    nav ul li #btn_bell,
    nav ul li #btn_profile{
        height: 40px;
        width: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1rem;
        color: #444;
        background: rgba(0, 0, 0, 0.068);
        border: none;
        outline: none;
        border-radius: 50%;
        cursor: pointer;
    }

    
    nav ul li:hover #home, 
    nav ul li:hover #group, 
    nav ul li:hover #tv, 
    nav ul li:hover #friend{
        background: rgba(0, 0, 0, 0.138);
        color: #444;
        border-radius: 5px;
    
    } 
    .active{
        color: #EC3C6C!important; 
    }

    .tooltip{
        position: relative;
    }
    .tooltip::after{
        content: attr(data-tooltip);
        height: 30px;
        background: rgba(0,0,0,0.4);
        color: #fff;
        font-size: 1rem;
        text-align: center;
        position: absolute;
        bottom: -150%;
        padding: 5px 12px;
        line-height: 30px;
        border-radius: 3px;
        opacity: 0;
        transition: .3s;
        pointer-events: none;
        user-select: none;
    }
    .tooltip:hover::after{
        opacity: 1;
    }
    nav ul li #btn_profile::after{
        margin-left: -20px;
    }


    @media  screen and (max-width: 700px){
        nav ul li#space1,
        nav ul li#space2{
            display: none;
        }
        nav ul{
            min-width: 600px;
            padding: 8px 12px;
            justify-content: space-between;
        }
        :root{
            --btn-width-100: 60px;
        }
    }
</style>