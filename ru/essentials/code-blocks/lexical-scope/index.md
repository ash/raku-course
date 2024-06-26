---
title: Лексическая область видимости
---

{% include menu.html %}

Блок кода создает, так называемую, лексическую область видимости. Переменные,
объявленные в текущем блоке, видны только внутри него, и исчезают после того,
как программа покидает этот блок. Рассмотрим пример:

```raku
{
    my $x = 42;
    say $x;
}

say $x;
```

Переменная `$x` создается внутри блока кода. Первый вызов `say $x` печатает
значение переменной, потому что она видна внутри блока. Второй вызов `say $x`
вылетает с ошибкой, потому что имя `$x` отсутствует вне блока и неизвестно после
его окончания. Программа отказывается компилироваться и выводит ошибку:

```
===SORRY!=== Error while compiling /Users/ash/raku-course/t.raku
Variable '$x' is not declared
at /Users/ash/raku-course/t.raku:6
------> say ⏏$x;
```

{% assign human=1 %}
{% include nav.html %}
