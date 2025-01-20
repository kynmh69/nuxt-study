<template>
  <div class="max-w-2xl mx-auto">
    <Card>
      <template #title>
        <h1 class="text-3xl font-bold text-center">Contact Us</h1>
      </template>
      <template #content>
        <form class="flex flex-col gap-4">
          <div class="flex flex-col gap-2">
            <label for="name">Name</label>
            <InputText
                id="name"
                v-model="name"
                placeholder="Enter your name"
            />
          </div>

          <div class="flex flex-col gap-2">
            <label for="email">Email</label>
            <InputText
                id="email"
                v-model="email"
                type="email"
                placeholder="Enter your email"
            />
          </div>

          <div class="flex flex-col gap-2">
            <label for="subject">Subject</label>
            <InputText
                id="subject"
                v-model="subject"
                placeholder="Enter subject"
            />
          </div>

          <div class="flex flex-col gap-2">
            <label for="message">Message</label>
            <Textarea
                id="message"
                v-model="message"
                rows="4"
                placeholder="Enter your message"
            />
          </div>

          <Button
              label="Send Message"
              icon="pi pi-send"
              @click="submitForm"
          />
        </form>

        <Toast/>
      </template>
    </Card>
  </div>
</template>

<script setup>
import {useToast} from 'primevue/usetoast'

const toast = useToast()
const name = ref('')
const email = ref('')
const subject = ref('')
const message = ref('')

const submitForm = () => {
  // フォーム送信処理（モック）
  toast.add({
    severity: 'success',
    summary: 'Success',
    detail: 'Message sent successfully!',
    life: 3000
  })

  // フォームリセット
  name.value = ''
  email.value = ''
  subject.value = ''
  message.value = ''
}
</script>
