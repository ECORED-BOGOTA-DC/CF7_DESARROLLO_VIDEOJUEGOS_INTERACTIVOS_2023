<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    p(data-aos="fade-up") Bienvenido al componente formativo pruebas de funcionamiento y ajuste de mecánicas:

    figure.mt-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/kHzy20aCj04" title="Pruebas de funcionamiento y ajuste de mecánicas" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
