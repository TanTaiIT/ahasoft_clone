<script setup>
import { ref } from 'vue'
import { Menu } from './../../../constant/menu.js'
import MenuDropdown from './menu-dropdown.vue'
</script>
<template>
  <div class="top-menu">
    <div class="top-menu__container">
      <MenuDropdown/>
      <!-- <ul class="top-menu__list">
        <li class="top-menu__list-item active" @mouseenter="onMenuShow()">
          <span>Clients</span>
          <ul class="top-menu__list-item__dropdown">
          <li class="top-menu__list-item__dropdown-item">Galaxy s5</li>
          <li class="top-menu__list-item__dropdown-item">Galaxy s4</li>
          <li class="top-menu__list-item__dropdown-item">Galaxy s3</li>
          <li class="top-menu__list-item__dropdown-item">Galaxy s2</li>
        </ul>
        </li>
        
        <li class="top-menu__list-item active">
          <span>Staffs</span>
          <ul class="top-menu__list-item__dropdown">
          <li class="top-menu__list-item__dropdown-item">Galaxy s5</li>
          <li class="top-menu__list-item__dropdown-item">Galaxy s4</li>
          <li class="top-menu__list-item__dropdown-item">Galaxy s3</li>
          <li class="top-menu__list-item__dropdown-item">Galaxy s2</li>
        </ul>
        </li>
        <li class="top-menu__list-item">
          <span>Inventory</span>
          
        </li>
        <li class="top-menu__list-item">
          <span>Expenditure</span>
          <ul class="top-menu__list-item__dropdown">
          <li class="top-menu__list-item__dropdown-item">Galaxy s5</li>
          <li class="top-menu__list-item__dropdown-item">Galaxy s4</li>
          <li class="top-menu__list-item__dropdown-item">Galaxy s3</li>
          <li class="top-menu__list-item__dropdown-item">Galaxy s2</li>
        </ul>
        </li>
        <li class="top-menu__list-item">
          <span>Setup</span>
          <ul class="top-menu__list-item__dropdown">
          <li class="top-menu__list-item__dropdown-item">Galaxy s5</li>
          <li class="top-menu__list-item__dropdown-item">Galaxy s4</li>
          <li class="top-menu__list-item__dropdown-item">Galaxy s3</li>
          <li class="top-menu__list-item__dropdown-item">Galaxy s2</li>
        </ul>
        </li>
      </ul> -->
    </div>
  </div>
</template>

<style lang="scss" scoped>
.top-menu {
  background-color: yellow;

  .top-menu__container {
    
  }
}
</style>