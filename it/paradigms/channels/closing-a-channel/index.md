---
title: Chiudere un channel
translations_gpt:
---

{% include menu.html %}

Quando un produttore non ha più valori da inviare, chiama `.close` sul channel. La chiusura segnala al consumatore che il flusso è finito.

Il modo più comodo di consumare un channel chiuso è `.list`, che ti dà ogni valore rimasto e finisce una volta che il channel è chiuso:

```raku
my $c = Channel.new;
$c.send(1);
$c.send(2);
$c.send(3);
$c.close;

say $c.list; # (1 2 3)
```

Poiché `.list` aspetta che il channel sia chiuso, è perfetto per «raccogli tutto ciò che il produttore invia». Puoi trattare il risultato come qualunque altro elenco — sommarlo, contarlo e così via:

```raku
my $c = Channel.new;
$c.send($_) for 1..5;
$c.close;

say [+] $c.list; # 15
```

La chiusura è il modo in cui un consumatore sa quando fermarsi. Senza di essa, `.list` (o un ciclo di `.receive`) aspetterebbe per sempre un valore che non arriva mai. Chiudi sempre un channel quando l'invio è finito.

{% include nav.html %}
