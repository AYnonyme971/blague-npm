# blague-npm
## L'utiliser/Use it

Pour utiliser `blague-npm`, vous devez d'abord l'installer via `npm install blague-npm`/For using `blague-npm`, you have to install it first with `npm install blague-npm`

## Exemples

### En français
```js
const Blague = require('blague-npm');
const maBlague = new Blague("fr");
const blague = maBlague.random();
console.log(blague.blague); // Sortie attendue (exemple) : Pourquoi...
console.log(blague.reponse); // Sortie attendue (exemple) : Car...
```
Notez que vous pouvez stocker les blagues dans des variables :
```js
const Blague = require('blague-npm');
const maBlague = new Blague("fr");
const randomBlague = maBlague.random();
const blague = randomBlague.blague;
const reponse = randomBlague.reponse;
console.log(blague); // Sortie attendue (exemple) : Pourquoi...
console.log(reponse); // Sortie attendue (exemple) : Car...
```

### In english
```js
const Blague = require('blague-npm');
const myJoke = new Blague("en");
const blague = myJoke.random();
console.log(blague.joke); // Expected output (exemple) : Why...
console.log(blague.response); // Expected output (exemple) : Because...
```
You can also store it into variables :
```js
const Blague = require('blague-npm');
const myJoke = new Blague("en");
const randomJoke = myJoke.random();
const joke = randomJoke.joke;
const response = randomJoke.response;
console.log(joke); // Expected output (exemple) : Why...
console.log(response); // Expected output (exemple) : Because...
```

## Links/Liens
- [Website/Site web](https://aynonyme971.github.io/blague-npm-docs/)
- [Repository](https://github.com/AYnonyme971/blague-npm)
- [Discord Server/Serveur Discord](https://discord.gg/cPkzxJY3te)