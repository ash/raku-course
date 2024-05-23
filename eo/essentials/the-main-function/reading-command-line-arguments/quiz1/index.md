---
title: Kvizo — Legado de komando-linio argumentoj en la ĉefa funkcio
---

{% include menu.html %}

Jen la programo:

```raku
sub MAIN($a) {
    say $a;
}
```

## 1

Kion ĝi presas se ĝi estas lanĉita kiel montrite sube?

```console
$ raku t.raku 123
```

{:.quiz-code .nocode}
123 | Enigu la atenditan eliron: ␣␣␣␣␣␣␣

## 2

Kion ĝi presas nun?

```console
$ raku t.raku "123 456"
```

{:.quiz-code .nocode}
123␣456 | Enigu la atenditan eliron: ␣␣␣␣␣␣␣


{% include quiz.html %}

{% include nav.html %}