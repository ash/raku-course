---
title: Paralela map per hyper
translations_gpt:
---

{% include menu.html %}

Voku `.hyper` sur listo antaŭ `map` aŭ `grep`, kaj la laboro disvastiĝas trans plurajn laborfadenojn — dum la rezultoj tamen revenas en la **originala ordo**:

```raku
say (1..5).hyper.map(* * 2); # (2 4 6 8 10)
```

Ĉi tio aspektas precize kiel ordinara `map`, kaj la rezulto estas identa; la sola diferenco estas, ke la duobligoj eble estis kalkulitaj sur malsamaj kernoj samtempe.

`.hyper` funkcias kun `grep` ĝuste same — ĉiu elemento estas testata paralele, kaj tiuj, kiuj trapasas, tamen revenas en sia originala ordo:

```raku
say (1..10).hyper.grep(* %% 2); # (2 4 6 8 10)
```

Ĉar `.hyper` konservas la ordon, ĝi estas rekta anstataŭaĵo por malrapida `map` aŭ `grep`: nenio, kio dependas de la ordo de la rezultoj, devas ŝanĝiĝi. La avantaĝo aperas nur kiam la laboro por ĉiu elemento estas sufiĉe granda por superpezi la koston de kunordigi fadenojn — kvadratigi nombron estas multe tro malmultekosta por vere indi paraleligon. Por vere multekosta laboro por ĉiu elemento sur granda listo, `.hyper` povas transformi longan atendon en mallongan kontraŭ la prezo de unu sola metodvoko.

Unu aferon indas memori: ĉu la laboro *vere* disvastiĝas trans kernoj, dependas de la kompililo. La lingvo fiksas la rezultojn — kaj, por `.hyper`, ilian originalan ordon — sed ĝi ne postulas efektivan paralelan plenumon. `.hyper` kaj `.race` **petas** paralelecon prefere ol postuli ĝin, do donita kompililo povas plenumi ilin sur fadenaro aŭ povas senbrue trakti la elementojn laŭvice. Traktu ilin kiel ŝancon por rapidigo, ne kiel garantion pri ĝi.

Ĉar la ordo estas konservata, operacioj, kiuj *dependas* de ĝi, tamen eliras ĝuste. Ĉi tie ĉiu vorto estas majuskligata paralele, kaj tamen la pecoj rekuniĝas en la frazon en sia originala sinsekvo:

```raku
say <raku is fun>.hyper.map(*.uc).join(' '); # RAKU IS FUN
```

{% include nav.html %}
