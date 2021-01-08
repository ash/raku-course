---
title: 'Solution: Travel distance'
---

{% include menu.html %}

The hash of hashes you find in the file [distances.raku](https://github.com/ash/raku-course/blob/master/essentials/associatives/exercises/travel-distance/distances.raku) is a bit redundant but very handy data structure that you can use to get the distance between any pair of cities.

The rest of the program is a couple of nested loops to scan all the segments of the itinerary and to add up to the totals.

## Code

Here is the solution where the big data set is shown only partially.

```raku
my %distance = 
    Amsterdam => {
        Athens => 3082,
        Berlin => 648,
        # . . .
    },
    # . . .
    Zurich => {
        Amsterdam => 861,
        Athens => 2449,
        # . . .
    };

my @itinerary = < Berlin Prague Vienna Zurich Paris >;

my $total = 0;
for 0 .. @itinerary.elems - 2 -> $index {
    my $from = @itinerary[$index];
    my $to = @itinerary[$index + 1];

    my $distance = %distance{$from}{$to};
    say "$from — $to: $distance km";
    $total += $distance;
}

say "Total trip: $total km";
```

🦋 Find the program with the whole data structure in the file [travel-distance.raku](https://github.com/ash/raku-course/blob/master/exercises/associatives/travel-distance.raku).

## Output

For the given itinerary, the output of the program is shown below. Try out other paths through the cities that we have in the `%distance` hash.

```console
$ raku exercises/associatives/travel-distance.raku
Berlin — Prague: 354 km
Prague — Vienna: 312 km
Vienna — Zurich: 784 km
Zurich — Paris: 557 km
Total trip: 2007 km
```

{% include nav.html %}
