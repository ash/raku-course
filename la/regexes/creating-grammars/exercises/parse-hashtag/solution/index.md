---
title: 'Solutio: Cancellum analysa'
translations_gpt:
---

{% include menu.html %}

Ecce solutio possibilis huius exercitationis.

## Codex

```raku
grammar Hashtag {
    token TOP { '#' <tag> }
    token tag { \w+ }
}

say Hashtag.parse('#raku')<tag>;
```

🦋 Inveni codicem fontem in archivo [parse-hashtag.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/creating-grammars/parse-hashtag.raku).

## Exitus

```
｢raku｣
```

## Commentarii

1. `TOP` fixum `#` explicat quod tessera `<tag>` sequitur.

1. `.parse` postulat ut tota catena congruat, et tessera deinde ut captura `<tag>` praesto est.

## Solutio alia

Loco eius `tag` totum cancellum congruere sinere potes — `#` una cum verbo — et verbum per regulam nidificatam `word` attingere:

```raku
grammar Hashtag {
    token TOP  { <tag> }
    token tag  { '#' <word> }
    token word { \w+ }
}

say Hashtag.parse('#raku')<tag><word>;
```

Hoc idem `｢raku｣` imprimit. Nunc `<tag>` totum `#raku` capit, dum verbum intra illud ut `<tag><word>` attingitur. Grammatica paulo magis ut res quam describit legitur — cancellus *est* `#` quod verbum sequitur, et verbum pars nominata per se est.

{% include nav.html %}
