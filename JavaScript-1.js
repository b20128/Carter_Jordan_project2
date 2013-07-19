//Jordan Carter
//java script page for project 2
//Visual Frameworks 1307
// 7/18/2013

window.addEventListener("DOMContentLoaded",function(){
    alert(localStorage.value(0))
    
    //getElementById function
    function $(x) {
        var formInfo = document.getElementById(x);
        return formInfo;
    }
    //create selectfield element and populate with options
    function simpFunc(){
        var formTag = document.getElementsByTagName("form"),
            selectLi = $('select'),
            makeSelect = document.createElement('select');
            makeSelect.setAttribute("id","groups");
        for(var i = 0, j= ItWasA.length; i<j; i++) {
            var makeOption= document.createElement('option');
            var optText = ItWasA[i];
            makeOption.setAttribute("value", optText);
            makeOption.innerHTML = optText;
            makeSelect.appendChild(makeOption);
        }
        selectLi.appendChild(makeSelect);
    }
    
//find the value of selected radio button
    function getSelectedRadio() {
        var radios = document.forms[0].secrt;
        for (var i=0; i<radios.length;i++) {
            if (radios[i].checked) {
                privilegedValue=radios[i].value;
            }
            
        }
    }
//find checkbox value    
    function getCheckboxValue() {
        if ($('remember').checked) {
            rememberValue= $('remember').value
        }else{
            rememberValue= "no"
        }
    }
    function saveFormInfo() {
        var id          = math.floor(Math.random()*100000001);
        //gather up our values in an object.
        //object properties cotain an array w/ form lable and inputs.
        getSelectedRadio();
        getCheckboxValue();
        var item            = {};
            item.ItWasA     = ["What it was",$('ItWasA').value];
            item.specifics  = ["Any Specifics", $('specifics').value];
            item.important  = ["Level of Importance",$('importance').value];
            item.privileged = ["How Privileged Is This Info?",privilegedValue];
            item.remember   = ["I Remember?", rememberValue];
            item.indepth    = ["Tell Me More", $('indepth').value];
        //save data to local storage. Use stringafy to convert our objects to a string
        localStorage.setItem(id, JSON.stringify(item));
        alert("ok, got it!");
        
    }
    function displayData() {
        var MakeDiv = doctument.createElement('div');
        makeDiv.setAttribute("id","items");
        var makeList= document.createElement('ul');
        makeDiv.appendChild(makeList);
        document.body.appendChild(makeDiv)
        for (var i = 0, len=localStorage.length;i<len;i++) {
            var makeLi = document.createElement('li');
            makeList.appendChild(makeLi);
            var key = localStorage.key(i);
            var value = localStorage.getItem(key);
            var obj = JSON.parse(value));
            var makeSubList= document.createElement('ul');
            makeli.appendChild(makeSubList);
            for(var n in obj)) {
                var makeSubli = document.createElement('li');
                makeSubList.appendChild(makeSubli);
                var optSubText = obj[n][0+" "+obj[n][1];
                makeSubli.innerHTML = optSubText;
                
            }
        }
    }
    var itWasA = ["--what was it?--", "Dream","Idea","song", "Not Sure"],
    privilegedValue,
    rememberValue = "No"
;
    simpFunc();
    
    
    //set Link & submit Click Events
    
    var displayLink = $('displayData');
    displayLink.addEventListener("click", displayData);
    /*var clearLink = $('clear');
    clearLink.addEventListener("click",clearLocal);*/
    var save = $('submit');
    save.addEventListener("click", submit);

}
);
