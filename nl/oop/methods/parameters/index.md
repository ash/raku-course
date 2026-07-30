---
title: Methoden met parameters
translations_gpt:
---

{% include menu.html %}

Een methode kan parameters aannemen, net als een subroutine. Je somt ze op tussen haakjes achter de naam van de methode:

```raku
class Account {
    has $.balance is rw = 0;

    method deposit($amount) {
        $.balance += $amount;
    }
}
```

De methode `deposit` neemt één parameter, `$amount`, en telt die op bij het saldo van het object:

```raku
my $a = Account.new;
$a.deposit(100);
$a.deposit(50);
say $a.balance; # 150
```

Elke aanroep werkt op het object waarop hij is aangeroepen, dus dezelfde methode kan verschillende objecten onafhankelijk bijwerken. Methoden kunnen positionele en benoemde parameters aannemen, standaardwaarden hebben, en al het andere dat je al in de signaturen van subroutines gezien hebt.

{% include nav.html %}
