---
title: Supplies bajo demanda
translations_gpt:
---

{% include menu.html %}

Un supply _bajo demanda_ produce sus valores de nuevo para cada enganche. `Supply.from-list` es bajo demanda: cada enganche recibe la secuencia **entera** desde el principio, con independencia de cualquier otro enganche.

```raku
my $s = Supply.from-list(1, 2, 3);

my @a;
my @b;
$s.tap(-> $v { @a.push($v) });
$s.tap(-> $v { @b.push($v) });

say @a; # [1 2 3]
say @b; # [1 2 3]
```

Ambos enganches recibieron los tres valores. El supply no «gastó» sus valores en el primer enganche; sencillamente volvió a ejecutarse para el segundo. Este es el comportamiento que quieres cuando un supply representa una fuente fija — una lista, un archivo, una consulta — que todo suscriptor debería ver completa.

Bajo demanda es lo predeterminado para los supplies construidos a partir de datos ya existentes, porque cada consumidor espera de forma natural la secuencia completa. La otra clase, el supply _en vivo_, se comporta de manera bastante distinta, como muestra el apartado siguiente.

{% include nav.html %}
