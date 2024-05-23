---
title: Solutio ‘Convertendi input usoris ad numerum’
---

{% include menu.html %}

Programma tam simplex esse potest:

## Codex

```raku
my Int $n = prompt 'Enter a number: ';
say $n;
```

🦋 Codicem fontis invenire potes in fasciculo [input-number.raku](https://github.com/ash/raku-course/blob/master/exercises/typed-variables/input-number.raku).

## Exemplum

Eum exsequere et numerum integrum, sive positivum sive negativum, inserere:

```console
$ raku exercises/typed-variables/input-number.raku
Enter a number: -42
-42
```

## Commentarii

Ut [vidimus](/la/essentials/typed-variables/allomorphs), valor reditus `prompt` est `IntStr`, qui variabili `Int` sine coactione assignari potest.

Animadverte tamen, programmatum exceptione terminatum iri si chorda inseritur quae in numerum integrum converti non potest.

{% include nav.html %}