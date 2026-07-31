---
title: Vivaj supply
translations_gpt:
---

{% include menu.html %}

_Viva_ supply elsendas valorojn laŭ ilia okazo al kiuj ajn konektoj aŭskultas **en tiu momento**. Vi kreas ĝin per `Supplier`: la provizanto estas la sendflanko, kaj ĝia `.Supply` estas la ricevflanko, al kiu aliaj konektiĝas.

```raku
my $supplier = Supplier.new;
my $supply   = $supplier.Supply;

my @got;
$supply.tap(-> $v { @got.push($v) });

$supplier.emit(1);
$supplier.emit(2);

say @got; # [1 2]
```

Ĉi tie `.emit` puŝas valoron en la vivan supply, kaj ĉiu aktuala konekto ricevas ĝin. La konekto estis surloke antaŭ la eligoj, do ĝi kaptis ambaŭ valorojn.

La decida diferenco de laŭpeta supply estas tempeco: viva supply **ne** memoras pasintajn valorojn. Konekto aldonita post `emit` maltrafus tion, kio estis eligita antaŭ ol ĝi abonis. Vivaj supply estas la ĝusta modelo por veraj eventoj — klakoj, mesaĝoj, sensilaj legaĵoj — kie «kio okazas nun» gravas kaj la pasinteco estas for.

Mallonge: uzu laŭpetan supply por represpekti fiksitan sinsekvon al ĉiu abonanto, kaj vivan supply (per `Supplier`) por elsendi eventojn laŭ ilia okazo.

{% include nav.html %}
