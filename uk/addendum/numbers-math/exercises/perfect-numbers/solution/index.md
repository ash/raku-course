---
title: Розв'язання вправи «Досконалі числа»
translations_gpt:
---

{% include menu.html %}

Ось одне з можливих розв'язань задачі.

## Код

```raku
my @perfect = (1..30).grep: -> $n {
    $n == [+] (1..^$n).grep($n %% *)
};

say @perfect;
```

🦋 Знайдіть програму у файлі [perfect-numbers.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/numbers-math/perfect-numbers.raku).

## Вивід

```
[6 28]
```

## Коментарі

1. `(1..^$n).grep($n %% *)` залишає числа, менші за `$n`, що ділять його націло, —
його власні дільники. `%% *` є функцією з Whatever, що перевіряє подільність.

1. `[+]` підсумовує ці дільники, а зовнішній `grep` залишає лише ті числа, що
дорівнюють цій сумі.

{% include nav.html %}
