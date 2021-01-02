my %people =
    John => {
        age => 20,
        city => 'Madrid',
    },
    Alla => {
        age => 21,
        city => 'Tokyo',
    };
dd %people;
say %people<John><city>; # Madrid
say %people<Alla><city>; # Tokyo