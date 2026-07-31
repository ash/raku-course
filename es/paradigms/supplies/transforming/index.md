---
title: Transformar un supply
translations_gpt:
---

{% include menu.html %}

Un supply se puede transformar antes de engancharlo, muy parecido a una lista. Métodos como `map` y `grep` producen un supply **nuevo** cuyos valores son los transformados:

```raku
my @out;
Supply.from-list(1, 2, 3).map(* * 10).tap(-> $v { @out.push($v) });
say @out; # [10 20 30]
```

El `map(* * 10)` construye un supply nuevo que emite diez veces cada valor original, y el enganche los recoge en `@out`.

`grep` filtra un supply, dejando pasar solo los valores para los que su bloque es verdadero:

```raku
my @out;
Supply.from-list(1, 2, 3, 4, 5, 6).grep(* %% 2).tap(-> $v { @out.push($v) });
say @out; # [2 4 6]
```

Como cada transformación devuelve otro supply, puedes encadenarlas, construyendo una pequeña tubería que reacciona al flujo:

```raku
my @out;
Supply.from-list(1..6).grep(* %% 2).map(* ** 2).tap(-> $v { @out.push($v) });
say @out; # [4 16 36]
```

Este es el mismo vocabulario de map y grep que conoces de las listas, aplicado a valores que llegan a lo largo del tiempo. El supply hace el empuje; tu tubería da forma a lo que sale.

{% include nav.html %}
