const BtnSubmit = document.getElementById("ajouter");
const BtnCancel = document.getElementById("effacer");
const intitule = document.getElementById("intitule");
const somme = document.getElementById("somme");
const listDep = document.getElementById("list-depenses");
const total = document.getElementById("total");

let allDep = 0;

BtnSubmit.addEventListener('click', () => {
    sommeValue = somme.value;
    intituleValue = intitule.value;

    if (sommeValue.trim().length == 0 || intituleValue.trim().length == 0) {
        showAlert();
        return;
    }

    let newDepense = document.createElement('ion-item');
    let newDepenseLabel = document.createElement('ion-label');  //intitule : somme $
    newDepenseLabel.textContent = intituleValue + " : " + sommeValue + " $";
    newDepense.appendChild(newDepenseLabel);
    listDep.appendChild(newDepense);

    allDep += +sommeValue;
    total.textContent = allDep + " $";
    clear();


});

function clear() {
    somme.value = '';
    intitule.value = '';
}

BtnCancel.addEventListener('click', clear);

function showAlert() {
    const alert = document.createElement('ion-alert');
    alert.header = 'Erreur';
    //alert.subHeader = 'Subtitle';
    alert.message = 'Veuillez saisir les 2 entrées !';
    alert.buttons = [{
        text: "Ok",
        handler: () => {
            console.log("Ok Message");
        }
    },
    {
        text: "Cancel",
        role: "cancel",
        handler: () => {
            console.log("Cancel Message");
        }

    }];

    document.body.appendChild(alert);
    return alert.present();

}
