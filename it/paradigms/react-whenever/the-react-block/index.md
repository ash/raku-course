---
title: Il blocco react
translations_gpt:
---

{% include menu.html %}

Un blocco `react` è un posto dove vivono le reazioni. Al suo interno, un `whenever` dice «ogni volta che questo supply emette un valore, esegui questo corpo». Il blocco `react` aspetta poi finché ogni supply che osserva non è finito:

```raku
my $sum = 0;

react {
    whenever Supply.from-list(1, 2, 3) {
        $sum += $_;
    }
}

say $sum; # 6
```

Il corpo del `whenever` gira una volta per ogni valore — `1`, `2`, `3` — sommandolo a `$sum`. Il valore corrente è disponibile come `$_` (puoi anche dargli un nome con `-> $v`).

Il comportamento chiave è che `react` **blocca** finché i suoi supply non sono conclusi. Solo dopo che il `Supply.from-list` ha emesso tutti i suoi valori il blocco `react` finisce e il programma passa al `say`. Ecco perché `$sum` è già `6` quando viene stampato: il blocco react ha aspettato l'intero flusso.

Questo fa di `react` un posto naturale dove raccogliere risultati da un flusso: predisponi le reazioni, lascia che giri fino in fondo e usa dopo ciò che hai raccolto.

{% include nav.html %}
