<template>
  <div class="flex justify-center items-center h-screen">
    <div class="w-full max-w-sm p-6 bg-white shadow-md rounded">
      <h2 class="text-2xl font-bold mb-4">{{ $t('login') }}</h2>
      <form @submit.prevent="handleLogin">
        <div class="mb-4">
          <label class="block mb-1">{{ $t('email') }}</label>
          <input v-model="email" type="email" class="w-full px-3 py-2 border rounded" />
        </div>
        <div class="mb-4">
          <label class="block mb-1">{{ $t('password') }}</label>
          <input v-model="password" type="password" class="w-full px-3 py-2 border rounded" />
        </div>
        <button type="submit" class="w-full py-2 bg-blue-500 text-white rounded">{{ $t('login') }}</button>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useAuth } from '../../composables/useAuth';
import { login as loginApi } from '../../api/auth.api';
import { useRouter } from 'vue-router';

const email = ref('');
const password = ref('');
const router = useRouter();
const { login } = useAuth();

const handleLogin = async () => {
  try {
    const response = await loginApi({ email: email.value, password: password.value });
    login(response.data.user, response.data.token);
    router.push('/');
  } catch (err: any) {
    alert(err.response?.data?.message || 'Login failed');
  }
};
</script>

<style scoped>
/* Login page styles */
</style>
