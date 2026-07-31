---
title: 'Solutio: Ratio argentaria'
translations_gpt:
---

{% include menu.html %}

Ecce solutio possibilis huius exercitationis.

## Codex

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

🦋 Inveni codicem fontem in archivo [bank-account.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/objects-classes/bank-account.raku).

## Exitus

```
declined: insufficient funds
70
```

## Commentarii

1. `has $!balance = 0` attributum *privatum* declarat — cum twigil `!` nullum
accessorem generatum omnino habet, itaque unicus modus rationem mutandi per
methodos quas classis praebet est. `method balance` mundo externo modum eam legendi
dat, sed nullum modum eam ponendi.

1. Hoc consulto fit. Si `has $.balance` scripsissemus, twigil `.` accessorem
publicum adderet — solum legendum ex more, sed unum neglegens `is rw` in eo
assignationem directam ut `$account.balance = 1_000_000` exponeret, quemlibet pecuniam movere
sinens sine `deposit` vel `withdraw`. Attributum privatum servare hoc
per constructionem excludit: ratio solum secundum regulas proprias rationis
mutari potest, ut probatio pecuniae insufficientis in `withdraw`.

1. Secunda retractio plus quam ratio poscit, itaque recusatur et
ratio ad `70` manet.

{% include nav.html %}
