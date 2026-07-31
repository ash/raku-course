---
title: Lo stato di una promise 🆕
translations_gpt:
---

{% include menu.html %}

Una promise è sempre in uno di tre stati, riferiti dal suo metodo `.status`:

* **`Planned`** — non ancora conclusa;
* **`Kept`** — è finita con un valore;
* **`Broken`** — il suo lavoro ha sollevato un'eccezione.

Questi sono i valori dell'enumerazione `PromiseStatus`. Leggere `.status` non aspetta: ti dice dove si trova la promise *proprio ora*, quindi puoi controllarla prima che si concluda e di nuovo dopo:

```raku
my $p = start { sleep 1; 10 };

say $p.status; # Planned — read at once, while the block is still running
await $p;      # now wait for it to finish
say $p.status; # Kept
say $p.result; # 10
```

`.result` dà il valore mantenuto. A differenza di `.status`, *aspetta* finché la promise non si è conclusa, quindi su una promise non finita blocca esattamente come `await`. E se la promise è stata rotta, `.result` rilancia l'eccezione.

Quando vuoi guardare un fallimento senza rilanciarlo, usa `.cause` — l'oggetto eccezione di una promise rotta:

```raku
my $p = start { die 'boom' };
try await $p;         # let it settle (and swallow the re-thrown error)
say $p.status;        # Broken
say $p.cause.message; # boom
```

Quindi `.status` e `.cause` ispezionano una promise senza disturbarla, mentre `await` e `.result` ne raccolgono l'esito: il valore, oppure l'errore rilanciato.

{% include nav.html %}
