const form = document.querySelector('form')

form.addEventListener('click', function(e){
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const result = document.querySelector('#results')
    
    if (height === 0  || height < 0 || isNaN(height)  ) {
        result.innerHTML = `Enter the valid height ${height}`;
    }else if (weight === 0  || weight < 0 || isNaN(weight)  ) {
        result.innerHTML = `Enter the valid height ${weight}`;
    }else {
      const  bmi = (weight / ((height * height) / 10000)).toFixed(2);
       result.innerHTML = `<span>${bmi}<span>`;

        
    if (bmi <= 18.6 ) {   
        document.querySelector('#criteria').innerHTML= "Under Weight = Less than 18.6"
    

   }else if(bmi > 18.6 && bmi <= 24.9){
       
    
     document.querySelector('#criteria').innerHTML=  "Normal Range = 18.6 and 24.9"
   
     
   }else {
      
   
     document.querySelector('#criteria').innerHTML=  "Overweight = Greater than 24.9"
    
     
   }
 }

});

// const para1 = document.querySelectorAll('p:nth-child(1)')
// const para2 = document.querySelectorAll('p:nth-child(2)')
// const para3 = document.querySelectorAll('p:nth-child(3)')



