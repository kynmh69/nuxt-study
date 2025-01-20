<template>
  <div class="min-h-screen flex flex-col">
    <!-- ヘッダー -->
    <Menubar :model="menuItems" class="shadow-lg">
      <template #start>
        <span class="text-xl font-bold mr-4">My Nuxt App</span>
      </template>
      <template #item="{ item }">
        <router-link :to="item.to" class="flex items-center gap-2">
          <i :class="item.icon"></i>
          <span>{{ item.label }}</span>
        </router-link>
      </template>
    </Menubar>

    <!-- メインコンテンツ -->
    <main class="flex-grow p-4">
      <slot />
    </main>

    <!-- フッター -->
    <div class="bg-gray-800 text-white p-4">
      <div class="container mx-auto flex justify-between items-center">
        <p>&copy; 2025 My Nuxt App. All rights reserved.</p>
        <div class="flex gap-4">
          <a href="#" class="hover:text-gray-300">Terms</a>
          <a href="#" class="hover:text-gray-300">Privacy</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const menuItems = ref([
  {
    label: 'Home',
    icon: 'pi pi-home',
    to: '/'
  },
  {
    label: 'About',
    icon: 'pi pi-info',
    to: '/about'
  },
  {
    label: 'Contact',
    icon: 'pi pi-envelope',
    to: '/contact'
  },
  {
    label: 'Download',
    icon: 'pi pi-download',
    to: '/download'
  }
])
</script>
