---
title: 'Solution: Absolute waarde'
---

{% include menu.html %}

Hier is een mogelijke oplossing voor de opgave.

## Code

```raku
multi sub abs-value(Int $n where $n < 0) { -$n }
multi sub abs-value(Int $n)              { $n }

say abs-value(-7);
say abs-value(4);
```

🦋 Je kunt de broncode vinden in het bestand [absolute-value.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/multiple-dispatch/absolute-value.raku).

## Uitvoer

```
7
4
```

## Opmerkingen

1. De eerste kandidaat komt alleen overeen met negatieve getallen en geeft de genegeerde waarde terug, die positief is.

1. Elk ander getal — nul en de positieve getallen — gaat naar de tweede kandidaat, die de waarde ongewijzigd teruggeeft.

{% include nav.html %}
