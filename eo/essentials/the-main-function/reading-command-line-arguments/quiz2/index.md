---
title: Kvizo 2 — Defaŭltaj valoroj
---

{% include menu.html %}

Konsideru la jenan programon.

```raku
sub MAIN($a = 'abc', $b = 'def') {
    say $a;
    say $b;
}
```

## 1

Kion ĝi presas se ĝi estas ruliĝita kiel montrite sube?

```console
$ raku t.raku
```

{:.quiz-code .nocode}
abc def | Enigu la elirajn valorojn: ␣␣␣ kaj ␣␣␣

## 2

Nun, la sama programo estas ruliĝita kiel:

```console
$ raku t.raku xyz
```

{:.quiz-code .nocode}
xyz def | Enigu la elirajn valorojn: ␣␣␣ kaj ␣␣␣

## 3

Fine, ĉi tiu komando:

```console
$ raku t.raku xyz 123
```

{:.quiz-code .nocode}
xyz 123 | Enigu la elirajn valorojn: ␣␣␣ kaj ␣␣␣

{% include quiz.html %}

{% include nav.html %}