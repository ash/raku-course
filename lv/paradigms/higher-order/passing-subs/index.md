---
title: Apakšprogrammu nodošana
translations_gpt:
---

{% include menu.html %}

Lai pieņemtu apakšprogrammu kā parametru, deklarējiet to ar sigilu `&`. Ķermeņa iekšienē to pēc tam var izsaukt pēc nosaukuma:

```raku
sub apply(&f, $x) {
    f($x);
}

say apply(* + 3, 10); # 13
```

Parametrs `&f` saņem koda gabalu, un `f($x)` to izsauc. Šeit padevām `* + 3` — _Whatever_ izteiksmi, kas nozīmē «pieskaiti trīs tam, ko tev iedod», — tāpēc `apply(* + 3, 10)` aprēķina `13`.

Tikpat viegli var padot nosauktu apakšprogrammu, atsaucoties uz to ar sigilu `&`, lai tā tiktu padota, nevis izsaukta:

```raku
sub double($n) { $n * 2 }

sub apply(&f, $x) {
    f($x);
}

say apply(&double, 5); # 10
```

Tieši tā darbojas `map` un `grep`: tās ir apakšprogrammas, kas ņem citu apakšprogrammu — jūsu bloku — un piemēro to katram elementam. Rakstot savas apakšprogrammas, kas ņem kodu, tās kļūst tikpat elastīgas.

{% include nav.html %}
