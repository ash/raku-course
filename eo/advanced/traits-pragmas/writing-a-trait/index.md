---
title: Skribi trajton
translations_gpt:
---

{% include menu.html %}

Trajtoj estas ordinaraj multi-subrutinoj kun speciala nomo, do vi povas skribi viajn proprajn. Por aldoni trajton literumitan `is something`, difinu `multi sub trait_mod:<is>`, kies parametroj diras, al kio ĝi aplikiĝas, kaj nomas la trajton:

Ĉi tio estas unu el la pli progresintaj anguloj de Raku, do ne maltrankviliĝu, se ĝi ŝajnas komplika. Vi povas uzi la enkonstruitajn trajtojn tute bone sen scii, kiel ili estas faritaj, kaj vi malofte bezonos skribi propran — traktu ĉi tiun paĝon kiel rigardon sub la kapoton.

```raku
my @traced;

multi sub trait_mod:<is>(Routine:D $r, :$traced!) {
    @traced.push($r.name);
}

sub foo() is traced { }
sub bar() is traced { }

say @traced; # [foo bar]
```

Legu la subskribon: la unua parametro, `Routine:D $r`, estas la aĵo, al kiu la trajto estas alfiksita — ĉi tie subrutino. La `:D` estas tipa _rideto_, kiu postulas **difinitan** valoron — efektivan rutinan objekton, ne la nudan, nedifinitan tipon `Routine` mem. (Ĝiaj partneroj estas `:U`, kiu postulas la nedifinitan tipobjekton, kaj `:_`, kiu akceptas ambaŭ.) La nomita parametro `:$traced!` estas la propra nomo de la trajto; ĝia ĉeesto estas tio, kio igas `is traced` voki ĉi tiun subrutinon. Ĉar trajtoj ruliĝas dum **kompilado**, kaj `foo` kaj `bar` estas registritaj dum ili estas deklaritaj, do `@traced` jam listigas ilin, kiam la programo ruliĝas — vi eĉ povus movi la linion `say @traced` supren antaŭ la du difinojn `sub`, kaj ĝi ankoraŭ presus `[foo bar]`.

Ĉi tiu eta trajto nur registras nomojn, sed la sama mekanismo povas fari multe pli: envolvi rutinon por aldoni protokoladon, validigi atributon, aŭ alfiksi metadatumojn. Skribi la unuan parametron kiel `Attribute` aŭ `Variable` anstataŭ `Routine` permesas al trajto apliki al atributoj aŭ variabloj. Trajtoj estas tio, kiel Raku tenas sian deklaran sintakson malfermita — `is rw` kaj via propra `is traced` estas konstruitaj same.

{% include nav.html %}
