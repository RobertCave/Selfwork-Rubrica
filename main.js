// variabili 
let visibile = false; //visibilità della tabella

// importo da HTML le variabili
let nameC = document.querySelector("#nameC");
let numberC = document.querySelector("#numberC");

//pulsanti
let principaleBtn = document.querySelector("#principaleBtn");
let mostraNascondi = document.querySelector("#mostraNascondi");




//tabella
let rubricaTable = document.querySelector("#rubricaTable");


const rubrica = {
    lista_contatti: [
        { cName: 'Luca', cPhone: '3331112223' },
        { cName: 'Roberto', cPhone: '333444556' },
        { cName: 'Mario', cPhone: '333777888' },
    ],

    mostraRubrica: function () {
        let counter = 1;

        // mettiamo in una variabile l'HTML generato e poi lo passiamo a .innerHTML

        let tabella = `<table class="table mt-5">
            <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Nome e Cognome</th>
                            <th scope="col">Numero di telefono</th>
                            <th scope="col">Operazioni</th>
                        </tr>
            </thead>
            <tbody class="table-group-divider">`;


        this.lista_contatti.forEach((contatto) => {
            tabella += `<tr>
                            <th scope="row">${counter}</th>
                            <td>${contatto.cName}</td>
                            <td>${contatto.cPhone}</td>
                            <td>
                                <button type="button" class="btn btn-warning btn-sm" id="editContact">Modifica</button>
                                
                                <button type="button" class="btn btn-danger btn-sm" id="deleteContact"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
  <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
</svg> Cancella </button>
                            </td>
                        </tr>`;
            counter++;

        });

        tabella += "</tbody></table>";


        rubricaTable.innerHTML = tabella;

        // pulsante CANCELLA per ogni contatto 
        let deleteContact = document.querySelectorAll("#deleteContact");

        deleteContact.forEach((btn, indice)=>{
            
            btn.addEventListener('click', ()=> {
                rubrica.lista_contatti.splice(indice,1);
                rubrica.mostraRubrica();
            })
        } );


        // pulsante MODIFICA per ogni contatto 
        let editContact = document.querySelectorAll("#editContact");

        editContact.forEach((btn, indice)=>{

            ///////////////////////////////////////////////////////////////modifica maledetta
            btn.addEventListener('click', ()=> {
                nameC.value=""; //reset input
                numberC.value=""; //rester input

                
                nameC.value= this.lista_contatti[indice].cName;
                numberC.value=this.lista_contatti[indice].cPhone;
                principaleBtn.innerHTML="Modifica";
                principaleBtn.classList.value = "btn btn-warning";
                //console.dir(principaleBtn);
                


                // cancello contatto vecchio

                rubrica.lista_contatti.splice(indice,1);
                rubrica.mostraRubrica();

               
            })
            
           

        });






        

    },

    addContact: function (newName, newNumber) {

        this.lista_contatti.push({ cName: newName, cPhone: newNumber });
        this.mostraRubrica();
        principaleBtn.classList.value = "btn btn-info";
        principaleBtn.innerHTML="Aggiungi";


    },



}






mostraNascondi.addEventListener('click', () => {

    if (!visibile) {
        // prima si cancella
        rubricaTable.innerHTML = "";

        rubrica.mostraRubrica();

        mostraNascondi.innerHTML = " Nascondi ";
        visibile = true;

    } else {
        rubricaTable.innerHTML = "";
        visibile = false;
        mostraNascondi.innerHTML = " Mostra ";
    }


});


principaleBtn.addEventListener('click', () => {

   
    
    // check se i campi sono vuoti
    if (nameC.value && numberC.value) {

        rubrica.addContact(nameC.value, numberC.value);
        nameC.value = "";
        numberC.value = "";

    }

});






