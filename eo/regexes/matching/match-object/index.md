---
title: La kongrua objekto
translations_gpt:
---

{% include menu.html %}

Kiam regulesprimo kongruas, la sagaca kongruigo redonas _kongruan objekton_. La sama objekto estas ankaŭ konservata aŭtomate en la speciala variablo `$/`, kiu foje nomiĝas «la kongrua variablo».

La kongrua objekto estas multe pli ol jes-aŭ-ne respondo. Kiel ĉeno, ĝi estas la teksto, kiu kongruis — aŭ per la metodo `.Str`, aŭ per la prefikso `~`, kiu estas la operatoro de ĉen-devigo kaj faras ekzakte la samon:

```raku
my $m = 'concatenate' ~~ /cat/;
say $m.Str; # cat
say ~$m;    # cat
```

Ĝi ankaŭ scias, **kie** en la ĉeno la kongruo estis trovita. La metodo `.from` donas la pozicion, kie ĝi komenciĝas, kaj `.to` donas la pozicion tuj post ĝia fino:

```raku
my $m = 'room 7 left' ~~ /\d/;
say $m.Str;  # 7
say $m.from; # 5
say $m.to;   # 6
```

Pozicioj estas kalkulataj ekde nulo, do la cifero `7` sidas ĉe indekso `5`.

Kiam la regulesprimo **ne** kongruas, la rezulto tute ne estas kongrua objekto — ĝi estas la speciala valoro `Nil`. Atribui `Nil` al skalaro lasas ĝin nedifinita:

```raku
my $m = 'abc' ~~ /z/;
say $m.defined; # False
```

Do vi ĉiam povas kontroli `.defined` (aŭ simple uzi la valoron en Boolea kunteksto) antaŭ ol legi la kongruintan tekston.

{% include nav.html %}
