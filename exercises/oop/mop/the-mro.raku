class A {
}

class B is A {
}

class C is B {
}

say C.^mro.map(*.^name);
