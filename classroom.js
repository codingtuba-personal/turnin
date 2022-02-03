console.log("classroom")
setInterval(()=>{
    if(location.pathname.endsWith("/all")){
        document.querySelectorAll("a[href*='https://docs.google.com/']").forEach(e=>{
            let parrentLI=e;
            try{while(parrentLI.tagName!="LI"||parrentLI.tagName=="BODY") parrentLI=parrentLI.parentElement}catch(_e){}
            try{
                if(parrentLI.tagName=="LI"){
                    let querySelector="li."+parrentLI.className.replaceAll(' ','.')
                    let href=document.querySelector(querySelector+" a[href*='/details']").href
                    if(document.querySelector(querySelector+" a[href*='/details']").getAttribute("aria-label").includes("assignment")&&!e.href.includes(href.replaceAll("/",";"))){
                        e.href+="&tuba-ti="+href.replaceAll("/",";")
                        e.href=e.href.replaceAll("?usp=drive_web&","?")
                        let replace_element=document.createElement("a")
                        replace_element.style.fontFamily="'Google Sans',Roboto,Arial,sans-serif"
                        replace_element.style.color="#3c4043"
                        replace_element.style.letterSpacing=".01785714em"
                        replace_element.style.fontSize="0.875rem"
                        replace_element.style.cursor="pointer"
                        replace_element.href=e.href
                        try{replace_element.innerHTML=`${e.children[1].children[0].innerHTML} - ${e.children[1].children[1].children[0].innerHTML}`}
                        catch(_e){replace_element.innerHTML=`${e.children[3].innerHTML}`}
                        replace_element.target="_blank"
                        e.parentElement.replaceWith(replace_element)
                    }
                }
            }catch(e){}
        })
    }else if(location.pathname.endsWith("/details")){
        document.querySelectorAll("a[href*='https://docs.google.com']").forEach(e=>{
            if(!e.href.includes(location.href.replaceAll("/",";"))){
                e.href+="&tuba-ti="+location.href.replaceAll("/",";")
                e.href=e.href.replaceAll("?usp=drive_web&","?")
                let replace_element=document.createElement("a")
                replace_element.style.fontFamily="'Google Sans',Roboto,Arial,sans-serif"
                replace_element.style.color="#3c4043"
                replace_element.style.letterSpacing=".01785714em"
                replace_element.style.fontSize="0.875rem"
                replace_element.style.cursor="pointer"
                replace_element.href=e.href
                try{replace_element.innerHTML=`${e.children[1].children[0].innerHTML} - ${e.children[1].children[1].children[0].innerHTML}<br>`}
                catch(_e){replace_element.innerHTML=`${e.children[3].innerHTML}`}
                replace_element.target="_blank"
                e.parentElement.replaceWith(replace_element)
            }
        })
        }
},100)