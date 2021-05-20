import hotdog from './../assets/img/product/hotdog.svg';
import burger from './../assets/img/product/burger.svg';
import bacon from './../assets/img/product/bacon.svg';
import coke from './../assets/img/product/coke.svg';
import cokes from './../assets/img/product/cokes.svg';
import kebab from './../assets/img/product/kebab.svg';
import limon from './../assets/img/product/limon.svg';
import orange from './../assets/img/product/orange.svg';
import partpizza from './../assets/img/product/partpizza.svg';
import pizza from './../assets/img/product/pizza.svg';
import mussarela from './../assets/img/product/mussarela.svg';
import salsicha from './../assets/img/product/salsicha.svg';
import shake from './../assets/img/product/shake.svg';
import soda from './../assets/img/product/soda.svg';
import sodaorange from './../assets/img/product/sodaorange.svg';
import limonl from './../assets/img/product/limonl.svg';
import softdrinks from './../assets/img/product/softdrinks.svg';
import guaral from './../assets/img/product/guaral.svg';
import guara from './../assets/img/product/guara.svg';
import arroz from './../assets/img/product/arroz.svg';
import espetinho from './../assets/img/product/espetinho.svg';
import feijaoTropeiro from './../assets/img/product/feijaoTropeiro.svg';
import jantinha from './../assets/img/product/jantinha.svg';
import mandioca from './../assets/img/product/mandioca.svg';

const arIcon: any= {
    guara,
    guaral,
    limonl,
    hotdog,
    burger,
    bacon,
    coke,
    cokes,
    kebab,
    limon,
    orange,
    partpizza,
    pizza,
    mussarela,
    salsicha,
    shake,
    soda,
    sodaorange,
    softdrinks,
    arroz,
    espetinho,
    feijaoTropeiro,
    jantinha,
    mandioca,
}

export function ImagemProduct(icon: any) {
    if (arIcon[icon] !== undefined) {
        return arIcon[icon];
    }

    return hotdog;
}