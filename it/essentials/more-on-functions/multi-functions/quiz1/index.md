---
title: Quiz 1 — Simple multi-functions
---

{% include menu.html %}

Quali sono i modi corretti per creare una multi-funzione?

## 1

```raku
sub func($a) {. . .}
sub func($a, $b) {. . .}
```

{:.quiz-select}
incorrect | Queste definizioni sono&nbsp; (: corrette, scorrette :) | Manca il dichiaratore `multi`.

## 2

```raku
multi func($a) {. . .}
multi func($a, $b) {. . .}
```

{:.quiz-select}
correct | Queste definizioni sono&nbsp; (: corrette, scorrette :) | Manca il dichiaratore `sub`, ma è accettabile.

## 3

```raku
multi sub func($a) {. . .}
multi sub func($a, $b) {. . .}
```

{:.quiz-select}
correct | Queste definizioni sono&nbsp; (: corrette, scorrette :) | Totalmente perfetto.

## 4

```raku
sub multi func($a) {. . .}
sub multi func($a, $b) {. . .}
```

{:.quiz-select}
incorrect | Queste definizioni sono&nbsp; (: corrette, scorrette :) | Dovrebbe essere `multi` `sub`, non `sub` `multi`.

## 5

```raku
multi sub func($a) {. . .}
multi sub func($b) {. . .}
```

{:.quiz-select}
incorrect | Queste definizioni sono&nbsp; (: corrette, scorrette :) | Le firme non possono essere distinte in un dispatch multiplo.


{% include quiz.html %}

{% include nav.html %}