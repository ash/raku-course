---
title: Module-introspectie
---

{% include menu.html %}

De naam van een module introduceert een _pakket_ — een naamruimte die de namen bevat die erin gedefinieerd zijn. Eerder, in [de sectie over containers](/nl/advanced/containers), heb je `WHO` leren kennen, dat de `Stash` (de symbooltabel) van een pakket teruggeeft. Module-introspectie maakt daar gebruik van.

De onderstaande voorbeelden gebruiken de `Greeting`-module die in de eerdere onderwerpen is opgebouwd — een geëxporteerde subroutine en een gedeelde `our`-variabele:

```raku
unit module Greeting;

our $version = '1.0';

sub hello($name) is export {
    return "Hello, $name!";
}
```

Het pakket van een module wordt geschreven met een afsluitende `::`. Door `.keys` toe te voegen worden de namen weergegeven die het bevat:

```raku
use Greeting;

say Greeting::.keys.sort; # ($version EXPORT)
```

De `Greeting`-module uit de eerdere onderwerpen definieert een `our`-variabele, `$version`, dus het pakket bevat die naam — inclusief de sigil. Daarnaast staat `EXPORT`, wat misschien verrassend lijkt. Dit is een pakket dat Raku automatisch aanmaakt om alles te bewaren wat een module markeert met `is export`, zoals de `hello`-subroutine. Een geëxporteerde naam verschijnt daarom _niet_ direct in het pakket; het bevindt zich in dat `EXPORT`-subpakket. (De sleutels komen in geen vaste volgorde terug, dus het voorbeeld sorteert ze voor een stabiel resultaat.)

Je kunt ook een naam opzoeken in het pakket door het als sleutel te gebruiken. Dit bereikt dezelfde waarde als de gekwalificeerde `$Greeting::version`:

```raku
use Greeting;

say Greeting::{'$version'}; # 1.0
```

## Weergeven wat een module exporteert

Het `EXPORT`-pakket dat hierboven te zien is, is de plek waar de geëxporteerde namen daadwerkelijk leven, dus je kunt ze weergeven door een niveau dieper te kijken. Exports zonder een tag gaan naar de `DEFAULT`-groep (zie [Exporttags](/nl/advanced/modules-basics/export-tags)), en de `.keys` daarvan zijn de geëxporteerde routines:

```raku
use Greeting;

say Greeting::EXPORT::DEFAULT::.keys.sort; # (&hello)
```

Elke sleutel is een geëxporteerde naam met zijn sigil — hier de enkele subroutine `&hello`, weergegeven met de `&` die een routine aanduidt. Zo kun je ontdekken wat een module beschikbaar stelt aan zijn gebruikers zonder de broncode te lezen: vraag het `EXPORT::DEFAULT`-pakket wat het bevat.

Het inspecteren van een pakket op deze manier is handig wanneer je wilt ontdekken wat een module biedt, of om de namen dynamisch te benaderen in plaats van ze allemaal uit te schrijven in de broncode.

{% include nav.html %}
