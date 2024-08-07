const SearchBar=({handleSearch, handleGetProjects})=>{
    return <form onChange={handleSearch} >
        <input  />
        <button onClick={handleGetProjects}>Busque</button>
    </form>
}

export default SearchBar