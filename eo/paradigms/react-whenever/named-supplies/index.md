---
title: Supply difinitaj ekstere
translations_gpt:
---

{% include menu.html %}

Ĉiu ĝisnuna `whenever` kreis sian supply ĝuste tie en la kapo — `whenever Supply.from-list(...)`. Tio legiĝas bone por rapida ekzemplo, sed veraj programoj malofte havas sian event-fonton ĉemane ĝuste sur tiu loko. Pli ofte supply estas konstruita aliloke — redonita de funkcio, produktita de `Supplier`, aŭ transdonita al vi de kontaktskatolo aŭ tempigilo — kaj alvenas kiel simpla variablo. `whenever` estas same kontenta observi nomitan supply:

```raku
my $sensors  = Supply.from-list(18, 21, 19);
my $messages = Supply.from-list('hi', 'bye');

react {
    whenever $sensors {
        say "temperature: $_";
    }
    whenever $messages {
        say "message: $_";
    }
}
```

Ĉi tio presas:

```
temperature: 18
temperature: 21
temperature: 19
message: hi
message: bye
```

Do legu `whenever $sensors { … }` kiel «kiam ajn la supply `$sensors` — de kie ajn ĝi venis — eligas valoron, plenumu ĉi tiun korpon». La enlinia `whenever Supply.from-list(...)`, kiun vi vidis pli frue, estas nur la speciala kazo, kie la fonto hazarde estas kreata surloke.

Se ĉi tiu formo de ekstera bloko kun internaj blokoj memorigas vin pri io, vi pravas — la [sekva paĝo](/eo/paradigms/react-whenever/whenever-vs-when) komparas ĝin kun `given`/`when`.

{% include nav.html %}
