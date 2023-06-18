const FrenchArray = require('./fr/Array.js');
const EnglishArray = require('./en/Array.js')

class Blague {
    language;
    author = "AYnonyme(#9350)";
    constructor(languageStruct) {
        if(!languageStruct) this.language = 'fr';
        else {
            if(typeof languageStruct !== 'string') {
                console.error(`Language must be 'fr' or 'en'!`)
                process.exit(0);
            }
            const language = languageStruct.toLowerCase();
            if(!language == 'fr' || !language == 'en') {
                console.error(`${language} is not a valid language!`);
                process.exit(0);
            } else {
                this.language = language;
            }
        }
    }
    random() {
        if(this.language === 'fr') {
            const blague = FrenchArray[Math.floor(Math.random() * FrenchArray.length)];
            return blague;
        }
        else {
            const blague = EnglishArray[Math.floor(Math.random() * EnglishArray.length)];
            return blague;
        }
    }
}

module.exports = Blague;