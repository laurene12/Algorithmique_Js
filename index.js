let phrase ="Bonjour tout le monde,je suis Christian Lisangola,développeur logiciels à Kinshasa Digital.Mon numéro de téléphone est le +243840964176 qui un numéro vodacom,et mon adresse email privé est le christian.lisangola@gmail.com. Par le passé j'ai eu à utiliser d'autres numéros de téléphones à l'instar d'un numéro Airtel qui fut le +243971151294 mais qui ne passe plus je suppose et aussi un numéro Tigo,le +243895602911. Ici à Kinshasa Digital,j'utilise une adresse mail d'entreprise qui est le christian@kinshasadigital.com.";

phrase = phrase.split(/[ ,]/);

//1 Trouver le nombre des adresses mail et les lister
const allMail=phrase.filter((adresseMail)=>{
    return adresseMail.includes('@');
    
});
console.log("Le nombre des adresses mail est " + (allMail.length));
console.log(allMail);

// La fonction qui supprime le point à la fin des numéros et mails
const supprimerLePoint = (tableauNumero)=>{
    for(let i = 0; i < tableauNumero.length; i++){
        if(tableauNumero[i].endsWith('.')){
            tableauNumero[i] = tableauNumero[i].slice(0,tableauNumero[i].length-1);      
        }
    }
};
supprimerLePoint(allMail);
console.log(allMail);

//2 Trouver le nombre des numbers de téléphones et les lister
const allNumber = phrase.filter((number)=>{
    return number.startsWith('+243');
});
console.log("Le nombre des numéros de téléphones est " + (allNumber.length));
supprimerLePoint(allNumber);
console.log(allNumber);

// La fonction qui filtre le numéro
function filtrerNumero(allNumber,debutNumero="+243"){
    return allNumber.filter((numero)=>numero.startsWith(debutNumero));
};
//3 Collecter tous les numéros de téléphones Vodacoms
const allNumberVodacom = filtrerNumero(allNumber,"+24381");
console.log(allNumberVodacom);
console.log("Le nombre des numéros de Vodacom est " + (allNumberVodacom.length));

//4 Collecter tous les numéros de téléphones Tigo(#de Orange)
const allNumberTigo = filtrerNumero(allNumber,"+24389");
console.log(allNumberTigo);

//5 Collecter tous les numéros de téléphones Orange(#Tigo)
const allNumberOrange = filtrerNumero(allNumber,"+24384");
console.log(allNumberOrange);

//6 Lister toutes les adresses de messageries professionnelles
const messagerieProfessionnel = allMail.filter((mailProfessionnel)=>{
    return !mailProfessionnel.includes('@gmail') ;
});
supprimerLePoint(messagerieProfessionnel)
console.log(messagerieProfessionnel);

//7 Lister toutes les adresses de messageries privées
const messageriePrivee = allMail.filter((mailPrivee)=>{
    return mailPrivee.includes('@gmail');
});
supprimerLePoint(messageriePrivee);
console.log(messageriePrivee);

//8 Trouver le nombre des mots(Ici les numéros de téléphones,les adresses email,les articles,pronoms personnels,pronoms relatifs(qui),prépositions(à) ne sont pas des mots)

let motsSupprimer = phrase.filter(mot=>!/le|\la\|les|des|\de\|du|un|une|\+243|@|je|tu|il|elle|nous|vous|elles|ils|à|qui/.test(mot));
console.log(motsSupprimer);
console.log("Le nombre de mots restants est " + (motsSupprimer.length));












