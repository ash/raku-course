---
title: Typen op machineniveau
---

{% include menu.html %}

De native typen hebben namen in kleine letters: `int`, `num` en `str`. Je declareert een variabele met een van deze typen op dezelfde manier als met `Int` of `Str`:

```raku
my int $i = 42;
my num $n = 3.14e0;
say $i; # 42
say $n; # 3.14
```

Een native waarde komt direct overeen met een machineregister of -woord, zonder het wrapper-object dat een normale Raku-waarde met zich meedraagt. Dit maakt native typen sneller en compacter, wat belangrijk is bij intensieve numerieke lussen en grote arrays.

Er is een gedrag waar je meteen op moet letten: een native variabele kan nooit ongedefinieerd zijn. Terwijl een gewone `Int`-container begint als het ongedefinieerde `Any`, begint een native `int` op **nul**:

```raku
say (my Int $a); # (Int)
say (my int $b); # 0
```

Hetzelfde geldt voor native arrays, gedeclareerd door het native type voor de `@`-variabele te plaatsen:

```raku
my int @numbers = 10, 20, 30;
say @numbers.sum; # 60
```

Zo'n array slaat zijn elementen op als ruwe machine-integers in plaats van als boxed `Int`-objecten, waardoor het minder geheugen gebruikt. Wanneer je een native waarde introspecteert, wordt deze automatisch _geboxt_ naar het overeenkomstige volledige type, daarom rapporteert `(my int $b).WHAT` als `(Int)`.

{% include nav.html %}
