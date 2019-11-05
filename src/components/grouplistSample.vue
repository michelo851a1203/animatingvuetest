<template>
  <div>
    <input type="text" name="a1" id="a1" v-model="text" style="margin-right:1rem;" />
    <input @click="appendClick" type="button" class="btn btn-primary" value="新增" />
    <transition-group tag="ul" name="slide">
      <li v-for="item in testList" :key="item.id">{{item.id}} - {{item.title}}</li>
    </transition-group>
  </div>
</template>

<script>
export default {
  // 這裡要完成一個 group transition 把資料加到 ul 內
  data() {
    return {
      text: "",
      testList: []
    };
  },
  methods: {
    appendClick() {
      const vm = this;
      if (vm.text.trim() !== "") {
        const maxid = vm.testList.reduce(
          (prev, curr) => {
            const max = Math.max(Number(prev.id), Number(curr.id)) + 1;
            return { id: max };
          },
          {
            id: 1
          }
        ).id;
        vm.testList.push({
          id: maxid,
          title: vm.text
        });
      }
    }
  }
};
</script>

<style scoped lang="scss">
// 這個時候可以考慮用 transition-group
// OK 完成了!，如果要 transition-group 
// 要用 tag 去處理。把物件變為可以用的
// 當出現和消失的狀態可以用的時候可以考慮用 transition-group
.slide-enter {
  opacity: 0;
  transform:translateY(10px);
}
.silde-leave-active,
.slide-enter-active {
  transition: all 0.5s ease-out;
}
.silder-leave-to {
  opacity: 0;
  transform:translateY(-10px);
}
</style>
