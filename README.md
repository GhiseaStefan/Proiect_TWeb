# Proiect Tehnologii Web - Aplicație web pentru partajarea experiențelor utilizării mijloacelor de transport
## Echipa: Ghisea Stefan-Mihai, Gogan Catalin - Grupa: 1084
## Descriere:
Aplicația permite crearea unui cont prin care utilizatorul poate să partajeze o experiență, după ce a folosit un mijloc de transport în comun. Pentru utilizatorii anonimi, aplicația va permite căutarea și vizualizarea intrărilor în platforma.
## Functionalitati:
-   Creeare cont, conditii pentru parola
-   Logare in cont cu validare
-   Cautare experiente in functie de: Utilizatorul care a postat, Locatie, Mijloc de transport
-   Daca esti logat pe site:
-   Schimbare parola: 
    -   Validare pentru parola veche
    -   Conditii pentru parola noua
-   Stergere cont:
    -   Validare pentru email
    -   Validare pentru parola
-   Delogare
-   Adaugare experienta noua cu validare pentru fiecare camp
-	Crearea unei experiențe presupune completarea următoarelor câmpuri:
    -	Punctul de plecare (A)
    -	Punctul de sosire (B)
    -	Mijlocul de transport folosit: metrou, tramvai, autobuz
    -	Ora plecare
    -	Durata călătoriei
    -	Gradul de aglomerare al mijlocului de transport
    -	Observații
    -	Nivelul de satisfacție (smiley faces)
-   Stergere experienta - valabil doar daca utilizatorul logat coincide cu utilizatorul care a postat experienta
-   Modificare experienta - valabil doar daca utilizatorul logat coincide cu utilizatorul care a postat experienta
## Instructiuni rulare
-	Pornire server - cd server, npm install, npm start
-	Pornire client - cd client, npm install, npm start
### Conturi pentru testare:
-   vlad@gmail.com - parola1@A
-   dana@gmail.com - parola123@A