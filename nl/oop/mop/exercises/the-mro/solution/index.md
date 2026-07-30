---
title: 'Oplossing: De method resolution order'
translations_gpt:
---

{% include menu.html %}

Hier is een mogelijke oplossing voor de taak.

## Code

```raku
class A {
}

class B is A {
}

class C is B {
}

say C.^mro.map(*.^name);
```

🦋 Je kunt de broncode vinden in het bestand [the-mro.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/mop/the-mro.raku).

## Uitvoer

```
(C B A Any Mu)
```

## Opmerkingen

1. `.^mro` geeft de keten van typen terug die Raku doorzoekt bij het oplossen van een methode.

1. De keten volgt de overervingslijn stap voor stap: `C`, dan zijn ouder `B`, dan de ouder van `B`, `A`, en ten slotte `Any` en `Mu`, waarmee elk type eindigt. Een diepere hiërarchie maakt de lijst eenvoudigweg langer.

{% include nav.html %}
