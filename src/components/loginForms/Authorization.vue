<template> 
    <div class="wrapper">
        <div class="registrationForm">
            <div class="registrationFields">
                <h1>Авторизация</h1>
                <input v-model="user_login" class="inputText" type="text" name="username" placeholder="Имя пользователя" />
                <input v-model="user_password" class="inputText" type="password" name="password" placeholder="Пароль" />
                <span id="error">{{ errorMessage }}</span>
                <input class="inputSubmit" type="submit" value="Войти" @click="auth()" />
                <p class="line"> Еще не зарегистрированы?
                    <router-link to="/register"> Регистрация </router-link>
                </p>
            </div>
            <div class="registrationServices">
                <input type="image" src="VK_logo.png" @click="authVK()" />
                <input type="image" src="Google_logo.png" @click="authGoogle()" />
                <input type="image" src="Facebook_logo.png" @click="authFacebook()" />
            </div>
        </div>
    </div>
</template>

<script>
import '@/assets/css/LoginForm.scss'
export default {
    name: 'LogForm',
    data() {
        return {
            user_login : "",
            user_password : "",
            errorMessage : ""
        }
    },
    methods:{
        auth() {
            const requestOptions = {
                method: "POST",
                headers: { 
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    username : this.user_login,
                    password : this.user_password
                })
            }
            fetch("http://server.diwos.ru/login", requestOptions)
                .then(response => response.json())
                .then(result => {
                    if (result.statusCode) {
                        if (result.statusCode == 401) {
                            const error = document.getElementById('error')
                            this.errorMessage = "Неверный логин или пароль"
                            error.style.display = "block";
                            setTimeout(()=>{
                                error.style.opacity = 1;
                            },5)
                            return 
                        }
                    }
                    localStorage.token = result.access_token
                    this.$router.push('game')
                });
        }
    },
    mounted() {
        if (localStorage.token) {
            this.$router.push('game')
        }
    }
}
</script>