<template>
  <div>
    <input @click="togglefunc" type="button" class="btn btn-primary" value="出現" />

    <transition name="fade">
      <div v-if="status" class="myclass">
        <input @click="togglefunc" type="button" class="btn btn-primary" value="返回" />
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  // OK 這裡測試第一課的 transition

  data() {
    return {
      status: false
    };
  },
  methods: {
    togglefunc() {
      const vm = this;
      vm.status = !vm.status;
    }
  }
};
</script>

<style scoped lang="scss">
.myclass {
  background-color: green;
  border: solid;
  border-width: 1px;
  border-color: black;
  width: 20rem;
  height: 10rem;
}

.fade-enter {
  opacity: 0;
}
.fade-leave-active,
.fade-enter-active {
  transition: opacity 0.5s ease-out;
}

.fade-leave-to{
  opacity:0;
}

</style>
