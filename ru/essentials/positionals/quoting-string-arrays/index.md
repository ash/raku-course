---
title: Quoting string arrays
---

{% include menu.html %}

Для строковых массивов, где элементы являются короткими строками без пробелов, Raku предлагает удобный синтаксис для их инициализации.

```raku
my @digits = <zero one two three four five six seven eight nine>;
```

Вы можете сами решить, добавлять ли дополнительные пробелы вокруг угловых скобок или нет. Компилятор принимает оба варианта.

```raku
my @digits = < zero one two three four five six seven eight nine >;
```

Обе конструкции эквивалентны простому варианту:

```raku
my @digits = 'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine';
```

%%tipblock
## Массив vs Список

Обратите внимание, что в приведенных выше примерах, кавычки `< . . . >` создают `List`, а не `Array`. Вы можете подтвердить это, вызвав метод `WHAT`:

```raku
say <a b c>.WHAT; # (List)
```

Тем не менее, когда вы присваиваете это массиву, вы получаете массив с элементами из списка.

```raku
my @a = <a b c>;
say @a.WHAT; # (Array)
```

%%/tipblock

{% include nav.html %}