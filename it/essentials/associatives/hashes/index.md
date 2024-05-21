---
title: Hashes
---

{% include menu.html %}

Un _hash_ è un altro esempio di tipi di dati associativi in Raku. È un tipo di dato aggregato che mappa i nomi dei suoi elementi ai loro valori. Introduciamo il nuovo sigillo che le variabili hash usano: `%`.

```raku
my %capitals;
```

Ora puoi usare l'hash e assegnargli alcuni valori iniziali.

```raku
%capitals = France => 'Paris', Italy => 'Rome';
```

Come con altri tipi di dati, entrambe le azioni possono essere fatte insieme:

```raku
my %capitals = France => 'Paris', Italy => 'Rome';
```

## Accesso agli elementi

L'indicizzazione degli elementi è simile a quanto visto per le [coppie](../pairs). Usa una coppia di parentesi angolari o parentesi graffe con una stringa:

```raku
say %capitals<France>;
say %capitals{'Italy'};
```

Gli hash sono mutabili, quindi puoi sia cambiare i valori esistenti che aggiungere nuovi elementi:

```raku
%capitals<Germany> = 'Berlin';
```

## Chiavi e valori

I due metodi incorporati, `keys` e `values`, restituiscono le liste delle chiavi e dei valori di un hash:

```raku
say %capitals.keys;
say %capitals.values;
```

Ecco un esempio dell'output di questo programma:

    (Germany Italy France)
    (Berlin Rome Paris)

Nota che gli elementi dell'hash non sono ordinati, ma l'ordine delle chiavi e dei valori, restituito dai metodi sopra, è identico.

{% include nav.html %}