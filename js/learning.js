document.addEventListener('DOMContentLoaded', function() {
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            tabBtns.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            tabContents.forEach(content => content.classList.remove('active'));
            const tabId = this.getAttribute('data-tab');
            document.getElementById(tabId).classList.add('active');
        });
    });

    const classSelect = document.getElementById('class-select');
    const weekBtns = document.querySelectorAll('.week-btn');
    
    classSelect.addEventListener('change', function() {
        console.log('Вибрано клас:', this.value);
    });
    
    weekBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            weekBtns.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
        });
    });
    
});