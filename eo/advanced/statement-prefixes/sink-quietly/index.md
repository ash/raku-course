---
title: sink kaj quietly
translations_gpt:
---

{% include menu.html %}

Du pliaj prefiksoj traktas plenumado de kodo pro ĝiaj efektoj anstataŭ ĝia valoro.

La prefikso `sink` taksas ion en _sink-kunteksto_ — pure pro ĝiaj flankefektoj, forĵetante la rezulton. Ĝi estas utila kun maldiligenta operacio, kiun vi volas devigi plenumi:

```raku
sink (1..3).map({ print "$_ " });
print "\n"; # 1 2 3
```

La `map` ĉi tie estas plenumata nur pro la presado, kiun ĝi faras; `sink` certigas, ke ĝi efektive plenumiĝas kaj forĵetas la rezultan liston. Sen devigo, maldiligenta `map`, kies rezulto neniam estas uzata, eble tute ne plenumiĝus.

La prefikso `quietly` plenumas blokon kun siaj **avertoj kaŝitaj**. Kodo, kiu normale presus averton al la erara fluo, restas silenta:

```raku
my $value;
quietly {
    say $value + 1; # 1, with no "uninitialized value" warning
}
```

Aldoni `1` al nedefinita `$value` normale avertas pri uzo de neinicialigita valoro, sed ene de `quietly` tiu averto estas kaŝita. Uzu ĝin kiam vi konscie faras ion, kio avertas, kaj ne volas la bruon — sed ŝpareme, ĉar avertoj kutime montras veran eraron.

{% include nav.html %}
