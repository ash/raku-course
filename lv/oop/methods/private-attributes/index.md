---
title: Privāti atribūti
translations_gpt:
---

{% include menu.html %}

[Sadaļā par atribūtiem](/lv/oop/attributes) katrs atribūts tika deklarēts ar `$.`, kas izveido publisku piekļuves metodi. Atribūts, kas deklarēts ar `$!`, savukārt ir _privāts_: tam nav piekļuves metodes, un no ārpuses to nevar redzēt. Tas ir sasniedzams tikai klases pašas metodēs, kur uz to atsaucaties kā `$!name`.

```raku
class Safe {
    has $!code = 4321;

    method unlocks($attempt) {
        return $attempt == $!code;
    }
}

my $safe = Safe.new;
say $safe.unlocks(4321); # True
say $safe.unlocks(1111); # False
```

Slepenais `$!code` glabājas objekta iekšienē, taču nekad netiek atklāts: piekļuves metodes `.code` nav, tāpēc vienīgais veids, kā ar to mijiedarboties, ir metode `unlocks`, ko klase izvēlas piedāvāt. Mēģinājums nolasīt `$safe.code` vai `$safe!code` vienkārši neizdodas.

Privāti atribūti noder iekšējām detaļām, kurām pārējā programma nedrīkst pieskarties tieši.

{% include nav.html %}
