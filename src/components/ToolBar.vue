<template>
    <div class="container">
        <div class="menuContainer">
            <div class="menuPublicContainer">
                <input type="submit" value="Инвентарь" @click="inventory()" />
                <input type="submit" value="Друзья" @click="friends()" />   
                <input type="submit" value="Чат" @click="chat()" />
                <input type="submit" value="Донат" @click="donate()" />
                <input type="submit" value="Настройки" @click="settings()" />
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
export default {
    name: 'Canvas',
    methods:{
        
    },

    data(){
        return{
            isDevMenuVisible: false,
            result1: ""
        }
    },
    mounted() {
        if (!localStorage.token) {
            this.$router.push('login')
        }
        
        // const requestOptions = {
        //     method: "POST",
        //     headers: {
        //         "Content-Type": "application/json"
        //     },
        //     body: JSON.stringify({

        //     })
        // }

        fetch("http://server.diwos.ru/user/?login=test")
        .then(response => response.json())
        .then(result =>{
            console.log(result._id)
            if(result._id == "61da0175179532fd384049da"){this.isDevMenuVisible = true}
            if (result.statusCode){
                if (result.statusCode == 401){
                    alert("Ошибка")
                    return
                }
            }
        });
    }
}
</script>

<style scoped>
.container{
    width: 100%;
    height: 100%;
}
.menuContainer{
    display: flex;
    justify-content: center;
    min-width: 1px;
    overflow: hidden;
    background-color: white;
    box-shadow: 0 10px 30px #afb5ec;
}

.menuPublicContainer{
    display: flex;
    justify-content: center;
    border-radius: 5px;
    min-width: 150px;
    background-color: white;
}

.menuDevContainer{
    display: flex;
    justify-content: center;
    border-radius: 5px;
    min-width: 150px;
    overflow: hidden;
    background-color: red;
}

.menuContainer input{
    margin-top: 10px
}

.menuContainer input{
    min-width: 170px;
    margin-left: 10px;
}

</style>
