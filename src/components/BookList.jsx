import React, { useContext } from 'react'
import { BookContext } from '../contexts/BookContext';
import { ThemeContext } from '../contexts/ThemeContext';

const BookList = () => {
    const {books} = useContext(BookContext);
    const {isLightTheme, light, dark} = useContext(ThemeContext);
    const theme = isLightTheme ? light : dark;
    return (
        <div className="book-list" style={
            {color: theme.syntax, background: theme.bg}
        }>
            <ul>
                {
                    books.map(book => 
                        <li key={book.id} style={{background: theme.ui}}>{book.title}</li>)
                }
            </ul>
        </div>
    )
}
 
export default BookList;