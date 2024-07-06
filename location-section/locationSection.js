let northAmericaEl = document.getElementById('northAmerica');
let americaOfficesEl = document.getElementById('americaOffices')

let europeEl = document.getElementById('europe');
let europeOfficesEl = document.getElementById("europeOffices")

let asiaEl = document.getElementById('asia');
let asiaOfficesEl = document.getElementById("asiaOffices")

let middleEastEl = document.getElementById('middleEast');
let middleEastOfficesEl = document.getElementById("middleEastOffices")


europeEl.addEventListener('click',function(){
    if(europeOfficesEl.hasAttribute('hidden')){
        europeOfficesEl.removeAttribute('hidden');
        europeEl.classList.add('location-img-card')
    }

    if(!americaOfficesEl.hasAttribute('hidden')){
        americaOfficesEl.setAttributeNode(document.createAttribute("hidden"));
        northAmericaEl.classList.remove('location-img-card')
    }

    if(!asiaOfficesEl.hasAttribute('hidden')){
        asiaOfficesEl.setAttributeNode(document.createAttribute("hidden"));
        asiaEl.classList.remove('location-img-card')
    }

    if(!middleEastOfficesEl.hasAttribute('hidden')){
        middleEastOfficesEl.setAttributeNode(document.createAttribute("hidden"));
        middleEastEl.classList.remove('location-img-card')
    }

})



asiaEl.addEventListener('click',function(){
    if(asiaOfficesEl.hasAttribute('hidden')){
        asiaOfficesEl.removeAttribute('hidden')
        asiaEl.classList.add('location-img-card')
    }

    if(!americaOfficesEl.hasAttribute('hidden')){
        americaOfficesEl.setAttributeNode(document.createAttribute("hidden"));
        northAmericaEl.classList.remove('location-img-card')
    }

    if(!europeOfficesEl.hasAttribute('hidden')){
        europeOfficesEl.setAttributeNode(document.createAttribute("hidden"));
        europeEl.classList.remove('location-img-card')
    }

    if(!middleEastOfficesEl.hasAttribute('hidden')){
        middleEastOfficesEl.setAttributeNode(document.createAttribute("hidden"));
        middleEastEl.classList.remove('location-img-card')
    }
})

middleEastEl.addEventListener('click',function(){
    if(middleEastOfficesEl.hasAttribute('hidden')){
        middleEastOfficesEl.removeAttribute('hidden')
        middleEastEl.classList.add('location-img-card')
    }

    if(!americaOfficesEl.hasAttribute('hidden')){
        americaOfficesEl.setAttributeNode(document.createAttribute("hidden"));
        northAmericaEl.classList.remove('location-img-card')
    }

    if(!europeOfficesEl.hasAttribute('hidden')){
        europeOfficesEl.setAttributeNode(document.createAttribute("hidden"));
        europeEl.classList.remove('location-img-card')
    }

    if(!asiaOfficesEl.hasAttribute('hidden')){
        asiaOfficesEl.setAttributeNode(document.createAttribute("hidden"));
        asiaEl.classList.remove('location-img-card')
    }
})

northAmericaEl.addEventListener('click',function(){
    if(americaOfficesEl.hasAttribute('hidden')){
        americaOfficesEl.removeAttribute('hidden')
        northAmericaEl.classList.add('location-img-card')
    }

    if(!middleEastOfficesEl.hasAttribute('hidden')){
        middleEastOfficesEl.setAttributeNode(document.createAttribute("hidden"));
        middleEastEl.classList.remove('location-img-card')
    }

    if(!europeOfficesEl.hasAttribute('hidden')){
        europeOfficesEl.setAttributeNode(document.createAttribute("hidden"));
        europeEl.classList.remove('location-img-card')
    }

    if(!asiaOfficesEl.hasAttribute('hidden')){
        asiaOfficesEl.setAttributeNode(document.createAttribute("hidden"));
        asiaEl.classList.remove('location-img-card')
    }
})
