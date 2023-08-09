let cc = 0
let dd = 0
let index = 0
var st = ""
const c = document.getElementById("dead")
const d = document.getElementById("lost")
while (index < 9){
    st="hole"
    index+=1
    st=st+index
    let p = document.getElementById(st)
    p.onclick=() =>{            
        if (p.classList.contains( 'hole_has-mole' )){
            cc+=1
            c.textContent=Number(c.textContent)+1
            if (cc==10){   
                сс=0 
                dd=0                       
                alert('Ура! Вы выиграли!')
                d.textContent=0
                c.textContent=0
            }
           
        } else {
            dd+=1
            d.textContent=Number(d.textContent)+1
            if (dd==5){   
                dd=0 
                cc=0                       
                alert('Вы проиграли!')
                d.textContent=0
                c.textContent=0
            }
        }
    }    
}    
