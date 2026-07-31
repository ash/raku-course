---
title: 'Solutio: Anagrammata in greges dispone'
translations_gpt:
---

{% include menu.html %}

Ecce solutio possibilis huius exercitationis.

## Codex

```raku
my @words = <listen silent enlist cat act dog>;
my %groups;

for @words -> $word {
    %groups{ $word.comb.sort.join }.push($word);
}

for %groups.sort(*.key) -> $pair {
    say $pair.value.sort.join(' ');
}
```

🦋 Inveni codicem fontem in archivo [anagram-groups.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/mini-projects/anagram-groups.raku).

## Exitus

```
act cat
dog
enlist listen silent
```

## Commentarii

1. Litteras verbi ordinare *clavem canonicam* dat: omnia anagrammata easdem
litteras ordinatas communicant, itaque in `%groups{ ... }` immittere ea sub una clave colligit. Post
anulum primum, `say %groups` totam structuram ostendit — unamquamque clavem canonicam
ad indicem verborum suorum mappantem:

    ```raku
    say %groups; # {act => [cat act], dgo => [dog], eilnst => [listen silent enlist]}
    ```

1. Unusquisque valor tabulae index verborum illius gregis est, alphabetice per
`.sort.join` impressus.

{% include nav.html %}
