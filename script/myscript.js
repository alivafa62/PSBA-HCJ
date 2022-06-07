let bootstarplink;
let link;
    function loadsheet(){
        bootstarplink = document.createElement("link");
        bootstarplink.setAttribute("rel","stylesheet");
        bootstarplink.setAttribute("href","https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css");
        bootstarplink.setAttribute("intergrity","sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk");
        bootstarplink.setAttribute("crossorigin", "anonymous");

        link = document.createElement("link");
        link.setAttribute("rel", "stylesheet");
        
        link.setAttribute("type", "text/css");
        link.setAttribute("href", "../css/lackpage.css");
        let header = document.getElementsByTagName("head")[0];
        
        header.appendChild(bootstarplink);
        header.appendChild(link);
    }
    function deletesheets(){
        let header = document.getElementsByTagName("head")[0];
        header.removeChild(link)
        header.removeChild(bootstarplink)

    }




function sum(){
    let s = document.getElementById("sums").value;
    let array =[];
    array = s.split(' ');
    let res =0;
    for (let i =0; i < array.length; i++){
        res = res + parseInt(array[i]);
    }
    document.getElementById("boxout").innerHTML= res;
}
function bday(){
    let message = document.createElement('h3');
    let div = document.getElementById('s.message');

    let str  = window.location.search;

    const urlParams = new URLSearchParams(str);
    const name = urlParams.get('name');
    const age = urlParams.get('age');
    console.log("name = "+name)
    
    
    let messageage='';

    if(name === null || age === null || name =="" ||age==""){
        let txt = document.createTextNode("Missing input go back and enter missing input");
        message.appendChild(txt);
        div.appendChild(message);
        return;
    }
    let tempnum = age.length-1;
    let subleter= age.charAt(tempnum);
    switch(subleter){
        case '0':
            messageage= age + "th";
            break;
        case '1':
            messageage=age + "st";
            break;
        case '2':
            messageage=age + "nd";
            break;
        case '3':
            messageage= age + "rd";
            break
        case '4':
            messageage=age + "th";
            break
        case '5':
            messageage=age + "th";
            break
                       
        case '6':
            messageage=age + "th";
            break
        case '7':
            messageage=age + "th";
        case '8':
            messageage=age + "th";
            break
        case '9':
            messageage=age + "th";
            break

        
    }
    
    let txt = document.createTextNode("Happy "+ messageage +" Birth Day " + name);
    

    message.appendChild(txt);
    div.appendChild(message);
}
    
function isapalnoschars(){
    let div = document.getElementById("functionbody");
    let format = /[ `!@#$%^&*()_+\-=\[\]{};:"\\|,.<>\/?~]/;
    let hasNumber = /\d/;
    let str  = window.location.search;
    const urlParams = new URLSearchParams(str);
    const word = urlParams.get("name");
    let message = document.createElement('h3');
    
    if(word === null || word ==''){
        let txt = document.createTextNode("No input detected, enter a word");
        message.appendChild(txt);
        div.appendChild(message);
        return;
    }
    if(format.test(word)|| hasNumber.test(word)){
        
        let txt = document.createTextNode("The word: " + word + " is invalid, it contains speical charcters or numbers");
        message.appendChild(txt);
        div.appendChild(message);
    
        return;
    }else{
   
       
        let str = word.toLowerCase().replace(/[^a-z]+/g,"");
        if(str === str.split("").reverse().join("")){
            let txt = document.createTextNode("The word: " + word + " is valid and is a Palindrone");
        message.appendChild(txt);
        div.appendChild(message);
        }
        else{
            let txt = document.createTextNode("The word: " + word + " is valid, but it is not a paolindrone");
        message.appendChild(txt);
        div.appendChild(message);
        return;
        }
        
    }

    
}