#  FitnessApp - React Native & Expo

O aplicație mobilă modernă și intuitivă dedicată monitorizării activității fizice și gestionării planurilor de antrenament. 
Proiectul este construit folosind **React Native** și **Expo**.

# Funcționalități Principale

Aplicația oferă o suită completă de instrumente pentru fitness:

* Planificator Săptămânal: Pagini individuale pentru fiecare zi a săptămânii (Luni - Duminică) cu rutine de exerciții personalizate.
* Calculator BMI: Calcularea indicelui de masă corporală pentru monitorizarea greutății.
* Step Counter: Monitorizarea pașilor parcurși în timp real.
* Timer & StopWatch: Cronometru integrat pentru gestionarea timpului de efort și a pauzelor.
* Istoric Antrenamente: Secțiune dedicată pentru vizualizarea progresului și a sesiunilor trecute.
* Profil Utilizator: Gestionarea datelor personale pentru o experiență personalizată.

## Structura Proiectului

* `src/Pagini/` - Conține toate ecranele aplicației (Home, BMI, Timer, paginile zilelor săptămânii).
* `assets/` - Resursele media (imagini, iconițe, splash screen).
* `App.js` - Punctul de intrare principal în aplicație.
* `app.json` - Configurația specifică Expo.

## Tehnologii și Librării

* **React Native** - Framework pentru aplicații native.
* **Expo SDK** - Set de instrumente pentru dezvoltare rapidă.
* **React Navigation** - Gestionarea tranzițiilor între ecrane.
* **JavaScript (ES6+)** - Limbajul de programare principal.

## Cum instalezi și rulezi proiectul

Urmează acești pași pentru a rula aplicația pe propriul dispozitiv:

1. **Clonează repository-ul:**
   ```bash
   git clone [https://github.com/doruchitu/FitnessApp.git](https://github.com/doruchitu/FitnessApp.git)
2. **Navighează în folderul proiectului și rulează:**
           npm install
3. **Pornește serverul Expo:**
           npx expo start
4. **Rulează pe telefon:**
    -Instalează aplicația Expo Go din Google Play sau App Store.
    -Scanează codul QR generat în terminal cu camera telefonului sau cu aplicația Expo Go.
    -Asigură-te că telefonul și calculatorul sunt conectate la aceeași rețea Wi-Fi.
