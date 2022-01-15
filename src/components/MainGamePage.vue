<template>
    <div>
        <tool-bar />
        <chat />
        <Inventory />
    </div>
</template>

<script>

import ToolBar from './DevToolBar.vue'
import Chat from './Game/Chat/Chat.vue'
import Inventory from './Game/Inventory/Inventory.vue'

export default {
    name: 'MainGamePage',
    components:{
        ToolBar: ToolBar,
        Chat: Chat,
        Inventory

    }
}
</script>