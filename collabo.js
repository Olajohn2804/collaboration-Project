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
			password:pass.value
		}
		var confirmpassword=con.value
		if(pass.value!=con.value){
			intext.innerText=('The passwords inputed are different,Kindly reconfirm the password!')
		}
		else if (fnam.value==''||snam.value==''||emai.value==''||pass.value==''||con.value==''){
			intext.innerText=('Please Kindly input all fields!')
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