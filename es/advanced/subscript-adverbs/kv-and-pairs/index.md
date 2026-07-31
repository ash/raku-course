---
title: Keys, values y pairs
---

{% include menu.html %}

Otros adverbios cambian **qué** devuelve un subíndice. Por defecto, un subíndice devuelve el valor; estos devuelven más:

* `:v` — el valor (lo predeterminado)
* `:k` — la clave (o el índice)
* `:kv` — tanto la clave como el valor
* `:p` — un `Pair` de clave y valor

Para un array, la "clave" es el índice:

```raku
my @a = 10, 20, 30;

say @a[1]:kv; # (1 20)
say @a[1]:p;  # 1 => 20
```

`@a[1]:kv` devuelve el índice y el valor juntos como una lista, y `@a[1]:p` los devuelve como un par.

Lo mismo funciona para hashes, y es especialmente útil con un segmento de varias claves a la vez:

```raku
my %h = a => 1, b => 2, c => 3;

say %h<a c>:kv; # (a 1 c 3)
```

Aquí, un segmento de dos claves devuelve claves y valores alternados. Estos adverbios son lo que `map`, `for` y similares suelen usar cuando quieres procesar claves y valores lado a lado, sin dividir el trabajo en consultas separadas.

{% include nav.html %}
