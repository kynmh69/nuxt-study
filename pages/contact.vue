<template>
  <div class="max-w-2xl mx-auto">
    <h1 class="text-4xl font-bold mb-8 text-center">Contact Us</h1>

    <form class="space-y-6">
      <div>
        <label for="name" class="block text-sm font-medium text-gray-700">Name</label>
        <input
            type="text"
            id="name"
            v-model="name"
            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
        >
      </div>

      <div>
        <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
        <input
            type="email"
            id="email"
            v-model="email"
            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
        >
      </div>

      <div>
        <label for="subject" class="block text-sm font-medium text-gray-700">Subject</label>
        <input
            type="text"
            id="subject"
            v-model="subject"
            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
        >
      </div>

      <div>
        <label for="message" class="block text-sm font-medium text-gray-700">Message</label>
        <textarea
            id="message"
            v-model="message"
            rows="4"
            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
        ></textarea>
      </div>

      <div>
        <button
            type="submit"
            @click.prevent="submitForm"
            class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Send Message
        </button>
      </div>
    </form>

    <!-- 送信完了メッセージ -->
    <div v-if="showSuccessMessage" class="mt-4 p-4 bg-green-100 text-green-700 rounded-md">
      Thank you for your message. We'll get back to you soon!
    </div>
  </div>
</template>

<script setup>
const name = ref('')
const email = ref('')
const subject = ref('')
const message = ref('')
const showSuccessMessage = ref(false)

const submitForm = () => {
  // ここで実際のフォーム送信処理を実装します
  // 現在はモックの成功メッセージを表示するだけです
  showSuccessMessage.value = true

  // フォームをリセット
  name.value = ''
  email.value = ''
  subject.value = ''
  message.value = ''

  // 3秒後に成功メッセージを非表示にする
  setTimeout(() => {
    showSuccessMessage.value = false
  }, 3000)
}
</script>