---
title: 'Exercitatio: Cum antonymis reponere'
---

{% include menu.html %}

## Problema

Crea programma quod omnes verba ex linea mandati cum suis antonymis reponit. Si verbum in dictionario deest, non muta illud et sicuti est imprime.

Utere fixo codice hashi ad dictionarium antonymorum servandum. Ad tuam commoditatem, hic est paratus index circiter 200 parium quos directe in tuum programma potes effingere et inserere: [dictionary.raku](https://github.com/ash/raku-course/blob/master/essentials/associatives/exercises/replace-with-antonyms/dictionary.raku). Omnes paria in utroque directione servantur, e.g.:

```raku
my %dictionary =
    'above' => 'below',
    'absent' => 'present',
    # . . .
    'below' => 'above',
    # . . .
    'present' => 'absent',
    # . . .
;
```

Fac programma quam simplicissimum et imprime verba linea per lineam.

## Exemplum

Curre programma et transi pauca verba ad illud. Cura ut saltem aliqua verba in dictionario inveniri possint.

```console
$ raku replace-with-antonyms.raku a quiet teacher wants to buy some salt
a
noisy
student
wants
to
sell
some
sugar
```

## Solutio

✅ [Vide solutionem](solution)

{% include nav.html %}