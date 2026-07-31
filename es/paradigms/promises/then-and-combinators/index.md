---
title: Encadenar y combinar
translations_gpt:
---

{% include menu.html %}

Las promesas se vuelven aún más potentes cuando las combinas. La necesidad más común es esperar **varias** a la vez. `await` acepta una lista de promesas y devuelve sus resultados en orden:

```raku
my @jobs = (start { 1 }), (start { 2 }), (start { 3 });
say await @jobs;     # (1 2 3)
say [+] await @jobs; # 6
```

Los tres trabajos corren de forma concurrente; `await @jobs` los espera a todos y devuelve `(1, 2, 3)`. Como los resultados vuelven en el mismo orden que las promesas, puedes reducirlos como de costumbre.

También puedes encadenar trabajo a una promesa con `.then`, que ejecuta un bloque de seguimiento en cuanto la promesa está lista. Dentro de él, `.result` es el valor de la promesa original:

```raku
my $p = start { 10 };
my $q = $p.then({ .result * 2 });
say await $q; # 20
```

`$q` es una promesa nueva que duplica el resultado de `$p`. Esperarla da `20`.

El bloque no tiene parámetro explícito, así que recibe la promesa terminada como la variable de tema `$_`, y por eso funciona un `.result` a secas: en realidad es `$_.result`. Si prefieres darle un nombre a esa promesa, usa un bloque con flecha:

```raku
my $q = $p.then(-> $prev { $prev.result * 2 });
```

Esto se comporta exactamente igual; `$prev` es la promesa original `$p`, y `$prev.result` es su valor.

Con `start`, `await` y `.then` puedes describir tuberías enteras de trabajo concurrente: lanzar muchas tareas, combinar sus resultados y construir tareas nuevas a partir de las viejas, todo ello sin tocar un hilo directamente.

{% include nav.html %}
