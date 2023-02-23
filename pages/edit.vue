<template>
    <div>
        <Navbar />
        <div class="form-add">
            <p class="title-form">Edit User</p>
            <form action="" class="flex flex-row flex-auto">
                <div class="w-1/2">
                    <label for="username" class="label-username">Username</label>
                    <input class="input-add"  type="text" required name="username" id="username" placeholder="e.g john.com" v-model="username" value="{username}">
                    
                    <label for="regional" class="label-regional">Regional</label>
                    <input class="input-add"  type="text" required name="regional" id="regional" placeholder="Input Regional" v-model="regional" value="{regional}">

                    <label for="status" class="label-status">Status Admin</label>
                    <div class="selectdiv">
                        <img src="https://cdn-icons-png.flaticon.com/512/271/271228.png" class="img-select" alt="" srcset="">
                        <select class="input-add"  name="status" required autocomplete="off" id="status" placeholder="Select Admin Status">
                            <option value="" selected hidden disabled class="unselect">Select Admin Status</option>
                            <option value="Web" :selected="status === 'Web' ? true : false ">Admin Web</option>
                            <option value="Regional" :selected="status === 'Regional' ? true : false ">Admin Regional</option>
                            <option value="User" :selected="status === 'User' ? true : false ">Admin User</option>
                        </select>
                    </div>
                    
                    
                </div>
                
                <div class="w-1/2">
                    <label for="password" class="label-password">Password</label>
                    <input class="input-add" type="password" name="password" id="password" placeholder="e.g ineedadn123">

                    <label for="confirm" class="label-confirm">Confirm Password</label>
                    <input class="input-add" type="password" name="confirm" id="confirm" placeholder="e.g ineedadn123">

                    <div class="mt-9 flex flex-wrap gap-5 justify-center ">
                        <button class="cancel button-add" type="button" @click="cancel">Cancel</button>
                        <button type="submit" class="save button-add" @submit="submitdata">Save</button>
                    </div>
                </div>
                
            </form>
        </div>
    </div>
    
</template>

<script>
  import Navbar from '~/components/Navbar.vue';
  import axios from 'axios';
  //import Fortify from "fortify-js";


  export default {
    name: "AddUser",
    data() {
      return {
        username: '',
        regional: '',
        status: '',
        password: '',
        passwordConfirm: '',
      }
    },
    props: {
        id: Number,
    },
    async created() {
        //var field = document.getElementById('password');
        //var confirmField = document.getElementById('confirm');
        //var fortify = new Fortify(field, confirmField);
        let getCookie = document.cookie
        let cookie = getCookie.split("Session=")
        let ulrParams = new URLSearchParams(window.location.search)

        await axios.post('http://localhost:5000/api/v1/getdatauser', {
            cookies: cookie[1],
            id : ulrParams.get('id'),
        }).catch((err) => {
            console.log(err)
        }).then((res) => {
            if (res === undefined) {
                alert("Incorrect Id - "+ulrParams.get('id')+"!!")
            } else{
                if (res.status == 200) {
                    this.username = res.data.data.user_domain
                    this.regional = res.data.data.regional
                    this.status = res.data.data.status
                }
            }
        })
    }, 
    methods: {
        cancel() {
            window.location.href = '/user-management';
        },
        async submitdata() {
            let getCookie = document.cookie
            let cookie = getCookie.split("Session=")
            let ulrParams = new URLSearchParams(window.location.search)
            await axios.post('http://localhost:5000/api/v1/edituser', {
                "username" : this.username,
                "password" : this.password,
                "confirmPassword" : this.passwordConfirm,
                "region" : this.regional,
                "status" : this.status,
                "cookies": cookie[1],
                "id" : ulrParams.get('id'),
            }).catch((err) => {
                console.log(err)
            }).then((res) => {
                if (res === undefined) {
                    alert("Empty data!")
                } else{
                    if (res.status === 200) {
                        window.alert(res.data.message)
                        window.location.href = '/user-management';
                    }
                }
            })
        }
    },
    components: { Navbar}
  } 

  
</script>

<style>
    .button-input{
        margin-top: 35px;
        display: flex;
        flex-wrap: wrap;
        gap: 22px;
        align-items: center;
        justify-content: center;
    }
    
    .input-add{
        width: 95%;
        margin: 10px 10px 48px 10px;
        height: 55px;
        padding: 10px;
        box-sizing: border-box;
        background: #FFFFFF;
        border: 1px solid #7C7D80;
        border-radius: 5px;

        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 700;
        font-size: 20px;
        line-height: 24px;
        color: #b8b9be;

        
    }

    .input-add::before{
        color: rgba(57, 62, 70, 0.2);
    }
    .selectdiv {
        position: relative;
    }
    .img-select {
        position: absolute;
        width: 30px;
        -webkit-transform: rotate(90deg);
        -moz-transform: rotate(90deg);
        -ms-transform: rotate(90deg);
        transform: rotate(90deg);
        right: 40px; 
        /*Adjust for position however you want*/
        
        top: 19px;
        opacity: 40%;
        color: rgba(57, 62, 70, 0.2);
        padding: 0 0 2px;
        pointer-events: none;
    }
    .selectdiv select{
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        /* Add some styling */
        
        line-height: 1.75;
        -ms-word-break: normal;
        word-break: normal;
        color: #b8b9be;
    }
    .input-add option {
        color: #b8b9be;
        height: 55px;
        padding: 10px;
        box-sizing: border-box;
        background: #FFFFFF;
        border: 1px solid #7C7D80;
        border-radius: 5px;

        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 700;
        font-size: 20px;
        line-height: 24px;
    }
    .input-add::-ms-expand {
        display: none;
    }
    .button-add {
        width: 153px;
        height: 52px;
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 700;
        font-size: 20px;
        line-height: 24px;
        align-items: center;
        text-align: center;

        color: #FFFFFF;
    }
    .cancel{
        background: #FF1E1E;
        box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
        border-radius: 5px;
    }
    .save{
        background: #2DC207;
        box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
        border-radius: 5px;
    }
    label {
        margin: 10px 10px 48px 10px;
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        line-height: 29px;

        color: #7C7D80;
    }
    .label-username{
        width: 100%;
    }

    #username{
        background-image: none;
    }
    .form-add {
        position: absolute;
        width: 60%;
        height: 60%;
        left: 20%;
        top: 25%;

        padding: 48px;
        background: #FFFFFF;
        box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.25);
        border-radius: 5px;
    }
    .title-form {
        margin: 0px 0px 30px 0px;
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 700;
        font-size: 25px;
        line-height: 39px;
        display: flex;
        align-items: center;

        color: #000000;
    }
</style>