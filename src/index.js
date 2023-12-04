import logo from './assests/images/logo.jpg';


;
import './style.css';
import {menu_contents} from './menu.js';
import { about_us_contents } from './about_us.js';
import { contact_us_contents } from './contact_us.js';

 function create_div(class_Name,message='',want_to_link){
const div=document.createElement('div');
if(message!=''){
    div.textContent=message;
}
if(want_to_link==true){
    link_to_content(div);
}
div.classList.add(class_Name)
return div;



}
 function link_to_another_div(parent_class_name,children_div,same_class_name_div=''){
    const parent=document.querySelector('.'+parent_class_name);
   
    if(same_class_name_div==''){
        
    
    
    parent.appendChild(children_div);
    }
    else{
       
        const main_div=document.querySelector('.'+same_class_name_div+'>'+'.'+parent_class_name);
        
        main_div.appendChild(children_div);
        
        
        



    }
}
 function link_to_content(div){
    const content=document.querySelector('#content');
    content.appendChild(div);
}
 function append_image(import_name,image_container){
    const image_div=document.querySelector('.'+image_container);
    const image_name=new Image();
    image_name.src=import_name;
    image_div.appendChild(image_name);

}
function home_page(){
    create_div('heading','Kalanki Food House',true);
    create_div('logo_container','',true)
    append_image(logo,'logo_container');
    top_page_contents();
    create_div('text','It\'s finger licking good!',true);

}
home_page();






function top_page_contents(){
    
create_div('options_container','',true);
 
link_to_another_div('options_container',create_div('left_side_container','',false));
link_to_another_div('options_container',create_div('right_side_container','',false));
link_to_another_div('left_side_container',create_div('home','Home',false));
link_to_another_div('left_side_container',create_div('about_us','About Us',false));
link_to_another_div('right_side_container',create_div('menu','Menu',false));
link_to_another_div('right_side_container',create_div('contact_us','Contact Us',false));
}





function behaviour_of_node(select_class,add_contents,add_top_page){
    
    const content=document.querySelector('#content');
    content.addEventListener('mouseover',()=>{

    
    const node=document.querySelector('.'+select_class);
    
    
    node.addEventListener('click',()=>{
        let child=content.lastElementChild;
    while(child){
        
        content.removeChild(child);
        child=content.lastElementChild;
    }
    
    
    if(add_top_page==true){
    top_page_contents();
    }
    add_contents();
})
    
    

    })
    
}
behaviour_of_node('menu',menu_contents,true);
behaviour_of_node('home',home_page,false);
behaviour_of_node('about_us',about_us_contents,true);
behaviour_of_node('contact_us',contact_us_contents,true);
export{create_div,link_to_another_div,link_to_content,append_image};























