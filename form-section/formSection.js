let contactUsFormEl = document.getElementById('contactUsForm')
contactUsFormEl.addEventListener('submit',function(event){
    event.preventDefault()
    submitFormData()
})

let firstNameEl = document.getElementById('firstName');
let firstNameErrorMsgEl = document.getElementById('firstNameErrorMsg')
firstNameEl.addEventListener('blur',function(event){
    if(event.target.value===''){
        firstNameErrorMsgEl.textContent = '*Required'
        firstNameErrorMsgEl.style.color = 'red';
    }else{
        firstNameErrorMsgEl.textContent = '';
    }
    //formData.firstName = event.target.value;
})

let lastNameEl = document.getElementById('lastName');
let lastNameErrorMsgEl = document.getElementById('lastNameErrorMsg')
lastNameEl.addEventListener('blur',function(event){
    if(event.target.value===''){
        lastNameErrorMsgEl.textContent = '*Required'
        lastNameErrorMsgEl.style.color = 'red';
    }else{
        lastNameErrorMsgEl.textContent = '';
    }
    //formData.lastName = event.target.value;
})

let eMailEl = document.getElementById('eMail');
let emailErrorMsgEl = document.getElementById('emailErrorMsg')
eMailEl.addEventListener('blur',function(event){
    if(event.target.value===''){
        emailErrorMsgEl.textContent = '*Required'
        emailErrorMsgEl.style.color = 'red';
    }else{
        emailErrorMsgEl.textContent = '';
    }
    //formData.email = event.target.value;
})

let mobileNumberEl = document.getElementById('mobileNumber');
let mobileNumberErrorMsgEl = document.getElementById('mobileNumberErrorMsg')
mobileNumberEl.addEventListener('blur',function(event){
    if(event.target.value===''){
        mobileNumberErrorMsgEl.textContent = '*Required'
        mobileNumberErrorMsgEl.style.color = 'red';
    }else{
        mobileNumberErrorMsgEl.textContent = '';
    }
    //formData.mobileNumber = event.target.value;
})

let commentsEl = document.getElementById('comments');
let commentsErrorMsgEl = document.getElementById('commentsErrorMsg');
commentsEl.addEventListener('blur',function(event){
    //formData.comments = event.target.value;
})

let checkboxEl = document.getElementById("checkbox");
let checkboxErrorMsgEl = document.getElementById('checkboxErrorMsg');
function submitFormData(){
    if(checkboxEl.checked===true){
        let url = 'http://localhost:3000/Contactus';

        let options = {
            method: 'POST',
            headers:{
                'Content-Type':'Application/json',
                Accept:'Application/json'
            },
            body:JSON.stringify(data)
        };

        fetch(url, options)
        .then(function(response){
            return response.json()
        })
        .then(function(jsonData){
            console.log(jsonData);
        })
    }
    else{
        checkboxErrorMsgEl.textContent = 'Tick the Checkbox before Submitted'
    }
}