import { useEffect, useState } from "react";
import Nav from "./components/Nav";
import Popular from "./components/Popular";
function App() {
    const [data, setdata] = useState([]);
    const [inputs, setinputs] = useState("");
    async function getApis() {
        let response = await fetch(
            `https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=${
                inputs || ""
            }&api-key=PP7cQJJSJcUCbwrhxJ0sEGV0Ga4tdNVj`
        ).then((res) => res.json());
        setdata(response.results);
    }

    useEffect(() => {
        getApis();
    }, [inputs]);
    console.log(data);
    console.log(inputs);
    return (
        <div>
            <Nav input={setinputs} display={inputs} />
            <Popular data={data} />
        </div>
    );
}

export default App;
