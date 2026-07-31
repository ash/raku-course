---
title: Typi machinae
translations_gpt:
---

{% include menu.html %}

Typi nativi nomina minuscula habent: `int`, `num`, et `str`. Variabilem cum uno eorum declaras sicut cum `Int` vel `Str` faceres:

```raku
my int $i = 42;
my num $n = 3.14e0;
say $i; # 42
say $n; # 3.14
```

Valor nativus directe registro vel verbo machinae respondet, sine obiecto involucro quod valor normalis Raku portat. Hoc typos nativos celeriores et compactiores facit, quod in arctiis cyclis numericis et magnis indicibus refert.

Una proprietas statim cognoscenda est: variabilis nativa numquam indefinita esse potest. Ubi ordinarium `Int` receptaculum ut indefinitum `Any` incipit, nativus `int` a **nulla** incipit:

```raku
say (my Int $a); # (Int)
say (my int $b); # 0
```

Idem ad indices nativos pertinet, qui declarantur ponendo typum nativum ante variabilem `@`:

```raku
my int @numbers = 10, 20, 30;
say @numbers.sum; # 60
```

Talis index elementa sua ut integros crudos machinae reponit potius quam ut obiecta involuta `Int`, itaque minus memoriae utitur. Cum valorem nativum introspicis, automatice in typum plenum correspondentem _involvitur_, quare `(my int $b).WHAT` refert `(Int)`.

{% include nav.html %}
