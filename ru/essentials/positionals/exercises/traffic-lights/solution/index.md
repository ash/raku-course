---
title: 'Решение: Светофор'
---

{% include menu.html %}

Идея решения заключается в «зацикливании индексации» массива с четырьмя состояниями светофора:

```raku
my @lights = <yellow red yellow green>;
```

В первые секунды количество секунд с начала можно напрямую использовать в качестве индекса в массиве. Когда оно превышает 3, можно зациклить его к началу массива с помощью оператора модуля `%`. Длина массива — это `@lights.elems`, но когда он используется как операнд `%`, нет необходимости вызывать метод `elems`, так как имя массива будет преобразовано в число, и это преобразование предназначено для возврата количества элементов.

## Код

Вот решение:

```raku
my @lights = <yellow red yellow green>;

say @lights[51 % @lights];
say @lights[102 % @lights];
say @lights[305 % @lights];
```

🦋 Найдите программу в файле [traffic-lights.raku](https://github.com/ash/raku-course/blob/master/exercises/essentials/positionals/traffic-lights.raku).

## Вывод

Запустите программу. Дополнительно попробуйте другие значения в программе.

```console
$ raku exercises/positionals/traffic-lights.raku
green
yellow
red
```

{% include nav.html %}