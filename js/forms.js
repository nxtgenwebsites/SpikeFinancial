const form = document.querySelector('form');
// const blurSection = document.getElementById('blurSection');
const loadingScreen = document.getElementById('loadingForm');
const successMessage = document.getElementById('successMessage');
const errorMessage = document.getElementById('errorMessage');
const contactSection = document.getElementById('contactSection');

form.addEventListener('submit', function(e) {
    debugger
    e.preventDefault();

    console.log(grecaptcha);
    const captchaResponse = grecaptcha.getResponse();
    if(captchaResponse.length <= 0){
        throw new Error('Captcha invalid');
    }

    // sending mail script
    const formData = new FormData();
    formData.append('access_key', 'c0b19122-c89c-4d5a-b644-d8bd4822b257');
    formData.append('name', document.getElementById('name').value);
    formData.append('email', document.getElementById('email').value);
    formData.append('phone', document.getElementById('phone').value);
    formData.append('subject', document.getElementById('subject').value);
    formData.append('message', document.getElementById('message').value);
    debugger
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    loadingScreen.classList.toggle('d-none');
    form.classList.toggle('d-none');

    fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: json
        })
        .then(async (response) => {
            let json = await response.json();
            if (response.status == 200) {
                //print message to user
            } else {
                console.log('could not send email')
            }
        })
        .catch(error => {
            loadingScreen.classList.toggle('d-none');
            errorMessage.classList.toggle('d-none');
        })
        .then(function() {
            form.reset();
            loadingScreen.classList.toggle('d-none');
            successMessage.classList.toggle('d-none');
        });

    grecaptcha.reset();
    toggleCaptcha();

});



function onCaptchaSuccess(token) {
    console.log(token);
    toggleCaptcha();
  }


  function toggleCaptcha() {
    debugger;
    const captcha = document.querySelector('.g-recaptcha');
    if (captcha) {
      captcha.classList.toggle('d-none');
    }

    // if(blurSection){
    //     blurSection.classList.toggle('d-none');
    // }
  }

  function resetForm(){
    form.classList.remove('d-none');
    errorMessage.classList.add('d-none');
    loadingScreen.classList.add('d-none');
    successMessage.classList.add('d-none');
    grecaptcha.reset();
  }


  function scrollToForm(){
    contactSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
}