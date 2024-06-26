---
title: Двойки
---

{% include menu.html %}

Двойката е структура от данни, която съхранява име и стойност. Те формират солиден обект, който може да бъде съхранен в скаларна променлива. Ето пример как се създава двойка:

```raku
my $pair = name => 'Anna';
```

Типът на променливата `$pair` е `Pair`:

```raku
say $pair.WHAT; # (Pair)
```

Възможно е да се достъпи името и стойността поотделно, като се използват съответните методи `key` и `value`:

```raku
say $pair.key; # name
say $pair.value; # Anna
```

Важна характеристика на двойките е, че те са неизменяеми обекти. Това означава, че не можете да присвоите нова стойност или да дадете ново име на съществуваща двойка. Но, разбира се, можете да присвоите напълно нова двойка на същата променлива:

```raku
my $pair = name => 'Anna';
$pair = name => 'John';
say $pair.value; # John
```

## Индексиране

Има и друг метод за четене на стойността на двойка. Можете да я индексирате с името на нейния ключ между ъглови скоби. Ето как става това:

```raku
say $pair<name>;
```

Забележете, че няма нужда да цитирате името на ключа, ако то не съдържа интервали. Ако съдържа, нещата стават малко по-строги:

```raku
my $pair = 'employee name' => 'Julie Madelon';
say $pair{'employee name'};
```

Не пропускайте факта, че този път се използват къдрави скоби.

{% include nav.html %}