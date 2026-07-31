---
title: Klasmetodoj
translations_gpt:
---

{% include menu.html %}

La plej multaj metodoj estas vokataj sur objekto — ekzemplero de klaso. Sed metodo ankaŭ povas esti vokata sur la klaso mem, tio estas, sur la tipobjekto. Tia metodo estas ofte nomata _klasmetodo_. Ĝi estas utila por valoroj kaj operacioj, kiuj apartenas al la klaso entute, anstataŭ al unu aparta objekto.

Vi difinas klasmetodon ekzakte kiel ĉiun alian metodon:

```raku
class Road {
    method speed-limit { 120 }
}
```

kaj vokas ĝin sur la klasa nomo anstataŭ sur ekzemplero:

```raku
say Road.speed-limit; # 120
```

Vi jam uzadis klasmetodon sen nomi ĝin: `new` estas metodo vokata sur la klaso por krei novan objekton.

Klasmetodo havas neniun aliron al ekzempleraj atributoj — ne estas aparta objekto malantaŭ ĝi — do ĝi laboras nur kun informoj, kiuj estas la samaj por ĉiu objekto de la klaso. Kiam la laboro dependas de la datumoj de specifa objekto, uzu ordinaran metodon vokatan sur ekzemplero; kiam ne, klasmetodo estas natura elekto.

Notu, ke kvankam klasmetodoj ne bezonas ekzempleron, ankoraŭ eblas uzi la datumojn de objekto en ili, kiam vi ja havas objekton:

```raku
class Road {
    has $.name;
    method speed-limit { 120 }

    method info {
        "The maximum speed on $.name is " ~ self.speed-limit
    }
}

my $R404 = Road.new(name => 'Road 404');
say $R404.info;
```

Ĉi tiu programo presas la atendatan rezulton:

```
The maximum speed on Road 404 is 120
```

Sen la ekzempligita klasa objekto, voko kiel `say Road.info` produktus eraron.

{% include nav.html %}
