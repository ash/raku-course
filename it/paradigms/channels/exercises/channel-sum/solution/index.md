---
title: 'Soluzione: Sommate un channel'
translations_gpt:
---

{% include menu.html %}

Ecco una possibile soluzione del compito.

## Codice

```raku
my $c = Channel.new;

my $producer = start {
    $c.send($_) for 1..6;
    $c.close;
};

my $consumer = start {
    [+] $c.list;
};

my ($sent, $sum) = await $producer, $consumer;
say $sum;
```

🦋 Trova il programma nel file [channel-sum.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/channels/channel-sum.raku).

## Output

```
21
```

## Commenti

1. La promise del produttore invia i sei valori su un thread e chiude il channel. La promise del consumatore, su un altro thread, usa `.list` per raccogliere tutto fino alla chiusura e ne restituisce la somma (`[+]` somma `1 + 2 + … + 6`).

1. `await $producer, $consumer` aspetta **entrambe** le promise e restituisce i loro risultati in ordine. Il risultato del produttore qui non serve (`$sent`); quello del consumatore è la somma, `21`. È il channel a portare in sicurezza i valori dal thread produttore al thread consumatore.

{% include nav.html %}
