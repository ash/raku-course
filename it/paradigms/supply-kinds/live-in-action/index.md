---
title: Supply live in azione
translations_gpt:
---

{% include menu.html %}

Poiché un supply dal vivo trasmette a qualunque presa sia in ascolto in quel momento, più ascoltatori possono seguire lo stesso flusso insieme — e ciascuno è libero di unirsi o andarsene quando gli pare. Qui due ascoltatori osservano un flusso di eventi: un `log` che registra tutto e un `alert` che si unisce più tardi e se ne va prima.

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

Questo stampa:

```
log:   start
log:   warning
alert: warning
log:   all clear
alert: all clear
alert: stop
```

Il ciclo di vita delle due prese si allinea così — 🟢 segna una presa che si unisce, 🔴 una presa che se ne va, e ✅ ogni valore che una presa riceve davvero:

| Passo | `log` | `alert` |
|---|:---:|:---:|
| `$events.tap` → `log`   | 🟢 si unisce   |                |
| `emit 'start'`          | ✅ start       |                |
| `$events.tap` → `alert` |                | 🟢 si unisce   |
| `emit 'warning'`        | ✅ warning     | ✅ warning     |
| `emit 'all clear'`      | ✅ all clear   | ✅ all clear   |
| `$log.close`            | 🔴 se ne va    |                |
| `emit 'stop'`           |                | ✅ stop        |

Una cella vuota significa che quella presa non era in ascolto quando il valore è uscito. Segui la linea del tempo:

* `.tap` restituisce un **oggetto `Tap`**: la maniglia che conservi per controllare quella singola sottoscrizione.
* `start` viene emesso mentre ascolta solo `log`, quindi solo `log` lo vede. È di nuovo la regola del supply dal vivo: `alert` si è unito *dopo* `start`, e un supply dal vivo non ripropone il passato, quindi `alert` non lo vede mai.
* `warning` e `all clear` vengono emessi mentre **entrambe** le prese sono agganciate, quindi ogni valore raggiunge entrambe — nell'ordine in cui le prese si sono abbonate, prima `log`, poi `alert`.
* Chiamare `$log.close` **lascia** il supply. Da quel momento `log` non riceve nulla, quindi il conclusivo `stop` raggiunge solo `alert`.

Due cose da portare via. Primo, un unico supply dal vivo può diramarsi verso molte prese indipendenti insieme. Secondo, ogni presa è una sottoscrizione a sé con la propria vita: conserva l'oggetto `Tap` che `.tap` restituisce, e potrai chiudere quel singolo ascoltatore con `.close` senza disturbare gli altri.

{% include nav.html %}
