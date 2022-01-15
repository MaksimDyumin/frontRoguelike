<template>
    <div v-for="item in items" :key="item.id">
        <img :src="item.img" alt="" class="items">
        <div>
            <span>{{item.name}}</span>
        </div>
    </div>
</template>

<script>
export default {
    name: "InventoryItemList", 
    data(){
        return{
            items:[
                {
                    id: "1",
                    img: "https://www.factroom.ru/facts/wp-content/uploads/2014/01/216-1000x750.jpg",
                    name: "Сова_1"
                },

                {
                    id: "2",
                    img:"https://thumbs.dreamstime.com/b/сыч-орла-бенгалии-19284377.jpg",
                    name: "Сова_2"
                }
            ]
        }
    }
}
</script>

<style scoped>
.items{
    height: 50px;
    width: 50px;
    margin-top: 20px;

 }
</style>