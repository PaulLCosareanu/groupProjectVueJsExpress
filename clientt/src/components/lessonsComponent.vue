<template>
  <div class="app-content">
    <!-- <div v-for="item in user" :key="item.id"> -->
      <h2>Current Logged in User is: {{user.email}}</h2>
      <h2>Password:{{user.password}}</h2>
    <!-- </div> -->
    <div class="container">
      <div v-for="item in lessons" :key="item.id">
        <div class="lesson">
          <div class="title">
            <h3>Lesson Type :</h3>
            {{ item.topic }}
          </div>
          <div class="location">
            <h3>Location: </h3>
            {{ item.location }}
          </div>
          <div class="price">
            <h3>Price:</h3>
            {{ item.price }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      lessons: [],
      user: {},
    };
  },
  mounted() {
    this.getAllLessons();
    this.getUser();
  },
  methods: {
    getAllLessons() {
      fetch("http://localhost:5000/api/lessons")
        .then((response) => response.json())
        .then((data) => {
          this.lessons = data;
        });
    },
    getUser() {
      fetch("http://localhost:5000/api/user")
        .then((response) => response.json())
        .then((data) => {
          this.user = data;
        });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  max-width: 800px;
  margin: 0 auto;
  display: flex;
 flex-wrap: wrap;
 justify-content:space-evenly;
}
.lesson {
  /* position:relative; */
  border: 1px solid #5bd658;
  background-color: #bcffb8;
  padding: 10px 10px 30px 10px;
  margin-bottom: 15px;
  
}
</style>
