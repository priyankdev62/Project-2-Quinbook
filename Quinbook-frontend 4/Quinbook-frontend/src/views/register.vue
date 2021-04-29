<template>
  <div>
    <div class="container">
    <center>
      <div class="signup_body">
        <p class="acc_crt" style="color:#000000">Sign up with QuinBook</p>
        <p class="free_hint">It's free and always will be.</p>
        <div class="signup_form">
          <div>
            <input
              class="firstname"
              v-model="firstName"
              type="text"
              name=""
              placeholder="First name"
            />
            <input
              class="lastname"
              v-model="lastName"
              type="text"
              name=""
              placeholder="Last name"
            />
            <input
              class="email"
              v-model="email"
              type="text"
              name=""
              placeholder="Email"
            />
            <input
              class="password"
              v-model="password"
              type="password"
              name=""
              placeholder="Password"
            />
            <h4 style="padding-top:10px;color:black;font-size:24px">Birthday</h4>
            <input class="birthday" v-model="dob" type="date" name="date" @click="setdate()"/>
          </div>
          <br />
          <select v-model="gender" name="" id="">
            <option  value="">Male</option>
            <option value="">Female</option>
          </select>
          <br>
          <button class="signup" @click="onsubmit">Sign Up</button>
        </div>
      </div>
    </center>
    </div>
  </div>
</template>
<script scoped>
import axios from "axios";
export default {
  name: "registrationPage",
  data() {
    return {
      firstName: "",
      lastName: "",
      dob: "",
      email: "",
      password: "",
      gender: "",
    };
  },
  methods: {
    validate() {
      if (this.firstName === "") {
        this.$alert("Please enter First Name");
        return false;
      }
      if (this.lastName === "") {
        this.$alert("Please enter Last Name");
        return false;
      }
      if (this.dob === "") {
        this.$alert("Please enter Date Of Birth");
        return false;
      }
      if (this.email === "") {
        this.$alert("Please enter your email");
        return false;
      }
      if (this.password == "") {
        this.$alert("Please enter your password");
        return false;
      }
      return true;
    },
    setDate () {
 var today = new Date().toISOString().split('T')[0]
 document.getElementsByName('date')[0].setAttribute('max', today)
 },  
    onsubmit() {
      const obj = {
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        password: this.password,
        dateOfBirth : this.dob,
        gender: this.gender,
      };
      console.log("onsubmit")
      if (this.validate()) {
        console.log("on submit")
        axios.post("http://10.177.68.27:8081/register", obj) // ishika ip
        .then((res) => {
          console.log(res);
          if(res.data.message === 'Email already exists'){
            this.$alert('Email already exists')
          }
          else if(res.data.message === 'Username already Exists'){
            this.$alert('UserName already Exists')
          }
          else{
            let username=res.data.userName
            this.$alert('Thanks your username is '+username)
            this.$router.push("/");
          }
          
        });
      }
    },
    created() {
      if (localStorage.getItem("sessionId") !== null) {
        this.$router.push("/feed");
      }
    },
  },
};
</script>
<style scoped>
body{
  background-image: url('https://cdn.pixabay.com/photo/2014/02/27/16/10/tree-276014__340.jpg');
}
* {
  margin: 0;
  padding: 0;
  /* background-color: #f0f8d4; */
  
}
.container{
  /* background: linear-gradient(to right, #f06844 0%, #ee4c54 25%, #d45e95 50%, #9c6ca6 75%, #6583c1 100%); */
  /* background:rgba(128, 128, 128, 0.637); */
  /* background:#8db9ca; */
  /* background:#fde8cd; */
  /* background:#FFFFFF; */
  padding-bottom: 115px;
}
.signup_body {
  font-family: arial;
  position: absolute;
  max-width: 500px;
  display: inline-block;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border: 3px solid black;
  box-shadow: 7px 7px 5px 1px rgb(0, 0, 0);
  padding: 15px;
  
  
}
.signup_body .acc_crt {
  font-size: 40px;
  margin: 25px 0;
  color: whitesmoke;
  /* color:  linear-gradient(to right, #f06844 0%, #ee4c54 25%, #d45e95 50%, #9c6ca6 75%, #6583c1 100%); */
  /* webkit-background-clip: text;
    -webkit-text-fill-color: transparent; */
}
.signup_body .signup_form input {
  margin-top: 50px;
  height: 38px;
  width: 190px;
  padding-left: 10px;
  font-size: 18px;
  border: 1px solid silver;
  border-radius: 4px;
   
}
.signup_body .signup_form .lastname {
  margin-left: 15px;
  box-shadow: 0 0 10px 1px grey;
}
.signup_body .signup_form .firstname {
  box-shadow: 0 0 10px 1px grey;
}
.signup_body .signup_form .email,
.signup_body .signup_form .password,
.signup_body .signup_form .password2 {
  margin-top: 20px;
  width: 410px;
  box-shadow: 0 0 10px 1px grey;
}
.signup_body .signup_form .birthday {
  margin-top: 15px;
  font-size: 20px;
  font-weight: bold;
  box-shadow: 0 0 10px 1px grey;
}
.signup_body .signup_form .birth_date {
  margin-top: 5px;
  box-shadow: 0 0 10px 1px grey;
}
.signup_body .signup_form .month,
.signup_body .signup_form .day,
.signup_body .signup_form .year {
  height: 28px;
}
.signup_body .signup_form .day,
.signup_body .signup_form .year {
  margin-left: -5px;
}
.signup_body .signup_form .brth_hint {
  font-size: 11px;
  padding-left: 170px;
  margin-top: -28px;
  width: 150px;
  box-shadow: 0 0 10px 1px #3AED91;
}
.signup_body .signup_form a {
  text-decoration: none;
}
.signup_body .signup_form a:hover {
  text-decoration: underline;
}
.signup_body .signup_form input[type="radio"] {
  height: 15px;
  margin-left: -50px;
  margin-top: 10px;
}
.signup_body .signup_form .font {
  margin-left: 57px;
  margin-top: -17px;
  
}
.signup_body .signup_form .font2 {
  margin-left: 150px;
}
.signup_body .signup_form .signup {
  margin-top: 20px;
  height: 38px;
  width: 170px;
  font-size: 20px;
  font-weight: 600;
  border: 1px solid #006117;
  border-radius: 3px;
  cursor: pointer;
  outline: none;
 box-shadow: 0 0 10px 1px grey;
}
.signup_body .signup_form .signup:hover {
 box-shadow: 0 0 10px 1px grey;
}
.radio input[type="radio"] {
  line-height: 1.5;
  text-align: right;
  left:14px;
  right:15px;
  padding: 10px;
}
.radio01-01 {
  left: 18.67px;
  
}
.radio {
  display: flex;
  flex-direction: row;
}
</style>