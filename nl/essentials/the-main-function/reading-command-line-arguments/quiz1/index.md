---
title: Quiz — Lezen van command-line argumenten in de MAIN functie
---

{% include menu.html %}

Hier is het programma:

```raku
sub MAIN($a) {
    say $a;
}
```

## 1

Wat print het als het als volgt wordt uitgevoerd?

```console
$ raku t.raku 123
```

{:.quiz-code .nocode}
123 | Voer de verwachte output in: ␣␣␣␣␣␣␣

## 2

Wat print het nu?

```console
$ raku t.raku "123 456"
```

{:.quiz-code .nocode}
123␣456 | Voer de verwachte output in: ␣␣␣␣␣␣␣


{% include quiz.html %}

{% include nav.html %}