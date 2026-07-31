---
title: 'Solutio: Animal cum nomine et aetate'
translations_gpt:
---

{% include menu.html %}

Ecce solutio possibilis huius exercitationis.

## Codex

```raku
role Named {
    method label {
        'I am ' ~ self.name;
    }
}

role Aged {
    method status {
        self.age ~ ' years';
    }
}

class Pet does Named does Aged {
    has $.name;
    has $.age;
}

my $p = Pet.new(name => 'Rex', age => 3);
say $p.label;
say $p.status;
```

🦋 Inveni codicem fontem in archivo [named-aged-pet.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/roles/named-aged-pet.raku).

## Exitus

```
I am Rex
3 years
```

## Commentarii

1. `Pet` duas partes simul componit, et methodum `label` et methodum `status` acquirens.

1. Methodus unius cuiusque partis attributo utitur (`name` vel `age`) quod classis `Pet` praebet.

{% include nav.html %}
