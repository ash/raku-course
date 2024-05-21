---
title: 'Postfix-vorm van "for"'
---

{% include menu.html %}

We hebben al andere statementmodificatoren gezien: [`if` en `else`](/nl/essentials/conditional-checks/modifiers) en [`while` en `until`](/nl/essentials/loops/modifiers). En dat is reden voor een kleine viering, aangezien het ontwerp van Raku zeer consistent is.

Met een korte lusinhoud kan de `for`-lus in een postfix-vorm worden geschreven:

```raku
.say for 1..7;
```

Zoals je ziet, zijn reeksen heel natuurlijk wanneer ze worden gebruikt met de postfix-vorm van `for`.

Dit programma is gelijk aan een meer traditionele variant:

```raku
for 1..7 -> $n {
    say $n;
}
```

Of, als de standaard lusvariabele wordt gebruikt, aan:

```raku
for 1..7 {
    .say;
}
```

Hier is `.say` de korte vorm voor `$_.say`.


{% include nav.html %}