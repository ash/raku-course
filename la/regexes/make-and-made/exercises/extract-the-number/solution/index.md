---
title: 'Solutio: Numerum extrahe'
translations_gpt:
---

{% include menu.html %}

Ecce solutio possibilis huius exercitationis.

## Codex

```raku
grammar Weight {
    token TOP    { <number> 'kg' { make $<number>.Int } }
    token number { \d+ }
}

say Weight.parse('5kg').made;
```

🦋 Inveni codicem fontem in archivo [extract-the-number.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/make-and-made/extract-the-number.raku).

## Exitus

```
5
```

## Commentarii

1. Exemplar cifras et litterale `kg` congruit, sed clausula inserta solum `$<number>.Int` servat — integrum, sine unitate.

1. `made` illum valorem relegit: verum `5`, ad computandum paratum, potius quam textum `5kg`. Hoc est munus typicum `make` — congruentiam in mundum valorem quem revera vis vertere.

{% include nav.html %}
