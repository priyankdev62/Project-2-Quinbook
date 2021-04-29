<template>
    <div class="container">
      <Navbar style="width:100.3%"/>
    <div class="userprofile" style="margin: 3px 0px 0px 0px;">
       <span  v-if="info.img"> 
          <img :src="info.img" alt="Avatar" class="avatar" style="border: solid white 2px">
        </span>
        <span v-else>
          <img src="https://www.pngitem.com/pimgs/m/78-786293_1240-x-1240-0-avatar-profile-icon-png.png" alt="Avatar" class="avatar">
        </span>
    </div>
    <div class="user" style="padding: 15px 1px;height: 430px;">
      <profilecover class="userdetails"/>
      <div class="editdetails" style="text-align: -webkit-center;overflow:scroll;">
        <br>
        <div>
          <div class="education">
            <p style="font-style: italic; font-size: xxx-large; font-family: PT Serif;">Personal Details</p><br>
                <table>
                  <tr>
                    <th>First Name</th>
                    <td>{{info.firstName}}</td>
                  </tr>
                  <tr>
                    <th>Last Name</th>
                    <td>{{info.lastName}}</td>
                  </tr>
                  <tr>
                    <th>Phone Number</th>
                    <td><input type="text" id="phoneNo" v-model="phoneNo" class="inputfield" placeholder="xxxx-xxx-xxx"></td>
                  </tr>
                  <tr>
                    <th>Gender</th>
                    <td><input type="text" id="gender"  class="inputfield" required v-model="gender" placeholder="M/F/O"></td>
                  </tr>
                  <tr>
                    <th>Date Of Birth</th>
                    <td><input class="inputfield" type="text" onfocus="(this.type='date')" onblur="(this.type='text')" required id="dateOfBirth" v-model="dateOfBirth" placeholder="dd/mm/yy"></td>
                  </tr>
                  <tr>
                    <th>Relationship Status</th>
                    <td><input type="text" id="relationshipStatus" name="relationshipStatus" class="inputfield" v-model="relationshipStatus" placeholder="Single/Mingle"></td>
                  </tr>
                  <tr>
                    <th>Marriage Anniversary</th>
                    <td><input class="inputfield" type="text" onfocus="(this.type='date')" onblur="(this.type='text')" id="marriageAnniversary" v-model="marriageAnniversary" placeholder="dd/mm/yy"></td>
                  </tr>
                  <tr>
                    <th>Address</th>
                    <td><input type="text" id="fname" name="address" class="inputfield" v-model="address" placeholder="Where do you live"></td>
                  </tr>
                  <tr>
                    <th>Hobbies</th>
                    <td><input type="text" id="fname" name="Hobbies" class="inputfield" v-model="Hobbies" placeholder="Collecting Coins"></td>
                  </tr>
                
                </table>
                
                <p style="font-style: italic; font-size: xxx-large; font-family: PT Serif;">Education</p><br>
                
                <table>
                  <tr>
                    <th>Secondary</th>
                    <td><input type="text" id="education10"  class="inputfield" v-model="education10" placeholder="10th"></td>
                  </tr>
                  <tr>
                    <th>Higher Secondary</th>
                    <td><input type="text" id="education12"  class="inputfield" v-model="education12" placeholder="12th"></td>
                  </tr>
                  <tr>
                    <th>University</th>
                    <td><input type="text" id="educationUni"  class="inputfield" v-model="educationUni" placeholder="College"></td>
                  </tr>
                  </table>
                  
                  <p style="font-style: italic; font-size: xxx-large; font-family: PT Serif;">Co-orporate Life</p><br>
                  
                  <table>
                  <tr>
                    <th>Company Name</th>
                    <td><input type="text" id="companyName"  class="inputfield" v-model="companyName" placeholder="QuinBook"></td>
                  </tr>
                  <tr>
                    <th>Job Profile</th>
                    <td><input type="text" id="jonProfile"  class="inputfield" v-model="jobProfile" placeholder="Position you hold"></td>
                  </tr>
                  <tr>
                    <th>Job Start Date</th>
                    <td><input class="inputfield" type="text" onfocus="(this.type='date')" onblur="(this.type='text')" id="jobStartDate" v-model="jobStartDate" placeholder="dd/mm/yy"></td>
                  </tr>
                  <tr>
                    <th>Job End Date</th>
                    <td>Present</td>
                  </tr>
                  <tr>
                    <th>Years of Experience</th>
                    <td><input type="text" id="Experience" class="inputfield" v-model="yearsOfExp" placeholder="Work Experience"></td>
                  </tr>
                  <tr>
                    <th>Job Location</th>
                    <td><input type="text" id="jobLocation" class="inputfield" v-model="jobLocation" placeholder="Job Location"></td>
                  </tr>
                </table>
            <input type="file" @change="previewImage" accept="image/*">
            <img class="preview" :src="img" width="120px" height="120px">
          </div>
          <button class="btn" @click="onsubmit">Save</button>
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
  name: 'editprofile',
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
     myName:'',
     imagechange:''
   }
  },
  validate () {
    
  },
  methods: {
    onsubmit(){
        const profile ={
          address: this.address,
          companyName: this.companyName,
          dateOfBirth: this.dateOfBirth,
          education10: this.education10,
          education12: this.education12,
          educationUni: this.educationUni,
          gender: this.gender,
          hobbies: this.Hobbies,
          img: this.img,
          jobEndDate: this.jobEndDate,
          jobLocation: this.jobLocation,
          jobProfile: this.jobProfile,
          jobStartDate: this.jobStartDate,
          marriageAnniversary: this.marriageAnniversary,
          password: this.password,
          phoneNo: this.phoneNo,
          relationshipStatus: this.relationshipStatus,
          userId: this.userId,
          yearsOfExp: this.yearsOfExp
        }
        console.log(profile)
        this.myName = localStorage.getItem('myName')
        localStorage.setItem('myProfilePic',this.img)
        axios.put('http://10.177.68.27:8081/update/userName?userName='+this.myName,profile,{ headers: { sessionId: localStorage.getItem('sessionId') } }) // ishika - for edit profile
          .then(response =>{
            console.log(response)
          })
          .catch(error =>{
            console.log(error)
          })
    } ,
    previewImage: function(event) {
            var input = event.target;
            console.log(input.files[0])
            if (input.files && input.files[0]) {
                var reader = new FileReader();
                reader.onload = (event) => {
                    this.img = event.target.result;
                }
                reader.readAsDataURL(input.files[0]);
                console.log(this.img)
            }
        }
  //   bindingImage(event) {
  //     this.img = event.target.files[0]
  //    var reader = new FileReader();
  //   reader.onloadend = function() {
  //   console.log('RESULT', reader.result)
  // }
  // reader.readAsDataURL(this.img);
  //   }
  },
  components: {
     profilecover: profilecover,
     Navbar
 },
 mounted(){
   if(localStorage.getItem('sessionId')===null){
      this.$alert('Please Login First')
      this.$router.push('/')
    }
   this.myName = localStorage.getItem('myName')
   console.log(this.myName)
   axios
   .get('http://10.177.68.27:8081/getDetails/userName?userName='+this.myName,{ headers: { sessionId: localStorage.getItem('sessionId') } }) // ishika - getting my details
   .then(response => {
     console.log(response)

     this.info = response.data
     this.phoneNo= this.info.phoneNo,
      this.password= this.info.password,
      this.userName= this.info.userName,
      this.gender= this.info.gender,
      this.dateOfBirth= this.info.dateOfBirth,
      this.img= this.info.img,
      this.relationshipStatus= this.info.relationshipStatus,
      this.education10= this.info.education10,
      this.education12= this.info.education12,
      this.educationUni= this.info.educationUni,
      this.jobProfile= this.info.jobProfile,
      this.companyName= this.info.companyName,
      this.jobStartDate= this.info.jobStartDate,
      this.jobEndDate= this.info.jobEndDate,
      this.yearsOfExp= this.info.yearsOfExp,
      this.jobLocation= this.info.jobLocation,
      this.address= this.info.address,
      this.marriageAnniversary= this.info.marriageAnniversary,
      this.Hobbies= this.info.hobbies
   })
   .catch(error =>{
     console.log(error)
   })
 }
}
</script>
<style scoped>
.editdetails{
  width: 60%;
  float: right;
  height: 680px;
  border: rgb(0, 0, 0) 2px solid;
  overflow: hidden;
}
/* .education{
  width: 550px;
 
} */
  .input-css{
    display: block;
    padding: 21px 0px 42px;
    width: 550px;
    min-width: 250px;
    margin-bottom: 20px;
    text-align: center;
    outline: none;
    border-radius: 5px;
    border: 0px;
    border-bottom: 1px solid white;
    -moz-box-shadow: 0 0 10px 1px gray;
    -webkit-box-shadow: 0 0 10px 1px gray;
    box-shadow: 0 0 10px 1px gray;
  }
  
</style>