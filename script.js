    function togglemode() {
        const html = document.documentElement
        html.classList.toggle("light")

        
        // pegar a tag img
        const img = document.querySelector("#profile img")
        // substituir a image
        
        if(html.classList.contains('light')) {
        //  se estiver lght mode , adiconar a imagem light
          img.setAttribute('src','assets/vatar-dark.jpg')
        } else {
           
        // se estiver sem light mode, mater a imagem normal
           img.setAttribute('src','assets/Foto dark mode.jpg')
    
         }
  
      
    }