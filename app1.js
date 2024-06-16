document.addEventListener('DOMContentLoaded', function() {
    const tabs = document.querySelectorAll('.dropdown-content a');
    const popups = document.querySelectorAll('.popup');
    const closeButtons = document.querySelectorAll('.close');
  
    tabs.forEach(tab => {
      tab.addEventListener('click', function(event) {
        event.preventDefault();
        const popupId = this.getAttribute('data-popup');
        document.getElementById(popupId).style.display = 'block';
      });
    });
  
    closeButtons.forEach(button => {
      button.addEventListener('click', function() {
        this.closest('.popup').style.display = 'none';
      });
    });
  
    window.addEventListener('click', function(event) {
      popups.forEach(popup => {
        if (event.target === popup) {
          popup.style.display = 'none';
        }
      });
    });
  });
  