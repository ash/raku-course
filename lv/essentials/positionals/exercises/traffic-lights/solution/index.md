---
title: 'Risinājums: Satiksmes luksofori'
---

{% include menu.html %}

Risinājuma ideja ir "cikliski indeksēt" masīvu ar četriem luksofora stāvokļiem:

```raku
my @lights = <yellow red yellow green>;
```

Pirmajās sekundēs sekunžu skaitu kopš sākuma var tieši izmantot kā indeksu masīvā. Kad tas pārsniedz 3, jūs varat to cikliski atgriezt masīva sākumā ar modulo operatoru `%`. Masīva garums ir `@lights.elems`, bet, kad to izmanto kā `%` operandu, nav nepieciešams izsaukt `elems` metodi, jo masīva nosaukums tiks konvertēts uz skaitli, un šī konversija ir paredzēta, lai atgrieztu elementu skaitu.

## Kods

Šeit ir risinājums:

```raku
my @lights = <yellow red yellow green>;

say @lights[51 % @lights];
say @lights[102 % @lights];
say @lights[305 % @lights];
```

🦋 Atrodiet programmu failā [traffic-lights.raku](https://github.com/ash/raku-course/blob/master/exercises/essentials/positionals/traffic-lights.raku).

## Izvade

Palaidiet programmu. Papildus, izmēģiniet citus vērtības programmā.

```console
$ raku exercises/positionals/traffic-lights.raku
green
yellow
red
```

{% include nav.html %}