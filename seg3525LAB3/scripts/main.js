// Cette fonction est appelée lorsque l'on clique sur l'un des onglets

// définir les couleurs d'onglet par défaut
document.addEventListener('DOMContentLoaded', function() {
	openInfo(event, 'Client');
	document.getElementsByClassName("tablinks")[0].style.backgroundColor = "#abb";
}, false);



function tabColour(index){
	document.getElementsByClassName("tablinks")[0].style.backgroundColor = "white";
	document.getElementsByClassName("tablinks")[1].style.backgroundColor = "white";
	document.getElementsByClassName("tablinks")[2].style.backgroundColor = "white";
	for(i = 0; i <= index; i++){
		document.getElementsByClassName("tablinks")[i].style.backgroundColor = "#abb";
	}
}

function openInfo(evt, tabName) {


	tabcontent = document.getElementsByClassName("tabcontent");
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}


	tablinks = document.getElementsByClassName("tablinks");
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(" active", "");
	}

	// Afficher l'onglet en cours, et ajouter une classe "active" au bouton qui a ouvert l'onglet
	document.getElementById(tabName).style.display = "block";
	evt.currentTarget.className += " active";
}

// générer une liste de cases à cocher à partir d'une liste de produits
function populateListProductChoices(slct1, slct2, category) {

    	var s2 = document.getElementById(slct2);
    	s2.innerHTML = "";

	// obtenir une liste réduite de produits, de prix et d'images en fonction des restrictions
    	var optionArray = restrictListProducts(products, slct1, category);
	var priceArray = restrictListPrices(products, slct1, category);
	var imageArray = restrictListImages(products, slct1, category);

	// pour chaque élément du tableau, créez un élément de case à cocher

	for (i = 0; i < optionArray.length; i++) {

		var productName = optionArray[i];

		var checkbox = document.createElement("input");
		checkbox.type = "checkbox";
		checkbox.name = "product";
		checkbox.value = productName;
		s2.appendChild(checkbox);

		// créer un label pour la case à cocher, et ajouter également en HTML DOM
		var label = document.createElement('label')
		label.htmlFor = productName;
		label.appendChild(document.createTextNode(productName + " ($" + priceArray[i] + ")"));
		s2.appendChild(label);
		s2.appendChild(document.createElement("br"));
		var img = document.createElement('img');
		img.src = imageArray[i];
		s2.appendChild(img);
		s2.appendChild(document.createElement("br"));
	}
}

// Cette fonction est appelée lorsque le bouton "Ajouter les articles sélectionnés au panier" est cliqué
function selectedItems(){

	var ele = document.getElementsByName("product");
	var chosenProducts = [];

	var c = document.getElementById('displayCart');
	c.innerHTML = "";

	var para = document.createElement("P");
	para.innerHTML = "Vous avez selectionne : ";
	para.appendChild(document.createElement("br"));
	for (i = 0; i < ele.length; i++) {
		if (ele[i].checked) {
			para.appendChild(document.createTextNode(ele[i].value));
			para.appendChild(document.createElement("br"));
			chosenProducts.push(ele[i].value);
		}
	}

	c.appendChild(para);
	c.appendChild(document.createTextNode("Le prix total est " + getTotalPrice(chosenProducts)));
	openInfo(event, 'Cart');
	tabColour(2);
}

function applyFilters(){
	var category = document.getElementById("categorySelect").value;
	var x = document.getElementById('filter1');
	var y = document.getElementById('filter2');
	var z = document.getElementById('filter3');
	var slct1 = "None";

	if(!x.checked && !y.checked && !z.checked){
		slct1 = "None";
	}else if(!x.checked && !y.checked && z.checked){
		slct1 = "Organic";
	}else if(!x.checked && y.checked && !z.checked){
		slct1 = "GlutenFree";
	}else if(!x.checked && y.checked && z.checked){
		slct1 = "GlutenFreeOrganic";
	}else if(x.checked && !y.checked && !z.checked){
		slct1 = "Vegetarian";
	}else if(x.checked && !y.checked && z.checked){
		slct1 = "VegetarianOrganic";
	}else if(x.checked && y.checked && !z.checked){
		slct1 = "VegetarianGlutenFree";
	}else if(x.checked && y.checked && z.checked){
		slct1 = "All";
	}
	populateListProductChoices(slct1, 'displayProduct', category);
}

function start(){
	var category = document.getElementById("categorySelect").selectedIndex;
	document.getElementById("categorySelect").selectedIndex = category;
	applyFilters();
	openInfo(event, 'Products');
	tabColour(1);
}
