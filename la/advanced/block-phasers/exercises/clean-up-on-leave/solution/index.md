---
title: 'Solutio: Mundare in exitu'
translations_gpt:
---

{% include menu.html %}

Hic est possibilis solutio ad munus.

## Codex

```raku
sub work {
    LEAVE say 'Cleanup';

    say 'Working';
    return;
    say 'never reached';
}

work();
```

🦋 Inveni codicem fontem in archivo [clean-up-on-leave.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/block-phasers/clean-up-on-leave.raku).

## Exitus

```
Working
Cleanup
```

## Commentarii

1. Postquam `Working` imprimitur, `return` subroutinam statim relinquit, ergo `never reached` numquam imprimitur.

1. Etiamsi corpus mature relictum est, phaser `LEAVE` adhuc accenditur dum exitur, imprimans `Cleanup`. Haec cautio est exacte cur `LEAVE` est rectus locus ad liberandas res — currit quocumque modo copia finitur.

{% include nav.html %}
