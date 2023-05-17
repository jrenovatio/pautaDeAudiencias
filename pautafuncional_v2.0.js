function pautaDeAudiencia() {
    // Função para verificar os dias e horas no método every das arrays JS
  function testeDiaDiferente (teste, index, arr){
    return teste != datasAgostoTarde[x];
  };
  function testeDiaIgual(teste, index, arr){
    return teste == datasAgostoTarde[x];
  };

  // Objeto para a criação das férias dos mediadores
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

// Dias de férias/folgas dos mediadores
  const aline = new Ferias('Aline', '', [5,6,7], [21, 22], 8, '', [16,17], '');
  const fabio = new Ferias('Fabio', '', '', '', [4,8], [16,17,18,19,20,21,22,23,24,25,26,27,29,29,30,31], 1, '');
  const mongardi = new Ferias('Mongardi', [12,13,14,15,16,17,18,19,20,21,22,23], '', '', [2,3,4,5,6,7,8,9,10,11], '', '', [12,13,14,15,16,17,18,19]);
  const christiano = new Ferias('Christiano', '', [14,15,16,17,18,19,20,21,22,23,24,25,26,27,28], '', '', '', '', '');
  const silene = new Ferias('Silene', '', [5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21], '', '', '', [6,7,8,9,10,11,12,13,14,15,16,17,18], '');
  const melina = new Ferias('Melina', [7, 12, 13, 14, 15, 16, 19, 20], '', '', [11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26], '', '', [11,12,13,14,15,16,17,18,19]);
  const caelison = new Ferias('Caelison', 1, [10,11,12,13,14,15,16,17,18,19,20,21], '', '', '', '', '');
  const tais = new Ferias('Tais', '', [10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29], '', '', '', '', '');
  const vinicius = new Ferias('Vinicius', '', '', '', '', [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], '', [5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]);

  // Variáveis do cejusc
  // As variáveis com os dias do mês de agosto, redesignaçoes, horário da tarde e mediadores
  var datasAgostoTarde = [7, 8, 9, 10, 14, 15, 16, 17, 18, 21, 22, 25, 28, 29, 30, 31];
  var redesignacao = [10, 17, 31];
  var horario = [14, 15];
  var minutohorario = [0, 30];
  var horarioRedesignacao = 15
  var mediadores = ['Aline', 'Fabio', 'Melina', 'Mongardi', 'Vinicius'];
  var extras = ['Extra 1', 'Extra 2']
  var minutoExtra = [20, 45]
  var titulo = " - TJAM Audiência de Conciliação - Processo N. XXX - "
  var minutoExtra = [20, 45];
  var ano = 2023;
  var mes = 7;


  var sumario = '\
   <p><b>PODER JUDICIÁRIO<br>\
   TRIBUNAL DE JUSTIÇA DO ESTADO DO AMAZONAS<br>\
   Comarca de Manaus</b><br>\
   Centro Judiciário de Solução Consensual de Conflitos das Varas de Família<br></p>\
   <p>Processo nº:<b> XXX</b><br>\
   Requerente: XXX<br>\
   Requerido(a): XXX</p>\
   <p>Prezado(a) Senhor(a),</p>\
   <p>De ordem do Merítissimo Juiz de Direito do Tribunal de Justiça do Amazonas, Gildo Alves de Carvalho Filho, Coordenador do Centro Judiciário de Solução Consensual de Conflitos e Cidadania da Comarca de Manaus - CEJUSC-FAMILIAS - Estado do Amazonas, informo que Vossa Senhoria possui uma <b>AUDIÊNCIA DE CONCILIAÇÃO POR VIDEOCONFERÊNCIA</b>, com duração aproximada de 1(uma) hora.<br>\
   Essa audiência será realizada na plataforma de videoconferência Google Meet.<br></p>\
   <p>O acesso ao Google Meet por meio de computadores dispensa a instalação de qualquer programa, devendo ser utilizado, preferencialmente, o navegador Google Chrome.<br>\
   O acesso por meio de smartphones e tablets pode ser feito com a instalação do aplicativo Google Meet, disponível para o sistema android na Play Store, e para o sistema iOS na App Store.<\p>\
   <p><b>ADVERTÊNCIAS:</b><br>\
   <b>1)</b> Da audiência, quando qualquer parte não comparecer ou, comparecendo, não houver acordo, ocorrerá o prazo de 15 dias úteis para o(a) requerido(a) oferecer, por petição, contestação, sob pena de revelia;<br>\
   <b>2)</b> O não comparecimento injustificado de qualquer parte à audiência é considerado ato atentatório à dignidade da justiça, sancionado com multa de até 2% (dois por cento) da vantagem econômica pretendida ou do valor da causa, revertida em favor da União ou do Estado.</p>\
   <p><b>INFORMAÇÕES COMPLEMENTARES:</b><br>\
   <b>1)</b> Assegura-se aos interessados o direito de acessar o processo digital através da senha no site do TJAM ( www.tjam.jus.br - Consulta processual - Processos 1º Grau – Capital). Devendo para tanto enviar foto do documento de identificação (frente e verso) ao lado do rosto, e número do processo ao email cejusc.familia@tjam.jus.br<br>\
   <b>2)</b> Aos interessados que não dispõem de recursos para constituir advogado e que desejam assistência jurídica pela Defensoria Pública, segue telefone para contato prévio com a instituição através do aplicativo Telegram (92) 98413-4091.<br>\
   <b>3)</b> Eventuais dúvidas de acesso poderão ser enviadas para o whatsapp (92) 3303-5028. (Segunda a Sexta-feira de 8h às 14h).<br>\
   <b>4)</b> Atendimento pelo balcão virtual pelo link: meet.google.com/pxu-nsyi-wqs (segunda a sexta-feira de 08 às 14 horas)<\p>\
   <p>Atenciosamente,<br>\
   Raimundo Ilmar Lima Gadelha Junior<br>\
   Diretor de Secretaria do CEJUSC-FAMILIA, em substituição<br>\
   Fórum Cível Des. Euza Maria Naice de Vasconcelos, Rua Valério Botelho de Andrade, S/N, 1º andar - São Francisco - Manaus - AM - CEP:69.079-260<br>\
   Telefone: (92) 3303-5028<br>\
   Email: cejusc.familia@tjam.jus.br</p>\
   ';


  // Criando o calendario
  const options = {
    description: sumario,
    guests: 'raimundo.gadelha@tjam.jus.br',
    sendInvites: true
  }
  // Teste para gerar a pauta
  var dados = [];

  //Variável que de fato cria o calendário
  const calendario = CalendarApp.getCalendarById("c_77a2f281531b1f5e8ee14b04507d49dd8104eb1cee5de8af5ac0338fb4798b6e@group.calendar.google.com");

  for (var i = 0; i < mediadores.length; i++){
    var folga = Object.values(eval(mediadores[i].toLocaleLowerCase()).agosto);
    // Procurar cada dia:
    for(var x = 0; x<datasAgostoTarde.length;x++){
      if (folga.every(testeDiaDiferente)){
        // Procurar cada hora:
        for(var y = 0; y < horario.length;y++){
          if(redesignacao.every(testeDiaDiferente)){
            if(horario[y] == 14){
              var contar = dados.push((datasAgostoTarde[x] + ' ' + horario[y] + ' ' + mediadores[i]).toString());
              Logger.log(datasAgostoTarde[x] + ' ' + horario[y] + ' ' + mediadores[i]);
              var event = calendario.createEvent(titulo +mediadores[i],
              horaInicio = new Date(ano, mes, datasAgostoTarde[x], horario[y], minutohorario[0]),
              horaFinal = new Date (horaInicio.getTime() + 1000 * 60 * 60),
              options);
              event.setGuestsCanModify(false);
              event.setGuestsCanInviteOthers(false);
              event.setColor("10");
              }
            else{
              var contar = dados.push((datasAgostoTarde[x] + ' ' + horario[y] + ' ' + mediadores[i]).toString());
              Logger.log(datasAgostoTarde[x] + ' ' + horario[y] + ' ' + mediadores[i]);
              var event = calendario.createEvent(titulo +mediadores[i],
              horaInicio = new Date(ano, mes, datasAgostoTarde[x], horario[y], minutohorario[1]),
              horaFinal = new Date (horaInicio.getTime() + 1000 * 60 * 60),
              options);
              event.setGuestsCanModify(false);
              event.setGuestsCanInviteOthers(false);
              event.setColor("10");
            };
          }
          else{
            if(horario[y] == 15){
              var event = calendario.createEvent('Redesignação'+titulo +mediadores[i],
              horaInicio = new Date(ano, mes, datasAgostoTarde[x], horario[y], minutohorario[1]),
              horaFinal = new Date (horaInicio.getTime() + 1000 * 60 * 60),
              options);
              event.setGuestsCanModify(false);
              event.setGuestsCanInviteOthers(false);
              event.setColor("5");
            }
            else{
              var event = calendario.createEvent(titulo +mediadores[i],
              horaInicio = new Date(ano, mes, datasAgostoTarde[x], horario[y], minutohorario[0]),
              horaFinal = new Date (horaInicio.getTime() + 1000 * 60 * 60),
              options);
              event.setGuestsCanModify(false);
              event.setGuestsCanInviteOthers(false);
              event.setColor("10");
            };
          };
        };
      };
    };
  };

  for (var i = 0; i < extras.length; i++){
    // Procurar cada dia:
    for(var x = 0; x<datasAgostoTarde.length;x++){
      // Procurar cada hora:
      for(var y = 0; y < horario.length;y++){
        if(redesignacao.every(testeDiaDiferente)){
          if(horario[y] == 14){
            var contar = dados.push((datasAgostoTarde[x] + ' ' + horario[y] + ' ' + extras[i]).toString());
            Logger.log(datasAgostoTarde[x] + ' ' + horario[y] + ' ' + extras[i]);
            var event = calendario.createEvent(titulo +extras[i],
            horaInicio = new Date(ano, mes, datasAgostoTarde[x], horario[y], minutoExtra[0]),
            horaFinal = new Date (horaInicio.getTime() + 1000 * 60 * 60),
            options);
            event.setGuestsCanModify(false);
            event.setGuestsCanInviteOthers(false);
            event.setColor("10");
            }
          else{
              var contar = dados.push((datasAgostoTarde[x] + ' ' + horario[y] + ' ' + extras[i]).toString());
              Logger.log(datasAgostoTarde[x] + ' ' + horario[y] + ' ' + extras[i]);
              var event = calendario.createEvent(titulo +extras[i],
              horaInicio = new Date(ano, mes, datasAgostoTarde[x], horario[y], minutoExtra[1]),
              horaFinal = new Date (horaInicio.getTime() + 1000 * 60 * 60),
              options);
              event.setGuestsCanModify(false);
              event.setGuestsCanInviteOthers(false);
              event.setColor("10");
          };
        }
        else{
          if(horario[y] == 15){
            var event = calendario.createEvent('Redesignação'+titulo +extras[i],
            horaInicio = new Date(ano, mes, datasAgostoTarde[x], horario[y], minutoExtra[1]),
            horaFinal = new Date (horaInicio.getTime() + 1000 * 60 * 60),
            options);
            event.setGuestsCanModify(false);
            event.setGuestsCanInviteOthers(false);
            event.setColor("5");
          }
          else{
            var event = calendario.createEvent(titulo +extras[i],
            horaInicio = new Date(ano, mes, datasAgostoTarde[x], horario[y], minutoExtra[0]),
            horaFinal = new Date (horaInicio.getTime() + 1000 * 60 * 60),
            options);
            event.setGuestsCanModify(false);
            event.setGuestsCanInviteOthers(false);
            event.setColor("10");
          };
        };
      };
    };
  };
};