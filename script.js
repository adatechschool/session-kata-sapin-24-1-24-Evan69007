const decos = [
	"*",
	"+",
	"*",
	"o",
	"*",
	"*",
	"*",
	"*",
	"*",
	"*",
	"*",
	"*",
	"*",
	"*",
	"*",
	"*",
	"*",
	"*",
	"*",
	"*"
]

const max = 20
const min = 1

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
	console.log('*'.repeat(n) + "\\");
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

const afficherEtage = (hauteur, pointe_offset, espacement) => {
	for (let i = 0; i < hauteur; i++) {
		let decoString = ""
		for (let k = 0; k < pointe_offset + i; k++)
		{
			decoString += decos[Math.floor(Math.random() * (max - min) + min)]
		}
		decoString += '|'
		for (let j = 0; j < pointe_offset + i; j++)
		{
			decoString += decos[Math.floor(Math.random() * (max - min) + min)]
		}
		console.log(' '.repeat(espacement - i + 2) + '/' + decoString + "\\");
	}
}

const afficherPointeSapinPlusQuatreEtages = (n, espacement, etages) => {
	console.log(' '.repeat(espacement + 3 + (etages - 4)) + '+');
    for (let i = 0; i < n; i++) {
        console.log(" ".repeat(espacement - i + 2 + (etages - 4)) + "/" + "*".repeat(i) + '|' + '*'.repeat(i) + "\\");
    }
}

const afficherPlusDeQuatreEtage = (hauteur, pointe_offset, espacement, etages) => {
	for (let i = 0; i < hauteur; i++) {
		let decoString = ""
		for (let k = 0; k < pointe_offset + i; k++)
		{
			decoString += decos[Math.floor(Math.random() * (max - min) + min)]
		}
		decoString += '|'
		for (let j = 0; j < pointe_offset + i; j++)
		{
			decoString += decos[Math.floor(Math.random() * (max - min) + min)]
		}
		console.log(' '.repeat(espacement - i + 2 + (etages - 4)) + '/' + decoString + "\\");
	}
}

// afficherEtage(3, 0, 3);
// afficherEtage(3, 1, 2);
// afficherEtage(3, 2, 1);
// afficherEtage(3, 3, 0);

const afficherSapin = (etages, hauteur_etage) => {
	if (etages > 4)
	{
		afficherPointeSapinPlusQuatreEtages(hauteur_etage, hauteur_etage, etages);
		for (let i = 1; i < etages; i++) {
			afficherPlusDeQuatreEtage(hauteur_etage, i, hauteur_etage - i, etages);
		}
		for (let j = 0; j < 3; j++)
		{
			console.log(" ".repeat(hauteur_etage + 2 + (etages - 4)) + '#'.repeat(3));
		}
	}
	else
	{
		afficherPointeSapin(hauteur_etage, hauteur_etage);
		for (let i = 1; i < etages; i++) {
			afficherEtage(hauteur_etage, i, hauteur_etage - i);
		}
		for (let j = 0; j < 3; j++)
		{
			console.log(" ".repeat(hauteur_etage + 2) + '#'.repeat(3));
		}
	}
}

afficherSapin(5, 5);