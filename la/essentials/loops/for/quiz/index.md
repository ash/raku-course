---
title: 'Intellectus de `for` anulo'
---

{% include menu.html %}

Pro singulis trium programmatum infra, dic quot lineas imprimant.

## 1

```raku
for 1..10 {
    say 'Linea';
}
```

{:.quiz-select}
10 | Tua responsio:&nbsp; (: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11 :)

## 2

```raku
for 1..10 -> $n {
    say 'Linea';
}
```

{:.quiz-select}
10 | Tua responsio:&nbsp; (: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11 :)

## 3

```raku
for 1..10 -> $a, $b {
    say 'Linea';
}
```

{:.quiz-select}
5 | Tua responsio:&nbsp; (: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11 :)


{% include quiz.html %}

{% include nav.html %}