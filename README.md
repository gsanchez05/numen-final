# Numen trabajo Final

Para cargar la base de datos usar la suguiente url como referencia:


ISO Alpha-2, ISO Alpha-3 y UN Code List:
========================================================================
https://www.nationsonline.org/oneworld/country_code_list.htm


Routes:
========================================================================
countries/crear
countries/ver
countries/ver/id
countries/editar/id
countries/eliminar/id


Ejemplo de JSON para POST/PUT
========================================================================
{"country": "Australia",
"alpha2": "AU",
"alpha3": "AUS",
"uncode": "036"}


Consignas
========================================================================
Las condiciones de entrega del proyecto final son un CRUD completo con mongoDB :

-métodos GET para mostrar información
-métodos POST para crear información
-métodos PUT para editar la información
-métodos DELETE para eliminar la información
Todo esto esta sujeto a como crearon sus modelos en mongoDB las bases de datos no pueden ser compartidas entre alumnos y los proyectos son individuales

También debe contar con validaciones correspondientes según corresponda