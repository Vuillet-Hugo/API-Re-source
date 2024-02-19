# API Rest Express.js + SupaBase + Architecture Hexagonale Like

- API REST placée entre un client Front End et SupaBase pour gérer la logique métier, à appliquer avant d'accéder au système de persistance de données proposé par SupaBase.
- Architecture applicative découplée inspirée de l'Architecture Hexagonale.

## Signin

```BASH
curl -i -X POST "localhost:3333/auth/signin" -u "john@doe.com:azerty"
```

## Signup

```BASH
curl -i -X POST "http://localhost:3333/auth/signup" --data '{"firstname":"James","lastname":"Smith","login":"james@smith.com","password":"azerty"'
```

## Read Pizzas

```BASH
curl -i "localhost:3333/pizzas"
```

## Read Pizza by id

```BASH
curl -i "localhost:3333/pizzas/1"
```

## Read Users

```BASH
curl -i "localhost:3333/users"
```

## Read User by email

```BASH
curl -i "localhost:3333/users/?email=john@doe.com"
```

## Read User by id

```BASH
curl -i "localhost:3333/users/?id=6bff9660-ede5-4f84-901b-efea162727ad"
```

--

!["Logotype Shrp"](https://shrp.dev/images/shrp.png)

__Alexandre Leroux__  
_Enseignant / Formateur_  
_Développeur logiciel web & mobile_

Nancy (Grand Est, France)

<https://shrp.dev>
