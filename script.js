let url = "https://reqres.in/api/users/5";
let fullname = document.querySelector('.user-fullname');
let email = document.querySelector('.user-email');
let img = document.querySelector('.user-img');
// Axios basic promise
// const apiUrl = "https://reqres.in/api/users/5";
// axios.get(apiUrl).then((res) => {
//   const user = res.data.data;
//    img.src = user.avatar;
//    fullname.innerHTML = user.first_name + " " + user.last_name;
//    email.innerHTML = user.email;
// }).catch((e) => {

//       console.log(`e`, e);
//    });

// 
const getUser = async() =>{
try{
    const reponse =await axios.get(url);
    const user =reponse.data.data;

 img.src=user.avatar;

    fullname.innerHTML=user.first_name +" " +user.last_name ;
   email.innerHTML=user.email;
}
catch (e){
console.log(`e`,e);
}
};


getUser();
