---
title: Ricevere oltre la fine
translations_gpt:
---

{% include menu.html %}

Che cosa succede se chiami `.receive` più volte di quanti siano i valori da prendere? La risposta dipende dal fatto che il channel sia stato **chiuso** o no.

Prendi l'esempio produttore-consumatore di prima: un compito in secondo piano invia tre valori e chiude il channel. E se il consumatore ne chiedesse un quarto?

```raku
my $c = Channel.new;
start {
    $c.send($_) for 1..3;
    $c.close;
}

say $c.receive; # 1
say $c.receive; # 2
say $c.receive; # 3
say $c.receive; # one receive too many
```

## Su un channel chiuso, una ricezione in più solleva un'eccezione

La chiusura non butta via i valori già in coda: le tre chiamate `.receive` qui sopra restituiscono comunque `1`, `2` e `3`. Ma una volta che il channel è chiuso **e** vuoto, non possono più arrivare valori, quindi invece di lasciarti aspettare per sempre Raku solleva un'eccezione:

```
Cannot receive a message on a closed channel
```

L'eccezione è `X::Channel::ReceiveOnClosed`. È utile più che fastidiosa: dice al consumatore, senza ambiguità, che ha svuotato il channel. In pratica eviti del tutto di incontrarla consumando con `.list` (che si ferma pulitamente alla chiusura) o ciclando solo finché restano valori — entrambe le cose mostrate nella pagina precedente.

## Su un channel aperto, una ricezione in più blocca

Se il produttore non chiude mai il channel, `.receive` non ha modo di sapere se un altro valore stia ancora arrivando, quindi semplicemente **aspetta**:

```raku
my $c = Channel.new;
$c.send(1);
say $c.receive; # 1
say $c.receive; # waits here — the channel is open but empty
```

Il programma si blocca al secondo `.receive`, perché un valore *potrebbe* essere ancora inviato. È il pericolo di cui avvertiva la pagina precedente: dimentica il `.close`, e un normale «aspetta il valore successivo» diventa un'attesa che non finisce mai.

I due esiti sono dunque opposti, in modo utile. Un channel **chiuso** fallisce in fretta quando è vuoto: ottieni un'eccezione che puoi vedere e intercettare. Un channel **aperto** continua ad aspettare — esattamente ciò che serve mentre un produttore è ancora al lavoro, ma un blocco silenzioso se il produttore si è fermato in sordina senza chiudere. Chiudere il channel è proprio ciò che trasforma quel blocco silenzioso in un segnale chiaro che il flusso è finito.

{% include nav.html %}
