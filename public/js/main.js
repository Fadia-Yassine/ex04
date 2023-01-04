class lieux {
    constructor(nom,contenu){
        this.nom = nom;
        this.contenu = contenu;
    }
}

class ing extends lieux{
    constructor(nom, contenu, ingredients){
        super(nom,contenu);
        this.ingredients= ingredients;
    }
}
let maison = new lieux('maison',[]);
let epicerie = new ing('epicerie', [], []);
let cuisine = new ing('cuisine', [], []);

class ingredient {
    constructor(nom,etat, prix){
        this.nom = nom;
        this.etat = etat;
        this.prix = prix;
    }
}

let poivron = new ingredient('poivron','entier', 1);
let oignon = new ingredient('oignon', 'entier', 2);
let oeuf = new ingredient('oeuf', 'entier', 4);
let epice = new ingredient('epice', 'moulu', 3.25);
let paprika = new ingredient('paprika', 'moulu', 1.5);
let fromage = new ingredient('fromage','coupé', 1.6);

class personne {
    constructor(nom, lieu, argent, panier){
        this.nom = nom;
        this.lieu = lieu;
        this.argent = argent;
        this.panier = panier;
        }
        se_deplacer(x){
        }
            
        payer(x){
        }
        
        couper(x,y){
        }
}

let maxime = new personne('Maxime', 'néant', 100, []);
