import React from 'react';
import { Link } from 'react-router-dom';
import Gallery from './Gallery.js';
import TodoList from './TodoList.js';
import Avatar from './Avatar.js';
import Item from './Item.js';
import List from './List.js';
import Recipe from './Recipe.js';
import Cup from './Cup.js';


export default function Atv3() {
  return (
    <>
    <h1>Atv 3</h1>
    <Gallery />
    <TodoList />
    <Card>
    <Avatar 
        size={100}
        person={{
            name: 'Katsuko Sarumashi',
            imageId: 'yfe0qp2'
        }}
    />
    </Card>
    <Item />
    <List />
    <Recipe />
    <Cup />
    <Link to="/">Voltar</Link>
    </>
  );
}

function Card({ children }){
    return(
      <div className="card">
        {children}
      </div>
    );
  }