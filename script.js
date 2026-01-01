let p = document.querySelector('p')
let str = p.innerText
let charac = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz123456789"

p.addEventListener('mouseenter',()=>{
  let num = -1
    let jadu = setInterval(()=>{


        let newstr =  str.split('').map((val,index)=>{
            if(index<num){
                return val
            }
            return (charac.split("")[
              Math.floor(Math.random() * 62)
            ]);
        }).join('')
        
        
        p.innerHTML = newstr
      
        num += 0.2
    },50)

   
    
})

