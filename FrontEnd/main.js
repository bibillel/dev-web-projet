// const { forEach } = require("lodash")

// const { categories } = require("../Backend/models")
let allwork = []
 function Displaywork(works){

        const gallery = document.querySelector('.gallery')
        gallery.innerHTML = ''
        
        works.forEach(work => {
            const figure = document.createElement('figure')
            const   img = document.createElement('img')
            const   figcaption = document.createElement('figcaption')
            figcaption.textContent = work.title
            img.src = work.imageUrl
            figure.appendChild(figcaption)
            figure.appendChild(img)
            gallery.appendChild(figure)
            // create image 
            // create figcaption 
            // everything goes in figure
            //  figure goes in gallery
        })
    }

fetch('http://localhost:5678/api/works')
    .then(response => response.json())
    .then(works => {
        allwork = works
       Displaywork(works)
    })
fetch('http://localhost:5678/api/categories')
    .then ( resp => resp.json())
    .then (categories => {
        const filters  = document.querySelector('.filters')
        const Tous = document.createElement('button')
        Tous.textContent = 'Tous'
        filters.appendChild(Tous)
        Tous.addEventListener ('click', () => {
            Displaywork(allwork)
        })
        categories.forEach ( category => {
            const button = document.createElement('button')
            button.textContent = category.name
            filters.appendChild(button)
            button.addEventListener('click', () => {
            const worksfiltered = allwork.filter(work => work.categoryId === category.id)
             Displaywork(worksfiltered)
        })
        })
     
       
    })
    if (localStorage.getItem('token')) {
        document.querySelector('#editor-mode').style.display = 'flex'
        document.querySelector('#login').textContent = 'logout' 
    }