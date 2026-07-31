---
title: Zvēresti (Vow) 🆕
translations_gpt:
---

{% include menu.html %}

Kad `$p.keep(...)` izsaucat pats, solījumu var nokārtot ikviens, kas tur `$p`.
Reizēm gribas pretējo: solījumu drīkstētu nokārtot vienīgi tas kods, kas rezultātu
*ražo*, kamēr visi pārējie to drīkstētu tikai gaidīt. Šo nošķīrumu sauc par **zvērestu**.

`Promise.new` dod jums solījumu; izsaucot tam `.vow`, jūs saņemat `Vow` — vienīgās
tiesības šo solījumu turēt vai lauzt. No šā brīža solījums ir domāts tikai lasīšanai:
to nokārto caur zvērestu. Ierastā forma ir ražotājs, kas zvērestu patur pie sevis un
atgriež tikai solījumu:

```raku
sub after($seconds) {
    my $p = Promise.new;
    my $v = $p.vow;                       # paņemam nokārtošanas tiesības
    start {
        sleep $seconds;
        $v.keep("done after $seconds s"); # nokārtojam to caur zvērestu
    }
    return $p;                            # izsaucēji saņem tikai lasīšanas pusi
}

my $job = after(0.2);
say $job.status;   # Planned
say await $job;    # done after 0.2 s
```

Zvēresta paņemšana padara solījumu patiešām tikai lasāmu: no šā mirkļa `$p.keep` un
`$p.break` tiek atteikti, jo vienīgās tiesības to nokārtot tagad pieder zvērestam.

```raku
my $p = Promise.new;
my $v = $p.vow;

$p.keep(1); # nomirst: Access denied to keep/break this Promise; already vowed
```

Tātad izsaucējs var solījumu gaidīt ar `await`, piesiet tam `.then` vai pārbaudīt tā
`.status`, bet nokārtot to nevar — to spēj vienīgi zvēresta turētājs. Tieši šādi
bibliotēkas pārvērš uz atsaukumiem un notikumiem balstītas saskarnes par parastiem
solījumiem: izveido solījumu, patur tā zvērestu un izpilda to no atsaukuma iekšienes,
kad notikums beidzot pienāk.

Tieši to pašu aizkulisēs jūsu vietā dara `start` — tas izveido solījumu, zvērestu
patur pie sevis un nokārto solījumu ar bloka vērtību (vai lauž to, ja bloks nomirst).
Solījuma un tā zvēresta taisīšana ar rokām vienkārši ļauj darīt to pašu, kad rezultāts
nenāk no viena koda bloka.

{% include nav.html %}
