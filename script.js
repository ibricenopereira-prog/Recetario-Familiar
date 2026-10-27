const recipeData = [
 {country:"Venezuela",flag:"🇻🇪",recipes:[
  ["Arepas","Desayuno",30,"Fácil","2 tazas de harina de maíz precocida|2½ tazas de agua tibia|1 cucharadita de sal|Queso o relleno al gusto","Disuelve la sal en agua y agrega la harina poco a poco.|Amasa, reposa 5 minutos y forma discos.|Cocina en budare 5 minutos por lado y termina 10 minutos en horno a 200 °C."],
  ["Pabellón criollo","Plato principal",100,"Media","500 g de falda de res|2 tazas de caraotas negras cocidas|2 plátanos maduros|2 tazas de arroz|Cebolla, ajo y pimentón","Hierve la carne con aliños hasta que esté tierna; desmecha y guisa con sofrito.|Sazona las caraotas y cocina el arroz blanco.|Fríe tajadas de plátano y sirve los cuatro componentes juntos."],
  ["Hallacas","Plato principal",180,"Avanzada","1 kg de harina de maíz|700 g de carne de res, cerdo y pollo|Hojas de plátano|Aceitunas, pasas y alcaparras|Caldo y onoto","Prepara un guiso con las carnes, aceitunas, pasas y alcaparras.|Amasa la harina con caldo y onoto; extiende sobre hojas y rellena.|Envuelve, amarra y hierve durante 60 minutos."],
  ["Cachapas con queso","Desayuno",35,"Fácil","4 tazas de maíz tierno|½ taza de leche|2 cucharadas de azúcar|Sal|Queso de mano","Licúa el maíz con leche, azúcar y sal hasta lograr una mezcla espesa.|Vierte porciones en un budare engrasado y cocina por ambos lados.|Rellena con queso de mano y sirve caliente."],
  ["Asado negro","Plato principal",150,"Media","1 kg de muchacho redondo|½ taza de papelón rallado|1 cebolla|2 tomates|Vino tinto y salsa inglesa","Dora la carne con papelón hasta caramelizarla por todos lados.|Agrega cebolla, tomate, vino y salsa inglesa; tapa hasta ablandar.|Corta en ruedas y baña con la salsa."],
  ["Pisca andina","Sopa",35,"Fácil","4 papas|1 litro de caldo de pollo|½ taza de leche|Queso blanco|Cilantro y cebollín","Hierve las papas en el caldo hasta que estén tiernas.|Añade leche, queso en cubos, cilantro y cebollín; cocina 3 minutos.|Sirve muy caliente con arepa andina."],
  ["Tequeños","Entrada",55,"Media","300 g de harina de trigo|250 g de queso blanco firme|1 huevo|2 cucharadas de mantequilla|Aceite para freír","Mezcla harina, huevo, mantequilla, sal y agua hasta formar una masa lisa.|Estira y corta tiras; envuelve cada bastón de queso y sella los extremos.|Fríe en aceite medio hasta dorar."],
  ["Mandocas","Desayuno",45,"Fácil","2 plátanos maduros|1 taza de harina de maíz|100 g de queso rallado|Papelón|Aceite","Cocina y aplasta los plátanos; mezcla con harina, queso y papelón.|Forma aros pequeños con las manos húmedas.|Fríe hasta dorar y sirve con queso."],
  ["Quesillo","Postre",70,"Media","1 lata de leche condensada|La misma medida de leche|5 huevos|Vainilla|½ taza de azúcar","Haz un caramelo con el azúcar y cubre un molde.|Licúa las leches, huevos y vainilla; vierte en el molde.|Cocina tapado a baño María 50 minutos y enfría antes de desmoldar."],
  ["Patacón","Entrada",25,"Fácil","2 plátanos verdes|Aceite neutro para freír|Sal al gusto|1 aguacate|1 tomate|½ cebolla morada|Cilantro|Ajo|Jugo de limón","Pela los plátanos verdes y córtalos en rodajas gruesas.|Fríe las rodajas en aceite caliente hasta que se ablanden, unos 2 minutos; retira y reserva.|Aplasta cada rodaja con una prensa o el fondo de un vaso, y vuelve a freír hasta dorarlas y que queden crujientes.|Prepara la guasacaca: machaca el aguacate con el tomate, la cebolla, el cilantro, el ajo y el limón; sazona.|Sirve los patacones calientes con guasacaca y sal al gusto."]
 ]},
 {country:"Bolivia",flag:"🇧🇴",recipes:[
  ["Salteñas","Entrada",100,"Avanzada","500 g de harina|300 g de carne de res|2 papas|½ taza de arvejas|Ají amarillo, aceitunas y huevo","Prepara un jigote con carne, papa, arvejas, ají y caldo; enfría hasta cuajar.|Haz una masa, estira discos y rellena con jigote, aceituna y huevo.|Repulga y hornea a 220 °C hasta dorar."],
  ["Silpancho cochabambino","Plato principal",55,"Media","4 filetes finos de res|4 papas|4 huevos|1 taza de arroz|Tomate, cebolla y locoto","Aplana los filetes, empaniza con pan molido y fríe hasta dorar.|Cuece las papas en rodajas y prepara arroz blanco.|Sirve con huevo frito y salsa de tomate, cebolla y locoto."],
  ["Sopa de maní","Sopa",80,"Media","500 g de costilla de res|1 taza de maní tostado|4 papas|½ taza de arvejas|Fideo corto y perejil","Licúa el maní con agua hasta que quede cremoso.|Hierve la costilla; añade maní, papa y arvejas y cocina 35 minutos.|Agrega fideo tostado y sirve con perejil."],
  ["Pique macho","Plato principal",50,"Media","500 g de res|3 salchichas|4 papas|2 tomates|Locoto, cebolla y huevo duro","Fríe las papas en bastones y reserva.|Saltea la res en cubos con salchicha, cebolla y locoto.|Sirve sobre las papas con tomate y huevo duro."],
  ["Sajta de pollo","Plato principal",75,"Media","4 presas de pollo|4 papas|½ taza de arvejas|Ají amarillo|Maní y cebolla","Dora el pollo y cocínalo con cebolla, ají y caldo hasta ablandar.|Añade arvejas y maní molido para espesar la salsa.|Sirve con papa blanca y tunta cocida."],
  ["Fricasé paceño","Sopa",120,"Media","700 g de cerdo|1 taza de mote|Ají amarillo|Ajo y comino|Chuño remojado","Hierve el cerdo con ajo y comino hasta que esté muy tierno.|Agrega ají amarillo y cocina despacio hasta concentrar el caldo.|Sirve con mote y chuño blanco cocido."],
  ["Plato paceño","Plato principal",55,"Fácil","4 choclos|4 papas|250 g de habas|Queso fresco|Mantequilla","Cuece el choclo y las papas en agua con sal.|Hierve las habas hasta que estén tiernas y dora el queso.|Sirve juntos con mantequilla y llajua."],
  ["Chairo","Sopa",100,"Media","500 g de cordero|½ taza de chuño|½ taza de mote|1 zanahoria|Papa, hierbabuena y ají","Remoja el chuño y enjuágalo varias veces.|Hierve el cordero con verduras; añade mote, papa y chuño.|Termina con hierbabuena y sirve caliente."],
  ["Majadito cruceño","Plato principal",60,"Fácil","2 tazas de arroz|400 g de charque|1 plátano maduro|2 huevos|Urucú y cebolla","Hierve el charque, desmenúzalo y reserva el caldo.|Dora el urucú con cebolla; añade arroz, charque y caldo para cocinar.|Sirve con huevo frito y tajadas de plátano."],
  ["Humintas al horno","Entrada",65,"Media","6 choclos tiernos|200 g de queso|2 huevos|Mantequilla|Anís y hojas de choclo","Ralla los choclos y mezcla con huevos, mantequilla y anís.|Coloca la mezcla y queso en hojas de choclo; dobla y amarra.|Hornea a 180 °C durante 40 minutos."]]},
 {country:"Chile",flag:"🇨🇱",recipes:[
  ["Pastel de choclo","Plato principal",85,"Media","6 choclos|400 g de carne molida|2 presas de pollo|Aceitunas y pasas|Albahaca y leche","Prepara un pino con carne, cebolla, comino, pasas y aceitunas; agrega pollo cocido.|Muele el choclo con albahaca y cocina con leche hasta espesar.|Cubre el pino con la pastelera y hornea hasta dorar."],
  ["Empanadas de pino","Entrada",80,"Media","500 g de harina|350 g de carne de res|2 cebollas|2 huevos duros|Aceitunas y comino","Cocina cebolla y carne con comino; deja enfriar el pino.|Prepara discos de masa, rellena con pino, huevo y aceituna.|Cierra, pinta con huevo y hornea a 200 °C por 25 minutos."],
  ["Cazuela de vacuno","Sopa",90,"Fácil","4 trozos de osobuco|4 papas|4 trozos de zapallo|4 trozos de choclo|Porotos verdes y arroz","Hierve la carne en agua con sal y cebolla hasta que esté blanda.|Añade papa, zapallo, choclo y arroz; cocina 20 minutos.|Agrega porotos verdes y sirve cada presa con caldo y verduras."],
  ["Completo italiano","Plato principal",25,"Fácil","4 panes de completo|4 salchichas|2 paltas|2 tomates|Mayonesa","Cuece las salchichas en agua caliente y calienta los panes al vapor.|Muele la palta con sal y corta el tomate en cubos pequeños.|Rellena y cubre con tomate, palta y mayonesa."],
  ["Charquicán","Plato principal",55,"Fácil","400 g de carne molida|4 papas|300 g de zapallo|½ taza de choclo|Porotos verdes y cebolla","Haz un sofrito con cebolla y carne; agrega zapallo y papas en cubos.|Cubre con caldo y cocina hasta que las verduras estén blandas.|Muele parcialmente, incorpora choclo y porotos; sirve con huevo frito."],
  ["Porotos granados","Plato principal",60,"Fácil","500 g de porotos frescos|2 choclos|300 g de zapallo|Albahaca|Cebolla y pimentón","Cuece los porotos con zapallo en agua hasta ablandar.|Agrega choclo rallado y albahaca, revolviendo para espesar.|Incorpora un sofrito de cebolla y pimentón; cocina 10 minutos."],
  ["Curanto en olla","Plato principal",100,"Avanzada","1 kg de almejas y choritos|500 g de pollo|500 g de cerdo|Papas y milcaos|Longaniza y repollo","Lava los mariscos y dora las carnes y longanizas.|Alterna capas de hojas, mariscos, carnes, papas y milcaos en una olla.|Agrega vino, tapa y cocina al vapor hasta que abran los mariscos."],
  ["Caldillo de congrio","Sopa",50,"Media","4 medallones de congrio|1 cebolla|2 tomates|4 papas|Vino blanco y cilantro","Sofríe cebolla y tomate; añade vino blanco y caldo de pescado.|Agrega papas y cocina hasta que estén casi tiernas.|Incorpora el congrio, cocina 8 minutos y termina con cilantro."],
  ["Sopaipillas","Entrada",45,"Fácil","2 tazas de harina|1 taza de zapallo cocido|2 cucharadas de manteca|Sal|Aceite","Haz un puré con zapallo y mézclalo con harina, manteca y sal.|Amasa, estira y corta círculos; pínchalos con un tenedor.|Fríe hasta dorar y acompaña con pebre o chancaca."],
  ["Mote con huesillos","Bebida",35,"Fácil","1 taza de mote cocido|8 huesillos secos|1 taza de azúcar|Canela|Cáscara de naranja","Remoja los huesillos y hiérvelos con azúcar, canela y naranja hasta ablandar.|Enfría los huesillos dentro de su jugo especiado.|Sirve frío con mote en el fondo del vaso."]]},
 {country:"Argentina",flag:"🇦🇷",recipes:[
  ["Asado argentino","Plato principal",150,"Media","1,5 kg de costillar|Sal gruesa|Chorizos|Morcillas|Limón","Enciende las brasas y espera a que queden cubiertas de ceniza gris.|Sala la carne y ponla sobre la parrilla con el hueso hacia las brasas.|Cocina lentamente; agrega chorizos y morcillas al final."],
  ["Empanadas criollas","Entrada",70,"Media","12 tapas de empanada|400 g de carne picada|2 cebollas|2 huevos duros|Comino y pimentón","Sofríe la cebolla, añade carne y condimentos; deja enfriar.|Rellena las tapas con carne y huevo picado; repulga los bordes.|Hornea a 210 °C durante 18 minutos, hasta dorar."],
  ["Locro","Sopa",180,"Avanzada","500 g de maíz blanco|300 g de porotos|500 g de zapallo|300 g de falda|Chorizo y panceta","Remoja el maíz y los porotos desde la noche anterior.|Cocina lentamente con carnes y zapallo, revolviendo hasta que espese.|Sirve con salsa de cebolla de verdeo, pimentón y aceite caliente."],
  ["Milanesa napolitana","Plato principal",50,"Media","4 bifes finos|2 huevos|Pan rallado|4 fetas de jamón|Salsa de tomate y mozzarella","Pasa los bifes por huevo batido y pan rallado; fríe hasta dorar.|Cubre cada milanesa con salsa, jamón y mozzarella.|Gratina al horno y sirve con papas fritas."],
  ["Choripán con chimichurri","Plato principal",30,"Fácil","4 chorizos criollos|4 panes|Perejil|Ajo|Vinagre y ají molido","Mezcla perejil, ajo, ají, orégano, vinagre y aceite para el chimichurri.|Asa los chorizos a fuego medio, girándolos hasta cocerlos parejo.|Abre el pan, coloca el chorizo y agrega chimichurri."],
  ["Carbonada criolla","Plato principal",100,"Media","500 g de carne|1 zapallo|2 papas|1 batata|Choclo, durazno y caldo","Dora la carne en cubos con cebolla y pimentón.|Agrega caldo, papa, batata, choclo y zapallo; cocina hasta ablandar.|Incorpora cubos de durazno y sirve dentro de un zapallo horneado."],
  ["Humita en chala","Plato principal",65,"Media","6 choclos|1 cebolla|1 pimiento|Queso criollo|Albahaca y pimentón","Ralla el choclo y mezcla con un sofrito de cebolla y pimiento.|Añade queso, albahaca y pimentón; coloca porciones en hojas de choclo.|Ata los paquetes y hierve 35 minutos."],
  ["Matambre arrollado","Plato principal",120,"Avanzada","1 matambre de ternera|3 huevos|1 zanahoria|Ajo y perejil|Espinaca","Extiende el matambre y condimenta con ajo, perejil, sal y pimienta.|Distribuye zanahoria, espinaca y huevos duros; enrolla y ata firme.|Hierve 90 minutos, enfría bajo peso y corta en rodajas."],
  ["Provoleta a la parrilla","Entrada",20,"Fácil","2 ruedas de provolone|Orégano|Ají molido|Aceite de oliva|Pan","Calienta una provoletera o sartén de hierro sobre la parrilla.|Dora el queso por ambos lados hasta que el centro se funda.|Espolvorea orégano y ají; sirve enseguida con pan tostado."],
  ["Alfajores de maicena","Postre",55,"Media","200 g de maicena|100 g de harina|150 g de mantequilla|Dulce de leche|Coco rallado","Bate mantequilla y azúcar; agrega yemas, maicena, harina y ralladura de limón.|Estira la masa, corta discos y hornea a 170 °C por 10 minutos.|Une de a dos con dulce de leche y pasa los bordes por coco."]]},
 {country:"Perú",flag:"🇵🇪",recipes:[
  ["Ceviche clásico","Entrada",35,"Media","700 g de pescado blanco|8 limones|1 cebolla morada|Ají limo|Cilantro y camote","Corta el pescado en cubos y sazona con sal y ají limo.|Exprime los limones justo antes de servir y mezcla con cebolla fina.|Termina con cilantro; acompaña con camote y choclo cocidos."],
  ["Lomo saltado","Plato principal",35,"Media","500 g de lomo de res|2 tomates|1 cebolla morada|Papas fritas|Sillao y vinagre","Fríe papas en bastones y reserva.|Saltea la carne en sartén muy caliente; agrega cebolla y tomate en gajos.|Añade sillao y vinagre, mezcla con cilantro y sirve con arroz y papas."],
  ["Ají de gallina","Plato principal",70,"Media","2 pechugas de pollo|3 ajíes amarillos|2 rebanadas de pan|Leche evaporada|Nueces y parmesano","Hierve el pollo y desmenúzalo; remoja el pan en leche.|Sofríe ají amarillo licuado, incorpora pan, nueces y caldo hasta espesar.|Añade pollo y parmesano; sirve con papa, huevo y aceituna."],
  ["Causa limeña","Entrada",55,"Media","1 kg de papa amarilla|2 limones|Ají amarillo|1 palta|Atún y mayonesa","Cocina las papas, prénsalas y amasa con limón, ají y aceite.|Mezcla atún con mayonesa y corta la palta en láminas.|Arma capas de papa, palta y atún; enfría antes de servir."],
  ["Anticuchos de corazón","Plato principal",50,"Media","700 g de corazón de res|Ají panca|Vinagre|Ajo y comino|Papas","Limpia el corazón y córtalo en cubos; marina con ají panca, vinagre y ajo.|Ensarta los cubos y ásalos, pintando con la marinada.|Sirve con papa dorada, choclo y salsa de ají."],
  ["Papa a la huancaína","Entrada",35,"Fácil","6 papas amarillas|200 g de queso fresco|Ají amarillo|Leche evaporada|Galletas de soda","Licúa queso, ají, leche y galletas hasta lograr una salsa cremosa.|Hierve las papas, pélalas y córtalas en rodajas.|Baña con salsa y sirve con lechuga, huevo y aceitunas."],
  ["Arroz chaufa","Plato principal",30,"Fácil","3 tazas de arroz cocido|300 g de pollo|2 huevos|Cebolla china|Sillao y kion","Saltea el pollo en cubos con kion y aceite a fuego alto.|Añade huevo revuelto, arroz frío y sillao; mezcla sin dejar de mover.|Termina con abundante cebolla china picada."],
  ["Rocoto relleno","Plato principal",80,"Media","4 rocotos|400 g de carne molida|1 cebolla|Maní y pasas|Queso y leche","Desvena los rocotos y hiérvelos tres veces cambiando el agua.|Prepara un relleno de carne, cebolla, maní, pasas y especias.|Rellena, cubre con queso y mezcla de leche con huevo; hornea."],
  ["Tacu tacu","Plato principal",35,"Fácil","2 tazas de frijoles cocidos|2 tazas de arroz cocido|1 cebolla|Ají amarillo|Aceite","Sofríe cebolla con ají amarillo y comino.|Agrega frijoles y arroz; aplasta y mezcla hasta formar una masa compacta.|Dora porciones en una sartén con aceite hasta crear una costra."],
  ["Suspiro a la limeña","Postre",60,"Media","1 lata de leche condensada|1 lata de leche evaporada|3 huevos|1 taza de azúcar|Oporto y canela","Cocina ambas leches a fuego bajo hasta que espesen; añade yemas.|Bate claras a punto de nieve y vierte almíbar de azúcar con oporto.|Sirve la crema fría con merengue y canela."]]},
 {country:"Colombia",flag:"🇨🇴",recipes:[
  ["Bandeja paisa","Plato principal",120,"Avanzada","300 g de frijoles rojos|300 g de carne molida|Chicharrón|Arroz y plátano maduro|Huevo y arepa","Cocina los frijoles remojados con plátano verde y hogao hasta ablandar.|Prepara arroz, carne molida y chicharrón; fríe huevo y tajadas de maduro.|Sirve con arepa, aguacate y frijoles."],
  ["Ajiaco santafereño","Sopa",100,"Media","2 pechugas de pollo|Papa criolla, pastusa y sabanera|Mazorca|Guascas|Crema y alcaparras","Hierve pollo y mazorca; retira el pollo y desmenúzalo.|Añade las tres papas y guascas; cocina hasta que espese el caldo.|Sirve con pollo, crema, alcaparras y aguacate."],
  ["Arepas de choclo","Desayuno",35,"Fácil","2 tazas de maíz tierno|½ taza de harina de maíz|Leche|Azúcar y sal|Queso campesino","Licúa el maíz con leche, azúcar y sal; mezcla con harina.|Vierte porciones sobre una plancha engrasada y cocina por ambos lados.|Abre cada arepa y rellena con queso campesino."],
  ["Sancocho de gallina","Sopa",110,"Media","1 gallina en presas|Yuca|Plátano verde|Papa y mazorca|Cilantro y cebolla","Cocina la gallina con cebolla y cilantro hasta que empiece a ablandar.|Agrega plátano, yuca, papa y mazorca en trozos grandes.|Sirve cuando esté tierno, con arroz y hogao."],
  ["Lechona tolimense","Plato principal",240,"Avanzada","1 kg de carne de cerdo|1 taza de arvejas|Arroz cocido|Cebolla larga|Comino y cuero","Sazona el cerdo con ajo, comino y cebolla; mezcla con arroz y arvejas.|Rellena la pieza de cuero y cose la abertura.|Hornea a 160 °C hasta que la carne esté tierna y la piel crocante."],
  ["Empanadas colombianas","Entrada",55,"Media","2 tazas de harina de maíz amarilla|300 g de papa|250 g de carne|Hogao|Aceite","Cuece las papas, aplástalas y mezcla con carne guisada y hogao.|Prepara una masa amarilla con harina, agua y sal; rellena y cierra.|Fríe en aceite caliente hasta que queden crujientes."],
  ["Changua","Desayuno",25,"Fácil","2 tazas de leche|2 tazas de agua|4 huevos|Cebolla larga|Cilantro y calado","Hierve leche y agua con cebolla larga y sal.|Casca los huevos dentro del caldo y cocina hasta cuajar la clara.|Sirve con cilantro, trozos de calado y queso campesino."],
  ["Tamal tolimense","Plato principal",150,"Avanzada","2 tazas de harina de maíz|Cerdo y pollo|Arroz|Arvejas y zanahoria|Hojas de bijao","Marina las carnes con ajo, comino y cebolla; prepara una masa suave.|Coloca masa, arroz, verduras y carnes sobre hojas de bijao.|Envuelve, amarra y cocina en agua hirviendo durante 2 horas."],
  ["Pandebono","Pan",35,"Fácil","1 taza de almidón de yuca|1 taza de queso costeño|½ taza de harina de maíz|1 huevo|Leche","Mezcla almidón, queso rallado, harina y huevo.|Agrega leche poco a poco hasta obtener una masa suave; forma bolitas.|Hornea a 200 °C durante 20 minutos, hasta que inflen y doren."],
  ["Patacón con hogao","Entrada",35,"Fácil","2 plátanos verdes|2 tomates|1 cebolla larga|Ajo|Aceite y sal","Corta y fríe los plátanos en trozos gruesos durante 3 minutos.|Aplástalos y vuelve a freírlos hasta que queden dorados y crujientes.|Sofríe tomate, cebolla y ajo; sirve el hogao encima."]]},
 {country:"Ecuador",flag:"🇪🇨",recipes:[
  ["Encebollado","Sopa",55,"Media","500 g de albacora|Yuca|2 cebollas coloradas|Tomate|Cilantro y comino","Hierve albacora con tomate, cebolla y comino; cuela y reserva el caldo.|Cocina la yuca en el caldo y desmenúzala; incorpora el pescado.|Sirve con curtido de cebolla colorada, cilantro y limón."],
  ["Locro de papa","Sopa",50,"Fácil","1 kg de papa chola|1 cebolla blanca|1 taza de leche|Queso fresco|Achiote y cilantro","Sofríe cebolla con achiote; agrega papas en cubos y agua.|Cocina hasta que algunas papas se deshagan y espesen el locro.|Añade leche y queso; sirve con aguacate y cilantro."],
  ["Fanesca","Sopa",150,"Avanzada","Bacalao desalado|Choclo y zapallo|Habas y chochos|Leche y maní|Frijoles y arvejas","Cocina por separado los granos y legumbres hasta que estén tiernos.|Prepara una base cremosa con zapallo, leche, maní y bacalao.|Incorpora los granos y sirve con huevo, plátano y queso."],
  ["Llapingachos","Plato principal",50,"Media","1 kg de papa|200 g de queso|1 cebolla blanca|Achiote|Chorizo y huevo","Cocina y prensa las papas; mezcla con sofrito de cebolla y achiote.|Rellena porciones con queso y forma tortillas gruesas.|Dora en una plancha y sirve con chorizo, huevo y salsa de maní."],
  ["Hornado ecuatoriano","Plato principal",210,"Avanzada","1 paleta de cerdo|Ajo|Comino y cerveza|Mote|Llapingachos y agrio","Licúa ajo, comino, sal y cerveza; marina el cerdo desde la noche anterior.|Hornea a temperatura baja, bañando la carne con sus jugos.|Sirve con mote, llapingachos y agrio de cebolla."],
  ["Ceviche de camarón","Entrada",45,"Fácil","600 g de camarones|2 tomates|1 cebolla morada|Jugo de limón y naranja|Cilantro","Cuece los camarones brevemente en agua con sal y enfría.|Mezcla con tomate licuado, limón, naranja, cebolla y cilantro.|Reposa en frío y sirve con chifles o patacones."],
  ["Seco de pollo","Plato principal",75,"Media","4 presas de pollo|1 cerveza|2 tomates|Cebolla y pimiento|Cilantro y comino","Licúa tomate, cebolla, pimiento, cilantro y comino para el refrito.|Dora el pollo, agrega la salsa y cerveza; tapa hasta ablandar.|Sirve con arroz amarillo, aguacate y maduro frito."],
  ["Bolón de verde","Desayuno",40,"Fácil","3 plátanos verdes|200 g de queso|Chicharrón|Mantequilla|Sal","Cocina los plátanos en agua con sal hasta que estén blandos.|Aplasta con mantequilla y mezcla con queso o chicharrón.|Forma bolas grandes y dora en sartén antes de servir."],
  ["Humitas ecuatorianas","Desayuno",70,"Media","6 choclos tiernos|2 huevos|Queso fresco|Mantequilla|Hojas de choclo","Ralla el choclo y mezcla con huevos, mantequilla y sal.|Coloca porciones sobre hojas de choclo, agrega queso y envuelve.|Cocina al vapor durante 45 minutos."],
  ["Cuy asado","Plato principal",100,"Media","1 cuy limpio|Ajo|Comino y achiote|Papas|Cebolla y hierbas","Adoba el cuy con ajo, comino, achiote, sal y hierbas por varias horas.|Ásalo lentamente sobre brasas, girando hasta que quede crocante.|Sirve con papas cocidas y salsa de cebolla."]]},
 {country:"Uruguay",flag:"🇺🇾",recipes:[
  ["Chivito al pan","Plato principal",35,"Media","4 bifes de lomo|4 panes|Jamón y mozzarella|Tomate y lechuga|Huevo y aceitunas","Cocina los bifes a la plancha y cubre con jamón y mozzarella.|Tuesta los panes; añade lechuga, tomate, huevo frito y el bife.|Termina con aceitunas y acompaña con papas fritas."],
  ["Asado uruguayo","Plato principal",150,"Media","1,5 kg de tira de asado|Sal gruesa|Morcillas|Chorizos|Limón","Prepara brasas suaves y distribúyelas debajo de la parrilla.|Sala la carne y cocina lentamente primero del lado del hueso.|Dora chorizos y morcillas en la parrilla; sirve recién hecho."],
  ["Chajá","Postre",80,"Media","1 bizcochuelo|500 ml de crema|Duraznos en almíbar|Dulce de leche|Merengues","Corta el bizcochuelo en capas y humedécelo con almíbar de durazno.|Alterna capas de dulce de leche, durazno y crema batida.|Cubre con crema y merengue triturado; enfría."],
  ["Choripán uruguayo","Plato principal",30,"Fácil","4 chorizos|4 panes|Perejil|Ajo|Vinagre y aceite","Asa los chorizos a fuego medio hasta que queden dorados y cocidos.|Pica perejil y ajo; mezcla con vinagre, aceite, sal y ají.|Sirve en pan caliente con chimichurri."],
  ["Pascualina","Plato principal",75,"Media","2 tapas de masa|500 g de acelga|1 cebolla|4 huevos|Ricota y queso rallado","Saltea cebolla y acelga; mezcla con ricota, queso y un huevo.|Forra una tartera, agrega el relleno y haz huecos para los huevos restantes.|Cubre con la otra masa y hornea a 190 °C hasta dorar."],
  ["Milanesa al plato","Plato principal",40,"Fácil","4 bifes finos de carne|2 huevos|Pan rallado|Ajo y perejil|Limón","Bate huevos con ajo y perejil; pasa allí los bifes.|Empaniza con pan rallado y fríe en aceite caliente hasta dorar.|Sirve con limón, ensalada y papas fritas."],
  ["Fainá","Entrada",45,"Fácil","250 g de harina de garbanzo|750 ml de agua|Aceite de oliva|Sal|Pimienta","Mezcla harina, agua, sal y pimienta; deja reposar 30 minutos.|Calienta una asadera aceitada en horno fuerte.|Vierte la mezcla y hornea 25 minutos, hasta dorar."],
  ["Torta frita","Merienda",35,"Fácil","500 g de harina|1 cucharada de grasa|250 ml de agua tibia|Sal|Aceite","Mezcla harina, sal, grasa y agua; amasa y reposa 15 minutos.|Forma discos, haz un agujero en el centro y estira los bordes.|Fríe en grasa o aceite caliente; sirve con azúcar o mate."],
  ["Ñoquis del 29","Plato principal",65,"Media","1 kg de papas|300 g de harina|1 huevo|Nuez moscada|Salsa de tomate","Cocina las papas con piel, pélalas y haz un puré seco.|Mezcla con huevo, harina y nuez moscada; forma y corta los ñoquis.|Hierve hasta que suban a la superficie y sirve con salsa."],
  ["Alfajores uruguayos","Postre",55,"Media","250 g de harina|100 g de mantequilla|Dulce de leche|2 huevos|Chocolate para bañar","Bate mantequilla con azúcar y huevos; incorpora harina hasta formar una masa.|Corta tapas y hornea a 180 °C durante 12 minutos.|Rellena con dulce de leche y baña en chocolate fundido."]]},
 {country:"Puerto Rico",flag:"🇵🇷",recipes:[
  ["Mofongo","Plato principal",45,"Media","4 plátanos verdes|4 dientes de ajo|Chicharrón|Aceite de oliva|Caldo","Pela los plátanos, córtalos y fríelos hasta que estén tiernos.|Maja en un pilón con ajo, chicharrón y aceite de oliva.|Forma una bola y sirve con caldo o camarones guisados."],
  ["Arroz con gandules","Plato principal",60,"Fácil","2 tazas de arroz|1 lata de gandules|Sofrito|Jamón en cubos|Aceitunas y achiote","Sofríe jamón con sofrito, achiote y aceitunas.|Agrega gandules, arroz y agua; lleva a hervor.|Tapa y cocina a fuego bajo hasta que el arroz esté tierno."],
  ["Pernil asado","Plato principal",240,"Media","2 kg de paleta de cerdo|Ajo|Orégano|Vinagre|Sal y pimienta","Muele ajo con orégano, vinagre, sal y pimienta; frota el pernil.|Refrigera tapado al menos 8 horas para que tome sabor.|Hornea a 160 °C hasta que esté tierno y termina a temperatura alta."],
  ["Pasteles puertorriqueños","Plato principal",150,"Avanzada","Plátano verde y yautía|Calabaza|500 g de cerdo|Hojas de plátano|Aceitunas y sofrito","Prepara un guiso de cerdo con sofrito y aceitunas.|Ralla los viandas, mezcla con calabaza y sazona con aceite de achiote.|Rellena hojas, envuelve y hierve los pasteles hasta cocer."],
  ["Asopao de pollo","Sopa",70,"Media","4 presas de pollo|1 taza de arroz|Sofrito|Tomate|Aceitunas y cilantro","Dora el pollo y agrega sofrito, tomate, aceitunas y caldo.|Cuando hierva, añade arroz y cocina a fuego bajo, removiendo.|Sirve caldoso con cilantro fresco y limón."],
  ["Tostones","Entrada",25,"Fácil","2 plátanos verdes|Aceite|Sal|Ajo|Mayonesa","Corta los plátanos en rodajas gruesas y fríe hasta que estén blandos.|Aplasta con una tostonera y vuelve a freír hasta dorar.|Escurre, sala y sirve con salsa de ajo."],
  ["Alcapurrias","Entrada",70,"Media","Yautía|Plátano verde|500 g de carne molida|Sofrito|Aceite","Ralla yautía y plátano; sazona la masa con sal y aceite de achiote.|Cocina la carne con sofrito hasta que quede seca.|Extiende masa sobre hoja, rellena, cierra y fríe hasta dorar."],
  ["Bacalaitos","Entrada",35,"Fácil","250 g de bacalao desalado|1 taza de harina|Cilantro|Ajo|Agua y aceite","Desmenuza el bacalao y mézclalo con harina, ajo y cilantro.|Agrega agua hasta formar una mezcla ligera sin grumos.|Vierte cucharadas en aceite caliente y fríe hasta quedar crujiente."],
  ["Tembleque","Postre",25,"Fácil","800 ml de leche de coco|½ taza de azúcar|½ taza de maicena|Canela|Sal","Disuelve la maicena en una taza de leche de coco fría.|Calienta el resto con azúcar y sal; agrega la mezcla y revuelve hasta espesar.|Vierte en moldes, enfría y espolvorea canela."],
  ["Coquito","Bebida",15,"Fácil","1 lata de leche de coco|1 lata de leche condensada|1 lata de crema de coco|Canela|Vainilla y ron","Licúa las leches con vainilla y una pizca de canela.|Agrega ron al gusto y vuelve a mezclar brevemente.|Refrigera varias horas y sirve frío."]]},
 {country:"Paraguay",flag:"🇵🇾",recipes:[
  ["Sopa paraguaya","Entrada",65,"Fácil","2 tazas de harina de maíz|2 cebollas|300 g de queso Paraguay|4 huevos|Leche y manteca","Sofríe la cebolla en manteca hasta que quede transparente.|Mezcla harina, huevos, leche, queso desmenuzado y cebolla.|Hornea en una fuente a 180 °C durante 40 minutos."],
  ["Chipa","Pan",45,"Fácil","500 g de almidón de mandioca|300 g de queso|2 huevos|100 g de manteca|Anís y leche","Mezcla almidón, queso, manteca, huevos, sal y anís.|Agrega leche poco a poco hasta obtener una masa firme y suave.|Forma roscas y hornea a 200 °C hasta que doren."],
  ["Mbejú","Desayuno",25,"Fácil","2 tazas de almidón de mandioca|200 g de queso Paraguay|100 g de manteca|Sal","Desmenuza el queso con manteca y sal; incorpora almidón hasta arenar.|Calienta una sartén y distribuye una capa de mezcla.|Dora por ambos lados y sirve caliente."],
  ["Bori bori","Sopa",75,"Media","1 pollo en presas|½ taza de harina de maíz|Queso Paraguay|Cebolla y tomate|Perejil","Prepara un caldo con pollo, cebolla, tomate y sal.|Mezcla harina con queso y caldo; forma bolitas pequeñas.|Añádelas al caldo y cocina 15 minutos; sirve con perejil."],
  ["Vori vori de pollo","Sopa",70,"Media","4 presas de pollo|Harina de maíz|Queso Paraguay|Cebolla y zapallo|Perejil","Dora el pollo y cocina en agua con cebolla y zapallo hasta ablandar.|Forma bolitas con harina de maíz, queso y caldo.|Añade al caldo y cocina hasta que suban; sirve caliente."],
  ["Chipa guasu","Entrada",60,"Fácil","6 choclos frescos|2 cebollas|4 huevos|Queso Paraguay|Leche y grasa","Ralla los choclos y mezcla con leche y huevos batidos.|Sofríe cebolla en grasa e incorpórala con el queso.|Hornea a 180 °C hasta que cuaje y dore."],
  ["Pira caldo","Sopa",55,"Fácil","700 g de pescado de río|2 tomates|1 cebolla|Locote|Leche y queso","Sofríe cebolla, tomate y locote picados en una olla.|Agrega agua, leche y pescado en trozos; cocina suavemente.|Añade queso Paraguay, sal y perejil antes de servir."],
  ["Payagua mascada","Entrada",50,"Media","500 g de mandioca|300 g de carne molida|1 cebolla|Comino|Aceite","Hierve la mandioca, haz un puré firme y condimenta con sal.|Prepara un relleno seco con carne, cebolla y comino.|Forma tortitas rellenas y fríe hasta dorar."],
  ["So'o yosopy","Sopa",65,"Media","400 g de carne de res|½ taza de harina de maíz|2 cebollas|Perejil|Caldo y comino","Mezcla carne molida con harina de maíz, cebolla picada y comino.|Forma pequeñas albóndigas y agrégalas al caldo hirviendo.|Cocina 25 minutos y termina con perejil."],
  ["Kivevé","Acompañamiento",40,"Fácil","600 g de calabaza|1 taza de harina de maíz|200 g de queso Paraguay|Leche|Azúcar y sal","Cocina la calabaza en cubos con agua hasta que se deshaga.|Agrega leche y harina de maíz en lluvia, revolviendo para evitar grumos.|Incorpora queso y una pizca de azúcar; cocina hasta cremoso."]]},
 {country:"El Salvador",flag:"🇸🇻",recipes:[
  ["Pupusas revueltas","Plato principal",55,"Media","2 tazas de masa de maíz|Quesillo|Frijoles refritos|Chicharrón molido|Curtido y salsa","Mezcla quesillo, frijoles y chicharrón para el relleno.|Forma una tortilla de masa, coloca el relleno al centro y cierra en un disco.|Cocina en comal por ambos lados; sirve con curtido y salsa de tomate."],
  ["Yuca frita con chicharrón","Entrada",45,"Fácil","1 kg de yuca|400 g de chicharrón|Curtido de repollo|Salsa de tomate|Limón","Pela y cuece la yuca en agua con sal hasta que esté tierna.|Escúrrela y fríe los trozos hasta dorar por fuera.|Sirve con chicharrón, curtido y salsa."],
  ["Sopa de pata","Sopa",180,"Media","1 pata de res|Mondas de plátano|Yuca|Elote|Repollo y hierbas","Cocina la pata en abundante agua hasta que esté tierna.|Agrega yuca, elote, plátano y verduras; sazona con hierbas.|Sirve con limón y cilantro picado."],
  ["Tamales pisques","Plato principal",100,"Media","2 tazas de masa de maíz|Frijoles negros molidos|Hojas de huerta|Ajo|Manteca y sal","Sazona la masa con manteca, ajo y sal hasta que quede suave.|Coloca masa y frijoles molidos sobre hojas limpias; envuelve bien.|Cocina al vapor durante una hora y sirve caliente."],
  ["Panes con pollo","Plato principal",70,"Media","4 panes franceses|2 pechugas de pollo|Tomate y pepino|Berro y rábano|Mayonesa y escabeche","Cuece el pollo con tomate y especias; desmenúzalo y reserva el caldo.|Prepara una salsa con el caldo y verduras licuadas; cocina hasta espesar.|Rellena los panes con pollo, vegetales, escabeche y salsa."],
  ["Empanadas de plátano","Postre",50,"Media","4 plátanos maduros|Frijoles refritos|Azúcar|Canela|Aceite","Cuece los plátanos con cáscara, pélalos y haz un puré firme.|Toma una porción, rellena con frijoles dulces y cierra en forma ovalada.|Fríe hasta dorar y espolvorea azúcar con canela."],
  ["Riguas","Desayuno",35,"Fácil","4 elotes tiernos|½ taza de leche|Sal|Hojas de huerta|Queso fresco","Desgrana y muele el maíz con leche y una pizca de sal.|Coloca porciones sobre hojas limpias y dobla para cubrirlas.|Cocina en comal por ambos lados; acompaña con queso."],
  ["Atol de elote","Bebida",35,"Fácil","4 elotes tiernos|1 litro de leche|Azúcar|Canela|Sal","Muele los granos de elote con un poco de leche y cuela.|Calienta con el resto de la leche, azúcar, canela y sal.|Remueve hasta que espese ligeramente; sirve caliente."],
  ["Nuégados con miel","Postre",45,"Media","2 tazas de yuca rallada|1 huevo|Queso duro|Miel de panela|Aceite","Mezcla yuca rallada con huevo, queso y una pizca de sal.|Forma bolitas y fríelas hasta que estén doradas.|Baña con miel tibia de panela y canela."],
  ["Chilate con dulce de panela","Bebida",30,"Fácil","½ taza de masa de maíz|1 litro de agua|Jengibre|Pimienta gorda|Panela y canela","Disuelve la masa en agua fría y cuélala para retirar grumos.|Hierve con jengibre y pimienta gorda, removiendo hasta que espese.|Endulza con panela y sirve con nuégados."]]},
];

const STORAGE_KEYS={custom:"del-mundo-recetas",favorites:"del-mundo-favoritos"};
const PAGE_SIZE=12;
const defaultImage="https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=960&q=80";
const imageCacheKey="del-mundo-imagenes-v4";
const imageSearchAliases={
 "Arepas":["Arepas plato venezolano","arepas venezolanas plato venezolano"],
 "Pabellón criollo":["Pabellón criollo plato venezolano","pabellón venezolano plato venezolano"],
 "Hallacas":["Hallacas plato venezolano","hallacas venezolanas plato venezolano"],
 "Asado negro":["Asado negro plato venezolano","asado negro venezolano plato venezolano"],
 "Patacón":["Patacones plato venezolano","patacones con guasacaca plato venezolano"],
 "Pisca andina":["sopa papa andina","sopa andina"],
 "Fricasé paceño":["fricase paceño","fricase boliviano"],
 "Majadito cruceño":["majadito"],
 "Empanadas criollas":["empanadas de carne argentina"],
 "Choripán con chimichurri":["choripan"],
 "Carbonada criolla":["carbonada argentina"],
 "Provoleta a la parrilla":["provoleta argentina"],
 "Alfajores de maicena":["alfajores maicena argentina"],
 "Causa limeña":["causa limeña peruana"],
 "Anticuchos de corazón":["anticuchos grilled beef heart"],
 "Ajiaco santafereño":["ajiaco bogotano"],
 "Lechona tolimense":["lechona colombiana"],
 "Patacón con hogao":["patacones venezolanos"],
 "Humitas ecuatorianas":["humitas ecuador"],
 "Choripán uruguayo":["choripan"],
 "Pernil asado":["pernil puerto rico"],
 "Pasteles puertorriqueños":["pasteles puerto rico"],
 "Asopao de pollo":["asopao puerto rico"],
 "Vori vori de pollo":["vori vori paraguay"],
 "Pira caldo":["sopa de pescado Paraguay"],
 "Bori bori":["vori vori caldo"],
 "So'o yosopy":["soyo sopa tradicional"],
 "Yuca frita con chicharrón":["yuca frita salvadoreña"],
 "Tamales pisques":["tamales salvadoreños"],
 "Panes con pollo":["panesconpollo"],
 "Riguas":["derivados maiz tierno"],
 "Nuégados con miel":["nuegados el salvador"],
 "Chilate con dulce de panela":["chilate bebida"],
 "Encebollado":["encebollado Ecuador pescado"],
 "Chajá":["torta chaja Uruguay"],
 "Fainá":["faina Argentina"],
 "Ñoquis del 29":["gnocchi Uruguay 29"],
 "Tembleque":["tembleque coconut pudding Puerto Rico"],
 "Alfajores de maicena":["alfajor maicena corte en dos"],
 "Patacón con hogao":["sopa de patacones Buga"],
};
const manualImageOverrides={
  "0-0":{url:"https://images.pexels.com/photos/29465175/pexels-photo-29465175/free-photo-of-traditional-arepa-with-shredded-beef-filling.jpeg?auto=compress&cs=tinysrgb&w=1200",page:"https://www.pexels.com/photo/traditional-arepa-with-shredded-beef-filling-29465175/",source:"Pexels",title:"Venezuelan arepa with shredded beef"},
  "0-1":{url:"https://images.pexels.com/photos/29450672/pexels-photo-29450672/free-photo-of-traditional-venezuelan-pabellon-criollo-dish.jpeg?auto=compress&cs=tinysrgb&w=1200",page:"https://www.pexels.com/photo/traditional-venezuelan-pabellon-criollo-dish-29450672/",source:"Pexels",title:"Venezuelan Pabellón Criollo"},
  "0-2":{url:"https://images.pexels.com/photos/29535633/pexels-photo-29535633/free-photo-of-traditional-venezuelan-food-platter-with-festive-arrangement.jpeg?auto=compress&cs=tinysrgb&w=1200",page:"https://www.pexels.com/photo/traditional-venezuelan-food-platter-with-festive-arrangement-29535633/",source:"Pexels",title:"Venezuelan festive platter with hallacas"},
  "0-3":{url:"https://images.pexels.com/photos/11094167/pexels-photo-11094167.jpeg?auto=compress&cs=tinysrgb&w=1200",page:"https://www.pexels.com/photo/macro-photography-of-a-cachapa-11094167/",source:"Pexels",title:"Venezuelan cachapa with cheese"},
  "0-4":{url:"https://upload.wikimedia.org/wikipedia/commons/0/0a/Asado_negro.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=original",page:"https://commons.wikimedia.org/wiki/File:Asado_negro.jpg",title:"File:Asado negro.jpg"},
  "0-5":{url:"https://images.pexels.com/photos/37039787/pexels-photo-37039787/free-photo-of-traditional-colombian-meal-with-ajiaco-soup.jpeg?auto=compress&cs=tinysrgb&w=1200",page:"https://www.pexels.com/photo/traditional-colombian-meal-with-ajiaco-soup-37039787/",source:"Pexels",title:"Andean potato soup"},
  "0-6":{url:"https://images.pexels.com/photos/16971086/pexels-photo-16971086/free-photo-of-tequenos-with-dips-and-cold-beer-on-a-table.jpeg?auto=compress&cs=tinysrgb&w=1200",page:"https://www.pexels.com/photo/tequenos-with-sauce-and-two-bottles-of-cold-beer-on-a-table-16971086/",source:"Pexels",title:"Tequeños served with dipping sauces"},
  "0-7":{url:"https://images.pexels.com/photos/17459926/pexels-photo-17459926/free-photo-of-bread-in-bowl.jpeg?auto=compress&cs=tinysrgb&w=1200",page:"https://www.pexels.com/photo/bread-in-bowl-17459926/",source:"Pexels",title:"Venezuelan mandocas"},
  "0-8":{url:"https://images.pexels.com/photos/34474033/pexels-photo-34474033/free-photo-of-delicious-slice-of-caramel-flan-on-a-plate.jpeg?auto=compress&cs=tinysrgb&w=1200",page:"https://www.pexels.com/photo/delicious-slice-of-caramel-flan-on-a-plate-34474033/",source:"Pexels",title:"Caramel flan dessert"},
  "0-9":{url:"https://upload.wikimedia.org/wikipedia/commons/8/89/Parrilla_con_patacones_y_ensalada%2C_plato_Venezolano.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=original",page:"https://commons.wikimedia.org/wiki/File:Parrilla_con_patacones_y_ensalada,_plato_Venezolano.jpg",title:"File:Parrilla con patacones y ensalada, plato Venezolano.jpg"},
  "2-8":{url:"https://thumb.wikimedia.org/wikipedia/commons/thumb/5/58/Sopaipillas_chilenas.jpg/1280px-Sopaipillas_chilenas.jpg",page:"https://commons.wikimedia.org/wiki/File:Sopaipillas_chilenas.jpg",source:"Wikimedia Commons",title:"Sopaipillas chilenas"},
  "2-9":{url:"https://thumb.wikimedia.org/wikipedia/commons/thumb/6/64/Mote_con_huesillos_de_Talca.jpg/1280px-Mote_con_huesillos_de_Talca.jpg",page:"https://commons.wikimedia.org/wiki/File:Mote_con_huesillos_de_Talca.jpg",source:"Wikimedia Commons",title:"Mote con huesillos de Talca"},
  "5-2":{url:"https://thumb.wikimedia.org/wikipedia/commons/thumb/1/1f/Arepa_de_chocolo.jpg/960px-Arepa_de_chocolo.jpg",page:"https://commons.wikimedia.org/wiki/File:Arepa_de_chocolo.jpg",source:"Wikimedia Commons",title:"Arepa de chocolo rellena de queso"},
  "5-9":{url:"https://thumb.wikimedia.org/wikipedia/commons/thumb/5/5c/Patacones_com_hogao_%283279045361%29.jpg/960px-Patacones_com_hogao_%283279045361%29.jpg",page:"https://commons.wikimedia.org/wiki/File:Patacones_com_hogao_(3279045361).jpg",source:"Wikimedia Commons",title:"Patacones con hogao"},
  "3-4":{url:"https://thumb.wikimedia.org/wikipedia/commons/thumb/6/6d/Chorip%C3%A1n_argentino_a_la_parrilla_con_salsa_tradicional_chimichurri.jpg/1280px-Chorip%C3%A1n_argentino_a_la_parrilla_con_salsa_tradicional_chimichurri.jpg",page:"https://commons.wikimedia.org/wiki/File:Chorip%C3%A1n_argentino_a_la_parrilla_con_salsa_tradicional_chimichurri.jpg",source:"Wikimedia Commons",title:"Choripán argentino a la parrilla con chimichurri"},
  "6-3":{url:"https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a5/Llapingachos._%2840491622163%29.jpg/1280px-Llapingachos._%2840491622163%29.jpg",page:"https://commons.wikimedia.org/wiki/File:Llapingachos._(40491622163).jpg",source:"Wikimedia Commons",title:"Llapingachos ecuatorianos servidos con acompañamientos"},
  "6-7":{url:"https://upload.wikimedia.org/wikipedia/commons/a/af/Bol%C3%B3n_de_pl%C3%A1tano_verde_con_chicharr%C3%B3n_y_caf%C3%A9%2C_de_Ecuador.jpg",page:"https://commons.wikimedia.org/wiki/File:Bol%C3%B3n_de_pl%C3%A1tano_verde_con_chicharr%C3%B3n_y_caf%C3%A9,_de_Ecuador.jpg",source:"Wikimedia Commons",title:"Bolón de plátano verde con chicharrón y café, de Ecuador"},
  "7-2":{url:"https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f4/Torta_chaj%C3%A1.jpg/1280px-Torta_chaj%C3%A1.jpg",page:"https://commons.wikimedia.org/wiki/File:Torta_chaj%C3%A1.jpg",source:"Wikimedia Commons",title:"Torta chajá"},
  "7-6":{url:"https://thumb.wikimedia.org/wikipedia/commons/thumb/2/25/Fain%C3%A1_argentina.jpg/1280px-Fain%C3%A1_argentina.jpg",page:"https://commons.wikimedia.org/wiki/File:Fain%C3%A1_argentina.jpg",source:"Wikimedia Commons",title:"Fainá argentina"},
  "7-7":{url:"https://thumb.wikimedia.org/wikipedia/commons/thumb/5/54/Mate_amargo_y_tortas_fritas.jpg/1280px-Mate_amargo_y_tortas_fritas.jpg",page:"https://commons.wikimedia.org/wiki/File:Mate_amargo_y_tortas_fritas.jpg",source:"Wikimedia Commons",title:"Mate amargo y tortas fritas"},
  "7-8":{url:"https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a2/%C3%91oquis_de_papa_con_salsa_de_tomate_%28plato%29.jpg/1280px-%C3%91oquis_de_papa_con_salsa_de_tomate_%28plato%29.jpg",page:"https://commons.wikimedia.org/wiki/File:%C3%91oquis_de_papa_con_salsa_de_tomate_(plato).jpg",source:"Wikimedia Commons",title:"Ñoquis de papa con salsa de tomate"},
  "7-9":{url:"https://thumb.wikimedia.org/wikipedia/commons/thumb/f/fa/Alfajores_de_maicena.jpg/1280px-Alfajores_de_maicena.jpg",page:"https://commons.wikimedia.org/wiki/File:Alfajores_de_maicena.jpg",source:"Wikimedia Commons",title:"Alfajores de maicena"},
  "9-0":{url:"https://thumb.wikimedia.org/wikipedia/commons/thumb/2/25/Sopa_paraguaya_%28servida_en_tabla_de_madera%29.jpg/1280px-Sopa_paraguaya_%28servida_en_tabla_de_madera%29.jpg",page:"https://commons.wikimedia.org/wiki/File:Sopa_paraguaya_(servida_en_tabla_de_madera).jpg",source:"Wikimedia Commons",title:"Sopa paraguaya servida en tabla de madera"},
  "9-1":{url:"https://images.pexels.com/photos/34521009/pexels-photo-34521009.jpeg?auto=compress&cs=tinysrgb&w=1200",page:"https://www.pexels.com/photo/delicious-brazilian-cheese-bread-on-a-plate-34521009/",source:"Pexels",title:"Golden cheese bread rolls"},
  "9-2":{url:"https://images.pexels.com/photos/11094180/pexels-photo-11094180.jpeg?auto=compress&cs=tinysrgb&w=1200",page:"https://www.pexels.com/photo/photograph-of-a-taco-on-a-wooden-chopping-board-11094180/",source:"Pexels",title:"Brazilian tapioca wrap"},
  "9-3":{url:"https://images.pexels.com/photos/27397338/pexels-photo-27397338.jpeg?auto=compress&cs=tinysrgb&w=1200",page:"https://www.pexels.com/photo/paraguayan-vori-vori-soup-27397338/",source:"Pexels",title:"Traditional Paraguayan vori vori soup"},
  "9-4":{url:"https://upload.wikimedia.org/wikipedia/commons/b/b9/Vor%C3%AD_vor%C3%AD_paraguay.jpg",page:"https://commons.wikimedia.org/wiki/File:Vor%C3%AD_vor%C3%AD_paraguay.jpg",source:"Wikimedia Commons",title:"Vorí vorí paraguay"},
  "9-5":{url:"https://images.pexels.com/photos/34637997/pexels-photo-34637997.jpeg?auto=compress&cs=tinysrgb&w=1200",page:"https://www.pexels.com/photo/delicious-mexican-corn-cake-slice-on-vibrant-plate-34637997/",source:"Pexels",title:"Golden corn cake slice"},
  "9-6":{url:"https://images.pexels.com/photos/17321130/pexels-photo-17321130.jpeg?auto=compress&cs=tinysrgb&w=1200",page:"https://www.pexels.com/photo/a-bowl-of-stew-with-tomatoes-lemons-and-herbs-17321130/",source:"Pexels",title:"Fish stew with tomato and fresh herbs"},
  "9-8":{url:"https://images.pexels.com/photos/30335662/pexels-photo-30335662.jpeg?auto=compress&cs=tinysrgb&w=1200",page:"https://www.pexels.com/photo/warm-hearty-meatball-soup-in-rustic-bowl-30335662/",source:"Pexels",title:"Hearty meatball soup"},
  "9-9":{url:"https://images.pexels.com/photos/5662190/pexels-photo-5662190.jpeg?auto=compress&cs=tinysrgb&w=1200",page:"https://www.pexels.com/photo/pumpkin-soup-on-a-bowl-5662190/",source:"Pexels",title:"Creamy pumpkin soup with bread"}
};
const imageCache={...loadImageCache(),...manualImageOverrides};
const countries=recipeData.map(({country,flag})=>({country,flag}));
const seedRecipes=recipeData.flatMap((group,countryIndex)=>group.recipes.map((row,index)=>{
  const [name,category,minutes,difficulty,ingredients,instructions]=row;
  return {id:`${countryIndex}-${index}`,name,country:group.country,flag:group.flag,category,time:`${minutes} min`,difficulty,ingredients:ingredients.split("|"),instructions:instructions.split("|"),image:defaultImage,description:`${name}, un clásico de la cocina de ${group.country}.`,userCreated:false};
}));
const grid=document.querySelector("#recipe-grid");
const searchInput=document.querySelector("#recipe-search");
const countryFilter=document.querySelector("#country-filter");
const resultsSummary=document.querySelector("#results-summary");
const emptyState=document.querySelector("#empty-state");
const pagination=document.querySelector("#pagination");
const favoritesToggle=document.querySelector("#favorites-toggle");
const favoritesFilter=document.querySelector("#favorites-filter");
const favoriteCount=document.querySelector("#favorite-count");
const recipeDialog=document.querySelector("#recipe-dialog");
const dialogContent=document.querySelector("#dialog-content");
const formDialog=document.querySelector("#form-dialog");
const recipeForm=document.querySelector("#recipe-form");
let customRecipes=loadJSON(STORAGE_KEYS.custom,[]);
let favoriteIds=loadJSON(STORAGE_KEYS.favorites,[]);
let selectedCountry="";
let favoritesOnly=false;
let currentPage=1;
let toastTimer;
const pendingImageRequests=new Map();

function loadJSON(key,fallback){try{const value=JSON.parse(localStorage.getItem(key));return Array.isArray(value)?value:fallback}catch{return fallback}}
function loadImageCache(){try{const value=JSON.parse(localStorage.getItem(imageCacheKey));return value&&typeof value==="object"&&!Array.isArray(value)?value:{}}catch{return {}}}
function saveJSON(key,value){try{localStorage.setItem(key,JSON.stringify(value))}catch{showToast("No se pudo guardar en este navegador.")}}
function escapeHTML(value){return String(value).replace(/[&<>"']/g,(character)=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[character])}
function allRecipes(){return [...customRecipes,...seedRecipes]}
function getVisibleRecipes(){const query=searchInput.value.trim().toLocaleLowerCase("es");return allRecipes().filter((recipe)=>{const countryMatch=!selectedCountry||recipe.country===selectedCountry;const favoriteMatch=!favoritesOnly||favoriteIds.includes(recipe.id);const searchable=[recipe.name,recipe.country,recipe.category,...recipe.ingredients].join(" ").toLocaleLowerCase("es");return countryMatch&&favoriteMatch&&searchable.includes(query)})}
function renderCountries(){document.querySelector("#country-list").innerHTML=countries.map(({country,flag})=>`<button class="country-chip${selectedCountry===country?" active":""}" type="button" data-country="${escapeHTML(country)}" aria-pressed="${selectedCountry===country}"><span class="flag" aria-hidden="true">${flag}</span><span class="country-name">${escapeHTML(country)}</span></button>`).join("");countryFilter.innerHTML=`<option value="">Todos los países</option>${countries.map(({country})=>`<option value="${escapeHTML(country)}">${escapeHTML(country)}</option>`).join("")}`;countryFilter.value=selectedCountry}
function renderCard(recipe,index){const cached=imageCache[recipe.id];const image=escapeHTML(cached?.url||recipe.image||defaultImage);const name=escapeHTML(recipe.name);const country=escapeHTML(recipe.country);const description=escapeHTML(recipe.description||`${recipe.name}, un clásico de la cocina de ${recipe.country}.`);const favorite=favoriteIds.includes(recipe.id);const creditLabel=escapeHTML(cached?.source||"Wikimedia Commons");const credit=cached?.page?`<a class="image-credit" href="${escapeHTML(cached.page)}" target="_blank" rel="noreferrer">${creditLabel} ↗</a>`:`<a class="image-credit" data-image-credit="${escapeHTML(recipe.id)}" hidden target="_blank" rel="noreferrer">Wikimedia Commons ↗</a>`;return `<article class="recipe-card" style="animation-delay:${Math.min(index*35,280)}ms"><div class="card-image-wrap"><img class="card-image" src="${image}" alt="${name}, plato tradicional de ${country}" loading="lazy" data-recipe-image="${escapeHTML(recipe.id)}" data-fallback="${escapeHTML(defaultImage)}">${credit}<span class="card-country"><span class="flag" aria-hidden="true">${escapeHTML(recipe.flag||"🍽️")}</span>${country}</span><button class="favorite-button${favorite?" is-favorite":""}" type="button" data-favorite="${escapeHTML(recipe.id)}" aria-label="${favorite?"Quitar de":"Agregar a"} favoritos: ${name}" aria-pressed="${favorite}">${favorite?"♥":"♡"}</button></div><div class="card-body"><div class="card-meta"><span>${escapeHTML(recipe.category)}</span><span>${escapeHTML(recipe.time)}</span></div><h3>${name}</h3><p class="card-description">${description}</p><div class="card-bottom"><span class="difficulty">${escapeHTML(recipe.difficulty)}</span><button class="view-recipe" type="button" data-recipe="${escapeHTML(recipe.id)}">Ver receta <span aria-hidden="true">→</span></button></div></div></article>`}
function renderPagination(pageCount){if(pageCount<2){pagination.innerHTML="";return}pagination.innerHTML=Array.from({length:pageCount},(_,index)=>index+1).map((page)=>`<button class="page-button${page===currentPage?" active":""}" type="button" data-page="${page}" aria-label="Página ${page}" aria-current="${page===currentPage?"page":"false"}">${page}</button>`).join("")}
function attachImageFallbacks(){document.querySelectorAll(".card-image").forEach((image)=>image.addEventListener("error",()=>{const recipeId=image.dataset.recipeImage;if(recipeId&&imageCache[recipeId]){delete imageCache[recipeId];try{localStorage.setItem(imageCacheKey,JSON.stringify(imageCache))}catch{}}const credit=image.closest(".card-image-wrap")?.querySelector(".image-credit");if(credit)credit.hidden=true;if(image.dataset.fallback&&image.src!==image.dataset.fallback)image.src=image.dataset.fallback},{once:true}))}
const ignoredImageWords=new Set(["de","del","la","el","los","las","con","a","al","en","y","the","food","dish","plato","recipe","filetype","bitmap","peru","peruvian","argentina","argentinian","chile","chilean","bolivia","bolivian","venezuela","venezuelan","colombia","colombian","ecuador","ecuadorian","uruguay","uruguayan","paraguay","paraguayan","puerto","rico","salvador","salvadoran"]);
const rejectedImageWords=new Set(["windmill","windmills","quixote","pichones","chiang","gabor","navy","board","dermestidae","nhmuk","insect","beetle","envoltorio","wrapper","packaging","campeonato","championship"]);
function imageTokens(value){return [...new Set(value.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLocaleLowerCase("es").replace(/[^a-z0-9 ]/g," ").split(/\s+/).filter((word)=>word&&!ignoredImageWords.has(word)).map((word)=>word.replace(/(es|s)$/,"")))]}
function imageTitleScore(term,title){const expected=imageTokens(term);if(!expected.length)return 0;const normalizedTitle=title.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLocaleLowerCase("es");const actual=imageTokens(title.replace(/^File:/i,""));if(actual.some((word)=>rejectedImageWords.has(word)))return 0;const matches=expected.filter((token)=>actual.includes(token)).length;return matches/expected.length}
function buildImageSearchTerms(recipe) {
  const baseTerms = [recipe.name, ...(imageSearchAliases[recipe.name] || [])];
  const uniqueTerms = new Set();

  for (const term of baseTerms) {
    if (!term) continue;

    const cleaned = term.trim();
    if (!cleaned) continue;

    uniqueTerms.add(cleaned);
    uniqueTerms.add(`${cleaned} ${recipe.country}`);
    uniqueTerms.add(`${cleaned} ${recipe.country} comida`);
    uniqueTerms.add(`${cleaned} ${recipe.country} receta`);
  }

  return [...uniqueTerms].filter(Boolean);
}

async function findCommonsImage(recipe) {
  const terms = buildImageSearchTerms(recipe);

  for (const term of terms) {
    const searchTerm = `${term} filetype:bitmap`;
    const query = encodeURIComponent(searchTerm);
    const endpoint = `https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrsearch=${query}&gsrnamespace=6&gsrlimit=12&prop=imageinfo&iiprop=url&iiurlwidth=1600&format=json&origin=*`;

    try {
      const response = await fetch(endpoint);
      if (!response.ok) continue;

      const data = await response.json();
      const candidates = Object.values(data.query?.pages || {})
        .filter((file) => /\.(jpe?g|png|webp|gif)$/i.test(file.title) && file.imageinfo?.[0]?.url)
        .map((file) => ({ file, score: imageTitleScore(term, file.title) }))
        .filter(({ score }) => score >= 0.4)
        .sort((left, right) => right.score - left.score);

      if (candidates.length) {
        const file = candidates[0].file;
        const imageInfo = file.imageinfo[0];

        return {
          url: imageInfo.url || imageInfo.thumburl,
          page: `https://commons.wikimedia.org/wiki/${encodeURIComponent(file.title.replaceAll(" ", "_"))}`,
          title: file.title
        };
      }
    } catch {
      // Continúa con la siguiente búsqueda.
    }
  }

  return null;
}

async function findMealDBImage(recipe) {
  const endpoint = `https://www.themealdb.com/api/json/v1/1/search.php?s=${encodeURIComponent(recipe.name)}`;

  try {
    const response = await fetch(endpoint);
    if (!response.ok) return null;

    const data = await response.json();
    const meal = (data.meals || []).find((item) => imageTitleScore(recipe.name, item.strMeal) >= 0.75 && normalizeCountry(item.strArea) === normalizeCountry(recipe.country));

    if (!meal?.strMealThumb) return null;

    return {
      url: meal.strMealThumb,
      page: meal.strSource || `https://www.themealdb.com/meal/${meal.idMeal}`,
      title: meal.strMeal
    };
  } catch {
    return null;
  }
}
function normalizeCountry(country){return country.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLocaleLowerCase("es").replace(/[^a-z]/g,"")}
function loadCommonsImages(recipes){recipes.forEach((recipe)=>{if(recipe.userCreated&&recipe.image!==defaultImage)return;if(imageCache[recipe.id]){const image=grid.querySelector(`[data-recipe-image="${CSS.escape(recipe.id)}"]`);if(image)image.src=imageCache[recipe.id].url;return}if(pendingImageRequests.has(recipe.id))return;const request=(async()=>{const result=await findCommonsImage(recipe)||await findMealDBImage(recipe);if(!result)return;imageCache[recipe.id]=result;try{localStorage.setItem(imageCacheKey,JSON.stringify(imageCache))}catch{}const image=grid.querySelector(`[data-recipe-image="${CSS.escape(recipe.id)}"]`);if(image)image.src=result.url;const credit=grid.querySelector(`[data-image-credit="${CSS.escape(recipe.id)}"]`);if(credit){credit.href=result.page;credit.hidden=false;}})().catch(()=>{}).finally(()=>pendingImageRequests.delete(recipe.id));pendingImageRequests.set(recipe.id,request);});}
function render(){renderCountries();const recipes=getVisibleRecipes();const pageCount=Math.ceil(recipes.length/PAGE_SIZE);currentPage=Math.max(1,Math.min(currentPage,pageCount||1));const pageRecipes=recipes.slice((currentPage-1)*PAGE_SIZE,currentPage*PAGE_SIZE);grid.innerHTML=pageRecipes.map(renderCard).join("");grid.hidden=recipes.length===0;emptyState.hidden=recipes.length!==0;pagination.hidden=recipes.length===0;renderPagination(pageCount);const first=recipes.length?(currentPage-1)*PAGE_SIZE+1:0;const last=Math.min(currentPage*PAGE_SIZE,recipes.length);resultsSummary.innerHTML=recipes.length?`Mostrando <strong>${first}–${last}</strong> de <strong>${recipes.length}</strong> recetas`:"0 recetas";favoriteCount.textContent=favoriteIds.length;attachImageFallbacks();loadCommonsImages(pageRecipes)}
function showToast(message){const toast=document.querySelector("#toast");toast.textContent=message;toast.classList.add("visible");clearTimeout(toastTimer);toastTimer=setTimeout(()=>toast.classList.remove("visible"),2600)}
function setCountry(country){selectedCountry=selectedCountry===country?"":country;countryFilter.value=selectedCountry;currentPage=1;render();document.querySelector("#recetario").scrollIntoView({behavior:"smooth",block:"start"})}
function toggleFavorite(id){favoriteIds=favoriteIds.includes(id)?favoriteIds.filter((favorite)=>favorite!==id):[...favoriteIds,id];saveJSON(STORAGE_KEYS.favorites,favoriteIds);render();showToast(favoriteIds.includes(id)?"Guardada en tus favoritos.":"Quitada de tus favoritos.")}
function openRecipe(id){const recipe=allRecipes().find((item)=>item.id===id);if(!recipe)return;const ingredients=recipe.ingredients.map((item)=>`<li>${escapeHTML(item)}</li>`).join("");const steps=recipe.instructions.map((item)=>`<li>${escapeHTML(item)}</li>`).join("");const favorite=favoriteIds.includes(recipe.id);const cached=imageCache[recipe.id];const credit=cached?.page?`<a class="dialog-image-credit" href="${escapeHTML(cached.page)}" target="_blank" rel="noreferrer">Foto: ${escapeHTML(cached.source||"Wikimedia Commons")} ↗</a>`:"";dialogContent.innerHTML=`<img class="dialog-recipe-image" src="${escapeHTML(cached?.url||recipe.image||defaultImage)}" alt="${escapeHTML(recipe.name)}" data-fallback="${escapeHTML(defaultImage)}">${credit}<div class="dialog-recipe-body"><div class="dialog-recipe-heading"><div><p class="eyebrow eyebrow-dark">${escapeHTML(recipe.flag||"🍽️")} ${escapeHTML(recipe.country)} · ${escapeHTML(recipe.category)}</p><h2 id="dialog-title">${escapeHTML(recipe.name)}</h2><p class="dialog-meta">${escapeHTML(recipe.time)} · ${escapeHTML(recipe.difficulty)}</p></div><button class="favorite-button${favorite?" is-favorite":""}" type="button" data-favorite="${escapeHTML(recipe.id)}" aria-label="${favorite?"Quitar de":"Agregar a"} favoritos" aria-pressed="${favorite}">${favorite?"♥":"♡"}</button></div><div class="dialog-columns"><section><h3>Ingredientes</h3><ul class="ingredient-list">${ingredients}</ul></section><section><h3>Preparación</h3><ol class="step-list">${steps}</ol></section></div></div>`;const image=dialogContent.querySelector("img");image.addEventListener("error",()=>{if(image.dataset.fallback&&image.src!==image.dataset.fallback)image.src=image.dataset.fallback},{once:true});recipeDialog.showModal()}
function openForm(){recipeForm.reset();formDialog.showModal()}
document.querySelector("#country-list").addEventListener("click",(event)=>{const button=event.target.closest("[data-country]");if(button)setCountry(button.dataset.country)});
grid.addEventListener("click",(event)=>{const favorite=event.target.closest("[data-favorite]");if(favorite){toggleFavorite(favorite.dataset.favorite);return}const details=event.target.closest("[data-recipe]");if(details)openRecipe(details.dataset.recipe)});
dialogContent.addEventListener("click",(event)=>{const favorite=event.target.closest("[data-favorite]");if(favorite){const id=favorite.dataset.favorite;toggleFavorite(id);openRecipe(id)}});
searchInput.addEventListener("input",()=>{currentPage=1;render()});
countryFilter.addEventListener("change",()=>{selectedCountry=countryFilter.value;currentPage=1;render()});
favoritesToggle.addEventListener("click",()=>{favoritesOnly=true;favoritesFilter.setAttribute("aria-pressed","true");currentPage=1;render();document.querySelector("#recetario").scrollIntoView({behavior:"smooth"})});
favoritesFilter.addEventListener("click",()=>{favoritesOnly=!favoritesOnly;favoritesFilter.setAttribute("aria-pressed",String(favoritesOnly));currentPage=1;render()});
pagination.addEventListener("click",(event)=>{const button=event.target.closest("[data-page]");if(!button)return;currentPage=Number(button.dataset.page);render();document.querySelector("#recetario").scrollIntoView({behavior:"smooth",block:"start"})});
function clearFilters(){searchInput.value="";selectedCountry="";favoritesOnly=false;favoritesFilter.setAttribute("aria-pressed","false");currentPage=1;render()}
document.querySelector("#clear-filters").addEventListener("click",clearFilters);
document.querySelector("#empty-clear").addEventListener("click",clearFilters);
document.querySelector("#open-recipe-form").addEventListener("click",openForm);
document.querySelector("#open-recipe-form-bottom").addEventListener("click",openForm);
document.querySelectorAll(".dialog-close").forEach((button)=>button.addEventListener("click",()=>button.closest("dialog").close()));
document.querySelectorAll("dialog").forEach((dialog)=>dialog.addEventListener("click",(event)=>{if(event.target===dialog)dialog.close()}));
recipeForm.addEventListener("submit",(event)=>{event.preventDefault();if(!recipeForm.reportValidity())return;const values=new FormData(recipeForm);const country=String(values.get("country")).trim();const knownCountry=countries.find((item)=>item.country.toLocaleLowerCase("es")===country.toLocaleLowerCase("es"));const name=String(values.get("name")).trim();const recipe={id:`custom-${Date.now()}`,name,country,flag:knownCountry?.flag||"🌎",category:String(values.get("category")),time:String(values.get("time")).trim(),difficulty:String(values.get("difficulty")),ingredients:String(values.get("ingredients")).split("\n").map((item)=>item.trim()).filter(Boolean),instructions:String(values.get("instructions")).split("\n").map((item)=>item.trim()).filter(Boolean),image:String(values.get("image")).trim()||defaultImage,description:`${name}, una receta compartida desde ${country}.`,userCreated:true};customRecipes=[recipe,...customRecipes];saveJSON(STORAGE_KEYS.custom,customRecipes);selectedCountry="";favoritesOnly=false;favoritesFilter.setAttribute("aria-pressed","false");searchInput.value="";currentPage=1;render();formDialog.close();showToast("Tu receta ya está en el recetario.");document.querySelector("#recetario").scrollIntoView({behavior:"smooth"})});
document.querySelector("#menu-toggle").addEventListener("click",(event)=>{const nav=document.querySelector(".main-nav");const isOpen=nav.classList.toggle("open");event.currentTarget.setAttribute("aria-expanded",String(isOpen))});
document.querySelectorAll(".main-nav a").forEach((link)=>link.addEventListener("click",()=>{document.querySelector(".main-nav").classList.remove("open");document.querySelector("#menu-toggle").setAttribute("aria-expanded","false")}));
document.addEventListener("keydown",(event)=>{if((event.metaKey||event.ctrlKey)&&event.key.toLowerCase()==="k"){event.preventDefault();searchInput.focus()}});
render();