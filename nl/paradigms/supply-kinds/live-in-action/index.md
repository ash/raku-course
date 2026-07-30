---
title: Live supplies in actie
translations_gpt:
---

{% include menu.html %}

Omdat een live supply uitzendt naar welke taps op dat moment ook luisteren, kunnen meerdere luisteraars dezelfde stroom tegelijk volgen — en elk mag naar believen in- of uitstappen. Hier bekijken twee luisteraars een stroom gebeurtenissen: een `log` die alles vastlegt, en een `alert` die later instapt en eerder vertrekt.

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

Dit drukt af:

```
log:   start
log:   warning
alert: warning
log:   all clear
alert: all clear
alert: stop
```

De levensloop van de twee taps ziet er zo uit — 🟢 markeert een tap die instapt, 🔴 een tap die vertrekt, en ✅ elke waarde die een tap werkelijk ontvangt:

| Stap | `log` | `alert` |
|---|:---:|:---:|
| `$events.tap` → `log`   | 🟢 stapt in    |                |
| `emit 'start'`          | ✅ start       |                |
| `$events.tap` → `alert` |                | 🟢 stapt in    |
| `emit 'warning'`        | ✅ warning     | ✅ warning     |
| `emit 'all clear'`      | ✅ all clear   | ✅ all clear   |
| `$log.close`            | 🔴 vertrekt    |                |
| `emit 'stop'`           |                | ✅ stop        |

Een lege cel betekent dat die tap niet luisterde toen de waarde uitging. Volg de tijdlijn:

* `.tap` geeft een **`Tap`-object** terug — de handgreep die je bewaart om dat ene abonnement te sturen.
* `start` wordt uitgezonden terwijl alleen `log` luistert, dus alleen `log` ziet het. Dat is opnieuw de regel van de live supply: `alert` stapte *na* `start` in, en een live supply speelt het verleden niet opnieuw af, dus `alert` ziet het nooit.
* `warning` en `all clear` worden uitgezonden terwijl **beide** aftappen, dus bereikt elke waarde beide — in de volgorde waarin de taps zich abonneerden, eerst `log`, dan `alert`.
* `$log.close` aanroepen **verlaat** de supply. Vanaf dan ontvangt `log` niets meer, dus bereikt de afsluitende `stop` alleen `alert`.

Twee dingen om te onthouden. Ten eerste kan één enkele live supply tegelijk naar veel onafhankelijke taps uitwaaieren. Ten tweede is elke tap een eigen abonnement met een eigen levensduur: houd het `Tap`-object vast dat `.tap` teruggeeft, en je kunt die ene luisteraar met `.close` beëindigen zonder de andere te storen.

{% include nav.html %}
