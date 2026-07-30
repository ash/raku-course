---
title: 'Solution: Percentage-operator'
translations_gpt:
---

{% include menu.html %}

Hier is een mogelijke oplossing voor de opgave.

## Code

```raku
sub infix:<percent-of>($p, $whole) {
    $whole * $p / 100
}

say 20 percent-of 150;
```

🦋 Je kunt de broncode vinden in het bestand [percent-of-operator.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/user-defined-operators/percent-of-operator.raku).

## Uitvoer

```
30
```

## Opmerkingen

1. De operator neemt het percentage `$p` als linker operand en het totaalbedrag `$whole` als rechter operand.

1. Door `$whole` te vermenigvuldigen met `$p` en te delen door `100` krijg je het gevraagde deel: `150 * 20 / 100` is `30`.

{% include nav.html %}
