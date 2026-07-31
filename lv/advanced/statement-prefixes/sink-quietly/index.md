---
title: sink un quietly
translations_gpt:
---

{% include menu.html %}

Vēl divi prefiksi attiecas uz koda izpildi tā efektu, nevis vērtības dēļ.

Prefikss `sink` izrēķina kaut ko _iesūkšanas kontekstā_ — vienīgi blakusefektu dēļ, rezultātu izmetot. Tas noder ar slinku darbību, kuru vēlaties piespiest izpildīties:

```raku
sink (1..3).map({ print "$_ " });
print "\n"; # 1 2 3
```

`map` šeit tiek izpildīts tikai tās drukāšanas dēļ, ko tas veic; `sink` gādā, ka tas patiešām izpildās, un iegūto sarakstu izmet. Ja to nepiespiestu, slinks `map`, kura rezultāts nekad netiek izmantots, varētu vispār neizpildīties.

Prefikss `quietly` izpilda bloku ar **apslāpētiem brīdinājumiem**. Kods, kas parasti izdrukātu brīdinājumu kļūdu plūsmā, paliek kluss:

```raku
my $value;
quietly {
    say $value + 1; # 1, with no "uninitialized value" warning
}
```

Pieskaitot `1` nedefinētam `$value`, parasti tiek brīdināts par neinicializētas vērtības lietošanu, taču `quietly` iekšienē šis brīdinājums tiek paslēpts. Izmantojiet to, kad apzināti darāt kaut ko tādu, kas brīdina, un troksni nevēlaties, — taču taupīgi, jo brīdinājumi parasti norāda uz īstu kļūdu.

{% include nav.html %}
