---
title: 'Solutio: Errorem nomina'
translations_gpt:
---

{% include menu.html %}

Ecce solutio possibilis huius exercitationis.

## Codex

```raku
sub risky {
    die 'sub failed';
}

{
    risky();

    CATCH {
        default {
            say .^name;
            say .message;
        }
    }
}
```

🦋 Inveni codicem fontem in archivo [name-the-error.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/exception-objects/name-the-error.raku).

## Exitus

```
X::AdHoc
sub failed
```

## Commentarii

1. `die` intra `risky` accidit, sed exceptio sursum ad vocantem migrat. `CATCH` in clausula quae `risky` vocavit eam tractat, quod est modus quo tractatio errorum plerumque operatur: defectus et tractator eius in eadem procedura esse non debent.

1. Simplex `die` cum chorda exceptionem `X::AdHoc` creat, quam `.^name` nuntiat, et `.message` textum ad `die` traditum reddit.

{% include nav.html %}
