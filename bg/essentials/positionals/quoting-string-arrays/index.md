---
title: Цитиране на масиви от низове
---

{% include menu.html %}

За масиви от низове, където елементите са кратки низове без интервали, Raku предлага удобен синтаксис за инициализация.

```raku
my @digits = <zero one two three four five six seven eight nine>;
```

Вие решавате дали да добавите допълнителни интервали около ъгловите скоби или не. Компилаторът приема и двата варианта.

```raku
my @digits = < zero one two three four five six seven eight nine >;
```

И двете конструкции са еквивалентни на директния вариант:

```raku
my @digits = 'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine';
```

%%tipblock
## Масив срещу Списък

Забележете, че в горните примери, цитатът `< . . . >` създава `List`, а не `Array`. Можете да го потвърдите, като извикате метода `WHAT`:

```raku
say <a b c>.WHAT; # (List)
```

Въпреки това, когато го присвоите на масив, получавате масив с елементите от списъка.

```raku
my @a = <a b c>;
say @a.WHAT; # (Array)
```

%%/tipblock

{% include nav.html %}