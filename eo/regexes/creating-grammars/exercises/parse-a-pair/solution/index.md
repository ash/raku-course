---
title: 'Solvo: Analizu plenan nomon'
translations_gpt:
---

{% include menu.html %}

Jen ebla solvo de la tasko.

## Kodo

```raku
grammar FullName {
    token TOP   { <first> ' ' <last> }
    token first { \w+ }
    token last  { \w+ }
}

say FullName.parse('Grace Hopper')<last>;
```

🦋 Vi povas trovi la fontkodon en la dosiero [parse-a-pair.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/creating-grammars/parse-a-pair.raku).

## Eligo

```
｢Hopper｣
```

## Komentoj

1. `TOP` priskribas la tutan nomon; `first` kaj `last` priskribas ĝiajn partojn, kun laŭlitera spaco inter ili.

1. Post la analizo, ĉiu ĵetono estas nomita kapto, do la familia nomo estas legata kiel `<last>` sur la kongrua objekto.

{% include nav.html %}
