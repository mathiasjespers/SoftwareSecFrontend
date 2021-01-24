# Mathias Jespers' Usseless Clicking Game
- Publiek url: https://mathiasjespers.be 
- Hosting via [Combell](https://www.combell.com/en/). De webtoepassing maakt gebruik van React en [Auth0](https://auth0.com/)
- [Backend Repository](https://github.com/mathiasjespers/softwaresec_backend)


## HTTPS
- Indien er een http request naar mathiasjespers.be wordt gestuurd dan wordt er een 301 response gestuurd
- Alle request worden over https verstuurd  
- mathiasjespers.be maakt gebruik van een ssl certificaat via [Let's Encrypt](https://letsencrypt.org/#)


## Registratie en Authenticatie
Users registreren op mathiasjespers.be via de auth0 api. Persoonlijke gegevens worden ook door auth0 bijgehouden. Gebruikers kunnen ook met hun google account inloggen. De google gegevens worden dan gebruikt om een auth0 login aan te maken voor de gebruiker.

Wachtwoord policy:
- alle 'printable' ASCII karakters worden aanvaard in het wachtwoord
- het wachtwoord moet minsten 8 charachters bevatten
- het wachtwoord moet minsten één kleine letter, één hoofdletter en één nummer bevatten
- het is mogelijk om het wachtwoord te plakken


## Bescherming persoonlijke gegevens
- De webtoepassing is conform met de privacy wetgeving. 
- De User kan de Privacyverklaring ten alle tijden raadplegen. 
- De webtoepassing maakt enkel gebruik van noodzakelijke cookies waar hij van op de hoogte wordt gesteld bij het aanmelden. 
- De user kan zijn gegvens opvragen en wissen. 
- Indien de user bezwaar heeft kan hij contact opzoeken, zoals vermeld in de privacy verklaring.


## Maatregelen tegen courante aanvallen
- De webtoepassing is beveiligd tegen de opgelijste courante aanvallen.
- Er worden maatregellen getroven tegen typische web vulnerabilities.
- Geheimen worden beveiligd.


## Verwerkingsregister
1. Contactgegegevens -bedrijfsnaam: Mathias Jespers -adress: Jan Blockxstraat 10, 1030 Schaarbeek -email: mathias.jespers@student.ehb.be
2. Categorie persoonsgegevens: naam, voornaam, email en passwoord 
3. Categorie betrokkennen: users
4. Grondslag voor verwerking: uitvoering overeenkomst 
5. Doel verwerking: administratie
6. Locatie verwerker: binnen de EU 
7. Bewaartermijn: tot de user het account verwijderd 
8. Veiligheidsmaatregelen: Voorafgaande autorisatie en het encrypteren van data 
9. Verwerkingsactiviteiten van bijzondere persoonsgegevens: NVT 
10. Datum aanmaken register: 18 december 2020 
11. Met welke partijen worden de personengegevens gedeeld: [Auth0](https://auth0.com/)
