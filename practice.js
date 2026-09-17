 function checkEligibility(){
        let userDate = document.getElementById('userInput').value;
        let displayArea =  document.getElementById('show');
        if(userDate == ''){
          alert('input should not be empty')
      }else {
        let birthDate = Number(userDate);
        let currentYear = new Date().getFullYear()
        let age = currentYear - birthDate;
        if(age >= 18){
          // console.log('vote dey go jor');
          displayArea.innerHTML = `<p class="text-success">You are eligible to vote, carry on</p>`
          
        }else{
          // console.log('grow up');
          displayArea.innerHTML = `<p class="text-danger">You are not eligible to vote, grow up fast you have ${18 - age}years to vote</p>`
          
        }

      }
    }


    if(gpa == 4.5 && gpa == 5.0){

    }