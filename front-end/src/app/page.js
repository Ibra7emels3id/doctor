import MainHeader from "./components/MainHeader";
import Category from "./components/Category";
import Products from "./components/Products";
import Book from "./components/Book";

export default function Home() {
    return (
        <>
            <MainHeader />
            <Category />
            <Products />
            <Book />
        </>
    );
}
