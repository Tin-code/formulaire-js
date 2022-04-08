
// Récupération de mon formulaire grace a son Id
let myForm = document.getElementById("myForm");

//Ajouter un écoute d'evenement 
myForm.addEventListener(
  "submit",
  function (e) {
    e.preventDefault();

    //La variable champs est 'ensemble de tous les éléments requis de mon formulaire
    let champs = document.querySelectorAll(
      "input[required], textarea[required]"
    );

    let valid = true;

    //La ligne ci-dessous execute la fonction formValidate "checkValidity" sur chacun des éléments de la variable champs
    champs.forEach((champ) => {
      if(! formValidate(champ)){
          valid = false;
      };
    });
    if(valid){
        e.target.submit();

    }
  },
  false
);

// La fonction formateValidate applique la methode "checkValidity" qui verifie si le champs est bien rempli sur tous 
function formValidate(champ) {
  if (champ.checkValidity()) {
    return true;
  } else {
    return false;
  }
}


// let myForm = document.getElementById('myForm')

// myForm.addEventListener('submit', function(e){
//     e.preventDefault();
//     let nom = document.getElementById('name')
//     if( nom = ""){
//         alert('le champ nom est invalid')
//     }
// })
