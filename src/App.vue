<template>
  <div>
    <Home/>
    <Stuff />
    <Project />
    <Recruit />
    <OpenSource />
    <Footer />
  </div>
</template>

<script>
import Home from "./components/home";
import Stuff from "./components/stuff";
import Project from "./components/project";
import Recruit from "./components/recruit-new";
import OpenSource from "./components/open-source";
import Footer from "./components/footer";
export default {
  name: "app",
  components: {
    Home,
    Stuff,
    Project,
    Recruit,
    OpenSource,
    Footer
  }
};
</script>

<style lang="sass" scoped>
*
  padding: 0
  margin: 0
</style>
