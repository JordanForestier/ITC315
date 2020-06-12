function initialize(){
	window.onload = initialize;	
	// Initialisation de la fonction au chargement de la fenêtre

	var bSupportsLocal = (('localStorage' in window) && window['localStorage'] !== null);
	// Variable booléenne stockant le résultat de compatibilité de stockage local du navigateur

	if (!bSupportsLocal)
	{
	document.getElementById('infoform').innerHTML = "<p>Désolé, ce navigateur ne supporte pas l’API Web Storage du W3C.</p>";
	return
	// Si ce n'est pas compatible, on affiche un message texte d'erreur
	}
	if (window.localStorage.length != 0) 
	{
		document.getElementById('firstName').value = window.localStorage.getItem('firstName');
		document.getElementById('lastName').value = window.localStorage.getItem('lastName');
		document.getElementById('postCode').value = window.localStorage.getItem('postCode');
		// Si le stockage n'est pas vide, alors on enregistre les infos ci-dessus
		// càd prénom, nom, code postal
	}
}

function storeLocalContent(fName, lName, pCode) 
{
	window.localStorage.setItem('firstName', fName);
	window.localStorage.setItem('lastName', lName);
	window.localStorage.setItem('postCode', pCode);
	// Fonction de stockage des données dans le stockage local du navigateur
	// Cela se fait après appuis 
}

function clearLocalContent()
{
	window.localStorage.setItem('firstName', '');
	window.localStorage.setItem('lastName', '');
	window.localStorage.setItem('postCode', '');
	// Cette fonction sert à vider le localstorage de ces données 
	// En écrivant rien à la place des variables
}
