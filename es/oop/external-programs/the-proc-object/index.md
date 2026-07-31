---
title: El objeto Proc
translations_gpt:
---

{% include menu.html %}

Cada llamada a `run` o `shell` devuelve un objeto `Proc`: un pequeño registro que describe el programa que se ejecutó y cómo terminó. Los temas anteriores usaron su manejador `.out` para leer la salida; el `Proc` lleva más cosas consigo.

La parte más útil es el **código de salida**. Un programa le dice a quien lo lanzó si tuvo éxito mediante un entero pequeño: `0` significa éxito y cualquier otro número es un código de fallo elegido por el propio programa. `.exitcode` te da ese número:

```raku
my $proc = run 'sh', '-c', 'exit 3';
say $proc.exitcode; # 3
```

Para la pregunta habitual de sí o no — ¿funcionó? — un `Proc` es simplemente verdadero cuando el código de salida es `0` y falso en caso contrario, así que puedes evaluarlo directamente:

```raku
my $proc = run 'ls', '/', :out;
$proc.out.slurp(:close);
say $proc ?? 'ok' !! 'failed'; # ok
```

Un `Proc` también recuerda la orden que lanzó, en `.command`:

```raku
my $proc = run 'echo', 'hi', :out;
$proc.out.slurp(:close);
say $proc.command; # (echo hi)
```

Hay algo a lo que estar atento: si una orden falla y tú simplemente **ignoras** el `Proc` devuelto, Raku lanza una excepción en lugar de dejar pasar el fallo sin más:

```raku
run 'sh', '-c', 'exit 1';
# dies: The spawned command 'sh' exited unsuccessfully (exit code: 1, signal: 0)
```

Como una salida distinta de cero suele significar que algo salió mal, un `Proc` fallido que se tira lanza una excepción cuando sale de ámbito. Lo que lo dispara es *descartar* el resultado, no ignorar su código de salida: basta con guardar el `Proc` en una variable para evitar la excepción, aunque no vuelvas a mirarlo nunca.

```raku
my $proc = run 'sh', '-c', 'exit 1'; # no error, even though it failed
# …and $proc is never used again
```

Así que, si *esperas* que una orden pueda fallar, guarda su `Proc` y mira después `.exitcode` (o evalúalo como booleano) cuando quieras saber qué pasó.

{% include nav.html %}
