<template>
<div class="main">
  <div class="l" style="display:flex">
    <!-- Like -->
    <img  :display="display" @click="toggle" id="like" v-if="display" src="../assets/like.png" alt="Liked!"  style="cursor:pointer; width: 40px;height: 40px;margin: 15px;">
    <img :display="display" @click="toggle" id="liked" v-else src="../assets/after-like.png" style="cursor:pointer; width: 40px;height: 40px;margin: 15px;" >
    <div class="commentdiv">
      <div class="commentinsidediv" style="margin: -1px 0px 0px -26px;">
        <input type="text" name="How you doing" class="small" v-model="commentText" placeholder="Comment Something" style="height: 40px;margin: 15px;width: 345px;"/>
      </div>
      <div>
        <button @click="comment" style="margin: 0px 0px 0px 252px;">Comment</button>
      </div>
    </div>        
  </div>
  
          </div>
</template>
<script>
import axios from 'axios'
export default {
  props:['postId', 'fullName', 'myProfilePic'],
  data(){
    return {
      display: true,
      like:0,
      commentText:''
      
    }
  },
  methods: {
    comment(){
      const obj = {
        postId: this.postId,
        commentText: this.commentText,
        commentedBy:localStorage.getItem('myName'),
      }
      axios.post('http://10.177.68.70:8090/QuinBookPost/postComment', obj) //meghana
       .then((response)=>{
         console.log(response)
        this.commentText=''
        })
        .catch((error) => {
        this.errorMessage = error.errorMessage;
        console.log(error);
      })
    },
     toggle()
     {
       if(this.display)
       {
         this.display=false
         this.like=1
       }
       else{
         this.display=true
         this.like=-1
       }
       console.log('likes:'+this.like)
      
      const obj = {
        like:this.like,
        dislike:0,
        postId:this.postId,
        userName:localStorage.getItem('myName'),
        profilepic:this.myProfilePic
      }
       axios.post('http://10.177.68.70:8090/QuinBookPost/postEngagement', obj) //meghana
       .then((response)=>{
        console.log(response.data);
        location.reload(3000);
        console.log(obj)
        })
        .catch((error) => {
        this.errorMessage = error.errorMessage;
        console.log(error);
      })

     }
  }
}
</script>
<style scoped>
.main{
  width: 100%;
}
.l{
width: 30%;
}
.detail{
width: 50%;
}

</style>