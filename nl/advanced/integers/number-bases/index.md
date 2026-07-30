---
title: Talstelsels
---

{% include menu.html %}

Een integer literal hoeft niet in het decimale stelsel geschreven te worden. Raku begrijpt de drie meest voorkomende alternatieve talstelsels direct, elk met een eigen prefix:

```raku
say 0xFF;   # 255  — hexadecimaal (grondtal 16)
say 0b1010; # 10   — binair (grondtal 2)
say 0o17;   # 15   — octaal (grondtal 8)
```

Welk talstelsel je ook gebruikt in de broncode, de waarde is hetzelfde gehele getal; alleen de notatie verschilt.

Voor elk ander talstelsel gebruik je de radix-vorm `:base<number>`:

```raku
say :16<FF>;   # 255
say :2<1010>;  # 10
```

Om het andersom te doen — van een getal naar zijn representatie in een ander talstelsel — roep je de `base` methode aan. Deze geeft een string van cijfers terug:

```raku
say 255.base(16); # FF
say 10.base(2);   # 1010
```

{% include nav.html %}
