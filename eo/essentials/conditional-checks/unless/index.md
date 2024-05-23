---
title: Uzante unless
---

{% include menu.html %}

Ĉiuj Booleaj kondiĉoj povas esti facile neitaj per la [`!` operatoro](/eo/essentials/booleans/operations#negation). Tamen, en iuj kazoj, eksplicita neado faras la esprimon pli peza kaj malpli legebla. En tiaj kazoj, `unless` povas esti amiko.

La `unless` bloko estas plenumita kiam ĝia kondiĉo estas `False`.

```raku
my $broken = False;

# ...Io povas agordi $broken al True ĉi tie...
    
unless $broken {
    diru "Ne zorgu!";
    diru "Estu feliĉa!";
}
```

Komparu la du variantojn de la sama programo:

Kun `if` kaj neado:

```raku
if !$broken { . . . }
```

Kun `unless`:

```raku
unless $broken { . . . }
```

Havante la alternativojn, vi ĉiam povas elekti kio sentas pli bone al vi en la nuna situacio.

Notu, ke `unless` ne povas esti sekvata de `else` aŭ `elsif` blokoj. En ĉi tiu kazo, la sola maniero estas uzi `if`.

{% include nav.html %}