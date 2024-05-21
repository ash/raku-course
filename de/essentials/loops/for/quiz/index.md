---
title: 'Verstehen der `for`-Schleife'
---

{% include menu.html %}

Für jedes der drei Programme unten, geben Sie an, wie viele Zeilen sie drucken.

## 1

```raku
for 1..10 {
    say 'Zeile';
}
```

{:.quiz-select}
10 | Ihre Antwort:&nbsp; (: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11 :)

## 2

```raku
for 1..10 -> $n {
    say 'Zeile';
}
```

{:.quiz-select}
10 | Ihre Antwort:&nbsp; (: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11 :)

## 3

```raku
for 1..10 -> $a, $b {
    say 'Zeile';
}
```

{:.quiz-select}
5 | Ihre Antwort:&nbsp; (: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11 :)


{% include quiz.html %}

{% include nav.html %}