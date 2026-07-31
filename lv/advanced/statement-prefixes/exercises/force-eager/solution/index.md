---
title: 'Risinājums: Piespiest tūlītēju izvērtēšanu'
translations_gpt:
---

{% include menu.html %}

Šeit ir iespējams risinājums uzdevumam.

## Kods

```raku
say (1 .. Inf).is-lazy;
say (eager 1..3).is-lazy;
say (lazy 1..3).is-lazy;
```

🦋 Atrodiet programmu failā [force-eager.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/statement-prefixes/force-eager.raku).

## Izvade

```
True
False
True
```

## Komentāri

1. Diapazonu līdz `Inf` nevar aprēķināt visu uzreiz, tāpēc tas ir slinks: `.is-lazy` ziņo `True`.

1. Prefikss `eager` liek sarakstu izveidot nekavējoties, tāpēc rezultāts vairs nav slinks — `.is-lazy` ziņo `False`. Šis ir tiešs pretstats saraksta atzīmēšanai ar `lazy`.

1. Nepielietojiet `eager` neierobežotam diapazonam: `eager 1 .. Inf` mēģina aprēķināt katru elementu uzreiz, tāpēc programma vienkārši iekaras, patērējot arvien vairāk atmiņas, līdz tā tiek nogalināta. `eager` ir droši lietot tikai sarakstiem, par kuriem zināt, ka tie ir galīgi.

1. Darbojas arī otrādi: `lazy 1..3` atzīmē kā slinku pat īsu, galīgu diapazonu, tāpēc `.is-lazy` ziņo `True`. Prefikss uzstāda slinkuma karodziņu neatkarīgi no tā, cik mazs saraksts ir — tam nav jābūt bezgalīgam, lai būtu slinks.

{% include nav.html %}
