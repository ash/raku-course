---
title: Bases numerorum
---

{% include menu.html %}

Litterale integrum non necesse est in systemate decimali scribi. Raku tres frequentissimas bases alternativas statim intelligit, unaquaeque cum suo praefixo:

```raku
say 0xFF;   # 255  — hexadecimal (base 16)
say 0b1010; # 10   — binary (base 2)
say 0o17;   # 15   — octal (base 8)
```

Quamcumque basem in codice fonte adhibeas, valor idem integer est; sola notatio differt.

Pro qualibet alia basi, formam radicis `:base<number>` adhibe:

```raku
say :16<FF>;   # 255
say :2<1010>;  # 10
```

Ut contrario modo procedas — a numero ad eius repraesentationem in alia basi — methodum `base` voca. Chordam digitorum reddit:

```raku
say 255.base(16); # FF
say 10.base(2);   # 1010
```

{% include nav.html %}
