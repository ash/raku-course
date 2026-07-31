---
title: 'Solutio: map cum hyper'
translations_gpt:
---

{% include menu.html %}

Ecce solutio possibilis huius exercitationis.

## Codex

```raku
say <apple banana pear cherry>.hyper.map(*.uc).grep(*.chars > 4).join(' ');
```

🦋 Inveni codicem fontem in archivo [hyper-map.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/hyper-race/hyper-map.raku).

## Exitus

```
APPLE BANANA CHERRY
```

## Commentarii

1. `.hyper` totam catenam — et `map` quod in maiusculas vertit et `grep` quod per longitudinem filtrat — per fila, parallele, currit.

1. Quia `.hyper` ordinem servat, verba superstites in serie originali manent, itaque `.join(' ')` `APPLE BANANA CHERRY` producit. `pear`, quattuor tantum litteris, abicitur.

{% include nav.html %}
