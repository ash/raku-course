---
title: Рутината print
---

{% include menu.html %}

Вградената рутина `print` прави следното:

1. Преобразува аргументите си в низ, като извиква метода `Str` върху тях.
1. Изпраща ги към потока `STDOUT`.

За прости типове данни, изходът, генериран от `print`, е подобен на изхода на [`say`](../say) без символа за нов ред в края.

```raku
print 42;
print 'Raku';
```

Тези стойности се отпечатват една след друга. Няма нов ред в края на целия изход също.

```console
$ raku t.raku
42Raku
```

За агрегатни данни, резултатът може да се различава от това, което виждате с `say`. Например, опитайте масиви и хешове:

```raku
my @data = 'alpha', 'beta', 'gamma';
print @data;

print "\n"; # За да разделите частите

my %data = alpha => 1, beta => 2, gamma => 3;
print %data;
```

Така изглежда изходът:

```console
$ raku t.raku
alpha beta gamma
alpha	1
beta	2
gamma	3
```

Рутината `print` може също да бъде извикана като метод:

```raku
my @data = 'alpha', 'beta', 'gamma';
@data.print;

"\n".print;
```

{% include nav.html %}