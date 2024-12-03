function mettreEnMajuscules(phrase) {
    // Séparer la phrase en un tableau de mots
    const mots = phrase.split(' ');
  
    // Mettre en majuscule la première lettre de chaque mot
    const motsMajuscules = mots.map(mot => {
      return mot.charAt(0).toUpperCase() + mot.slice(1);
    });
  
    // Rejoindre les mots pour former la phrase finale
    return motsMajuscules.join(' ');
  }
  const phrase = "bonjour à tous les développeurs javascript";
const phraseMajuscules = mettreEnMajuscules(phrase);
console.log(phraseMajuscules);