---
title: Rekursio
translations_gpt:
---

{% include menu.html %}

Ĉi tiu parto de la kurso paŝas preter la ĉiutagan kaj rigardas tri potencajn stilojn de programado, kiujn Raku subtenas precipe bone — _funkcian_, _samtempan_ kaj _reaktivan_ — kaj poste uzas ilin por konstrui retajn servojn.

Ni komencas per funkcia programado — stilo konstruita ĉirkaŭ subprogramoj, kiuj prenas kaj redonas aliajn subprogramojn, valoroj kalkulataj nur kiam bezonataj, kaj esprimoj anstataŭ paŝo-post-paŝaj instrukcioj. La unua ideo estas _rekursio_: subprogramo, kiu vokas sin mem.

Rekursia subprogramo solvas problemon reduktante ĝin al pli malgranda versio de la sama problemo, ĝis la problemo fariĝas sufiĉe malgranda por respondi rekte. Nombri malsupren, trairi arbon, kalkuli faktorialon — ĉiuj estas nature rekursiaj. Ĉi tiu sekcio montras, kiel skribi rekursian subprogramon kaj, same grave, kiel haltigi ĝin.

{% include nav.html %}
