<template>
  <div class="header">
   <div class="flex justify-between align-center column--100 header--wrap">
        <div class="nav-brand">
          <img src="../../assets/img/Logo.svg" />
        </div>      
          <div class="nav-right">
            <router-link to="/" class="">
              I didn’t get my tickets
            </router-link>
            <router-link to="/create-event" class="button--primary button--primary--md">
              CREATE YOUR OWN EVENT
            </router-link>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'CreateEvent',
  props: {
    
  }
}
</script>
