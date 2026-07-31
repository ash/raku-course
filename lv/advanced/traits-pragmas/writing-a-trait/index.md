---
title: Īpašības rakstīšana
---

{% include menu.html %}

Īpašības ir parastas multi-apakšprogrammas ar īpašu nosaukumu, tāpēc jūs varat rakstīt savas. Lai pievienotu īpašību, kas rakstīta `is kautkas`, definējiet `multi sub trait_mod:<is>`, kura parametri norāda, kam tā piemērojama, un nosauc īpašību:

Šis ir viens no Raku sarežģītākajiem stūriem, tāpēc neuztraucieties, ja tas šķiet sarežģīts. Jūs varat lieliski izmantot iebūvētās īpašības, nezinot, kā tās veidotas, un reti kad būs nepieciešamība rakstīt savu — uztveriet šo lapu kā ieskatu iekšējā uzbūvē.

```raku
my @traced;

multi sub trait_mod:<is>(Routine:D $r, :$traced!) {
    @traced.push($r.name);
}

sub foo() is traced { }
sub bar() is traced { }

say @traced; # [foo bar]
```

Izlasiet signatūru: pirmais parametrs, `Routine:D $r`, ir objekts, kuram īpašība ir pievienota — šeit apakšprogramma. `:D` ir tipa _smailijs_, kas pieprasa **definētu** vērtību — reālu apakšprogrammas objektu, nevis tukšu, nedefinētu `Routine` tipu pašu par sevi. (Tā partneri ir `:U`, kas pieprasa nedefinētu tipa objektu, un `:_`, kas pieņem abus.) Nosauktais parametrs `:$traced!` ir pašas īpašības nosaukums; tā klātbūtne ir tas, kas liek `is traced` izsaukt šo apakšprogrammu. Tā kā īpašības tiek izpildītas **kompilēšanas laikā**, gan `foo`, gan `bar` tiek reģistrētas to deklarēšanas brīdī, tāpēc `@traced` jau satur tos, kad programma sāk darboties — jūs pat varētu pārcelt `say @traced` rindu virs abām `sub` definīcijām, un tā joprojām izdrukātu `[foo bar]`.

Šī mazā īpašība tikai reģistrē nosaukumus, bet tas pats mehānisms var darīt daudz vairāk: ietvert apakšprogrammu, lai pievienotu žurnalēšanu, validēt atribūtu vai pievienot metadatus. Rakstot pirmo parametru kā `Attribute` vai `Variable` nevis `Routine`, īpašību var piemērot atribūtiem vai mainīgajiem. Īpašības ir veids, kā Raku uztur savu deklarēšanas sintaksi atvērtu — `is rw` un jūsu pašu `is traced` ir veidoti vienādi.

{% include nav.html %}
