const url = "https://jsonplaceholder.typicode.com/users";
const response = await fetch(url);
const u = await response.json();
//console.log("name:", users[0].name);


const ddl_users = document.getElementById('ddl_users');
ddl_users.addEventListener('change',()=>{
   alert(ddl_users.value);
})
u.forEach(u => {

    const option = document.createElement('option');
option.innerHTML = u.name; 
ddl_users.appendChild(option);
});

