unit module Temperature;

sub c-to-f($c) is export {
    $c * 9/5 + 32
}
