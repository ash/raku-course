---
title: Тернарный оператор
---

{% include menu.html %}

Тернарный оператор в Raku состоит из конструкции с двумя частями: `??`
... `!!`. За логической проверкой следуют два выражения, одно из которых
выполняется в зависимости от результат проверки.

```raku
my $shines = 'Sun';
my $day-time = $shines eq 'Sun' ?? 'day' !! 'night';
say $day-time;
```

С текущим значением переменной `$shines` программа выведет `days`. Если вы
поменяете значение на `Moon`, то результатом будет `night`.

Также возможно составлять цепочки тернарных операторов. Но стоит обращать
внимание, чтобы не сделать все это слишком сложным.

```raku
my $hours = 20;
my $day-time =
    $hours <= 6 ?? 'Night' !!
    $hours <= 12 ?? 'Morning' !! 
    $hours <= 18 ?? 'Afternoon' !! 'Evening';
say $day-time;
```

Здесь в зависимости от значения `$hours` будет напечатана соответствующая часть
дня.

{% assign human=1 %}
{% include nav.html %}
