function LaTeX(code) {
  return `https://latex.codecogs.com/svg.image?\\large&space;${code}`;
}

function opnLaTeX(code) {
  return `<img src="${LaTeX(code)}" style="height:40px">`;
}

let baseDePreguntas = [
  {
    pregunta: "¿Que nos permite saber la letra y explicacion del Himno Nacional?",
    ayuda: "Tambien nos Permite Conocer Nuestras Raices",
    ayudaImg: "https://img.freepik.com/fotos-premium/mapa-honduras-bandera-honduras-relieve-sombreado-mapa-altura-color-sobre-fondo-blanco-ilustracion-3d_394271-2780.jpg?w=2000",
    imagen: "https://amaga.es/image/cache/catalog/productos/banderas%20y%20mastiles/banderas%20nacionales/honduras-800x800.jpg",
    respuesta: "Conocer la Historia de Nuestra Patria",
    distractores: ["Conocer la Historia Humana", "Conocer la vida", "Conocer la Religion"],
  },
  {
    pregunta: "¿Que Simbolos Nacionales se Exaltan en el Coro del Himno Nacional?",
    imagen: "https://images.prismic.io/nehemek-site/6cf924e2-fe1e-428a-8645-8e94c993d1cf_ProSimThumbnail.jpg?auto=compress,format",
    respuesta: "La Bandera y el Escudo",
    distractores: ["La Orquidia y el Pino", "Los Proceres", "La Moneda y Escudo"],
  },
  {
    pregunta: "¿A que Hace referencia los Primeros 4 Versos del Coro?",
    imagen: "https://edu-honduras.info/Imagenes/Himno-Nacional-De-Honduras.jpg",
    respuesta: "Referencia a la Bandera",
    distractores: ["Referencia al Escudo", "Referencia a Fransisco Morazan", "Referencia al Volcan"],
  },
  {
    pregunta: "¿Que Simbolizan los Colores de Nuestra Bandera?",
    ayuda: "Azul y Paz",
    ayudaImg: "https://www.anahuac.mx/mexico/sites/default/files/styles/webp/public/noticias/Dia-Internacional-de-la-Convivencia-en-Paz.jpg.webp?itok=PxDsD4gl",
    imagen: "https://www.hondurastips.hn/wp-content/uploads/2019/08/la-bandera-honduras-768x448.jpg",
    respuesta: "El azul simboliza el cielo que nos cobre a todos los hondureños y el blanco representa la paz",
    distractores: ["Simboliza Odio, Respeto y Amor", "Representa la Unidad, Humildad y Pureza", "Simboliza la Vida y La Humanidad"],
  },
  {
    pregunta: "¿Que Simbolizan las 5 Estrellas?",
    imagen: "https://i.pinimg.com/originals/44/54/45/445445a95d594f6fc56e495550b7d8ea.jpg",
    respuesta: "Simboliza las 5 Republicas Centroamericanas",
    distractores: ["Simboliza los 2 Mares", "Simboliza Nuestros Puertos", "Simboliza Nuestras Tribus"],
  },
  {
    pregunta: "¿Que Ideal nos Recuerdan las 5 Estrellas?",
    imagen: "https://www.hondurastips.hn/wp-content/uploads/2019/09/Bandera-Honduras2-1.jpg",
    respuesta: "El ideal que tuvo Francisco Morazan que toda Centroamerica formara una sola Patria",
    distractores: ["El ideal de que Francisco morazan dividiera las naciones", "El ideal de la union", "El ideal de no formar una nacion"],
  },
  {
    pregunta: "¿A que simbolo hacen Referencia los otros 4 versos del coro?",
    ayuda: "Es un Simbolo Nacional",
    ayudaImg: "https://www.ecured.cu/images/e/e3/Simbolos_de_Honduras.JPG",
    imagen: "https://www.honduras.com/wp-content/uploads/2020/08/Sin-titulo.png",
    respuesta: "Al Escudo Nacional de Honduras",
    distractores: ["Al Pino Nacional", "A la Bandera Nacional", "A los Proceres Nacionales"],
  },
  {
    pregunta: "¿Que elementos se Destacan en el Escudo Nacional, entre Otros?",
    imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Coat_of_arms_of_Honduras.svg/865px-Coat_of_arms_of_Honduras.svg.png",
    respuesta: "Simboliza un mar, Volcan y el Sol",
    distractores: ["Simboliza el Cielo y La Tierra", "Simboliza Nuestras Montañas", "Simboliza el Agua"],
  },
  {
    pregunta: "¿A que Epoca de Nuestra Historia se Refiere la Primera Estrofa?",
    imagen: "https://qph.cf2.quoracdn.net/main-qimg-e26a0845e5eadf59be84f705d01092ad-lq",
    respuesta: "Se refiere a la Epoca Precolombina",
    distractores: ["Se refiere a la Epoca Colonial", "Se refiere a la Edad Media", "Se refiere a la Edad Moderna"],
  },
  {
    pregunta: "¿Que significa el verso India Virgen y Hermosas Dormias?",
    ayuda: "Virgen no descubierto",
    ayudaImg: "https://uvn-brightspot.s3.amazonaws.com/assets/vixes/imj/l/lugares-virgenes-2.jpg",
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBj-nr9nNb806u9-RtsyeijDAPdk8v9abNXbMJcbRqNE4G1JBVz5oMPSw16hgSAZaz-nY&usqp=CAU",
    respuesta: "Se Refiere a Honduras y al Estado Virgen Porque ningun Hombre avia visitado",
    distractores: ["Al Cielo y Mar", "A nuestras Tribus", "A nuestras Montañas"],
  },
  {
    pregunta: "¿Que nos describen los cuatro versos finales de la Primera Estrofa?",
    imagen: "https://cdn.pixabay.com/photo/2017/02/22/23/55/honduras-2091010_640.jpg",
    respuesta: "Describen la impresion de asombro y Admiracion que Colon experimento al ver tanta belleza natural, actitud que el expreso con un beso",
    distractores: ["Describen el odio que Colon tuvo", "Describen la paz de Honduras", "Describe el amor y paz"],
  },
  {
    pregunta: "¿A que Epoca de Nuestra Historia se Refiere la Segunda Estrofa?",
    imagen: "https://ampuertocortes.hn/wp-content/uploads/2022/09/DESEMBARCO-DE-COLON-696x431-1.jpg",
    respuesta: "A la Epoca del Descubrimiento cuando Cristobal Colon decide emprender su viaje en busca de una ruta mas corta para llegar a las indias Orientales.",
    distractores: ["Se refiere a la Epoca Colonial cuando Cristobal Colon quiere conocer mas España", "Se refiere a la Edad Media", "Se refiere a la Edad Moderna"],
  },
  {
    pregunta: "¿A que pais europeo hace referencia en la Segunda Estrofa?",
    ayuda: "Es el pais de donde Cristobal Colon empezo su viaje",
    ayudaImg: "https://i0.wp.com/www.casayustas.com/blog/wp-content/uploads/2017/12/bandera-espana-e1514374496973.jpg?fit=582%2C436&ssl=1",
    imagen: "https://i.pinimg.com/474x/bd/c3/c7/bdc3c7c9f8887602c655e05e73f1dcc4.jpg",
    respuesta: "Se Refiere a España, de donde zarpo Cristobal Colon.",
    distractores: ["Se referie a Alemania", "Se refiere a Italia de donde zarpo Cristobal Colon", "Se refiere a Francia"],
  },
  {
    pregunta: "¿Que personas apoyaron economicamente a Colon para realizar su viaje?",
    imagen: "https://www.biografiasyvidas.com/biografia/r/fotos/reyes_catolicos.jpg",
    respuesta: "Fernando de Aragon e Isabel de Castilla",
    distractores: ["Isaac Palacios y Fernanda de Reyes ", "David Segundo y Isabel Primera", "Angel reyes y Diana Segunda"],
  },
  {
    pregunta: "¿En que Fecha Colon conoce a Honduras?",
    imagen: "https://www.hondurasensusmanos.com/wp-content/uploads/2018/08/LLEGADADECOLON.jpg",
    respuesta: "En su cuarto y ultimo viaje Colon descubre a Honduras, el 30 de julio de 1502",
    distractores: ["El 1 de septiembre de 1812", "En su segundo viaje Colon descubre a Honduras el 30 de Septiembre de 1915", "El 14 de junio de 1423"],
  },
  {
    pregunta: "¿Donde llego Colon inicialmente y en cuantas naves venia?",
    ayuda: "Colon llego a la Isla Guanaja y el la nombro isla de los pinos",
    ayudaImg: "https://hondurasisgreat.org/wp-content/uploads/2017/04/bo4.jpg",
    imagen: "https://historiando.org/wp-content/uploads/2018/10/La-Ni%C3%B1a-la-Pinta-y-la-Santa-Mar%C3%ADa.jpg",
    respuesta: "Llego a la isla de Guanaja,viniendo en Cuatro naves:La Capitalina, La Gallega, La vizcaina y La Santiago de Palos.",
    distractores: ["Llego a Roatan en dos naves:La Estrella, la Atlantis", "Llego a la isla los hermanos en una nave:La Corazon de Oro", "Llego a Santa Barbara en tres naves:La Galactica, La Discovery, La Valera"],
  },
  {
    pregunta: "¿Cuando tomo posesion Colon del territorio hondureño en nombre de los Reyes Españoles?¿y donde? ",
    imagen: "https://diarioroatan.com/wp-content/uploads/2020/09/Descubrimiento-de-America-los-viajes-de-Cristobal-Colon.jpg",
    respuesta: "El 17 de Agosto de 1502,en el puerto de Trujillo",
    distractores: ["El 1 de septiembre de 1985, en el puerto Castilla", "El 20 de enero del 2000,en Gracias Lempira", "El 31 de julio de 1720,en la isla Guanaja"],
  },
  {
    pregunta: "¿A que dio Origen este Acto Historico?",
    imagen: "https://media.gettyimages.com/id/1191249337/es/vector/honduras-tegucigalpa-san-pedro-sula-choloma-la-ceiba-el-progreso-ciudad-choluteca-comayagua.jpg?s=612x612&w=gi&k=20&c=uJOrktlWYm7x2eRDCUuZF5b1oQIw0frF-PL2_VqpBJ8=",
    respuesta: "Se da origen a una nueva vida para los habitantes de Nuestra Patria",
    distractores: ["Se da origen a la Flora y la Fauna", "Se da origen a los Humanos", "Dio origen a las playas"],
  },
  {
    pregunta: "¿Que Epoca de nuestra Historia nos recuerda la Tercera Estrofa?",
    ayuda: "Tambien es el momento donde se recuerda que vinieron los Conquistadores españoles atraidos por la Ambicion,codicia y curiosidad",
    ayudaImg: "https://cdn0.unprofesor.com/es/posts/2/3/9/conquista_de_america_caracteristicas_principales_3932_300_150.jpg",
    imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Desembarco_de_Col%C3%B3n_de_Di%C3%B3scoro_Puebla.jpg/1200px-Desembarco_de_Col%C3%B3n_de_Di%C3%B3scoro_Puebla.jpg",
    respuesta: "Nos recuerda el momento de la Conquista",
    distractores: ["Nos recuerda el momento de Amor y paz", "Nos recuerda la Humildad de Colon", "Nos recuerda el momento de la Reconciliacion"],
  },
  {
    pregunta: "¿Que heroe hondureño logro reunir un numeroso ejercito y opuso resistencia contra los españoles? ",
    imagen: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Lempira.jpg",
    respuesta: "Cacique Lempira",
    distractores: ["Francisco Morazan", "Jose Cecilio del Valle", "Dionisio de Herrera"],
  },
  {
    pregunta: "¿Bajo que Consignias se alzo en armas Lempira en contra de Los Españoles? ",
    imagen: "https://edu-honduras.info/pictures/lempira.jpg",
    respuesta: "No queremos saber de otro señor, de otras leyes, ni de otras Costumbres",
    distractores: ["No nos Importa saber de otra Religion", "Queremos Libertad", "Necesitamos Justicia"],
  },
  {
    pregunta: "¿Donde establecio sus campamentos Lempira?",
    ayuda: "Los lugares donde se establecio Lempira pertenecian al Municipio de Erandique en el departamento de Lempira",
    ayudaImg: "https://www.diez.hn/binrepository/1200x740/0c0/0d0/none/3014757/UDJL/erandique-2_4406906_20230503164855.jpg",
    imagen: "https://d3j8cjxssn1tlc.cloudfront.net/wp-content/uploads/2017/07/debry2.gif",
    respuesta: "Lempira establecio sus campamentos en Congolon, Coyocutena y Piedra Parada",
    distractores: ["Lempira establecio sus campamentos en La paz", "Lempira establecio sus campamentos en Zacapa y Ceguaca", "Lempira establecio sus campamentos en Gracias a Dios"],
  },
  {
    pregunta: "¿Que estatregias utilizaron los españoles para Conquistarnos? ",
    imagen: "https://static.wixstatic.com/media/3272c5_a557a003e4f94fda8a2c5250b0945ff4~mv2.jpg/v1/fill/w_640,h_362,al_c,lg_1,q_80,enc_auto/3272c5_a557a003e4f94fda8a2c5250b0945ff4~mv2.jpg",
    respuesta: "Se valieron de la Fuerza, La Violencia Militar, y El proceso de Evangelizacion",
    distractores: ["Se valieron del Odio y la Fuerza", "Utilizaron su Prestigio como españoles", "Se valieron de Amor y Pureza"],
  },
  {
    pregunta: "¿Cuanto duro la lucha en Contra de los españoles? ",
    imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/El_dos_de_mayo_de_1808_en_Madrid.jpg/640px-El_dos_de_mayo_de_1808_en_Madrid.jpg",
    respuesta: "Duro 6 meses, fue una lucha Sangrienta y Dificil ",
    distractores: ["Duro 12 meses", "Duro 1 mes", "Duro 12 dias y fue una lucha de amor"],
  },
  {
    pregunta: "¿Como murio Lempira?",
    ayuda: "En la Actualidad existen dos versiones de este suceso",
    ayudaImg: "https://hondurascentroamerica.files.wordpress.com/2016/08/muerte.jpg",
    imagen: "https://www.hondurastips.hn/wp-content/uploads/2018/07/Lempira-1.jpg",
    respuesta: "El Capitan Alonso de caceres mando a un Emisirio de paz a dispararle con el acarbuz hiriendo su frente, Murio en un Enfretamiento siendo Decapitado por Roberto Ruiz",
    distractores: ["Murio en un Enfrentamiento cuerpo a cuerpo por Alonso de Caceres", "Murio en una Guerra", "Murio siendo disparado con armas "],
  },
  {
    pregunta: "¿Que mensaje nos dejo el poeta Augusto C. Coello en una de las estrofas del Himno Nacional? ",
    imagen: "https://www.hondurasmagazineusa.com/wp-content/uploads/2021/07/1Mesa-de-trabajo-3-17-1024x683.jpg",
    respuesta: "Nos invita a todos los Hondureños a mantener latente ese espiritu de libertad del Primer Martir y defensor de nuestra Soberania Nacional",
    distractores: ["Nos deja un Mensaje de Soberania", "Nos deja un mensaje de Amor", "Nos dejo un mesaje lleno de Paz y Libertad"],
  },
  {
    pregunta: "¿A que Epoca de Nuestra Historia se refiere la Cuarta Estrofa del Himno? ",
    imagen: "https://s3.amazonaws.com/s3.timetoast.com/public/uploads/photo/12306611/image/857e418bf203fc302dfda292c9ce6c86",
    respuesta: "Epoca de la Colonizacion ",
    distractores: ["Epoca Pre-Colombina", "Epoca Pre-Colonial", "Epoca Pre-Historica"],
  },
  {
    pregunta: "¿A que se refieren Los Primeros Cuartos Versos de la Cuarta Estrofa?",
    ayuda: "Tambien fue la epoca donde nuestros nativos servian y Obedecian como esclavos ",
    ayudaImg: "https://s3.amazonaws.com/s3.timetoast.com/public/uploads/photo/12306611/image/857e418bf203fc302dfda292c9ce6c86",
    imagen: "https://www.espaciohonduras.net/images/honduras/articulos/Historia_honduras/5/mineria.jpg",
    respuesta: "Se refieren a los tres siglos osea, trescientos años que duro la Dominacion española sobre nuestras tierras",
    distractores: ["A nueva vida para los españoles", "Se refieren al pueblo que esta esclavizado", "A dar una vida llena de paz y Igualdad a nuestra poblacion"],
  },
  {
    pregunta: "¿Cual era el Objetivo de la Revolucion Francesa, y en que Año sucedio? ",
    imagen: "https://upload.wikimedia.org/wikipedia/commons/8/81/La_recuperaci%C3%B3n_de_Bah%C3%ADa%2C_Ma%C3%ADno.jpg",
    respuesta: "Acaecida en el año de 1789, tenia como Objetivo la caida de los Reyes",
    distractores: ["Tenia un Objetivo y era llenar de amor a los habitantes, en el año de 1525", "En el Año de 1970, su objetivo era Independizar el pueblo", "En el Año de 1850,su Objetivo era llenar de Odio"],
  },
  {
    pregunta: "¿Que se explican en los Primeros Cuatro versos de la Quinta Estrofa? ",
    imagen: "https://qph.cf2.quoracdn.net/main-qimg-e26a0845e5eadf59be84f705d01092ad-lq",
    respuesta: "Se Explican los Principales Acontecimientos que estaban sucediendo en Francia con la Revolucion Francesa en 1789",
    distractores: ["Se Explica el apoderio que tenian los Españoles en aquellos tiempos", "Explican el sentimiento de pureza de los Reyes", "Explican lo que estaba sucediendo en Italia"],
  },
  {
    pregunta: "¿Quien fue uno de los Lideres de este Movimiento Revolucionario?",
    ayuda: "Este lider era Abogado, estadista, orador y Politico",
    ayudaImg: "https://www.gascon-nasarre.com/wp-content/uploads/2017/06/Lateral_simbolos_Derecho.jpg",
    imagen: "https://loff.it/wp-content/uploads/2017/10/loffit-georges-jacques-danton-revolucion-corrupcion-y-muerte-05.jpg",
    respuesta: "Jorge Jacabo Danton",
    distractores: ["Alonso de Caceres", "Roberto Ruiz", "Los reyes Isabel y Fernado"],
  },
  {
    pregunta: "¿Que derechos se proclamaron entonces durante este Movimiento? ",
    imagen: "https://diarioroatan.com/wp-content/uploads/2019/09/primer_grito_de_indepedencia-640x430.jpg",
    respuesta: "Libertad, Igualdad y Fraternidad",
    distractores: ["Libertad Religiosa", "Prioridad y Supervivencia", "Desarrollo y Integridad"],
  },
  {
    pregunta: "¿A que se refieren los ultimos Cuatro versos de la Quinta Estrofa? ",
    imagen: "https://3.bp.blogspot.com/-McYEePPa0kU/VbFiI7Bdj8I/AAAAAAAAGG4/yCqrhnJUPOk/w680/francia.png",
    respuesta: "Se refieren al surgimiento en Francia del Racionalismo",
    distractores: ["Se refieren a los problemas de Reino Unido en aquel tiempo", "Se refiere al Pueblo Español", "Se refiere a la Independizacion de Italia"],
  },
  {
    pregunta: "¿A que Epoca de nuestra Historia nos Remonta la Sexta Estrofa?",
    imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Comayagua1856Leslies.jpg/300px-Comayagua1856Leslies.jpg",
    respuesta: "Epoca de Organizacion del Estado Libre",
    distractores: ["Descubrimiento y Conquista", "Epoca Colonial", "Epoca Precolombina"],
  },



];
