---
title: Supplies en vivo en acción
translations_gpt:
---

{% include menu.html %}

Como un supply en vivo difunde a los enganches que estén escuchando en el momento, varios oyentes pueden seguir el mismo flujo a la vez, y cada uno es libre de unirse o marcharse cuando quiera. Aquí dos oyentes observan un flujo de eventos: un `log` que lo registra todo y una `alert` que se une más tarde y se marcha antes.

```raku
my $supplier = Supplier.new;
my $events   = $supplier.Supply;

my $log = $events.tap(-> $v { say "log:   $v" });    # first listener joins
$supplier.emit('start');

my $alert = $events.tap(-> $v { say "alert: $v" });  # a second listener joins
$supplier.emit('warning');
$supplier.emit('all clear');

$log.close;                                          # the first listener leaves
$supplier.emit('stop');
```

Esto imprime:

```
log:   start
log:   warning
alert: warning
log:   all clear
alert: all clear
alert: stop
```

El ciclo de vida de los dos enganches encaja así — 🟢 marca un enganche que se une, 🔴 uno que se marcha y ✅ cada valor que un enganche recibe realmente:

| Paso | `log` | `alert` |
|---|:---:|:---:|
| `$events.tap` → `log`   | 🟢 se une      |                |
| `emit 'start'`          | ✅ start       |                |
| `$events.tap` → `alert` |                | 🟢 se une      |
| `emit 'warning'`        | ✅ warning     | ✅ warning     |
| `emit 'all clear'`      | ✅ all clear   | ✅ all clear   |
| `$log.close`            | 🔴 se marcha   |                |
| `emit 'stop'`           |                | ✅ stop        |

Una celda en blanco significa que ese enganche no estaba escuchando cuando salió el valor. Sigue la línea temporal:

* `.tap` devuelve un **objeto `Tap`**: el asa que conservas para controlar esa suscripción concreta.
* `start` se emite cuando solo `log` está escuchando, así que solo `log` lo ve. Es de nuevo la regla del supply en vivo: `alert` se unió *después* de `start`, y un supply en vivo no reproduce el pasado, así que `alert` nunca lo ve.
* `warning` y `all clear` se emiten cuando **ambos** están enganchados, así que cada valor llega a los dos, en el orden en que se suscribieron los enganches: primero `log`, después `alert`.
* Llamar a `$log.close` **abandona** el supply. A partir de ahí `log` no recibe nada, así que el `stop` final llega solo a `alert`.

Dos cosas para llevarse. Primera: un solo supply en vivo puede abrirse en abanico hacia muchos enganches independientes a la vez. Segunda: cada enganche es su propia suscripción, con su propio tiempo de vida; conserva el objeto `Tap` que devuelve `.tap` y podrás terminar ese oyente concreto con `.close` sin molestar a los demás.

{% include nav.html %}
