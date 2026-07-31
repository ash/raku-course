---
title: Metodi con parametri
translations_gpt:
---

{% include menu.html %}

Un metodo può prendere parametri, proprio come una subroutine. Li elenchi fra parentesi dopo il nome del metodo:

```raku
class Account {
    has $.balance is rw = 0;

    method deposit($amount) {
        $.balance += $amount;
    }
}
```

Il metodo `deposit` prende un parametro, `$amount`, e lo aggiunge al saldo dell'oggetto:

```raku
my $a = Account.new;
$a.deposit(100);
$a.deposit(50);
say $a.balance; # 150
```

Ogni chiamata agisce sull'oggetto su cui è stata chiamata, quindi lo stesso metodo può aggiornare oggetti diversi in modo indipendente. I metodi possono prendere parametri posizionali e nominati, valori predefiniti e tutto il resto che hai già visto nelle firme delle subroutine.

{% include nav.html %}
