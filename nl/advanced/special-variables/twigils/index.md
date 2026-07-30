---
title: Twigils
---

{% include menu.html %}

Een _twigil_ is een teken dat tussen de sigil en de naam van een variabele wordt geplaatst. Het verandert de naam niet; het verandert hoe de variabele zich gedraagt en wordt opgezocht. De meest voorkomende zijn:

* `*` — een **dynamische** variabele, bijv. `$*OUT`, opgezocht via de call stack
* `?` — een **compile-time** waarde die door de compiler wordt aangeleverd, bijv. `$?FILE`, `$?LINE`
* `!` — een **privaat** attribuut van een object, bijv. `$!balance`
* `.` — een attribuut dat via zijn accessor-methode wordt benaderd, bijv. `$.name`

Je bent er al een aantal van tegengekomen zonder de twigil bij naam te noemen: `$*OUT` en `$*IN` (dynamisch), en `$!`/`$.` in [het deel over objecten](/nl/oop).

De door de compiler aangeleverde `?`-variabelen worden ingevuld terwijl je programma wordt gecompileerd:

```raku
say $?LINE; # the line number of this statement
say $?FILE; # the path of this source file
```

Elke twigil duidt in één oogopslag een ander soort variabele aan, dus als je `$*foo` leest, weet je meteen dat het dynamisch is, en bij `$?foo` dat het een compile-time constante is. Het volgende onderwerp bekijkt [dynamische variabelen](/nl/advanced/special-variables/dynamic-variables) in detail, omdat ze zich heel anders gedragen dan de lexicale variabelen die je tot nu toe hebt gebruikt.

{% include nav.html %}
