---
title: 'Solvo: Banka konto'
translations_gpt:
---

{% include menu.html %}

Jen ebla solvo de la tasko.

## Kodo

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

🦋 Vi povas trovi la fontkodon en la dosiero [bank-account.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/objects-classes/bank-account.raku).

## Eligo

```
declined: insufficient funds
70
```

## Komentoj

1. `has $!balance = 0` deklaras la atributon *privata* — kun la tvigilo `!` ĝi havas
tute nenian generitan atingilon, do la sola maniero ŝanĝi la saldon estas tra la
metodoj, kiujn la klaso provizas. `method balance` donas al la ekstera mondo manieron
legi ĝin, sed nenian manieron fiksi ĝin.

1. Tio estas intenca. Se ni estus skribintaj `has $.balance`, la tvigilo `.` aldonus
publikan atingilon — nurlegan defaŭlte, sed unu senzorga `is rw` sur ĝi malkovrus
rektan atribuon kiel `$account.balance = 1_000_000`, permesante al iu ajn movi monon
sen trairi `deposit` aŭ `withdraw`. Teni la atributon privata ekskludas tion laŭ
konstruo: la saldo povas ŝanĝiĝi nur laŭ la propraj reguloj de la konto, kiel la
kontrolo pri nesufiĉaj rimedoj en `withdraw`.

1. La dua elpago petas pli ol la saldo, do ĝi estas rifuzita kaj la saldo restas ĉe
`70`.

{% include nav.html %}
