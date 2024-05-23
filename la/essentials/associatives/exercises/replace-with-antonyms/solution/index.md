---
title: 'Solutio: Reponere cum antonymis'
---

{% include menu.html %}

Ad solvendum munus, contenta fasciculi [dictionary.raku](https://github.com/ash/raku-course/blob/master/essentials/associatives/exercises/replace-with-antonyms/dictionary.raku) in solutionis fasciculum [replace-with-antonyms.raku](https://github.com/ash/raku-course/blob/master/exercises/associatives/replace-with-antonyms.raku) effinguntur. Postea, per argumenta inputis iteratur ut verbum in dictionario inveniat, et si potest, antonymum accipit. Si nullum tale verbum in dictionario est, verbum originale adhibetur.

## Codex

Solutio infra exhibetur. Dictionarium hic tantum partialiter ostenditur.

```raku
my %dictionary =
    'above' => 'below',
    'absent' => 'present',
    'achieve' => 'fail',
    # . . .
    'wrong' => 'right',
    'young' => 'old'    
;

for @*ARGS -> $word {
    say %dictionary{$word} // $word;
}
```

🦋 Invenire programmatum in fasciculo [replace-with-antonyms.raku](https://github.com/ash/raku-course/blob/master/exercises/associatives/replace-with-antonyms.raku).

## Output

```console
$ raku exercises/associatives/replace-with-antonyms.raku early morning
late
evening

$ raku exercises/associatives/replace-with-antonyms.raku big soft drive
small
hard
drive
```

## Commentarii

1. Operator `//` est [operator definitus-vel](/la/essentials/scalar-variables/defined-or-operator), qui primum operandum definitum reddit.
1. In hash, omnes claves sunt verba (i.e., videntur sicut identificatores), ita non opus est eas in hash citare. Ita fieri potest ut hash creetur, ut infra ostenditur:

```raku
my %dictionary =
    above => 'below',
    absent => 'present',
    achieve => 'fail',
    # . . .
    wrong => 'right',
    young => 'old'    
;
```

{% include nav.html %}