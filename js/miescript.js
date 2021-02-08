/*Per richiamare il motore JQuery utilizzo il $
Suggerimento: nonostante sia più verboso è consigliabile utilizzare sempre la digitura JQuery in quanto nella pagina all'interno della quale si stia integrando la libreria 
JQuery potrebbero essere presenti altre librerie che facciano uso del $ */

// Questo evento di jQuery è l'evento DOM Ready: si verifica quando è stato completamente scaricato dal browser l'albero di nodi html
// Funzione in js: function nome(opzionale) (parametri)
jQuery(function () {
    // alert("DOM caricato");
    jQuery("#primodiv").html("SONO INTERVENUTO");
    jQuery(".mieidiv").css("background-color", "yellow");
    /* Il selettore mi restituisce una collezione di nodi sottoforma di oggeti jQuery 
    sui quali posso successivamente chiamare dei metodi. */

    /* Il metodo html() e il metodo css() servono rispettivamente a:
    html() -> recupera il contenuto html dell'elemento
    html(value) -> imposta il contenuto html dell'elemento con il valore del parametro
    css(property) -> recupera il valore della proprietà css specificata
    css(property, value) -> imposta il valore della proprietà selezionato con il valore del parametro passato in ingresso
    */

    var blocco = jQuery("<div><p>Esempio di elemti <strong>nidificati</strong></p></div>");
    blocco.addClass("nuovaClasse"); // Aggiungo agli elementi selezionati una classe
    blocco.appendTo(".mieiDiv"); // Innesto l'elemento selezionato in altri nodo

    jQuery(":disabled, .miaForm").removeAttr("disabled"); // Seleziona tutti i campi con disable e rimuove l'attributo
   
    /* Ho predisposto all'interno dell'elemento DOM READY un ascoltatore che rimane in attesa del verificarsi di un evento click sull'elemento con id mioPulsante
    quando verrà cliccato verrano rimossi tutti gli attributi checked presenti nel DOM */

    jQuery("#mioPulsante").click(function (){
        jQuery(":checked").removeAttr("checked");
    });
});