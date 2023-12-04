import {create_div,link_to_another_div,link_to_content,append_image} from './index.js';
import burger from './assests/images/burger.jpg';
import pasta from './assests/images/cheese_pasta.jpg';
import chicken from './assests/images/chicken_wing.jpg';
import dumpling from './assests/images/dumpling.jpg';
import sausage from './assests/images/sausages.jpg';
import cake from './assests/images/velvet-cake.jpg';

 export function menu_contents(){

    create_div('popular_foods','Our Speciality',true);
create_div('menu_container','',true);
link_to_another_div('menu_container',create_div('burger_menu','',false));


link_to_another_div('burger_menu',create_div('burger_image_container','',false));
append_image(burger,'burger_image_container');
link_to_another_div('burger_menu',create_div('text_menu','',false));
link_to_another_div('text_menu',create_div('foodd_name','Burger',false));
link_to_another_div('text_menu',create_div('price','$5.99',false));

link_to_another_div('menu_container',create_div('pasta_menu','',false));

link_to_another_div('pasta_menu',create_div('pasta_img_container','',false));
append_image(pasta,'pasta_img_container');
link_to_another_div('pasta_menu',create_div('text_menu','',false));
link_to_another_div('text_menu',create_div('food_name','Cheese Pasta',false),'pasta_menu');
link_to_another_div('text_menu',create_div('price','$9.99',false),'pasta_menu');


link_to_another_div('menu_container',create_div('chicken_menu','',false));
link_to_another_div('chicken_menu',create_div('chicken_image_container','',false));
append_image(chicken,'chicken_image_container');
link_to_another_div('chicken_menu',create_div('text_menu','',false));
link_to_another_div('text_menu',create_div('food_name','Chicken Wing',false),'chicken_menu');
link_to_another_div('text_menu',create_div('price','$9.99',false),'chicken_menu');


link_to_another_div('menu_container',create_div('dumpling_menu','',false));
link_to_another_div('dumpling_menu',create_div('dumpling_image_container','',false));
append_image(dumpling,'dumpling_image_container');
link_to_another_div('dumpling_menu',create_div('text_menu','',false));
link_to_another_div('text_menu',create_div('food_name','Dumpling',false),'dumpling_menu');
link_to_another_div('text_menu',create_div('price','$9.99',false),'dumpling_menu');




link_to_another_div('menu_container',create_div('sausage_menu','',false));
link_to_another_div('sausage_menu',create_div('sausage_image_container','',false));
append_image(sausage,'sausage_image_container');
link_to_another_div('sausage_menu',create_div('text_menu','',false));
link_to_another_div('text_menu',create_div('food_name','Sausages',false),'sausage_menu');
link_to_another_div('text_menu',create_div('price','$7.99',false),'sausage_menu');


link_to_another_div('menu_container',create_div('cake_menu','',false));
link_to_another_div('cake_menu',create_div('cake_image_container','',false));
append_image(cake,'cake_image_container');
link_to_another_div('cake_menu',create_div('text_menu','',false));
link_to_another_div('text_menu',create_div('food_name','Velvet Cake',false),'cake_menu');
link_to_another_div('text_menu',create_div('price','$4.99',false),'cake_menu');





}


