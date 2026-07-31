---
title: Dzīvie supply
translations_gpt:
---

{% include menu.html %}

_Dzīva_ supply pārraida vērtības tad, kad tās notiek, tiem pieslēgumiem, kas klausās **tajā brīdī**. Tādu izveido ar `Supplier`: piegādātājs ir sūtītājpuse, un tā `.Supply` ir saņēmējpuse, kurai citi pieslēdzas.

```raku
my $supplier = Supplier.new;
my $supply   = $supplier.Supply;

my @got;
$supply.tap(-> $v { @got.push($v) });

$supplier.emit(1);
$supplier.emit(2);

say @got; # [1 2]
```

Šeit `.emit` iestumj vērtību dzīvajā supply, un to saņem katrs pašreizējais pieslēgums. Pieslēgums bija vietā pirms izstarošanas, tāpēc tas satvēra abas vērtības.

Būtiskā atšķirība no supply pēc pieprasījuma ir laiks: dzīva supply pagātnes vērtības **neatceras**. Pieslēgums, kas pievienots pēc `emit`, palaistu garām visu, kas izstarots pirms tā abonēšanās. Dzīvās supply ir pareizais modelis īstiem notikumiem — klikšķiem, ziņojumiem, sensoru rādījumiem —, kur svarīgs ir tas, «kas notiek tagad», un pagātne ir pagājusi.

Īsumā: izmantojiet supply pēc pieprasījuma, lai nemainīgu virkni atkārtotu katram abonentam, un dzīvu supply (caur `Supplier`), lai pārraidītu notikumus tad, kad tie notiek.

{% include nav.html %}
