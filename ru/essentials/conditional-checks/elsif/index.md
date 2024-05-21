---
title: 'Использование `elsif`'
---

{% include menu.html %}

Пока мы познакомились с `if` и `else`. Что если вы хотите организовать цепочку
проверок? Есть как минимум два способа сделать это в Raku (на самом деле их
гораздо больше).

Один из вариантов — это использовать цепочку из `if`, `elsif` и `else`
блоков. Обратите внимание на написание `elsif` — это не `elseif` и не `else if`.


```raku
my $x = prompt 'Enter the number: ';
if $x > 100 {
    say "$x is bigger than 100.";
}
elsif $x > 50 {
    say "$x is bigger than 50.";
}
elsif $x > 25 {
    say "$x is bigger than 25.";
}
else {
    say "$x is 25 or smaller.";
}
```

В этой программе есть три ветки и три проверки, следующие одна за другой. Как
только одно из условий вернет `True`, соответствующий блок кода будет
запущен. Если ни одна проверка не вернет `True`, то будет запущен блок `else`.

Вот несколько запусков программы, которые проходятся по всем блокам:

```console
$ raku t.raku
Enter the number: 120
120 is bigger than 100.

$ raku t.raku
Enter the number: 75
75 is bigger than 50.

$ raku t.raku
Enter the number: 30
30 is bigger than 25.

$ raku t.raku
Enter the number: 10
10 is 25 or smaller.
```

Другой способ — это использовать пару `given` и `when`, с которыми мы еще
познакомимся.

{% assign human=1 %}
{% include nav.html %}
