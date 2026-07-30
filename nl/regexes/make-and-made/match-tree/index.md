---
title: De matchboom
translations_gpt:
---

{% include menu.html %}

Een grammaticamatch is een boom. De bovenste match heeft een benoemd item voor elk token dat `TOP` gebruikte, en die items zijn zelf matchobjecten met hun eigen captures. Je navigeert door de boom met dezelfde `<naam>`-syntaxis die je voor benoemde captures gebruikt:

```raku
grammar Pair {
    token TOP   { <key> '=' <value> }
    token key   { \w+ }
    token value { \d+ }
}

my $m = Pair.parse('x=5');
say $m<key>;   # ｢x｣
say $m<value>; # ｢5｣
```

Elke tak is een volledig matchobject, dus je kunt hem om zijn `.Str`, zijn positie of een omzetting vragen. Hier is de waarde een reeks cijfers, dus er een echt getal van maken is slechts een methodeaanroep:

```raku
say $m<value>.Int; # 5
```

Bij diepere grammatica's heeft de boom meer niveaus — `$m<a><b>` bereikt een token `b` dat binnen een token `a` gebruikt is. Zo door de boom lopen werkt, maar voor meer dan een paar velden wordt het onhandig. Het volgende onderwerp laat een nettere manier zien om aan elke match de waarde te hangen die je werkelijk wilt.

{% include nav.html %}
