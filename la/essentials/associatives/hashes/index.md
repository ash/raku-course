---
title: Hashes
---

{% include menu.html %}

_Hash_ est aliud exemplum typorum datorum associativorum in Raku. Est aggregatum typus datorum qui nomina elementorum suorum ad valores eorum mappat. Introducamus novum sigillum quod variabiles hash utuntur: `%`.

```raku
my %capitals;
```

Nunc uti potes hash et assignare aliquos valores initiales ei.

```raku
%capitals = Gallia => 'Lutetia', Italia => 'Roma';
```

Ut cum aliis typis datorum, utraque actio simul fieri potest:

```raku
my %capitals = Gallia => 'Lutetia', Italia => 'Roma';
```

## Elementa accedere

Subscripting elementorum simile est quod vidimus pro [paribus](../pairs). Utere par angulorum vel curvatorum uncis cum chorda:

```raku
dic %capitals<Gallia>;
dic %capitals{'Italia'};
```

Hashes sunt mutabiles, ita potes et valores existentes mutare et novos addere:

```raku
%capitals<Germania> = 'Berolinum';
```

## Claves et valores

Duae methodi inbuilt, `keys` et `values`, reddunt listas clavium et valorum hash:

```raku
dic %capitals.keys;
dic %capitals.values;
```

Hic est exemplum output huius programmatis:

    (Germania Italia Gallia)
    (Berolinum Roma Lutetia)

Nota quod elementa hash non sunt ordinata, sed ordo clavium et valorum, redditus a methodis supra, est idem.

{% include nav.html %}