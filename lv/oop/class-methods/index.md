---
title: Klases metodes
translations_gpt:
---

{% include menu.html %}

Vairums metožu tiek izsauktas uz objekta — klases instances. Taču metodi var izsaukt arī uz pašas klases, tas ir, uz tipa objekta. Tādu metodi bieži sauc par _klases metodi_. Tā noder vērtībām un darbībām, kas pieder klasei kopumā, nevis kādam vienam konkrētam objektam.

Klases metodi definējat tieši tāpat kā jebkuru citu metodi:

```raku
class Road {
    method speed-limit { 120 }
}
```

un izsaucat uz klases nosaukuma, nevis uz instances:

```raku
say Road.speed-limit; # 120
```

Jūs jau esat lietojuši klases metodi, to nenosaucot: `new` ir metode, ko izsauc uz klases, lai radītu jaunu objektu.

Klases metodei nav piekļuves instances atribūtiem — aiz tās nav neviena konkrēta objekta —, tāpēc tā strādā tikai ar informāciju, kas ir vienāda katram klases objektam. Kad darbs ir atkarīgs no konkrēta objekta datiem, izmantojiet parastu metodi, kas izsaukta uz instances; kad nav — klases metode iederas dabiski.

Ievērojiet, ka, lai gan klases metodēm instance nav vajadzīga, tajās joprojām var izmantot objekta datus, ja objekts jums ir:

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

Šī programma izdrukā gaidīto rezultātu:

```
The maximum speed on Road 404 is 120
```

Bez instantiēta klases objekta izsaukums, piemēram, `say Road.info`, radītu kļūdu.

{% include nav.html %}
