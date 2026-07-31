---
title: 'Solutio: Ordo ENDium'
translations_gpt:
---

{% include menu.html %}

Hic est possibilis solutio ad munus.

## Codex

```raku
END say 'first END';
END say 'second END';

say 'body';
```

🦋 Inveni codicem fontem in archivo [end-order.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/phasers/end-order.raku).

## Exitus

```
body
second END
first END
```

## Commentarii

1. Ambo phaseres `END` currunt post codicem principalem, ergo `body` primus imprimitur.

1. Plures phaseres `END` currunt ordine ultimo-intrans-primo-exiens: `second END`, posterius declaratus, currit ante `first END`. Hoc speculum est quomodo purgatio plerumque debet dissolvere constitutionem recentissimam primam.

{% include nav.html %}
