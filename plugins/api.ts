export default defineNuxtPlugin((nuxtApp) => {
    interface UserData {
        username: string
        email: string
        phoneNumber: string
        password: string
      }
      
      const api = {
        login: (email: string, password: string) => {
          return $fetch('http://localhost/mi_login/api/login.php', {
            method: 'POST',
            body: JSON.stringify({ email, password })
          })
        },
        signup: (userData: UserData) => {
          return $fetch('http://localhost/mi_login/api/register.php', {
            method: 'POST',
            body: JSON.stringify(userData)
          })
        }
      }

})
