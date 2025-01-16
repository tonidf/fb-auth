<template>
    <section>
        <h1 v-if="username">Bienvenido {{ username }}</h1>
        <h1 v-else>cargando...</h1>
        <button @click="logout">Cerrar sesion</button>
    </section>
</template>

<script>
import { auth } from '@/db/firebase'
import { signOut } from 'firebase/auth'
export default {
    name: 'perfilView',
    data(){
        return{
            username: null,
            fecha: null
        }
    },
    mounted(){
        const currentuser = auth.currentUser;
        if(currentuser){
            this.username = currentuser.email
        } else{
            this.$router.push({name: 'register'})
        }
    },
    methods:{
        async logout(){
            try {
                await signOut(auth)
                this.$router.push({name: 'register'})
            } catch (error) {
                console.error("Error al cerrar sesion: ", error);
            }
        }
    }
}

</script>

<style>

</style>