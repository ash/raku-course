---
title: Metodes ar parametriem
translations_gpt:
---

{% include menu.html %}

Metode var ņemt parametrus, gluži kā apakšprogramma. Tos uzskaitāt iekavās aiz metodes nosaukuma:

```raku
class Account {
    has $.balance is rw = 0;

    method deposit($amount) {
        $.balance += $amount;
    }
}
```

Metode `deposit` ņem vienu parametru `$amount` un pieskaita to objekta bilancei:

```raku
my $a = Account.new;
$a.deposit(100);
$a.deposit(50);
say $a.balance; # 150
```

Katrs izsaukums strādā ar to objektu, uz kura tas tika izsaukts, tāpēc viena un tā pati metode var neatkarīgi atjaunināt dažādus objektus. Metodes var ņemt pozicionālus un nosauktus parametrus, noklusētās vērtības un visu pārējo, ko jau esat redzējuši apakšprogrammu parakstos.

{% include nav.html %}
