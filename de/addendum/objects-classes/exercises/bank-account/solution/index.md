---
title: 'Lösung: Ein Bankkonto'
translations_gpt:
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe.

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

🦋 Du findest den Quellcode in der Datei [bank-account.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/objects-classes/bank-account.raku).

## Ausgabe

```
declined: insufficient funds
70
```

## Kommentare

1. `has $!balance = 0` erklärt das Attribut als *privat* — mit dem Twigil `!` hat es
überhaupt keinen erzeugten Zugriffsweg, der einzige Weg, den Kontostand zu ändern, führt
also über die Methoden, welche die Klasse bereitstellt. Eine `method balance` gibt der
Außenwelt eine Möglichkeit, ihn zu lesen, aber keine, ihn zu setzen.

1. Das ist Absicht. Hätten wir `has $.balance` geschrieben, fügte der Twigil `.` einen
öffentlichen Zugriffsweg hinzu — standardmäßig nur lesend, doch ein unbedachtes `is rw`
daran gäbe die unmittelbare Zuweisung wie `$account.balance = 1_000_000` frei und ließe
jeden Geld bewegen, ohne über `deposit` oder `withdraw` zu gehen. Das Attribut privat zu
halten schließt das bauartbedingt aus: Der Kontostand kann sich immer nur nach den eigenen
Regeln des Kontos ändern, etwa nach der Deckungsprüfung in `withdraw`.

1. Die zweite Abhebung verlangt mehr als den Kontostand, sie wird also abgelehnt, und der
Kontostand bleibt bei `70`.

{% include nav.html %}
