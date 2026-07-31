---
title: Attendere il completamento
translations_gpt:
---

{% include menu.html %}

`await` è il modo esplicito di aspettare, ma anche il codice reattivo aspetta — solo implicitamente. Un blocco `react` non finisce finché tutti i supply che osserva non sono conclusi, il che ti dà la stessa garanzia di «è tutto completato»:

```raku
my @values;

react {
    whenever Supply.from-list(2, 4, 6) {
        @values.push($_);
    }
}

say [+] @values; # 12
```

Il `say` gira solo **dopo** che il blocco react è finito, quindi `@values` contiene già ogni valore emesso. In effetti il blocco `react` ha atteso il flusso al posto tuo.

È uno schema utile: usa un blocco `react` per raccogliere tutto ciò che un supply emette, e poi lavora sul risultato raccolto nella riga successiva, sicuro che il flusso sia completo. Che tu aspetti una promise con `await` o un flusso con `react`, il principio è lo stesso: metterti in pausa finché il lavoro concorrente non è finito, poi proseguire con i suoi risultati.

{% include nav.html %}
