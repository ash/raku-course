---
title: Печать рутины
---

{% include menu.html %}

Встроенная рутина `print` выполняет следующие действия:

1. Преобразует свои аргументы в строку, вызывая метод `Str` на них.
1. Отправляет их в поток `STDOUT`.

Для простых типов данных вывод, создаваемый `print`, аналогичен выводу [`say`](../say) без символа новой строки в конце.

```raku
print 42;
print 'Raku';
```

Эти значения печатаются одно за другим. В конце всего вывода также нет символа новой строки.

```console
$ raku t.raku
42Raku
```

Для агрегированных данных результат может отличаться от того, что вы видите с `say`. Например, попробуйте массивы и хэши:

```raku
my @data = 'alpha', 'beta', 'gamma';
print @data;

print "\n"; # Чтобы разделить части

my %data = alpha => 1, beta => 2, gamma => 3;
print %data;
```

Вот как выглядит вывод:

```console
$ raku t.raku
alpha beta gamma
alpha	1
beta	2
gamma	3
```

Рутину `print` также можно вызвать как метод:

```raku
my @data = 'alpha', 'beta', 'gamma';
@data.print;

"\n".print;
```

{% include nav.html %}