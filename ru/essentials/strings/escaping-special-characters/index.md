---
title: Экранирование специальных символов в строках Raku
---

{% include menu.html %}

Представьте, что вы хотите напечатать ценник, и вы храните имя и цену продукта в
скалярных переменных:

```raku
my $product = 'Electricity';
my $price = 3.14;
```

Как напечатать ценник, если цена должна быть в долларах? Ожидаемый вывод
`Electricity costs $3.14`. Знак доллара в двойных кавычках — это индикатор
переменной, которую нужно интерполировать. Чтобы вывести сам символ `$`, его
нужно экранировать:

```raku
say "$product costs \$$price";
```

Конечно же, вы можете использовать конкатенацию строк и избежать экранирования
`$`:

```raku
say $product ~ ' costs $' ~ $price;
```

Этот подход выведет ту же самую строку, но интерполяция выглядит более
естественной и ее проще прочитать. Отметим, что символ `$` не был ни
интерполирован, ни экранирован в строке с одинарными кавычками: `' costs
$'`. Это и есть основная разница. Специальные символы в одинарных кавычках
пишутся без изменений.

Вот еще несколько специальных символов, у которых есть особенное значение в
строке с двойными кавычками.

`\$` | Знак доллара
`\n` | Новая строка
`\r` | Возврат каретки
`\t` | Горизонтальный таб
`\"` | Двойная кавычка
`\\` | Обратный слэш

Выбранные кавычки диктуют, как Raku видит специальные символы. Рассмотрим эти
два примера:

```raku
say 'One\nTwo';
say "Three\nFour";
```

Если вы запустите эту программу, вы увидите, что первая строчка выводится как
есть, на одной строке. Вторая же строчка была разбита на две части:

```
One\nTwo
Three
Four
```

В двойных кавычках специальная последовательность `\n` была интерпретирована как
символ новой строки, тогда как в одинарных кавычках это была обычная
последовательность двух символов: `\` и `n`.

Есть интересное исключение для `'` и `\`. В одинарных кавычках вы можете
экранировать другую одинарную кавычку, поставив перед ней `\`:

```raku
say '\''; # '
```

Обратный слэш тоже должен быть экранирован, если сразу за ним следует одинарная кавычка:

```raku
say 'a\b\c\\'; # a\b\c\
```

{% assign human=1 %}
{% include nav.html %}
