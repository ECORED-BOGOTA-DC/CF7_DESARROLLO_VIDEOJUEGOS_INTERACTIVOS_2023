<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Modelos de prueba de usabilidad
    
    p(data-aos="fade-up") Probar la usabilidad de un proyecto, producto o, en este caso, un videojuego es, según Lorés (2006), evaluar que este tenga interacción con el usuario. Las pruebas de usabilidad comprenden la utilización de metodologías y técnicas para determinar en un producto su capacidad y facilidad de ser usado y así lograr una experiencia de usuario satisfactoria.

    .row.mt-5
      .col-lg-6.mb-4.mb-lg-0(style="place-self:center;")
        figure
          img(src="@/assets/curso/tema3/1.png" data-aos="fade-right")
      .col-lg-6(style="place-self:center;")
        .bloque-texto-d.color-acento-contenido.p-4
          .bloque-texto-d__texto.mb-2
            i.fas.fa-quote-left(data-aos="fade-right")
            p(data-aos="fade-up") Lorés se refirió a la definición que hace la ISO 98 sobre #[strong usabilidad] como la medida en la que un producto puede ser usado por los usuarios para lograr sus objetivos con efectividad y eficiencia en un contexto específico, pero este término está ligado al de #[strong experiencia de usuario (UX)] el cual, según la International Standard ISO 9241-210 (2010), tiene que ver con “las percepciones y respuestas de la persona, resultantes del uso y/ o uso anticipado de un producto, sistema o servicio”.
            i.fas.fa-quote-right(data-aos="fade-left")
        p.mt-4(data-aos="fade-up") En el proceso de diseño y desarrollo de videojuegos se debe evaluar permanentemente la experiencia del usuario al interactuar con el producto, de tal manera que llegue a tener plena satisfacción y de esta forma evitar rediseños posteriores que implique mayores recursos de los que se habían presupuestado.
    
    .row.mt-5.p-4.col-lg-10.m-auto(style="background-color:#C0EBF6;border-radius:10px;")
      .col-md-3.col-lg-1.d-flex.justify-content-center.mb-4.mb-lg-0(style="place-self:center;")
        figure.m-auto.d-flex.justify-content-center
          img(src="@/assets/curso/tema3/2.svg" data-aos="fade-left" style="max-width:100px;display:inline;")
      .col-lg-8.col-md-6.mb-4.mb-lg-0(style="place-self:center;")
        h3(data-aos="fade-up") Pruebas de Usabilidad con Veronica Traynor
        p.mb-0(data-aos="fade-up") Para lograr usabilidad y por consiguiente una UX satisfactoria en un videojuego se debe chequear entonces que la interacción del juego con el usuario fluya de manera natural, para ello se pueden hacer pruebas antes de empezar la fase de diseño y programación:
      .col-lg-3.col-md-3.text-center(style="place-self:center;")
        a.boton.color-acento-botones(href="https://youtu.be/uh4sZmQiRr4" target="_blank")
          span Ver video
          i.fas.fa-play
    
    p.mt-5(data-aos="fade-up") El video refiere una prueba realizada individualmente a dos personas de edades diferentes en distintos momentos y de las cuales el diseñador ha observado y extraído los detalles respecto a las lógicas mentales que utilizan la una y la otra para realizar la misma acción.
    p.mt-4(data-aos="fade-up") En las pruebas de usabilidad se observan aspectos del usuario y del sistema. En los usuarios se observa la forma en que este usa el producto para conseguir el objetivo y en el sistema la respuesta que provee el programa ante las interacciones que el usuario realiza con el producto.
    p.mt-4(data-aos="fade-up") Lorés (2006) ha clasificado en modelos o metodologías la forma de evaluar la usabilidad y dentro de ellas menciona técnicas que se pueden utilizar para probarla:

    .col-lg-6.m-auto.mt-5
      .titulo-sexto.color-acento-contenido
        h5 Figura 2.
        span Pruebas de usabilidad en videojuegos
      figure
        img(src="@/assets/curso/tema3/3.svg" data-aos="zoom-in-up")
    
    p.mt-5(data-aos="fade-up") En la figura anterior se observan claramente tres modelos o metodologías de prueba de usabilidad los que, a su vez, poseen técnicas que se pueden aplicar para probar el producto.

    Separador.mt-5

    .titulo-segundo
      h2#t_3_1 3.1 Modelo de inspección 
    
    p(data-aos="fade-up") Esta metodología comprende un conjunto de técnicas que se evalúan y se enfocan en la interfaz del usuario (UI), es decir se basa en los puntos de interacción y comunicación del usuario con los aspectos de visualización. En el caso del videojuego se evalúan los criterios que tienen que ver con elementos específicos de los escenarios con los que interactúa el jugador. Dentro de este método se encuentran las siguientes técnicas:

    .row.mt-5
      .col-auto.pe-0(style="place-self:center;")
        figure
          img(src="@/assets/curso/tema1/5.svg" data-aos="fade-right")
      .col(style="place-self:center;")
        h3.mb-0(data-aos="fade-right") Técnica de evaluación heurística
    
    p.mt-4(data-aos="fade-up") consiste en el análisis de la interfaz con la cual interactúa el usuario para determinar si responde a los siguientes principios de usabilidad, donde cada principio corresponde a una “H” en la heurística:

    TabsC.color-acento-contenido.mt-4
      .py-3.py-md-4(titulo="H1")
        .row
          .col-lg-5.mb-4.mb-lg-0
            h4 Visibilidad del estado del sistema
            p El usuario debe recibir una retroalimentación del estado del producto en cada instante para saber qué pasa cuando interactúa con él. 
            p.mt-4.fw-bold(style="color:#483BCC;") Por ejemplo, en un videojuego se debe poder determinar si el programa se está cargando para empezar a jugar o si hay algún tipo de error.
          .col-lg-7
            figure
              img(src='@/assets/curso/tema3/5.png')
            figcaption.fw-normal(style="background-color:#CBFAFF;") Cargando
      .py-3.py-md-4(titulo="H2")
        .row
          .col-lg-5.mb-4.mb-lg-0
            h4 Relación del producto con el mundo real
            p Se debe brindar al usuario toda la información necesaria para que no tenga dudas o cometa errores en la acción que va a realizar. 
            p.mt-4.fw-bold(style="color:#483BCC;") Por ejemplo, si se va a registrar en el juego debe poder ingresar sus datos a través de un formulario donde se le pregunte lo mínimo necesario como la edad, ya que todos los juegos no son aptos para menores.
          .col-lg-7
            figure
              img(src='@/assets/curso/tema3/6.png')
            figcaption.fw-normal(style="background-color:#CBFAFF;") Registro
      .py-3.py-md-4(titulo="H3")
        .row
          .col-lg-5.mb-4.mb-lg-0
            h4 Libertad al usuario
            p El sistema debe permitir que el usuario cancele un proceso que estaba realizando sin finalizarlo, de tal manera que esta acción no representa compromisos o penalizaciones que puedan llegar a afectar en cualquier aspecto de su estado emocional o material. 
            p.mt-4.fw-bold(style="color:#483BCC;") Por ejemplo, si el jugador intentó comprar el juego y después se arrepiente.
          .col-lg-7
            figure
              img(src='@/assets/curso/tema3/7.png')
            figcaption.fw-normal(style="background-color:#CBFAFF;") Compra
      .py-3.py-md-4(titulo="H4")
        .row
          .col-lg-5.mb-4.mb-lg-0
            h4 Consistencia
            p Utilizar un patrón de diseño de los elementos del producto no solo le proporciona coherencia sino claridad y facilidad de uso a la hora de ser utilizado por el usuario. 
            p.mt-4.fw-bold(style="color:#483BCC;") Por ejemplo, cuando se diseñan botones se deben diseñar del mismo color y tamaño.
          .col-lg-7
            figure
              img(src='@/assets/curso/tema3/8.png')
            figcaption.fw-normal(style="background-color:#CBFAFF;") Registro
      .py-3.py-md-4(titulo="H5")
        .row
          .col-lg-5.mb-4.mb-lg-0
            h4 Prevención de errores
            p Se deben dar instrucciones claras a los usuarios sobre cómo manejar el producto y las acciones que deben realizar para evitar su mal uso y, posteriormente, el abandono, debido a los errores que puede arrojar. 
            p.mt-4.fw-bold(style="color:#483BCC;") Por ejemplo, dibujar unas flechas en el camino para indicarle al jugador por dónde seguir.
          .col-lg-7
            figure
              img(src='@/assets/curso/tema3/9.png')
            figcaption.fw-normal(style="background-color:#CBFAFF;") Indicación
      .py-3.py-md-4(titulo="H6")
        .row
          .col-lg-5.mb-4.mb-lg-0
            h4 Recordación
            p El producto debe proporcionar toda la información posible en aquellos momentos donde el usuario necesita recordar los detalles clave que le permitan confirmar la decisión que está a punto de tomar.
            p.mt-4.fw-bold(style="color:#483BCC;") Por ejemplo si el jugador quiere adquirir el videojuego se le debe proporcionar el detalle del valor y no esperar a que él recurra a su memoria.
          .col-lg-7
            figure
              img(src='@/assets/curso/tema3/10.png')
            figcaption.fw-normal(style="background-color:#CBFAFF;") Recordación
      .py-3.py-md-4(titulo="H7")
        .row
          .col-lg-5.mb-4.mb-lg-0
            h4 Flexibilidad y eficiencia de uso
            p Se refiere a la capacidad de utilización del producto independientemente del tipo de usuario; es decir, si a este se le facilita el uso de las herramientas tecnológicas o si, por el contrario, no le es sencillo ni familiar hacerlo.
            p.mt-4.fw-bold(style="color:#483BCC;") Por ejemplo se puede poner un mensaje cuando pase el #[em(style="color:#483BCC;") mouse] por cada botón para indicar qué acción puede realizar en el juego.
          .col-lg-7
            figure
              img(src='@/assets/curso/tema3/11.png')
            figcaption.fw-normal(style="background-color:#CBFAFF;") Indicador acciones realizar en el juego
      .py-3.py-md-4(titulo="H8")
        .row
          .col-lg-5.mb-4.mb-lg-0
            h4 Diseño minimalista
            p Es importante no saturar de información al usuario del producto, mostrándole contenido innecesario que lo distraiga y lo desvíe del objetivo de utilización del producto.
            p.mt-4.fw-bold(style="color:#483BCC;") Por ejemplo las imágenes de las escenas deben contener pocos elementos para que el usuario entienda mejor las mecánicas del juego.
          .col-lg-7
            figure
              img(src='@/assets/curso/tema3/12.png')
            figcaption.fw-normal(style="background-color:#CBFAFF;") Minimalista
      .py-3.py-md-4(titulo="H9")
        .row
          .col-lg-5.mb-4.mb-lg-0
            h4 Reconocer y corregir errores
            p Proporciona información al usuario de lo que está generando errores en la utilización del producto multimedia, y le brinda recomendaciones de las acciones que puede realizar para un buen uso del sistema. 
            p.mt-4.fw-bold(style="color:#483BCC;") Por ejemplo, si el jugador desea descargar el videojuego y se presenta un problema, el sistema debe indicarle cuál fue el error.
          .col-lg-7
            figure
              img(src='@/assets/curso/tema3/13.png')
            figcaption.fw-normal(style="background-color:#CBFAFF;") Errores
      .py-3.py-md-4(titulo="H10")
        .row
          .col-lg-5.mb-4.mb-lg-0
            h4 Ayuda y documentación
            p Se deben detectar las dudas más comunes de los usuarios cuando está usando el producto e incluir la información necesaria para que él mismo pueda encontrar la manera de resolverlas. De esta forma, el producto se hace auto gestionable.
            p.mt-4.fw-bold(style="color:#483BCC;") Por ejemplo, incluir una explicación de cómo usar cada icono del juego haciendo clic en él.
          .col-lg-7
            figure
              img(src='@/assets/curso/tema3/14.png')
            figcaption.fw-normal(style="background-color:#CBFAFF;") Ayudas
    
    p.mt-5(data-aos="fade-up") Para aplicar esta técnica se deben definir las heurísticas a evaluar y se llevan a cabo métricas de evaluación a través de una tabla de relevancia que mide la severidad del error o falla del producto y una tabla de frecuencia que determina cuántas veces ha fallado el producto en las heurísticas seleccionadas. En el ejemplo que se expone más adelante se verá con más detalle su aplicación.

    Separador.mt-5

    .titulo-segundo
      h2#t_3_2 3.2 Modelo de indagación 

    p(data-aos="fade-up") En este método se investiga acerca de lo que el usuario espera resolver con el producto, por eso es recomendable realizarlo en la fase de diseño y también en la fase de terminación, puesto que es en estos dos momentos, donde se verifica lo que el usuario necesita antes y lo que puede satisfacerlo cuando hace uso del producto. 
    p.mt-4(data-aos="fade-up") Las técnicas utilizadas en este modelo tienen que ver directamente con el usuario, haciéndole preguntas verbales o escritas sobre el producto para obtener respuestas precisas que conduzcan a la generación de ideas de diseño y un posterior desarrollo a la medida.

    .row.mt-5
      .col-auto.pe-0(style="place-self:center;")
        figure
          img(src="@/assets/curso/tema1/5.svg" data-aos="fade-right")
      .col(style="place-self:center;")
        h3.mb-0(data-aos="fade-right") Técnica de cuestionario
    
    p.mt-4(data-aos="fade-up") En esta técnica se puede seleccionar un grupo amplio de personas que podrán con testear las preguntas en tiempos diferentes y se puede realizar cuantas veces sea necesario; por ello es la más flexible de utilizar, incorporando varios tipos de preguntas: 

    ol.lista-ol--cuadro.lista-ol--separador.mt-5
      li(data-aos="fade-up")
        .lista-ol--cuadro__vineta
          span.fw-bold(style="background-color:#8979F3;") a
        | #[strong Preguntas de tipo general:] son aquellas que ayudan a identificar el perfil del usuario como sexo, edad, nivel de educación, cargo que ocupa en la entidad, lugar de residencia, dirección, email, entre otras.
      li(data-aos="fade-up")
        .lista-ol--cuadro__vineta
          span.fw-bold(style="background-color:#8979F3;") b
        | #[strong Preguntas abiertas:] permiten recoger información de apreciación sobre algo en particular, interviene la parte subjetiva por que la respuesta es dada de acuerdo con el juicio del usuario, son útiles para atacar otros puntos de vista del producto.
      li(data-aos="fade-up")
        .lista-ol--cuadro__vineta
          span.fw-bold(style="background-color:#8979F3;") c
        | #[strong Preguntas cerradas:] permiten al usuario escoger entre varias opciones que se le presentan, por ello son más precisas y concretas, fáciles de tabular, graficar y analizar después, por ello se pueden obtener rápidamente los resultados. 
      li(data-aos="fade-up")
        .lista-ol--cuadro__vineta
          span.fw-bold(style="background-color:#8979F3;") d
        | #[strong Preguntas tipo escala:] el usuario debe escoger una opción de una escala numérica. Por ejemplo: ¿la aplicación es comprensible? 
        .mt-4.col-lg-8.m-auto
          figure
            img(src="@/assets/curso/tema3/15.png")
      li.mt-4(data-aos="fade-up")
        .lista-ol--cuadro__vineta
          span.fw-bold(style="background-color:#8979F3;") e
        |  #[strong Preguntas con opción múltiple:] se presentan al usuario varias opciones de respuesta a una pregunta dada, para solamente seleccione una. Por ejemplo: ¿cuál de las siguientes opciones le resultó más fácil de utilizar?
        .mt-4.col-lg-8.m-auto
          figure
            img(src="@/assets/curso/tema3/16.png")
    
    .row.mt-5
      .col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/tema3/17.png')
          .tarjeta.color-primario(style="background-color:#E1DDFC;")
            .p-4
              h4.text-center(data-aos="fade-up" style="color:#12263F;") Pre-tarea
              p.text-center(data-aos="fade-up" style="color:#12263F;") Antes de que el usuario realice una tarea con el producto con el propósito de medir sus habilidades con el manejo de los sistemas informáticos.
      .col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/tema3/18.png')
          .tarjeta.color-primario(style="background-color:#E1DDFC;")
            .p-4
              h4.text-center(data-aos="fade-up" style="color:#12263F;") Post-tarea
              p.text-center(data-aos="fade-up" style="color:#12263F;") Después de que el usuario ha interactuado con alguna función del producto para medir su usabilidad.
      .col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/tema3/19.png')
          .tarjeta.color-primario(style="background-color:#E1DDFC;")
            .p-4
              h4.text-center(data-aos="fade-up" style="color:#12263F;") Post-test
              p.text-center(data-aos="fade-up" style="color:#12263F;") Después de que el usuario ha interactuado con todas las tareas que se le han planteado y se pueda medir su percepción global del producto.
    
    p.mt-5(data-aos="fade-up") Se pueden realizar cuestionarios en diferentes momentos:

    Separador.mt-5

    .titulo-segundo
      h2#t_3_3 3.3 Modelo de test
    
    .col-lg-10.m-auto
      .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/tema3/20.png')})`}"
        )
        .bloque-texto-g__texto.p-4
          p.mb-0(data-aos="fade-up") Este método se utiliza cuando se tiene el prototipo del producto, para lo cual el diseñador selecciona un grupo de usuarios a los que se les asignan diferentes tareas a ser ejecutadas para determinar cómo el sistema entrega los resultados de lo que se le está solicitando. Los resultados de esta prueba son utilizados para determinar si el diseño de las interfaces puede soportar las tareas que los usuarios están realizando con el producto.
    
    .row.mt-5
      .col-auto.pe-0(style="place-self:center;")
        figure
          img(src="@/assets/curso/tema1/5.svg" data-aos="fade-right")
      .col(style="place-self:center;")
        h3.mb-0(data-aos="fade-right") Técnica de test de prestaciones
    
    p.mt-4(data-aos="fade-up") Esta técnica se utiliza para medir aspectos del uso del producto, por ello se debe llevar a cabo sobre el prototipo o sobre el producto terminado de tal forma que el evaluador pueda visualizar el número de errores que arroja el aplicativo, o las percepciones de los usuarios frente a lo que el producto lo puede beneficiar, por lo que se considera una técnica cuantitativa y cualitativa, en ella se debe: 

    ol.lista-ol--cuadro.lista-ol--separador.mt-5
      li(data-aos="fade-up")
        .lista-ol--cuadro__vineta
          span.fw-bold(style="background-color:#8979F3;") a
        | Seleccionar usuarios reales o potenciales que realmente usarán el producto.
      li(data-aos="fade-up")
        .lista-ol--cuadro__vineta
          span.fw-bold(style="background-color:#8979F3;") b
        | Entregar instrucciones claras acerca de cómo presentar la prueba.
      li(data-aos="fade-up")
        .lista-ol--cuadro__vineta
          span.fw-bold(style="background-color:#8979F3;") c
        | Elaborar una lista de tareas que los usuarios realizarán con el producto y analizar la manera en que lo utilicen y el tiempo que tardan en ejecutar cada tarea asignada.
      li(data-aos="fade-up")
        .lista-ol--cuadro__vineta
          span.fw-bold(style="background-color:#8979F3;") d
        | Observar el comportamiento del usuario durante la prueba.
      li(data-aos="fade-up")
        .lista-ol--cuadro__vineta
          span.fw-bold(style="background-color:#8979F3;") e
        | No entregar pistas ni orientaciones al usuario de cómo usar o recorrer la aplicación/producto.
      li(data-aos="fade-up")
        .lista-ol--cuadro__vineta
          span.fw-bold(style="background-color:#8979F3;") f
        | Grabar las expresiones del usuario y la forma de usar la aplicación o el producto.
      li(data-aos="fade-up")
        .lista-ol--cuadro__vineta
          span.fw-bold(style="background-color:#8979F3;") g
        | Analizar los datos recolectados en la ejecución de las tareas, los problemas detectados para llevar a cabo soluciones que mejoren la usabilidad del producto.
    
    Separador.mt-5

    .titulo-segundo
      h2#t_3_4 3.4 Ejemplo de aplicación
    
    p(data-aos="fade-up") Partiendo del supuesto que el equipo de diseño ha creado un juego llamado “La isla de los tesoros escondidos” en este, el jugador debe encontrar tesoros escondidos en diferentes puntos de la isla, a los que se debe llegar haciendo la búsqueda y superando obstáculos. Si el jugador está muy perdido puede solicitar pistas pagando mucho dinero.
    p.mt-4(data-aos="fade-up") El equipo ha decidido hacer pruebas de usabilidad aplicando los siguientes modelos y técnicas:
    .col-lg-6.m-auto.mt-4
      figure
        img(src="@/assets/curso/tema3/21.svg" data-aos="zoom-in-up")
    
    p.mt-5(data-aos="fade-up") Antes de empezar las pruebas, el equipo debe definir con exactitud:

    SlyderF.mt-5(columnas="col-lg-4")
      .tarjeta-avatar
        img(src='@/assets/curso/tema3/22.png')
        .tarjeta.color-primario(style="background-color:#C0EBF6;")
          .p-4
            h4.text-center(data-aos="fade-up" style="color:#12263F;") Objetivo de la prueba
            p.text-center(data-aos="fade-up" style="color:#12263F;") Es el propósito que condujo a la aplicación de la evaluación ya que hay muchos aspectos que se pueden medir en los productos o aplicativos informáticos en general y se debe especificar a cuál de ellos le apuntará las pruebas que se realicen.
      .tarjeta-avatar
        img(src='@/assets/curso/tema3/23.png')
        .tarjeta.color-primario(style="background-color:#C0EBF6;")
          .p-4
            h4.text-center(data-aos="fade-up" style="color:#12263F;") Participantes
            p.text-center(data-aos="fade-up" style="color:#12263F;") Se deben definir las características o competencias que deben cumplir los usuarios para la realización de las pruebas, ya que estos deben ser seleccionados basados en ellas. Dichas características deben ser similares y se recomienda un número de participantes aproximadamente de ocho (8), ya que como dice Nielsen citado por Vega (s. f.) entre más usuarios participen más repetición de resultados se obtendrán, pero esto lo define el equipo de evaluadores de acuerdo con su conveniencia.
      .tarjeta-avatar
        img(src='@/assets/curso/tema3/24.png')
        .tarjeta.color-primario(style="background-color:#C0EBF6;")
          .p-4
            h4.text-center(data-aos="fade-up" style="color:#12263F;") Descripción de la técnica utilizada 
            p.text-center(data-aos="fade-up" style="color:#12263F;") La técnica que se llevará a cabo debe quedar clara para los participantes al igual que el instrumento que se utilice para la medición. Por ejemplo, las tareas a ejecutar deben ser completamente comprensibles para los usuarios, se deben definir con exactitud las H (heurísticas) que se van a evaluar y las preguntas que contestarán no pueden tener rastros de ambigüedad.
      .tarjeta-avatar
        img(src='@/assets/curso/tema3/25.png')
        .tarjeta.color-primario(style="background-color:#C0EBF6;")
          .p-4
            h4.text-center(data-aos="fade-up" style="color:#12263F;") Análisis de resultados
            p.text-center(data-aos="fade-up" style="color:#12263F;") Después de aplicadas las pruebas el equipo debe analizar los resultados obtenidos y determinar cuáles son los aspectos que se deben mejorar en el producto para que la experiencia de usuario sea satisfactoria por cumplir con las condiciones de fácil uso.
    
    .col-lg-10.m-auto.mt-5
      .cajon.color-acento-contenido.p-4(style="background-color:#E1DDFC;")
        p.mb-0(data-aos="fade-up") #[strong Participantes:] se convocaron 4 usuarios que les llama la atención los videojuegos por lo que han jugado alguna vez y poseen entre 18 y 22 años, poseen habilidades tecnológicas por las ocupaciones de estudio y trabajo.
    
    .row.mt-5
      .col-auto.pe-0(style="place-self:center;")
        figure
          img(src="@/assets/curso/tema1/5.svg" data-aos="fade-right")
      .col(style="place-self:center;")
        h3.mb-0(data-aos="fade-right") Primera técnica de usabilidad: heurística
    
    p.mt-4(data-aos="fade-up") Esta técnica se utiliza para medir aspectos del uso del producto, por ello se debe llevar a cabo sobre el prototipo o sobre el producto terminado de tal forma que el evaluador pueda visualizar el número de errores que arroja el aplicativo, o las percepciones de los usuarios frente a lo que el producto lo puede beneficiar, por lo que se considera una técnica cuantitativa y cualitativa, en ella se debe:

    .row.mt-5.pb-3(style="border-bottom:1px #AFAFAF solid;")
      .col-auto.pe-0(style="place-self:center;")
        figure
          img(src="@/assets/curso/tema3/26.svg" data-aos="fade-up")
      .col(style="place-self:center;")
        p.mb-0(data-aos="fade-up") #[strong Objetivo de la prueba:] En el videojuego de “La isla de los tesoros escondidos” el equipo de diseño y desarrollo deberá determinar si la interfaz de usuario presenta saturación de imágenes y si el jugador puede tomar el control del juego con facilidad a través de las diferentes funciones que posee.
    .row.mt-3
      .col-auto.pe-0(style="place-self:center;")
        figure
          img(src="@/assets/curso/tema3/26.svg" data-aos="fade-up")
      .col(style="place-self:center;")
        p.mb-0(data-aos="fade-up") #[strong Descripción de la técnica:] para evaluar los aspectos definidos en el objetivo se utilizará la técnica heurística con la definición de las siguientes H:
    
    .row.mt-5
      .col-lg-6.p-0
        .p-5.h-100(style="background-color:#8979F3;border-radius:15px 0px 0px 15px;")
          figure.col-4.m-auto
            img(src="@/assets/curso/tema3/27.svg" data-aos="zoom-in-up")
          h3.mt-4.text-white.text-center(data-aos="fade-up") Consistencia
          p.mt-4.text-white.text-center(data-aos="fade-up") Está limitado por el #[em.text-white Fillrate] o tasa de relleno que determina, en esencia, la cantidad de píxeles que la tarjeta gráfica es capaz de dibujar o renderizar, procesar y almacenar, por cada unidad de tiempo.
      .col-lg-6.p-0
        .p-5.h-100(style="background-color:#05DBF3;border-radius:0px 15px 15px 0px;")
          figure.col-4.m-auto
            img(src="@/assets/curso/tema3/28.svg" data-aos="zoom-in-up")
          h3.mt-4.text-center(data-aos="fade-up") Diseño minimalista
          p.mt-4.text-center(data-aos="fade-up") Está limitado por el número de Batches o lotes de información gráfica que necesita ser renderizada. En términos generales, se remite al cálculo por el procesador de la máquina y el almacenamiento de información en memoria RAM.
    
    p.mt-5(data-aos="fade-up") Según Fernández (2019), la métrica de evaluación del método heurístico es la que utiliza Nielsen: 

    TabsA.color-acento-contenido.mt-5
      .tarjeta.color-secundario.p-4(titulo="Relevancia del problema")
        .row
          .col-lg-7.mb-4.mb-lg-0
            h4 Relevancia del problema
            p En esta tabla se observa el grado de severidad de un problema presentado con el producto, siendo el más alto (4) cuando el problema es bloqueante o le impide al usuario seguir adelante con otra función, es grave (3) cuando el usuario puede utilizar alguna otra función del producto, es menor (2) cuando puede operar el producto aunque presente algunos inconvenientes, es cosmético (1) cuando el producto es utilizable y funcional aunque requiera en algún momento de realizar cualquier tipo de actualización para su óptimo funcionamiento, y no supone problema (0) cuando el producto funciona correctamente.
          .col-lg-5
            figure
              img(src="@/assets/curso/tema3/29.svg")
      .tarjeta.color-secundario.p-4(titulo="Frecuencia del problema")
        .row
          .col-lg-7.mb-4.mb-lg-0
            h4 Frecuencia del problema
            p Aquí se observa la frecuencia con que la heurística no satisface al usuario y le asigna una calificación, es decir que si se obtuvo un 4 es porque más del 90% de las veces el producto presenta fallas, si es de 3 es porque entre el 50% y el 90% el producto no cumple con lo esperado por algún tipo de problemas, si es de 2 quiere decir el producto presenta problemas entre el 10% y 25% de las veces en que es utilizado, y si es 0 el producto falla máximo el 10% de las veces y se puede considerar que tiene un buen funcionamiento. 
          .col-lg-5
            figure
              img(src="@/assets/curso/tema3/30.svg")
      .tarjeta.color-secundario.p-4(titulo="Heurísticas")
        .row
          .col-lg-7.mb-4.mb-lg-0
            h4 Heurísticas
            p Las afirmaciones diseñadas para cada heurística también pueden ser preguntas si se desea. De acuerdo con las pruebas, el número de veces que se puede dar la falla en la toma del control del videojuego (H4) es cinco (5), ya que es la cantidad de veces que se prueba la afirmación y el número de veces que consideran los usuarios se falla por el exceso de imágenes es de tres (3). El porcentaje se halló dividiendo el número de veces de la falla entre el máximo número de fallas el cual es ocho (8). Si se trasladan los resultados a las tablas de relevancia y frecuencia se obtiene:
          .col-lg-5
            figure
              img(src="@/assets/curso/tema3/31.svg")
      .tarjeta.color-secundario.p-4(titulo="Nivel de gravedad y número de reiteraciones")
        .row
          .col-lg-7.mb-4.mb-lg-0
            h4 Nivel de gravedad y número de reiteraciones
            p En estas dos tablas se observa que, de acuerdo con lo establecido respecto a la relevancia y la frecuencia, el problema con mayor prioridad está en la heurísticas H4 de consistencia con la falla para tomar el control del juego cuando se interacciona con él. La heurística H8 representa un problema menor para el producto, ya que se considera que solo el 38% de la muestra considera que hay exceso de imágenes. Lo anterior quiere decir que el aspecto prioritario a modificar en el producto está en la elaboración de controles más sencillos, siguiendo un patrón de colores o estilos para hacerlo más comprensible y funcional para el jugador.
          .col-lg-5
            figure
              img(src="@/assets/curso/tema3/32.svg")
    
    .row.mt-5
      .col-auto.pe-0(style="place-self:center;")
        figure
          img(src="@/assets/curso/tema1/5.svg" data-aos="fade-right")
      .col(style="place-self:center;")
        h3.mb-0(data-aos="fade-right") Segunda técnica de usabilidad: cuestionario
    
    .row.mt-5.pb-3(style="border-bottom:1px #AFAFAF solid;")
      .col-auto.pe-0(style="place-self:center;")
        figure
          img(src="@/assets/curso/tema3/26.svg" data-aos="fade-up")
      .col(style="place-self:center;")
        p.mb-0(data-aos="fade-up") #[strong Objetivo de la prueba:] en el videojuego de “La isla de los tesoros escondidos” el equipo de diseño y desarrollo deberá determinar si la interfaz de usuario presenta una estructura sencilla con una interacción clara, buena calidad de imágenes sin saturación de ellas y sonidos acordes a las situaciones presentadas.
    .row.mt-3
      .col-auto.pe-0(style="place-self:center;")
        figure
          img(src="@/assets/curso/tema3/26.svg" data-aos="fade-up")
      .col(style="place-self:center;")
        p.mb-0(data-aos="fade-up") #[strong Descripción de la técnica:] para evaluar los aspectos definidos en el objetivo se utilizará la técnica de cuestionario con la definición de las siguientes preguntas:
    
    .col-lg-6.m-auto.mt-5
      figure
        img(src="@/assets/curso/tema3/33.svg" data-aos="zoom-in-up")
    
    p.mt-5(data-aos="fade-up") En el cuestionario anterior se observan diferentes tipos de preguntas; cerradas y abiertas para un análisis de tipo cuantitativo y cualitativo. Cuando se tiene las respuestas de los participantes, se hace una tabulación usando la herramienta ofimática de Excel para la obtención de los resultados. Al igual que el método heurístico se obtienen los porcentajes de las respuestas con preguntas cerradas y en las abiertas se tienen en cuenta todas las observaciones realizadas, por ello, el número de participantes debe ser pequeño. De acuerdo con los porcentajes y las observaciones se priorizan los aspectos con mayor porcentaje de negatividad y deficiencia para realizar las modificaciones y se ejecutan los cambios que requiere cada comentario insatisfactorio de los usuarios.

    .row.mt-5
      .col-auto.pe-0(style="place-self:center;")
        figure
          img(src="@/assets/curso/tema1/5.svg" data-aos="fade-right")
      .col(style="place-self:center;")
        h3.mb-0(data-aos="fade-right") Tercera técnica de usabilidad: test de prestación
    
    .row.mt-5.pb-3(style="border-bottom:1px #AFAFAF solid;")
      .col-auto.pe-0(style="place-self:center;")
        figure
          img(src="@/assets/curso/tema3/26.svg" data-aos="fade-up")
      .col(style="place-self:center;")
        p.mb-0(data-aos="fade-up") #[strong Objetivo de la prueba:] en el videojuego “La isla de los tesoros escondidos” el equipo de diseño y desarrollo deberá identificar las fallas en las funciones de búsqueda, entrega de pistas, cancelación de una búsqueda, registrarse para obtener beneficios y conexión con otro jugador.
    .row.mt-3
      .col-auto.pe-0(style="place-self:center;")
        figure
          img(src="@/assets/curso/tema3/26.svg" data-aos="fade-up")
      .col(style="place-self:center;")
        p.mb-0(data-aos="fade-up") #[strong Descripción de la técnica:] para evaluar los aspectos definidos en el objetivo se utilizará la técnica de test de prestación, utilizando un formato en el que los participantes diligenciarán datos personales básicos y estarán frente al producto terminado realizando la lista de tareas que se indica y anotando los eventos de éxito o de error que perciben en las funcionalidades que se le solicita probar:

    .col-lg-10.mt-5.m-auto
      .p-4(style="border-radius:15px;background-color:#F8F7FE;")
        .col-lg-10.m-auto
          p.fw-bold Test de prestación
          p.mt-4 Método	          : Test de usuario #[br] Técnica	   : Prestación #[br] Instrumento   : Asignación de tareas  #[br] Producto	   : Videojuego “La isla de los tesoros escondidos” #[br] Encargado	   : XXXXXXX #[br] Fecha		   : DD/MM/AAAA
          p.mt-4 Presentación
          p.mt-4 &lt;Nombre de usuario&gt; gracias por su disposición para presentar la prueba de usabilidad del videojuego “La Isla de los tesoros escondidos”, la que nos ayudará a detectar los problemas y fallas de uso, para la implementación de mejoras.
          p.mt-4 Datos del encuestado
          .col-lg-10.m-auto.mt-4
            figure
              img(src="@/assets/curso/tema3/34.png")
          p.mt-4 Instrucciones
          p.mt-4.mb-0 1.	Realizar cada tarea asignada y contestar la pregunta o preguntas después de finalizada. 
          p.mb-0 2.	Manifestar las dudas que le surjan del aplicativo/producto aunque no sean respondidas por el encargado (no puede hacerlo durante la prueba).
          p.mb-0 3.	No hacer preguntas acerca de cómo hacer la tarea asignada al encargado durante la prueba. 
          p.mb-0 4.	El tiempo estimado para la realización de la prueba es de 30 minutos.
          p.mt-4 Lista de tareas
          p.mt-4 Tarea 1: buscar el primer tesoro escondido.
          p.mt-4 ¿Fue fácil encontrar el tesoro que buscaba? (SÍ/NO) porqué (argumente la respuesta).
          br
          br
          p.mt-5 Tarea 2: pedir una pista y hacer el recorrido hasta que encuentre un tesoro. 
          p.mt-4 ¿Pudo encontrar un tesoro con la pista dada por el juego? (SÍ/NO) manifieste cómo lo pudo hacer o por qué no lo pudo hacer.
          br
          br
          p.mt-5 Tarea 3: cancelar la búsqueda de un tesoro.
          p.mt-4 ¿Pudo cancelar la búsqueda que estaba realizando? (SÍ/NO) por qué (explicar que pasó si hubo algún error en la cancelación).
          br
          br
          p.mt-5 Tarea 4: registrarse en el juego para obtener más beneficios. 
          p.mt-4 ¿Pudo realizar el registro para la obtención de beneficios? (SÍ/NO) por qué (explicar qué pasó si hubo algún problema en el registro).
          br
          br
          p.mt-5 TAREA 5: conectarse con otro jugador para hacer una búsqueda conjunta del tesoro. 
          p.mt-4 ¿Pudo establecer contacto con otro jugador para realizar la búsqueda juntos? (SÍ/NO) #[br] por qué (explicar qué pasó si hubo algún problema).
          p.mt-5.mb-5 ¿El aplicativo arrojó algún mensaje de éxito o de error dependiendo de si pudo o no realizar el contacto? SÍ/NO (si la respuesta es SÍ/NO qué mensaje arrojó).
    
    p.mt-5(data-aos="fade-up") Los formatos diligenciados por los participantes son analizados y verificados por el equipo desarrollador para proceder a la corrección de las fallas presentados y volver a realizar la prueba que comprueben las mejoras en la funcionalidad del producto. 
    p.mt-4(data-aos="fade-up") Si se quiere profundizar en las demás técnicas de cada modelo se recomienda la siguiente lectura complementaria:

    .row.mt-5.p-4.col-lg-10.m-auto(style="background-color:#C0EBF6;border-radius:10px;")
      .col-md-3.col-lg-1.d-flex.justify-content-center.mb-4.mb-lg-0(style="place-self:center;")
        figure.m-auto.d-flex.justify-content-center
          img(src="@/assets/curso/tema3/35.svg" data-aos="fade-left" style="max-width:100px;display:inline;")
      .col-lg-8.col-md-6.mb-4.mb-lg-0(style="place-self:center;")
        h3(data-aos="fade-up") Lectura de consulta
        p.mb-0(data-aos="fade-up") Si se quiere profundizar en las demás técnicas de cada modelo se recomienda la siguiente lectura complementaria:
      .col-lg-3.col-md-3.text-center(style="place-self:center;")
        a.boton.color-acento-botones(href="https://aipo.es/libro/pdf/04Evalua.pdf" target="_blank")
          span Descargar
          i.fas.fa-download



</template>

<script>
export default {
  name: 'Tema3',
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
.bloque-texto-d.color-acento-contenido:before
  background-color: #F1EFFE
.bloque-texto-d
  border-top: 0
.bloque-texto-d:before
  top: 57%
  left: 0
.tabs-c__tab.tabs-c__tab--active
  font-weight: bold
.tabs-c__content-item
  padding: 2rem
  background: url(../assets/curso/tema3/4.png)
  background-size: cover
  background-repeat: no-repeat
  background-pposition: center
.tabs-c__header
  margin-bottom: 0px
.slyder-f__btn i
  color: #707BA3
.tabs-a__content-item--active .tarjeta.color-secundario
  background-color: #DFF5FA
.tabs-a__content-item--active .tarjeta.color-secundario *
  color: #12263F !important
.tabs-a.color-acento-contenido .tabs-a__tab__selected
  color: #fff !important
.tabs-a__tab
  background-color: #E8E8E8
</style>
