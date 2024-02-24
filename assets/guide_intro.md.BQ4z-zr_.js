import{_ as e,c as a,o,a3 as r}from"./chunks/framework.DnUD_fzR.js";const n="/vue-docker/assets/devops.TLCochov.png",t="/vue-docker/assets/intro.BPc3v8Sp.png",g=JSON.parse('{"title":"Introducción","description":"","frontmatter":{},"headers":[],"relativePath":"guide/intro.md","filePath":"guide/intro.md"}'),c={name:"guide/intro.md"},i=r('<h1 id="introduccion" tabindex="-1">Introducción <a class="header-anchor" href="#introduccion" aria-label="Permalink to &quot;Introducción&quot;">​</a></h1><h2 id="fuente-de-origen" tabindex="-1">Fuente de origen <a class="header-anchor" href="#fuente-de-origen" aria-label="Permalink to &quot;Fuente de origen&quot;">​</a></h2><p>Esta guía es una adaptación de un excelente artículo ejemplificado en <a href="https://en.reactjs.org/" target="_blank" rel="noreferrer">React</a> y publicado bajo el título <a href="https://levelup.gitconnected.com/docker-for-frontend-developers-4eeaedf10dc7" target="_blank" rel="noreferrer">Docker for frontend developers</a>. Por lo tanto, se puede adaptar a cualquier proyecto frontend; traducido y adaptado por <a href="https://github.com/ejimenez123" target="_blank" rel="noreferrer">Ernesto Canquiz</a>.</p><blockquote><p>Teniendo presente lo antes mencionado, entonces, vamos a sumergirnos...</p></blockquote><h2 id="efectos-de-devops" tabindex="-1">Efectos de DevOps <a class="header-anchor" href="#efectos-de-devops" aria-label="Permalink to &quot;Efectos de DevOps&quot;">​</a></h2><p><img src="'+n+'" alt="conclusion"></p><blockquote><p>Concepto extraido de <a href="https://es.vuejs.org/v2/cookbook/dockerize-vuejs-app.html#Efectos-de-DevOps" target="_blank" rel="noreferrer">este</a> enlace.</p></blockquote><p>La adopción de la cultura <a href="https://www.netapp.com/es/devops-solutions/what-is-devops/" target="_blank" rel="noreferrer">DevOps</a>, herramientas y practicas ágiles de ingeniería tienen, por sobre todas las cosas, el lindo efecto de incrementar la colaboración entre los roles de desarrollo y operaciones.</p><p>Uno de los principales problemas del pasado (pero también hoy en día en algunas realidades) es que el equipo de desarrollo no estaba interesado en la operación y el mantenimiento de un sistema una vez que se entregó al equipo de operaciones, mientras que este último no estaba realmente consciente de los objetivos de negocio, y por lo tanto, reacios a satisfacer las necesidades operativas del sistema (también denominados “caprichos de los desarrolladores”).</p><blockquote><p>Por lo tanto, entregar nuestra aplicación Vue.js como una imagen de Docker ayuda a reducir, si no eliminar por completo, la diferencia entre ejecutar el servicio en la computadora portátil de un desarrollador, el entorno de producción o cualquier otro entorno en el que podamos pensar.</p></blockquote><h2 id="efectos-de-entrega-continua" tabindex="-1">Efectos de entrega continua <a class="header-anchor" href="#efectos-de-entrega-continua" aria-label="Permalink to &quot;Efectos de entrega continua&quot;">​</a></h2><blockquote><p>Concepto extraido de <a href="https://es.vuejs.org/v2/cookbook/dockerize-vuejs-app.html#Efectos-de-entrega-continua" target="_blank" rel="noreferrer">este</a> enlace.</p></blockquote><p>Al aprovechar la disciplina de entrega continua se construye software de tal forma que se puede potencialmente liberar en producción en cualquier momento. Dicha práctica de ingeniería se habilita por medio de lo que normalmente se llama pipeline de entrega continua. El propósito del pipeline de entrega continua es dividir nuestra construcción en etapas (por ejemplo, compilación, pruebas unitarias, pruebas de integración, pruebas de rendimiento, etc.) y dejar que cada etapa verifique nuestro artefacto de compilación cada vez que cambie nuestro software. En última instancia, cada etapa aumenta nuestra confianza de que tan lista para producción se encuentra nuestra compilación y, por lo tanto, reduce el riesgo de romper cosas en producción (o cualquier otro entorno).</p><blockquote><p>Por lo tanto, crear una imagen de Docker para nuestra aplicación Vue.js es una buena opción aquí porque representaría nuestro artefacto de construcción final, el mismo artefacto que se verificará contra nuestra entrega continua y que potencialmente podría liberarse a producción con confianza.</p></blockquote><p><img src="'+t+'" alt="conclusion"></p>',15),s=[i];function d(l,p,u,m,f,h){return o(),a("div",null,s)}const q=e(c,[["render",d]]);export{g as __pageData,q as default};
