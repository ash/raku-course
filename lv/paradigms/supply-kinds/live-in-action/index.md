---
title: Dzīvie supply darbībā
translations_gpt:
---

{% include menu.html %}

Tā kā dzīva supply pārraida tiem pieslēgumiem, kas tobrīd klausās, vairāki klausītāji var sekot vienai un tai pašai straumei uzreiz — un katrs var pievienoties vai aiziet, kad vien vēlas. Šeit divi klausītāji vēro notikumu straumi: `log`, kas pieraksta visu, un `alert`, kas pievienojas vēlāk un aiziet agrāk.

```raku
my $supplier = Supplier.new;
my $events   = $supplier.Supply;

my $log = $events.tap(-> $v { say "log:   $v" });    # pievienojas pirmais klausītājs
$supplier.emit('start');

my $alert = $events.tap(-> $v { say "alert: $v" });  # pievienojas otrs klausītājs
$supplier.emit('warning');
$supplier.emit('all clear');

$log.close;                                          # pirmais klausītājs aiziet
$supplier.emit('stop');
```

Tas izdrukā:

```
log:   start
log:   warning
alert: warning
log:   all clear
alert: all clear
alert: stop
```

Abu pieslēgumu dzīves cikls sakārtojas šādi — 🟢 apzīmē pieslēguma pievienošanos, 🔴 tā aiziešanu un ✅ katru vērtību, ko pieslēgums tiešām saņem:

| Solis | `log` | `alert` |
|---|:---:|:---:|
| `$events.tap` → `log`   | 🟢 pievienojas |                |
| `emit 'start'`          | ✅ start       |                |
| `$events.tap` → `alert` |                | 🟢 pievienojas |
| `emit 'warning'`        | ✅ warning     | ✅ warning     |
| `emit 'all clear'`      | ✅ all clear   | ✅ all clear   |
| `$log.close`            | 🔴 aiziet      |                |
| `emit 'stop'`           |                | ✅ stop        |

Tukša šūna nozīmē, ka šis pieslēgums neklausījās brīdī, kad vērtība tika izsūtīta. Sekojiet laika līnijai:

* `.tap` atgriež **`Tap` objektu** — turekli, ko paturat, lai vadītu šo vienu abonementu.
* `start` tiek izstarots, kamēr klausās tikai `log`, tāpēc to redz tikai `log`. Šis atkal ir dzīvās supply likums: `alert` pievienojās *pēc* `start`, un dzīva supply pagātni neatkārto, tāpēc `alert` to nekad neredz.
* `warning` un `all clear` tiek izstaroti, kamēr pieslēgti ir **abi**, tāpēc katra vērtība nonāk pie abiem — tādā secībā, kādā pieslēgumi abonējās: vispirms `log`, tad `alert`.
* `$log.close` izsaukums **aiziet** no supply. No tā brīža `log` nesaņem neko, tāpēc pēdējais `stop` nonāk tikai pie `alert`.

Divas lietas, kas jāpaņem līdzi. Pirmkārt, viena dzīva supply var izvērsties daudzos neatkarīgos pieslēgumos vienlaikus. Otrkārt, katrs pieslēgums ir savs abonements ar savu mūžu: paturiet `Tap` objektu, ko atgriež `.tap`, un jūs varēsiet šo vienu klausītāju izbeigt ar `.close`, netraucējot pārējos.

{% include nav.html %}
