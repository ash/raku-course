---
title: 'Solutio: Robotum saltans'
translations_gpt:
---

{% include menu.html %}

Ecce solutio possibilis huius exercitationis.

## Codex

```raku
role Dancing {
    method dance {
        'spinning around';
    }
}

class Robot {
    method speak {
        'beep';
    }
}

my $plain   = Robot.new;
my $dancing = Robot.new but Dancing;

say $plain.speak;
say $dancing.speak;
say $dancing.dance;
```

🦋 Inveni codicem fontem in archivo [dancing-robot.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/roles/dancing-robot.raku).

## Exitus

```
beep
beep
spinning around
```

## Commentarii

1. Dissimilis exemplis superioribus, `Dancing` methodum exsistentem non substituit — methodum omnino novam `dance` adfert de qua `Robot` nihil scit.

1. `Robot.new but Dancing` partem in unum obiectum tempore exsecutionis miscet, itaque `$dancing` et `speak` (ex classe) et `dance` (ex parte) potest. Simplex `$plain` solum `speak` umquam didicit.

1. Facultas additicia ad illud unum obiectum pertinet, non ad classem `Robot`. Vocare `$plain.dance` error esset, quia `$plain` partem numquam accepit.

{% include nav.html %}
