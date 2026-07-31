---
title: La hereda ĉeno
translations_gpt:
---

{% include menu.html %}

Kiam unu klaso heredas de alia, vi povas peti la tutan ĉenon de tipoj, sur kiuj ĝi estas konstruita. La metametodo `.^mro` redonas ĉi tiun ĉenon — la nomo signifas _ordo de metodserĉado_, la ordo, en kiu Raku serĉas metodon.

```raku
class Animal {
}

class Dog is Animal {
}

say Dog.^mro; # ((Dog) (Animal) (Any) (Mu))
```

Legante de maldekstre: `Dog` estas unue si mem, poste `Animal` (ĝia patro), poste `Any` kaj `Mu` — la du tipoj, de kiuj ĉiu Raku-objekto heredas tute supre. Kiam vi vokas metodon sur `Dog`, Raku traserĉas ĉi tiun liston de maldekstre dekstren kaj uzas la unuan kongruan metodon, kiun ĝi trovas. Ĝuste tial la metodo de ido superregas tiun de la patro: la ido aperas pli frue en la ĉeno.

Por klaso sen eksplicita patro, la ĉeno estas pli mallonga — nur la klaso mem, sekvata de `Any` kaj `Mu`.

{% include nav.html %}
