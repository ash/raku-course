---
title: Vivaj supply en ago
translations_gpt:
---

{% include menu.html %}

Ĉar viva supply elsendas al kiuj ajn konektoj aŭskultas en la momento, pluraj aŭskultantoj povas sekvi la saman fluon samtempe — kaj ĉiu rajtas aliĝi aŭ foriri, kiam ĝi volas. Ĉi tie du aŭskultantoj rigardas fluon da eventoj: `log`, kiu registras ĉion, kaj `alert`, kiu aliĝas pli malfrue kaj foriras pli frue.

```raku
my $supplier = Supplier.new;
my $events   = $supplier.Supply;

my $log = $events.tap(-> $v { say "log:   $v" });    # la unua aŭskultanto aliĝas
$supplier.emit('start');

my $alert = $events.tap(-> $v { say "alert: $v" });  # dua aŭskultanto aliĝas
$supplier.emit('warning');
$supplier.emit('all clear');

$log.close;                                          # la unua aŭskultanto foriras
$supplier.emit('stop');
```

Ĉi tio presas:

```
log:   start
log:   warning
alert: warning
log:   all clear
alert: all clear
alert: stop
```

La vivociklo de la du konektoj viciĝas jene — 🟢 markas konekton aliĝantan, 🔴 konekton forirantan, kaj ✅ ĉiun valoron, kiun konekto efektive ricevas:

| Paŝo | `log` | `alert` |
|---|:---:|:---:|
| `$events.tap` → `log`   | 🟢 aliĝas      |                |
| `emit 'start'`          | ✅ start       |                |
| `$events.tap` → `alert` |                | 🟢 aliĝas      |
| `emit 'warning'`        | ✅ warning     | ✅ warning     |
| `emit 'all clear'`      | ✅ all clear   | ✅ all clear   |
| `$log.close`            | 🔴 foriras     |                |
| `emit 'stop'`           |                | ✅ stop        |

Malplena ĉelo signifas, ke tiu konekto ne aŭskultis, kiam la valoro eliris. Sekvu la tempolinion:

* `.tap` redonas **objekton `Tap`** — la tenilon, kiun vi konservas por regi tiun unu abonon.
* `start` estas eligita dum nur `log` aŭskultas, do nur `log` vidas ĝin. Jen denove la regulo de viva supply: `alert` aliĝis *post* `start`, kaj viva supply ne represpektas la pasintecon, do `alert` neniam vidas ĝin.
* `warning` kaj `all clear` estas eligitaj dum **ambaŭ** estas konektitaj, do ĉiu valoro atingas ambaŭ — en la ordo, laŭ kiu la konektoj abonis, unue `log`, poste `alert`.
* Voki `$log.close` **forlasas** la supply. De tiam `log` ricevas nenion, do la fina `stop` atingas nur `alert`.

Du aferojn indas kunporti. Unue, unu sola viva supply povas disvastiĝi al multaj sendependaj konektoj samtempe. Due, ĉiu konekto estas propra abono kun propra vivodaŭro: tenu la objekton `Tap`, kiun `.tap` redonas, kaj vi povas fini tiun unu aŭskultanton per `.close` sen ĝeni la aliajn.

{% include nav.html %}
