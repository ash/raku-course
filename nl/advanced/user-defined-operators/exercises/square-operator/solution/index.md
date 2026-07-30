---
title: 'Solution: Een kwadraatoperator'
translations_gpt:
---

{% include menu.html %}

Hier is een mogelijke oplossing voor de opgave.

## Code

```raku
sub postfix:<²>($x) {
    $x ** 2
}

say 5²;
```

🦋 Je kunt de broncode vinden in het bestand [square-operator.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/user-defined-operators/square-operator.raku).

## Uitvoer

```
25
```

## Opmerkingen

1. De operator is gedeclareerd als `postfix:<²>`, dus zijn symbool — het superscript-twee-teken — wordt na zijn operand geschreven, zoals in `5²`.

1. De body verheft de operand tot de tweede macht, dus `5²` evalueert tot `25`. Niets weerhoudt je ervan om een Unicode-symbool te gebruiken dat de wiskundige notatie weerspiegelt.

{% include nav.html %}
