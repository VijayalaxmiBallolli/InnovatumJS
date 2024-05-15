const form=document.getElementById('form')
const nameInput=document.getElementById('name')
const emailInput=document.getElementById('email')
const list=document.getElementById('list');

const users=[];

document.addEventListener('DOMContentLoaded',() => {
	const storedUsers=localStorage.getItem('users');
	if (storedUsers) 
	{
		users=JSON.parse(storedUsers);
		renderUsers();
	}
});

form.addEventListener('submit',(e) =>
{
	e.preventDefault();
	addUsers();
});

function addUsers()
{
	const user=
   {
   	id:Date.now(),
   	name:nameInput.value,
   	email:emailInput.value
   };
   user.push(user);
   savedUsers();
   renderUsers();
   form.reset();
}

function renderUsers()
{
	list
}