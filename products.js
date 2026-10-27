// Configuração pública do protótipo. Confirme os dados antes da versão oficial.
const SITE = { phone: '5519974079801', phoneLabel: '(19) 97407-9801' };
const categories = [
 {name:'Carnes bovinas', photo:1}, {name:'Carnes suínas', photo:2},
 {name:'Aves', photo:3}, {name:'Peixes', photo:4}, {name:'Kits de churrasco', photo:5},
 {name:'Bebidas', photo:6}, {name:'Acompanhamentos', photo:7}, {name:'Acessórios', photo:8}
];
const products = [];
function add(category, names, photo, description) {
 names.forEach(name => products.push({name, category, photo, description,
  note:'Imagem ilustrativa. Seleção demonstrativa; cortes, composição e disponibilidade devem ser confirmados com a equipe.'}));
}
add('Carnes bovinas',['Picanha Linha Seleção','Chorizo Linha Seleção','Steak de Chorizo Linha Reserva','Ancho','Fraldinha','Costela bovina','Tomahawk','Contrafilé','Maminha'],1,'Cortes para diferentes momentos na churrasqueira. Nesta demonstração, apresentamos uma seleção para inspirar seu próximo encontro à mesa.');
add('Carnes suínas',['Panceta','Costelinha suína'],2,'Uma seleção de suínos para preparos lentos, grelha ou forno. Combine com seus temperos e acompanhamentos favoritos.');
add('Carnes suínas',['Linguiça toscana','Linguiça de pernil'],10,'Uma entrada clássica para compartilhar enquanto a brasa chega ao ponto. Apresentação e composição sujeitas à confirmação.');
add('Aves',['Tulipinha temperada','Coxa e sobrecoxa desossada','Filé de frango'],3,'Opções versáteis de aves para reunir família e amigos. Temperos, cortes e apresentações ilustram possibilidades do catálogo.');
add('Peixes',['Filé de tilápia','Salmão'],4,'Uma alternativa leve para a grelha, com preparo delicado e acompanhamentos frescos. Imagem representativa da categoria.');
[
 ['Kit Mestre do Churrasco','kit-pais.jpg'],['Kit Preferido do Paizão','kit-preferido.jpg'],
 ['Kit Hambúrguer Rancho Toro','kit-hamburguer.jpg'],['Kit corporativo personalizado','kit-corporativo.jpg']
].forEach(([name,image])=>products.push({name,category:'Kits de churrasco',image,description:'Referência de kit apresentada nos materiais fornecidos do Rancho Toro. Uma proposta para presentear e compartilhar bons momentos.',note:'Foto original fornecida. Campanha de referência; composição, personalização e disponibilidade a confirmar.'}));
['Session IPA','Pilsen'].forEach(style=>products.push({name:'Cerveja Rancho Toro '+style,category:'Bebidas',image:'cervejas.jpg',description:'Referência da colaboração Rancho Toro × Everbrew apresentada no material original. Uma sugestão para acompanhar bons encontros.',note:'Foto original da linha. Rótulo e disponibilidade a confirmar. Venda e consumo de álcool somente para maiores de 18 anos.'}));
add('Bebidas',['Outras cervejas'],6,'Uma seleção ilustrativa para harmonizar com o churrasco. Consulte a equipe para conhecer as opções. Consumo somente para maiores de 18 anos.');
add('Bebidas',['Vinhos'],11,'Sugestão de harmonização para transformar a refeição em um momento especial. Consumo somente para maiores de 18 anos.');
add('Acompanhamentos',['Farofa original','Pão de alho','Molhos para churrasco','Temperos especiais','Queijos'],7,'Complementos para a mesa e a churrasqueira. A fotografia representa a categoria; receitas, marcas e apresentações são demonstrativas.');
add('Acessórios',['Facas para churrasco','Garfos de churrasco','Tábuas','Kits de utensílios'],8,'Utensílios para quem aprecia o ritual do churrasco. Fotografia ilustrativa da categoria; materiais e modelos a confirmar.');

// Fotografias individuais dos produtos genéricos; kits preservam as fotos originais.
const individual = {
 'Picanha Linha Seleção':['food',0], 'Chorizo Linha Seleção':['food',5],
 'Steak de Chorizo Linha Reserva':['food',5], 'Ancho':['food',1], 'Fraldinha':['food',2],
 'Costela bovina':['food',3], 'Tomahawk':['food',4], 'Contrafilé':['food',5], 'Maminha':['food',6],
 'Panceta':['food',7], 'Costelinha suína':['food',8],
 'Coxa e sobrecoxa desossada':['food',9], 'Filé de frango':['food',10],
 'Salmão':['food',11], 'Filé de tilápia':['food',12],
 'Farofa original':['food',13], 'Pão de alho':['food',14], 'Molhos para churrasco':['food',15],
 'Temperos especiais':['tools',0], 'Queijos':['tools',1], 'Facas para churrasco':['tools',2],
 'Garfos de churrasco':['tools',3], 'Tábuas':['tools',4], 'Kits de utensílios':['tools',5]
};
products.forEach(p=>{if(individual[p.name]){[p.sheet,p.photo]=individual[p.name];}});
