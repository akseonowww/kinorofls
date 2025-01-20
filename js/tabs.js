document.addEventListener('DOMContentLoaded', () => {
   const tabList = document.querySelector('.tabs-nav');
   const tabs = tabList.querySelectorAll('.tab-button');
   const panels = document.querySelectorAll('.tab-panel');
   const indicator = document.querySelector('.tabs-indicator');

   const setIndicatorPosition = (tab) => {
       indicator.style.transform = `translateX(${tab.offsetLeft}px)`;
       indicator.style.width = `${tab.offsetWidth}px`;
   };

   // Set initial indicator position
   setIndicatorPosition(tabs[0]);

   tabs.forEach((tab) => {
       tab.addEventListener('click', (e) => {
           const targetTab = e.target;
           const targetPanel = document.querySelector(
               `#${targetTab.getAttribute('aria-controls')}`
           );

           // Update tabs
           tabs.forEach((tab) => {
               tab.setAttribute('aria-selected', false);
               tab.classList.remove('active');
           });
           targetTab.setAttribute('aria-selected', true);
           targetTab.classList.add('active');

           // Update panels
           panels.forEach((panel) => {
               panel.setAttribute('aria-hidden', true);
           });
           targetPanel.setAttribute('aria-hidden', false);

           // Move indicator
           setIndicatorPosition(targetTab);
       });
   });

   // Keyboard navigation
   tabList.addEventListener('keydown', (e) => {
       const targetTab = e.target;
       const previousTab = targetTab.previousElementSibling;
       const nextTab = targetTab.nextElementSibling;

       if (e.key === 'ArrowLeft' && previousTab) {
           previousTab.click();
           previousTab.focus();
       }
       if (e.key === 'ArrowRight' && nextTab) {
           nextTab.click();
           nextTab.focus();
       }
   });
});