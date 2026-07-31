---
title: 'Risinājums: Likums ar atstarpēm'
translations_gpt:
---

{% include menu.html %}

Šeit ir iespējams risinājums uzdevumam.

## Kods

```raku
grammar Phrase {
    rule TOP   { <word> <word> <word> }
    token word { \w+ }
}

say Phrase.parse('the quick fox').defined;
```

🦋 Atrodiet programmu failā [spaced-rule.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/tokens-and-rules/spaced-rule.raku).

## Izvade

```
True
```

## Komentāri

1. Tā kā `TOP` ir `rule`, katra atstarpe, kas uzrakstīta starp `<word>` izsaukumiem, pieprasa atstarpi ievadē.

1. Virknē `'the quick fox'` ir atstarpes starp visiem trim vārdiem, tāpēc tā parsējas. Ja `TOP` būtu `token`, atstarpes raksturā tiktu ignorētas un parsēšana neizdotos.

{% include nav.html %}
