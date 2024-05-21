---
title: Quiz 1 — Vienkāršas daudzfunkcijas
---

{% include menu.html %}

Kādi ir pareizie veidi, kā izveidot daudzfunkciju?

## 1

```raku
sub func($a) {. . .}
sub func($a, $b) {. . .}
```

{:.quiz-select}
nepareizi | Šīs definīcijas ir&nbsp; (: pareizi, nepareizi :) | Trūkst `multi` deklaratora.

## 2

```raku
multi func($a) {. . .}
multi func($a, $b) {. . .}
```

{:.quiz-select}
pareizi | Šīs definīcijas ir&nbsp; (: pareizi, nepareizi :) | Trūkst `sub` deklaratora, bet tas ir pieņemami.

## 3

```raku
multi sub func($a) {. . .}
multi sub func($a, $b) {. . .}
```

{:.quiz-select}
pareizi | Šīs definīcijas ir&nbsp; (: pareizi, nepareizi :) | Pilnīgi perfekti.

## 4

```raku
sub multi func($a) {. . .}
sub multi func($a, $b) {. . .}
```

{:.quiz-select}
nepareizi | Šīs definīcijas ir&nbsp; (: pareizi, nepareizi :) | Jābūt `multi` `sub`, nevis `sub` `multi`.

## 5

```raku
multi sub func($a) {. . .}
multi sub func($b) {. . .}
```

{:.quiz-select}
nepareizi | Šīs definīcijas ir&nbsp; (: pareizi, nepareizi :) | Parakstus nevar atšķirt vairākkārtējā izsaukumā.


{% include quiz.html %}

{% include nav.html %}