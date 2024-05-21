---
title: 'Exercise: Seen before?'
---

{% include menu.html %}

## Проблема

Створіть програму, яка запускає цикл з наступними діями:

1. Запропонуйте ввести слово.
2. Якщо слово вже було введено один раз, виведіть `Seen!`.
3. Якщо слово було введено більше одного разу, виведіть `Seen 2 times!`, тощо.
3. Повторюйте цикл.

## Приклад

Приклад взаємодії з програмою:

```console
$ raku seen-before.raku
Word: I
Word: never
Word: saw
Word: a
Word: saw
Seen!
Word: that
Word: saw
Seen 2 times!
True
Word: as
Word: that
Seen!
Word: saw
Seen 3 times!
True
Word: sawed
Word: ^C
```

Щоб зупинити програму, натисніть `Ctrl+C`.

## Рішення

✅ [Дивіться рішення](solution)

{% include nav.html %}