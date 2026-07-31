---
title: Datu tipi un skalārie konteineri
---

{% include menu.html %}

Apskatīsim programmu, kas atkārtoti izmanto vienu un to pašu mainīgo dažādu datu veidu glabāšanai. Mēs izmantojam `dd`, lai redzētu, ko konteineris satur katrā solī. Šis piemērs ir paredzēts demonstrācijai un nav ieteicams programmēšanas stils.

```raku
my $value;
dd $value;

$value = 42;
dd $value;

$value = 'forty-two';
dd $value;
```

Katrs `dd` izsaukums parāda, ko mainīgais `$value` pašlaik satur:

```
$value = Any
$value = 42
$value = "forty-two"
```

Sākumā mainīgais ir tukšs, un `dd` parāda tā vērtību kā `Any` — nedefinētu bāzes vērtību, ar ko sākas netipizēts konteineris. Pēc piešķiršanām `dd` parāda veselo skaitli un pēc tam virkni.

Ievērojiet, ka `dd` šeit neizdrukā tipu pirms nosaukuma. Netipizēts konteineris neuzņemas nekādu tipu, tāpēc tiek parādīta tikai vērtība. Kā redzēsiet nākamajā tēmā, [konteineris ar deklarētu tipu](/lv/advanced/scalar-containers/type-constraints) uzvedas citādi.

{% include nav.html %}
