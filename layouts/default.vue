<template>
  <div class="min-h-screen flex flex-col">
    <!-- ヘッダー -->
    <header class="bg-blue-600 text-white shadow-lg">
      <nav class="container mx-auto px-4 py-4">
        <div class="flex justify-between items-center">
          <h1 class="text-xl font-bold">My Nuxt App</h1>
          <ul class="flex space-x-4">
            <li><NuxtLink to="/" class="hover:text-blue-200">Home</NuxtLink></li>
            <li><NuxtLink to="/about" class="hover:text-blue-200">About</NuxtLink></li>
            <li><NuxtLink to="/contact" class="hover:text-blue-200">Contact</NuxtLink></li>
            <li><NuxtLink to="/download" class="hover:text-blue-200">Download</NuxtLink></li>
          </ul>
        </div>
      </nav>
    </header>

    <!-- メインコンテンツ -->
    <main class="flex-grow container mx-auto px-4 py-8">
      <slot />
    </main>

    <!-- フッター -->
    <footer class="bg-gray-800 text-white">
      <div class="container mx-auto px-4 py-6">
        <div class="flex justify-between items-center">
          <p>&copy; 2025 My Nuxt App. All rights reserved.</p>
          <div class="flex space-x-4">
            <a href="#" class="hover:text-gray-300">Terms</a>
            <a href="#" class="hover:text-gray-300">Privacy</a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>
