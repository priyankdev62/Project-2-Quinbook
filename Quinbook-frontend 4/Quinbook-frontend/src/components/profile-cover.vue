<template>
  <div class="container">
    <div class="user" style="justify-content: center;">
      <div > <br><h1 style="text-align: center;">{{this.myFullName}}</h1> 
        <div class="afp buttons">
          <div id="app">
            <h1 class="h1todo" style="margin: 0px 0px 0px 37px;">My Todo List</h1>
            <br><br>
            <div class="card-todo">
              <div class="flex">
                <input class="inputTodo" v-model="newItem" @keyup.enter="addItem" id="addItem" placeholder="Add new todo" />
                <button class="buttonTodo" @click="addItem" :disabled="newItem.length === 0">Add</button>
              </div>
            </div>
            <div class="card-todo">
              <div class="card-todo-inner">
                <ul class="list">
                  <li class="list-item" :class="{completed: item.completed}" v-for="item in reversedItems" :key="item.id">
                    <div class="list-item-toggle" @click="toggleCompleted(item)"></div><span>{{ item.name }}</span>
                    <div class="list-item-delete" @click="removeItem(item)">X</div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      myFullName:'',
      newItem: '',
      items: [],
    }
  },
  computed:{
    ...mapGetters(['getFirstName', 'getLastName']),
    reversedItems() {
      return this.items.slice( 0 ).reverse();
    },
  },
methods:{
  addItem: function () {
    this.items.push( {
      id: this.items.length + 1,
      name: this.newItem,
      completed: false,
    } );
    this.newItem = '';
  },
  toggleCompleted: function ( item ) {
    item.completed = !item.completed;
  },
  removeItem: function ( item ) {
    this.items = this.items.filter( ( newItem ) => newItem.name !== item.name );
  }
},
mounted(){
  this.myFullName = localStorage.getItem('myFullName')
}
}

</script>

<style>
.container{
  height: 700px;
}
.body{
      width: 0;
      height: 0;
      margin:0px;
}
.userprofile{
  width: 0%;
  height: 0px;
  /* border: rgb(0, 0, 0) 2px solid; */
  
  /* background-image: url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ01SZD8LTME-CsgwCipl6i5Fx79F20D6S-cw&usqp=CAU"); */
  background-repeat: no-repeat;
  /* background-size: cover; */
  background-repeat: round;
  background-size: cover;
  /* background-image: url("https://via.placeholder.com/600x250"); */
}
.user{
  width: 100%;
  height: 450px;
  display: flex;
  justify-content: space-between;
}
.userdetails{
  overflow: scroll;
  width: 30%;
  float: left;
  height: 450px;
  border: rgb(0, 0, 0) 2px solid;
  margin: 225px 0px 0px 20px;
}

.avatar {
  vertical-align: middle;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  position: relative;
  margin: 15px 0px 0px 120px;
}
.btn123{
  padding: 15px 25px;
  font-size: 24px;
  text-align: center;
  cursor: pointer;
  outline: none;
  color: black;
  border: none;
  border-radius: 90px;
}
.btn123:hover {background-color: gray}

.btn123:active {
  background-color: #9120a7;
  box-shadow: 0 0px #666;
  transform: translateY(4px);
}

#app{
  box-sizing: border-box;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  color: #3d4855;
}

.h1Todo,
.h2Todo,
.h3Todo,
.h4Todo,
.h5Todo,
.h6Todo {
  margin-top: 0;
}


.card-todo {
  border-radius: 4px;
  box-shadow: 1px 1px 40px -10px #31505f30, 0px 1px 2px 0px #31505f30;
  background: white;
  margin-bottom: 24px;
}

.card-todo-inner {
  padding: 16px 24px;
}

.flex {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.inputTodo {
  border-radius: 4px;
  background: transparent;
  border: none;
  width: 100%;
  padding: 14px;
  font-size: 16px;
  border: 1px solid transparent;
  height: 100%;
  display: block;
  outline: none;
}

.buttonTodo {
  background: #4fc08d;
  padding: 10px 22px;
  border: none;
  color: white;
  border-radius: 4px;
  margin: 8px;
  font-size: 16px;
  cursor: pointer;
  box-shadow: 1px 1px 15px -2px #212c4430;
  transition: 0.15s;
}

.buttonTodo:hover {
  background: #42aa7b;
}

.buttonTodo:disabled {
  background: #e8e8e8;
  color: #555;
  box-shadow: none;
}

.list {
  list-style: none;
  margin: 0;
  padding: 0;
}

.list-item {
  padding: 12px 16px 12px 16px;
  border: 1px solid #e8e8e8;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 6px;
  border-radius: 4px;
}

.list-item:first-child {
  border-top: 1px solid #e8e8e8;
}

.list-item-toggle {
  border: 1px solid #e8e8e8;
  border-radius: 999px;
  height: 21px;
  width: 21px;
  margin-right: 16px;
}

.list-item-delete {
  margin-left: auto;
  color: tomato;
  margin-top: -2px;
  font-weight: bold;
  text-decoration: none !important;
}

.list-item.completed {
  border: 1px solid #4fc08d;
}

.list-item.completed span {
  text-decoration: line-through;
}

.list-item.completed .list-item-toggle {
  background: #4fc08d;
  border: #4fc08d;
}

</style>