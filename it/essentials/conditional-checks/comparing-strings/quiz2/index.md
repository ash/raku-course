---
title: Quiz 2 — la condizione in if
---

{% include menu.html %}

Correggi il programma e rispondi alla domanda.

{:.quiz-code .fill}
. | my $password = prompt &apos;Inserisci la tua password: &apos;;
. | 
eq = | if $password ␣␣ &apos;*&(#&$#Y&apos; {
. | &nbsp;&nbsp;&nbsp;&nbsp;say &apos;Corretto&apos;;
. | }
. | else {
. | &nbsp;&nbsp;&nbsp;&nbsp;say &apos;Errato&apos;;
. | }


Con il `=` nel test, cosa fa questo programma?

{:.quiz-select}
Stampa sempre ‘Corretto’ | La tua risposta:&nbsp; (: Stampa sempre ‘Corretto’, Stampa sempre ‘Errato’, Stampa ‘Corretto’ per password corrette e ‘Errato’ per password errate, Stampa ‘Errato’ per password corrette e ‘Corretto’ per password errate :)

<div class="extended-explanation">Il programma stampa sempre ‘Corretto’ perché <code>$password = '*&(#&$#Y'</code> è un'assegnazione che imposta il nuovo valore della variabile <code>$password</code>. Poiché il valore non è né zero né una stringa vuota, è considerato <code>True</code>. La password inserita dall'utente non viene mai controllata in questo caso.<br/><br/>Se scrivi <code>==</code>, allora il programma si interromperà poiché tenta di convertire le stringhe (la password dell'utente e la password corretta) in numeri e fallisce.</div>

{% include quiz.html %}

{% include nav.html %}