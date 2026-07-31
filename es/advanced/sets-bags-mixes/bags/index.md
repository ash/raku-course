---
title: Bolsas y mezclas
---

{% include menu.html %}

Un set recuerda solo _si_ un valor está presente. A veces también quieres saber _cuántas veces_ aparece. Para eso sirve un `Bag`: mantiene un conteo para cada valor.

Puedes crear un bag con la rutina `bag`. Los valores repetidos no se eliminan — se cuentan:

```raku
my $b = bag(<a b a c a>);
say $b<a>; # 3
say $b<b>; # 1
```

Al consultar el bag por un valor con el subíndice `< >`, obtienes cuántas veces se introdujo ese valor. El método `total` da la suma de todos los conteos:

```raku
say bag(<a b a c a>).total; # 5
```

Un `Mix` es la misma idea que un bag, excepto que los conteos (llamados _pesos_) pueden ser fraccionarios en lugar de números enteros. Para asignar pesos explícitos, empareja cada valor con su peso y convierte la lista con `.Mix`:

```raku
my $m = (flour => 2.5, sugar => 0.75).Mix;
say $m<flour>; # 2.5
say $m.total;  # 3.25
```

Consultar un peso con `< >` y sumarlos con `total` funciona exactamente igual que para un bag — solo que los números no tienen que ser enteros. Aquí `total` suma los pesos `2.5` y `0.75`, dando `3.25` — es la suma de los pesos, no un conteo de los valores. Los bags y mixes son útiles siempre que necesites rastrear cantidades — por ejemplo, contar cuántas veces aparece cada palabra en un texto, o asignar pesos a opciones.

{% include nav.html %}
