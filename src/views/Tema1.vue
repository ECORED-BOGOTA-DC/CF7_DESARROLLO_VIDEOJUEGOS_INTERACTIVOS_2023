<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Metodología RITE
    
    .col-lg-10.m-auto
      .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/tema1/1.png')})`}"
        )
        .bloque-texto-g__texto.p-4
          p.mb-0(data-aos="fade-up") Las siglas RITE significan Rapid Iterative Testing Evaluation, es decir testeo rápido iterativo de evaluación. Por consiguiente, la metodología RITE consiste en un método para evaluar el desarrollo de un proyecto a través de ciclos rápidos de ejecución hasta alcanzar el resultado final, a estos ciclos se les llama iteraciones.
          p.mt-4(data-aos="fade-up") Cada iteración representa un bloque de tareas que se realizan, se prueban y evalúan hasta lograr el perfeccionamiento del producto deseado.
      .row.mt-5.p-4(style="background-color:#C0EBF6;border-radius:10px;")
        .col-md-3.col-lg-1.d-flex.justify-content-center.mb-4.mb-lg-0(style="place-self:center;")
          figure.m-auto.d-flex.justify-content-center
            img(src="@/assets/curso/tema1/2.svg" data-aos="fade-left" style="max-width:100px;display:inline;")
        .col-lg-8.col-md-6.mb-4.mb-lg-0(style="place-self:center;")
          h3(data-aos="fade-up") Iterativo e incremental
          p.mb-0(data-aos="fade-up") Existe el método iterativo y el iterativo incremental los que se pueden observar en el video sobre este concepto.
        .col-lg-3.col-md-3.d-flex.justify-content-center(style="place-self:center;")
          a.boton.color-acento-botones(href="" target="_blank" data-aos="fade-left")
            span Ver video
            i.fas.fa-play
    
    p.mt-5(data-aos="fade-up") De acuerdo con lo anterior, en el método iterativo para llevar a cabo un proyecto primero se define el concepto y alcance de este, después se desglosan las tareas que se realizarán en todo el proceso de desarrollo donde cada iteración es la construcción de una parte del concepto, ejecutándose y evaluándose repetidas veces si es necesario y al final se integran las partes construidas hasta lograr el concepto que se ha diseñado del producto final.
        
    .cajon.color-acento-contenido.p-4.mt-5(style="background-color:#E1DDFC;")
      p.mb-0(data-aos="fade-up") En el método iterativo e incremental se parte de la necesidad que se tiene y se estructura un proyecto definiendo tareas que se van ejecutando en cada iteración y evaluándose para aproximarse paulatinamente (incrementalmente) a lo que será el producto final como solución al problema identificado.

    .row.mt-5.col-lg-10.m-auto
      .col-lg-6.mb-4.mb-lg-0(style="place-self:center;")
        p(data-aos="fade-up") En el desarrollo de videojuegos el método que se utiliza es el iterativo incremental y en cada iteración se ejecuta una tarea que se iterará o repetirá probándose hasta que se pueda avanzar a la siguiente que será un progreso respecto a la iteración anterior; es decir, el producto va aproximándose a lo que se desea de él y se puede testear o probar cada iteración con el usuario para obtener la retroalimentación necesaria e ir perfeccionándose.
        p.mt-4(data-aos="fade-up") Lo anterior quiere decir que dentro del equipo desarrollador del videojuego se debe contar con un integrante que haga las veces de #[strong tester] o #[strong testeador] que:
      .col-lg-6(style="place-self:center;")
        figure.m-auto.d-flex.justify-content-center
          img(src="@/assets/curso/tema1/3.png" data-aos="fade-left")
    
    ol.lista-ol--cuadro.lista-ol--separador.mt-5
      li(data-aos="fade-up")
        .lista-ol--cuadro__vineta
          span(style="background-color:#8979F3;") a
        | Verifica constantemente las mecánicas que se van creando.
      li(data-aos="fade-up")
        .lista-ol--cuadro__vineta
          span(style="background-color:#8979F3;") a
        | Hace los ajustes necesarios y los valida de nuevo.
      li(data-aos="fade-up")
        .lista-ol--cuadro__vineta
          span(style="background-color:#8979F3;") a
        | Vuelve a realizar las mejoras documentando los fallos o errores con los cambios que se van llevando a cabo en el diseño o en la programación. 
      li(data-aos="fade-up")
        .lista-ol--cuadro__vineta
          span(style="background-color:#8979F3;") a
        | Aproxima cada producto parcial a lo que finalmente se desea obtener.
    
    Separador.mt-5

    .titulo-segundo
      h2#t_1_1 1.1 Herramienta de testeo en Unity
    
    p(data-aos="fade-up") El software de videojuegos de Unity posee herramientas que pueden ayudar a testear las iteraciones para detectar los errores que se producen cuando se están ejecutando o desarrollando tareas en el videojuego, ya sea cuando se están escribiendo líneas de código o cuando se están llevando a cabo acciones con el menú para crear las escenas y mecánicas del videojuego.

    figure.mt-4
      img(src="@/assets/curso/tema1/4.png" data-aos="zoom-in-up")

    p.mt-5(data-aos="fade-up") Existen testeos rápidos que están incorporados en el software cuando se instala. Al conocer los errores que se producen en las iteraciones, el desarrollador puede tomar la decisión adecuada para dar solución; por ejemplo, corregir la sintaxis de programación necesaria o importar los archivos (asset) de formatos permitidos para incorporar en la escena.

    .row.mt-5
      .col-auto.pe-0(style="place-self:center;")
        figure
          img(src="@/assets/curso/tema1/5.svg" data-aos="fade-right")
      .col(style="place-self:center;")
        h3.mb-0(data-aos="fade-right") Mensajes de error en la consola
    
    p.mt-4(data-aos="fade-up") La consola es una pestaña que se encuentra dentro de la ventana de proyectos y es allí donde se van almacenando los mensajes de error al realizar iteraciones que ocasionen conflictos en la ejecución del videojuego. Estos mensajes permiten realizar acciones correctivas al diseñador para poder avanzar a otra fase de iteración. 
    p.mt-4(data-aos="fade-up") En la imagen se observan cuatro mensajes de error en la consola; errores que se han cometido en la manipulación del programa, por ejemplo:

    .col-lg-8.m-auto.mt-5
      ImagenInfografica.color-secundario.infografica_1
        template(v-slot:imagen)
          figure
            img(src='@/assets/curso/tema1/6.svg' data-aos="zoom-in-up")
        .tarjeta.p-3(x="2.4%" y="78.7%" numero="" style="background-color:#D9FAFE;")
          p.mb-0 Significa que se  está intentando importar un activo que contiene un administrador de juegos global, lo cual no está permitido. Los activos son archivos con formatos específicos que permiten ser copiados en el juego.
        .tarjeta.p-3(x="2.4%" y="84.7%" numero="" style="background-color:#D9FAFE;")
          p.mb-0 Significa que se  está intentando importar un activo que contiene un administrador de juegos global, lo cual no está permitido. Los activos son archivos con formatos específicos que permiten ser copiados en el juego.
        .tarjeta.p-3(x="2.4%" y="90.7%" numero="" style="background-color:#D9FAFE;")
          p.mb-0 Quiere decir que hay una expresión que comienza con mayúsculas y/o minúsculas (nombre de ruta, base de datos de activos): es decir que se escribió una secuencia de comandos incorrecta en la sintaxis.
        .tarjeta.p-3(x="2.4%" y="96.7%" numero="" style="background-color:#D9FAFE;")
          p.mb-0 Se está sugiriendo que se están copiando archivos con una ruta única generada no válida.


    p.mt-5(data-aos="fade-up") Esta herramienta permite identificar los fallos está contenida en el software, es de rápido testeo para probar el funcionamiento del juego no solo para el desarrollador, sino para el usuario, puesto que informa exactamente qué está sucediendo cuando se ejecutan sus diferentes mecánicas.

    Separador.mt-5

    .titulo-segundo
      h2#t_1_2 1.2 Herramienta de testeo incorporada a Unity
    
    p(data-aos="fae-up") Existen herramientas de testeo que se pueden importar al software y que en el momento de la instalación no son incorporadas. Las hay de descarga gratuita y también de pago que se incorporan al software en forma de assets o componentes que se integran en el menú del programa, para ser utilizadas en la identificación de incoherencias y fallos presentados en el desarrollo o rodaje de las escenas del videojuego. Cabe anotar que no se necesita ser un experto programador para utilizar estos componentes, puesto que son de fácil manejo y de ellos se encuentra documentación que explica la dinámica de uso.

    .row.mt-5
      .col-auto.pe-0(style="place-self:center;")
        figure
          img(src="@/assets/curso/tema1/5.svg" data-aos="fade-right")
      .col(style="place-self:center;")
        h3.mb-0(data-aos="fade-right") Unity Test Tool
    
    p.mt-4(data-aos="fade-up") Este componente o asset permite realizar un testeo o evaluación rápida de las funcionalidades que se van incorporando al juego. Es una herramienta que se debe integrar desde la opción de Asset Store del menú de Unity ya que una vez se instala el programa no es importada de la nube automáticamente.

    p.mt-4(data-aos="fade-up") Pasos para incorporar esta herramienta dentro del programa de Unity:
    
    .tarjeta.cont_slyder1.p-4.mt-4
      PasosB.color-acento-botones
        .row(titulo="")
          .col-lg-6.mb-4.mb-lg-0
            p Hacer clic en el menú Window->Asset Store  y el programa se direcciona a la URL #[a(href="https://www.assetstore.unity3d.com/en/#!/content/13802" target="_blank") https://www.assetstore.unity3d.com/en/#!/content/13802].
            p.mt-4 En la ventana de la escena aparece la página de #[em UnityAssetStore] y en el buscador se debe escribir “#[em Unity Test Tools]”.
            a.boton.color-acento-botones.mt-3(href="#" @click.prevent="modal1 = true")
              span Ampliar imagen
              i.fas.fa-search
          .col-lg-6
            figure
              img(src='@/assets/curso/tema1/8.svg')
            p.mb-0.mt-1 #[em Asset Store]
        .row(titulo="")
          .col-lg-6.mb-4.mb-lg-0
            p Luego aparecen los asset gratuitos y seleccionar uno de ellos, en este caso se seleccionará la herramienta BDD Test:
            a.boton.color-acento-botones.mt-3(href="#" @click.prevent="modal2 = true")
              span Ampliar imagen
              i.fas.fa-search
          .col-lg-6
            figure
              img(src='@/assets/curso/tema1/9.svg')
            p.mb-0.mt-1 #[em Herramientas de testeo]
        .row(titulo="")
          .col-lg-6.mb-4.mb-lg-0
            p Hacer clic en la opción #[em Download] para proceder a la descarga de la herramienta de testeo.
            a.boton.color-acento-botones.mt-3(href="#" @click.prevent="modal3 = true")
              span Ampliar imagen
              i.fas.fa-search
          .col-lg-6
            figure
              img(src='@/assets/curso/tema1/10.svg')
            p.mb-0.mt-1 #[em Herramienta BBD Extensión]
        .row(titulo="")
          .col-lg-6.mb-4.mb-lg-0
            p Después que el programa hace la descarga, aparece la siguiente pantalla y se debe hacer clic en el botón #[em Import] que aparece en la esquina inferior derecha de la ventana.
            a.boton.color-acento-botones.mt-3(href="#" @click.prevent="modal4 = true")
              span Ampliar imagen
              i.fas.fa-search
          .col-lg-6
            figure
              img(src='@/assets/curso/tema1/11.svg')
            p.mb-0.mt-1 #[em Acción de Importación]
        .row(titulo="")
          .col-lg-6.mb-4.mb-lg-0
            p Inmediatamente el componente se adiciona al programa Unity y, específicamente, al proyecto que se esté trabajando. En la ventana de proyecto se observa el componente de testeo adicionado para hacer las pruebas rápidas en las escenas y mecánicas del juego.
            a.boton.color-acento-botones.mt-3(href="#" @click.prevent="modal5 = true")
              span Ampliar imagen
              i.fas.fa-search
          .col-lg-6
            figure
              img(src='@/assets/curso/tema1/12.svg')
            p.mb-0.mt-1 #[em Adición de carpeta]
        .row(titulo="")
          .col-lg-6.mb-4.mb-lg-0
            p Cuando se realiza cualquier acción en Unity por ejemplo, insertar un objeto a una escena, la herramienta #[em Unity Test Tools] se adiciona a este y analiza cualquier error en él o en la acción de copiarlo en la ventana de la escena.  Por ejemplo, a continuación la acción que se va a realizar es arrastrar con el mouse el Sprite 3 que es un objeto de fondo de la ventana de #[em Project] a la ventana de la escena:
            a.boton.color-acento-botones.mt-3(href="#" @click.prevent="modal6 = true")
              span Ampliar imagen
              i.fas.fa-search
          .col-lg-6
            figure
              img(src='@/assets/curso/tema1/13.svg')
            p.mb-0.mt-1 #[em Análisis de componente]
        .row(titulo="")
          .col-lg-6.mb-4.mb-lg-0
            p Inmediatamente se activó la herramienta de testeo y mostró el siguiente mensaje en la ventana de la escena: #[em All Compiller errors have to be fixed before you can enter play mode].
            p.mt-4 La acción no se pudo realizar ya que la escena se encontraba en modo de reproducción y el objeto no se puede compilar o procesar a nivel de #[em software]. Los botones encerrados en el círculo son los que indican el modo #[em play] o modo pausa, en el momento de copiar el elemento se encontraba en modo #[em play].
            a.boton.color-acento-botones.mt-3(href="#" @click.prevent="modal7 = true")
              span Ampliar imagen
              i.fas.fa-search
          .col-lg-6
            figure
              img(src='@/assets/curso/tema1/14.svg')
            p.mb-0.mt-1 #[em Error de ejecución]
    
    ModalA(:abrir-modal.sync="modal1")
      figure
        img(src='@/assets/curso/tema1/8.svg')
      p.mb-0.mt-1 #[em Asset Store]
    ModalA(:abrir-modal.sync="modal2")
      figure
        img(src='@/assets/curso/tema1/9.svg')
      p.mb-0.mt-1 #[em Herramientas de testeo]
    ModalA(:abrir-modal.sync="modal3")
      figure
        img(src='@/assets/curso/tema1/10.svg')
      p.mb-0.mt-1 #[em Herramienta BBD Extensión]
    ModalA(:abrir-modal.sync="modal4")
      figure
        img(src='@/assets/curso/tema1/11.svg')
      p.mb-0.mt-1 #[em Acción de Importación]
    ModalA(:abrir-modal.sync="modal5")
      figure
        img(src='@/assets/curso/tema1/12.svg')
      p.mb-0.mt-1 #[em Adición de carpeta]
    ModalA(:abrir-modal.sync="modal6")
      figure
        img(src='@/assets/curso/tema1/13.svg')
      p.mb-0.mt-1 #[em Análisis de componente]
    ModalA(:abrir-modal.sync="modal7")
      figure
        img(src='@/assets/curso/tema1/14.svg')
      p.mb-0.mt-1 #[em Análisis de componente]




      
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    modal1: false,
    modal2: false,
    modal3: false,
    modal4: false,
    modal5: false,
    modal6: false,
    modal7: false,
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
.cont_slyder1
  background: url(../assets/curso/tema1/7.png)
  background-size: cover
  background-repeat: no-repeat
  background-position: center
.infografica_1 .img-infografica.color-secundario .img-infografica__item__dot:before, .img-infografica.color-secundario .img-infografica__item__dot:after, .img-infografica.color-secundario .img-infografica-b__item__dot:before, .img-infografica.color-secundario .img-infografica-b__item__dot:after, .img-infografica-b.color-secundario .img-infografica__item__dot:before, .img-infografica-b.color-secundario .img-infografica__item__dot:after, .img-infografica-b.color-secundario .img-infografica-b__item__dot:before, .img-infografica-b.color-secundario .img-infografica-b__item__dot:after
  background-color: #ED0000
.infografica_1 .img-infografica.color-secundario .img-infografica__item__dot:before, .img-infografica.color-secundario .img-infografica__item__dot:before, .img-infografica.color-secundario .img-infografica-b__item__dot:before, .img-infografica.color-secundario .img-infografica-b__item__dot:before, .img-infografica-b.color-secundario .img-infografica__item__dot:before, .img-infografica-b.color-secundario .img-infografica__item__dot:before, .img-infografica-b.color-secundario .img-infografica-b__item__dot:before, .img-infografica-b.color-secundario .img-infografica-b__item__dot:before
  background-color: transparent
</style>
