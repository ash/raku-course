---
title: 'Solutio: Per ansam scribere'
translations_gpt:
---

{% include menu.html %}

Ecce solutio possibilis huius exercitationis.

## Codex

```raku
my $fh = open 'out.txt', :w;
$fh.say($_) for 1..3;
$fh.close;

print slurp 'out.txt';
```

🦋 Inveni codicem fontem in archivo [write-with-a-handle.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/file-handles/write-with-a-handle.raku).

## Exitus

```
1
2
3
```

## Commentarii

1. `open` cum vexillo `:w` tractabulum ad scribendum dat. Tractabulum per totum anulum apertum manet, itaque unumquodque `$fh.say` aliam lineam addit — haec est utilitas tractabuli prae `spurt`, quod archivum quotiens aperiret.

1. `close` data in discum exhaurit, itaque `slurp` sequens omnes tres lineas retro legit.

{% include nav.html %}
