<template>
    <div class="container">
      <Navbar style="width:100.3%"/>
    <div class="userprofile" style="margin: 3px 0px 0px 0px;">
       <span  v-if="info.img"> 
          <img :src="info.img" alt="Avatar" class="avatar" style="border: solid white 2px">
          <label class="switch">
            <input type="checkbox" unchecked @click="makemyaccountprivate">
            <span class="slider round" style="color:white">Private Account</span>
          </label>
        </span>
        <span v-else>
          <img src="https://www.pngitem.com/pimgs/m/78-786293_1240-x-1240-0-avatar-profile-icon-png.png" alt="Avatar" class="avatar">
        </span>
    </div>
    <div class="user" style="padding: 15px 1px;height: 430px;">
      <profilecover class="userdetails"/>
      <div class="about" style="text-align: -webkit-center;overflow:scroll;">
        <br>
        <div>
          <div class="education">
            <!-- <img class='beautify-user-img' src='../assets/beautify.jpg'> -->
             <!-- <img class="preview" :src="img" width="120px" height="120px"> -->
             <p style="font-style: italic; font-size: xxx-large; font-family: PT Serif;">Personal Details</p><br>
                <table>
                  <tr>
                    <th>First Name</th>---->
                    <td> {{info.firstName}}</td>
                  </tr>
                  <tr>
                    <th>Last Name</th>---->
                    <td>{{info.lastName}}</td>
                  </tr>
                  <tr>
                    <th>Phone Number</th>---->
                    <td>{{info.phoneNo}}</td>
                  </tr>
                  <tr>
                    <th>Gender</th>---->
                    <td>{{info.gender}}</td>
                  </tr>
                  <tr>
                    <th>Date Of Birth</th>---->
                    <td>{{info.dateOfBirth}}</td>
                  </tr>
                  <tr>
                    <th>Password</th>---->
                    <td> Hidden </td>
                  </tr>
                  <tr>
                    <th>Relationship Status</th>---->
                    <td>{{info.relationshipStatus}}</td>
                  </tr>
                  <tr>
                    <th>Marriage Anniversary</th>---->
                    <td>{{info.marriageAnniversary}}</td>
                  </tr>
                  <tr>
                    <th>Address</th>---->
                    <td>{{info.address}}</td>
                  </tr>
                  <tr>
                    <th>Hobbies</th>---->
                    <td>{{info.hobbies}}</td>
                  </tr>
                
                </table>
                
                <p style="font-style: italic; font-size: xxx-large; font-family: PT Serif;">Education</p><br>
                
                <table>
                  <tr>
                    <th>Secondary</th>---->
                    <td>{{info.education10}}</td>
                  </tr>
                  <tr>
                    <th>Higher Secondary</th>---->
                    <td>{{info.education12}}</td>
                  </tr>
                  <tr>
                    <th>University</th>---->
                    <td>{{info.educationUni}}</td>
                  </tr>
                  </table>
                  
                  <p style="font-style: italic; font-size: xxx-large; font-family: PT Serif;">Co-orporate Life</p><br>
                  
                  <table>
                  <tr>
                    <th>Company Name</th>---->
                    <td>{{info.companyName}}</td>
                  </tr>
                  <tr>
                    <th>Job Profile</th>---->
                    <td>{{info.jobProfile}}</td>
                  </tr>
                  <tr>
                    <th>Job Start Date</th>---->
                    <td>{{info.jobStartDate}}</td>
                  </tr>
                  <tr>
                    <th>Job End Date</th>---->
                    <td>{{info.jobEndDate}}</td>
                  </tr>
                  <tr>
                    <th>Years of Experience</th>---->
                    <td>{{info.Experience}}</td>
                  </tr>
                  <tr>
                    <th>Job Location</th>---->
                    <td>{{info.jobLocation}}</td>
                  </tr>
                </table>
           
      </div>
      </div>
        </div>  
          </div>
    </div>
</template>
<script>
import axios from 'axios'
import Navbar from '../components/navbar5.vue'
import profilecover from '../components/profile-cover.vue'
export default {
  name: 'about',
  data () {
   return {
     info:'',
     firstName: '',
     lastName: '',
     phoneNo: '',
     password: '',
     userName: '',
     gender: '',
     dateOfBirth: '',
     img: '',
     relationshipStatus: '',
     education10: '',
     education12: '',
     educationUni: '',
     jobProfile: '',
     companyName: '',
     jobStartDate: '',
     jobEndDate: '',
     yearsOfExp: 0,
     jobLocation: '',
     address: '',
     marriageAnniversary: '',
     Hobbies: '',
     myName:''
   }
  },
  validate () {
    
  },
  methods: {
    makemyaccountprivate(){
      //for making account private
    }
    } ,
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
        },
  
  components: {
     Navbar,
     profilecover
 },
 mounted(){
   if(localStorage.getItem('sessionId')===null){
      this.$alert('Please Login First')
      this.$router.push('/')
    }
   this.myName = localStorage.getItem('myName')
   axios
   .get('http://10.177.68.27:8081/getDetails/userName?userName='+this.myName,{ headers: { sessionId: localStorage.getItem('sessionId') } }) //ishika - for about post
   .then(response => {
     console.log(response)
     this.info = response.data
   })
   .catch(error =>{
     console.log(error)
   })
 }
}
</script>
<style scoped>
.about{
  width: 60%;
  float: right;
  height: 680px;
  border: rgb(0, 0, 0) 2px solid;
  overflow: hidden;
}
.table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
   
}
/* .user{
  background-image: url('../assets/2.jpeg');
} */
/* .education{
  background-image: url('../assets/3.jpeg');
} */
.beautify-user-img{
    border-radius: 50%;
    height: 150px;
    width: 150px;
    box-shadow: 0 0 10px 1px gray;
  }
 td{
    -moz-box-shadow: 0 0 10px 1px gray;
    -webkit-box-shadow: 0 0 10px 1px gray;
    box-shadow: 0 0 10px 1px  #000000;
    text-align: center;
  }
  .feed{
    border: solid black 2px;
  }
  
</style>