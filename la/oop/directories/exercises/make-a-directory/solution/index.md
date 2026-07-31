---
title: 'Solutio: Directorium crea'
translations_gpt:
---

{% include menu.html %}

Ecce solutio possibilis huius exercitationis.

## Codex

```raku
mkdir 'reports';
spurt 'reports/data.txt', 'x';

say 'reports'.IO.d;
say 'reports/data.txt'.IO.e;
```

🦋 Inveni codicem fontem in archivo [make-a-directory.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/directories/make-a-directory.raku).

## Exitus

```
True
True
```

## Commentarii

1. `mkdir` directoriam creat, et `.IO.d` confirmat `reports` directoriam esse.

1. Quia directoria nunc exsistit, archivum in eam scribere possumus semitam dantes quae nomen directoriae includit, `reports/data.txt`. `.e` in illa semita inspiciens confirmat archivum intra novam directoriam creatum esse.

1. Ordo refert: `spurt` directorias absentes pro te **non** creat. In `reports/data.txt` scribere antequam directoria `reports` exsistat deficit cum errore quali `Failed to open file … : No such file or directory`. Directoriam prius facere — ut `mkdir` hic agit — est id quod scriptioni succedere permittit. Commode `mkdir` etiam quaslibet directorias intermedias absentes creat, itaque semita nidificata qualis `mkdir 'reports/2026'` totam catenam una vocatione aedificat.

{% include nav.html %}
