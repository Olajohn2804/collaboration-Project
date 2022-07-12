let allClients=[]
	function getpreviousvalues(){
		if(localStorage.allOfClients){
			 allClients=JSON.parse(localStorage.allOfClients)
		}
	}
	function signup(){
		let newClients={
			firstname:fnam.value,
			surname:snam.value,
			email:emai.value,
			password:pass.value,
			allContacts:[]	
		}
		let confirm=confir.value
		let passwo=pass.value
		if(passwo!=confirm){
			intext.innerText=('The passwords inputed are different,Kindly reconfirm the password')
		}
		else if (fnam.value==''||snam.value==''||emai.value==''||pass.value==''||confir.value==''){
			intext.innerText=('Please Kindly input all fields')
		}else{
			allClients.push(newClients)
			location.assign('signin.html')
		}
		localStorage.allOfClients=JSON.stringify (allClients)
		console.log(allClients)

	}


function signin(){
		 Email=emai.value
		 Password=pass.value
		var found =false
		 allClients=JSON.parse(localStorage.allOfClients)
		 for (let i = 0; i<allClients.length ; i++) {
		 	if(Email==allClients[i].email && Password==allClients[i].password){
		 		localStorage.indexes=JSON.stringify(i)
		 		var found=true
		 	}
		 }
		 if (found==false){
		 		incorrect.innerText=('Invalid Email or Invalid Password')
		 	}else{
		 		location.assign('dashboard.html')
		 		emai.value=''
		 		pass.value=''
		 	}
	}
	console.log(allClients)


		// sign in ends
	// dashboard javascript begins
	greetings = () => {
		i=JSON.parse(localStorage.indexes)
		allClients = JSON.parse(localStorage.allOfClients)
		infos.innerText = `Hello ${allClients[i].firstname}, Welcome to your  dashboard`
		userInfo.innerText= `Hello, ${allClients[i].firstname}`
		console.log(allClients)
	}
// dashboard ends



//contact book javascript
 	allContacts=[]
 		 getpreviousvalue=()=>{
			
 			i=JSON.parse(localStorage.indexes)
 			currentClientContact=JSON.parse(localStorage.allOfClients)[i].allContacts
 			if(currentClientContact){
 			 allContacts=currentClientContact
 			}
 	}
 		 add=()=>{
 		i=JSON.parse(localStorage.indexes)
 			allClients=JSON.parse(localStorage.allOfClients)
 			let newContacts={
 				name:nam.value ,
 				phonenumber:phone.value,
 				email:eMail.value
 			}
 			if(nam.value==''||phone.value==''){
 				innertext.innerText=('Kindly fill in both name and number')
 			}
 			else{	
 				allContacts.push(newContacts)
 				allClients[i].allContacts = allContacts
 				localStorage.allOfClients = JSON.stringify(allClients);
 				nam.value=''
 				phone.value=''
 				eMail.value=''
 				innertext.innerText=('Contact added Successfully')
 			}
 			(localStorage.allOfClients)[i].allContacts=JSON.stringify(currentClientContact)
 		}



 		 const contactlist = ()=>{
	i=JSON.parse(localStorage.indexes)
 	currentClientContact=JSON.parse(localStorage.allOfClients)[i].allContacts
    currentClientContact.map((item,i)=>{
        tab.innerHTML += `<tr><th>(${i+1}) </th>
 				<td>${currentClientContact[i].name}  </td>
 				<td>${currentClientContact[i].phonenumber} </td>
 				<td>${currentClientContact[i].email}</td>
 				<td><button onclick="Delete(${i})">Delete </button></td>
 				</tr>`
    })
}
 		
 

const Delete = (inde)=>{
	i=JSON.parse(localStorage.indexes)
	currentClientContact=JSON.parse(localStorage.allOfClients)[i].allContacts
    let filteredArray =currentClientContact.filter((item,ind)=>inde!=ind)
     currentClientContact = filteredArray
     (localStorage.allOfClients)[i].allContacts=JSON.stringify(currentClientContact)
    tab.innerHTML =""
    contactlist()
    console.log(filteredArray)
    console.log(currentClientContact)
}






// to-do javascripts begins
	var todoArray = [];
	addTodo = ()=> {
		if(todoInput.value == ""){
			alert("enter a value")
		}else{
			let userTodo = todoInput.value;
			todoItem = {item:userTodo, done:false};
			todoArray.push(todoItem);
			todoInput.value = "";	
			showTodos();
		}
	}
 
	showTodos = ()=> {
		 todoInfo = "";
		 for(i=0;i<todoArray.length;i++){
			if(todoArray[i].done){
				todoInfo += `<div class="shadow p-3 mb-1 text-success">${todoArray[i].item}<button class="float-end btn btn-success btn-sm">DONE</button></div>`;
			}else{
			todoInfo += `<div class="shadow p-3 mb-1 text-danger">${todoArray[i].item}<button class="float-end btn-danger btn-sm" onclick="markDone(${i})">MARK AS DONE</button></div>`;
			}
		 }
		 displayTodo.innerHTML = todoInfo;
		 showCount();
	}
	showCount = ()=>{
		let pending = todoArray.filter(todo => !todo.done)
		taskCount.innerHTML = pending.length;
	}
	clearTodo = ()=>{
		todoArray = [];
		showTodos();
	}
	markDone = (index)=>{
		todoArray[index].done = true;
		// console.log(todoArray[index])
		showTodos();
	}
// to-do javascripts ends


