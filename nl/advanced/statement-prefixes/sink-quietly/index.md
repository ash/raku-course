---
title: sink en quietly
translations_gpt:
---

{% include menu.html %}

Twee andere prefixen zijn bedoeld voor het uitvoeren van code omwille van de effecten in plaats van de waarde.

Het prefix `sink` evalueert iets in _sink context_ — puur voor de neveneffecten, waarbij het resultaat wordt weggegooid. Het is nuttig bij een luie operatie die je wilt dwingen om uit te voeren:

```raku
sink (1..3).map({ print "$_ " });
print "\n"; # 1 2 3
```

De `map` hier wordt alleen uitgevoerd vanwege het printen dat het doet; `sink` zorgt ervoor dat het daadwerkelijk wordt uitgevoerd en gooit de resulterende lijst weg. Zonder het te forceren zou een luie `map` waarvan het resultaat nooit wordt gebruikt, mogelijk helemaal niet draaien.

Het prefix `quietly` voert een blok uit met **onderdrukte waarschuwingen**. Code die normaal een waarschuwing naar de foutuitvoer zou sturen, blijft stil:

```raku
my $value;
quietly {
    say $value + 1; # 1, with no "uninitialized value" warning
}
```

Het optellen van `1` bij een ongedefinieerde `$value` geeft normaal een waarschuwing over het gebruik van een niet-geinitialiseerde waarde, maar binnen `quietly` wordt die waarschuwing verborgen. Gebruik het wanneer je bewust iets doet dat waarschuwt en je het lawaai niet wilt — maar spaarzaam, want waarschuwingen wijzen meestal op een echte fout.

{% include nav.html %}
