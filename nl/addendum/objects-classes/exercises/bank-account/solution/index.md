---
title: 'Oplossing: Een bankrekening'
translations_gpt:
---

{% include menu.html %}

Hier is een mogelijke oplossing voor de taak.

## Code

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

🦋 Je kunt de broncode vinden in het bestand [bank-account.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/objects-classes/bank-account.raku).

## Uitvoer

```
declined: insufficient funds
70
```

## Opmerkingen

1. `has $!balance = 0` declareert het attribuut *private* — met de twigil `!` heeft het
helemaal geen gegenereerde accessor, dus de enige manier om het saldo te veranderen is via de
methoden die de klasse aanbiedt. Een `method balance` geeft de buitenwereld een manier om het te lezen,
maar geen manier om het te zetten.

1. Dat is met opzet. Hadden we `has $.balance` geschreven, dan zou de twigil `.` een
publieke accessor toevoegen — standaard alleen-lezen, maar één onachtzame `is rw` erop zou
rechtstreekse toekenning als `$account.balance = 1_000_000` blootleggen, waarmee iedereen geld kon verplaatsen
zonder langs `deposit` of `withdraw` te gaan. Het attribuut private houden sluit
dat door constructie uit: het saldo kan alleen ooit veranderen volgens de eigen
regels van de rekening, zoals de controle op ontoereikend saldo in `withdraw`.

1. De tweede opname vraagt meer dan het saldo, dus wordt hij geweigerd en blijft het
saldo op `70`.

{% include nav.html %}
