---
title: Capturar la salida
translations_gpt:
---

{% include menu.html %}

Para leer lo que imprime un programa externo en lugar de dejar que vaya a la pantalla, pásale `:out` al lanzarlo. El `Proc` devuelto tiene entonces un manejador `.out` del que puedes leer:

```raku
my $proc = run 'echo', 'hello', :out;
my $output = $proc.out.slurp(:close);
say $output.chomp; # hello
```

`:out` redirige la salida estándar del programa hacia el `Proc`. El manejador `.out` funciona como los manejadores de archivo de la sección anterior, y `.slurp` lee todo de una vez. El adverbio `:close` es un atajo cómodo: tras la lectura cierra el manejador por ti — el mismo aseo que hacías explícitamente con `.close` sobre un manejador de archivo —, así que no queda nada abierto. Por último, `.chomp` quita el salto de línea final que añade `echo`.

Lo mismo vale con `shell`, lo que resulta cómodo para capturar el resultado de una tubería:

```raku
my $proc = shell 'echo hello | tr a-z A-Z', :out;
say $proc.out.slurp(:close).chomp; # HELLO
```

También puedes capturar el flujo de errores, con `:err` y el manejador `.err` correspondiente. Pasar tanto `:out` como `:err` mantiene los dos flujos separados, cada uno en su propio manejador, para que puedas leerlos por separado:

```raku
my $proc = run 'sh', '-c', 'echo out-line; echo err-line >&2', :out, :err;

say 'stdout: ', $proc.out.slurp(:close).chomp; # stdout: out-line
say 'stderr: ', $proc.err.slurp(:close).chomp; # stderr: err-line
```

Aquí la orden de la shell imprime una línea en la salida estándar y otra en el error estándar (`>&2` redirige hacia él). Como hemos pedido ambos flujos, `.out` y `.err` los contienen de forma independiente: la salida normal del programa nunca se mezcla con su diagnóstico.

Capturar la salida es la manera de usar un programa externo como pieza de construcción: lo ejecutas, lees su resultado y sigues adelante con esos datos en tu propio programa.

{% include nav.html %}
