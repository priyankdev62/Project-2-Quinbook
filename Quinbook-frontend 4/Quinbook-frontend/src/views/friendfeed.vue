<template>
  <div class="container" >
      <navbar />
      <br>
      <center>
        <div class="feed" id ="feed" style="margin: 0px 6px;">
            <div class="profilepic">
                <img :src="this.myFriendProfilePic" alt="Your Friend's Dp" width="150px" height="150px">
            </div>
            <div class="post" v-for="i in info" :key="i.id" :id="i.postId">
                <div class="plaf">
                    <div>
                    <span  v-if="i.postImages[0]" class="avatar"> 
                       <img :src="i.postImages[0]" alt="PostImage" class="avatar" style="border: solid white 2px;margin: 25px;">
                        {{i.like}} 
                       <img src="../assets/like.png" alt="" width="24px" height="24px">
                    </span>
                    <span v-else>
                        <img src="https://maestroselectronics.com/wp-content/uploads/2017/12/No_Image_Available.jpg" alt="Post Image" class="avatar">
                    </span>
                        <textarea type="text" readonly name="How you doing" :value="i.postCaption" class="timeline"> 
                        </textarea>
                    <div style="display:flex">
                        <input type="text" readonly id="location" v-model="location" name="location" :placeholder="i.location" style="height: 19px;">
                        <button style="margin: 0px 100px; height: 25px; display:none" @click="onupdate(i.postId)">Update</button>
                        <button style="margin: 0px 99px 0px -88px; height: 25px; display:none" @click="ondelete(i.postId)">Delete</button>
                        <button style="margin: 0px 199px 0px -88px; height: 25px;display:none" @click="ondelete">Delete</button>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </center>
  </div>
</template>
<script>
import axios from 'axios'
import navbar from "../components/navbar5.vue"
export default {
    data () {
        return{
            postchange:[],
            info: '',
            location: '',
            postCaption: '',
            postImages: '',
            postId: '',
            imgList:[],
            img:'',
            myFriendProfilePic:'',
            fullName:'',
            myProfilePic:''
    }},
    
    components:{
        navbar
    },
    
    methods : {
        onupdate(id){
            this.imgList.push(this.img)
            console.log(this.imgList)
            const update = {
                postCaption : this.postCaption,
                postImages: this.imgList,
                location: this.location
            }
            console.log(update)
            axios
                .put('http://10.177.68.70:8090/QuinBookPost/updatePost/'+id,update, { headers: { sessionId: localStorage.getItem('sessionId') } }) // meghana - got updating my post - send session Id
                .then(response => {
                    console.log(response)
                    this.postCaption='',
                    this.imgList=[],
                    this.location=''
                })
                .catch(error =>{
                    console.log(error)
                })
        },
        ondelete(id){
            axios
                .delete('http://10.177.68.70:8090/QuinBookPost/deleteqb/'+id, { headers: { sessionId: localStorage.getItem('sessionId') } }) // meghana - got updating my post - send session Id
                .then(response => {
                    console.log(response)
                    this.postCaption='',
                    this.imgList=[],
                    this.location=''
                })
                .catch(error =>{
                    console.log(error)
                })
        },
        previewImage: function(event) {
            var input = event.target;
            if (input.files && input.files[0]) {
                var reader = new FileReader();
                reader.onload = (event) => {
                    this.img = event.target.result;
                }
                reader.readAsDataURL(input.files[0]);
                console.log(this.postImages)
            }
        }
    },
   mounted(){
    if(localStorage.getItem('sessionId')===null){
      this.$alert('Please Login First')
      this.$router.push('/')
    }

     axios
      .get('http://10.177.68.70:8090/QuinBookPost/getAllPostByUserName/'+localStorage.getItem('myFriendName')) // meghana - for getting my post
      .then(response => {
        console.log(response)
        this.info = response.data
        this.myFriendProfilePic = localStorage.getItem('myFriendProfilePic')
        // localStorage.removeItem('myFriendProfilePic') // removing friend profile pic
      })
      .catch(error =>{
        console.log(error)
      })
   },
}
</script>
<style scoped>
.plaf{
    display: flex;
    justify-content: space-between;
}
.avatar {
    vertical-align: middle;
    width: 104px;
    height: 100px;
    border-radius: 50%;
    position: relative;
    top: -15px;
    margin-left: -2px;
}
.container{
  height: 700px;
}
.feed{
  width: 1000px;
  float: center;
  height: 700px;
  position: inherit;
  border: grey 2px solid;
  overflow: scroll;
}
.post{
    margin: 30px;
    width: 87%;
    height: 16%;
    padding: 29px 8px 10px;
    text-align: center;
    border: solid white;
    overflow: scroll;
}
.timeline{
    width: 550px;
    /* float: right; */
    height: 83px;
    margin: 0px;
    /* border: grey 2px solid; */
    margin-right: 100px
}
.avatar {
  vertical-align: middle;
  width: 104px;
  height: 100px;
  border-radius: 50%;
  position: relative;
  top: -26px;
  margin-left: -2px;
  cursor: pointer;
}
.avatar > img:hover {
  transform: scale(1.3);
  transition: transform 0.5s;
  border: solid #000000 2px;
}
</style>