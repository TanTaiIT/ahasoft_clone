<template>
  <ul class="top-menu__list" ref="menu" @mouseleave="onHideAllDropdown()">
       <li class="top-menu__list-item" v-for="(menu, index) in initialMenu" :key="index" :id="menu.label" 
       @mouseenter="onMenuShow(menu.label)"
       >
        <span>{{ menu.label }}</span>
        <ul class="top-menu__list-item__dropdown">
          <li v-for="(submenu, index2) in menu.items" class="top-menu__list-item__dropdown-item" :key="index2">
            {{ submenu.name }}
          </li>
        </ul>
       </li>
  </ul>
    
</template>

<script setup>
import { computed, ref } from 'vue';
import { Menu } from './../../../constant/menu.js'
const initialMenu = ref(Menu)

const hideDropdown = () => {
  const menuEl = document.querySelectorAll('.top-menu__list-item')
  menuEl.forEach((item) => {
    if(item.classList.contains('active')) {
      item.classList.remove('active')
    }
  })
}
const onMenuShow = (name) => {
  const menuEl = document.querySelectorAll('.top-menu__list-item')
  menuEl.forEach((item) => {
    if(item.classList.contains('active')) {
      item.classList.remove('active')
    }
  })
  const hoverElement = document.getElementById(name)

  hoverElement.classList.toggle('active')

}

const onHideAllDropdown = () => {
  hideDropdown()
}

</script>

<style lang="scss" scoped>
.top-menu__list {
  display: flex;
  align-items: center;
  list-style-type: none;
  justify-content: space-around;

  .top-menu__list-item {
    padding: 10px 20px;
    min-width: 100px;
    cursor: pointer;
    transition: all 0.2s ease;
    position: relative;
    

    &:hover {
      background: rgb(55, 55, 3);
      // color: #fff;
    }

    &.active {
      .top-menu__list-item__dropdown {
        list-style-type: none;
        display: block;
        position: absolute;
        top: 100%;
        left: 0;
        width: max-content;
        display: flex;
        flex-direction: column;
        background-color: rgb(4, 49, 4);
        color: #fff;
      }
    }

    .top-menu__list-item__dropdown {
      display: none;
      
      .top-menu__list-item__dropdown-item {
        width: 150px;
        padding: 5px;
        border-bottom: 1px solid gray;

        &:hover {
          background-color: rgb(1, 239, 1);
        }
      }
    }
    
  }
}
</style>