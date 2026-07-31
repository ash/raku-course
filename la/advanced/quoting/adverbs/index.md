---
title: Adverbia quotationis
---

{% include menu.html %}

Modus constructionis citandi _adverbiis_ temperari potest. Quaeque proprietas citandi — interpolatio scalarium, executio clausurarum insertarum, processus obliquorum reversorum — suo adverbio regitur, quod illam unam proprietatem accendit vel exstinguit, ita ut a `q` vel `Q` incipere possis et accurate eas proprietates quas opus est addere.

Nonnulla adverbia communia:

* `:s` / `:scalar` — variabiles scalares interpola (`$x`)
* `:c` / `:closure` — codicem insertum in `{ … }` interpola
* `:b` / `:backslash` — effugia per obliquum reversum ut `\n` processa

Unum ad `q` adde ut unam proprietatem accendas. Exempli gratia, codicem insertum permitte sed nihil aliud:

```raku
say q/result: {3 * 4}/;   # result: {3 * 4}  — plain q leaves the block untouched
say q:c/result: {3 * 4}/; # result: 12        — :c runs the block
```

Cum simplici `q` forma `{ 3 * 4 }` ad verbum imprimitur; solum `:c` efficit ut clausura exsequatur et valorem eius inserat, dum `$variable` adhuc intacta relinqueretur. Nota delimitatores `/…/` hic: si seriem delimitatoribus `{…}` circumscripsisses — compilator recte enumerat — tunc interior `{ 3 * 4 }` ut pars textus delimitati legitur potius quam clausura, itaque `:c` eam ad litteram relinqueret. Quotienscumque textus clausuram `{ … }` continet, delimitatorem alium quam `{…}` elige ut clausura re vera exsequatur. Interpolationem scalarem ad formam aliter maxime ad litteram `Q` addere potes:

```raku
my $name = 'Anna';
say Q:s{Hi, $name}; # Hi, Anna
```

Adverbia etiam proprietates **exstinguunt** cum `!`. Ut `qq` adhibeas sed `$` ad litteram relinquas:

```raku
my $price = 5;
say qq:!s{costs $price dollars}; # costs $price dollars
```

`qq` aequivalet `Q` cum omnibus adverbiis interpolationis accensis, et `q` aequivalet `Q` cum minore numero. Adverbia tibi subtile imperium inter haec duo extrema praebent.

{% include nav.html %}
