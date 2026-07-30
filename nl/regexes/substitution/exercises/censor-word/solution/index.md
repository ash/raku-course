---
title: 'Oplossing: Censureer een woord'
translations_gpt:
---

{% include menu.html %}

Hier is een mogelijke oplossing voor de taak.

## Code

```raku
my $s = 'secret secret plan';
$s ~~ s:g/secret/***/;
say $s;
```

🦋 Je kunt de broncode vinden in het bestand [censor-word.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/substitution/censor-word.raku).

## Uitvoer

```
*** *** plan
```

## Opmerkingen

1. De operator `s///` vervangt het gematchte `secret` door de letterlijke tekst `***`, zonder aanhalingstekens geschreven, en verandert `$s` ter plaatse.

1. Het bijwoord `:g` is wat hem **beide** voorkomens laat vervangen. Zonder dat zou alleen de eerste `secret` gecensureerd worden.

{% include nav.html %}
