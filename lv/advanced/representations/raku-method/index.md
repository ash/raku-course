---
title: 'Metode `.raku`'
---

{% include menu.html %}

Trešā attēlojuma metode, `.raku`, atgriež virkni ar **kodam līdzīgu** vērtības attēlojumu — ideālā gadījumā virkni, ko varētu ielīmēt atpakaļ programmā, lai atjaunotu to pašu vērtību. Tā ir pieejama katrai vērtībai Raku.

```raku
say 42.raku;        # 42
say 'Raku'.raku;    # "Raku"
say (1, 2, 3).raku; # (1, 2, 3)
```

Ievērojiet, kā virkne `'Raku'` tiek atgriezta ar pēdiņām ap to, lai jūs varētu uzreiz atšķirt skaitli no virknes — tieši tāda veida detaļa, kas nepieciešama atkļūdošanas laikā.

Metode darbojas arī ar saliktiem datiem, tostarp ligzdotām struktūrām:

```raku
my @data = 1, [2, 3], 4;
say @data.raku; # [1, [2, 3], 4]
```

Tā kā `.raku` atgriež parastu virkni, to var izmantot visur, kur tiek gaidīta virkne, piemēram, interpolētā ziņojumā:

```raku
my @data = 10, 20, 30;
say "The data is { @data.raku }";
# The data is [10, 20, 30]
```

Izmantojiet `.raku` ikreiz, kad vēlaties šādu kodam līdzīgu attēlojumu kā virkni, lai to apvienotu ar saviem ziņojumiem. Ļoti drīz mēs iepazīstināsim ar `dd` — Rakudo rīku, kas viena soļa vietā izdrukā tāda paša veida attēlojumu.

{% include nav.html %}
