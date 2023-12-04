import {create_div,link_to_another_div,link_to_content,append_image} from './index.js';
import people1 from './assests/images/Roman.jpg';
import people2 from './assests/images/Sam.jpg'

export function about_us_contents(){
create_div('text_box','',true);
link_to_another_div('text_box',create_div('about_us_text','This restaurant was first established in 1980 and it was not a big venture. However it grew up to this big now'))
create_div('review_container','',true);


link_to_another_div('review_container',create_div('people1','',false));
link_to_another_div('people1',create_div('people1_img_container','',false));
append_image(people1,'people1_img_container');
link_to_another_div('people1',create_div('text_area','"This was one of the best restaurant I had in a while" -Sam'));

link_to_another_div('review_container',create_div('people2','',false));
link_to_another_div('people2',create_div('people2_img_container','',false));
append_image(people2,'people2_img_container');
link_to_another_div('people2',create_div('text_area','"The restaurant food was good but it can work on it\'s customer service" -Roman','',false));
}
