---
title: 'Risinājums: Bankas konts'
translations_gpt:
---

{% include menu.html %}

Šeit ir iespējams risinājums uzdevumam.

## Kods

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

🦋 Atrodiet programmu failā [bank-account.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/objects-classes/bank-account.raku).

## Izvade

```
declined: insufficient funds
70
```

## Komentāri

1. `has $!balance = 0` deklarē atribūtu kā *privātu* — ar `!` tvigilu tam nemaz nav
ģenerēta piekļuves metode, tāpēc vienīgais veids, kā atlikumu mainīt, ir klases
piedāvātās metodes. `method balance` ārpasaulei dod veidu, kā to nolasīt, bet ne
uzstādīt.

1. Tas ir apzināti. Ja mēs būtu rakstījuši `has $.balance`, tvigils `.` pievienotu
publisku piekļuves metodi — pēc noklusējuma tikai lasāmu, bet viens neuzmanīgs
`is rw` tai atvērtu tiešu piešķiršanu, piemēram, `$account.balance = 1_000_000`,
ļaujot ikvienam pārvietot naudu, neejot caur `deposit` vai `withdraw`. Atribūta
paturēšana privāta to izslēdz jau pēc konstrukcijas: atlikums var mainīties vienīgi
pēc paša konta likumiem, tādiem kā nepietiekamu līdzekļu pārbaude metodē `withdraw`.

1. Otrā izņemšana prasa vairāk, nekā ir atlikumā, tāpēc tā tiek noraidīta un
atlikums paliek `70`.

{% include nav.html %}
