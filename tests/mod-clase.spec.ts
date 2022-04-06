import 'mocha';
import {expect} from 'chai';
import {Observable, Observer} from '../src/observable/observable';
import {Revista} from '../src/revista/revista';
import {Suscriptor} from '../src/suscriptor/suscriptor';


describe('Mod Clase tests', () => {
    const revistaABC = new Revista('ABC');
    const suscriptor1 = new Suscriptor();

    describe('Revista class tests', () => {
        it('getName method', () => {
            expect(revistaABC.getName()).to.be.eql('ABC');
        });
        it('suscribe method', () => {
            expect(revistaABC.subscribe(suscriptor1)).to.be.eql('Suscriptor suscrito correctamente a ABC');
        });
        it('suscribe method', () => {
            expect(revistaABC.subscribe(suscriptor1)).to.be.eql('El suscriptor ya está suscrito');
        });
        it('unsubscribe method', () => {
            expect(revistaABC.unsubscribe(suscriptor1)).to.be.eql('Desuscribiendo suscriptor de ABC');
        });
        it('unsubscribe method', () => {
            expect(revistaABC.unsubscribe(suscriptor1)).to.be.eql('El suscriptor no se ha suscrito');
        });
        it('notify and nuevoNumero method', () => {
            expect(revistaABC.notify()).to.be.equal('Observable: Notificando suscriptores');
        });
    });
});