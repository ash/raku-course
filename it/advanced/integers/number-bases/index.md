---
title: Basi numeriche
---

{% include menu.html %}

Un letterale intero non deve essere necessariamente scritto nel sistema decimale. Raku comprende le tre basi alternative più comuni nativamente, ciascuna con il proprio prefisso:

```raku
say 0xFF;   # 255  — hexadecimal (base 16)
say 0b1010; # 10   — binary (base 2)
say 0o17;   # 15   — octal (base 8)
```

Qualunque base si usi nel codice sorgente, il valore è lo stesso intero; cambia solo la notazione.

Per qualsiasi altra base, usa la forma radice `:base<numero>`:

```raku
say :16<FF>;   # 255
say :2<1010>;  # 10
```

Per fare il contrario — da un numero alla sua rappresentazione in un'altra base — chiama il metodo `base`. Restituisce una stringa di cifre:

```raku
say 255.base(16); # FF
say 10.base(2);   # 1010
```

{% include nav.html %}
