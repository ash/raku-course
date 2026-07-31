---
title: Exemplaria serierum
translations_gpt:
---

{% include menu.html %}

Operator `...` plus quam gradus arithmeticos agnoscit.

Si tres valores praebeas qui multiplicatione crescunt, seriem _geometricam_ pergit:

```raku
say 1, 2, 4 ... 64; # (1 2 4 8 16 32 64)
```

Hic unusquisque valor bis tantum est quantum prior, itaque series duplicat donec `64` attingat.

Series non solum numeris limitantur. Cum litteris, Raku ordinem alphabeticum naturalem sequitur:

```raku
say 'a' ... 'e'; # (a b c d e)
```

Series etiam deorsum numerare potest. Cum finis minor est quam initium, valores decrescunt:

```raku
say 10 ... 1; # (10 9 8 7 6 5 4 3 2 1)
```

In unoquoque casu exemplar exemplo describis, et operator `...` cetera complet.

{% include nav.html %}
