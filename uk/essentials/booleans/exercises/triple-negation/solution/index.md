---
title: 'Solution: Потрійне заперечення'
---

{% include menu.html %}

Програма, показана в завданні, не компілюється і потребує невеликого виправлення. Ось правильний і робочий варіант (додано пробіл для розділення `!` і `!!`):

## Код

```raku
my $value = False;
say ! !!$value;
```

🦋 Ви можете знайти повний код у файлі [triple-negation.raku](https://github.com/ash/raku-course/blob/master/exercises/essentials/booleans/triple-negation.raku).

## Вивід

Програма виводить інвертоване булеве значення, як ви, ймовірно, очікували:

```console
$ raku triple-negation.raku
True
```

## Коментарі

Було трохи неочікувано, що програма з трьома знаками оклику не компілюється:

```console
$ raku triple-negation.raku
===SORRY!=== Error while compiling /Users/ash/raku-course/exercises/booleans/triple-negation.raku
Two terms in a row
at /Users/ash/raku-course/exercises/booleans/triple-negation.raku:2
------> say !!!⏏$value;
    expecting any of:
        infix
        infix stopper
        postfix
        statement end
        statement modifier
        statement modifier loop
```

Додатковий пробіл вирішує цю проблему. Але не потрапте в іншу пастку. Розгляньте наступну програму:

```raku
my $value = False;
say !!! $value;
```

Ця програма компілюється, але завершується з наступним повідомленням:

```console
$ raku triple-negation.raku
False
    in block <unit> at exercises/booleans/triple-negation.raku line 2
```

Це відбувається тому, що `!!!` є спеціальним оператором для позначення частини коду як заглушки. Якщо програма досягає цієї точки, вона завершується і виводить повідомлення, яке в нашому випадку було поточним значенням змінної `$value`. Зверніться до 📖 [документації](https://docs.raku.org/routine/!!!) для отримання додаткової інформації.

{% include nav.html %}