---
title: 'Розв''язання: Обмін значеннями'
---

{% include menu.html %}

У цій програмі ми використовуємо елементи синтаксису Raku з розділу про [скалярні змінні](/uk/essentials/scalar-variables).

## Код

```raku
my ($a, $b) = 10, 20;
($a, $b) = $b, $a;
say "$a, $b";
```

🦋 Вихідний код можна знайти у файлі [swap.raku](https://github.com/ash/raku-course/blob/master/exercises/essentials/scalar-variables/swap.raku).

## Вивід

Запустіть програму й переконайтеся, що вона виводить значення в іншому порядку.

```console
$ raku exercises/scalar-variables/swap.raku
20, 10
```

## Коментарі

Усі кроки цієї програми (створення змінної та присвоєння значень, обмін ними й виведення) використовують обидві змінні в одній конструкції. Найцікавіше тут — те, як змінні обмінюються значеннями:

```raku
($a, $b) = $b, $a;
```

Зверніть увагу, що дужки потрібні ліворуч, але їх можна додати й праворуч:

```raku
($a, $b) = ($b, $a);
```

Що станеться, якщо дужки опустити?

```raku
$a, $b = $b, $a;
```

У цьому разі ви отримаєте попередження, що `$a` праворуч не використовується:

```
$ raku exercises/scalar-variables/swap.raku
WARNINGS for /Users/ash/raku-course/exercises/scalar-variables/swap.raku:
Useless use of $a in sink context (lines 2, 2)
10, 20
```

Наведений рядок насправді рівносильний беззмістовному присвоєнню `$b = $b`. Це легко побачити, якщо змінити значення праворуч, наприклад:

```raku
$a, $b = 2 * $b, 3 * $a;
```

Ця програма виводить ще більше попереджень, але ви також бачите, що змінилося значення лише `$b`:

```
$ raku exercises/scalar-variables/swap.raku
WARNINGS for /Users/ash/raku-course/exercises/scalar-variables/swap.raku:
Useless use of "*" in expression "3 * $a" in sink context (line 2)
Useless use of $a in sink context (line 2)
10, 40
```

{% include nav.html %}
