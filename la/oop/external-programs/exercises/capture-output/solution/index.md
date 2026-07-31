---
title: 'Solutio: Exitum cape'
translations_gpt:
---

{% include menu.html %}

Ecce solutio possibilis huius exercitationis.

## Codex

```raku
my $proc = run 'echo', 'hello world raku', :out;
my $output = $proc.out.slurp(:close).trim;
say $output.words.elems;
```

🦋 Inveni codicem fontem in archivo [capture-output.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/external-programs/capture-output.raku).

## Exitus

```
3
```

## Commentarii

1. `:out` exitum programmatis in `Proc` loco screen redirigit, et `.out.slurp(:close)` illum totum retro legit; `.trim` novam lineam sequentem quam `echo` addit removet.

1. Cum exitus chorda ordinaria in nostro programmate est, illum sicut quaelibet alia data tractamus: `.words.elems` illum per spatia dividit et partes numerat, dans `3`. Hoc est ipsa ratio capiendi — programma externum fit lapis aedificandi cuius effectum ulterius tractamus.

{% include nav.html %}
