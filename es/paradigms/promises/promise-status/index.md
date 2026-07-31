---
title: El estado de una promesa 🆕
translations_gpt:
---

{% include menu.html %}

Una promesa está siempre en uno de tres estados, que informa su método `.status`:

* **`Planned`** — todavía sin resolver;
* **`Kept`** — terminó con un valor;
* **`Broken`** — su trabajo lanzó una excepción.

Estos son los valores de la enumeración `PromiseStatus`. Leer `.status` no espera: te dice dónde está la promesa *ahora mismo*, así que puedes comprobarlo antes de que la promesa se resuelva y de nuevo después:

```raku
my $p = start { sleep 1; 10 };

say $p.status; # Planned — read at once, while the block is still running
await $p;      # now wait for it to finish
say $p.status; # Kept
say $p.result; # 10
```

`.result` da el valor cumplido. A diferencia de `.status`, sí *espera* hasta que la promesa esté resuelta, de modo que sobre una promesa sin terminar se bloquea exactamente igual que `await`. Y si la promesa quedó rota, `.result` relanza la excepción.

Cuando quieres examinar un fallo sin relanzarlo, usa `.cause`, el objeto de excepción de una promesa rota:

```raku
my $p = start { die 'boom' };
try await $p;         # let it settle (and swallow the re-thrown error)
say $p.status;        # Broken
say $p.cause.message; # boom
```

Así que `.status` y `.cause` inspeccionan una promesa sin perturbarla, mientras que `await` y `.result` recogen su desenlace: el valor, o el error relanzado.

{% include nav.html %}
