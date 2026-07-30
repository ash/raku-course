---
title: 'Oplossing: Een ruit van klassen'
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

class C is A {
}

class D is B is C {
}

say D.^mro.map(*.^name);
```

🦋 Je kunt de broncode vinden in het bestand [diamond-mro.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/mop/diamond-mro.raku).

## Uitvoer

```
(D B C A Any Mu)
```

## Opmerkingen

1. `D` erft van twee ouders tegelijk — `class D is B is C` noemt elk van beide met een eigen `is`. Dit is meervoudige overerving, en `A`, `B`, `C`, `D` vormen een *ruit*: twee paden van `D` omhoog naar de gedeelde voorouder `A`.

1. `.^mro` plat die ruit uit tot één enkele, lineaire zoekvolgorde. `D` komt eerst, dan zijn ouders `B` en `C` in de volgorde waarin ze geschreven zijn, dan de gedeelde `A`, en ten slotte `Any` en `Mu`.

1. Ook al leiden zowel `B` als `C` naar `A`, het type `A` verschijnt **één keer**, en pas na allebei. Dat is de bedoeling van een method resolution order: elk type wordt precies één keer bezocht, en een ouder komt nooit vóór een kind dat ervan erft — zodat een methode die in `B` gedefinieerd is altijd gevonden wordt vóór degene die hij in `A` zou overschrijven.

{% include nav.html %}
