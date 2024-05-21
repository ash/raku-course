---
title: until
---

{% include menu.html %}

Конструкцията `until` е противоположна на `while`. Тя изпълнява блока от код, докато условието стане `True` (или, с други думи, докато е `False`).

Ето модифицирана [програма от предишната страница](../while), която използва `until` и ново условие:

```raku
my $x = 0;
until $x > 10 {
    $x = prompt 'Enter a number, which is not bigger than 10: ';
    say "You entered $x.";
}
say "$x is bigger than 10.";
```

Стартирайте програмата и проверете изхода:

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

## `until` срещу `while`

Сравнете еквивалентните програми с `while` и `until`:

```raku
while $x <= 10 { . . . }

until $x > 10 { . . . }
```

Както виждате, условията са отрицателни версии едно на друго. В този смисъл, `while` и `until` са в същите отношения като `if` и `unless`.

{% include nav.html %}