---
title: Використання repeat
---

{% include menu.html %}

Блоки `while` та `until` можуть ніколи не виконуватися, якщо умова спочатку є `False`. На відміну від них, блок `repeat` завжди виконується хоча б один раз. Умова зупинки перевіряється після виконання блоку коду. Ви використовуєте ті ж самі слова `while` або `until` для перевірки.

Розглянемо цю програму.

```raku
my $x = 100;
repeat {
    $x = prompt 'Enter a number: ';
    say "You entered $x.";
} while $x <= 10;
say "$x is bigger than 10.";
```

Змінна `$x` спочатку встановлюється в `100`, і умова `while` перевіряє, чи менше або дорівнює `$x` `10`. З даним значенням змінної, умова вже є `False`, але блок коду все одно виконується спочатку.

```console
$ raku t.raku
Enter a number: 10
You entered 10.
Enter a number: 20
You entered 20.
20 is bigger than 10.
```

Давайте змінимо програму, щоб використовувати `until`.

```raku
my $x = 0;
repeat {
    $x = prompt 'Enter a number: ';
    say "You entered $x.";
} until $x > 10;
say "$x is bigger than 10.";
```

Запустіть її, щоб переконатися, що вона працює як очікується:

```console
$ raku t.raku
Enter a number: 5
You entered 5.
Enter a number: 15
You entered 15.
15 is bigger than 10.
```

{% include nav.html %}