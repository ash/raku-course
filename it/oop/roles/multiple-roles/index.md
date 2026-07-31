---
title: Comporre più ruoli
translations_gpt:
---

{% include menu.html %}

Una classe può assumere più di un ruolo. Basta elencarli ciascuno con il proprio `does`:

```raku
role Walk {
    method move { 'walking' }
}

role Swim {
    method dive { 'diving' }
}

class Duck does Walk does Swim {
}
```

Ora la classe `Duck` ha sia il metodo `move` di `Walk` sia il metodo `dive` di `Swim`:

```raku
say Duck.new.move; # walking
say Duck.new.dive; # diving
```

Combinare ruoli in questo modo si chiama _composizione_. Ti permette di assemblare una classe a partire da più pezzi di comportamento indipendenti, il che è spesso più flessibile che costruire una singola catena di ereditarietà: una classe può mescolare esattamente le capacità che le servono, e niente di più.

{% include nav.html %}
