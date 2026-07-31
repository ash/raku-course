---
title: 'Solutio: Ordinem verborum inverte'
translations_gpt:
---

{% include menu.html %}

Ecce solutio possibilis huius exercitationis.

## Codex

```raku
grammar Phrase {
    token TOP  { <word> [ ' ' <word> ]* { make $<word>».made.join(' ') } }
    token word { \w+ { make $/.flip } }
}

say Phrase.parse('hello world').made;
```

🦋 Inveni codicem fontem in archivo [reverse-the-words.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/make-and-made/reverse-the-words.raku).

## Exitus

```
olleh dlrow
```

## Commentarii

1. Unaquaeque tessera `word` proprium textum inversum facit: clausula eius inserta currit quotiens verbum congruit, et `make $/.flip` verbum servat — `$/` est congruentia currens — retro scriptum.

1. `TOP` verba per `<word> [ ' ' <word> ]*` congruit — unum verbum, deinde quotlibet «spatium deinde verbum» — et ea coniungit. `$<word>` est series omnium congruentiarum verborum; `».made` textum inversum quem unaquaeque servavit extrahit, et `.join(' ')` locutionem cum spatiis reaedificat.

1. Illa forma «res, deinde res, deinde res…» satis frequens est ut compendium habeat: separatorem `%`. `<word>+ % ' '` scribere significat «unum vel plura `<word>`, spatio separata», et easdem locutiones exacte congruit quas `<word> [ ' ' <word> ]*` — solum compendiosius.

1. Itaque `make` et `made` duobus gradibus hic operantur: partes parvae valores suos faciunt, et totum ex eis fit. `.made` in effectu legens `olleh dlrow` accipis.

{% include nav.html %}
