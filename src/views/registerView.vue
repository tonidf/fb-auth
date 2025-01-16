<template>
    <section>
        <h2>Registro de usuarios</h2>
        <form @submit.prevent="registerUser">
            <div>
                <label>Correo eléctronico</label>
                <input type="email" id="email" v-model="email" required placeholder="Introduce tu email">
            </div>
            <div>
                <label>Contraseña</label>
                <input type="password" id="password" v-model="password" required placeholder="Introduce tu email">
            </div>
            <button type="submit">Registrase</button>
        </form>
    </section>
</template>

<script>
import { auth } from '@/db/firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth'
export default {
    name: 'registerView',
    data(){
        return{
            email: "",
            password: ""
        }
    },
    methods:{
        async registerUser(){
            try {
                const userCredential = await createUserWithEmailAndPassword(auth, this.email, this.password)
                const user = userCredential.user
                console.log("Usuario creado: ", user);
                this.$router.push({name: 'perfil'})
            } catch (error) {
                console.error("Error al registrar el usuario: ", error);
                alert(error.message)
            }
        }
    }
}
</script>

<style>

</style>