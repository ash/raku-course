---
title: About this course
---

{% assign course_title = site.data.toc["it"].title %}

[{{course_title}}](/it/)

# Informazioni su questo corso

Benvenuto al corso sul linguaggio di programmazione Raku!

Questo corso copre tutti gli aspetti principali del linguaggio che devi utilizzare nella tua pratica quotidiana. Il corso è composto da cinque parti che spiegano la teoria e offrono molti compiti pratici. Si presume che tu provi a risolvere i compiti da solo prima di guardare la soluzione.

Se stai appena iniziando a imparare Raku, ti consigliamo di seguire tutte le parti nell'ordine in cui sono elencate nella tabella dei contenuti. Se hai già un po' di pratica e desideri un addestramento specifico, sei libero di iniziare con la sezione desiderata.

## Struttura

Il corso è diviso in cinque parti, ciascuna delle quali include diverse sezioni, che a loro volta includono un certo numero di argomenti (o, semplicemente, pagine diverse con il loro URL unico).

Il corso include materiali dei seguenti quattro tipi:

* — Teoria che copre l'argomento attuale
* — Quiz che testano la tua comprensione della teoria dell'argomento e/o della sezione
* — Esercizi per il materiale dell'intera sezione
* — Risposte agli esercizi

A volte, i compiti pratici (sia quiz che esercizi) forniscono informazioni aggiuntive sull'argomento, quindi per ottenere il massimo dal corso, si consiglia di non saltarli.

Sotto ogni pagina, c'è un blocco di navigazione che puoi utilizzare per attraversare l'intero corso. Puoi anche sempre saltare alla sezione desiderata utilizzando il menu dei breadcrumb in cima alla pagina.

Mentre la navigazione ti guida attraverso i compiti in un ordine particolare, puoi risolverli in ordine più o meno casuale all'interno della sezione o dell'argomento attuale.

## Contenuti

Il corso include cinque parti:

| N | Nome | Stato
| 1 | [Fondamenti di Raku](/it/essentials) | Pubblicato
| 2 | [Argomenti avanzati di Raku](/it/advanced) | In corso<span id="ProgressBar">...</span>
| 3 | Programmazione orientata agli oggetti in Raku | 
| 4 | Regex e grammatiche | 
| 5 | Programmazione funzionale, concorrente e reattiva | 

<script>
    let ProgressBar = document.getElementById('ProgressBar');
    let current_progress = 0;
    setInterval(function() {
        current_progress++;
        current_progress %= 6;

        let bar = '';
        for (let c = 0; c < current_progress; c++) {
            bar += ',';
        }
        bar += '...';
        for (let c = current_progress; c < 6; c++) {
            bar += ',';
        }
        
        bar = bar.substr(3, 3);
        bar = bar.replace(/,/g, '<span style="color: lightgray">.</span>');
        ProgressBar.innerHTML = bar;
    }, 200);
</script>

Al momento, la prima parte è completamente scritta e pubblicata. Le altre parti sono in corso. Nota che poiché il corso è ancora in sviluppo, gli URL delle sue diverse parti potrebbero cambiare leggermente in futuro.

La prima parte, ‘Fondamenti di Raku’, contiene:

- 91 argomenti
- 73 quiz
- 65 esercizi

Nuovi esercizi e quiz possono apparire negli argomenti già pubblicati, così come le parti teoriche possono essere leggermente modificate per ottenere il miglior flusso del corso.

## Prerequisiti

Per seguire il corso ed eseguire gli esercizi, è necessario avere un compilatore funzionante. Ci sono diverse opzioni:

* — Installare il compilatore Rakudo o il pacchetto Rakudo Star o
* — Utilizzare servizi online o
* — Utilizzare container docker

Le diverse opzioni di installazione sono descritte all'inizio della prima parte.

## Informazioni sull'autore

Il corso è scritto da [Andrew Shitov](https://andrewshitov.com), che segue lo sviluppo di Raku dal 2000 circa (quando era conosciuto come Perl 6). È autore di numerosi [libri sulla programmazione in Raku](https://andrewshitov.com/books). Il materiale del corso si basa sull'esperienza quotidiana, in particolare sul contributo a [The Weekly Challenge](https://perlweeklychallenge.org) e sulla revisione delle soluzioni di altri partecipanti, nonché sull'esperienza ottenuta utilizzando Raku come linguaggio principale per il sito web [Covid Observer](https://covid.observer).

## Contributi, termini di utilizzo e feedback

La creazione del corso è supportata dal finanziamento di [The Perl Foundation](https://www.perlfoundation.org). Puoi utilizzare il corso per l'autoapprendimento o come insieme di materiali pronti per insegnare ad altri. L'uso commerciale nelle classi è consentito senza permesso. Il rilascio del corso come prodotto separato deve essere prima negoziato con l'autore.

I file sorgente sono disponibili su GitHub: [github.com/ash/raku-course](https://github.com/ash/raku-course). Sentiti libero di inviare una pull request per correggere eventuali errori o refusi o creare un problema su GitHub se desideri discutere un argomento più ampio. Puoi anche contattare l'autore via [e-mail](mailto:andy@shitov.ru).

## Navigazione del corso

← [Inizio](/it/) 
&nbsp;&nbsp;|&nbsp;&nbsp;
[Cos'è Raku](/it/essentials/what-is-raku) →

{% include languages.html %}
{% include translations.html %}
