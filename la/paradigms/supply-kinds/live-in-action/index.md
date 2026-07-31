---
title: Supply viva in actione
translations_gpt:
---

{% include menu.html %}

Quia supply vivum ad quascumque coniunctiones illo momento audientes diffundit, plures auditores eundem fluxum simul sequi possunt — et unusquisque liber est adire vel abire quandocumque libet. Hic duo auditores fluxum eventuum spectant: `log` qui omnia recordat, et `alert` qui serius adit et prius abit.

```raku
my $supplier = Supplier.new;
my $events   = $supplier.Supply;

my $log = $events.tap(-> $v { say "log:   $v" });    # auditor primus adit
$supplier.emit('start');

my $alert = $events.tap(-> $v { say "alert: $v" });  # auditor secundus adit
$supplier.emit('warning');
$supplier.emit('all clear');

$log.close;                                          # auditor primus abit
$supplier.emit('stop');
```

Hoc imprimit:

```
log:   start
log:   warning
alert: warning
log:   all clear
alert: all clear
alert: stop
```

Vitae duarum coniunctionum ita se componunt — 🟢 coniunctionem adeuntem notat, 🔴 coniunctionem abeuntem, et ✅ unumquemque valorem quem coniunctio revera accipit:

| Gradus | `log` | `alert` |
|---|:---:|:---:|
| `$events.tap` → `log`   | 🟢 adit       |                |
| `emit 'start'`          | ✅ start       |                |
| `$events.tap` → `alert` |                | 🟢 adit       |
| `emit 'warning'`        | ✅ warning     | ✅ warning     |
| `emit 'all clear'`      | ✅ all clear   | ✅ all clear   |
| `$log.close`            | 🔴 abit      |                |
| `emit 'stop'`           |                | ✅ stop        |

Cella vacua significat illam coniunctionem non audivisse cum valor exiret. Sequere temporum ordinem:

* `.tap` **obiectum `Tap`** reddit — manubrium quod servas ut illam unam subscriptionem regas.
* `start` emittitur dum solus `log` audit, itaque solus `log` illud videt. Haec est regula supply vivi iterum: `alert` *post* `start` adiit, et supply vivum praeteritum non iterum agit, itaque `alert` illud numquam videt.
* `warning` et `all clear` emittuntur dum **ambo** coniuncti sunt, itaque uterque valor ad utrumque pervenit — eo ordine quo coniunctiones se subscripserunt, `log` primus, deinde `alert`.
* `$log.close` vocare supply **relinquit**. Ex illo momento `log` nihil accipit, itaque ultimum `stop` solum ad `alert` pervenit.

Duo tenenda. Primum, unum supply vivum ad multas coniunctiones independentes simul diffundi potest. Secundum, unaquaeque coniunctio propria subscriptio est cum propria vita: obiectum `Tap` quod `.tap` reddit tene, et illum unum auditorem per `.close` finire potes sine ceteris turbandis.

{% include nav.html %}
