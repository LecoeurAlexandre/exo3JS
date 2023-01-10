let nb = Number(prompt("Veuillez saisir le diamètre du cercle en cm : "));
let perimetre = Math.PI * nb;
let aire = Math.PI * (nb/2)**2;

let msg = `Le périmètre d'un cercle de ${nb}cm est de ${perimetre}cm. L'aire est de ${aire}cm2`;
console.log(msg);