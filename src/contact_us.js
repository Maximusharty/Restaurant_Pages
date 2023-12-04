import {create_div,link_to_another_div,link_to_content,append_image} from './index.js';
export function contact_us_contents(){
    create_div('top_level_position','',true);
    link_to_another_div('top_level_position',create_div('managing_director','Managing Director',false));
    link_to_another_div('top_level_position',create_div('number','+977 9861321102',false));

    create_div('middle_level_position','',true);
    link_to_another_div('middle_level_position',create_div('front_desk','Front-Desk',false));
    link_to_another_div('middle_level_position',create_div('number','+977 9861321500',false));

    create_div('low_level_position','',true);
    link_to_another_div('low_level_position',create_div('delivery','Delivery',false));
    link_to_another_div('low_level_position',create_div('number','+977 9843524681',false));

}