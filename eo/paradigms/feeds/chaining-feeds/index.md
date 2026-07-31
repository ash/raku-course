---
title: Ĉenigi fluojn
translations_gpt:
---

{% include menu.html %}

La vera valoro de fluoj aperas, kiam vi havas plurajn etapojn. Ĉiu `==>` transdonas sian rezulton al la sekva operacio, do tuta ĉenstacio legiĝas de supre malsupren laŭ la ordo, en kiu la laboro okazas:

```raku
(1..10)
    ==> grep(* %% 2)
    ==> map(* ** 2)
    ==> my @result;

say @result; # [4 16 36 64 100]
```

Sekvu la datumojn malsupren laŭ la paĝo: komencu per `1..10`, konservu la parajn nombrojn, kvadratigu ĉiun el ili kaj kolektu la rezulton. La paraj nombroj estas `2, 4, 6, 8, 10`, kaj iliaj kvadratoj estas `4, 16, 36, 64, 100`.

Skribita kiel metodoĉeno, la sama ĉenstacio estas `(1..10).grep(* %% 2).map(* ** 2)` — kaj tio legiĝas de maldekstre dekstren same kiel la fluo. Metodoĉeno ne estas inversa; ĝi plenumas siajn etapojn en ĝuste la sama ordo. La formo, kiu vere legiĝas de interne eksteren, estas ingi la operaciojn kiel simplajn funkciojn, `map(* ** 2, grep(* %% 2, 1..10))`, kie vi devas komenci ĉe la plej interna voko kaj labori eksteren.

Fluo do ne estas maniero eskapi de interne-eksteren kodo — ĝi estas alia skribmaniero de ĉenstacio, kiu legiĝas de maldekstre dekstren. Kion ĝi aldonas, estas aranĝo: ĉiu etapo `==>` povas sidi sur sia propra linio, kaj la unu sola operatoro funkcias same por metodstilaj kaj funkcistilaj paŝoj, kio tenas longan ĉenstacion facile trarigardebla. Fluoj kaj metodoĉenoj finfine faras la saman laboron; elektu tiun, kiu igas apartan transformon plej klara.

{% include nav.html %}
