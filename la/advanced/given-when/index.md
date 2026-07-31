---
title: '`given` et `when`'
translations_gpt:
---

{% include menu.html %}

Cum programma debet eligere inter plures optiones, catena `if` et `elsif` verificationum potest longa et repetitiva fieri. In tali casu, constructio `given`/`when` saepe clarior est. Similis est sententiae `switch` quae in aliis linguis invenitur.

Copia `given` valorem accipit et eum _topicum_ facit — specialem variabilem `$_`. Quaeque copia `when` deinde cum illo topico comparatur, et prima quae congruit currit:

```raku
my $n = 2;

given $n {
    when 1 { say 'one' }
    when 2 { say 'two' }
    when 3 { say 'three' }
}
```

Hoc programma imprimit:

```
two
```

Dissimiliter a `switch` in quibusdam aliis linguis, nullus est casus transitus: simulac `when` congruit, eius copia currit et copia `given` finita est. Reliquae copiae `when` non probantur.

## Copia `default`

Copia `default` currit cum nulla ex copiis `when` congruebat. Eundem munus agit ac ramus `else` sententiae `if`:

```raku
my $n = 5;

given $n {
    when 1 { say 'one' }
    when 2 { say 'two' }
    default { say 'many' }
}
```

Quia `$n` neque `1` neque `2` est, programma imprimit:

```
many
```

{% include nav.html %}
