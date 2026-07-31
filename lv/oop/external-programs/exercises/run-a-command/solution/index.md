---
title: 'Risinājums: Palaidiet komandu'
translations_gpt:
---

{% include menu.html %}

Šeit ir iespējams risinājums uzdevumam.

## Kods

```raku
run 'echo', 'home:', '$HOME';
```

🦋 Atrodiet programmu failā [run-a-command.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/external-programs/run-a-command.raku).

## Izvade

```
home: $HOME
```

## Komentāri

1. `run` palaiž `echo` tieši, padodot katru virkni kā atsevišķu argumentu. Bez `:out` programmas izvade aiziet tieši uz ekrānu.

1. Arguments `echo` sasniedz tieši tā, kā uzrakstīts: `$HOME` tiek izdrukāts burtiski, nevis aizstāts ar jūsu mājas direktoriju, jo nav iesaistīta čaula, kas to izvērstu. Tieši tāpēc `run` ir drošais noklusējums — tā pati komanda, dota `shell`, varētu uzvesties pavisam citādi.

1. Lai mājas direktoriju patiešām izdrukātu, ļaujiet izvēršanu veikt čaulai: `shell 'echo home: $HOME'` izdrukā kaut ko līdzīgu `home: /home/anna`. (Paturiet vienpēdiņas arī Raku pusē — dubultpēdiņās likts `"$HOME"` liktu pašam Raku mēģināt interpolēt mainīgo ar nosaukumu `$HOME`, pirms `echo` vispār palaistos.)

{% include nav.html %}
