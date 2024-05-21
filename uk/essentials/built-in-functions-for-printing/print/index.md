---
title: Рутинна функція print
---

{% include menu.html %}

Вбудована рутинна функція `print` виконує наступне:

1. Перетворює свої аргументи на рядок, викликаючи метод `Str` на них.
1. Відправляє його до потоку `STDOUT`.

Для простих типів даних, вихід, згенерований `print`, схожий на вихід [`say`](../say) без символу нового рядка в кінці.

```raku
print 42;
print 'Raku';
```

Ці значення друкуються одне за одним. Також немає символу нового рядка в кінці всього виводу.

```console
$ raku t.raku
42Raku
```

Для агрегатних даних результат може відрізнятися від того, що ви бачите з `say`. Наприклад, спробуйте масиви та хеші:

```raku
my @data = 'alpha', 'beta', 'gamma';
print @data;

print "\n"; # Щоб розділити частини

my %data = alpha => 1, beta => 2, gamma => 3;
print %data;
```

Ось як виглядає вихід:

```console
$ raku t.raku
alpha beta gamma
alpha	1
beta	2
gamma	3
```

Рутинну функцію `print` також можна викликати як метод:

```raku
my @data = 'alpha', 'beta', 'gamma';
@data.print;

"\n".print;
```

{% include nav.html %}