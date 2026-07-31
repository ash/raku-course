---
title: 'Solutio: Litterae minusculae'
translations_gpt:
---

{% include menu.html %}

Ecce solutio possibilis huius exercitationis.

## Codex

```raku
my $s = 'RAKU';
$s ~~ tr/A..Z/a..z/;
say $s;
```

🦋 Inveni codicem fontem in archivo [lowercase-letters.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/substitution/lowercase-letters.raku).

## Exitus

```
raku
```

## Commentarii

1. `tr///` unamquamque litteram primi intervalli ad litteram eodem loco secundi attribuit.

1. Hic intervalla a litteris maiusculis ad minusculas currunt, itaque omnis littera maiuscula socia minuscula substituitur — directio contraria ei quae maiusculas facit.

{% include nav.html %}
