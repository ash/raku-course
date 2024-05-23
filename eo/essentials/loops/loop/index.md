---
title: loop
---

{% include menu.html %}

La `loop` deklaro estas konstruo en Raku kiu havas multon komunan kun tradiciaj bukloj en la C-programlingvo kaj ĝiaj parencoj. Ĝi prenas tri deklarojn: la inicialigilo, la testo, kaj la deklaro por modifi la buklan variablon. La korpo de la buklo estas ripete ekzekutita dum la testo restas `True`.

```raku
loop (my $c = 0; $c < 5; $c++) {
    say "La nuna valoro de la kalkulilo estas $c.";
}
```

Ĉi tie, `++` estas postfiksa operatoro kiu pliigas sian argumenton je 1. Ni kovros pli da operatoroj en la dua parto de la kurso.

La programo ekzekutas la korpon de la buklo kvin fojojn.

```console
$ raku t.raku
La nuna valoro de la kalkulilo estas 0.
La nuna valoro de la kalkulilo estas 1.
La nuna valoro de la kalkulilo estas 2.
La nuna valoro de la kalkulilo estas 3.
La nuna valoro de la kalkulilo estas 4.
```

Iuj, aŭ eĉ ĉiuj, el la deklaroj en la kapo de `loop` povas esti preterlasitaj. Ekzemple, jen la sama programo:

```raku
my $c = 0;
loop (; $c < 5;) {
    say "La nuna valoro de la kalkulilo estas $c.";
    $c++;
}
```

## * * *

La `loop` bukloj estas, probable, la malplej uzataj bukloj en Raku. Ili povas esti trovitaj, ekzemple, en aŭtomata tradukilo de C al Raku. Tamen, en Raku, estas pli praktikaj bukloj kiel `for`, kiujn ni esploros tre baldaŭ.

{% include nav.html %}