---
title: Blok-rilataj faziloj
translations_gpt:
---

{% include menu.html %}

Krom la programvasttaj faziloj, Raku havas fazilojn ligitajn al la vivo de unu bloko aŭ buklo.

## Eniro kaj eliro de bloko

La fazilo `ENTER` ruliĝas ĉiufoje kiam ekzekuto eniras blokon, kaj la fazilo `LEAVE` ruliĝas ĉiufoje kiam ĝi eliras — sendepende de la linio, kie ili estas skribitaj:

```raku
say 'before block';
{
    LEAVE say 'leaving';
    ENTER say 'entering';
    say 'inside';
}
say 'after block';
```

La eligo montras, ke `ENTER` ruliĝas unue kaj `LEAVE` ruliĝas laste, ĉirkaŭ la korpo de la bloko:

```
before block
entering
inside
leaving
after block
```

`LEAVE` estas aparte utila, ĉar ĝi ruliĝas eĉ se la bloko estas forlasita frue, kio faras ĝin fidinda loko por liberigi rimedojn.

Fazilo povas enhavi plenan `{ }` blokon anstataŭ unu sola deklaro, kaj vi povas difini plurajn. Kiam bloko havas pli ol unu `LEAVE`, ili ekfunkcias en inversa ordo — la laste registrita ruliĝas unue, do la bloko malvolviĝas kiel stako:

```raku
say 'open A';
{
    LEAVE {
        say 'close A';
    }
    say 'open B';
    LEAVE {
        say 'close B';
    }
    say 'work';
}
say 'done';
```

Rimedo `A` estas malfermita unue kaj fermita laste:

```
open A
open B
work
close B
close A
done
```

Ĉi tiu laste-en-unue-el ordo estas ĝuste tio, kion vi bezonas por purigado: kio ajn estis preparita plej lastatempe, estas malmuntita unue. La programvasta fazilo `END` funkcias same — pluraj `END`-blokoj ankaŭ ruliĝas en inversa ordo kompare al tiu, en kiu ili estis skribitaj.

## Buklaj faziloj

Ene de bukloj, tri pliaj faziloj markas la stadiojn de la iteracio: `FIRST` ruliĝas unufoje antaŭ la unua iteracio, `LAST` ruliĝas unufoje post la lasta, kaj `NEXT` ruliĝas ĉe la fino de ĉiu iteracio:

```raku
for 1..3 {
    FIRST say '-- first';
    LAST  say '-- last';
    NEXT  say "-- next (was $_)";
    say "body $_";
}
```

La buklo produktas:

```
-- first
body 1
-- next (was 1)
body 2
-- next (was 2)
body 3
-- next (was 3)
-- last
```

Same kiel ĉe la aliaj faziloj, la pozicio de `FIRST`, `NEXT` kaj `LAST` en la fontkodo ne gravas — ĉiu ruliĝas en sia propra momento.

{% include nav.html %}
