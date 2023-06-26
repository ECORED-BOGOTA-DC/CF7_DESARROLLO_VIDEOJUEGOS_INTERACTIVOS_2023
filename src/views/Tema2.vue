<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Modelos de iteración
    
    p(data-aos="fade-up") Como se mencionó antes, las iteraciones son paquetes de tareas que se reprocesan hasta lograr el perfeccionamiento de un producto, por consiguiente un modelo iterativo según Cockburn, mencionado por Letelier (2013), corresponde a una metodología de re-trabajo para lograr mejorar un producto, donde cada iteración contiene un conjunto de actividades con el objetivo de entregar parte de las funcionalidades del producto al usuario. 

    .col-lg-6.m-auto.mt-5
      .titulo-sexto.color-acento-contenido
        h5.d-block Figura 9
        span Iteración incremental
      figure
        img(src="@/assets/curso/tema2/1.svg" data-aos="zoom-in-up")
    
    p.mt-5(data-aos="fade-up") Entonces, en una primera iteración se entrega una parte de la funcionalidad del producto, en una segunda iteración se entrega la parte que falta de la funcionalidad y en una tercera se puede entregar una nueva, es decir cada iteración se aproxima al producto final.

    .cajon.color-primario.p-4.mt-5(style="background-color:#C0EBF6;")
      p.mb-0(data-aos="fade-up") A este modelo también se le denomina incremental, puesto que se van obteniendo resultados parciales que al sumarse completan el producto final. Los usuarios van obteniendo beneficios de manera incremental a medida que se completan las tareas que deben incluir las pruebas, los ajustes y la documentación generada en cada proceso de entrega, esto quiere decir que no se deja para lo último la verificación de que el producto cumpla con los requisitos del proyecto.

    p.mt-5(data-aos="fade-up") Para citar un ejemplo sencillo de este modelo, en el desarrollo del juego se puede planificar que dos imágenes en escena, una quede en el fondo y la otra en el primer plano:

    ol.lista-ol--cuadro.mt-5
      li.fw-bold
        .lista-ol--cuadro__vineta
          span a
        | El primer producto es colocar las imágenes en una escena; esta entrega consiste en dos iteraciones donde se realiza el mismo proceso:
    
    .titulo-sexto.color-acento-contenido.mt-5
      h5.d-block Tabla 1
      span Iteraciones por inserción
    .tabla-a.color-acento-botones.mt-4
      table
        thead(style="border:0;")
          tr(style="background-color:#8979F3;")
            th.text-white(style="border:0;") Iteración 1 #[br] para insertar fondo en ventana de escena
            th.text-white(style="border:0;") Iteración 2 #[br] para insertar superhéroe en ventana de escena
        tbody
          tr(style="background-color:#F6F6F6;")
            td.p-4(style="border:0;border-right:1px #AFAFAF solid;") • Ubicarse en la ventana de proyecto.
            td.p-4 • Ubicarse en la ventana de proyecto.
          tr(style="background-color:#FFF;")
            td.p-4(style="border:0;border-right:1px #AFAFAF solid;") • Abrir carpeta de #[em asset] fondos.
            td.p-4 • Abrir carpeta de #[em asset] fondos.
          tr(style="background-color:#F6F6F6;")
            td.p-4(style="border:0;border-right:1px #AFAFAF solid;") • Seleccionar el fondo y arrástralo a la ventana de la escena.
            td.p-4 •   Seleccionar el superhéroe y arrástralo a la ventana de la escena.
    
    .col-lg-10.m-auto.mt-5
      p(data-aos="fade-up") Obsérvese que en la ventana de jerarquía (parte izquierda) aparecen en orden de jerarquía las dos imágenes: #[br] Primero el fondo - #[strong surface2-animation_0]  #[br] Segundo el superhéroe - #[strong 5a0c3f295a997e1c2cea1158.png]
      figure.mt-4
        img(src="@/assets/curso/tema2/2.svg" data-aos="zoom-in-up")
      .cajon.color-primario.p-4.mt-3(style="background-color:#C0EBF6;")
        p.mb-0(data-aos="fade-up") Estas iteraciones corresponden a la primera entrega incremental.
    
    ol.lista-ol--cuadro.mt-5
      li.fw-bold
        .lista-ol--cuadro__vineta
          span b
        |  El segundo producto es colocar la imagen del superhéroe sobre el fondo; esta entrega se compone de dos iteraciones:
    
    .row.mt-5
      .col-lg-6.mb-4.mb-lg-0
        .p-4.h-100.cont_2_1
          .p-3.text-center.text-white(style="background-color:#8979F3;border-radius:15px;")
            p.mb-0.fw-bold(data-aos="fade-up") Iteración 3 para colocar el superhéroe en el mismo lugar del fondo
          .col-lg-11.m-auto.mt-4
            p(data-aos="fade-up") •.  Hacer clic en el botón que está en el círculo.
            figure.mt-4.m-auto.text-center
              img(src="@/assets/curso/tema2/3.svg" style="display:inline;max-width:300px;" data-aos="zoom-in-up")
              p.text-center(data-aos="fade-up") #[em Botones]
            figure.mt-4.m-auto.text-center
              img(src="@/assets/curso/tema2/4.svg" style="display:inline;max-width:200px;" data-aos="zoom-in-up")
              p.text-center(data-aos="fade-up") Superhéroe
            p.mt-4(data-aos="fade-up") •   Arrastrar el superhéroe a la posición del fondo para obtener el siguiente resultado:
            figure.mt-4.m-auto.text-center
              img(src="@/assets/curso/tema2/5.svg" style="display:inline;max-width:300px;" data-aos="zoom-in-up")
              p.text-center(data-aos="fade-up") Imagen atrás
      .col-lg-6
        .p-4.h-100.cont_2_1
          .p-3.text-center.text-white(style="background-color:#8979F3;border-radius:15px;")
            p.mb-0.fw-bold(data-aos="fade-up") Iteración 4 para que el superhéroe quede sobre el fondo
          .col-lg-11.m-auto.mt-4
            p(data-aos="fade-up") •   El superhéroe está seleccionado debajo del fondo; ya que se observa el recuadro con 4 puntos azules y en la ventana del inspector se aprecian los datos de escala, posición y en la parte de abajo la opción #[em order layer] con el valor de 0:
            figure.mt-4.m-auto.text-center
              img(src="@/assets/curso/tema2/6.svg" style="display:inline;max-width:500px;" data-aos="zoom-in-up")
              p.text-center(data-aos="fade-up") #[em Order layer]
            p.mt-5(data-aos="fade-up") •   El valor de #[em order layer] se pone en 1 para que el superhéroe se coloque en el primer nivel.
            figure.mt-4.m-auto.text-center
              img(src="@/assets/curso/tema2/7.svg" style="display:inline;max-width:500px;" data-aos="zoom-in-up")
              p.text-center(data-aos="fade-up") Imagen adelante
    
    p.mt-5(data-aos="fade-up") Para obtener el producto final se llevaron a cabo 4 iteraciones incrementales puesto que se tuvieron que realizar cuatro tareas para conseguir lo que se deseaba en el proyecto.
    p.mt-4(data-aos="fade-up") Los beneficios del modelo de iteración incremental radican en que:

    .row.mt-4
      .col-auto.pe-0(style="place-self:center;")
        figure
          img(src="@/assets/curso/tema2/9.svg" data-aos="fade-up")
      .col(style="place-self:center;")
        p.mb-0(data-aos="fade-up") Se pueden tomar decisiones en cada iteración, por ejemplo cambiar de personaje, de fondo, la escala de las imágenes, la rotación o la posición.
    .row.mt-2
      .col-auto.pe-0(style="place-self:center;")
        figure
          img(src="@/assets/curso/tema2/9.svg" data-aos="fade-up")
      .col(style="place-self:center;")
        p.mb-0(data-aos="fade-up") El equipo desarrollador tiene la posibilidad de validar si lo que ha realizado era lo que el usuario esperaba y hacer los ajustes necesarios.
    .row.mt-2
      .col-auto.pe-0(style="place-self:center;")
        figure
          img(src="@/assets/curso/tema2/9.svg" data-aos="fade-up")
      .col(style="place-self:center;")
        p.mb-0(data-aos="fade-up") No es necesario realizar una recopilación detallada de la información del producto ya que por el camino pueden surgir nuevos conceptos y se pueden ir afinando detalles.
    .row.mt-2
      .col-auto.pe-0(style="place-self:center;")
        figure
          img(src="@/assets/curso/tema2/9.svg" data-aos="fade-up")
      .col(style="place-self:center;")
        p.mb-0(data-aos="fade-up") Desde el comienzo se pueden obtener resultados y el usuario puede ir probando la usabilidad del producto aunque este no esté terminado.
    .row.mt-2
      .col-auto.pe-0(style="place-self:center;")
        figure
          img(src="@/assets/curso/tema2/9.svg" data-aos="fade-up")
      .col(style="place-self:center;")
        p.mb-0(data-aos="fade-up") Después de cada iteración se puede obtener el #[em feedback] del usuario y hacer los ajustes requeridos.  
    .row.mt-2
      .col-auto.pe-0(style="place-self:center;")
        figure
          img(src="@/assets/curso/tema2/9.svg" data-aos="fade-up")
      .col(style="place-self:center;")
        p.mb-0(data-aos="fade-up") Debido a que el proyecto se evalúa después de cada iteración, se minimizan los riesgos y se optimizan los recursos, puesto que los fallos son detectados y superados a tiempo.
    .row.mt-2
      .col-auto.pe-0(style="place-self:center;")
        figure
          img(src="@/assets/curso/tema2/9.svg" data-aos="fade-up")
      .col(style="place-self:center;")
        p.mb-0(data-aos="fade-up") El proyecto se puede planificar de manera más acertada en los tiempos de ejecución, ya que se conoce con exactitud el avance de cada fase y por consiguiente proyectar su finalización.
    .row.mt-2
      .col-auto.pe-0(style="place-self:center;")
        figure
          img(src="@/assets/curso/tema2/9.svg" data-aos="fade-up")
      .col(style="place-self:center;")
        p.mb-0(data-aos="fade-up") Se minimiza el número de errores y se incrementa la calidad del producto.
    .row.mt-2
      .col-auto.pe-0(style="place-self:center;")
        figure
          img(src="@/assets/curso/tema2/9.svg" data-aos="fade-up")
      .col(style="place-self:center;")
        p.mb-0(data-aos="fade-up") Cada iteración entrega unos resultados concretos para el proyecto y el usuario de tal manera que se obtienen funcionalidades gradualmente y no hasta el final.
    
    p.mt-5(data-aos="fade-up") Algunos de los modelos iterativos que se están utilizando en este momento son: Proceso Unificado Racional (RUP), Programación Externa y SCRUM.

    Separador.mt-5

    .titulo-segundo
      h2#t_2_1 2.1 Proceso Unificado Racional - PUR
    
    p(data-aos="fade-up") El Proceso Unificado Racional – PUR es una metodología de desarrollo de #[em software] que se basa en componentes e interfaces para analizar, diseñar, codificar, implementar, probar y documentar sistemas orientados a objetos y se vale para ello de un Lenguaje Unificado de Modelado - UML.

    .row.mt-5
      .col-auto.pe-0(style="place-self:center;")
        figure
          img(src="@/assets/curso/tema1/5.svg" data-aos="fade-right")
      .col(style="place-self:center;")
        h3.mb-0(data-aos="fade-right") Elementos del PUR
    
    .row.mt-5
      .col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/tema2/14.svg')
          .tarjeta.color-primario(style="background-color:#CCEFF8;")
            .p-4
              h5.mt-3(data-aos="fade-up" style="color:#12263F;") Equipo de trabajo
              p.mt-3(data-aos="fade-up" style="color:#12263F;") Define el rol de las personas que están a cargo del desarrollo del proyecto.
      .col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/tema2/15.svg')
          .tarjeta.color-primario(style="background-color:#CCEFF8;")
            .p-4
              h5.mt-3(data-aos="fade-up" style="color:#12263F;") Actividades
              p.mt-3(data-aos="fade-up" style="color:#12263F;") Son las tareas que realizan los miembros del equipo con los elementos del proyecto.
      .col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/tema2/16.svg')
          .tarjeta.color-primario(style="background-color:#CCEFF8;")
            .p-4
              h5.mt-3(data-aos="fade-up" style="color:#12263F;") Artefactos
              p.mt-3(data-aos="fade-up" style="color:#12263F;") Son los productos tangibles que se obtienen de cada fase e iteración del proyecto.
      .col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/tema2/17.svg')
          .tarjeta.color-primario(style="background-color:#CCEFF8;")
            .p-4
              h5.mt-3(data-aos="fade-up" style="color:#12263F;") Flujo de actividades
              p.mt-3(data-aos="fade-up" style="color:#12263F;") Secuencia de actividades que se llevan a cabo para la obtención de un artefacto.
    
    .row.mt-5
      .col-auto.pe-0(style="place-self:center;")
        figure
          img(src="@/assets/curso/tema1/5.svg" data-aos="fade-right")
      .col(style="place-self:center;") 
        h3.mb-0(data-aos="fade-right") Fases PUR
    
    p.mt-4(data-aos="fade-up") Fases para el desarrollo de un videojuego en el Proceso Unificado Racional. Basado en Gustavo Torossi (s. f.).

    .col-lg-8.m-auto.mt-5
      PasosA.color-acento-contenido(tipo="n")
        .row.col-lg-10.m-auto
          .row.p-1.m-0(style="background-color:#8979F3;border-radius:10px;")
            .col-auto(style="place-self:center;")
              figure
                img(src="@/assets/curso/tema2/18.svg")
            .col(style="place-self:center;")
              h5.mb-0.text-white(data-aos="fade-up") Alcances y objetivos
          h5.mt-4(data-aos="fade-up") Inicio
          p.mt-2(data-aos="fade-up") En esta fase se define el alcance y los objetivos del proyecto de videojuego, determinando los requerimientos de los usuarios, el conjunto de funcionalidades, la estructura preliminar del diseño con la cantidad de elementos, personajes, características e iteraciones, se identifican los riesgos de mayor importancia y los costos del desarrollo.
        .row.col-lg-10.m-auto.text-start
          .row.p-1.m-0(style="background-color:#8979F3;border-radius:10px;")
            .col-auto(style="place-self:center;")
              figure
                img(src="@/assets/curso/tema2/19.svg")
            .col(style="place-self:center;")
              h5.mb-0.text-white(data-aos="fade-up") Arquitectura
          h5.mt-4(data-aos="fade-up") Elaboración
          p.mt-2(data-aos="fade-up") En esta fase se planifica el prototipo del videojuego detallando los casos de uso es decir las funciones que va a tener, se mitigan los riesgos de mayor importancia, se planean las iteraciones del proyecto y las interfaces correspondientes a cada una de las escenas especificando los objetos, personajes, efectos, iluminaciones y animaciones.
        .row.col-lg-10.m-auto.text-start
          .row.p-1.m-0(style="background-color:#8979F3;border-radius:10px;")
            .col-auto(style="place-self:center;")
              figure
                img(src="@/assets/curso/tema2/20.svg")
            .col(style="place-self:center;")
              h5.mb-0.text-white(data-aos="fade-up") Versión 1
          h5.mt-4(data-aos="fade-up") Construcción
          p.mt-2(data-aos="fade-up") En esta fase se llevan a cabo todas las iteraciones para el desarrollo del videojuego, teniendo en cuenta los requerimientos y el diseño.
          LineaTiempoD.color-secundario.mt-3
            p(numero="1" titulo="Requerimientos")
            p(numero="2" titulo="Análisis y Diseño")
            p(numero="3" titulo="Codificación") Se construyen las líneas de código necesarias en los componentes y las funciones que se planificaron.
            p(numero="4" titulo="Prueba") Se realizan pruebas con los usuarios y se configuran controles sobre los productos entregables, los cambios sobre los mismos y las versiones que se vayan obteniendo.
            p(numero="5" titulo="Gestión del proyecto") Se gestionan los riesgos y las restricciones, culminando con una versión del producto.
            p(numero="6" titulo="Gestión y configuración de cambios")
            p(numero="7" titulo="Entregas incrementales") Cada entrega se documenta hasta completar un manual.
            p(numero="8" titulo="Iteración")
        .row.col-lg-10.m-auto.text-start
          .row.p-1.m-0(style="background-color:#8979F3;border-radius:10px;")
            .col-auto(style="place-self:center;")
              figure
                img(src="@/assets/curso/tema2/21.svg")
            .col(style="place-self:center;")
              h5.mb-0.text-white(data-aos="fade-up") Versión Final
          h5.mt-4(data-aos="fade-up") Transición
          p.mt-2(data-aos="fade-up") Aquí el producto se convierte en la primera versión y el usuario está usando de manera activa el videojuego. El equipo desarrollador puede extender las funciones de acuerdo con el #[em feedback] recibido y ajustar los elementos y características, es decir también se llevan a cabo iteraciones pero con el producto en uso hasta alcanzar la versión final.
    
    .row.mt-5
      .col-auto.pe-0(style="place-self:center;")
        figure
          img(src="@/assets/curso/tema1/5.svg" data-aos="fade-right")
      .col(style="place-self:center;") 
        h3.mb-0(data-aos="fade-right") Características PUR
    
    .row.mt-5
      .col-lg.mb-4.mb-lg-0
        .h-100(style="border:3px #8979F3 solid;border-radius:20px;")
          figure
            img(src="@/assets/curso/tema2/22.png")
          .text-center.mt-3.p-4
            h5(data-aos="fade-up") Dirigido por casos de uso
            p.mt-3(data-aos="fade-up") Se refiere a que dentro del modelo se definen claramente las funcionalidades que el usuario espera encontrar en el producto para poder hacer uso de él.
      .col-lg.mb-4.mb-lg-0
        .h-100(style="border:3px #F1BF5E solid;border-radius:20px;")
          figure
            img(src="@/assets/curso/tema2/23.png")
          .text-center.mt-3.p-4
            h5(data-aos="fade-up") Centrado en la arquitectura
            p.mt-3(data-aos="fade-up") Se define la estructura completa del proyecto y los componentes principales que le dan la lógica de funcionamiento y ejecución.
      .col-lg.mb-4.mb-lg-0
        .h-100(style="border:3px #04B1D9 solid;border-radius:20px;")
          figure
            img(src="@/assets/curso/tema2/24.png")
          .text-center.mt-3.p-4
            h5(data-aos="fade-up") Iterativo incremental
            p.mt-3(data-aos="fade-up") En cada fase del proyecto se definen los flujos de actividades que van constituyendo las partes del producto y sus funciones.
    
    .row.mt-5
      .col-auto.pe-0(style="place-self:center;")
        figure
          img(src="@/assets/curso/tema1/5.svg" data-aos="fade-right")
      .col(style="place-self:center;") 
        h3.mb-0(data-aos="fade-right") Ejemplo de PUR
    
    p.mt-5(data-aos="fade-up") El equipo de diseño de un videojuego debe desarrollar el caso de uso: #[strong ingresar al videojuego, jugar y salir].
    p.mt-4(data-aos="fade-up") Se deben codificar las funciones que debe realizar el sistema para que el jugador pueda ingresar, empezar a jugar y salir del juego. En la figura se ilustra el diagrama con los requerimientos funcionales.
    p.mt-4(data-aos="fade-up") También se pueden observar las funciones que debe desarrollar el programador para que un usuario pueda empezar a usar el juego que se propone. 
    p.mt-4(data-aos="fade-up") Estas funciones hacen parte de una iteración que consiste en: #[strong registro de usuario - carga escenario principal - salir] que conllevan la elaboración de una serie de tareas a codificar: #[strong solicitud de datos al usuario, validación de los datos, creación de alias, ingreso del usuario, activación de las funciones del videojuego, proceso de desactivación y salida del videojuego.]
    p.mt-4(data-aos="fade-up") #[strong Las funciones por codificar son:]

    TabsB.color-acento-contenido.mt-5
      .py-4.py-md-5(titulo="Menú" :icono="require('@/assets/curso/tema2/25.svg')")
        .row
          .col-lg-6.mb-4.mb-lg-0
            h4 Menú
            p El usuario puede ver las diferentes opciones para explorar los componentes del videojuego, con lo cual puede informarse acerca de él. Debe hacer clic en registrarse para ingresar.
          .col-lg-6
            figure
              img(src='@/assets/curso/tema2/30.png')
      .py-4.py-md-5(titulo="Ingresar" :icono="require('@/assets/curso/tema2/26.svg')")
        .row
          .col-lg-6.mb-4.mb-lg-0
            h4 Ingresar
            p El jugador debe ingresar un alias para identificarse en el juego, el cual es validado por el sistema para determinar si ya existe o es nuevo.
          .col-lg-6
            figure
              img(src='@/assets/curso/tema2/31.png')
      .py-4.py-md-5(titulo="Jugador" :icono="require('@/assets/curso/tema2/27.svg')")
        .row
          .col-lg-6.mb-4.mb-lg-0
            h4 Jugador
            p El jugador debe escribir el nombre que ha validado el sistema para que se habiliten todas las funciones que puede utilizar.
          .col-lg-6
            figure
              img(src='@/assets/curso/tema2/32.png')
      .py-4.py-md-5(titulo="Cargar escenario" :icono="require('@/assets/curso/tema2/28.svg')")
        .row
          .col-lg-6.mb-4.mb-lg-0
            h4 Cargar escenario
            p El sistema carga el escenario principal para que el jugador comience a demostrar sus habilidades y controla que este ascienda de nivel o se quede en el que está.
          .col-lg-6
            figure
              img(src='@/assets/curso/tema2/33.png')
      .py-4.py-md-5(titulo="Salir" :icono="require('@/assets/curso/tema2/29.svg')")
        .row
          .col-lg-6.mb-4.mb-lg-0
            h4 Salir
            p El sistema controla la salida del jugador por pérdida de la partida o por que ha ganado, en ningún momento es igual a cerrar el juego, ya que si es así cuando ingrese lo dejará en el mismo punto.
          .col-lg-6
            figure
              img(src='@/assets/curso/tema2/34.png')

    p.mt-5(data-aos="fade-up") El desarrollo de estas funciones corresponde a una iteración completa que, solo cuando esté terminada, se solicita la prueba a los usuarios para poder seguir con el siguiente caso de uso.

    Separador.mt-5

    .titulo-segundo
      h2#t_2_2 2.2 Programación extrema - XP
    
    p(data-aos="fade-up") La programación extrema - XP o #[em Extreme Programming] es una metodología de desarrollo de #[em software] que involucra a los usuarios desde el comienzo del proyecto hasta que finaliza siendo esta su mayor fortaleza, ya que asegura un desarrollo a la medida de acuerdo con las pruebas que estos van realizando a los productos entregados.
    p.mt-4(ata-aos="fade-up") Durante el desarrollo del proyecto se pueden producir muchos cambios y esto garantiza una mayor aproximación del producto a lo que espera el usuario de él. Al igual que PUR posee elementos, trabaja en diferentes fases para lograr los resultados y tiene características que lo diferencian del anterior modelo.

    .row.mt-5
      .col-auto.pe-0(style="place-self:center;")
        figure
          img(src="@/assets/curso/tema1/5.svg" data-aos="fade-right")
      .col(style="place-self:center;") 
        h3.mb-0(data-aos="fade-right") Elementos XP
    
    .row.mt-5
      .col-lg.mb-4.mb-lg-0
        .h-100.p-4.pb-5.pt-0(style="border:3px #04B1D9 solid;border-radius:20px;")
          .p-1.pt-5.pb-2(style="background-color:#04B1D9;width:fit-content;")
            figure
              img(src="@/assets/curso/tema2/35.svg" data-aos="zoom-in-up" style="max-width:100px;")
          h5.mt-3(data-aos="fade-up") Equipo de trabajo
          p.mt-3(data-aos="fade-up") Los diferentes roles son: #[strong desarrolladores, usuarios, #[em testeadores] y personal de seguimiento].
      .col-lg.mb-4.mb-lg-0
        .h-100.p-4.pb-5.pt-0(style="border:3px #F1BF5E solid;border-radius:20px;")
          .p-1.pt-5.pb-2(style="background-color:#F1BF5E;width:fit-content;")
            figure
              img(src="@/assets/curso/tema2/36.svg" data-aos="zoom-in-up" style="max-width:100px;")
          h5.mt-3(data-aos="fade-up") Actividades
          p.mt-3(data-aos="fade-up") Son las tareas que hacen parte de la planificación del proyecto, agrupadas por iteraciones.
      .col-lg.mb-4.mb-lg-0
        .h-100.p-4.pb-5.pt-0(style="border:3px #8979F3 solid;border-radius:20px;")
          .p-1.pt-5.pb-2(style="background-color:#8979F3;width:fit-content;")
            figure
              img(src="@/assets/curso/tema2/37.svg" data-aos="zoom-in-up" style="max-width:100px;")
          h5.mt-3(data-aos="fade-up") Artefactos
          p.mt-3(data-aos="fade-up") Están representadas en las tarjetas de control o fichas que describen los elementos que se elaborarán como producto entregable.
      .col-lg.mb-4.mb-lg-0
        .h-100.p-4.pb-5.pt-0(style="border:3px #05DBF3 solid;border-radius:20px;")
          .p-1.pt-5.pb-2(style="background-color:#05DBF3;width:fit-content;")
            figure
              img(src="@/assets/curso/tema2/38.svg" data-aos="zoom-in-up" style="max-width:100px;")
          h5.mt-3(data-aos="fade-up") Flujo de actividades
          p.mt-3(data-aos="fade-up") Son las tareas que se van a desarrollar en secuencia para la obtención de un producto entregable.
      .col-lg.mb-4.mb-lg-0
        .h-100.p-4.pb-5.pt-0(style="border:3px #F1BF5E solid;border-radius:20px;")
          .p-1.pt-5.pb-2(style="background-color:#F1BF5E;width:fit-content;")
            figure
              img(src="@/assets/curso/tema2/39.svg" data-aos="zoom-in-up" style="max-width:100px;")
          h5.mt-3(data-aos="fade-up") Fases
          p.mt-3(data-aos="fade-up") Corresponde a las diferentes etapas que se deben llevar a cabo para obtener el producto final.
    
    .row.mt-5
      .col-auto.pe-0(style="place-self:center;")
        figure
          img(src="@/assets/curso/tema1/5.svg" data-aos="fade-right")
      .col(style="place-self:center;") 
        h3.mb-0(data-aos="fade-right") Fases XP
    
    h5.mt-5(data-aos="fade-up") Fases para el desarrollo de un videojuego en el modelo de Programación Extrema XP.
    p.mt-4(data-aos="fade-up") Veamos en qué consisten cada una de las fases…

    ImagenInfografica.color-acento-botones.mt-5
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/tema2/40.svg' data-aos="zoom-in-up")
      .tarjeta.color-acento-botones.p-3(x="11%" y="98%" numero="+" style="background-color:#D4F7FF;")
        .h5.mb-2 Planificación
        p Es la etapa donde se recogen los requisitos de los usuarios en cuanto a las funcionalidades que espera que tenga el producto con el que va a interactuar. El usuario establece las prioridades de cada requerimiento para que el equipo de ejecución planifique las iteraciones, los tiempos de programación y los costos de desarrollo.
      .tarjeta.color-acento-botones.p-3(x="31%" y="98%" numero="+" style="background-color:#D4F7FF;")
        .h5.mb-2 Diseño
        p En esta etapa se define la estructura del proyecto con los elementos y componentes que debe tener para cumplir con los requerimientos, se elaboran las tarjetas que describen cada objeto que se pondrá en el producto, se realiza un glosario de términos especificando los nombres de los componentes.
        p.mb-0 También se mitigan los riesgos, se elaboran las pruebas de unidad con las que los desarrolladores verifican el funcionamiento del código y las pruebas de aceptación realizadas por los usuarios para verificar si, al final de una iteración, se cumplió con la funcionalidad del producto. Los entregables de esta etapa son el prototipo y las pruebas. 
      .tarjeta.color-acento-botones.p-3(x="51%" y="98%" numero="+" style="background-color:#D4F7FF;")
        .h5.mb-2 Codificación
        p Es la fase de desarrollo del producto que se debe realizar por parejas para garantizar que se realice en un código universal y que cualquier persona pueda continuar el trabajo o hacer una modificación.
        p El resultado de esta etapa es la integración de los elementos creados en el diseño e igualmente la codificación de las pruebas (de unidad y aceptación) para verificar el cumplimiento de los estándares de programación y los requisitos de funcionalidad planteados en las anteriores etapas. 
      .tarjeta.color-acento-botones.p-3(x="71%" y="98%" numero="+" style="background-color:#D4F7FF;")
        .h5.mb-2 Prueba
        p Se elaboran dos tipos de pruebas: las unitarias y las de aceptación. Las primeras son diseñadas y aplicadas por los desarrolladores para verificar el funcionamiento del sistema con las líneas de código y las segundas son diseñadas y aplicadas por los usuarios para determinar el cumplimiento incremental de las funcionalidades que se van implementando en el proyecto y que son verificadas con datos reales.
      .tarjeta.color-acento-botones.p-3(x="91%" y="98%" numero="+" style="background-color:#D4F7FF;")
        .h5.mb-2 Lanzamiento
        p Corresponde al control de las versiones que se obtienen en el proceso de elaboración del producto y cuando se hacen modificaciones de este. Estas versiones se deben almacenar en un repositorio que conserve los históricos de lo que ha acontecido con el producto para gestionar las actualizaciones que se han llevado a cabo en una línea de tiempo.

    .row.mt-5
      .col-auto.pe-0(style="place-self:center;")
        figure
          img(src="@/assets/curso/tema1/5.svg" data-aos="fade-right")
      .col(style="place-self:center;") 
        h3.mb-0(data-aos="fade-right") Características de EX
    
    .row.mt-5
      .col-lg.col-md-6.mb-4.mb-lg-0
        .tarjeta.tarjeta-flip.color-primario(@mouseover="indicadorTarjetaFlip = false")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img.p-4.d-flex.align-items-center.flex-wrap.align-content-center(style="background-color:#04B1D9;")
              h5(style="color:initial;") Dirigido por historias de usuario
              p.mt-3(style="color:initial;") Se refiere a los requerimientos de los usuarios que se expresan como historias, de hecho es él quien los elabora, por eso hay una colaboración activa por parte de ellos en todas las fases del proyecto.
            .tarjeta-flip__contenido
              figure
                img(src="@/assets/curso/tema2/41.png")
      .col-lg.col-md-6.mb-4.mb-lg-0
        .tarjeta.tarjeta-flip.color-primario(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img.p-4.d-flex.align-items-center.flex-wrap.align-content-center(style="background-color:#F1BF5E;")
              h5(style="color:initial;") Diseño sencillo
              p.mt-3(style="color:initial;") Se realiza el diseño necesario para satisfacer las necesidades actuales y no las futuras.
            .tarjeta-flip__contenido
              figure
                img(src="@/assets/curso/tema2/42.png")
      .col-lg.col-md-6.mb-4.mb-lg-0
        .tarjeta.tarjeta-flip.color-primario(@mouseover="indicadorTarjetaFlip = false")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img.p-4.d-flex.align-items-center.flex-wrap.align-content-center(style="background-color:#8979F3;")
              h5(style="color:initial;") Iterativo incremental
              p.mt-3(style="color:initial;") Se realizan iteraciones o entregas pequeñas siendo la primera aquella que le proporcione la funcionalidad mínima al sistema, se van añadiendo paulatinamente funciones que le sumen a la anterior.
            .tarjeta-flip__contenido
              figure
                img(src="@/assets/curso/tema2/43.png")
      .col-lg.col-md-6.mb-4.mb-lg-0
        .tarjeta.tarjeta-flip.color-primario(@mouseover="indicadorTarjetaFlip = false")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img.p-4.d-flex.align-items-center.flex-wrap.align-content-center(style="background-color:#05DBF3;")
              h5(style="color:initial;") Refactorización
              p.mt-3(style="color:initial;") Consiste en eliminar las líneas de código que pueden repetirse a lo largo del desarrollo del producto. Lo que se hace es reutilizar los fragmentos de programas que realicen procesos que se pueden aplicar en otras funciones.
            .tarjeta-flip__contenido
              figure
                img(src="@/assets/curso/tema2/44.png")
    
    .row.mt-5
      .col-auto.pe-0(style="place-self:center;")
        figure
          img(src="@/assets/curso/tema1/5.svg" data-aos="fade-right")
      .col(style="place-self:center;") 
        h3.mb-0(data-aos="fade-right") Ejemplo de PUR
    
    p.mt-5(data-aos="fade-up") El siguiente es un ejemplo de las iteraciones que se pueden obtener de acuerdo con las historias de usuario para ingresar a un videojuego, empezar a jugar y salir. Obsérvese que el usuario ha diseñado tres (3) historias que debe codificar el equipo desarrollador en la interfaz o pantalla de inicio.
    p.mt-4(data-aos="fade-up") Para los programadores cada historia que ha diseñado el usuario es una iteración que contiene líneas de código por desarrollar y es probada por el usuario inmediatamente se construye, luego utilizando XP se tienen tres (3) iteraciones a diferencia del proceso unificado que ha reunido el proceso en una sola iteración. 
    p.mt-4(data-aos="fade-up") El siguiente formato es una ficha que han diseñado desarrollador y usuario para consignar la historia y tanto el uno como el otro se deben diligenciar conjuntamente.

    .tarjeta.pt-5.pb-5.mt-5(style="background-color:#F2F0FD;border:1px #707070 solid;")
      SlyderF(columnas="col-12")
        .row
          .col-lg-4.mb-4.mb-lg-0(style="place-self:center;")
            p #[strong La historia de usuario # 1 de la interfaz (pantalla) de inicio del juego;] corresponde al requerimiento de poder entrar al juego y hacer el registro. La estimación es el grado de dificultad para el desarrollador la cual puede determinar en una escala de 1 a 10, siendo 1 la menor dificultad. El valor es la prioridad o grado de importancia que le da el usuario dentro de las funciones del juego.
          .col-lg-8(style="place-self:center;")
            .tabla-a.color-acento-contenido(style="min-width:100%;")
              table(style="min-width:100%;")
                thead
                  tr
                    th.text-center Historia de usuario # 1
                    th.text-center(colspan="2") Pantalla de inicio
                tbody
                  tr(style="background-color:#fff;")
                    td.p-3.text-center(colspan="3") Como jugador quiero entrar al juego y poder registrarme.
                  tr(style="background-color:#fff;")
                    td.p-3.text-center.fw-bold Estimación
                    td.p-3.text-center.fw-bold Valor
                    td.p-3.text-center.fw-bold Condiciones de satisfacción
                  tr(style="background-color:#fff;")
                    td.p-3.text-center 1
                    td.p-3.text-center 10
                    td.p-3.text-center Antes de iniciar el juego quiero que aparezca una pantalla con el nombre del juego y unos botones en la parte superior para registrarme.
        .row
          .col-lg-4.mb-4.mb-lg-0(style="place-self:center;")
            p #[strong La historia de usuario # 2 de la interfaz (pantalla) de inicio del juego;] corresponde al requerimiento de entrar al juego con un alias que el sistema debe verificar para ser usado, de lo contrario buscar otro. El grado de dificultad para el desarrollador es superior al mínimo y la prioridad para el usuario es la máxima.
          .col-lg-8(style="place-self:center;")
            .tabla-a.color-acento-contenido(style="min-width:100%;")
              table(style="min-width:100%;")
                thead
                  tr
                    th.text-center Historia de usuario # 2
                    th.text-center(colspan="2") Pantalla de inicio
                tbody
                  tr(style="background-color:#fff;")
                    td.p-3.text-center(colspan="3") Como jugador quiero que al ingresar con mi alias se habiliten todas las funciones del juego.
                  tr(style="background-color:#fff;")
                    td.p-3.text-center.fw-bold Estimación
                    td.p-3.text-center.fw-bold Valor
                    td.p-3.text-center.fw-bold Condiciones de satisfacción
                  tr(style="background-color:#fff;")
                    td.p-3.text-center 4
                    td.p-3.text-center 10
                    td.p-3.text-center Que el juego habilite todas las entradas a las diferentes acciones que puedo llevar a cabo en el juego.
        .row
          .col-lg-4.mb-4.mb-lg-0(style="place-self:center;")
            p #[strong La historia de usuario # 3 de la interfaz (pantalla) de inicio del juego;] corresponde al requerimiento de salir sin bloquear el juego o afectar funciones. El grado de dificultad para el desarrollador es considerable puesto que es superior a la mitad de la escala, ya que debe construir líneas de programación que eviten que el programa presente un bloqueo de sus funciones y que pueda continuar donde estaba en el momento de cerrarlo, aunque el jugador cierre la ventana sin utilizar la opción salir. Para el jugador no es tan prioritaria esta opción, puesto que le ha dado un valor de “6”.
          .col-lg-8(style="place-self:center;")
            .tabla-a.color-acento-contenido(style="min-width:100%;")
              table(style="min-width:100%;")
                thead
                  tr
                    th.text-center Historia de usuario # 3
                    th.text-center(colspan="2") Pantalla de inicio
                tbody
                  tr(style="background-color:#fff;")
                    td.p-3.text-center(colspan="3") Como jugador quiero salir del juego en cualquier momento y poder continuar donde está cuando entre.
                  tr(style="background-color:#fff;")
                    td.p-3.text-center.fw-bold Estimación
                    td.p-3.text-center.fw-bold Valor
                    td.p-3.text-center.fw-bold Condiciones de satisfacción
                  tr(style="background-color:#fff;")
                    td.p-3.text-center 6
                    td.p-3.text-center 6
                    td.p-3.text-center Que el juego presente la opción de salir sin tener que cerrar la ventana y sin importar qué esté haciendo. Volver a  ingresar donde lo había dejado. 



    Separador.mt-5

    .titulo-segundo
      h2#t_2_3 2.3 Scrum
    
    p(data-aos="fade-up") Es una metodología de trabajo en equipo para el desarrollo de un proyecto. El término fue extraído del deporte Rugby en el que un número de jugadores de cada equipo hace una formación fija para entrar a disputar la tenencia del balón y cada vez que este sale del juego se hace un nuevo Scrum o formación. Esta metodología fue desarrollada por Nonaka y Takeuchi en 1986 para agilizar el desarrollo de productos comerciales en cualquier sector de la economía. Es aplicable en la industria tecnológica para el desarrollo de #[em software] de diferentes categorías entre ellas los videojuegos.
    p.mt-4(data-aos="fade-up") Esta metodología está enfocada en el trabajo organizado de manera colaborativa y en lo que cada persona puede aportar al equipo para cumplir los objetivos. Implementa buenas prácticas para la obtención rápida de resultados, establece las entregas incrementales acorde con los requisitos, se miden los tiempos y se observa la retrospectiva de trabajo para mejorar las actividades que impidan alcanzar la mayor productividad.  

    p.mt-5.fw-bold(data-aos="fade-up") Elementos Scrum:
        
    TabsA.color-acento-contenido.mt-4
      .tarjeta.color-secundario.p-4(titulo="Equipo de trabajo")
        p Está conformado por el cliente o dueño del producto, el Scrum manager o gestionador del proyecto, el equipo Scrum que desarrolla el producto, los stakeholders o asesores del proyecto (internos o externos) y los usuarios que realizan las pruebas del producto.
      .tarjeta.color-secundario.p-4(titulo="Pila de producto")
        p Es la lista priorizada de requisitos para la elaboración del producto, en la que puede intervenir todo el equipo para su elaboración, pero solo el cliente y el director del equipo es responsable de decidir sobre ella.
      .tarjeta.color-secundario.p-4(titulo="Artefactos")
        p Están representados por la información clave generada en el proceso de desarrollo del producto; entre la que se encuentra la pila de producto, la planificación de la pila y la retrospectiva.
      .tarjeta.color-secundario.p-4(titulo="Flujo de actividades")
        p Es la lista de tareas de iteración que se deben ejecutar para el desarrollo de la pila del #[em sprint].
      .tarjeta.color-secundario.p-4(titulo="Fases")
        p Corresponde a las diferentes etapas del proceso que se lleva a cabo para obtener el producto final.
    
    .row.mt-5
      .col-auto.pe-0(style="place-self:center;")
        figure
          img(src="@/assets/curso/tema1/5.svg" data-aos="fade-right")
      .col(style="place-self:center;")
        h3.mb-0(data-aos="fade-right") Fases para el desarrollo de un videojuego en el modelo Scrum
    
    .row.mt-5
      .col-auto.pe-0(style="place-self:center;")
        figure
          img(src="@/assets/curso/tema2/9.svg" data-aos="fade-up")
      .col(style="place-self:center;")
        p.mb-0.fw-bold(data-aos="fade-up") Planificación de la iteración
    
    .row.mt-5
      .col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/tema2/10.svg')
          .tarjeta.color-primario(style="background-color:#E1DDFC;")
            .p-4
              p.text-center(data-aos="fade-up" style="color:#12263F;") En la Planificación de la iteración el equipo desarrollador selecciona los requisitos de la lista que el cliente elaboró, los prioriza y despeja las dudas, realiza una lista de las tareas que se van a llevar a cabo en la iteración.
      .col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/tema2/11.svg')
          .tarjeta.color-primario(style="background-color:#E1DDFC;")
            .p-4
              p.text-center(data-aos="fade-up" style="color:#12263F;") Planifica el tiempo de las tareas; el cual es generalmente de una semana (1) por actividad hasta completar un máximo de cuatro (4) por iteración es decir 30 días.
      .col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/tema2/12.svg')
          .tarjeta.color-primario(style="background-color:#E1DDFC;")
            .p-4
              p.text-center(data-aos="fade-up" style="color:#12263F;") Se organizan en parejas o en las personas que sean necesarias para completarla.
    
    .row.mt-5
      .col-auto.pe-0(style="place-self:center;")
        figure
          img(src="@/assets/curso/tema2/9.svg" data-aos="fade-up")
      .col(style="place-self:center;")
        p.mb-0.fw-bold(data-aos="fade-up") Sincronizaciones diarias
    
    p.mt-5(data-aos="fade-up") De acuerdo con las respuestas proporcionadas por los integrantes del equipo el Scrum, el manager (gestionador del proyecto) debe encargarse de hacer la inspección de los obstáculos y hacer las adaptaciones necesarias para eliminarlos, garantizando que el equipo pueda realizar las actividades para terminar la iteración.
    p.mt-4(data-aos="fade-up") En Sincronizaciones diarias el equipo realiza reuniones diarias normalmente de 15 minutos frente a un tablero para autoevaluarse frente a los avances en la tarea planteándose las siguientes preguntas:

    .col-8.m-auto.mt-4
      .p-3.text-center(style="background-color:#81D8EC;border-radius:20px;" data-aos="fade-up")
        p.mb-0.fw-bold ¿Qué he hecho desde la última reunión de sincronización para aportar al cumplimiento de la tarea?
      .p-3.text-center.mt-3(style="background-color:#C4BBF9;border-radius:20px;" data-aos="fade-up")
        p.mb-0.fw-bold ¿Qué voy a hacer a partir de este momento para ayudar al equipo a cumplir el objetivo de la tarea?
      .p-3.text-center.mt-3(style="background-color:#F8E5A4;border-radius:20px;" data-aos="fade-up")
        p.mb-0.fw-bold ¿Qué obstáculos me impiden colaborar con el trabajo en equipo para conseguir el objetivo?
    
    .row.mt-5
      .col-auto.pe-0(style="place-self:center;")
        figure
          img(src="@/assets/curso/tema2/9.svg" data-aos="fade-up")
      .col(style="place-self:center;")
        p.mb-0.fw-bold(data-aos="fade-up") Retrospectiva
    
    .row.mt-5
      .col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/tema2/10.svg')
          .tarjeta.color-primario(style="background-color:#E1DDFC;")
            .p-4
              p.text-center(data-aos="fade-up" style="color:#12263F;") El #[em(style="color:#12263F;") Scrum manager] junto con el equipo realiza una retrospectiva del trabajo para identificar en que se puede mejorar la metodología y las técnicas utilizadas para incrementar la productividad.
      .col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/tema2/11.svg')
          .tarjeta.color-primario(style="background-color:#E1DDFC;")
            .p-4
              p.text-center(data-aos="fade-up" style="color:#12263F;") De acuerdo con las observaciones recibidas por el cliente se inspeccionan de nuevo los obstáculos que impiden la optimización del producto obtenido y se hacen las adaptaciones necesarias.
      .col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/tema2/12.svg')
          .tarjeta.color-primario(style="background-color:#E1DDFC;")
            .p-4
              p.text-center(data-aos="fade-up" style="color:#12263F;") En la #[strong(style="color:#12263F;") Retrospectiva], es decir el día que se tiene previsto terminar la iteración, se hace nuevamente una reunión de 1 o 2 horas con el cliente para realizar una demostración del cumplimiento de los requisitos planteados inicialmente plasmados ahora sí en el producto incremental, resultado de la iteración completada.
    
    .row.mt-5
      .col-auto.pe-0(style="place-self:center;")
        figure
          img(src="@/assets/curso/tema1/5.svg" data-aos="fade-right")
      .col(style="place-self:center;")
        h3.mb-0(data-aos="fade-right") Características de Scrum
    
    p.mt-5(data-aos="fade-up") Este componente o #[em asset] permite realizar un testeo o evaluación rápida de las funcionalidades que se van incorporando al juego. Es una herramienta que se debe integrar desde la opción de #[em Asset Store] del menú de Unity ya que una vez se instala el programa no es importada de la nube automáticamente.
    p.mt-4(data-aos="fade-up") Pasos para incorporar esta herramienta dentro del programa de Unity:

    TabsA.color-acento-contenido.mt-5
      .tarjeta.color-secundario.p-4(titulo="Elaboración de pila de producto")
        p Se refiere a los requerimientos que el cliente hace al equipo desarrollador, los cuales son elaborados en forma de pila o lista de requisitos, que se deben priorizar para su desarrollo. 
      .tarjeta.color-secundario.p-4(titulo="Planificación flexible")
        p El cliente puede aumentar o cambiar los requisitos durante el proceso de desarrollo de cada iteración, esto significa que lo definido en un comienzo no se toma como una camisa de fuerza y el equipo debe estar en capacidad de dar respuesta a las nuevas necesidades.
      .tarjeta.color-secundario.p-4(titulo="Desarrollo incremental")
        p Las iteraciones se planifican con el cliente de tal manera que el resultado sea un producto incremental, es decir, una parte de este hasta obtener el resultado final. Una vez desarrolladas las funciones con las que se llevan a cabo operaciones, se presentan al cliente para que éste pueda probarlas y hacer el #[em feedback] inmediatamente. El equipo inspecciona y hace las adaptaciones si son necesarias antes de terminar la iteración.
    
    h4.mt-5(data-aos="fade-up") Ejemplo de Scrum

    p.mt-4(data-aos="fade-up") El siguiente ejemplo es lo que se haría en la fase 1 de la situación planteada anteriormente sobre lo que se debe realizar en la o las iteraciones para que un usuario pueda ingresar a un videojuego.
    p.mt-4(data-aos="fade-up") En la siguiente tabla se observa que hay una sola iteración compuesta de seis (6) tareas a desarrollar, el equipo se puede repartir por parejas para ejecutar cada una de ellas. Cada pareja tiene determinados días para el desarrollo de la iteración.

    .tabla-a.color-acento-botones.mt-5
      table
        thead(style="border:0;")
          tr(style="background-color:#8979F3;")
            th.text-white(style="border:0;") Lista de requisitos #[br] priorizada
            th.text-white(style="border:0;") Lista de tareas de la iteración
            th.text-white(style="border:0;") Planificación de iteración
        tbody
          tr(style="background-color:#F6F6F6;")
            td.p-4.text-center(style="border:0;border-right:1px #AFAFAF solid;") Entrar al juego.
            td.p-4(style="border:0;border-right:1px #AFAFAF solid;") 1. Codificación de Login/Logout (entrada/ salida).
            td.p-4 #[strong Equipo:]   2 personas desarrollan. #[br] #[strong Tiempo:]  5 días. #[br] #[Strong Producto:] interfaz (pantalla) de ingreso al juego, menú de inicio de sesión, alternativas de #[em Login y Logout].
          tr(style="background-color:#FFF;")
            td.p-4.text-center(style="border:0;border-right:1px #AFAFAF solid;") Hacer registro.
            td.p-4(style="border:0;border-right:1px #AFAFAF solid;") 2. Codificación de formulario para registro de datos y alias.
            td.p-4 #[strong Equipo:]   2 personas desarrollan. #[br] #[strong Tiempo:]  5 días. #[br] #[Strong Producto:] formulario para registro de datos, con nombre, apellido, alias, edad, contraseña.
          tr(style="background-color:#F6F6F6;")
            td.p-4.text-center(style="border:0;border-right:1px #AFAFAF solid;") Colocar alias.
            td.p-4(style="border:0;border-right:1px #AFAFAF solid;") 3. Elaboración de base de datos de consulta de alias.
            td.p-4 #[strong Equipo:]   2 personas desarrollan. #[br] #[strong Tiempo:]  5 días. #[br] #[Strong Producto:] formulario para registro de datos, con nombre, apellido, alias, edad, contraseña.
          tr(style="background-color:#FFF;")
            td.p-4.text-center(style="border:0;border-right:1px #AFAFAF solid;") Empezar a jugar.
            td.p-4(style="border:0;border-right:1px #AFAFAF solid;") 4. Diseño de funciones del juego. #[br] 5. Codificación de instrucciones para activar funciones iniciales en la interfaz inicial del usuario.
            td.p-4 #[strong Equipo:]   2 personas desarrollan. #[br] #[strong Tiempo:]  5 días. #[br] #[Strong Producto:] diseño funciones del juego. #[br] #[br] #[strong Equipo:]   2 personas desarrollan. #[br] #[strong Tiempo:]  5 días. #[br] #[Strong Producto:]  funciones de la interfaz del usuario activadas.
          tr(style="background-color:#F6F6F6;")
            td.p-4.text-center(style="border:0;border-right:1px #AFAFAF solid;") Interrumpir el juego.
            td.p-4(style="border:0;border-right:1px #AFAFAF solid;") 6. Codificación de instrucciones para parar las funciones que se estén ejecutando y guardar la memoria donde quedaron para cuando se reinicie el juego.
            td.p-4 #[strong Equipo:]   2 personas desarrollan. #[br] #[strong Tiempo:]  7 días. #[br] #[Strong Producto:] función de interrupción del juego activada.
          tr(style="background-color:#FFF;")
            td.p-4.text-center(style="border:0;border-right:1px #AFAFAF solid;") Salir.
            td.p-4(style="border:0;border-right:1px #AFAFAF solid;") Codificación de Login/Logout (entrada/ salida) ya se hizo en la tarea 1.
            td.p-4 #[Strong Producto:] función salir activada por el usuario cuando desee abandonar el juego.
    
    p.mt-5(data-aos="fade-up") Si se quiere profundizar en estos temas, se recomienda la siguiente lectura complementaria:

    .row.mt-5.p-4(style="background-color:#C0EBF6;border-radius:10px;")
      .col-md-3.col-lg-1.d-flex.justify-content-center.mb-4.mb-lg-0(style="place-self:center;")
        figure.m-auto.d-flex.justify-content-center
          img(src="@/assets/curso/tema2/13.svg" data-aos="fade-left" style="max-width:100px;display:inline;")
      .col-lg-8.col-md-6.mb-4.mb-lg-0(style="place-self:center;")
        h3(data-aos="fade-up") Lecturas de consulta
        p.mb-0(data-aos="fade-up") Proyectos ágiles.org. (s.f). Desarrollo iterativo e incremental.
        p.mt-3(data-aos="fade-up") Pérez, O (2011). Cuatro enfoques metodológicos para el desarrollo de software.
      .col-lg-3.col-md-3.text-center(style="place-self:center;")
        a.boton.color-acento-botones.mb-3.d-block(href="https://proyectosagiles.org/desarrollo-iterativo-incremental/" target="_blank" data-aos="fade-left")
          span Enlace web
          i.fas.fa-link
        a.boton.color-acento-botones.d-block(href="https://revistas.uniminuto.edu/index.php/Inventum/article/view/9/9" target="_blank" data-aos="fade-left")
          span Enlace web
          i.fas.fa-link

      

</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    indicadorTarjetaFlip: true,
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>
<style lang="sass">
.cont_2_1
  background: url(../assets/curso/tema2/8.png)
  background-size: cover
  background-repeat: no-repeat
  background-position: center
  border-radius: 20px
.tabs-a__content-item--active .tarjeta.color-secundario
  background-color: #DFF5FA
.tabs-a__content-item--active .tarjeta.color-secundario *
  color: #12263F !important
.tabs-a.color-acento-contenido .tabs-a__tab__selected
  color: #fff !important
.tabs-a__tab
  background-color: #E8E8E8
.pasos-a.color-acento-contenido .pasos-a__circle div
  color: #fff
.linea-tiempo-d__item__number.tarjeta.tarjeta--gris
  background-color: #3C3FA7
  color: white
  font-weight: bold
  border-radius: 0px
.linea-tiempo-d.color-secundario .linea-tiempo-d__item--selected .linea-tiempo-d__item__number
  background-color: #F1BF5E
  color: #12263F
  font-weight: bold
.linea-tiempo-d.color-secundario .linea-tiempo-d__item--selected .linea-tiempo-d__item__content.tarjeta.tarjeta--gris
  background-color: #E5F7FB
.linea-tiempo-d__item__content__title span
  font-weight: bold
.tabs-b__tab
  border-bottom: 0px
  background-color: #E5F7FB
.tabs-b.color-acento-contenido .tabs-b__tab--active
  background-color: #fff
.tabs-b__tab img
  filter: grayscale(1)
.tabs-b__tab.tabs-b__tab--active img
  filter: grayscale(0)
.slyder-f__btn i
  color: #F1BF5E
</style>
