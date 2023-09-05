taskBtn = document.getElementById('addTask')
taskBtn.addEventListener('click', function() {
    modal = document.querySelector('.modal');
    modal.style.display = 'block';
})

closeModalBtn = document.getElementById('closeModalBtn');
closeModalBtn.addEventListener('click', function() {
    modal = document.querySelector('.modal');
    modal.style.display = 'none';
})