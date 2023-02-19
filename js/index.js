

const markAllAsReadBtn  = document.getElementById('btn')
const messages = document.querySelectorAll('.message')
const count = document.querySelector('.count')

markAllAsReadBtn.addEventListener('click' , ()=>{

    messages.forEach((message) =>{
        if(message.classList.contains('unread')){
            message.classList.remove('unread')
        }
    })

    count.textContent = 0;



})