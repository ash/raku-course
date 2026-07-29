---
title: 'Solution: Номера на дни от седмицата'
---

{% include menu.html %}

Ето едно възможно решение на задачата.

## Код

```raku
enum Day (Mon => 1, Tue => 2, Wed => 3, Thu => 4, Fri => 5);

say Day(5);
say Day(1);
```

🦋 Можете да намерите пълния код във файла [weekday-values.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/enumerations/weekday-values.raku).

## Резултат

```
Fri
Mon
```

## Коментари

1. Записването на константите като двойки ви позволява да изберете числата, тук започвайки от `1`.

1. Извикването на изброимия тип като `Day(5)` извършва обратно търсене: намира константата, чиято стойност е `5`, което е `Fri`. По същия начин `Day(1)` дава `Mon`. Това е обратното на `Fri.value`, което би преминало от името към числото.

{% include nav.html %}
