---
title: Methoden mit Parametern
translations_gpt:
---

{% include menu.html %}

Eine Methode kann Parameter aufnehmen, genau wie eine Subroutine. Sie führen sie in Klammern hinter dem Methodennamen auf:

```raku
class Account {
    has $.balance is rw = 0;

    method deposit($amount) {
        $.balance += $amount;
    }
}
```

Die Methode `deposit` nimmt einen Parameter, `$amount`, und addiert ihn zum Kontostand des Objekts:

```raku
my $a = Account.new;
$a.deposit(100);
$a.deposit(50);
say $a.balance; # 150
```

Jeder Aufruf wirkt auf das Objekt, auf dem er aufgerufen wurde, dieselbe Methode kann also verschiedene Objekte unabhängig voneinander aktualisieren. Methoden können positionale und benannte Parameter, Standardwerte und alles Weitere aufnehmen, was Sie schon aus Subroutinen-Signaturen kennen.

{% include nav.html %}
