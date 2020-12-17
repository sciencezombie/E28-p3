<template>
    <section class="container-fluid">
                <div class="login-panel">
                    <div class="alert alert-primary" role="alert" :style="{opacity: isAlertShow ? 1 : 0}">
                        Login successfully. <small>waiting for redirect.</small>
                        <loader-component width="30"></loader-component>
                    </div>
                    <h1>Login</h1>
                    <h1>Welcome back</h1>
                    <br>
                    <form action="">
                        <div class="form-group">
                            <label class="input-label">Email</label>
                            <input type="email" class="form-control" placeholder="Email">
                        </div>
                        <div class="form-group">
                            <label class="input-label">Password</label>
                            <input type="password" class="form-control" placeholder="Password">
                        </div>
                        <br>
                        <div class="form-group d-flex justify-content-center">
                            <button class="btn" id="login" @click.prevent="login" v-if="!isLoggingIn">Login</button>
                            <button class="btn" disabled @click.prevent="login" v-if="isLoggingIn"><loader-component width="30"></loader-component></button>
                        </div>
                    </form>
                </div>
    </section>
</template>

<script>
import LoaderComponent from './LoadingComponent'
import { setTimeout } from 'timers';
export default {
    components: { LoaderComponent },
    data() {
        return {
            isLoggingIn: false,
            isAlertShow: false
        }
    },
    methods: {
        login() {
            this.isLoggingIn = true
            setTimeout(() => {
                this.isLoggingIn = false
                this.isAlertShow = true
                setTimeout(() => this.redirect(), 1000)
            }, 1000)
        },
        redirect() {
            this.$router.push({name: 'home'})
        }
    }
}
</script>

<style>
h2 {
    text-align:center;
    text-shadow: 2px 2px 5px rgb(248, 167, 167);
}
input {
  width: 100%;
  padding: 12px 20px;
  margin: 18px;
  box-sizing: border-box;
  border: 1px solid #555;
  outline: none;
}

input:focus {
  background-color: lightblue;
}
.input-label {
    margin:10px;
   font-weight: bold;
   font-size: 150%;
}
.btn {
 background-color: #4CAF50;
  border: none;
  color: white;
  padding: 16px 32px;
  text-decoration: none;
  margin: 20px;
  cursor: pointer;
}
.widget {
    margin: 0;
    height: unset;
}
.login-panel {
    position: relative;
    padding: 30px ;
    }
    
    
.alert {
        opacity: 0;
        position: absolute;
        width: 100%;
        top: 100px;
        transition: all .5s;
}
.alert-primary {
            background-color: #007BFF;
            color: #fff;
            font-size: 18px;
            border: none;
        }       
         .widget {
            position: absolute;
            right: 5px;
            top: 0;
            margin: 10px;
        }
    

</style>