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