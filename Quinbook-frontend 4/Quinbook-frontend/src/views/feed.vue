<template>
  <div class="container">
    <navbar style="margin-bottom: 12px;" />
    <div class="today" style="margin: 0px 10px">
      <!-- //Todo: implement list of events -->
      <h1>Make A Post Today</h1>
      <div class="uploadpost">
        <span  v-if="this.myProfilePic" @click="gotomyphotos"> 
          <img :src="this.myProfilePic" alt="Avatar" class="avatar" style="border: solid white 2px;margin: 35px 0px 0px 0px;">
          <p>{{this.myName}}</p>
        </span>
        <span v-else @click="gotomyphotos">
          <img src="https://www.pngitem.com/pimgs/m/78-786293_1240-x-1240-0-avatar-profile-icon-png.png" alt="Avatar" class="avatar" style="margin: 35px 0px 0px 0px;">
        </span>
        <div >
          <textarea
            type="text"
            name="postCaption"
            v-model="postCaption"
            class="timeline"
            placeholder="Tell your friends what special about today"
          />
          <br>
          <br>
          <div style="display: flex">
            <input 
            type="text" 
            name="location"
            v-model="location"
            placeholder="Location..."
            />
            <input type="file" @change="previewImage" accept="image/*" style="display:none" ref="fileInput">
            <a class="tooltip active" data-tooltip="Photos" id="search"> <img @click="clickedonphoto" src="../assets/image.png" alt="" width="40px" height="40px"> </a> 
          </div>
            <button style="margin: 0px 350px;display:none" @click="postThis" ref="postEverything">Post</button>
            <a class="tooltip active" data-tooltip="Post" id="search"> <img style="margin: 0px 300px;" @click="clickedonpost" src="../assets/postThis.png" alt="" width="50px" height="50px"></a>
            <img class="preview" :src="img" width="240px" height="240px" v-if="img" style="padding: 4px 60px">
        </div>
      </div>
      <h1>Todays Events</h1>
      <div class="events" v-for="i in events" :key="i.id" style="margin: 0px 78px 24px;">
        {{ i.fullName }}'s {{ ordinal(i.years) }} {{ i.eventType }}!
      </div>
    </div>
    <div class="feed" style="margin: 0px 6px">
      <div class="post" v-for="i in feeds" :key="i.id">

        <div class="plaf">
            <span  v-if="i.postImages"> 
              <div style="display:flex">
                <img :src="i.postImages" alt="UserImage" style="border: black 1px; border-radius:50%" width="50px" height="50px">
                <div style="margin: 15px;">
                  {{i.userName}}
                  <!-- G Adarsh -->
                </div>
              </div>
            </span>
            <span v-else>
              <div style="display:flex">
                <img src="https://www.pngitem.com/pimgs/m/78-786293_1240-x-1240-0-avatar-profile-icon-png.png" style="border: black 1px; border-radius:50%" alt="Post Image" width="50px" height="50px">
                <div style="margin: 15px;">
                  {{i.userName}}
                  <!-- G Adarsh -->
                </div>
              </div>
            </span>
        </div>
        <div class="postcaption" style="height: 50px" >
              <p> {{ i.postCaption }}</p>
            </div>
        <div class="pic">
          <span  v-if="i.postImages"> 
            <img :src="i.postImages" alt="PostImage" style="height:300px;width:600px">
          </span>
          <span v-else>
            <img src="https://maestroselectronics.com/wp-content/uploads/2017/12/No_Image_Available.jpg" alt="PostImage" style="height:300px;width:600px">
          </span>
        </div>
          <div class="pial">
            <div class="likeanddis" >
              {{i.like}}
              <likedislike :postId="i.postId" :fullName="fullName" :myProfilePic="myProfilePic"></likedislike>
              <div class="postDate" style="margin: 27px 0px 0px 235px;">
                18/04/2000<!-- {{i.date.slice(0,10)}} -->
              </div>
              <div class="postLocation" style="margin: 27px 0px 0px 12px;">
                {{i.location}}
              </div>
            </div>
          </div>
          <div>
            <p class="commentheading" style="font-size: xx-large;font-style: oblique;font-weight: bold;font-family: unset;color: #0B84ED;margin: 0px 0px 0px -360px">Comments ↓</p>
          </div>
          <div class="comm" style="display:block">
            <br>
            <br>
            <!-- <div style="margin: 0px 0px 8px 0px;font-size: 20px;color: brown;">
              Nic Pic Adarsh - by Noel
            </div>
            <div style="margin: 0px 0px 8px 0px;font-size: 20px;color: brown;">
              Nice Try Adarsh - by DJ
            </div> -->
            <div style="margin: 0px 0px 8px 0px;font-size: 20px;color: brown;" v-for="comments in i.commentList" :key="comments.id">
              {{ comments.commentText }} - by {{ comments.commentedBy }}
            </div>
          </div>
      </div>
    </div>
  </div>
</template>
<script>
import navbar from "../components/navbar5.vue";
import axios from "axios";
import likedislike from '../components/like-dislike.vue'
export default {
  data() {
    return {
      myProfilePic:'',
      feeds: 10,
      fullName: "",
      eventType: "",
      img: "",
      imgList: [],
      years: 0,
      events: 0,
      friendList: [],
      userName: "",
      date: "",
      location: "",
      postCaption: "",
      sessionId: '',
      myName:'',
      postId:'',
      locTypeImage: false // this should be true
    };
  },
  components: {
    navbar,
    likedislike
  },
  methods: {
    ordinal(i){
      var j = i % 10,
              k = i % 100;
          if (j == 1 && k != 11) {
              return i + "st";
          }
          if (j == 2 && k != 12) {
              return i + "nd";
          }
          if (j == 3 && k != 13) {
              return i + "rd";
          }
          return i + "th";
    },
    gotomyphotos(){
      this.$router.push("/about")
    },
    clickedonphoto(){
      this.$refs.fileInput.click()
    },
    clickedonpost(){
      this.$refs.postEverything.click()
    },
    postThis(){
      this.imgList.push(this.img)
      console.log(this.imgList)
      const obj = {
        postCaption : this.postCaption,
        postImages: this.imgList,
        location: this.location
      }
      console.log(obj)
        axios
        .post(`http://10.177.68.70:8090/QuinBookPost/qbpost`,obj,{headers: {sessionId: localStorage.getItem('sessionId')}}) // meghana - sending post
        .then((response)=>{
        console.log(response);
        this.$alert('Post created!!')
        this.postCaption ='';
        this.postImages = '';
        this.location = ''
        })
        .catch((error) => {
        this.errorMessage = error.errorMessage;
        console.log(error);
      });
    },
    changeImagelike(id) {
        var image = document.getElementById(id);
        if (image.src.match("http://localhost:8081/img/thumbs-up.7c39be07.svg")) { //like-likeBlue button change
            image.src = "http://localhost:8081/img/thumbs-upB.9679fb84.svg";
        }
        else {
            image.src = "http://localhost:8081/img/thumbs-up.7c39be07.svg";
        }
    },
    changeImagedislike(id) {
        var image = document.getElementById(id+'i');
        if (image.src.match("http://localhost:8081/img/thumbs-down.76c1523f.svg")) { //dislike-dislikeRed button change
            image.src = "http://localhost:8081/img/thumbs-dred.9e7d0a8c.svg";
        }
        else {
            image.src = "http://localhost:8081/img/thumbs-down.76c1523f.svg";
        }
    },
    showLocation(){
      this.locTypeImage = false
    }, 
    previewImage: function(event) {
        var input = event.target;
        if (input.files && input.files[0]) {
            var reader = new FileReader();
            reader.onload = (event) => {
                this.img = event.target.result;
            }
            reader.readAsDataURL(input.files[0]);
            console.log(this.img)
        }
    }
  },
  mounted() {
    if(localStorage.getItem('sessionId')===null){
      this.$alert('Please Login First')
      this.$router.push('/')
    }
     this.myName =  localStorage.getItem('myName') //storing userName - myName
     axios
     .get('http://10.177.68.27:8081/getDetails/userName?userName='+this.myName)// ishika - getting details
     .then(res => {
       console.log(res)
        localStorage.setItem('myProfilePic',res.data.img)
        this.myProfilePic=localStorage.getItem('myProfilePic')
      })
      .catch(
      err=>{
      console.log(err)
    })
    axios
      .get(`http://10.177.68.66:8085/feed/fetchFriendList?userName=${this.myName}`) // akhil - getting friendlist
      .then((response) => {
        console.log(response);
        this.friendList = response.data; // storing in friendlist
        console.log(this.friendList)
        this.myProfilePic=localStorage.getItem('myProfilePic')
        axios
        .post(
          `http://10.177.68.27:8081/events`, this.friendList) //ishika - for sending friendlist - i will get events
          .then((response) => {
            console.log(response);
          this.events = response.data;
        })
        .catch((error) => {
          this.errorMessage = error.errorMessage;
          console.log(error);
        });
      })
      .catch((error) => {
        this.errorMessage = error.errorMessage;
        console.log(error);
      });
    axios
      .get(`http://10.177.68.66:8085/feed/fetchUserSocial?userName=${this.myName}`) // akhil - getting feed
      .then((response) => {
        console.log(response);
        this.feeds = response.data; // storing in feeds
      })
      .catch((error) => {
        this.errorMessage = error.errorMessage;
        console.log(error);
      });
  },
};
</script>
<style scoped>
.today h1 { 
  text-align: center;
  padding: 20px;
}
.events {
  margin: 10px;
  width: 300px;
  height: 40px;
  align-items: center;
  text-align: center;
  padding: 25px 50px 0px;
  border-radius: 20px;
  border: solid black 1px;
  box-shadow: 0 0 3px 1px #000000;
}
.likeanddis {
  display: flex;
  width: 30%;
}
.plaf {
  display: flex;
  width: 600px;
  height: 50px;
  /* border: solid black 1px; */
  /* justify-content: space-between; */
}
.pic{
  width: 600px;
  height: 300px;
  border: solid black 1px;
}
.pial{
  display: flex;
}
.avatar {
  vertical-align: middle;
  width: 104px;
  height: 100px;
  border-radius: 50%;
  position: relative;
  top: -15px;
  margin-left: 10px;
  cursor: pointer;
}
.avatar > img:hover {
  transform: scale(1.3);
  transition: transform 0.5s;
  border: solid #000000 2px;
}
.container {
  height: 700px;
}
.body {
  width: 0;
  height: 0;
  margin: 0px;
}
.feed {
  width: 700px;
  float: right;
  height: 700px;
  position: inherit;
  box-shadow: 0 0 3px 0px #000000;
  overflow: scroll;
  border-radius: 5%;
}
.today {
  width: 40%;
  float: left;
  height: 700px;
  overflow: scroll;
  /* box-shadow: 0 0 10px 1px #000000; */
}
.uploadpost {
  resize: vertical;
  width: 87%;
  height: 270px;
  display: inline-flex;
  margin: 0px 47px;
  padding: 29px 8px 10px;
  overflow: scroll;
  border: solid black 1px;
  background-color: rgba(211, 211, 211, 0.151);
  cursor: pointer;
}
.timeline {
  width: 350px;
  /* float: right; */
  height: 83px;
  margin: 0px;
  padding: 20px;
}
.post {
  margin: 40px;
  width: 87%;
  height: 75%;
  padding: 10px 0px 0px 7px;
  text-align: center;
  box-shadow: 0px 0px 0px 1px #000000;
  overflow: scroll;
}
.btn {
  background-color: white;
  width: 100px;
  margin: auto;
  display: block;
  color: #0a0ef7;
  padding: 0px 27px 11px;
  border: 1px solid white;
  cursor: pointer;
}
.commentinsidediv {
  display: none;
}
.detail{
  width: 230px;
}
</style>