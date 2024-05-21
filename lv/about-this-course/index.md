---
title: Par šo kursu
---

{% assign course_title = site.data.toc["lv"].title %}

[{{course_title}}](/lv/)

# Par šo kursu

Laipni lūdzam Raku programmēšanas valodas kursā!

Šis kurss aptver visus galvenos valodas aspektus, kas jums nepieciešami ikdienas praksē. Kurss sastāv no piecām daļām, kas izskaidro teoriju un piedāvā daudz praktisku uzdevumu. Tiek pieņemts, ka jūs mēģināt atrisināt uzdevumus paši, pirms skatāties risinājumu.

Ja jūs tikai sākat mācīties Raku, ieteicams iziet visas daļas tādā secībā, kādā tās ir uzskaitītas satura rādītājā. Ja jums jau ir kāda pieredze un vēlaties veikt specifisku apmācību, jūs varat sākt ar vēlamo sadaļu.

## Struktūra

Kurss ir sadalīts piecās daļās, katra no tām ietver vairākas sadaļas, kuras savukārt ietver vairākas tēmas (vai, vienkārši sakot, dažādas lapas ar unikālu URL).

Kurss ietver šādus materiālu veidus:

* — Teorija, kas aptver pašreizējo tēmu
* — Viktorīnas, kas pārbauda jūsu izpratni par tēmas un/vai sadaļas teoriju
* — Uzdevumi par visas sadaļas materiālu
* — Uzdevumu atbildes

Dažreiz praktiskie uzdevumi (gan viktorīnas, gan uzdevumi) sniedz papildu informāciju par tēmu, tāpēc, lai maksimāli izmantotu kursu, ieteicams tos nepalaist garām.

Zem katras lapas ir navigācijas bloks, kuru varat izmantot, lai pārvietotos pa visu kursu. Jūs vienmēr varat pāriet uz vēlamo sadaļu, izmantojot maizes drupatas izvēlni lapas augšpusē.

Lai gan navigācija ved jūs cauri uzdevumiem noteiktā secībā, jūs varat tos risināt vairāk vai mazāk nejaušā secībā pašreizējā sadaļā vai tēmā.

## Saturs

Kurss ietver piecas daļas:

| N | Nosaukums | Statuss
| 1 | [Raku pamati](/lv/essentials) | Publicēts
| 2 | [Papildu Raku tēmas](/lv/advanced) | Izstrādē<span id="ProgressBar">...</span>
| 3 | Objektorientēta programmēšana Raku | 
| 4 | Regulāras izteiksmes un gramatikas | 
| 5 | Funkcionāla, vienlaicīga un reaktīva programmēšana | 

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

Pašlaik pirmā daļa ir pilnībā uzrakstīta un publicēta. Pārējās daļas ir izstrādes procesā. Ņemiet vērā, ka, tā kā kurss joprojām tiek izstrādāts, tā dažādu daļu URL nākotnē var nedaudz mainīties.

Pirmā daļa, ‘Raku pamati’, satur:

- 91 tēmu
- 73 viktorīnas
- 65 uzdevumus

Jauni uzdevumi un viktorīnas var parādīties jau publicētajās tēmās, kā arī teorētiskās daļas var nedaudz mainīties, lai nodrošinātu labāko kursa plūsmu.

## Priekšnoteikumi

Lai sekotu kursam un veiktu uzdevumus, jums ir nepieciešams strādājošs kompilators. Ir vairāki varianti:

* — Instalēt Rakudo kompilatoru vai Rakudo Star paketi vai
* — Izmantot tiešsaistes pakalpojumus vai
* — Izmantot Docker konteinerus

Dažādas instalēšanas iespējas ir aprakstītas pirmās daļas sākumā.

## Par autoru

Kursu ir uzrakstījis [Andrew Shitov](https://andrewshitov.com), kurš seko Raku attīstībai kopš aptuveni 2000. gada (kad tas bija pazīstams kā Perl 6). Viņš ir vairāku [grāmatu par programmēšanu Raku autors](https://andrewshitov.com/books). Kursa materiāls ir balstīts uz ikdienas pieredzi, īpaši piedaloties [The Weekly Challenge](https://perlweeklychallenge.org) un pārskatot citu dalībnieku risinājumus, kā arī izmantojot Raku kā galveno valodu [Covid Observer](https://covid.observer) vietnei.

## Ieguldījumi, lietošanas noteikumi un atsauksmes

Kursa izveidi atbalsta [The Perl Foundation](https://www.perlfoundation.org) grants. Jūs varat izmantot kursu pašmācībai vai kā gatavu materiālu kopumu citu mācīšanai. Komerciāla izmantošana klasēs ir atļauta bez atļaujas. Kursa izdošana kā atsevišķs produkts vispirms ir jāapspriež ar autoru.

Avota faili ir pieejami GitHub: [github.com/ash/raku-course](https://github.com/ash/raku-course). Jūtieties brīvi iesniegt pull request, lai labotu iespējamos kļūdas vai drukas kļūdas, vai izveidot problēmu GitHub, ja vēlaties apspriest plašāku tēmu. Jūs varat arī sazināties ar autoru pa [e-pastu](mailto:andy@shitov.ru).

## Kursa navigācija

← [Sākt](/lv/) 
&nbsp;&nbsp;|&nbsp;&nbsp;
[Kas ir Raku](/lv/essentials/what-is-raku) →

{% include languages.html %}
{% include translations.html %}
