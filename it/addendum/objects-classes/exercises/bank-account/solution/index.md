---
title: 'Soluzione: Un conto bancario'
translations_gpt:
---

{% include menu.html %}

Ecco una possibile soluzione del compito.

## Codice

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

🦋 Trova il programma nel file [bank-account.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/objects-classes/bank-account.raku).

## Output

```
declined: insufficient funds
70
```

## Commenti

1. `has $!balance = 0` dichiara l'attributo come *privato* — con il twigil `!` non ha
alcun accessore generato, quindi l'unico modo di cambiare il saldo è attraverso i metodi
che la classe fornisce. Un `method balance` dà al mondo esterno un modo di leggerlo, ma
nessun modo di impostarlo.

1. È voluto. Se avessimo scritto `has $.balance`, il twigil `.` aggiungerebbe un accessore
pubblico — di sola lettura per impostazione predefinita, ma un `is rw` distratto su di esso
esporrebbe l'assegnamento diretto come `$account.balance = 1_000_000`, permettendo a
chiunque di muovere denaro senza passare per `deposit` o `withdraw`. Tenere privato
l'attributo lo esclude per costruzione: il saldo può cambiare solo secondo le regole del
conto stesso, come il controllo di copertura in `withdraw`.

1. Il secondo prelievo chiede più del saldo, quindi viene rifiutato e il saldo resta a
`70`.

{% include nav.html %}
