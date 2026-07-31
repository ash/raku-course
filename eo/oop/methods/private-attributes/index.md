---
title: Privataj atributoj
translations_gpt:
---

{% include menu.html %}

En la [sekcio pri atributoj](/eo/oop/attributes), ĉiu atributo estis deklarita per `$.`, kio kreas publikan atingilon. Atributo deklarita per `$!` anstataŭe estas _privata_: ĝi havas neniun atingilon kaj ne videblas de ekstere de la objekto. Ĝi estas atingebla nur el ene de la propraj metodoj de la klaso, kie vi referencas ĝin kiel `$!name`.

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

La sekreta `$!code` estas konservita ene de la objekto sed neniam elmontrita: ne estas atingilo `.code`, do la sola maniero interagi kun ĝi estas tra la metodo `unlocks`, kiun la klaso elektas provizi. Provo legi `$safe.code` aŭ `$safe!code` simple malsukcesas.

Privataj atributoj estas utilaj por internaj detaloj, kiujn la resto de la programo ne devus tuŝi rekte.

{% include nav.html %}
