---
title: Escuchar conexiones
translations_gpt:
---

{% include menu.html %}

Para actuar como servidor, crea un socket en modo **de escucha** con el argumento `:listen`, dando la dirección y el puerto en los que escuchar:

```raku
my $listener = IO::Socket::INET.new(
    :listen,
    :localhost('127.0.0.1'),
    :localport(8080),
);
```

`:localhost('127.0.0.1')` escucha en tu propia máquina, y `:localport(8080)` es el puerto al que deben conectarse los clientes. El socket está ya esperando, pero aún no ha llegado ningún cliente.

Para tomar la siguiente conexión entrante, llama a `.accept`. **Se bloquea** hasta que un cliente conecta, y devuelve entonces un socket nuevo que representa esa conversación concreta:

```raku
my $conn = $listener.accept;
say 'a client connected';
```

El `$listener` sigue escuchando en busca de más clientes, mientras que `$conn` es tu canal para hablar con este en particular. Un servidor real llama a `.accept` en un bucle, atendiendo a cada cliente según llega.

> Estos ejemplos se ejecutan en tu propia máquina; conéctate a ellos desde un navegador u otro programa en `127.0.0.1:8080`.

Así que un servidor no es más que un socket dado la vuelta: en lugar de `:host`/`:port` para llamar hacia fuera, das `:listen` con `:localhost`/`:localport` para esperar llamadas de entrada.

{% include nav.html %}
