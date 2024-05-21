import { getImageUrl } from './utils.js';

function Avatar({ person, size }){
    
    return(
        <img 
        classname="avatar"
        src={getImageUrl(person)} 
        alt={person.name}
        width={size}
        height={size}
        />
    );
}

export default function Profile(){
    return(
        <div>
            <Avatar 
                size={100}
                person={{
                    name: 'Katsuko Saruhashi',
                    imageId: 'Yfe0qp2'
                }}
            />
            <Avatar 
                size={50}
                person={{
                    name: 'Lin Lanying',
                    imageId: '1bX5QH6'
                }}
            />
        </div>
    );
}