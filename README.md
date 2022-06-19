# SubgrupoServicioNest

## Short Paper 2

### Commits relevantes: Carlos Landaeta

#### "Mapper,DBConnection,Repository y subclases"

Se declararon las interfaces y las clases concretas a utilizar.

#### "Busquedas a db listas"

Se finalizaron las búsquedas de los doctores a la base de datos, filtrando por especialidad o mostrando la lista completa.

#### "Codig desacoplado"

Se desacoplaron ciertas dependencias que creaban una diferencia entre el diagrama y código.

#### "Busqueda de especialidades"

Se implementó un controlador, un servicio y un mapper los cuales son capaces de extraer la lista de especialidades almacenadas en la base de datos.

### Commits relevantes: Jose Flores

#### "SearchModule"

Se definio la arquitectura base con la que se iba empezar el desarrollo de las capas de dominio y Data Access. Estableciendo las abstracciones estables de "SearchController" y "SearchServices" que permitian generar una capa
acoplamiento abstracto, extendiendo las nuevas funcionalidades a sus subclases

#### "Domain Class"

Se definieron las clases de dominio Doctor y Specialty, que tendrian como unica responsabilidad reflejar el comportamiento de estos objetos en el mundo real. Se habia pensado aplicarlas en esta entrega para salvar
el state de la aplicacion, pero debido a su alcance, seran empleadas cuando se empleen los Offline Patterns
