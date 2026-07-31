---
title: 'Solutio: Sursum numerare'
translations_gpt:
---

{% include menu.html %}

Ecce solutio possibilis huius exercitationis.

## Codex

```raku
sub countup($n) {
    return if $n < 1;
    countup($n - 1);
    say $n;
}

countup(3);
```

🦋 Inveni codicem fontem in archivo [count-up.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/recursion/count-up.raku).

## Exitus

```
1
2
3
```

## Commentarii

1. Casus fundamentalis `return if $n < 1` recursionem adhuc sistit cum numeratio nihil praetergreditur.

1. Ordo duarum ultimarum linearum est id quod eam *sursum* numerare facit: unaquaeque vocatio primum usque ad casum fundamentalem recurrit, et solum deinde proprium numerum imprimit dum vocationes se explicant. Itaque `1` primum imprimitur et `$n` ultimum.

{% include nav.html %}
