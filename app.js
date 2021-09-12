function Ajouter() {

    //label value
    const itemName = document.getElementById("depense").value;
    //amount value
    const value = document.getElementById("Somme").value;

    //create ion item tag
    const para = document.createElement("ion-item");

    //create the value of the tag that we want to add
    const node = document.createTextNode(itemName+": "+value+" $");
    para.appendChild(node);

    //append the new tag to the DOM
    const element = document.getElementById("items");
    element.appendChild(para);


    //Add an event Listener on Sum clicks
    var SumValue = document.getElementById('Sum');
    SumValue.addEventListener('click', addFunction(value))



}

/**
 * this method will calculate the sum dynamically
 * @param value
 */
function addFunction(value) {

    var CounterSum = document.getElementById('counter');
    CounterSum.innerHTML = parseFloat(CounterSum.innerHTML) + parseFloat(value);
}
/**
 * this method will empty the list
 * @param value
 */
function RemoveFunction() {
    //Add an event Listener on Sum clicks
    var myobj = document.getElementById("items");
    myobj.remove();
    window.location.reload();
}
