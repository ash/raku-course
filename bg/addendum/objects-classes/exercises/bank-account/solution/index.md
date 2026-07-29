---
title: 'Решение: Банкова сметка'
translations_gpt:
---

{% include menu.html %}

Ето едно възможно решение на задачата.

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

🦋 Намерете програмата във файла [bank-account.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/objects-classes/bank-account.raku).

## Изход

```
declined: insufficient funds
70
```

## Коментари

1. `has $!balance = 0` обявява атрибута за *частен* — с туигила `!` той изобщо няма
породен аксесор, така че единственият начин балансът да се промени са методите, които
класът предоставя. `method balance` дава на външния свят начин да го прочете, но не и
начин да го зададе.

1. Това е нарочно. Ако бяхме написали `has $.balance`, туигилът `.` щеше да добави
публичен аксесор — по подразбиране само за четене, но едно невнимателно `is rw` върху
него би отворило пряко присвояване от рода на `$account.balance = 1_000_000` и би
позволило на всекиго да движи пари, заобикаляйки `deposit` или `withdraw`. Държането
на атрибута частен изключва това по устройство: балансът може да се променя само по
собствените правила на сметката, като проверката за недостиг във `withdraw`.

1. Второто теглене иска повече, отколкото е балансът, така че е отказано и балансът
остава на `70`.

{% include nav.html %}
