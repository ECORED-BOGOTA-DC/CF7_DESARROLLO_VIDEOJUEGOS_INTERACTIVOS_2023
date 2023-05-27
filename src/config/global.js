export default {
  global: {
    componenteFormativo: 'Pruebas de funcionamiento y ajuste de mecánicas',
    descripcionCurso:
      'Describe la importancia de la realización de pruebas de usabilidad para determinar la facilidad de uso de los videojuegos, utilizando los métodos, técnicas e instrumentos adecuados de acuerdo con el aspecto a probar.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Metodología RITE',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Herramienta de testeo en Unity',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Herramienta de testeo incorporada a Unity',
            hash: 't_1_3',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Modelos de iteración',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Proceso Unificado Racional - PUR',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Programación extrema - XP',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Scrum',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Modelos de prueba de usabilidad',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Modelo de inspección',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Modelo de indagación',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Modelo de test',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Ejemplo de aplicación',
            hash: 't_3_4',
          },
        ],
      },
    ],
    subMenu: [
      /*{
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },*/
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: '1. Metodología RITE',
      referencia:
        'Enciendelaluz Agile E Innovación. (2018). Iterativo e incremental. [Video]. YouTube',
      tipo: 'Video',
      link: 'https://youtu.be/_qUlL01th2s',
    },
    {
      tema: '2. Metodología RITE',
      referencia: 'Unity3dtutorial. (2015). <em>Unity Test Tools</em>.',
      tipo: 'Artículo',
      link:
        'https://unity3dtutorial.wordpress.com/2015/09/28/unity-test-tools/',
    },
    {
      tema: '3. Modelos de iteración',
      referencia:
        'Pérez, O. A. (2011). <em>Cuatro enfoques metodológicos para el desarrollo de Software</em> RUP- MSF-XP-SCRUM.',
      tipo: 'Artículo',
      link:
        'https://revistas.uniminuto.edu/index.php/Inventum/article/view/9/9',
    },
    {
      tema: '4. Modelos de iteración',
      referencia:
        'Proyectos ágiles.org. (s.f). <em>Desarrollo iterativo e incremental</em>.',
      tipo: 'Artículo',
      link: 'https://proyectosagiles.org/desarrollo-iterativo-incremental/',
    },
    {
      tema: '5. Modelos de Prueba de Usabilidad',
      referencia:
        'Traynor, V. (2015). <em>Pruebas de usabilidad con Verónica Traynor</em>.',
      tipo: 'Video',
      link: 'https://youtu.be/uh4sZmQiRr4',
    },
  ],
  glosario: [
    {
      termino: 'Indagación',
      significado:
        'proceso para tratar de llegar al conocimiento de una cosa discurriendo o por conjeturas y señales (Lorés, 2006).',
    },
    {
      termino: 'Inspección',
      significado:
        'nombre genérico para un conjunto de métodos basados en evaluadores que examinan aspectos relacionados con la usabilidad de la interfaz (Lorés, 2006).',
    },
    {
      termino: 'Interfaz de usuario (UI)',
      significado:
        'punto de interacción y comunicación usuario - dispositivo, que incluye aspectos de visualización como la pantalla, teclado, mouse, entre otros (Churchville, s.f.).',
    },
    {
      termino: 'Iteraciones',
      significado:
        'miniproyectos donde se repite un proceso de trabajo similar para proporcionar un resultado completo sobre el producto final (proyectos ágiles.org, s.f.).',
    },
    {
      termino: 'PUR',
      significado:
        ' Proyecto Unificado Racional (PUR), es una metodología cuyo objetivo es ordenar y estructurar el desarrollo del software, en la cual se realizan un conjunto de actividades para transformar los requisitos del usuario en un sistema (Pérez, 2011).',
    },
    {
      termino: 'Rite',
      significado:
        ' <em>Rapid Iterative Testing Evaluation</em>, es decir testeo rápido iterativo de evaluación. RITE es una metodología que consiste en una técnica para evaluar el desarrollo de un proyecto a través de ciclos rápidos de ejecución hasta alcanzar el resultado final, a estos ciclos se les llama iteraciones.',
    },
    {
      termino: 'Scrum',
      significado:
        'marco de trabajo basado en métodos ágiles cuyo objetivo es el control continuo sobre el estado actual de un software en el cual el cliente establece las prioridades y el equipo SCRUM se autoorganiza para determinar la mejor forma de entregar resultados (Pérez, 2011).',
    },
    {
      termino: 'Test',
      significado:
        'método de usabilidad donde los usuarios representativos trabajan en tareas utilizando un prototipo (Lorés,2006).',
    },
    {
      termino: 'Usabilidad',
      significado:
        'medida en la que un producto puede ser usado por los usuarios para lograr sus objetivos con efectividad y eficiencia en un contexto específico (Lorés, 2006).',
    },
    {
      termino: 'XP',
      significado:
        ' Programación Extrema (XP) es una disciplina de desarrollo de software basada en los métodos ágiles, donde se evidencian los principios de desarrollo incremental, participación del cliente, el interés se centra en las personas y no en los procesos (Pérez, 2011).',
    },
  ],
  referencias: [
    {
      referencia: 'Churchville, F. (s.f). <em>Interfaz de usuario (IU)</em>.',
      link:
        'https://searchdatacenter.techtarget.com/es/definicion/Interfaz-de-usuario-UI',
    },
    {
      referencia:
        'Fernández, C., P. E. (2019). <em>Usabilidad web: teoría y uso</em>.',
      link: 'https://www-ebooks7-24-com.bdigital.sena.edu.co/?il=9087',
    },
    {
      referencia:
        'Letelier, P. (2013). <em>Desarrollo iterativo versus incremental… [web log post]. Blogspot</em>.',
      link:
        'http://agilismoatwork.blogspot.com/2013/06/desarrollo-iterativo-versus-incremental.html',
    },
    {
      referencia:
        'Pérez, O. A. (2011). <em>Cuatro enfoques metodológicos para el desarrollo de Software RUP – MSF – XP - SCRUM.</em>',
      link:
        'https://revistas.uniminuto.edu/index.php/Inventum/article/view/9/9',
    },
    {
      referencia:
        'Proyectos ágiles.org. (s. f.). <em>Desarrollo iterativo e incremental</em>.',
      link: 'https://proyectosagiles.org/desarrollo-iterativo-incremental/',
    },
    {
      referencia: 'Unity3dtutorial. (2015). <em>Unity Test Tools</em>.',
      link:
        'https://unity3dtutorial.wordpress.com/2015/09/28/unity-test-tools/',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizabal',
          cargo: 'Líder del equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Nombre completo',
          cargo: 'Responsable de línea de producción',
          centro: 'Nombre centro de formación',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Nombre del rol',
          centro: 'Nombre centro de formación',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Diseñador web',
          centro: 'Nombre centro de formación',
        },
        {
          nombre: 'Luis Jesús Pérez Madariaga',
          cargo: 'Desarrollador Fullstack',
          centro: 'Nombre centro de formación',
        },
        {
          nombre: 'Nombre',
          cargo: 'Animador y Producción audiovisual',
          centro: 'Nombre centro de formación',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Nombre validador',
          cargo: 'Validación y vinculación en plataforma LMS',
          centro: 'Nombre centro formación',
        },
        {
          nombre: 'Nombre validador',
          cargo: 'Validación de contenidos accesibles',
          centro: 'Nombre centro formación',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
