---
title: Funkciaj parametroj
---

{% include menu.html %}

Estas tempo transdoni iom da datumoj al funkcio. Ĝi povas preni parametrojn listigitajn en krampoj tuj post la nomo de la funkcio.

```raku
sub greet($name) {
    say "Saluton, $name!";
}
```

Vi nun povas uzi la funkcion kaj transdoni malsamajn argumentojn al ĝi:

```raku
greet('Alla');
greet('Karl');
```

La du vokoj de la sama funkcio nun produktos malsamajn rezultojn:

```console
$ raku t.raku
Saluton, Alla!
Saluton, Karl!
```

%%tipblock

## Parametro aŭ argumento

Ĉi tiuj terminoj ofte estas uzataj interŝanĝeble. Ili ambaŭ rilatas al 'la sama afero', sed rigardas ĝin el malsamaj perspektivoj.

* Parametro estas tio, kion la funkcio atendas.
* Argumento estas tio, kion vi transdonas al ĝi.

En la supra ekzemplo, `$name` estas la parametro de la funkcio, dum `'Alla'` kaj `'Karl'` estas ĝiaj argumentoj.

%%/tipblock

## Pli da parametroj

Funkcio povas preni pli ol unu solan parametron. En ĉi tiu kazo, listigu ĉiujn ilin kom-separitaj:

```raku
sub add($x, $y) {
    say $x + $y;
}

add(10, 20); # 30
```

## Sen parametroj

Estas valida kazo kiam la funkcio tute ne prenas parametrojn. En ĉi tiu kazo, vi povas aŭ aldoni malplenan paron de krampoj aŭ tute preterlasi ilin, kiel ni faris ĉe [la komenco de ĉi tiu sekcio](../).

```raku
sub greet() {
    say 'Saluton, Mondo!';
}

greet();
```

## Subskribo

La listo de parametroj de funkcio nomiĝas _subskribo_.

{% include nav.html %}