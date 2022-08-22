const service = document.getElementById('service');
const serviceList = document.getElementById('service-list');

service.addEventListener("click",function(){

    if(serviceList.classList.contains('show')){
        serviceList.classList.remove('show');
    }
    else{
        serviceList.classList.add('show');
    }
});

const tool=document.getElementById('tool');

