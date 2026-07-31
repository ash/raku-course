---
title: 'Solutio: Fasciculus META6'
translations_gpt:
---

{% include menu.html %}

Hic est possibilis solutio ad munus.

## Codex

`META6.json`:

```json
{
    "name": "Greet::Simple",
    "version": "0.0.1",
    "description": "A simple greeting module",
    "authors": [ "Your Name" ],
    "license": "Artistic-2.0",
    "depends": [ "JSON::Fast" ],
    "provides": {
        "Greet::Simple": "lib/Greet/Simple.rakumod"
    }
}
```

🦋 Inveni codicem fontem in archivo [META6.json](https://github.com/ash/raku-course/blob/master/exercises/advanced/distributing/a-meta6-file/META6.json).

## Commentarii

1. `provides` nomen moduli ad archivum quod eum efficit refert, via directorii partes `::` nominis sequente.

1. `depends` alias distributiones quas haec requirit enumerat — hic unam notationem `"JSON::Fast"`. Cum quis `Greet::Simple` installat, instrumenta `JSON::Fast` prius attrahent. Series vacua nullas dependentias significaret.

{% include nav.html %}
