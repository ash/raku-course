---
title: Nombraj bazoj
translations_gpt:
---

{% include menu.html %}

Entjera literalo ne devas esti skribita en la dekuma sistemo. Raku komprenas la tri plej oftajn alternativajn bazojn rekte, ĉiu kun sia propra prefikso:

```raku
say 0xFF;   # 255  — hexadecimal (base 16)
say 0b1010; # 10   — binary (base 2)
say 0o17;   # 15   — octal (base 8)
```

Kiun ajn bazon vi uzas en la fontkodo, la valoro estas la sama entjero; nur la notacio diferencas.

Por iu ajn alia bazo, uzu la radikan formon `:base<number>`:

```raku
say :16<FF>;   # 255
say :2<1010>;  # 10
```

Por iri la alian direkton — de nombro al ĝia prezento en alia bazo — voku la metodon `base`. Ĝi redonas ĉenon de ciferoj:

```raku
say 255.base(16); # FF
say 10.base(2);   # 1010
```

{% include nav.html %}
