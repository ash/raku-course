---
title: Pri ĉi tiu kurso
---

{% assign course_title = site.data.toc["en"].title %}

[{{course_title}}](/eo/)

# Pri ĉi tiu kurso

Bonvenon al la kurso de la Raku-programlingvo!

Ĉi tiu kurso kovras ĉiujn ĉefajn aspektojn de la lingvo, kiujn vi bezonas uzi en via ĉiutaga praktiko. La kurso konsistas el kvin partoj, kiuj klarigas la teorion kaj ofertas multajn praktikajn taskojn. Estas supozite, ke vi provos solvi la taskojn mem antaŭ ol rigardi la solvon.

Se vi nur komencas lerni Raku, vi estas konsilata trairi ĉiujn partojn laŭ la ordo, kiel ili estas listigitaj en la enhavtabelo. Se vi havas iom da praktiko kaj volas havi specifan trejnadon, vi estas bonvena komenci kun la dezirata sekcio.

## Strukturo

La kurso estas dividita en kvin partojn, ĉiu el kiuj inkluzivas plurajn sekciojn, kiuj siavice inkluzivas kelkajn temojn (aŭ, simple dirite, malsamajn paĝojn kun sia unika URL).

La kurso inkluzivas materialojn de la jenaj kvar tipoj:

* — Teorio, kiu kovras la aktualan temon
* — Kvizoj, kiuj testas vian komprenon de la teorio de la temo kaj/aŭ la sekcio
* — Ekzercoj por la materialo de la tuta sekcio
* — Respondoj al la ekzercoj

Foje, praktikaj taskoj (kaj kvizoj kaj ekzercoj) donas pliajn informojn pri la temo, do por fari la plej bonan uzon de la kurso, estas rekomendite ne preterlasi ilin.

Sub ĉiu paĝo, estas navigada bloko, kiun vi povas uzi por trairi la tutan kurson. Vi ankaŭ ĉiam povas salti al la dezirata sekcio uzante la panerojn menuon ĉe la supro de la paĝo.

Dum la navigado gvidas vin tra la taskoj en specifa ordo, vi povas solvi ilin en pli-malpli hazarda ordo ene de la aktuala sekcio aŭ temo.

## Enhavo

La kurso inkluzivas kvin partojn:

| N | Nomo | Stato
| 1 | [Raku bazaj scioj](/eo/essentials) | Eldonita
| 2 | [Altnivelaj Raku-temoj](/eo/advanced) | En progreso<span id="ProgressBar">...</span>
| 3 | Objekt-orientita programado en Raku | 
| 4 | Regularaj esprimoj kaj gramatikoj | 
| 5 | Funkcia, samtempa, kaj reaktiva programado | 

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

Nuntempe, la unua parto estas tute verkita kaj eldonita. La aliaj partoj estas en progreso. Notu, ke ĉar la kurso ankoraŭ estas en disvolviĝo, la URL-oj de ĝiaj diversaj partoj povus iomete ŝanĝiĝi en la estonteco.

La unua parto, ‘Raku bazaj scioj’, enhavas:

- 91 temojn
- 73 kvizojn
- 65 ekzercojn

Novaj ekzercoj kaj kvizoj povus aperi en la jam eldonitaj temoj, same kiel la teoriaj partoj povus esti iomete modifitaj por atingi la plej bonan fluon de la kurso.

## Antaŭkondiĉoj

Por sekvi la kurson kaj ruli ekzercojn, vi bezonas havi funkciantan kompililon. Estas kelkaj opcioj:

* — Instali la Rakudo-kompililon aŭ la Rakudo Star-pakaĵon aŭ
* — Uzi retajn servojn aŭ
* — Uzi docker-kontenerojn

La diversaj instalaj opcioj estas priskribitaj ĉe la komenco de la unua parto.

## Pri la aŭtoro

La kurso estas verkita de [Andrew Shitov](https://andrewshitov.com), kiu sekvas la disvolviĝon de Raku ekde ĉirkaŭ 2000 (kiam ĝi estis konata kiel Perl 6). Li estas la aŭtoro de kelkaj [libroj pri programado en Raku](https://andrewshitov.com/books). La kursa materialo baziĝas sur ĉiutaga sperto, precipe kontribuante al [La Semajna Defio](https://perlweeklychallenge.org) kaj reviziante la solvojn de aliaj partoprenantoj, same kiel sur la sperto akirita uzante Raku kiel la ĉefan lingvon por la [Covid Observer](https://covid.observer) retejo.

## Kontribuado, uzokondiĉoj, kaj reagoj

La kreado de la kurso estas subtenata de la subvencio de [La Perl Fondaĵo](https://www.perlfoundation.org). Vi povas uzi la kurson por memstudo aŭ kiel aron de pretaj materialoj por instrui aliajn. La komerca uzo en klasoj estas permesita sen permeso. Eldoni la kurson kiel apartan produkton devas esti unue negocita kun la aŭtoro.

La fontdosieroj estas disponeblaj en GitHub: [github.com/ash/raku-course](https://github.com/ash/raku-course). Bonvolu sendi tirpeton por korekti la eblajn erarojn aŭ tajperarojn aŭ krei temon en GitHub se vi volas diskuti pli larĝan temon. Vi ankaŭ povas kontakti la aŭtoron per [retpoŝto](mailto:andy@shitov.ru).

## Kursa navigado

← [Komenco](/eo/) 
&nbsp;&nbsp;|&nbsp;&nbsp;
[Kio estas Raku](/eo/essentials/what-is-raku) →

{% include languages.html %}
{% include translations.html %}