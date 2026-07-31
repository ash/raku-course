---
title: 'Solutio: Verbum inversum'
translations_gpt:
---

{% include menu.html %}

Ecce solutio possibilis huius exercitationis.

## Codex

```raku
class Word {
    has $.text;

    method reversed {
        $.text.flip;
    }
}

say Word.new(text => 'Raku').reversed;
```

🦋 Inveni codicem fontem in archivo [greeter.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/methods/greeter.raku).

## Exitus

```
ukaR
```

## Commentarii

1. Methodus `reversed` proprium obiecti `text` per accessorem `$.text` attingit et inbuiltum `flip` in eo vocat, quod chordam inversam reddit.

1. Methodus directe in obiecto `Word` recenter creato vocatur. Nihil retro servatur — `reversed` simpliciter novum valorem ex attributo computat et reddit.

1. Nota intra classem variabilem directe legere posse sine accessore adhibito:

```raku
    method reversed {
        $!text.flip;
    }
```

{% include nav.html %}
