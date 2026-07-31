---
title: 'Solutio: Nomen plicae divide'
translations_gpt:
---

{% include menu.html %}

Ecce solutio possibilis huius exercitationis.

## Codex

```raku
if 'report.txt' ~~ / (\w+) '.' (\w+) / {
    say ~$0;
    say ~$1;
}
```

🦋 Inveni codicem fontem in archivo [split-filename.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/captures/split-filename.raku).

## Exitus

```
report
txt
```

## Commentarii

1. Primum uncorum par nomen fundamentale in `$0` capit, secundum extensionem in `$1`. Punctum inter ea citatur ut litterale `.` potius quam quemlibet characterem congruat.

1. `~` ante unumquemque capturam illum in contextum catenae ponit, itaque ut textus simplex imprimitur. Simplex `say $0` loco eius obiectum congruentiae cum uncis angularibus ostenderet, `｢report｣`. `say $0.Str` scribere idem agit quod `say ~$0`.

{% include nav.html %}
