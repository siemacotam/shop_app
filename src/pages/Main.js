import React from 'react';
import '../styles/Main.css'


const data = [
    {
        title: "artykuł 1",
        author: 'Jan',
        text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit alias veritatis eius. Molestias ullam corrupti suscipit illum, recusandae at. Illo quia vero esse ipsum fugiat temporibus quos deleniti facere nesciunt! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate quibusdam illo, voluptate hic eligendi odit ab reiciendis tempore, cumque doloremque, magnam excepturi ut laudantium placeat officiis quod veritatis impedit nisi? '
    },
    {
        title: "artykuł 2",
        author: 'Jan',
        text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit alias veritatis eius. Molestias ullam corrupti suscipit illum, recusandae at. Illo quia vero esse ipsum fugiat temporibus quos deleniti facere nesciunt!'
    },
    {
        title: "artykuł 3",
        author: 'Jan',
        text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit alias veritatis eius. Molestias ullam corrupti suscipit illum, recusandae at. Illo quia vero esse ipsum fugiat temporibus quos deleniti facere nesciunt!'
    },
    {
        title: "artykuł 4",
        author: 'Jan',
        text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit alias veritatis eius. Molestias ullam corrupti suscipit illum, recusandae at. Illo quia vero esse ipsum fugiat temporibus quos deleniti facere nesciunt!'
    },
    {
        title: "artykuł 5",
        author: 'Jan',
        text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit alias veritatis eius. Molestias ullam corrupti suscipit illum, recusandae at. Illo quia vero esse ipsum fugiat temporibus quos deleniti facere nesciunt!'
    },
    {
        title: "artykuł 6",
        author: 'Jan',
        text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit alias veritatis eius. Molestias ullam corrupti suscipit illum, recusandae at. Illo quia vero esse ipsum fugiat temporibus quos deleniti facere nesciunt!'
    },
    {
        title: "artykuł 7",
        author: 'Jan',
        text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit alias veritatis eius. Molestias ullam corrupti suscipit illum, recusandae at. Illo quia vero esse ipsum fugiat temporibus quos deleniti facere nesciunt!'
    },
    {
        title: "artykuł 8",
        author: 'Jan',
        text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit alias veritatis eius. Molestias ullam corrupti suscipit illum, recusandae at. Illo quia vero esse ipsum fugiat temporibus quos deleniti facere nesciunt!'
    },

]
const Main = () => {

    const articles = data.map(article => 
        <div key={article.title} className='article'>
            <h2>{article.title}</h2>
            <h5>{article.author}</h5>
            <p>{article.text}</p>
        </div>
        )

    return ( 
        <div className='articles'>
            {articles}
        </div>
     );
}
 
export default Main;