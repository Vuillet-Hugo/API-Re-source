
# API REST Ressources

Cette API permet de gérer les utilisateurs et les ressources d'un site de gestion de ressources. Elle inclut les fonctionnalités de création, lecture, mise à jour et suppression (CRUD) pour les utilisateurs et les ressources.

## Technologies utilisées

- Node.js
- Express
- Supabase
- Axios
- Bcrypt (pour le hachage des mots de passe)
- JSON Web Token (JWT) pour l'authentification

## Prérequis

Avant de commencer, assurez-vous d'avoir installé les dépendances nécessaires avec la commande suivante :

```bash
npm install
```

Et assurez-vous que votre fichier `.env` contient les bonnes informations pour la connexion à Supabase et autres variables nécessaires.

## Routes de l'API

### Utilisateurs

#### 1. **GET** `/users`
Récupère tous les utilisateurs.

- **Réponse** : Un tableau avec tous les utilisateurs.
- **Exemple de réponse** :
  ```json
  [
    {
      "id": 1,
      "firstname": "John",
      "lastname": "Doe",
      "email": "john.doe@example.com",
      "password": "*****"
    },
    {
      "id": 2,
      "firstname": "Jane",
      "lastname": "Smith",
      "email": "jane.smith@example.com",
      "password": "*****"
    }
  ]
  ```

#### 2. **GET** `/users/:id`
Récupère un utilisateur par son `id`.

- **Paramètre** : `id` - L'identifiant de l'utilisateur.
- **Réponse** : L'utilisateur correspondant.
- **Exemple de réponse** :
  ```json
  {
    "id": 1,
    "firstname": "John",
    "lastname": "Doe",
    "email": "john.doe@example.com",
    "password": "*****"
  }
  ```

#### 3. **POST** `/users`
Crée un nouvel utilisateur.

- **Corps de la requête** :
  ```json
  {
    "email": "newuser@example.com",
    "password": "securepassword",
    "firstname": "New",
    "lastname": "User"
  }
  ```
- **Réponse** : Utilisateur créé.
- **Exemple de réponse** :
  ```json
  {
    "id": 3,
    "firstname": "New",
    "lastname": "User",
    "email": "newuser@example.com",
    "password": "*****"
  }
  ```

#### 4. **PATCH** `/users/:id`
Mise à jour partielle d'un utilisateur.

- **Paramètre** : `id` - L'identifiant de l'utilisateur.
- **Corps de la requête** :
  ```json
  {
    "firstname": "UpdatedName",
    "lastname": "UpdatedLastName"
  }
  ```
- **Réponse** : L'utilisateur mis à jour.
- **Exemple de réponse** :
  ```json
  {
    "id": 1,
    "firstname": "UpdatedName",
    "lastname": "UpdatedLastName",
    "email": "john.doe@example.com",
    "password": "*****"
  }
  ```

#### 5. **DELETE** `/users/:id`
Supprime un utilisateur.

- **Paramètre** : `id` - L'identifiant de l'utilisateur à supprimer.
- **Réponse** : Statut de suppression (200 OK si succès).

---

### Ressources

#### 1. **GET** `/ressources`
Récupère toutes les ressources.

- **Réponse** : Un tableau de ressources.
- **Exemple de réponse** :
  ```json
  [
{
  "id": 2
  "nom": "Mon super titre 2",
  "format": 2,
  "contenue": "https://example.comhttps://example.comhttps://example.comhttps://example.comhttps://example.comhttps://example.com",
  "description": "articlhttps://example.come",
  "date": "12/02/2025",
  "nbCom": 0,
  "nbLike":0,
  "nbReport":0,
  "visible":true
},
{
  "id": 3,
  "nom": "Mon super titre 2",
  "format": 2,
  "contenue": "https://example.comhttps://example.comhttps://example.comhttps://example.comhttps://example.comhttps://example.com",
  "description": "articlhttps://example.come",
  "date": "12/02/2025",
  "nbCom": 0,
  "nbLike":0,
  "nbReport":0,
  "visible":true
}
  ]
  ```

#### 2. **POST** `/ressources`
Crée une nouvelle ressource.

- **Corps de la requête** :
  ```json
  {
  "nom": "Mon super titre 2",
  "format": 2,
  "contenue": "https://example.comhttps://example.comhttps://example.comhttps://example.comhttps://example.comhttps://example.com",
  "description": "articlhttps://example.come",
  "date": "12/02/2025",
  "nbCom": 0,
  "nbLike":0,
  "nbReport":0,
  "visible":true
}
  ```
- **Réponse** : La ressource créée.
- **Exemple de réponse** :
  ```json
  {
    "id": 3,
    "name": "New Resource",
    "ingredients": "ingredient5, ingredient6",
    "price": 20.99,
    "color": "green"
  }
  ```

#### 3. **PATCH** `/ressources/:id`
Mise à jour partielle d'une ressource.

- **Paramètre** : `id` - L'identifiant de la ressource.
- **Corps de la requête** :
  ```json
  {
    "contenue": "Lorem ipsum"
  }
  ```
- **Réponse** : La ressource mise à jour.
- **Exemple de réponse** :
  ```json
  {
    "id": 1,
    "name": "Resource 1",
    "ingredients": "ingredient1, ingredient2",
    "price": 25.99,
    "color": "red"
  }
  ```

#### 4. **DELETE** `/ressources/:id`
Supprime une ressource.

- **Paramètre** : `id` - L'identifiant de la ressource.
- **Réponse** : Statut de suppression (200 OK si succès).

---

## Authentification

Pour l'authentification des utilisateurs, vous pouvez utiliser les **Basic Auth** en envoyant un **header Authorization** avec les identifiants sous la forme suivante :

```
Authorization: Basic base64(email:password)
```

### Exemple

- Email : `john.doe@example.com`
- Mot de passe : `securepassword`

La chaîne `email:password` sera encodée en Base64 et envoyée dans l'en-tête.

### Commentaires

Vous pouvez créez et afficher des commentaires

#### 1. **POST**

**Paramètre**
  {
    "utilisateurID": 4,
    "ressourceID": 1, (l'ID de la ressource du com)
    "contenue": "premier commentaire de fou",
    "date": "12/03/2025",
    "nbLike": 0,
    "nbReport":0,
    "visible": true
}

#### 2. **GET**

**Paramètre**
  {
    id : 4 (l'ID de la ressource pour récup tout ces commentaires)
  }


## Exemples de requêtes avec Postman

1. **GET** `/users` - Récupérer tous les utilisateurs
2. **POST** `/users` - Créer un utilisateur
3. **PATCH** `/users/1` - Mettre à jour l'utilisateur avec l'ID `1`
4. **DELETE** `/users/1` - Supprimer l'utilisateur avec l'ID `1`
5. **GET** `/ressources` - Récupérer toutes les ressources
6. **POST** `/ressources` - Créer une ressource
7. **PATCH** `/ressources/1` - Mettre à jour la ressource avec l'ID `1`
8. **DELETE** `/ressources/1` - Supprimer la ressource avec l'ID `1`
8. **POST** `/Commentaires` - Créer un nouveau commentaire
8. **GET** `/Commentaires/1` - Récupere les commentaires de la ressource qui a l'ID `1`

---

## Conclusion

Cette API vous permet de gérer les utilisateurs et les ressources de manière simple et sécurisée. Assurez-vous de protéger vos clés API et de sécuriser les endpoints si nécessaire.
