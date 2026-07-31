---
title: 'Soluzione: Città e paese'
translations_gpt:
---

{% include menu.html %}

Ecco una possibile soluzione del compito.

## Codice

```raku
if 'London-UK' ~~ / $<city>=(\w+) '-' $<country>=(\w+) / {
    say ~$<city>;
    say ~$<country>;
}
```

🦋 Trova il programma nel file [city-and-country.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/captures/city-and-country.raku).

## Output

```
London
UK
```

## Commenti

1. `$<city>=( … )` e `$<country>=( … )` danno alle due catture dei nomi invece che dei numeri.

1. Dopo la corrispondenza si rileggono come `$<city>` e `$<country>`, il che si legge più chiaramente di quanto farebbero `$0` e `$1`.

1. Il prefisso `~` mette ogni cattura in contesto stringa così che si stampi come testo semplice; senza di esso, `say $<city>` mostrerebbe l'oggetto match come `｢London｣`.

{% include nav.html %}
