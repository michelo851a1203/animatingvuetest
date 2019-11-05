<template>
  <div class="left-fix">
    <ul class="ul-dec">
      <li>item1</li>
      <li>item2</li>
      <li>item3</li>
      <li>item4</li>
      <li>item5</li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.left-fix {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  background-color: #91c3b3;
  border-style: solid;
  border-width: 0;
  border-radius: 1rem;
  width: 15rem;
  padding: 1.5rem;
}
.ul-dec li {
  list-style: none;
  padding:.25rem;
}
</style>
