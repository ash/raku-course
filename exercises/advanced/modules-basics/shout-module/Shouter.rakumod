unit module Shouter;

sub shout($s) is export {
    $s.uc
}
