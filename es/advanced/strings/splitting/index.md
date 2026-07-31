---
title: Dividir y unir
---

{% include menu.html %}

Las cadenas se pueden dividir en partes y volver a unir de varias maneras.

El método `words` divide una cadena en una lista de palabras separadas por espacios en blanco:

```raku
say 'Hello big World'.words; # (Hello big World)
```

El método `split` divide una cadena en el separador que elijas:

```raku
say 'a,b,c'.split(','); # (a b c)
```

Un caso especial importante es dividir por la **cadena vacía** `''`: separa una cadena en sus caracteres individuales, pero también añade una cadena vacía al principio y al final, por lo que el resultado tiene dos elementos más de los que podrías esperar:

```raku
say 'abc'.split('').elems;        # 5 — the three letters, plus an empty string at each end
say 'abc'.split('', :skip-empty); # (a b c) — the :skip-empty adverb drops the empties
```

Para dividir en caracteres, el método `comb`, llamado sin argumentos, lo hace directamente — sin cadenas vacías extra que limpiar:

```raku
say 'Raku'.comb; # (R a k u)
```

Para hacer lo contrario, el método `join` une una lista de valores en una sola cadena, colocando un separador entre ellos:

```raku
say <a b c>.join('-'); # a-b-c
```

Dos métodos más trabajan con partes de una cadena. El método `substr` extrae un fragmento, dado una posición inicial y, opcionalmente, una longitud:

```raku
say 'Hello World'.substr(0, 5); # Hello
say 'Hello World'.substr(6);    # World
```

Y `trim` elimina los espacios en blanco de ambos extremos de una cadena:

```raku
say '  hi  '.trim; # hi
```

{% include nav.html %}
