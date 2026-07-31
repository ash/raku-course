---
title: Su propia promesa 🆕
translations_gpt:
---

{% include menu.html %}

Todas las promesas vistas hasta ahora venían de `start`. Pero también puedes crear una
directamente con `Promise.new` — una promesa que aún no ha terminado — y resolverla tú
mismo cuando el resultado (o la noticia) esté listo. `.keep` la cumple con un valor:

```raku
my $p = Promise.new;   # a fresh, unsettled promise

$p.keep(42);           # fulfil it with a value
say await $p;          # 42
```

`.break` es el caso de fallo. Esperar una promesa rota relanza el error, igual que
ocurre con un bloque `start` que [murió](/es/paradigms/await/awaiting-promises), y
si nadie la captura, esa excepción detiene el programa:

```raku
my $p = Promise.new;
$p.break('disk full');

say await $p;             # dies here with 'disk full'
say 'never reached';      # this line does not run
```

Para seguir adelante, captura el fallo con `try`, exactamente como harías alrededor de
cualquier código que pueda morir:

```raku
my $p = Promise.new;
$p.break('disk full');

my $result = try await $p;
say $result // "the job failed: $!"; # the job failed: disk full
```

Si el desenlace ya se conoce, dos atajos crean una promesa que nace ya resuelta:
`Promise.kept($value)` y `Promise.broken($error)`.

```raku
say await Promise.kept(7); # 7
```

¿Por qué crear una promesa a mano? Porque no todos los resultados vienen de un bloque
`start`. Un evento que se dispara más tarde, un mensaje que llega, una retrollamada de
otra biblioteca: `Promise.new` te permite convertir cualquiera de ellos en una promesa
que el resto del programa puede `await` y combinar como cualquier otra.

{% include nav.html %}
