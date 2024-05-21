---
title: while
---

{% include menu.html %}

Конструкція `while` має булеву умову та блок коду. Raku виконує блок коду повторно _поки_ умова є `True`.

```raku
my $x = 0;
while $x <= 10 {
    $x = prompt 'Enter a number, which is not bigger than 10: ';
    say "You entered $x.";
}
say "$x is bigger than 10.";
```

Програма просить ввести число, і якщо число не більше 10, тіло циклу повторюється. Як тільки введене число порушує умову `$x <= 10`, цикл закінчується, і виконується наступний рядок програми.

```console
$ raku t.raku
Enter a number, which is not bigger than 10: 10
You entered 10.
Enter a number, which is not bigger than 10: 4
You entered 4.
Enter a number, which is not bigger than 10: 1
You entered 1.
Enter a number, which is not bigger than 10: 20
You entered 20.
20 is bigger than 10.
```

{% include nav.html %}