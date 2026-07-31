---
title: Valores et claves
translations_gpt:
---

{% include menu.html %}

Unaquaeque constans enumerationis et nomen et numerum fert. Methodus `.value` numerum praebet, et methodus `.key` nomen ut seriem characterum reddit:

```raku
enum Colour <red green blue>;

say green.value; # 1
say green.key;   # green
```

Non necesse est numerationem automaticam ab zero accipere. Constantes ut paria scribe ad valores ipsos eligendos:

```raku
enum Day (Mon => 1, Tue => 2, Wed => 3, Thu => 4, Fri => 5);

say Tue.value; # 2
say Fri.value; # 5
```

Hic hebdomas operaria ab uno potius quam ab zero numeratur.

Typus enumerationis ipse omnes suas constantes enumerare potest. Methodus `.enums` tabulam ab unoquoque nomine ad eius valorem reddit:

```raku
enum Colour <red green blue>;

say Colour.enums;       # Map.new((blue => 2, green => 1, red => 0))
say Colour.enums.elems; # 3
```

Inter `.value`, `.key`, et `.enums`, libere moveri potes a constante ad eius numerum, a numero retro ad data, et per totam collectionem — quod enumerationes utiles reddit ad res ut indices, status, et tabulas inspectionis.

{% include nav.html %}
