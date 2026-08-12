import { CustomHeader } from "./shared/components/CustomHeader";
import { PreviousSearches } from "./gifs/components/PreviousSearches";
import { SearchBar } from "./shared/components/SearchBar";
import { GifsList } from "./gifs/components/GifsList";
import { useGifs } from "./gifs/hooks/useGifs";

export const GifsApp = () => {

    const { handleSearch, previousTerms, handleTermClicked, gifs } = useGifs();

    return (
        <>
            {/* Header */}
            <CustomHeader title="Buscador de Gifs"
                description="Descubre y comparte el Gif" />

            {/* Search */}
            <SearchBar placeholder="Busca lo que quieras"
                onQuery={handleSearch} />

            {/* Busquedas previas  */}
            {/** PreviousSearches */}
            <PreviousSearches searches={previousTerms} onLabelClicked={handleTermClicked} />

            {/* gifs */}
            {/* GifList */}
            <GifsList gifs={gifs} />
        </>
    )
}