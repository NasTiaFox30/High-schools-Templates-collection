// Apply section
const applySection = document.querySelector('.recruitment_info');
    if (applySection) {
        applySection.addEventListener('click', function (event) {
        event.preventDefault();

        applySection.classList.add('hide');
    });
}
const hideFormButton = document.getElementById('close-form');
    if (hideFormButton) {
        hideFormButton.addEventListener('click', function (event) {
        event.preventDefault();

        applySection.classList.remove('hide');
    });
}


document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('recruitment-form');
    const steps = Array.from(document.querySelectorAll('.form-step'));
    const nextButtons = Array.from(document.querySelectorAll('.next-step'));
    const prevButtons = Array.from(document.querySelectorAll('.prev-step'));
    const submitButton = document.querySelector('.submit-form');
    const alternativeOptions = document.querySelector('.alternative-options');
    var close_button = document.getElementById("close-form");
    
    let currentStep = 0;

    // Initialize form
    function showStep(stepIndex) {
        steps.forEach((step, index) => {
            step.classList.remove('active');
            if (index === stepIndex) {
                step.classList.add('active');
            }
        });
        
        // Hide/show 
        if (stepIndex === steps.length - 1) {
            alternativeOptions.style.display = 'block';
        } else {
            alternativeOptions.style.display = 'none';
        }
    }

    // Next button 
    nextButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            const currentStepInputs = steps[currentStep].querySelectorAll('input[required], select[required], textarea[required]');
            let isValid = true;
            
            currentStepInputs.forEach(input => {
                if (!input.value.trim()) {
                    input.classList.add('error');
                    isValid = false;
                } else {
                    input.classList.remove('error');
                }
            });
            
            if (!isValid) {
                return;
            }
            
            if (currentStep < steps.length - 1) {
                currentStep++;
                showStep(currentStep);
                close_button = document.getElementById("close-form");

                if (currentStep >= 2) {
                    close_button.style.display = "none";
                }
                else {
                    close_button.style.display = "block";
                }
            }

            
        });
    });

    // Previous button 
    prevButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            if (currentStep > 0) {
                currentStep--;
                showStep(currentStep);
                close_button = document.getElementById("close-form");

                if (currentStep >= 2) {
                    close_button.style.display = "none";
                }
                else {
                    close_button.style.display = "block";
                }
            }
        });
    });

    // Form submission handler
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Validate all fields before submission
        const allInputs = form.querySelectorAll('input[required], select[required], textarea[required]');
        let isValid = true;
        
        allInputs.forEach(input => {
            if (!input.value.trim()) {
                input.classList.add('error');
                isValid = false;
            } else {
                input.classList.remove('error');
            }
        });
        
        if (!isValid) {
            return;
        }
        

        alert('Formularz został wysłany! Dziękujemy za aplikację.');
        
        // Reset form after submission
        form.reset();
        currentStep = 0;
        showStep(currentStep);
    });

    // Input validation on blur
    form.querySelectorAll('input, select, textarea').forEach(input => {
        input.addEventListener('blur', function() {
            if (this.hasAttribute('required') && !this.value.trim()) {
                this.classList.add('error');
            } else {
                this.classList.remove('error');
            }
        });
    });

    // Initialize the form
    showStep(currentStep);
});