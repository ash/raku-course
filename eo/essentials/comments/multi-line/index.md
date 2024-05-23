---
title: Multi-line comments
---

{% include menu.html %}

Tuj kiam vi volas lasi komenton kiu estas pli granda ol unu linio, vi povas elekti aŭ havi kelkajn unu-linajn komentojn aŭ unu solan multi-linian komenton.

Multi-liniaj komentoj komenciĝas per du-karaktera kombinaĵo ``#` `` kaj estas sekvataj de paro de enfermaj karakteroj `( )`, `{ }`, `[ ]`, aŭ `< >` aŭ iliaj ripetitaj kopioj: `(( ))`, `[[[ ]]]`, ktp.

Ekzemple:

```raku
my $name;
#`( Ni petos la uzanton
enmeti sian nomon unue kaj poste
konservi la enigon en variablo. )

$name = prompt 'Kio estas via nomo? ';
#`{ La programo nun atendas
ĝis la uzanto enmetas la nomon
kaj premas Enter. }

say $name; #`( Kaj nun ni povas presi ĝin )
```

{% include nav.html %}