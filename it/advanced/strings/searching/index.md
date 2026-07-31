---
title: Ricerca nelle stringhe
---

{% include menu.html %}

Diversi metodi rispondono a domande su cosa contiene una stringa.

Il metodo `contains` indica se una stringa appare in qualsiasi punto all'interno di un'altra:

```raku
say 'Raku'.contains('ak'); # True
say 'Raku'.contains('xy'); # False
```

I metodi `starts-with` e `ends-with` controllano l'inizio e la fine di una stringa:

```raku
say 'Raku'.starts-with('Ra'); # True
say 'Raku'.ends-with('ku');   # True
```

Quando hai bisogno della posizione esatta di una sottostringa, usa `index`. Restituisce l'indice della prima corrispondenza, contando da zero:

```raku
say 'Raku'.index('k'); # 2
```

Se la sottostringa non viene trovata, `index` restituisce `Nil` invece di un numero:

```raku
say 'Raku'.index('z'); # Nil
```

{% include nav.html %}
