---
title: 'Решение: Цифровая лестница'
---

{% include menu.html %}

Программа использует два цикла и два диапазона.

## Код

Вот одно из возможных решений:

```raku
my $size = prompt 'Введите размер: ';

for 1..$size -> $n {
    .print for 1..$n;
    print "\n";
}
```

🦋 Найдите программу в файле [digital-stairs.raku](https://github.com/ash/raku-course/blob/master/exercises/essentials/loops/digital-stairs.raku).

## Вывод

Запустите программу и введите размер структуры:

```console
$ raku exercises/loops/digital-stairs.raku
Введите размер: 7
1
12
123
1234
12345
123456
1234567
```

## Комментарий

Обратите внимание, как печатается текущая цифра:

```raku
.print for 1..$n;
```

Как и `say`, функция `print` может быть вызвана как метод. В данном случае она вызывается на [переменной темы](/ru/essentials/loops/topic) `$_`.

{% include nav.html %}