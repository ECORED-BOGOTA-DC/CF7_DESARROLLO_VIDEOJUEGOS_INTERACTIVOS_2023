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
        h5 Figura 1.
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
    
    p.mt-5(data-aos="fade-up") Cuando se crea un perfil de la aplicación, hay algunas cosas que puede hacer para garantizar la coherencia entre las sesiones de creación de perfiles y para asegurarse de que los procesos que utiliza Unity no afecten los datos de creación de perfiles:

    .tabla-a.color-acento-botones.mt-5
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
            td.p-4(style="border:0;border-right:1px #AFAFAF solid;") • Abrir carpeta de asset fondos.
            td.p-4 • Abrir carpeta de asset fondos.
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
    
    p.mt-5(data-aos="fade-up") Cuando se crea un perfil de la aplicación, hay algunas cosas que puede hacer para garantizar la coherencia entre las sesiones de creación de perfiles y para asegurarse de que los procesos que utiliza Unity no afecten los datos de creación de perfiles:

    .row.mt-5
      .col-lg-6.mb-4.mb-lg-0
        .p-4.h-100.cont_2_1
          .p-3.text-center.text-white(style="background-color:#8979F3;border-radius:15px;")
            p.mb-0.fw-bold(data-aos="fade-up") Iteración 3 para colocar el superhéroe en el mismo lugar del fondo
          .col-lg-11.m-auto.mt-4
            p(data-aos="fade-up") •.  Hacer clic en el botón que está en el círculo.
            figure.mt-4.m-auto.text-center
              img(src="@/assets/curso/tema2/3.svg" style="display:inline;max-width:300px;" data-aos="zoom-in-up")
              p.text-center(data-aos="fade-up") #[em Order layer]
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
            p(data-aos="fade-up") •   El superhéroe está seleccionado debajo del fondo; ya que se observa el recuadro con 4 puntos azules y en la ventana del inspector se aprecian los datos de escala, posición y en la parte de abajo la opción order layer con el valor de 0:
            figure.mt-4.m-auto.text-center
              img(src="@/assets/curso/tema2/6.svg" style="display:inline;max-width:500px;" data-aos="zoom-in-up")
              p.text-center(data-aos="fade-up") #[em Order layer]
            p.mt-5(data-aos="fade-up") •   El valor de order layer se pone en 1 para que el superhéroe se coloque en el primer nivel.
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
        p.mb-0(data-aos="fade-up") Después de cada iteración se puede obtener el feedback del usuario y hacer los ajustes requeridos.  
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
    
    p(data-aos="fade-up") El Proceso Unificado Racional – PUR es una metodología de desarrollo de software que se basa en componentes e interfaces para analizar, diseñar, codificar, implementar, probar y documentar sistemas orientados a objetos y se vale para ello de un Lenguaje Unificado de Modelado - UML.

    Separador.mt-5

    .titulo-segundo
      h2#t_2_2 2.2 Scrum
    
    p(data-aos="fade-up") Es una metodología de trabajo en equipo para el desarrollo de un proyecto. El término fue extraído del deporte Rugby en el que un número de jugadores de cada equipo hace una formación fija para entrar a disputar la tenencia del balón y cada vez que este sale del juego se hace un nuevo Scrum o formación. Esta metodología fue desarrollada por Nonaka y Takeuchi en 1986 para agilizar el desarrollo de productos comerciales en cualquier sector de la economía. Es aplicable en la industria tecnológica para el desarrollo de software de diferentes categorías entre ellas los videojuegos.

    p.mt-5.fw-bold(data-aos="fade-up") Elementos Scrum:
        
    TabsA.color-acento-contenido.mt-4
      .tarjeta.color-secundario.p-4(titulo="Equipo de trabajo")
        h4 Equipo de trabajo
        p Está conformado por el cliente o dueño del producto, el Scrum manager o gestionador del proyecto, el equipo Scrum que desarrolla el producto, los stakeholders o asesores del proyecto (internos o externos) y los usuarios que realizan las pruebas del producto.
      .tarjeta.color-secundario.p-4(titulo="Pila de producto")
        h4 Pila de producto
        p Es la lista priorizada de requisitos para la elaboración del producto, en la que puede intervenir todo el equipo para su elaboración, pero solo el cliente y el director del equipo es responsable de decidir sobre ella.
      .tarjeta.color-secundario.p-4(titulo="Artefactos")
        h4 Artefactos
        p Están representados por la información clave generada en el proceso de desarrollo del producto; entre la que se encuentra la pila de producto, la planificación de la pila y la retrospectiva.
      .tarjeta.color-secundario.p-4(titulo="Flujo de actividades")
        h4 Flujo de actividades
        p Es la lista de tareas de iteración que se deben ejecutar para el desarrollo de la pila del sprint.
      .tarjeta.color-secundario.p-4(titulo="Fases")
        h4 Fases
        p Corresponde a las diferentes etapas del proceso que se lleva a cabo para obtener el producto final.
    
    .row.mt-5
      .col-auto.pe-0(style="place-self:center;")
        figure
          img(src="@/assets/curso/tema1/5.svg" data-aos="fade-right")
      .col(style="place-self:center;")
        h3.mb-0(data-aos="fade-right") Fases para el desarrollo de un videojuego en el modelo Scrum
    
    p.mt-4(data-aos="fade-up") Este componente o asset permite realizar un testeo o evaluación rápida de las funcionalidades que se van incorporando al juego. Es una herramienta que se debe integrar desde la opción de Asset Store del menú de Unity ya que una vez se instala el programa no es importada de la nube automáticamente.
    p.mt-4(data-aos="fade-up") Pasos para incorporar esta herramienta dentro del programa de Unity:

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
    
    p.mt-5(data-aos="fade-up") Este componente o asset permite realizar un testeo o evaluación rápida de las funcionalidades que se van incorporando al juego. Es una herramienta que se debe integrar desde la opción de Asset Store del menú de Unity ya que una vez se instala el programa no es importada de la nube automáticamente.
    p.mt-4(data-aos="fade-up") Pasos para incorporar esta herramienta dentro del programa de Unity:

    TabsA.color-acento-contenido.mt-5
      .tarjeta.color-secundario.p-4(titulo="Elaboración de pila de producto")
        h4 Elaboración de pila de producto
        p Se refiere a los requerimientos que el cliente hace al equipo desarrollador, los cuales son elaborados en forma de pila o lista de requisitos, que se deben priorizar para su desarrollo. 
      .tarjeta.color-secundario.p-4(titulo="Planificación flexible")
        h4 Planificación flexible
        p El cliente puede aumentar o cambiar los requisitos durante el proceso de desarrollo de cada iteración, esto significa que lo definido en un comienzo no se toma como una camisa de fuerza y el equipo debe estar en capacidad de dar respuesta a las nuevas necesidades.
      .tarjeta.color-secundario.p-4(titulo="Desarrollo incremental")
        h4 Desarrollo incremental
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
        a.boton.color-acento-botones.d-block(href="https://core.ac.uk/download/pdf/230219821.pdf" target="_blank" data-aos="fade-left")
          span Enlace web
          i.fas.fa-link

      

</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
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
</style>
