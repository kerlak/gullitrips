
import {Checkpoints} from '../imports/Checkpoints'
import {Paths} from '../imports/Paths'



if( Paths.find().fetch().length == 0 ){

    //var cities = require('cities.json')
    const path = {
        name: 'Awesome Path',
        description: 'Description of an awesome path',
        tags: ['awesome','party'],
        rating: 4.2,
        hours: 1.7,
        checkpoints: []
    }

    const checkpoints = [
      {
        name: 'SANTILLANA DEL MAR',
        description: 'Descrito como “una belleza medieval” y “Uno de los pueblos más bonitos de España”, es un placer caminar por sus calles y ver lo bonitas que lucen las casas con flores en los balcones. Al ser tan solo un par de calles en cuesta, se puede ver Santillana en poco tiempo, pero mejor ir con calma y disfrutar de toda la historia que ocurrió aquí. Un paseo que no puede faltar es el que lleva por la calle principal hasta los 2 paradores.',
        lat: 43.2336,
        lon: -4.0617,
        rating: 5
      },
      {
        name: 'Comida en Hotel Los Infantes',
        description: 'Este Palacio del siglo XVII-XVIII convertido en hotel está ubicado en el centro de Santillana del Mar. El hotel es un auténtico museo ya que las obras de arte de época le rodearán en cada espacio. Tanto los muebles como los cuadros y resto de objetos han sido adquiridos y utilizados como decoración con un gusto exquisito. Estará envuelto en un ambiente cargado de historia, desde la magnífica fachada y vestíbulo, hasta los diferentes salones, restaurante y habitaciones. Del restaurante recalcar la excelente comida casera y el atento personal. Si te gusta la comida casera y tradicional este es un sitio acertado para disfrutar de la buena gastronomía del norte de España. Además, se puede apreciar un entorno acogedor a un precio razonable.',
        lat: 43.3890182,
        lon: -4.1083872,
        rating: 5
      },
      {
        name: 'COMILLAS',
        description: 'La primera vez que fui a este maravilloso pueblecito, quede alucinada, pues nada más entrar te encuentras con un edificio de escándalo (La universidad pontificia de comillas), después con la casa del Marqués de Comillas, el Panteón, el Capricho de Gaudi... Es increíble que un momentito hubiésemos visto tantas maravillas juntas y que decir ya del pueblo… Las callecitas de piedra, las casitas hermosas de piedra, de madera… todas perfectamente cuidadas... El puerto pesquero, la playa de comillas.... en fin, un precioso pueblo de Cantabria con mucho encanto.',
        lat: 43.2313,
        lon: -4.1722,
        rating: 5
      },
      {
        name: 'Palacio de Sobrellanos',
        description: "Terminado en 1888, este palacio de estilo neogótico obra de Joan Martorell parece mucho más antiguo de lo que realmente es, tanto por sus líneas clásicas, como por la cantidad de musgo que se puede ver cubriendo algunos muros. Como curiosidad, este fue el primer edificio de España en tener luz eléctrica, instalada para alojar al rey Alfonso XII. Sorprende descubrir que se terminó de construir 3 años después que el cercano Capricho de Gaudí, que tiene un aspecto mucho más  moderno y provocador. En cuanto a la visita, podemos acceder libremente al patio, y para ver su interior, tenemos que entrar con algunas de las visitas guiadas dentro del horario de visita. Normalmente empiezan a y media, por lo que conviene estar unos 10 minutos antes para comprar la entrada. En la visita recorreremos toda la planta baja, amueblada siguiendo el estilo original de la casa, así como la gran escalera central. En total la visita dura unos 25 minutos, para después continuar con la visita de la capilla (entrada a parte) 20 mins",
        lat: 43.3890182,
        lon: -4.1083872,
        rating: 5
      },
      {
        name: 'Universidad de Comillas',
        description: 'Una legendaria Universidad dominada por la historia que cuentan sus piedras. Edifico ecléctico, en tanto se mezclan rasgos mudéjares y neoclásicos, alberga en la actualidad diferentes ciclos de enseñanza del castellano para extranjeros. Fue andada construir por el Marqués de Comillas y cedida al Vaticano en el siglo XIX.',
        lat: 43.2311,
        lon: -4.1756,
        rating: 5
      },
      {
        name: 'SAN VICENTE DE LA BARQUERA',
        description: 'San Vicente de La Barquera, la Portus Vereasueca de los Romanos, está situada en la costa occidental de Cantabria, su puerto pesquero es uno de los más importantes de la región y asimismo la villa es un paso importante del Camino de Santiago por su Ruta Costera. Fue fundada por Alfonso I a mediados del siglo VIII cuando se alzó su castillo y alrededor de él fue creciendo la actual villa. En el siglo XVI Carlos I la visitó desembarcando en ella cuando iba de camino hacia la capital de España para ser nombrado monarca y en su honor se preparó una corrida de toros. Entre los numerosos monumentos de esta afamada Villa destacan: el Santuario de La Barquera, la Muralla, el Faro de Punta Silla, el Castillo del Rey, la Iglesia de Santa María de Los Ángeles, el Convento de San Luis, el Puente de La Maza, el Hospital de La Concepción, la Torre del Preboste y la Puebla Vieja en sí conjunto histórico-artístico. Sus fiestas se celebran el 22 de enero festividad de San Vicente Mártir, también son de destacar las fiestas marineras del Carmen el 16 de Julio y las de La Barquera y el Mozucu en las que se guisa en la playa el Sorropotún un plato típico que se reparte entre todos los visitantes. La turística Villa de San Vicente de La Barquera de 3450 habitantes se halla enclavada entre las rías de Rubín y Pombo y la mayor parte de su término municipal se encuentra situado en el Parque Natural de Oyambre repleto de rías, acantilados, dunas praderías, bosques y sierras costeras, sus playas su entorno natural y su patrimonio artístico lo hacen merecedores de una visita obligada cuando recorramos estas preciosas tierras cántabras.',
        lat: 43.3813069,
        lon:  -4.397058,
        rating: 5
      },
      {
        name: 'Iglesia de Sta. María de los Ángeles',
        description: 'Culminando el alto de la Puebla Vieja se halla la Iglesia de Santa María de los Ángeles. Para llegar a ella hemos debido subir una empinada calle empedrada pasando por delante del Castillo, la muralla, la Torre del Preboste, el Palacio de Corro y las ruinas del hospital de la Concepción, pero la subida merece la pena. Desde aquí hay unas vistas espectaculares de toda la bahía y de San Vicente. Lo que más llama la atención de la iglesia, que puede verse desde cualquier punto del pueblo, es su torre gótica, con la que nos damos de frente al terminarse la calle. Bordeándola encontramos un mirador, frente a una de las puertas románicas de acceso a la iglesia (tiene dos, una en el lateral y otra en la parte trasera, donde además hay un fragmento de muralla). Y es que esta iglesia fue construida por partes, entre los siglos XIII y XVI. Es una iglesia muy grande, de tres naves. En el interior tiene techos altísimos, y lo más destacable es la tumba del inquisidor Corro, realizado por Juan Bautista Vázquez en el siglo XVI, rematado por una escultura del personaje sobre la tapa del sepulcro, tumbado de lado. Está considerada una de las más bellas esculturas funerarias de España. Visitar esta iglesia cuesta 1€.',
        lat: 43.2302,
        lon: -4.2414,
        rating: 5
      },
      {
        name: 'Recuerdo a Amado',
        description: 'En una plazoleta situada en pleno centro histórico de Carmona encontramos esta curiosa escultura realizada en piedra, representativa de unas albarcas. Están colocadas sobre un pedestal, en el que hay una placa conmemorativa en recuerdo de Amado Gómez, un famoso albarquero cántabro que realizaba estos tradicionales "zapatos" de forma artesanal y manual, tallándolos en madera de cedro, abedul, nogal... El monumento fue realizado en el año 2007, como homenaje tras su fallecimiento.',
        lat: 43.2544438,
        lon: -4.35972449,
        rating: 5
      },
      {
        name: 'Fuente de Carmona',
        description: 'xParte del Conjunto Histórico-Artístico de Carmona, levantado sobre el Rio Quiviesa o Quivierda, se trata de un puente de piedra de un sólo ojo, desde donde hay unas vistas espectaculares de todo el entorno natural del Valle de Cabuérniga y de los caseríos montañeses de Carmona.',
        lat: 43.254615,
        lon: -4.3576319,
        rating: 5
      },
      {
        name: 'Restaurante El Puente',
        description: 'Restaurante ubicado a escasos metros del Puente que le da nombre, esta casona de pueblo, con sus vigas de madera, sus aparadores gigantes y sus cacharros por las paredes, ofrece un servicio encantador, y una comida espectacular. Se puede disfrutar de la gastronomía montañesa tan típica de la zona, con raciones hermosas y precio muy asequible',
        lat: 43.254615,
        lon: -4.3576319,
        rating: 5
      },
      {
        name: 'Palacio de los Mier/Casona de los Díez de Cossío',
        description: 'Parte del Conjunto Histórico-Artístico de Carmona, este palacio/casona de estilo herreriano o “barroco madrileño", propio del XVII, está Ubicado en el Barrio de San Pedro. En la actualidad es un Parador de la Diputación Regional, aunque se encuentra cerrado y en proceso de restauración. El edificio consta de un cuerpo central con soportal de tres arcos de medio punto sobre columnas toscanas flanqueado por dos torreones de mayor altura. Lo más destacable de la fachada es un impresionante escudo de armas de los de Díaz, Cossío, Calderón y Mier, flanqueado por dos enormes esculturas en relieve. Fue mandado construir por el canónigo Francisco Díaz de Cossío (de ahí su nombre).',
        lat: 43.260165,
        lon: -4.263782,
        rating: 5
      }
    ]

    path.city_id = "1261"
    for(let cp of checkpoints){
      let cp_id = Checkpoints.insert(cp)
      path.checkpoints.push(cp_id)
    }
    Paths.insert(path)
    Paths.insert(path)
    Paths.insert(path)
    Paths.insert(path)
    Paths.insert(path)
    Paths.insert(path)
    Paths.insert(path)
  }
