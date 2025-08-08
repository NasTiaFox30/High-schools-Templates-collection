// Profiles Tabs animation
document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', function() {
        const activeTab = document.querySelector('.tab.active');
        if (activeTab) {
            activeTab.classList.remove('active');
        }
        this.classList.add('active');

        const tabContentId = this.getAttribute('data-tab') + '-content';
        const activeContent = document.querySelector('.tab-content.active');
        if (activeContent) {
            activeContent.classList.remove('active');
        }
        document.getElementById(tabContentId).classList.add('active');
    });
});

// Apply section
const applyButton = document.getElementById('apply-button');
const applySection = document.querySelector('.apply-form');
if (applyButton) {
    applyButton.addEventListener('click', function(event) {
        event.preventDefault();
        if (applySection) {
            applySection.classList.toggle('show');
        } else {
            console.warn("Apply section not found.");
        }
    });
}