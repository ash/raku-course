---
title: Цитування масивів рядків
---

{% include menu.html %}

Для масивів рядків, де елементи є короткими рядками без пробілів, Raku пропонує зручний синтаксис для їх ініціалізації.

```raku
my @digits = <zero one two three four five six seven eight nine>;
```

Ви можете самостійно вирішити, чи додавати додаткові пробіли навколо кутових дужок чи ні. Компілятор приймає обидва варіанти.

```raku
my @digits = < zero one two three four five six seven eight nine >;
```

Обидві конструкції еквівалентні простому варіанту:

```raku
my @digits = 'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine';
```

%%tipblock
## Масив vs Список

Зверніть увагу, що в наведених вище прикладах цитування `< . . . >` створює `List`, а не `Array`. Ви можете підтвердити це, викликавши метод `WHAT`:

```raku
say <a b c>.WHAT; # (List)
```

Проте, коли ви присвоюєте його масиву, ви отримуєте масив з елементами зі списку.

```raku
my @a = <a b c>;
say @a.WHAT; # (Array)
```

%%/tipblock

{% include nav.html %}