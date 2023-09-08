try {
    if (location.pathname === '/') {
        regLogo = document.querySelector('.reg_logo');
        regLogo.addEventListener('click', function() {
        location.reload();
        })
        signUpBtn = document.getElementById('reg_signUp');
        signUpBtn.addEventListener('click', function(){
            alert('registr')
        })
        signInBtn = document.getElementById('reg_signIn');
        signInBtn.addEventListener('click', function() {
            alert('log in')
        })
    } else if (location.pathname === 'template.html') {
        taskBtn = document.getElementById('addTask');
        taskBtn.addEventListener('click', function() {
            modal = document.querySelector('.modal');
            modal.style.display = 'block';
        })

        closeModalBtn = document.getElementById('closeModalBtn');
        closeModalBtn.addEventListener('click', function() {
        modal = document.querySelector('.modal');
        modal.style.display = 'none';
    })
    }
} catch(error) {
    console.log(error)
}
    