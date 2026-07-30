---
title: 'Oplossing: Vang de fout'
translations_gpt:
---

{% include menu.html %}

Hier is een mogelijke oplossing voor de taak.

## Code

```raku
my $ok = try { 6 * 7 };
say $ok;

my $bad = try { die 'broken' };
say $bad.defined;
say $!.message;
```

🦋 Je kunt de broncode vinden in het bestand [catch-the-error.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/try/catch-the-error.raku).

## Uitvoer

```
42
False
broken
```

## Opmerkingen

1. Wanneer het blok zonder fout draait, evalueert `try` eenvoudigweg naar de waarde van het blok, dus `$ok` bevat `42`.

1. De `die` in het tweede blok werpt een exceptie, dus dat blok evalueert naar een ongedefinieerde waarde en `$bad.defined` is `False`.

1. De gevangen exceptie wordt in de bijzondere variabele `$!` bewaard, en `$!.message` geeft de tekst terug die eraan meegegeven is, `broken`.

{% include nav.html %}
