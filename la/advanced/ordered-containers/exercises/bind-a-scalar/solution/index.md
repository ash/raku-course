---
title: 'Solutio: Scalarem ligare'
translations_gpt:
---

{% include menu.html %}

Hic est possibilis solutio huius operis.

## Codex

```raku
my $source = 1;
my $bound := $source;
my $copy = $source;

$source = 9;
say $bound;
say $copy;
```

🦋 Inveni codicem fontem in archivo [bind-a-scalar.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/ordered-containers/bind-a-scalar.raku).

## Exitus

```
9
1
```

## Commentarii

1. Vinculum cum `:=` facit `$bound` aliud nomen pro eodem continenti ac `$source`, non copiam. Itaque mutatio `$source` per `$bound` visibilis est, quod `9` imprimit.

1. Assignatio ordinaria cum `=` valorem in continentem separatum copiat, itaque `$copy` a mutatione posteriori non afficitur et adhuc `1` imprimit.

1. Ambos iuxta positos videre totum propositum est: `:=` continentem communicat, `=` valorem duplicat.

{% include nav.html %}
