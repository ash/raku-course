---
title: De hoc cursu
---

{% assign course_title = site.data.toc["la"].title %}

[{{course_title}}](/la/)

# De hoc cursu

Gratum ad cursum linguae programmandi Raku!

Hic cursus omnes aspectus principales linguae comprehendit quos in usu cotidiano tibi necessarios sunt. Cursus quinque partes continet quae theoriam explicant et multas exercitationes practicas offerunt. Supponitur te conari solvere problemata ipse antequam solutionem inspicias.

Si Raku discere modo incipis, suadetur ut per omnes partes ordine in indice contentorum enumeratas pergas. Si aliquam praxim habes et specificam exercitationem vis, licet tibi cum desiderata sectione incipere.

## Structura

Cursus in quinque partes divisus est, quarum unaquaeque plures sectiones includit, quae vicissim plures argumenta (vel, simpliciter dicendo, diversas paginas cum suis URL univocis) continent.

Cursus materias quattuor generum includit:

* — Theoriam quae argumentum praesens tractat
* — Quaestiones quae tuam comprehensionem theoriae argumenti et/vel sectionis probant
* — Exercitationes pro materia totius sectionis
* — Responsa ad exercitationes

Interdum, exercitationes practicae (et quaestiones et exercitationes) informationem additicium de re praebent, ita ut maximum ex cursu capias, suadetur ne eas praetermittas.

Sub singulis paginis, est navigatio quae te per totum cursum ducere potest. Etiam semper ad desideratam sectionem per menu breadcrumb in summo paginae salire potes.

Dum navigatio te per problemata in ordine particulari ducit, licet tibi ea solvere in ordine magis minusve casuali intra sectionem vel argumentum praesens.

## Contentum

Cursus quinque partes includit:

| N | Nomen | Status
| 1 | [Raku essentialia](/la/essentials) | Editum
| 2 | [Argumenta Raku provecta](/la/advanced) | In progressu<span id="ProgressBar">...</span>
| 3 | Programmatio objecto-orientata in Raku | 
| 4 | Regexes et grammaticae | 
| 5 | Programmatio functionalis, concurrentis, et reactiva | 

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

Hoc momento, prima pars omnino scripta et edita est. Aliae partes in progressu sunt. Nota quod, cum cursus adhuc in evolutione sit, URL diversarum partium eius in futuro leviter mutari possunt.

Prima pars, 'Raku essentialia', continet:

- 91 argumenta
- 73 quaestiones
- 65 exercitationes

Novas exercitationes et quaestiones in argumentis iam editis apparere possunt, sicut partes theoricae leviter mutari possunt ut optimum cursum fluere faciant.

## Praerequisita

Ut cursum sequi et exercitationes agere possis, opus est compilatore operante. Plures optiones sunt:

* — Compilatorem Rakudo vel Rakudo Star fasciculum installare vel
* — Uti servitiis online vel
* — Uti docker continentibus

Diversae optiones installationis in initio primae partis describuntur.

## De auctore

Cursus scriptus est ab [Andrew Shitov](https://andrewshitov.com), qui evolutionem Raku sequitur ab anno circiter 2000 (cum Perl 6 notus erat). Is est auctor plurium [librorum de programmandi in Raku](https://andrewshitov.com/books). Materia cursus fundatur in experientia cotidiana, praesertim in contribuendo ad [The Weekly Challenge](https://perlweeklychallenge.org) et recensendo solutiones aliorum participantium, sicut etiam in experientia ex usu Raku ut lingua principalis pro [Covid Observer](https://covid.observer) website.

## Contribuens, usus termini, et feedback

Creatio cursus sustentatur per donum [The Perl Foundation](https://www.perlfoundation.org). Cursum uti potes ad auto-studium vel ut materiam paratam ad alios docendos. Usus commercialis in classibus sine permissione permittitur. Editio cursus ut productum separatum primum cum auctore tractanda est.

Fontes files in GitHub praesto sunt: [github.com/ash/raku-course](https://github.com/ash/raku-course). Libenter submitte pull request ad errores vel typos corrigendos vel crea issue in GitHub si vis latius argumentum discutere. Potes etiam auctorem per [e-mail](mailto:andy@shitov.ru) contingere.

## Navigatio cursus

← [Initium](/la/) 
&nbsp;&nbsp;|&nbsp;&nbsp;
[Quid est Raku](/la/essentials/what-is-raku) →

{% include languages.html %}
{% include translations.html %}