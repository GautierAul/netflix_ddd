Schéma UML de l'application
![alt text](NETFLIX.drawio.png "Title")

L'app est séparé en plusieurs micro-services :
- User : S'occupe de la gestion des comptes
- Payement : Contient les différentes souscriptions et les payements éffectué. Il sera aussi à charge de s'occuper des payements
- Media : Contient les informations concernant les films et séries + les infos liées à l'utilisateurs (avancement, watchlist, ...)
- MediaPlayer : Va permettre de lire les contenus vidéos
  