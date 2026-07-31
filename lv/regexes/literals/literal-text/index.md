---
title: Burtiska teksta saskaņošana
translations_gpt:
---

{% include menu.html %}

Vienkāršākais raksturs ir burtu un ciparu virkne. Tāds raksturs piemeklē tieši šīs rakstzīmes šādā secībā jebkurā virknes vietā:

```raku
say 'the cat sat' ~~ /cat/; # ｢cat｣
say 'Hello'       ~~ /ell/; # ｢ell｣
```

Sakritībai nav jāsākas virknes sākumā — regulāro izteiksmju dzinējs meklē raksturu katrā pozīcijā, līdz to atrod.

Veiksmīga sakritība rada objektu `Match`. Šis `｢cat｣` pirmajā piemērā ir tas, kā šāds objekts izskatās izdrukāts: `say` parāda `Match` kā tekstu, ko tas sakritināja, ietītu stūra iekavās `｢ ｣`. Ja raksturs nav atrodams, sakritība neizdodas: gudrā sakritība dod `Nil` — nedefinētu vērtību, kas Būla pārbaudē skaitās aplama:

```raku
say ('the cat sat' ~~ /dog/);       # Nil
say ('the cat sat' ~~ /dog/).Bool;  # False
```

Regulārās izteiksmes iekšienē atstarpes pēc noklusējuma **nav** nozīmīgas — tās ir tur tikai tāpēc, lai raksturs būtu lasāms. Tāpēc `/ ell /` piemeklē tieši to pašu, ko `/ell/`; apkārtējās atstarpes vienkārši tiek ignorētas:

```raku
say 'Hello' ~~ / ell /; # ｢ell｣
```

Tā kā atstarpe raksturā tiek ignorēta, *īstas* atstarpes piemeklēšanai vajadzīgas **pēdiņas**: viss, ko liekat pēdiņās, tiek piemeklēts burtiski. Tā pati pēdiņu likšana ir arī veids, kā piemeklēt pieturzīmi, kurai regulārajā izteiksmē citādi būtu īpaša nozīme:

```raku
say 'a b'       ~~ / 'a b' /; # ｢a b｣
say 'price: $5' ~~ / '$' /;   # ｢$｣
```

(Atstarpēm var izmantot arī klasi `\s`, ar kuru drīz iepazīsieties.)

{% include nav.html %}
