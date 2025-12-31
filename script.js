let p = document.querySelector('p')
let str = p.innerText
let charac = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz123456789"

p.addEventListener('mouseenter',()=>{
  
    let jadu = setInterval(()=>{

        let a = Math.floor(Math.random() * 256)

        let newstr =  str.split('').map((val)=>{
            return (charac.split("")[
              Math.floor(Math.random() * 62)
            ]);
        }).join('')


         p.innerHTML = newstr
        
        
    },50)

    // setTimeout(function(){
    //     clearInterval(jadu)

       
    // },1000)
    
})

