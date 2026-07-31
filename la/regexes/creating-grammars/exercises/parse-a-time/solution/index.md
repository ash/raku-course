---
title: 'Solutio: Horam analysa'
translations_gpt:
---

{% include menu.html %}

Ecce solutio possibilis huius exercitationis.

## Codex

```raku
grammar Time {
    token TOP    { <hour> ':' <minute> ':' <second> }
    token hour   { \d ** 2 }
    token minute { \d ** 2 }
    token second { \d ** 2 }
}

say Time.parse('09:30:45')<second>;
```

🦋 Inveni codicem fontem in archivo [parse-a-time.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/creating-grammars/parse-a-time.raku).

## Exitus

```
｢45｣
```

## Commentarii

1. `TOP` totam horam ut tres tesseras colis separatas describit. Unaquaeque pars est `\d ** 2` — exacte duae cifrae — potius quam apertum `\d+`, itaque valor male formatus qualis `09:30:456` reicitur. (Si pars sine nulla praefixa esse potest, ut hora in `9:30:45`, scribe `\d ** 1..2` ut unam vel duas cifras permittas.)

1. Post analysin unaquaeque tessera captura nominata est, itaque secundum ut `<second>` in congruentia legitur. Tertiam partem addere est una tessera amplius et unum colon amplius — grammatica naturaliter crescit.

{% include nav.html %}
