var reponse = prompt("Comment t'appelles-tu ?", "<Entrez ici votre prénom>");
 if (/^[a-zA-Z]+$/.test(reponse))
 {
   alert("Bonjour " + reponse);
 }
  else {
    alert("erreur syntaxe")
  }
