filterSelection("all") // Execute the function and show all columns
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("column");
  if (c == "all") c = "";
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (i = 0; i < x.length; i++) {
   w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
} 
function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}
function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1); 
    }
  }
  element.className = arr1.join(" ");
}
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
 errorFull = document.querySelector('#missnom');
        errorMail = document.querySelector('#missmail');
 errorCom = document.querySelector('#misscom');
        MyFull = document.querySelector('#InputNom');
        MyMail = document.querySelector('#InputEmail');
       MyCom= document.querySelector('#message');
        MyFull.addEventListener('blur', erreurMyFull);
        MyMail.addEventListener('blur', erreurMyMail);
        MyCom.addEventListener('blur', erreurMyCom);
formulaire.addEventListener('submit', validation);

 function erreurMyFull() {
 
                var letters = /^[a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+([-'\s][a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+)?$/;
            if (document.querySelector('#InputNom').value.match(letters)) {

                errorFull.innerHTML = "";
                return true;
             
            } else if (document.querySelector('#InputNom').value === ("")) {

                errorFull.innerHTML = "Saisir un nom";
                return false;
               
            } else {

                errorFull.innerHTML = "Saisir un nom valide";
                return false;
               
            }
        }
 function erreurMyMail() {

            var letters = /^[^\W][a-zA-Z0-9\-\._]+[^\W]@[^\W][a-zA-Z0-9\-\._]+[^\W]\.[a-zA-Z]{2,3}$/;
            if (document.querySelector('#InputEmail').value.match(letters)) {

                errorMail.innerHTML = "";
                return true;
               


            } else if (document.querySelector('#InputEmail').value === ("")) {

                errorMail.innerHTML = "Saisir un mail";
                return false;
               
            } else {
                errorMail.innerHTML = "Saisir un mail valide";
                return false;
                
            }
        }
function erreurMyCom() {

            var numbers = /^[0-9]{1,3}(?:(?:[,. ]){1}[-a-zA-Zàâäéèêëïîôöùûüç]+)+/;
            if (document.querySelector('#message').value.match(numbers)) {

                errorCom.innerHTML = "";
                return true;
               
console.log(isa);

            } else if (document.querySelector('#message').value === ("")) {

                errorCom.innertext = "Saisir un commentaire";
                return false;
                
            } else {
                errorCom.innertext = "Saisir un commentaire sans caractère spéciaux";
                return false;
               
            }
        }
function validation (e) {
    e.preventDefault();
if (error == 0) {
    return true;
}
    else {
    return false;
}
}