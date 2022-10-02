<script>
import getValue_ from "../info"

export default {
    computed: {
        getValue() {
            getValue_()
        }
    }
}
</script>


    
<template>
    <main>
        <div class="input">
            <input id="firstname" name="firstname" type="text" placeholder="  Prénom">
            <br><input id="lastname" name="lastname" type="text" placeholder="  Nom">
            <br><input id="birthday" name="birthday" type="text" placeholder="  Date de naissance">
        </div>
        <div class="send">
            <button type="button" @click="getValue">Envoyer</button>
        </div>
    </main>
</template>
    
    
      
<style scoped>
.input,
.send {
    text-align: center;
}

input[name="firstname"] {
    margin: 100px 0px 15px 0px;
}

input {
    margin: 15px 0px;
    padding: 15px 0px;
    border-radius: 15px;
}
</style>
      
      
      