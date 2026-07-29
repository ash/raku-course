---
title: Розв'язання вправи «Банківський рахунок»
translations_gpt:
---

{% include menu.html %}

Ось одне з можливих розв'язань задачі.

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

🦋 Знайдіть програму у файлі [bank-account.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/objects-classes/bank-account.raku).

## Вивід

```
declined: insufficient funds
70
```

## Коментарі

1. `has $!balance = 0` оголошує атрибут *приватним* — із тайглом `!` він узагалі
не має згенерованого аксесора, тож єдиний спосіб змінити баланс — це методи, які
надає клас. `method balance` дає зовнішньому світові спосіб його прочитати, але
не спосіб його встановити.

1. Це зроблено навмисно. Якби ми написали `has $.balance`, тайгл `.` додав би
публічний аксесор — типово лише для читання, але одне необачне `is rw` на ньому
відкрило б пряме присвоєння на кшталт `$account.balance = 1_000_000`, дозволивши
будь-кому рухати гроші повз `deposit` чи `withdraw`. Приватний атрибут виключає
це за побудовою: баланс може змінюватися лише за власними правилами рахунку —
такими, як перевірка на нестачу коштів у `withdraw`.

1. Друге знімання просить більше, ніж є на балансі, тож його відхилено, а баланс
лишається на `70`.

{% include nav.html %}
