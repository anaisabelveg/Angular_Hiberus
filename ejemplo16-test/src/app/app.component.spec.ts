import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

// Estructura con Jasmine:
//    - describe()   -> agrupar todos los test
//    - beforeEach() -> se ejecutan antes de cada test
//    - it()         -> cada prueba/test
//    - expect()     -> Resultado esperado
//    - Matchers:
//         - toBe()       -> que sea lo esperado
//         - toContain()  -> que contenga lo esperado
//         - toBeDefined() -> se haya definido

describe('ejemplo', () => {
  let app: any = undefined;

  // Se ejecuta solo una vez al inicio
  beforeAll( ()=> {
    console.log("Aprendiendo pruebas con Jasmine");
    const fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
  });

  // Se ejecuta antes de cada prueba
  beforeEach( () => {
    console.log("Ejecutando prueba ......");
  });

  it("Es Cierto", () => {
    expect(true).toBe(true);
  });

  it("Es igual a 5", () => {
      const numero = 5;
      expect(numero).toEqual(5);
  });

  it("Hay 4 nombres en la lista", () => {
     expect(app.nombres.length).toEqual(4);
  });

  it("Esta Pedro en la lista", () => {
    expect(app.nombres).toContain("Pedro");
  });
})

// describe('AppComponent', () => {
//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       declarations: [
//         AppComponent
//       ],
//     }).compileComponents();
//   });

//   it('should create the app', () => {
//     const fixture = TestBed.createComponent(AppComponent);
//     const app = fixture.componentInstance;
//     expect(app).toBeTruthy();
//   });

//   it(`should have as title 'ejemplo16-test'`, () => {
//     const fixture = TestBed.createComponent(AppComponent);
//     const app = fixture.componentInstance;
//     expect(app.title).toEqual('ejemplo16-test');
//   });

//   it('should render title', () => {
//     const fixture = TestBed.createComponent(AppComponent);
//     fixture.detectChanges();
//     const compiled = fixture.nativeElement as HTMLElement;
//     expect(compiled.querySelector('.content span')?.textContent).toContain('ejemplo16-test app is running!');
//   });
// });
