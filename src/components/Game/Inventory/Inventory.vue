<template>
    <div class="container">
        <p>Инвентарь</p>
        <div class="inventoryContainer">
            <inventory-top-bar />
            <div>
                <inventory-item-list />
            </div>
        </div>
    </div>
</template>

<script>
import InventoryItemList from "./InventoryItemList.vue"
import InventoryTopBar from "./InventoryTopBar.vue"
export default {
    name: 'Inventory',
     components: {
        InventoryItemList,
        InventoryTopBar
    },
}
</script>

<style scoped>
.inventoryContainer{
    width: 1000px;
    height: 600px;
    border: 1px solid black;
    background: white;
}

.container{
    display: grid;
    justify-items: center
}

.topBar{
    display: flex;
    height: 80px;
    border-bottom: 1px solid black;
}

.inventoryItems{

}
</style>