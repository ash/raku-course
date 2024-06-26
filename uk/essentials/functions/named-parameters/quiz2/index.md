---
title: Вікторина — Змінні як іменовані параметри
---

{% include menu.html %}

Ось та сама функція, що і в попередній вікторині:

```raku
sub f(:$a, :$b) {
    $a - $b
}
```

У програмі також є три змінні:

```raku
my $a = 1;
my $b = 2;
my $c = 3;
```

Позначте всі допустимі способи виклику функції та передачі двох із трьох змінних до неї.

{:.quiz}
1 | f(a => $a, b => $b)
1 | f(a => $c, b => $c)
0 | f($a, $b) | Тут передаються позиційні аргументи замість іменованих.
1 | f(:$a, :$b)
0 | f($:a, $:b) | Неприпустимий синтаксис Raku.
0 | f(:$b, :$c) | Немає іменованого параметра `c`.
0 | f(:$a, c => $c) | Немає іменованого параметра `c`.
1 | f(:$a, b => $c)
1 | f(:$a, :b($c)) | Те саме, що і вище.
1 | f(:a($a), :b($c)) | Також правильно, хоча трохи надмірно.


{% include quiz.html %}

{% include nav.html %}