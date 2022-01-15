<template>
    <div class="container">
        <div class="menuContainer">
            <div class="menuPublicContainer">
                <input class="inputSubmit" type="submit" value="Друзья" @click="friends()" />   
                <input class="inputSubmit" type="submit" value="Донат" @click="donate()" />
                <input class="inputSubmit" type="submit" value="Настройки" @click="settings()" />
                <input class="inputSubmit" type="submit" value="ВЫХОД" @click="exit()" />
            </div>

            <div class="menuDevContainer" 
            v-if="isDevMenuVisible">
                <input type="submit" value="выбор объектов" @click="objectSelection()" />   
                <input type="submit" value="загрузка картинки" @click="uploadingImage()" />
                <input type="submit" value="создание/редактирование объекта" @click="creatingEditing()" />
            </div>
        </div>
    </div>
</template>


<script>
import "@/assets/css/DevToolBar.scss"

export default {
    name: 'Toolbar',
    methods:{
        exit() {
            localStorage.removeItem("token");
            this.$router.push('login');
        }
    },

    data(){
        return{
            isDevMenuVisible: false,
        }
    },
    mounted() {
        if (!localStorage.token) {
            this.$router.push('login')
        }
        fetch("http://server.diwos.ru/user/?login=test")
        .then(response => response.json())
        .then(result =>{   
            if (result.statusCode){
                if (result.statusCode == 401){
                    alert("Ошибка")
                    return
                }
            }
            if(result._id == "61da0175179532fd384049da"){this.isDevMenuVisible = false}
        });
    },
}
</script>