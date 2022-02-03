let __dummy={
    inserted:false,
    options:false,
}
if(getCookie("tuba-ti-bgcolor")==''||!getCookie("tuba-ti-bgcolor")){
    setCookie("tuba-ti-bgcolor","#ffff00",99999)
    setCookie("tuba-ti-color","#000000",99999)
    setCookie("tuba-min","no",99999)
}
setInterval(()=>{
    try{
        if(document.querySelector(".tuba-ti-color")){
            setCookie("tuba-ti-color",document.querySelector(".tuba-ti-color").value,99999)
            setCookie("tuba-ti-bgcolor",document.querySelector(".tuba-ti-bgcolor").value,99999)
        }
        document.querySelector(".tuba-ti").style.backgroundColor=getCookie("tuba-ti-bgcolor");
        document.querySelector(".tuba-ti").style.color=getCookie("tuba-ti-color")
        if(__dummy.options==false&&document.querySelector(".tuba-ti")){
            __dummy.options=true
            tuba_options()
        }
        document.querySelector(".tuba-ti-options").onchange=()=>{
            let _e=document.querySelector(".tuba-ti-options")
            if(_e.value==1){
                document.querySelector(".tuba-ti-bgcolor").style.display="initial"
                document.querySelector(".tuba-ti-bgcolor").style.width="30px"
                document.querySelector(".tuba-ti-bgcolor").style.height="30px"
                document.querySelector(".tuba-ti-color").style.display="none"
                document.querySelector(".tuba-ti-color").style.width="0px"
                document.querySelector(".tuba-ti-color").style.height="0px"
            }else if(_e.value==2){
                document.querySelector(".tuba-ti-color").style.display="initial"
                document.querySelector(".tuba-ti-color").style.width="30px"
                document.querySelector(".tuba-ti-color").style.height="30px"
                document.querySelector(".tuba-ti-bgcolor").style.display="none"
                document.querySelector(".tuba-ti-bgcolor").style.width="0px"
                document.querySelector(".tuba-ti-bgcolor").style.height="0px"
            }else if(_e.value==3){
                setCookie(
                    "tuba-min",
                    getCookie("tuba-min")=="yes"?"no":"yes",
                    99999
                )
                document.querySelector(".tuba-ti-options").remove()
                tuba_options()
            }
            _e.value="0"
        }
    }catch(e){}
    if(new URLSearchParams(location.search).get("tuba-ti")&&(document.querySelector(".punch-start-presentation-container")||document.querySelector("#docs-script-button-bar > div"))&&__dummy.inserted==false){
        console.log("a")
        __dummy.inserted=true
        if(document.querySelector("#docs-script-button-bar > div")){
            document.querySelector("#docs-script-button-bar > div").innerHTML=""
            document.querySelector("#docs-script-button-bar > div").outerHTML="<span class='punch-start-presentation-container'></span>"
        }
        let e=document.querySelector(".punch-start-presentation-container");
        e.outerHTML=`
            <div id="docs-script-button-bar" class="goog-inline-block tuba-ti-expand">
                <a target="_blank" href="${new URLSearchParams(location.search).get("tuba-ti").replaceAll(";","/")}?ti=1" style="text-decoration:none">
                    <div 
                        role="button" 
                        class="goog-inline-block jfk-button jfk-button-standard docs-titlebar-button tuba-ti" 
                        tabindex="0" 
                        style="user-select: none;background-color:${getCookie("tuba-ti-bgcolor")};color:${getCookie("tuba-ti-color")}"
                    >
                        Turn In
                    </div>
                </a>
            </div>
        `+e.outerHTML
    }
},100)

function tuba_options(){
    document.querySelector(".tuba-ti-expand").outerHTML=`<select style="background-color:white;border:none;outline:none;font-size:20px;width:${getCookie("tuba-min")=="yes"?"12":"30"}px;height:30px${getCookie("tuba-min")=="yes"?"":";appearance: none"};margin-left:5px" class="tuba-ti-options">
        <option value="0">${getCookie("tuba-min")=="yes"?"":"⬇️"}</option>
        <option value="1">edit background</option>
        <option value="2">edit text colour</option>
        <option value="3">${getCookie("tuba-min")=="yes"?"maximize":"minimize"}</option>
    </select>
    <input type=color style="width:0px;height:0px;display:none;border:none;background-color:transparent;" class="tuba-ti-bgcolor" value="${getCookie("tuba-ti-bgcolor")}">
    <input type=color style="width:0px;height:0px;display:none;border:none;background-color:transparent;" class="tuba-ti-color" value="${getCookie("tuba-ti-color")}">`+document.querySelector(".tuba-ti-expand").outerHTML
}

// "borrowed" from w3schools
function setCookie(cname,cvalue,exdays) {  var d = new Date();  d.setTime(d.getTime() + (exdays*24*60*60*1000));  var expires = 'expires=' + d.toGMTString();  document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/';}function getCookie(cname) {  var name = cname + '=';  var decodedCookie = decodeURIComponent(document.cookie);  var ca = decodedCookie.split(';');  for(var i = 0; i < ca.length; i++) {    var c = ca[i];    while (c.charAt(0) == ' ') {      c = c.substring(1);    }    if (c.indexOf(name) == 0) {      return c.substring(name.length, c.length);    }  }  return '';}