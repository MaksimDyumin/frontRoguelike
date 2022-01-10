<template> 
    <div class="registrationForm">
        <div class="registrationFields">
            <h1>Авторизация</h1>
            <input v-model="user_login" type="text" name="username" placeholder="Имя пользователя" />
            <input v-model="user_password" type="password" name="password" placeholder="Пароль" />
            <input type="submit" value="Войти" @click="auth()" />
            <p class="line">  
                Еще не зарегистрированы?
                <router-link to="/register"> Регистрация </router-link>
            </p>
        </div>
        <div class="registrationServices">
            <input type="image" src="VK_logo.png" @click="authVK()" />
            <input type="image" src="Google_logo.png" @click="authGoogle()" />
            <input type="image" src="Facebook_logo.png" @click="authFacebook()" />
        </div>
    </div>
</template>

<script>
export default {
    name: 'LogForm',
    data() {
        return {
            user_login : "",
            user_password : ""
        }
    },
    methods:{
        auth() {
            console.log(1)
            const requestOptions = {
                method: "POST",
                headers: { 
                    "Content-Type": "application/json"
                    //'Authorization': 'Bearer <token>'
                },
                body: JSON.stringify({
                    username : this.user_login,
                    password : this.user_password
                })
            }
            console.log(requestOptions)
            fetch("http://server.diwos.ru/login", requestOptions)
                .then(response => response.json())
                .then(result => {
                    if (result.statusCode) {
                        if (result.statusCode == 401) {
                            alert("Ошибка")
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