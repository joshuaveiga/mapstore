﻿/**
 * Copyright (c) 2009-2010 The Open Planning Project
 */

GeoExt.Lang.add("it", {	
    "MSMGridPanel.prototype": {
        msg: "Caricamento...",
        textSearch: "Ricerca",
        tooltipSearch: "Ricerca mappa per nome",
        textReset: "Reimposta",
        tooltipReset: "Rimuove tutti i filtri",
        gridResourceId: "Id Risorsa",
        gridName: "Nome",
        gridOwner: "Proprietario",
        gridDescription: "Descrizione",
        gridDateCreation: "Data di creazione",
        gridLastUpdate: "Ultimo aggiornamento",
        errorTitle: "Richiesta fallita",
        errorMsg_500: "Il server restituisce HTTP status code 500! </br></br>Controllare il log!",
        errorMsg_501: "Il server restituisce HTTP status code 501! </br></br>Il server non può completare la richiesta!",
        errorMsg_404: "Il server restituisce HTTP status code 404! </br></br>La risorsa che stai cercando non può essere trovata!",
        errorMsg_timeout: "Richiesta scaduta!",
        textUserManager: 'Gestione utenti',
        textViewMap: '', // "Visualizza mappa",
        tooltipViewMap: "Mostra Mappa",
		textCopyMap: '', //"Clone Map",
        tooltipCopyMap: "Clona Mappa",
        textEditMap: '', //"Modifica mappa",
        tooltipEditMap: "Modifica Mappa",
        textDeleteMap: '', //"Elimina mappa",
        tooltipDeleteMap: "Elimina Mappa",
        textEditMetadata: '', //"Edita Metadati",
        tooltipEditMetadata: "Modifica Info",
        textSubmitEditMetadata: "Aggiorna",
        tooltipSubmitEditMetadata: "Aggiorna Info",
        titleConfirmCloseEditMetadata: 'Conferma',
        textConfirmCloseEditMetadata: 'Chiudi la finestra senza salvare?',        
        metadataSaveSuccessTitle: "Success",
        metadataSaveSuccessMsg: "Metadati salvati correttamente",
        metadataSaveFailTitle: "Errore nel salvataggio del metadati",
        textClose: "Chiudi",
        msgSaveAlertTitle: "Attenzione, la mappa non è stata salvata!",
        msgSaveAlertBody: "Vuoi veramente uscire senza salvare?",
        tooltipClose: "Chiudi la mappa",
        msgDeleteMapTitle: "Attenzione",
        msgDeleteMapBody: "Vuoi veramente eliminare la mappa?",
        msgSuccessDeleteMapTitle: "Success",
        msgSuccessDeleteMapBody: "La mappa è stata eliminata",
        msgFailureDeleteMapTitle: "Failed",
        msgFailureDeleteMapBody: "Qualcosa di sbagliato è accaduto",
        IframeViewerTitle: "Visore Mappa - ",
        IframeComposerTitle: "Editor Mappa - ",
        IframeWaitMsg :"Caricamento della mappa ...",
		showMapTooltip: "Mostra in una nuova finestra",
		embedCodeTitle: "Codice da Incorporare",
		embedURL: "URL diretto",		
		urlLabel: "URL",
		exportMapText: "Collega Mappa",
        mobileText: "Mobile", 
        installApplicationText: "Installazione applicazione Android", 
        loadThisSourceText: "Aggiungi questa sorgente di MapStore Mobile", 
        scanThisApplicationText: "Scansiona questo codice QR installare MapStore per Android", 
        scanThisSourceText: "Scansiona questo codice QR per aggiungere questa sorgente a MapStore Mobile. È necessario prima installare MapStore per Android."
    },
    "MSMPagingToolbar.prototype": {
        desc: "Nuova Mappa",
        textNewMap: "Nuova Mappa",
        tooltipNewMap: "Crea una nuova Mappa",
        textExpandAll: "Espandi righe",
        tooltipExpandAll: "Espande tutte le righe",
        textCollapseAll: "Chiudi righe",
        tooltipCollapseAll: "Chiude tutte le righe",
        displayMsg: "Visualizzazione risultati {0} - {1} of {2}",
        emptyMsg: "Nessun risultato da visualizzare",
        firstText: "Prima Pagina",
        lastText: "Ultima Pagina",
        nextText: "Pagina Successiva",
        prevText: "Pagina Precedente",
        refreshText: "Ricarica",
        beforePageText: "Pagina",
		afterPageText : "di {0}",
		resizerText: "Mappe per pagina"
    },
    "MSMPanel.prototype": {
        title : "MapManager"
    },
    "MSMLogin.prototype": {
        loginText: "Accedi",
        logoutText: "Esci",
        ruleText: "UTENTE LOGGATO: {user}",
        loginErrorText: "Il nome utente o la password inseriti non sono corretti.",
        loginErrorTitle: "Autenticazione fallita",
        userFieldText: "Utente",
        passwordFieldText: "Password",
        loginFormTitle: "Effettua l'autenticazione"
    },
    "UserManagerView.prototype":{
		textName: 'Nome',
		textPassword: 'Password',
		textPasswordEdit: 'Nuova Password',
		textPasswordConf: 'Conferma Password',
		textPasswordConfError: 'Password non confermata', 		
		textBlankUserName: 'Nome non può essere vuoto',
		textBlankPw: 'Password non può essere vuoto',
		textBlankRole: 'Il ruolo deve essere selezionato',			
		tooltipEdit: 'Modifica dati utente',
		textEditUserTitle: 'Modifica dati utente',
		displayMsg: "Visualizzazione risultati {0} - {1} of {2}",
		beforePageText: "Pagina",
		afterPageText : "di {0}",
		textRole: 'Ruolo',
		tooltipDelete: 'Cancella questo utente',
		textDelete: 'Cancella',
		tooltipSave: 'Salva questo utente',
		textSave: 'Salva',
		tooltipCancel: 'Annulla',
		textCancel: 'Annulla',
		invalidFormMsg: 'Alcuni campi sono invalidi',
		textAddUser: '', 
		textAddUserTitle: 'Aggiungi utente',
		tooltipAddUser: 'Crea un nuovo utente',
		textTitle: 'User Manager',
		tooltipSearch: "Cerca",
		textSelectRole: 'Seleziona un ruolo...',
		userAlreadyTaken: 'Nome utente presente',
		titleConfirmDeleteMsg: "Confirma cancellazione utente",
		textConfirmDeleteMsg: "Sei sicuro di voler eliminare questo utente?"
	},
	
	"EmbedMapDialog.prototype": {
        publishMessage: "La mappa è pronta per essere pubblicata sul web! Basta copiare il seguente codice HTML per visualizzare la mappa nel proprio sito web:",
        heightLabel: "Altezza",
        widthLabel: "Larghezza",
        mapSizeLabel: "Dimensione della Mappa",
        miniSizeLabel: "Mini",
        smallSizeLabel: "Piccola",
        premiumSizeLabel: "Premium",
        largeSizeLabel: "Grande",
        loadMapText: "Carica Mappa",
        downloadAppText: "Installa Applicazione Android",
        loadInMapStoreMobileText:'Mobile',
        openImageInANewTab: "Apri immagine in una nuova tab"
    }
});
