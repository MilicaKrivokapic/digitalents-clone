## 📌 **HUOMIO! ATTENTION! OBS!** 📌

> ### Tämä repo on modifioitu kloonisivusto Digitalents Helsingille alunperin kirjoittamastani koodista. Virallisen sivun lähdekoodi tekijänoikeuksineen kuuluu Helsingin kaupungille.

<br>

## Digitalents Helsinki / front end

Tervetuloa tutkimaan Digitalents Helsinki front end-koodia. 🔍 <br>

### _Kirjoitettu Reactilla_

- ladattuasi koodin aja komento `npm install`
- jos haluat testata koodia lokaalisti aja kometo `npm start`

Lisäohjeita:
<br>
https://reactjs.org/docs/getting-started.html

### **Yleistä infoa**

#### Yhteistyölogon lisääminen:

<br>

- Lisää logot raahamalla ne kansioon sijainnissa public->img
- Lisää kuvat .avif ja .png muodossa, koska tämä nopeuttaa sivun latausta
- Muista pitää kummankin tiedoston nimet samoina loppuliitettä lukuunottamatta (esim. logo.avif ja logo.png)
- Navigoi itsesi sijaintiin components->Logot.js
  <br>
  <br>
  ![Logojen sijainti](/src/backgroundimg/ohjekuva.png)

- Lisää haluamasi logo ilman tiedostopäätettä. Mikäli olet siirtänyt kansioon kummatkin versiot logosta (avif/png) koodi hakee ne automaattisesti ja näyttää aina sen version jota käyttäjän selain tukee
  <br>
  <br>
  Voit muuttaa kuvia avif-formaattiin esimerkiksi osoitteissa https://avif.io/ ja https://squoosh.app/
  <br>
  Logot kannattaa muuntaa avif-muotoon koska se nopeuttaa sivun lataamista käyttäjälle.
  <br>
  <br>

### Background imagen muuttaminen

CSS-kuvat lisätään samaan tyyliin kuin logot, eli ensin lisätään .avif-päätteinen tiedosto ja sitten png/jpg. Nimillä ei tässä tapauksessa ole väliä.

- Raahaa kuvat sijaintiin src->backgroundimg
- Mene sitten kyseisen komponentin css-fileen ja etsi oikea luokka
- Lisää background-image CSS-tiedostoon seuraavalla tavalla:
  - Kirjoita ensin oikean luokan sisään background-image: url(haluamasi sijainti)
  - Tämän jälkeen lisää vielä background image selaimille jotka eivät vielä tällä hetkellä tue avif-tiedostopäätettä.
    `.esimerkki-image, x:default { background-image: url("../backgroundimg/esimerkki.jpg"); }`</br>
    ![css backgroundin lisääminen](/src/backgroundimg/ohjekuva-background-img.png)

### Fonttien muuttaminen

Navigoi polkuun <br>
src/App.css
ja lisää haluamasi linkki. <br>
Fontfacen käyttämisestä voit lukea https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face

<br>

### CSS:n muuttaminen

Css:ää ei ole scopattu komponenttikohtaiseksi, joten ole varovainen epäspesifien selektorien kanssa! 🛑
