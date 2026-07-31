---
title: 'Agordi per :batch kaj :degree'
translations_gpt:
---

{% include menu.html %}

Kaj `.hyper` kaj `.race` akceptas du adverbojn, kiuj regas, *kiel* la laboro estas dividata trans fadenojn: `:degree` kaj `:batch`. Vi malofte bezonas ilin, sed ili estas tio, kion vi uzas, kiam vi agordas por rapideco.

## `:degree` — kiom da laborantoj

`:degree` fiksas, kiom da laborfadenoj kuras samtempe:

```raku
say (1..5).hyper(:degree(2)).map(*²); # (1 4 9 16 25)
```

Defaŭlte la grado estas proksima al la nombro de procesoraj kernoj, kiujn la maŝino havas — sur okkerna maŝino ĝi estas `7`, lasante kernon por la ĉefa programo. Levi ĝin multe super la kernonombron malofte helpas, ĉar ne estas pliaj kernoj, sur kiuj kuri, kaj la kroma kunordigo povas eĉ malrapidigi la aferon.

## `:batch` — kiom da elementoj samtempe

`:batch` fiksas, kiom da elementoj ĉiu laboranto prenas per unu fojo antaŭ ol reveni por pliaj:

```raku
say (1..6).hyper(:batch(2)).map(*²); # (1 4 9 16 25 36)
```

La defaŭlta aro estas `64`, kaj la grando estas kompromiso:

* **Granda** aro signifas malpli da tien-reen inter la laborantoj kaj la vicigilo — malpli da ŝarĝo, kio estas bona, kiam ĉiu elemento kostas proksimume same.
* **Malgranda** aro disvastigas la laboron pli egale, kiam iuj elementoj estas multe pli multekostaj ol aliaj, do neniu ununura laboranto restas kun ĉiuj malrapidaj — kontraŭ la kosto de pli da kunordigo.

Vi povas fiksi ambaŭ samtempe, sur `.race` same kiel sur `.hyper`:

```raku
say (1..6).race(:degree(2), :batch(3)).map(*²).sum; # 91
```

<div style="font-size: 85%; opacity: .8;">

Se vi scivolas, kiaj la defaŭltoj efektive estas, vi povas rigardi ilin tra la internaĵoj de Rakudo. Notu, ke ĉi tio legas *privatan* atributon — ĝi ne estas stabila API, kaj la nombroj dependas de via maŝino:

```raku
my $h := (1..10).hyper;
say $h.^attributes.first(*.name.contains('config')).get_value($h).raku;
# HyperConfiguration.new(batch => 64, degree => 7)
```

Ĉi tie `batch` estas la fiksita defaŭlto `64`, dum `degree` estas `7` — unu malpli ol la ok kernoj de ĉi tiu maŝino.

</div>

## Ili tamen estas nur sugestoj

Kiel ĉe `.hyper` kaj `.race` mem, ĉi tiuj adverboj **petas** apartan dividon prefere ol garantii ĝin. Kompililo rajtas honori ilin, alĝustigi ilin aŭ tute ignori ilin — do traktu `:batch` kaj `:degree` kiel butonojn provendajn dum agordado, ne kiel promesojn pri tio, kiel precize la laboro plenumiĝos.

{% include nav.html %}
