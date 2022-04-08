//Création du formulaire
let form = document.createElement("form");
form.setAttribute("action", "validation.html");
form.setAttribute("method", "post");
form.setAttribute("novalidate", "novalidate");
form.style.display = "";
form.style.flexDirection = "column";
form.style.justifyContent = "";
form.style.width = "90%";
form.style.alignItems = "center";

//Fonction pour ajouter un élément au formulaire

const addToForm = (elem) => {
    form.appendChild(elem);
};

//Création d'une balise small pour afficher les méssages d'erreur sous les champs
const smalls = (message) => {
    let small = document.createElement("small");
    small.textContent = message;
    small.style.float = "right";
    small.style.marginTop = "-10px";
    addToForm(small);
};

//Liaison du formulaire dans la div dédié dans le html
document.getElementById("formDiv").appendChild(form);

// Fonction de création des labels des champs du formulaire
const labels = (leLabel, forId) => {
    let label = document.createElement("label");
    label.textContent = leLabel;
    label.setAttribute("for", forId);
    label.style.color = "white";
    label.style.fontSize = "22px";
    label.style.fontFamily = "Arial";
    label.style.textAlign = "center";
    addToForm(label);
};

//Fonction de création des champs du formulaire
const inputs = (type, name, id, placeholder, value = "", minLenght = "") => {
    let input = document.createElement("input");
    input.setAttribute("type", type);
    input.setAttribute("name", name);
    input.setAttribute("id", id);
    input.setAttribute("minLenght", minLenght);
    input.setAttribute("value", value);
    input.setAttribute("required", "required");

    input.setAttribute("placeholder", placeholder);

    input.style.marginBottom = "10px";
    input.style.padding = "7px";
    input.style.borderRadius = "10px";
    input.style.width = "100%";
    addToForm(input);
};

//Création des boutons radio

const radios = (type, name, id) => {
    let radio = document.createElement("input");
    radio.style.margin = "10px";
    radio.setAttribute("type", type);
    radio.setAttribute("name", name);
    radio.setAttribute("id", id);
    radioDiv.appendChild(radio);
    addToForm(radio);
};

// Champ correspondant à la partie 'Nom'
labels("NOM : ", "name");
inputs("text", "Name", "name", "veuillez entrer votre nom", "", 2);
smalls();
// Champ correspondant à la partie 'Prenom'
labels("PRENOM(S) :", "fName");
inputs("text", "fName", "fName", "veuillez entrer votre prénom", "", 2);
smalls();

// Champ correspondant à la partie 'Email'
labels("EMAIL :", "Email");
inputs(
    "email",
    "Email",
    "Email",
    "veuillez entrer votre addresse E-mail",
    "",
    10
);
smalls();

// Champ correspondant à la partie 'Numéro de téléphone'
labels("NUMERO :", "tel");
inputs("tel", "tel", "tel", "veuillez entrer votre numéro d téléphone");
smalls();

// Champ correspondant à la partie 'Date de naissance'
labels("DATE DE NAISSANCE :", "bDay");
inputs(
    "date",
    "birthday",
    "bDay",
    "veuillez entrer votre date de naissance de type  (01/12/2020)",
    "01/01/2000"
);
smalls();

//Champs correspondat à la partie handicap
labels("AVEZ VOUS UN HANDICAP ?");
let radioDiv = document.createElement("div");
radioDiv.style.border = "1px";
radioDiv.style.borderColor = "red";
addToForm(radioDiv);

//Les boutons radios
labels("Oui", "yesHand");
radios("radio", "hand", "yesHand");
labels("Non", "noHand");
radios("radio", "hand", "noHand");

//Le champ textarea pour la description de l'handicap s'il existe.

let textarea = document.createElement("textarea");
        textarea.setAttribute("name", "handDescri");
        textarea.setAttribute("id", "descri");
        textarea.style.marginBottom = "10px";
        textarea.style.padding = "7px";
        textarea.style.borderRadius = "10px";
        textarea.style.width = "100%";
        addToForm(textarea);


// Ecoute d'évènement pour lorsque le champ nom perd le focus
form.Name.addEventListener("change", function () {
    validName(this);
});

//Ecoute d'évènement pour lorsque le champ prénom perd le focus
form.fName.addEventListener("change", function () {
    validfName(this);
});

//Ecoute d'évènement pour lorsque le champ mail perds le focus
form.Email.addEventListener(
    "change",
    function () {
        validMail(this);
    },
    false
);

//Ecoute d'évènement pour lorsque le champ téléphone perds le focus
form.Email.addEventListener(
    "change",
    function () {
        validMail(this);
    },
    false
);

// Ecoute d'évènement pour lorsque le bouton radio oui
form.yesHand.addEventListener(
    "change",
    function () {
        radioChecked();
    },
    false
);

const radioChecked = () => {
    if (form.hand[0].checked) {
        textarea.style.display="block"
        console.log("handicap");
    }
};
form.noHand.addEventListener(
    "change",
    function () {
        radioCheckOff();
    },
    false
);

const radioCheckOff = () => {
    if (form.hand[1].checked === true) {
      textarea.style.display="none"
        console.log("pas d'handicap");
    } else {
        console.log("pas d'handicap");
    }
};

// Ecoute d'évènement pour le champ numéro de téléphone
form.tel.addEventListener(
    "change",
    function () {
        validNum(this);
    },
    false
);

//Ecoute d'évènement pour lorsque le champ prénom perd le focus
// form.bDay.addEventListener("change", function () {
//     validHbd(this);
// });

//Fonction de validatin du champs nom
const validName = function (leNom) {
    let nameRegExp = new RegExp("^[a-zA-Z]", "g");
    let testName = nameRegExp.test(leNom.value);

    if (testName) {
        form.Name.nextElementSibling.innerHTML = "Champ valide";
        form.Name.nextElementSibling.style.color = "white";
        form.Name.nextElementSibling.style.borderRadius = "7px";
        form.Name.nextElementSibling.style.marginBottom = "2px";
        form.Name.nextElementSibling.style.padding = "5px";
        form.Name.nextElementSibling.style.backgroundColor = "green";
        form.Name.nextElementSibling.style.fontSize = "14px";
        console.log(leNom.value);
    } else {
        form.Name.nextElementSibling.innerHTML =
            "Veuillez entrer un Nom valide";
        form.Name.nextElementSibling.style.color = "white";
        form.Name.nextElementSibling.style.borderRadius = "7px";
        form.Name.nextElementSibling.style.marginBottom = "2px";
        form.Name.nextElementSibling.style.padding = "5px";
        form.Name.nextElementSibling.style.backgroundColor = "red";
        form.Name.nextElementSibling.style.fontSize = "14px";

        console.log("c'est faux ");
    }
    return testName;
};
//Fonction de validatin du champs numero de téléphone
const validNum = function (leNum) {
    let numRegExp = new RegExp("^[0-10]");
    let testNum = numRegExp.test(leNum.value);

    if (testNum) {
        form.tel.nextElementSibling.innerHTML = "Champ valide";
        form.tel.nextElementSibling.style.color = "white";
        form.tel.nextElementSibling.style.borderRadius = "7px";
        form.tel.nextElementSibling.style.marginBottom = "2px";
        form.tel.nextElementSibling.style.padding = "5px";
        form.tel.nextElementSibling.style.backgroundColor = "green";
        form.tel.nextElementSibling.style.fontSize = "14px";
        console.log(leNum.value);
    } else {
        form.tel.nextElementSibling.innerHTML =
            "Veuillez entrer un numéro valide";
        form.tel.nextElementSibling.style.color = "white";
        form.tel.nextElementSibling.style.borderRadius = "7px";
        form.tel.nextElementSibling.style.marginBottom = "2px";
        form.tel.nextElementSibling.style.padding = "5px";
        form.tel.nextElementSibling.style.backgroundColor = "red";
        form.tel.nextElementSibling.style.fontSize = "14px";

        console.log("c'est faux ");
    }
    return testNum;
};

//Fonction de validatin du champs prénom
const validfName = function (lePrenom) {
    let nameRegExp = new RegExp("^[a-zA-Z]", "g");
    let testfName = nameRegExp.test(lePrenom.value);

    if (testfName) {
        form.fName.nextElementSibling.innerHTML = "Champ valide";
        form.fName.nextElementSibling.style.color = "white";
        form.fName.nextElementSibling.style.borderRadius = "7px";
        form.fName.nextElementSibling.style.marginBottom = "2px";
        form.fName.nextElementSibling.style.padding = "5px";
        form.fName.nextElementSibling.style.backgroundColor = "green";
        form.fName.nextElementSibling.style.fontSize = "14px";
        console.log(lePrenom.value);
    } else {
        form.fName.nextElementSibling.innerHTML =
            "Veuillez entrer un prénom valide";
        form.fName.nextElementSibling.style.color = "white";
        form.fName.nextElementSibling.style.borderRadius = "7px";
        form.fName.nextElementSibling.style.marginBottom = "2px";
        form.fName.nextElementSibling.style.padding = "5px";
        form.fName.nextElementSibling.style.backgroundColor = "red";
        form.fName.nextElementSibling.style.fontSize = "14px";

        console.log("c'est faux ");
    }
    return testfName;
};

//Fonction de validation de du champs mail
const validMail = (leMail) => {
    let mailRegExp = new RegExp("^[a-z][a-z0-9.]+@+[a-z][.^a-z]", "g");
    let testMail = mailRegExp.test(leMail.value);

    if (testMail) {
        form.Email.nextElementSibling.innerHTML = "Champ valide";
        form.Email.nextElementSibling.style.color = "white";
        form.Email.nextElementSibling.style.borderRadius = "7px";
        form.Email.nextElementSibling.style.marginBottom = "2px";
        form.Email.nextElementSibling.style.padding = "5px";
        form.Email.nextElementSibling.style.backgroundColor = "green";
        form.Email.nextElementSibling.style.fontSize = "14px";
        console.log(leMail.value);
    } else {
        form.Email.nextElementSibling.innerHTML =
            "Veuillez entrer un Email valide";
        form.Email.nextElementSibling.style.color = "white";
        form.Email.nextElementSibling.style.borderRadius = "7px";
        form.Email.nextElementSibling.style.marginBottom = "2px";
        form.Email.nextElementSibling.style.padding = "5px";
        form.Email.nextElementSibling.style.backgroundColor = "red";
        form.Email.nextElementSibling.style.fontSize = "14px";
    }
    return testMail;
};

let data = [];
console.log(data);

//Création du bouton d'envoi
let button = document.createElement("button");

button.setAttribute("type", "submit");
button.textContent = "Envoyer";
button.setAttribute("disabled", "disabled");
button.style.width = "200px";
button.style.padding = "5px";
button.style.borderRadius = "7px";
button.style.border = "1px solid";
addToForm(button);
