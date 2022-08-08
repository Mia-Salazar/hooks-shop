import { useState, useEffect } from 'react';

const useCharactersList = url => {
    const [list, setList] = useState([]);
    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(data => setList(data.results))
    }, [url]);
    return list
}

export default useCharactersList;