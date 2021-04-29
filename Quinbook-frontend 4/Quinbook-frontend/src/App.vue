
<template>
  <div id="app">
<router-view/>
  </div>
</template>
<script>

export default {
 
}
</script>
<style lang="scss">
@font-face {
  font-family: "Nista";
  src: local("Nista"),
    url(./fonts/BwNistaInternationalDEMO-Regular.otf) format("truetype");
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: "Nista";
  src: local("Nista"),
    url(./fonts/BwNistaInternationalDEMO-Medium.otf) format("truetype");
  font-weight: medium;
  font-style: normal;
}
@font-face {
  font-family: "Nista";
  src: local("Nista"),
    url(./fonts/BwNistaInternationalDEMO-Bold.otf) format("truetype");
  font-weight: Bold;
  font-style: normal;
}
* {
  margin: 0px;
  font-family: "Nista", sans-serif;
}
h1 {
  font-weight: bold;
  font-style: normal;
}
p {
  font-weight: regular;
  font-style: normal;
}
body{
  // background: linear-gradient(to right, #39ce4b 0%, #4ceed0 25%, #5ecfd4 50%, #6da66c 75%, #aac165 100%);
  // background: linear-gradient(to right, #f06844 0%, #ee4c54 25%, #d45e95 50%, #9c6ca6 75%, #6583c1 100%);
  // background:  #c2092ed0;
  // background:rgba(128, 128, 128, 0.637);
  // background:#8db9ca;
  // background:#58cced;
  // // background:#bfe6ff;
  // background:#fde8cd;
  // background: linear-gradient(to right, #f39e86 0%, #e47076 25%, #cc7ba1 50%, #9c6ca6 75%, #6681b8 100%);
  background: #FFFFFF;
}

</style>
