    //MODAL ITEMS:

    const modal = document.getElementById('email-modal');
    const openBtn = document.querySelector('.Wbutton');
    const closeBtn = document.querySelector('.close-btn');
    const body = document.querySelector('.body');

    //Click Events:

    openBtn.addEventListener('click', () => {
      modal.style.display = 'block';

      document.body.classList.add("stop-scrolling");
      

    });

    closeBtn.addEventListener('click',() =>{
      modal.style.display = 'none';
      document.body.classList.remove("stop-scrolling");

    });

    window.addEventListener('click',(e) =>{
        if (e.target === modal){
          modal.style.display = 'none';
          document.body.classList.remove("stop-scrolling");
        };  
    });