---
title: 'Solution: Світлофори'
---

{% include menu.html %}

Ідея рішення полягає в тому, щоб «зациклити індексацію» масиву з чотирма станами світлофора:

```raku
my @lights = <yellow red yellow green>;
```

Протягом перших секунд, кількість секунд з початку можна безпосередньо використовувати як індекс у масиві. Коли вона перевищує 3, ви можете зациклити її на початок масиву за допомогою оператора модуло `%`. Довжина масиву дорівнює `@lights.elems`, але коли вона використовується як операнд `%`, немає потреби викликати метод `elems`, оскільки ім'я масиву буде перетворено на число, і це перетворення призначене для повернення кількості елементів.

## Код

Ось рішення:

```raku
my @lights = <yellow red yellow green>;

say @lights[51 % @lights];
say @lights[102 % @lights];
say @lights[305 % @lights];
```

🦋 Знайдіть програму у файлі [traffic-lights.raku](https://github.com/ash/raku-course/blob/master/exercises/essentials/positionals/traffic-lights.raku).

## Вивід

Запустіть програму. Додатково спробуйте інші значення в програмі.

```console
$ raku exercises/positionals/traffic-lights.raku
green
yellow
red
```

{% include nav.html %}