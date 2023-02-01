import { publications } from "../../../../data/publication.data"


export const create = (data) => {
    const { title, description, content, author} = data;
    const id = publications.length + 1;

    const newPublication = {
        id,
        title,
        description,
        content,
        author,
        createdIn: new Date()
    };

    publications.push(newPublication);
    
    return newPublication;
};

export const readAll = () => {
    return publications;
};

export const readById = (id) => {
    const publication = publications.find(publication => publication.id == id);
    return publication;
};