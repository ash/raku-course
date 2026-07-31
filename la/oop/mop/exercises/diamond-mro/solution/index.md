---
title: 'Solutio: Rhombus classium'
translations_gpt:
---

{% include menu.html %}

Ecce solutio possibilis huius exercitationis.

## Codex

```raku
class A {
}

class B is A {
}

class C is A {
}

class D is B is C {
}

say D.^mro.map(*.^name);
```

🦋 Inveni codicem fontem in archivo [diamond-mro.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/mop/diamond-mro.raku).

## Exitus

```
(D B C A Any Mu)
```

## Commentarii

1. `D` a duobus parentibus simul heredat — `class D is B is C` unumquemque cum proprio `is` enumerat. Haec est hereditas multiplex, et `A`, `B`, `C`, `D` *adamantem* formant: duae semitae a `D` sursum ad communem maiorem `A`.

1. `.^mro` illum adamantem in unum ordinem quaerendi linearem complanat. `D` primum venit, deinde parentes eius `B` et `C` eo ordine quo scripti sunt, deinde communis `A`, et denique `Any` et `Mu`.

1. Quamquam et `B` et `C` ad `A` ducunt, genus `A` **semel** apparet, et solum post utrumque. Ea est ratio ordinis resolutionis methodorum: omne genus exacte semel visitatur, et parens numquam ante filiam venit quae ab eo heredat — itaque methodus in `B` definita semper ante eam invenitur quam in `A` superscriberet.

{% include nav.html %}
