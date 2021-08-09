import { gql } from '@apollo/cient';

export const GET_ME = gql`
{
    me {
        _id
        username
        email
        bookCount
        savedBooks{
            bookId
            authors
            description
            title
            image
            link
        }
    }
}
`;