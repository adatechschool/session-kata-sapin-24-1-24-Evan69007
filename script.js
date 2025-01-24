const afficherEtoile = (n) => {
	console.log('*'.repeat(n));
}
// afficherEtoile(5);

const afficherRectangle = (hauteur, largeur) => {
	if (hauteur > 0 && largeur > 0) {
		console.log('*'.repeat(largeur));
		afficherRectangle(hauteur - 1, largeur);
	}
	else
	{
		return;
	}
}

// afficherRectangle(5, 5);

const afficherTriangleDroite = (n) => {
	for (let i = 0; i < n; i++) {
		console.log('*'.repeat(i) + "\\");
	}
}

// afficherTriangleDroite(5);

const afficherTriangleGauche = (n) => {
	for (let i = 0; i < n; i++) {
        console.log(" ".repeat(n - i - 1) + "/" + "*".repeat(i));
    }
}

// afficherTriangleGauche(5);

const afficherPointeSapin = (n, espacement) => {
	console.log(' '.repeat(espacement + 3) + '+');
    for (let i = 0; i < n; i++) {
        console.log(" ".repeat(espacement - i + 2) + "/" + "*".repeat(i) + '|' + '*'.repeat(i) + "\\");
    }
}
// afficherPointeSapin(4); // Output:    +\n   /|\n  / |\\\n /  | \\\n/___|_\\

const afficherEtage = (hauteur, pointe_offset, espacement) => {
	for (let i = 0; i < hauteur; i++) {
		console.log(' '.repeat(espacement - i + 2) + "/" + "*".repeat(pointe_offset + i) + "|" + "*".repeat(pointe_offset + i) + "\\"); 
	}
}

// afficherEtage(3, 0, 3);
// afficherEtage(3, 1, 2);
// afficherEtage(3, 2, 1);
// afficherEtage(3, 3, 0);

const afficherSapin = (etages, hauteur_etage) => {
	afficherPointeSapin(hauteur_etage, hauteur_etage);
	for (let i = 1; i < etages; i++) {
		afficherEtage(hauteur_etage, i, hauteur_etage - i);
	}
}

afficherSapin(3, 3);