---
title: 'Решение: Банковский счёт'
translations_gpt:
---

{% include menu.html %}

Вот один из возможных вариантов решения задачи.

## Код

```raku
class Account {
    has $!balance = 0;

    method deposit($amount) {
        $!balance += $amount;
    }

    method withdraw($amount) {
        if $amount > $!balance {
            say 'declined: insufficient funds';
        }
        else {
            $!balance -= $amount;
        }
    }

    method balance { $!balance }
}

my $account = Account.new;
$account.deposit(100);
$account.withdraw(30);
$account.withdraw(200);

say $account.balance;
```

🦋 Исходный код можно найти в файле [bank-account.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/objects-classes/bank-account.raku).

## Вывод

```
declined: insufficient funds
70
```

## Комментарии

1. `has $!balance = 0` объявляет атрибут *приватным*: с тайглом `!` у него вообще нет
сгенерированного аксессора, поэтому изменить баланс можно только через методы, которые
предоставляет класс. Метод `balance` даёт внешнему миру возможность прочитать значение,
но не установить его.

1. Так сделано намеренно. Напиши мы `has $.balance`, тайгл `.` добавил бы публичный аксессор —
по умолчанию только для чтения, но одно неосторожное `is rw` на нём открыло бы прямое присваивание
вроде `$account.balance = 1_000_000`, позволяя кому угодно двигать деньги в обход `deposit`
и `withdraw`. Приватный атрибут исключает это по построению: баланс может меняться только
по собственным правилам счёта, таким как проверка на нехватку средств в `withdraw`.

1. Второе снятие просит больше, чем есть на балансе, поэтому оно отклоняется, и баланс остаётся
равным `70`.

{% include nav.html %}
