---
title: Returning the result
---

{% include menu.html %}

Funkcioj ofte ne nur faras ion, sed ankaŭ redonas rezulton. Ekzemple, en funkcia programado, funkcioj ne devus produkti ajnajn flankajn efikojn kiel ekzemple presi al konzolo. Tamen, Raku ne limigas vin fari tion. Ni vidu kiel redoni valoron el funkcio kaj kiel ricevi ĝin en la vokanta kodo.

```raku
sub add($x, $y) {
    return $x + $y;
}

my $sum = add(10, 20);
say $sum; # 30
```

Ĉi tie, la funkcio nomata `add` prenas du nombrojn kaj redonas ilian sumon. Estas uzata eksplicita `return`. En la vokanta flanko, la valoro kiun la funkcio redonas povas esti uzata kiel ajna alia valoro. En la supra programo, ĝi estas asignita al variablo.

## La laste taksita valoro

En Raku, eksplicita `return` ne estas postulata se la rezulto kiun vi volas redoni el funkcio estas la laste komputita valoro en ĝia korpo. Nia funkcio `add` povas esti simpligita:

```raku
sub add($x, $y) {
    $x + $y
}
```

Kiel vi eble rimarkis, ne estas punkto-komo ĉe la fino de la linio ĉar ĝi ne estas postulata kiam la linio finas la aktualan kodoblokon.

Tiaj trivialaj kaj malgrandaj funkcioj ofte estas formatitaj en unu linio por pli kompakta kodo:

```raku
sub add($x, $y) { $x + $y }
```

## Neniu redona datumoj

Se vi bezonas redoni el funkcio antaŭ la fino de ĝia korpo, kaj la funkcio ne redonas ajnan rezulton, uzu nudan `return`.

```raku
sub test($x) {
    return if $x <= 10;
    say "$x estas super la limo";
}
```

{% include nav.html %}