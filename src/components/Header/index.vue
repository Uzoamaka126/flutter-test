<template>
  <div class="header">
   <div className="flex justify-between align-center column--100 header--wrap">
        <div class="nav-brand">
          <img src="../../assets/img/Logo.svg" />
        </div>      
          <div class="nav-right">
            <router-link to="/" className="">
              I didn’t get my tickets
            </router-link>
            <router-link to="/create-event" className="button--primary button--primary--md">
              CREATE YOUR OWN EVENT
            </router-link>
          </div>
      </div>
  </div>
</template>

<script>
// import { RouterLink } from 'vue-router'
export default {
  name: 'Header',
  props: {
    msg: String
  }
}
</script>
