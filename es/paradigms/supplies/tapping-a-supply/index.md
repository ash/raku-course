---
title: Conectarse a un supply
translations_gpt:
---

{% include menu.html %}

Para suscribirte a un supply, lo _enganchas_: le das a `.tap` un bloque, y ese bloque se ejecuta para cada valor que el supply emite. El supply más sencillo para experimentar es `Supply.from-list`, que emite los valores de una lista:

```raku
my $s = Supply.from-list(1, 2, 3);
$s.tap(-> $v { say $v });
```

Esto imprime:

```
1
2
3
```

El bloque `-> $v { say $v }` es el _enganche_. El supply le empuja cada valor por turno, así que el bloque se ejecuta tres veces, una por valor.

El enganche puede hacer cualquier cosa con el valor, incluido acumular un resultado:

```raku
my $total = 0;
Supply.from-list(1, 2, 3).tap(-> $v { $total += $v });
say $total; # 6
```

Aquí cada valor emitido se suma a `$total`, que acaba en `6`. Enganchar es el acto básico de la programación reactiva: conecta un fragmento de comportamiento a un flujo y deja que el flujo lo mueva.

{% include nav.html %}
