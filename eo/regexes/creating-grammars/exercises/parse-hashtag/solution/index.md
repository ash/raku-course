---
title: 'Solvo: Analizu kradvorton'
translations_gpt:
---

{% include menu.html %}

Jen ebla solvo de la tasko.

## Kodo

```raku
grammar Hashtag {
    token TOP { '#' <tag> }
    token tag { \w+ }
}

say Hashtag.parse('#raku')<tag>;
```

🦋 Vi povas trovi la fontkodon en la dosiero [parse-hashtag.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/creating-grammars/parse-hashtag.raku).

## Eligo

```
｢raku｣
```

## Komentoj

1. `TOP` literumas la fiksitan `#` sekvatan de la ĵetono `<tag>`.

1. `.parse` postulas, ke la tuta ĉeno kongruu, kaj la etikedo tiam disponeblas kiel la kapto `<tag>`.

## Alternativo

Vi povas anstataŭe lasi `tag` kongrui kun la tuta kradvorto — la `#` kune kun la vorto — kaj atingi la vorton tra nestita regulo `word`:

```raku
grammar Hashtag {
    token TOP  { <tag> }
    token tag  { '#' <word> }
    token word { \w+ }
}

say Hashtag.parse('#raku')<tag><word>;
```

Ĉi tio presas la saman `｢raku｣`. Nun `<tag>` kaptas la tutan `#raku`, dum la vorto ene de ĝi estas atingata kiel `<tag><word>`. La gramatiko legiĝas iom pli kiel la aĵo, kiun ĝi priskribas — kradvorto *estas* `#` sekvata de vorto, kaj la vorto estas nomita peco propranome.

{% include nav.html %}
