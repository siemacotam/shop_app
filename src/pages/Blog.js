import React from 'react';
import '../styles/Blog.css'


const data = [
    {
        title: "artykuł 1",
        author: 'Jan',
        img: '../images/car1.jpg',
        text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit alias veritatis eius. Molestias ullam corrupti suscipit illum, recusandae at. Illo quia vero esse ipsum fugiat temporibus quos deleniti facere nesciunt! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate quibusdam illo, voluptate hic eligendi odit ab reiciendis tempore, cumque doloremque, magnam excepturi ut laudantium placeat officiis quod veritatis impedit nisi? '
    },
    {
        title: "artykuł 2",
        author: 'Jan',
        img: '../images/car2.jpg',
        text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit alias veritatis eius. Molestias ullam corrupti suscipit illum, recusandae at. Illo quia vero esse ipsum fugiat temporibus quos deleniti facere nesciunt!'
    },
    {
        title: "artykuł 3",
        author: 'Jan',
        img: '../images/car3.jpg',
        text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit alias veritatis eius. Molestias ullam corrupti suscipit illum, recusandae at. Illo quia vero esse ipsum fugiat temporibus quos deleniti facere nesciunt!'
    },
    {
        title: "artykuł 4",
        author: 'Jan',
        img: '../images/phone1.jpg',
        text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit alias veritatis eius. Molestias ullam corrupti suscipit illum, recusandae at. Illo quia vero esse ipsum fugiat temporibus quos deleniti facere nesciunt!'
    },
    {
        title: "artykuł 5",
        author: 'Jan',
        img: '../images/phone2.jpg',
        text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit alias veritatis eius. Molestias ullam corrupti suscipit illum, recusandae at. Illo quia vero esse ipsum fugiat temporibus quos deleniti facere nesciunt!'
    },
    {
        title: "artykuł 6",
        author: 'Jan',
        img: '../images/phone3.jpg',
        text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit alias veritatis eius. Molestias ullam corrupti suscipit illum, recusandae at. Illo quia vero esse ipsum fugiat temporibus quos deleniti facere nesciunt!'
    },
    {
        title: "artykuł 7",
        author: 'Jan',
        img: '../images/car1.jpg',
        text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit alias veritatis eius. Molestias ullam corrupti suscipit illum, recusandae at. Illo quia vero esse ipsum fugiat temporibus quos deleniti facere nesciunt!'
    },
    {
        title: "artykuł 8",
        author: 'Jan',
        img: '../images/car1.jpg',
        text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit alias veritatis eius. Molestias ullam corrupti suscipit illum, recusandae at. Illo quia vero esse ipsum fugiat temporibus quos deleniti facere nesciunt!'
    },

]
const Blog = () => {

    const articles = data.map(article => 
        <div key={article.title} className='article'>
            <h2 className='article__title'>{article.title}</h2>
                <div className="clearfix article__wrap">
                    <img className='article__img' src={article.img} alt="photos"/>
                    <p className='article__text'>{article.text}</p>
                    <h5 className='article__author'>Autor artykułu : {article.author}</h5>
                </div>
        </div>
        )

    return ( 
        <div className='articles'>
            {articles}
        </div>
     );
}
 
export default Blog;