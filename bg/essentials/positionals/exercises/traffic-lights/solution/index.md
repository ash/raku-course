---
title: 'Solution: Светофари'
---

{% include menu.html %}

Идеята на решението е да се „завърти индексирането“ на масива с четирите състояния на светофарите:

```raku
my @lights = <yellow red yellow green>;
```

През първите секунди, броят на секундите от началото може директно да се използва като индекс в масива. Когато надвиши 3, можете да го завъртите към началото на масива с оператора за остатък `%`. Дължината на масива е `@lights.elems`, но когато се използва като операнд на `%`, няма нужда да се извиква методът `elems`, тъй като името на масива ще бъде преобразувано в число, а това преобразуване е проектирано да връща броя на елементите.

## Код

Ето решението:

```raku
my @lights = <yellow red yellow green>;

say @lights[51 % @lights];
say @lights[102 % @lights];
say @lights[305 % @lights];
```

🦋 Намерете програмата във файла [traffic-lights.raku](https://github.com/ash/raku-course/blob/master/exercises/essentials/positionals/traffic-lights.raku).

## Изход

Стартирайте програмата. Освен това, опитайте други стойности в програмата.

```console
$ raku exercises/positionals/traffic-lights.raku
green
yellow
red
```

{% include nav.html %}