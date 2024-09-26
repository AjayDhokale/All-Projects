let codes = document.querySelectorAll('.code');
const btn = document.querySelector('.btn-submit');
const verifyBtn = document.querySelector('#verify-otp');
let generatedOtp = createOtp();
let items = [];
let processedItems = '';


function createOtp() {
    let myotp = '';
    for (let i = 0; i < 6; i++) {
        myotp += Math.floor(Math.random() * 10);
    }
    console.log("Generated OTP:", myotp);
    return myotp;
}

btn.addEventListener('click', (e) => {
    e.preventDefault();
    createEmail();
});

function createEmail() {
    const email = document.querySelector('.email').value;
    const subject = encodeURIComponent("Your OTP Code");
    const body = encodeURIComponent(`Your OTP is: ${generatedOtp}`);
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}&body=${body}`;
    window.open(gmailUrl, '_blank');
}

codes[0].focus();

codes.forEach((code, idx) => {
    code.addEventListener('keydown', (e) => {
        if (e.key >= 0 && e.key <= 9) {
            codes[idx].value = '';
            setTimeout(() => {
                    codes[idx + 1].focus();
            }, 10);
        } else if (e.key === 'Backspace') {
            setTimeout(() => {
                    codes[idx - 1].focus();
            }, 10);
        }
    });
});


codes.forEach(input => {
    input.addEventListener('input', () => {
        items = [];

        codes.forEach(input => {
            if (input.value) {
                items.push(input.value);
            }
        });

        if (items.length === codes.length) {
            console.log("Entered OTP:", items);
            processedItems = handleItems(items);
        }
    });
});

function handleItems(val1) {
    return val1.join('');
}

verifyBtn.addEventListener('click', () => {
    console.log("Entered OTP for verification:", processedItems);
    if (processedItems === generatedOtp) {
        
        const success = document.createElement('div')
        success.classList.add('popup')
        success.innerHTML =   `
                          
        <h1 class="succ">Verification Done Successfully</h1>
    
        `
        document.body.appendChild(success)

        setTimeout(() => {
           document.body.removeChild(success)
        }, 2000)

   

    } else {
       
        const success = document.createElement('div')
        success.classList.add('popup')
        success.innerHTML =   `
                          
        <h1 class="fail">Verification Failed</h1>
    
        `
        document.body.appendChild(success)

        setTimeout(() => {
           document.body.removeChild(success)
        }, 2000)



    }
});
