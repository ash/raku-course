---
title: Многострочные комментарии
---

{% include menu.html %}

Как только вы захотите оставить комментарий, который больше одной строки, у вас
есть выбор: либо оставить несколько однострочных комментариев, либо один
многострочный.

Многострочные комментарии начинаются с комбинации из двух символов ``#` `` и
заключены в пару охватывающих символов `( )`, `{ }`, `[ ]`, `< >` или их
повторяющиеся копии: `(( ))`, `[[[ ]]]` и так далее.

Например:

```raku
my $name;
#`( We are going to ask the user
to enter their name first and then
save the input in a variable. )

$name = prompt 'What is your name? ';
#`{ The program now waits
until the user enters the name
and presses Enter. }

say $name; #`( And now we can print it )
```

{% assign human=1 %}
{% include nav.html %}
