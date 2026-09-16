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
          console.log('vote dey go jor');
        }else{
          console.log('grow up');
          
        }

      }
    }