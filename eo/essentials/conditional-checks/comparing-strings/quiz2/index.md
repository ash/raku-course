---
title: Quiz 2 — la kondiĉo en if
---

{% include menu.html %}

Korektu la programon kaj respondu la demandon.

{:.quiz-code .fill}
. | my $password = prompt 'Enigu vian pasvorton: ';
. | 
eq = | if $password ␣␣ '*&(#&$#Y' {
. | &nbsp;&nbsp;&nbsp;&nbsp;say 'Ĝusta';
. | }
. | else {
. | &nbsp;&nbsp;&nbsp;&nbsp;say 'Malĝusta';
. | }


Kun la `=` en la testo, kion faras ĉi tiu programo?

{:.quiz-select}
Ĉiam presas 'Ĝusta' | Via respondo:&nbsp; (: Ĉiam presas 'Ĝusta', Ĉiam presas 'Malĝusta', Presas 'Ĝusta' por ĝustaj pasvortoj kaj 'Malĝusta' por malĝustaj, Presas 'Malĝusta' por ĝustaj pasvortoj kaj 'Ĝusta' por malĝustaj :)

<div class="extended-explanation">La programo ĉiam presas 'Ĝusta' ĉar <code>$password = '*&(#&$#Y'</code> estas asigno kiu agordas la novan valoron de la variablo <code>$password</code>. Ĉar la valoro ne estas nulo nek malplena ŝnuro, ĝi estas konsiderata <code>Vera</code>. La pasvorto, kiun la uzanto enigas, neniam estas kontrolita en ĉi tiu kazo.<br/><br/>Se vi tajpas <code>==</code>, tiam la programo rompiĝos ĉar ĝi provas konverti la ŝnurojn (la uzanta pasvorto kaj la ĝusta pasvorto) al nombroj kaj malsukcesas.</div>

{% include quiz.html %}

{% include nav.html %}