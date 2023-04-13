
document.addEventListener('click', function(e){
    const map = document.querySelector('#map-wrap .map')
        if(e.target.id === 'map-wrap'){
            map.style.pointerEvents = 'all'
        } else {
            map.style.pointerEvents = 'none'
        }    
})