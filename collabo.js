let allClients=[]
	function getpreviousvalues(){
		if(localStorage.allOfClients){
			 allClient=JSON.parse(localStorage.allOfClients)
		}
	}
	function signup(){
		let newClients={
			firstname:fnam.value,
			surname:snam.value,
			email:emai.value,
			password:pass.value,
		}
		let confirm=confir.value
		let passwo=pass.value
		if(passwo!=confirm){
			intext.innerText=('The passwords inputed are different,Kindly reconfirm the password')
		}
		else if (fnam.value==''||snam.value==''||emai.value==''||pass.value==''||con.value==''){
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
		 	}
	}





//contact book javascript
	allContacts=[]
		 getpreviousvalues=()=>{
			
			i=JSON.parse(localStorage.indexes)
			allClients=JSON.parse(localStorage.allOfClients)
			if(localStorage.allOfContacts){
			 allContacts=JSON.parse(localStorage.allOfContacts)
		}
	}
		 add=()=>{
		
			let newContacts={
				name:nam.value ,
				phonenumber:phone.value,
				email:eMail.value
			}
			if(nam.value==''||phone.value==''){
				innertext.innerText=('Kindly fill in both name and number')
			}
			else{
				innertext.innerText=('Contact added Successfully')
				allContacts.push(newContacts)
			}
			localStorage.allOfContacts=JSON.stringify (allContacts)
			console.log(allContacts)
		}




		 con=()=>{
		
		i=JSON.parse(localStorage.indexes)
		allClients=JSON.parse(localStorage.allOfClients)
		allContacts=JSON.parse(localStorage.allOfContacts)
	
		t='<tr>'
			for (let i = 0; i <allContacts.length; i++) {
				
				t+='<th>'+(i+1) +'</th>'
				t+='<td>'+(allContacts[i].name) + '</td>'
				t+='<td>'+(allContacts[i].phonenumber) + '</td>'
				t+='<td>'+(allContacts[i].email)+ '</td>'
				t+='</tr>'
			}
			
			tab.innerHTML+=t
		
		}