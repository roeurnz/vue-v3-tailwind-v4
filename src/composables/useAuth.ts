import { ref } from 'vue';

const user = ref(null);
const token = ref('');

export const useAuth = () => {
  const login = (userData: any, userToken: string) => {
    user.value = userData;
    token.value = userToken;
    localStorage.setItem('token', userToken);
  };

  const logout = () => {
    user.value = null;
    token.value = '';
    localStorage.removeItem('token');
  };

  return {
    user,
    token,
    login,
    logout
  };
};