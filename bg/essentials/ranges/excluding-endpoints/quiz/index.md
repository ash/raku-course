---
title: Тест — Създаване на диапазони
---

{% include menu.html %}

Изберете редовете с правилен синтаксис на Raku.

{:.quiz}
1 | 1..10
1 | 1 .. 10
1 | -1..20
0 | -1 . . 20
1 | 6^..10
0 | 7^.. ^10
1 | 10..^20
1 | 30^..^30
0 | 30 ^ .. ^ 30
1 | 30 ^..^ 30
1 | ^40
1 | ^ 50 | Добре, но изглежда малко странно.
0 | 60^ | Невалиден синтаксис.

## Коментари

Всички оператори за създаване на диапазони (както и други оператори в Raku) са непрекъснати последователности от символи, така че не можете да вмъквате интервал между техните части.

{% include quiz.html %}

{% include nav.html %}