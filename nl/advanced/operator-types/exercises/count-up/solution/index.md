---
title: 'Solution: Optellen'
translations_gpt:
---

{% include menu.html %}

Hier is een mogelijke oplossing voor de opgave.

## Code

```raku
my $n = 9;

say $n++;
say $n;
```

🦋 Je kunt de broncode vinden in het bestand [count-up.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/operator-types/count-up.raku).

## Uitvoer

```
9
10
```

## Opmerkingen

1. `++` is een postfix-operator: deze komt na zijn operand. Gebruikt als een uitdrukking levert `$n++` eerst de *oude* waarde `9` op — dat is wat `say` afdrukt — en verhoogt pas daarna de variabele.

1. De tweede regel laat zien dat `$n` inderdaad `10` is geworden. (De prefix-vorm `++$n` zou in plaats daarvan eerst verhogen en `10` teruggeven.)

{% include nav.html %}
