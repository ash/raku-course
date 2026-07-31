---
title: 'Solvo: Nombro de dekoj'
---

{% include menu.html %}

Jen kiel vi povas solvi la taskon.

## Kodo

```raku
my $n = prompt 'Enigu pozitivan entjeran nombron: ';

say ($n % 100) div 10;
```

🦋 Vi povas trovi la plenan kodon en la dosiero [tens.raku](https://github.com/ash/raku-course/blob/master/exercises/essentials/numbers/tens.raku).

## Eligo

Rulu la programon kaj testu kelkajn malsamajn kazojn:

* Tri-cifera ronda nombro kiel 120;
* Multoblo de 100, ekzemple, 400;
* Nombro kiu estas pli granda ol 10 sed pli malgranda ol 100.
* Nombro malpli granda ol 10.

Por nombro 234, la eligo de la programo aspektas tiel:

```console
$ raku exercises/numbers/tens.raku
Enigu pozitivan entjeran nombron: 234
3
```

## Komentoj

En ĉi tiu solvo, la kombino de la modulo `%` kaj entjera divido `div` estas uzata denove.

Notu la spacon antaŭ la malferma krampo. Ĝi devas esti tie; alie, vi ricevas sintaksan eraron. Ni revenos al [ĉi tiu aspekto](/eo/essentials/more-on-functions/mind-the-space) de Raku en la sekcio pri funkcioj, sed nun, tajpu la kodon kiel montrite supre aŭ aldonu alian paron de krampoj por ĉirkaŭi la argumenton de la funkcio — en ĉi tiu kazo, neniu spaco estas bezonata:

```raku
    say(($n % 100) div 10);
```

{% include nav.html %}