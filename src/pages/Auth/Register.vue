<template>
  <div class="flex justify-center items-center h-screen">
    <div class="w-full max-w-sm p-6 bg-white shadow-md rounded">
      <h2 class="text-2xl font-bold mb-4">{{ $t('register') }}</h2>
      <form @submit.prevent="handleRegister">
        <div class="mb-4">
          <label class="block mb-1">{{ $t('name') }}</label>
          <input v-model="name" type="text" class="w-full px-3 py-2 border rounded" />
        </div>
        <div class="mb-4">
          <label class="block mb-1">{{ $t('email') }}</label>
          <input v-model="email" type="email" class="w-full px-3 py-2 border rounded" />
        </div>
        <div class="mb-4">
          <label class="block mb-1">{{ $t('password') }}</label>
          <input v-model="password" type="password" class="w-full px-3 py-2 border rounded" />
        </div>
        <button type="submit" class="w-full py-2 bg-green-500 text-white rounded">{{ $t('register') }}</button>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { register as registerApi } from '../../api/auth.api';
import { useRouter } from 'vue-router';

const name = ref('');
const email = ref('');
const password = ref('');
const router = useRouter();

const handleRegister = async () => {
  try {
    await registerApi({ name: name.value, email: email.value, password: password.value });
    alert('Registration successful!');
    router.push('/login');
  } catch (err: any) {
    alert(err.response?.data?.message || 'Registration failed');
  }
};
</script>

<style scoped>
/* Register page styles */
</style>
