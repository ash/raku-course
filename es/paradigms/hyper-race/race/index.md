---
title: Paralelismo sin orden con race
translations_gpt:
---

{% include menu.html %}

`.race` paraleliza igual que `.hyper`, con una diferencia: **no** promete devolver los resultados en orden. El trabajador que termina primero aporta primero su resultado.

```raku
say (1..10).race.map(* ** 2).sort; # (1 4 9 16 25 36 49 64 81 100)
```

Los cuadrados vuelven en un orden impredecible, así que el `.sort` está ahí para hacer determinista la salida. Si hubiéramos imprimido sin ordenar, los números estarían todos presentes pero posiblemente barajados.

Como no tiene que mantener los resultados ordenados, `.race` puede tener algo menos de sobrecarga que `.hyper`. El compromiso es sencillo:

* usa `.hyper` cuando importe el **orden** de los resultados;
* usa `.race` cuando **no** importe; por ejemplo, cuando vayas a sumar, contar o combinar de cualquier otro modo los resultados sin depender del orden.

```raku
say (1..100).race.map(* * 2).sum; # 10100
```

Sumar no depende del orden, así que `.race` es aquí una buena elección y da el mismo `10100`. Ambos métodos giran en torno a la misma idea — dejar que el trabajo independiente corra a la vez — y eliges entre ellos según te importe o no el orden.

{% include nav.html %}
