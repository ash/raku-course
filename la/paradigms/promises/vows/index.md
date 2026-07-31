---
title: Vota (Vow) 🆕
translations_gpt:
---

{% include menu.html %}

Cum `$p.keep(...)` ipse vocas, quisquis `$p` tenet illud componere posset.
Interdum contrarium vis: codex qui effectum *producit* solus componere
promissum debet, dum ceteri omnes illud tantum exspectare possunt.
Haec separatio **votum** est.

`Promise.new` promissum tibi dat; `.vow` in illo vocare `Vow` reddit — solum
ius illud promissum servandi vel frangendi. Ex illo momento promissum solum legendum
esse debet: per votum componitur. Forma usitata est productor qui
votum privatum servat et solum promissum reddit:

```raku
sub after($seconds) {
    my $p = Promise.new;
    my $v = $p.vow;                       # cape ius componendi
    start {
        sleep $seconds;
        $v.keep("done after $seconds s"); # compone illud per votum
    }
    return $p;                            # vocantes solam partem legendam accipiunt
}

my $job = after(0.2);
say $job.status;   # Planned
say await $job;    # done after 0.2 s
```

Votum capere promissum vere solum legendum facit: ex illo momento `$p.keep` et
`$p.break` recusantur, quia votum nunc solum ius illud componendi possidet.

```raku
my $p = Promise.new;
my $v = $p.vow;

$p.keep(1); # moritur: Access denied to keep/break this Promise; already vowed
```

Itaque vocans promissum `await` potest, `.then` in illud concatenare, vel `.status`
eius inspicere, sed illud componere non potest — solus votum tenens potest. Hoc est quomodo bibliothecae
APIs revocationibus et eventibus fundatas in promissa ordinaria vertunt: promissum crea,
votum eius tene, idque intus e revocatione imple cum eventus tandem advenit.

Hoc est etiam exacte id quod `start` post scaenam pro te agit — promissum
facit, votum sibi servat, et promissum valore bloci componit (vel
illud frangit si blocus moritur). Promissum votumque eius manu facere simpliciter sinit te
idem agere cum effectus ex uno bloco codicis non venit.

{% include nav.html %}
