---
title: 'Risinājums: Metožu izšķiršanas kārtība'
translations_gpt:
---

{% include menu.html %}

Šeit ir iespējams risinājums uzdevumam.

## Kods

```raku
class A {
}

class B is A {
}

class C is B {
}

say C.^mro.map(*.^name);
```

🦋 Atrodiet programmu failā [the-mro.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/mop/the-mro.raku).

## Izvade

```
(C B A Any Mu)
```

## Komentāri

1. `.^mro` atgriež tipu ķēdi, ko Raku pārmeklē, atrisinot metodi.

1. Ķēde seko mantošanas līnijai pa vienam solim: `C`, tad tā vecākklase `B`, tad `B` vecākklase `A` un visbeidzot `Any` un `Mu`, ar ko beidzas katrs tips. Dziļāka hierarhija vienkārši padara sarakstu garāku.

{% include nav.html %}
