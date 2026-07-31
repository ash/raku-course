---
title: 'Solutio: Litterae maiores per react'
translations_gpt:
---

{% include menu.html %}

Ecce solutio possibilis huius exercitationis.

## Codex

```raku
my @collected;

react {
    whenever Supply.from-list('a', 'b', 'c') {
        @collected.push($_.uc);
    }
}

say @collected;
```

🦋 Inveni codicem fontem in archivo [react-upcase.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/react-whenever/react-upcase.raku).

## Exitus

```
[A B C]
```

## Commentarii

1. Corpus `whenever` semel pro valore currit, illum in maiusculas vertens et in `@collected` immittens.

1. `react` unum supply finire exspectat, itaque cum `say` currit ordo omnes tres valores ordine tenet: `[A B C]`.

1. Supply methodos indici similes proprias habet, itaque in fluxu potius quam in corpore in maiusculas vertere posses — `whenever Supply.from-list('a', 'b', 'c').map(*.uc) { @collected.push($_) }` — et effectus idem est. `.map` in supply unumquemque valorem dum praeterfluit transformat; optio mere est utrum transformatio ad fluxum an ad reactionem pertineat.

{% include nav.html %}
