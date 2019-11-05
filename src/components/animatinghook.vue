<template>
  <div>
    <input @click="testclick" type="button" class="btn btn-primary" value="toggle" />
    <transition>
      <leftsidemenu v-if="status"></leftsidemenu>
    </transition>
  </div>
</template>

<script>
import Velocity from 'velocity-animate'
import leftsidemenu from "@/components/leftsidemenu.vue";
// 這裡用 velocity-animated 去實現。
export default {
  components: {
    leftsidemenu
  },
  data() {
    return {
      status: false
    };
  },
  methods: {
    // 這裡了解一下 velocity 去處理 transition hook 
    testclick() {
      const vm = this;
      vm.status = !vm.status;
    },
    beforeEnter(){

    },
  }
};
</script>

<style scoped lang="scss">
</style>
