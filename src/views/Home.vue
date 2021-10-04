<template>
  <div class="container py-10 mx-auto">
    <mylib />
    <calendar v-model="startDate" />
    {{ startDate }}
  </div>
</template>

<script>
import Calendar from '../components/calendar.vue'
// import Calendar from '@point-hub/vue-datepicker-2'
// import '../../dist/style.css'
import mylib from 'mylib'

export default {
  components: {
    Calendar,
    mylib
  },
  data() {
    return {
      startDate: new Date()
    }
  },
  methods: { 
    getCurrent() {
      
    }
  }
}
</script>