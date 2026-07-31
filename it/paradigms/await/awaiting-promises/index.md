---
title: Attendere una promise
translations_gpt:
---

{% include menu.html %}

`await` prende una promise, aspetta che si completi e ne restituisce il risultato:

```raku
my $p = start { 7 * 6 };
say await $p; # 42
```

Il programma si mette in pausa all'`await` solo per il tempo necessario, poi prosegue con il valore prodotto dalla promise.

Date parecchie promise, `await` le aspetta **tutte** e restituisce i loro risultati nello stesso ordine delle promise nell'elenco:

```raku
my @jobs = (start { 5 }), (start { 10 }), (start { 15 });
say await @jobs;     # (5 10 15)
say [+] await @jobs; # 30
```

I lavori girano in modo concorrente, ma `await @jobs` non ritorna finché ognuno non è finito. Ogni risultato sta poi nella stessa posizione della propria promise in `@jobs`, indipendentemente da quale lavoro sia finito per primo.

Se una promise attesa era **rotta** — il suo blocco ha sollevato un'eccezione — `await` rilancia quell'eccezione nel punto dell'`await`. Questo significa che gli errori del lavoro in secondo piano emergono là dove lo aspetti, così puoi gestirli con i soliti `try` / `CATCH` della parte sulle eccezioni:

```raku
my $p = start { die 'no such file' };

my $result = try await $p;
say $result // "the job failed: $!";
```

Questo stampa:

```
the job failed: no such file
```

Il `die` avviene su un thread in secondo piano, ma l'eccezione viaggia con la promise e salta fuori all'`await`. Il `try` la intercetta lì, lasciando `$result` non definito e l'errore in `$!` — così un fallimento nel lavoro concorrente si gestisce esattamente come qualunque altra eccezione. Attendere, quindi, non riguarda solo l'ottenere un valore: è il momento in cui il lavoro concorrente si ricongiunge al flusso principale, risultati ed errori compresi.

{% include nav.html %}
