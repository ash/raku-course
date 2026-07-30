---
title: 'Solution: Even, oneven of nul'
translations_gpt: true
---

{% include menu.html %}

Hier is een mogelijke oplossing voor de opgave.

## Code

```raku
my $n = 12;

given $n {
    when 0      { say 'zero' }
    when $_ %% 2 { say 'even' }
    default     { say 'odd' }
}
```

🦋 Je kunt de broncode vinden in het bestand [sign-of-a-number.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/given-when/sign-of-a-number.raku).

## Uitvoer

```
even
```

## Opmerkingen

1. `when 0` matcht de enkele waarde nul. Het komt eerst omdat nul ook even is, en we het apart willen rapporteren.

1. `when $_ %% 2` is een voorwaarde, waarbij `$_` het topic is dat door `given` is ingesteld: de `%%`-operator test of het deelbaar is door twee. De waarde `12` is niet nul maar is deelbaar door twee, dus het programma drukt `even` af.

1. `default` dekt al het overige — de getallen die noch nul noch even zijn, dat wil zeggen, de oneven getallen.

{% include nav.html %}
