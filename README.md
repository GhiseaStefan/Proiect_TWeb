# Proiect Tehnologii Web - Aplicație web pentru partajarea experiențelor utilizării mijloacelor de transport
## Echipa: Ghisea Stefan-Mihai, Gogan Catalin - Grupa: 1084
## Descriere:
Aplicația permite crearea unui cont prin care utilizatorul poate să partajeze o experiență, după ce a folosit un mijloc de transport în comun. Pentru utilizatorii anonimi, aplicația va permite căutarea și vizualizarea intrărilor în platforma.
## Funcționalități:
### Modulul Utilizator
-	Creare cont utilizator pe baza unor câmpuri sau cu ajutorul unui API extern (GMAIL, Facebook, Linkedin)
-	Modificarea sau dezactivarea contului
-	Resetarea parolei
### Modulul de Partajare
-	Crearea unei experiențe presupune completarea următoarelor câmpuri:
    -	Punctul de plecare (A)
    -	Punctul de sosire (B)
    -	Mijlocul de transport folosit: bus, metro, tram, etc.
    -	Ora plecare
    -	Durata călătoriei
    -	Gradul de aglomerare al mijlocului de transport
    -	Observații
    -	Nivelul de satisfacție (smiley faces)
-	Modificarea intrărilor specifice utilizatorului
-	Listarea tuturor experiențelor create de un utilizator
-	Ștergerea unei experiențe
### Modulul de Căutare
-	Modulul de căutare va trebui să permită utilizatorului introducerea unor cuvinte cheie, după care vor fi afișate rezultatele, sub formă de listă.
-	Modulul va trebui să returneze rezultate relevante în funcție de locație, mijlocul de transport folosit sau destinație
### Instructiuni rulare
1. Pornire server - npm run server
2. Pornire client - npm start
Aplicatia permite momentan: Creeare, Citire, Modificare, Stergere si Cautare de Experiente ale unui utilizator de transport public.