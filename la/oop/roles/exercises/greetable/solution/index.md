---
title: 'Solutio: Arca cum magnitudine'
translations_gpt:
---

{% include menu.html %}

Ecce solutio possibilis huius exercitationis.

## Codex

```raku
role Sized {
    method describe {
        'size is ' ~ self.size;
    }
}

class Box does Sized {
    has $.size;
}

my $b = Box.new(size => 10);
say $b.describe;
say $b ~~ Sized;
```

🦋 Inveni codicem fontem in archivo [greetable.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/roles/greetable.raku).

## Exitus

```
size is 10
True
```

## Commentarii

1. Pars methodum `describe` praebet, et classis eam per `does Sized` componit. Methodus `self.size` nititur, quod classis `Box` praebet — pars et classis inter se conveniunt ut obiectum plenum efficiant.

1. Quia `Box` partem facit, comparatio callida `$b ~~ Sized` `True` est: obiectum ut omnem partem quam classis eius componit habens agnoscitur, quod utile est ad inspiciendum quid obiectum facere possit antequam methodum partis voces.

{% include nav.html %}
