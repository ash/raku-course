---
title: 'Solution: Een closure in een q-string'
translations_gpt:
---

{% include menu.html %}

Hier is een mogelijke oplossing voor de opgave.

## Code

```raku
my $x = 10;
say q:c/$x squared is {$x ** 2}/;
```

🦋 Je kunt de broncode vinden in het bestand [closure-quote.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/quoting/closure-quote.raku).

## Uitvoer

```
$x squared is 100
```

## Opmerkingen

1. Het `:c` (closure) bijwoord schakelt interpolatie van ingebedde `{ ... }`-code in binnen de anders letterlijke `q`-vorm. Binnen de accolades is `$x` echte code, dus `{$x ** 2}` evalueert tot `100`.

1. De `$x` buiten de accolades blijft precies zo staan als geschreven, omdat het scalaire bijwoord `:s` *niet* is ingeschakeld. Dit is precies het nut van de bijwoorden per functie: je krijgt ingebedde code zonder ook `$`-interpolatie in te schakelen.

1. Bijwoorden kunnen worden gestapeld. Voeg ook `:s` toe, en de eerste `$x` wordt ook geinterpoleerd — beide functies zijn nu tegelijk actief:

```raku
my $x = 10;
say q:c:s/$x squared is {$x ** 2}/; # 10 squared is 100
```

{% include nav.html %}
