---
title: 'Solución: Conéctese a un host'
translations_gpt:
---

{% include menu.html %}

Aquí tienes una posible solución para la tarea.

## Código

```raku
my $host = 'example.com';

if try IO::Socket::INET.new(:host($host), :port(80)) -> $conn {
    say "connected to $host";
    $conn.close;
}
else {
    say "could not connect to $host";
}
```

🦋 Puedes encontrar el código fuente en el archivo [connect-to-host.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/connections/connect-to-host.raku).

## Salida

```
connected to example.com
```

## Comentarios

1. `IO::Socket::INET.new(:host, :port)` abre la conexión de inmediato y lanza una excepción si el host es inalcanzable.

1. Envolverlo en `try` convierte esa excepción en un `Nil` en lugar de en una caída. El `if … -> $conn` liga el socket cuando la conexión tiene éxito y ejecuta la rama `else` cuando no, la manera robusta de intentar una conexión.

1. Para ver la rama `else` en acción, cambia `$host` por un nombre que no exista, como `'example.comp'`. La resolución de DNS falla entonces — sin el `try` obtendrías un error como `Failed to resolve host name 'example.comp'` —, pero aquí el `try` lo convierte en `Nil`, así que el programa imprime con calma `could not connect to example.comp`.

{% include nav.html %}
