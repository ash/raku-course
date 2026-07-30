---
title: start en await
translations_gpt:
---

{% include menu.html %}

Het sleutelwoord `start` draait een blok op de achtergrond en geeft meteen een `Promise` terug:

```raku
my $p = start { 2 + 2 };
```

Het werk gebeurt op Raku's threadpool terwijl je programma doorloopt. Om het resultaat te krijgen gebruik je `await`, dat wacht tot de promise klaar is en je haar waarde geeft:

```raku
my $p = start { 2 + 2 };
say await $p; # 4
```

`await` blokkeert precies lang genoeg voor de voltooiing van de promise en geeft daarna terug wat het blok opleverde — hier `4`. Als het werk al klaar is tegen de tijd dat je afwacht, krijg je het resultaat meteen.

Dit paar — `start` om te starten, `await` om op te halen — vormt de kern van op promises gebaseerde concurrency. Je kunt meerdere stukken werk starten, ze tegelijk laten lopen, en hun resultaten afwachten wanneer je er klaar voor bent, en precies daarop bouwt het volgende onderwerp voort.

{% include nav.html %}
