import Header from "./Containers/Header/Header";
import FlexBox from "./Containers/FlexBox/FlexBox";
import { getBookBySearchTerm } from "../services/book-services/book-services";
import { useState } from "react";
import Heading from "./components/Heading/Heading";
import SearchBar from "./components/SearchBar/SearchBar";
import BookLoader from "./Containers/BookLoader/BookLoader";
console.log(getBookBySearchTerm("test"));
console.log(typeof getBookBySearchTerm("test"));
function App() {
  const [searchTerm, setSearchTerm] = useState(null);
  const onSearch = (searchTerm) => {
    setSearchTerm(searchTerm);
  };
  return (
    <main>
      <Header>
        <Heading />
        <SearchBar
          placeholder="Search here..."
          buttonText="Search"
          onSearch={onSearch}
        />
      </Header>
      <FlexBox>
        <BookLoader searchTerm={searchTerm} />
      </FlexBox>
    </main>
  );
}

export default App;
