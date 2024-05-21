---
title: Използване на repeat
---

{% include menu.html %}

Блоковете `while` и `until` може никога да не се изпълнят, ако условието първоначално е `False`. За разлика от тях, блокът `repeat` винаги се изпълнява поне веднъж. Условието за спиране се проверява след изпълнението на кода в блока. Използвате същите думи `while` или `until` за теста.

Разгледайте тази програма.

```raku
my $x = 100;
repeat {
    $x = prompt 'Enter a number: ';
    say "You entered $x.";
} while $x <= 10;
say "$x is bigger than 10.";
```

Променливата `$x` първоначално е зададена на `100`, а условието `while` проверява дали `$x` е по-малко или равно на `10`. С дадената стойност на променливата, условието вече е `False`, но блокът с код все пак се изпълнява първо.

```console
$ raku t.raku
Enter a number: 10
You entered 10.
Enter a number: 20
You entered 20.
20 is bigger than 10.
```

Нека модифицираме програмата, за да използва `until`.

```raku
my $x = 0;
repeat {
    $x = prompt 'Enter a number: ';
    say "You entered $x.";
} until $x > 10;
say "$x is bigger than 10.";
```

Стартирайте я, за да потвърдите, че работи както се очаква:

```console
$ raku t.raku
Enter a number: 5
You entered 5.
Enter a number: 15
You entered 15.
15 is bigger than 10.
```

{% include nav.html %}