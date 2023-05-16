function pautaDeAudiencia() {
  // Variáveis do cejusc
  var titulo = "TJAM Audiência de Conciliação - Processo N. XXX - "
  var mediadores = ['Mariana', 'Beatriz', 'Kailane', 'Brena', 'Dharla', 'Andressa', 'Beatriz', 'Taís',  'Mongardi', 'Aline', 'Melina', 'Caelison', 'Silene']; 
  var mutirao = [23, 24, 29, 30, 31];
  var horas = [14, 15];
  var minutos = [0, 30];
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

  //Variável que de fato cria o calendário
  const calendario = CalendarApp.getCalendarById("c_53e4b848feb4800a1a36a1accc002a0cd4daa1d04a37a0e01adc3b567ad8054a@group.calendar.google.com");
  for (let i=0; i<mediadores.length;i++){
    for(let x=0;x<mutirao.length;x++){
      for(let y=0;y<horas.length;y++){
        if (horas[y] == 14){
          var event = calendario.createEvent(titulo +mediadores[i],
          horaInicio = new Date(ano, mes, mutirao[x], horas[y], minutos[0]),
          horaFinal = new Date (horaInicio.getTime() + 1000 * 60 * 60),
          options);
          event.setGuestsCanModify(false);
          event.setGuestsCanInviteOthers(false);
          event.setColor("10");
        }
        else{
          var event = calendario.createEvent(titulo +mediadores[i],
          horaInicio = new Date(ano, mes, mutirao[x], horas[y], minutos[1]),
          horaFinal = new Date (horaInicio.getTime() + 1000 * 60 * 60),
          options);
          event.setGuestsCanModify(false);
          event.setGuestsCanInviteOthers(false);
          event.setColor("10");
        };
      }
    }
  }
}