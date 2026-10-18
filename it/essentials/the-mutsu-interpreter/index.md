---
title: L'interprete mutsu
translations_gpt:
---

{% include menu.html %}

**mutsu** è una terza implementazione di Raku, scritta in **Rust** da Tokuhiro Matsuno. Come Rakudo, compila il tuo programma in bytecode e lo esegue su una macchina virtuale — ma non si tratta di MoarVM: la macchina virtuale è la sua, integrata nell'eseguibile `mutsu`.

mutsu implementa Raku 6.d ed è in fase di sviluppo attivo. Il suo autore dice chiaramente che non è ancora adatto all'uso in produzione, ma supera già quasi tutti i file di test di Roast, quindi quasi tutti i programmi di questo corso girano su di esso senza modifiche.

C'è una lacuna che conta mentre stai imparando: mancano ancora alcuni controlli in fase di compilazione. Il caso più evidente: nella versione 0.24.0, mutsu non segnala prima dell'esecuzione del programma una variabile che hai dimenticato di dichiarare, come invece fanno Rakudo e Raku++. Quando il corso mostra un messaggio di errore di questo tipo, prova quell'esempio con uno degli altri due compilatori.

## Raku nel browser

mutsu può anche essere compilato in WebAssembly, così da girare all'interno di una pagina web. Il suo sito, [tokuhirom.github.io/mutsu](https://tokuhirom.github.io/mutsu/), lo sfrutta per un'introduzione a Raku in inglese e in giapponese, un tutorial pratico e un campo da gioco dove puoi eseguire Raku senza installare nulla — in tutte quelle pagine gira mutsu stesso.

## Moduli

mutsu ha una propria copia del gestore di pacchetti zef, chiamata `mzef`, quindi puoi installare i moduli Raku per esso nel modo consueto, con `mzef install` seguito dal nome del modulo.

## Codice sorgente

mutsu è open source. Puoi trovarlo, insieme alle build delle release e alle istruzioni di compilazione, su [github.com/tokuhirom/mutsu](https://github.com/tokuhirom/mutsu).

{% include nav.html %}
