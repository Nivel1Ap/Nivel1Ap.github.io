function LaTeX(code) {
  return `https://latex.codecogs.com/svg.image?\\large&space;${code}`;
}

function opnLaTeX(code) {
  return `<img src="${LaTeX(code)}" style="height:40px">`;
}

let baseDePreguntas = [
  {
    pregunta: "¿Que expresa el Himno Nacional?",
    imagen: "https://elaugustinus.files.wordpress.com/2017/09/himno-nacional-de-honduras.jpg",
    respuesta: "Amor, Gratitud, Lealtad y Respeto",
    distractores: ["Cariño, Solidaridad y Lealtad", "Humildad, Huminidad y Honrra", "Paz, Amor"],
  },
  {
    pregunta: "¿Quien es el autor de la letra de nuestro Himno Nacional?",
    imagen: "https://redhonduras.com/wp-content/uploads/biografia-augusto-c-coello.webp",
    respuesta: "Augusto C. Coello",
    distractores: ["Carlos Hartling", "Froylán Turcios", "Juan Ramón Molina"],
  },
  {
    pregunta: "¿Quien es el autor de la musica del Himno Nacional?",
    imagen: "https://img.genial.ly/5f92fa54a4298f0f752e5650/a63a067a-7ddf-4afb-9d56-063ad103e97c.jpeg",
    respuesta: "Carlos Hartling",
    distractores: ["Augusto C. Coello", "Froylán Turcios", "Juan Ramón Molina"],
  },
  {
    pregunta: "¿Quien es el autor del argumento y explicacion del Himno Nacional de Honduras?",
    imagen: "https://static.wixstatic.com/media/8fe60d_80ce86a31a1d4c09dc98f44829cd6fba.jpg/v1/fill/w_279,h_333,al_c,lg_1,q_80,enc_auto/8fe60d_80ce86a31a1d4c09dc98f44829cd6fba.jpg",
    respuesta: "Gualberto Cantarero Palacios",
    distractores: ["Augusto C. Coello", "Froylán Turcios", "Juan Ramón Molina"],
  },
  {
  pregunta: "¿Como esta compuesto el Himno Nacional de Honduras?",
    imagen: "https://s3.amazonaws.com/prod-wp-tunota/wp-content/uploads/2022/08/principal_terrcera-estrofa-del-himno-nacional-de-honduras-explicacion.jpg",
    respuesta: "Por un Coro y 7 estrofas",
    distractores: ["Por un Coro y 5 estrofas  ", "Por un Coro y 3 estrofas", "Por Coro y 9 estrofas"],
  },
  {
    pregunta: "¿Que presidente convoco a un concurso para escribir la letra y musica del Himno Nacional?",
      imagen: "https://www.ecured.cu/images/6/6d/Miguel_Rafael_Davila_%281856-1927%29%2C_presidente_de_Honduras.JPG",
      respuesta: "Miguel R. Davila",
      distractores: ["Alberto Menbreño", "Manuel Bonilla", "Juan Ramón Molina"],
    },
 {
      pregunta: "¿Que presidente declaro oficialmente nuestro Himno Nacional?",
        imagen: "https://upload.wikimedia.org/wikipedia/commons/b/b0/Alberto_de_Jes%C3%BAs_Membre%C3%B1o.JPG",
        respuesta: "Alberto Membreño",
        distractores: ["Miguel R. Davila", "Manuel Bonilla", "Juan Ramón Molina"],
      },
      {
        pregunta: "¿Que presidente faculto al poeta Agusto C. Coello Estevez para que escribiera la letra de nuestro Hinmo Nacional?",
          imagen: "https://upload.wikimedia.org/wikipedia/commons/7/70/Manuel_Bonilla.jpg",
          respuesta: "Manuel Bonilla",
          distractores: ["Miguel R. Davila", "Alberto Menbreño", "Juan Ramón Molina"],
        },
        {
          pregunta: "¿Que numero de decreto le da caracter oficial al Himno Nacional?",
            imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpRPhsc9xHSw7x5hRYBmLqsGw3B_ugSM_U_w&usqp=CAU",
            respuesta: "El decreto No.42 del 13 de noviembre de 1915",
            distractores: ["El decreto No.20 del 9 de noviembre de 1917", "El decreto No.31 del 15 de noviembre de 1915", "El decreto No.42 del 18 de noviembre de 1914"],
          },
          {
            pregunta: "¿Que himnos se cantaban antes de oficializarse el Himno Nacional?",
              imagen: "https://www.hondurastips.hn/wp-content/uploads/2022/09/9500A578-11EF-4DA7-A8D4-525C397C0212.jpeg",
              respuesta: "La Granadera, Himno Nacional, Una Salva Hondureños, Himno Hondureño",
              distractores: ["Himno, Himno Nacional", "Himno Marcial", "Himno Patriotico"],
            },
            {
              pregunta: "¿Donde se canto por primera vez nuestro Himno Nacional?",
                imagen: "https://www.elheraldo.hn/binrepository/1200x803/0c0/0d0/none/45933/YQFL/pais4a-300814_EH742968_MG120293770.jpg",
                respuesta: "Tegucigalpa",
                distractores: ["San Pedro Sula", "Comayagua", "Atlantida"],
              },
              {
                pregunta: "¿Oficialmente donde se canto por primera vez nuestro Himno Nacional?",
                  imagen: "https://i.prcdn.co/img?regionKey=A7KlNEPOv%2FxZVm4oQUNsCw%3D%3D",
                  respuesta: "Escuela Normal de Señoritas de Comayaguela",
                  distractores: ["Escuela Normal Miguel Davila", "Escuela Normal de Tegucigalpa", "Escuela Mixta Manuel Bonilla"],
                },
                {
                  pregunta: "¿En que fechas y actos debemos cantar las gloriosas notas del Himno Nacional?",
                    imagen: "https://media.redhonduras.com/wp-content/uploads/flag-national-honduras-01.webp",
                    respuesta: "Al momento de izar o arriar nuestro Pabellon Nacional",
                    distractores: ["En publicidad", "En lugares publicos", "En cualquier momento"],
                  },
                  {
                    pregunta: "¿Para que debemos cantar nuestro Himno Nacional?",
                      imagen: "https://3.bp.blogspot.com/-XSSB1_aiejE/VkdN4nTmpeI/AAAAAAAACVw/UPkJdUADPIs/s1600/ALUNMAS-canta-el-himno-nacional1.jpg",
                      respuesta: "Para enaltecer, exaltar nuestra querida patria",
                      distractores: ["Para los proceres", "Para nuestro pais", "Para Honrrar"],
                    },
                    {
                      pregunta: "¿Como buenos Hondureños, que actitud debemos tomar al cantarlo?",
                        imagen: "https://d1xxa24wwackpg.cloudfront.net/wp-content/uploads/2017/06/07144656/Magazine-agosto-2010-2.jpg",
                        respuesta: "Con actitud de respeto y posicion firme",
                        distractores: ["Quedandonos sentados", "Corriendo para todos lados", "Platicar mientras lo cantan"],
                      },
                      {
                        pregunta: "¿Con que ritmo debe cantarse nuestro Himno Nacional?",
                          imagen: "https://chalatenango.sv/wp-content/uploads/2017/01/himno-el-salvador.jpg",
                          respuesta: "Con ritmo de marcha",
                          distractores: ["Con ritmo invocativo", "Con ritmo votivo", "Con ritmo filosofico"],
                        },
                        {
                          pregunta: "¿Cuantos versos tiene nuestro Himno Nacional?",
                            imagen: "https://www.clarin.com/img/2018/06/16/H1onYZm-7_1256x620__1.jpg",
                            respuesta: "Tiene 64 versos",
                            distractores: ["Tiene 72 versos", "Tiene 30 versos", "Tiene 45 versos"],
                          },
                          {
                            pregunta: "¿Aque llamamos metrica del poema?",
                              imagen: "https://tiempo.hn/wp-content/uploads/2022/01/1-131.jpg",
                              respuesta: "Al numero de silabas de un verso",
                              distractores: ["Al coro", "A las 7 estrofas", "Al himno"],
                            },
                            {
                              pregunta: "¿Que es acento?",
                                imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Flag_of_Honduras.svg/640px-Flag_of_Honduras.svg.png",
                                respuesta: "Es la mayor fuerza de voz para pronunciar una silaba",
                                distractores: ["Es pronunciar una silaba", "Es pronunciar una silaba con menor fuerza de voz", "Es pronunciar una parte del coro"],
                              },
                              {
                                pregunta: "¿Cauntas silabas metricas tienen los versos de nuestro Himno Nacional?",
                                  imagen: "https://www.xplorhonduras.com/wp-content/uploads/Himno-Naciona-de-Honduras.jpg",
                                  respuesta: "Consta de 10 silabas metricas",
                                  distractores: ["Consta de 5 silabas metricas", "Consta de 25 silabas metricas", "Consta de 45 silabas metricas"],
                                },
                                {
                                  pregunta: "Entonces por tener 10 silabas metricas, ¿Como se les llama?",
                                    imagen: "https://proceso.hn/wp-content/uploads/2015/11/1128c3389663c3022908e1eac07ed106.jpg",
                                    respuesta: "Decasilabos",
                                    distractores: ["Monosilaba", "Bisilaba", "Tetrasilaba"],
                                  },
                                  {
                                    pregunta: "¿En que silabas llevan el acento los versos de nuestro Himno Nacional?",
                                      imagen: "https://pbs.twimg.com/media/EJQaj9iWkAAHXPX.jpg",
                                      respuesta: "En la tercera, sexta y novena silabas",
                                      distractores: ["Primera y quinta silabas", "Tercera, Cuarta y Septima silabas", "Segunda, octava y novena silabas"],
                                    },
                                    {
                                      pregunta: "¿Como se llama el movimiento musical del Coro?",
                                        imagen: "https://i.ytimg.com/vi/SJslDlmNcOg/maxresdefault.jpg",
                                        respuesta: "Se llama Allegro",
                                        distractores: ["Se llama Mozart", "Se llama Handel", "Se llama Coral"],
                                      },
 {
    pregunta: "¿Que sucede si el alumno no cumple con este requisito?",
    imagen: "https://i.ytimg.com/vi/kD-DFLX5JTQ/hqdefault.jpg",
   respuesta: "Pierde derecho a percibir diploma",
    distractores: ["Culmina la secundaria", "Recibe su certificado", "Recibe su diploma"],
  },
  {
    pregunta: "¿Que autoridad da fe del cumplimiento de este requisito?",
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvMm8R4_IwfNCk26MAJ88RpChqvuMFImpWngm9H4SQlYGVOai86ceCucEKyd93jgdxhsY&usqp=CAU",
   respuesta: "El Director del Centro Educativo",
    distractores: ["El Maestro Guia", "El Sub-Director del Centro Educativo", "El Maestro de Español"],
  },
  {
    pregunta: "¿Cual es el diario donde se publico el Himno Nacional?",
    imagen: "https://www.honduras.com/wp-content/uploads/2020/07/himno-2-1.jpg",
   respuesta: "La Gaceta",
    distractores: ["La Prensa", "El Heraldo", "La Tribuna"],
  },
  {
    pregunta: "¿En que fecha fue publicado oficialmente El Himno Nacional?",
    imagen: "https://hondurasisgreat.org/wp-content/uploads/2015/11/campana1.jpg",
   respuesta: "El 15 de Enero de 1916",
    distractores: ["El 10 de Marzo de 1914", "El 23 de Enero de 1915", "El 15 de Septiembre de 1917"],
  },
  {
    pregunta: "¿Que aspectos contiene el Himno Nacional?",
    imagen: "https://www.elheraldo.hn/binrepository/1200x901/0c136/1200d630/none/45933/WEQV/creadoreshimnonacional_EH1490833_MG114294819.jpg",
   respuesta: "Historico, Patriotico, Juridico, Artistico",
    distractores: ["Alegria, Paz, Historico", "Honrradez, Honor, Gratitud", "Juridico y Paz"],
  },
  {
    pregunta: "¿Por que decimos que el Himno Nacional tiene caracter Historico?",
    imagen: "https://sabanagrandefm.files.wordpress.com/2015/04/mapa_honduras_6689.jpg",
   respuesta: "Porque desde la primera hasta la sexta estrofa, nos habla de hechos ocurridos desde la Epoca Precolombina hasta la Epoca Independiente",
    distractores: ["Porque en las estrofas narra la Historia", "Porque en el coro se encuentra la Historia", "Porque cronologicamente en el coro y estrofas habla de toda la Historia"],
  },
  {
    pregunta: "¿Por que decimos que el Himno Nacional tiene caracter Patriotico?",
    imagen: "https://img.freepik.com/vector-premium/dibujos-animados-bandera-honduras-pose-bienvenida_309278-26672.jpg?w=2000",
   respuesta: "Porque resalta los valores civicos de todos los hondureños",
    distractores: ["Porque esta respaldado por el Decreto N34 que ratifica su aprobacion", "Porque representamos como hondureños el Patriotismo Nacional", "Porque la letra es un bello poema epico y la musica es una extraordinaria obra musical"],
  },
  {
    pregunta: "¿Por que decimos que el Himno Nacional tiene caracter Juridico?",
    imagen: "https://images.prismic.io/nehemek-site/6cf924e2-fe1e-428a-8645-8e94c993d1cf_ProSimThumbnail.jpg?auto=compress,format",
   respuesta: "Porque esta respaldado por el Decreto N34 que ratifica su aprobacion",
    distractores: ["Porque resalta los valores civicos de todos los hondureños", "Porque representamos como hondureños el Patriotismo Nacional", "Porque la letra es un bello poema epico y la musica es una extraordinaria obra musical"],
  },
  {
    pregunta: "¿Por que decimos que el Himno Nacional tiene caracter Artistico?",
    imagen: "https://images.prismic.io/nehemek-site/13cd6f7d-6bb3-4ea0-b12b-1ab4efb8a6ab_Sim1.jpg?auto=compress,format",
   respuesta: "Porque la letra es un bello poema epico y la musica es una extraordinaria obra musical",
    distractores: ["Porque resalta los valores civicos de todos los hondureños", "Porque representamos como hondureños el Patriotismo Nacional", "Porque esta respaldado por el Decreto N34 que ratifica su aprobacion"],
  },
  {
    pregunta: "¿Que hechos nos relata cronologicamente el Himno Nacional?",
    imagen: "https://media.istockphoto.com/id/1271255842/es/vector/ni%C3%B1o-sosteniendo-bandera-de-honduras.jpg?s=170667a&w=0&k=20&c=ZWcvMYPBmWLLq1U5Lg5A5kInmGDy4PhWaN7WKVIp5wE=",
   respuesta: "La Historia de Honduras, La Conquista y La Independencia",
    distractores: ["La Historia de Lempira", "La Historia de Patriotismo", "La Conquista"],
  },
  {
    pregunta: "¿Por que solo cantamos el coro y ultima estrofa?",
    imagen: "https://media.istockphoto.com/id/1209032082/es/vector/honduras-bandera-grunge-cepillo-de-fondo-ilustraci%C3%B3n-vectorial.jpg?s=612x612&w=0&k=20&c=P05tQJHyNXACmGN9mqk-UoWAwUXgwAdE6IsZzciZjZo=",
   respuesta: "Por lo extenso de la letra",
    distractores: ["Por su significado", "Por respeto a la letra", "Por la Historia"],
  },
  {
    pregunta: "¿Quien tomo esa disposicion?",
    imagen: "https://www.buscabiografias.com/img/people/Miguel-Paz-Barahona.jpg",
   respuesta: "El Presidente Dr: Miguel paz Barahona y Ministro de Educacion el Dr: Presentacion Centeno",
    distractores: ["El Presidente Alberto Membreño", "El Presidente Manuel Bonilla", "El Presidente Miguel R. Davila"],
  },
  {
    pregunta: "¿Antes de oficializarse nuestro Himno Nacional, que himno se tenia como canto patriotico?",
    imagen: "https://artelista.s3.amazonaws.com/obras/big/6/0/4/1230109.jpg",
   respuesta: "La Granadera",
    distractores: ["Himno Marcial", "Una Salva Hondureños", "Himno Hondureño"],
  },
  
  
                       

  
  
    
  

  











];


