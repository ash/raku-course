---
title: Quiz 2 — Standaardwaarden
---

{% include menu.html %}

Overweeg het volgende programma.

```raku
sub MAIN($a = 'abc', $b = 'def') {
    say $a;
    say $b;
}
```

## 1

Wat print het als het wordt uitgevoerd zoals hieronder getoond?

```console
$ raku t.raku
```

{:.quiz-code .nocode}
abc def | Voer de uitvoerwaarden in: ␣␣␣ en ␣␣␣

## 2

Nu wordt hetzelfde programma uitgevoerd als:

```console
$ raku t.raku xyz
```

{:.quiz-code .nocode}
xyz def | Voer de uitvoerwaarden in: ␣␣␣ en ␣␣␣

## 3

Tenslotte, dit commando:

```console
$ raku t.raku xyz 123
```

{:.quiz-code .nocode}
xyz 123 | Voer de uitvoerwaarden in: ␣␣␣ en ␣␣␣

{% include quiz.html %}

{% include nav.html %}