---
title: 'Решение: Распределение яблок'
---

{% include menu.html %}

Ниже решение к этой проблеме.

## Код

```raku
my $N = 3;
my $K = 11;

my $gets = $K div $N;
my $remains = $K % $N;

say "Each person gets $gets apple(s).";
say "There are $remains apple(s) remaining.";
```

🦋 Вы можете найти исходный код в файле [apple-sharing.raku](https://github.com/ash/raku-course/blob/master/exercises/essentials/numbers/apple-sharing.raku).

## Вывод

С входными числами 3 и 11 программа выведет следующий результат:

```console
$ raku exercises/numbers/apple-sharing.raku
Each person gets 3 apple(s).
There are 2 apple(s) remaining.
```

Измените начальные значения `$N` и `$K` чтобы смоделировать другие ситуации:

* `$K` кратно `$N`, например, `12` и `3`;
* `$K` равно `$N`;
* `$K` меньше `$N`.


## Комментарии

В программе мы использовали два оператора: `div` для целочисленного деления и
`%` для получения остатка от деления. Иначе можно выполнить вычисления следующим
способом:

```raku
my $gets = $K div $N;
my $remains = $K - $N * $gets;
```

Также обратите внимание, как переменные были интерполированы в строке.

{% assign human=1 %}
{% include nav.html %}
