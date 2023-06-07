
const fs = require('fs');


fs.writeFile('welcome.txt', 'Hello Node', (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log('Le fichier "welcome.txt" a été créé avec succès.');
});


fs.readFile('welcome.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log('Contenu du fichier "welcome.txt":');
  console.log(data);
});