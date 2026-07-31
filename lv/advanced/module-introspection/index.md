---
title: Moduļu introspekcija
translations_gpt:
---

{% include menu.html %}

Moduļa nosaukums ievieš _pakotni_ — nosaukumtelpu, kas satur tajā definētos nosaukumus. Iepriekš, [sadaļā par konteineriem](/lv/advanced/containers), jūs iepazināties ar `WHO`, kas atgriež pakotnes `Stash` (simbolu tabulu). Moduļu introspekcija to izmanto praksē.

Turpmākajos piemēros tiek izmantots modulis `Greeting`, kas tika izveidots iepriekšējās tēmās — eksportēta apakšprogramma un koplietota `our` mainīgais:

```raku
unit module Greeting;

our $version = '1.0';

sub hello($name) is export {
    return "Hello, $name!";
}
```

Moduļa pakotne tiek pierakstīta ar `::` beigās. Pievienojot `.keys`, tiek uzskaitīti tajā esošie nosaukumi:

```raku
use Greeting;

say Greeting::.keys.sort; # ($version EXPORT)
```

Modulis `Greeting` no iepriekšējām tēmām definē `our` mainīgo `$version`, tāpēc tā pakotnē ir šis nosaukums — ar sigilu iekļautu. Blakus tam atrodas `EXPORT`, kas var šķist pārsteidzoši. Tā ir pakotne, ko Raku automātiski izveido, lai glabātu visu, ko modulis atzīmē ar `is export`, piemēram, apakšprogrammu `hello`. Tāpēc eksportēts nosaukums _neparādās_ tieši pakotnē; tas atrodas šajā `EXPORT` apakšpakotnē. (Atslēgas tiek atgrieztas nefiksētā secībā, tāpēc piemērā tās tiek sakārtotas, lai iegūtu stabilu rezultātu.)

Jūs varat arī meklēt nosaukumu pakotnē, izmantojot to kā atslēgu. Tas sasniedz to pašu vērtību kā kvalificētais `$Greeting::version`:

```raku
use Greeting;

say Greeting::{'$version'}; # 1.0
```

## Moduļa eksportēto elementu uzskaitīšana

Iepriekš redzētā pakotne `EXPORT` ir vieta, kur faktiski atrodas eksportētie nosaukumi, tāpēc tos var uzskaitīt, ieskatoties vienu līmeni dziļāk. Eksporti bez birkas nonāk grupā `DEFAULT` (skatiet [Eksporta birkas](/lv/advanced/modules-basics/export-tags)), un tās `.keys` ir eksportētās rutīnas:

```raku
use Greeting;

say Greeting::EXPORT::DEFAULT::.keys.sort; # (&hello)
```

Katra atslēga ir eksportēts nosaukums ar tā sigilu — šeit vienīgā apakšprogramma `&hello`, parādīta ar `&`, kas apzīmē rutīnu. Šādi jūs varat uzzināt, ko modulis piedāvā saviem lietotājiem, nelasot tā pirmkodu: pajautājiet tā `EXPORT::DEFAULT` pakotnei, ko tā satur.

Pakotnes introspekcija šādā veidā ir noderīga, ja vēlaties uzzināt, ko modulis piedāvā, vai dinamiski piekļūt tā nosaukumiem, nevis katru no tiem ierakstīt pirmkodā.

{% include nav.html %}
