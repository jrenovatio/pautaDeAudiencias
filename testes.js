function myFunction2() {
    class Ferias {
      constructor(mediador,junho,julho,agosto,setembro,outubro,novembro,dezembro) {
      this.mediador=mediador;
      this.junho=junho;
      this.julho=julho;
      this.agosto=agosto;
      this.setembro=setembro;
      this.outubro=outubro;
      this.novembro=novembro;
      this.dezembro=dezembro;
      };
    };
    
    var datasAgostoTarde = [7, 8, 9, 10, 14, 15, 16, 17, 18, 21, 22, 25, 28, 29, 30, 31];
    var redesignacao = [9, 17, 31];
    var horario = ['14:00', '15:30', '14:20', '15:45'];
    var mediadores = ['Aline', 'Fábio', 'Melina', 'Mongardi', 'Vinícius', 'Extra 1', 'Extra 2'];
  
  
    const aline = new Ferias('Aline', null, [5,6,7], [21, 22], 8, null, [16,17], null);
    const fabio = new Ferias('Fabio', null, null, null, [4,8], [16,17,18,19,20,21,22,23,24,25,26,27,29,29,30,31], 1, null);
    const mongardi = new Ferias('Mongardi', [12,13,14,15,16,17,18,19,20,21,22,23], null, null, [2,3,4,5,6,7,8,9,10,11], null, null, [12,13,14,15,16,17,18,19]);
    const christiano = new Ferias('Christiano', null, [14,15,16,17,18,19,20,21,22,23,24,25,26,27,28], null, null, null, null, null);
    const silene = new Ferias('Silene', null, [5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21], null, null, null, [6,7,8,9,10,11,12,13,14,15,16,17,18], null);
    const melina = new Ferias('Melina', [7, 12, 13, 14, 15, 16, 19, 20], null, null, [11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26], null, null, [11,12,13,14,15,16,17,18,19]);
    const caelison = new Ferias('Caelison', 1, [10,11,12,13,14,15,16,17,18,19,20,21], null, null, null, null, null);
    const tais = new Ferias('Tais', null, [10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29], null, null, null, null, null);
    const vinicius = new Ferias('Vinicius', null, null, null, null, [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], null, [5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]);
  
    var x = 'Vinicius'
    var y = 9
  
    if (y in eval(x.toLowerCase()).dezembro) {
      pass;
    }else{console.log('No')}
  
    Logger.log(y in eval(x.toLowerCase()).dezembro)
  }