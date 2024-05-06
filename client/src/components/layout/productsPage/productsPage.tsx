import { useState, Suspense } from "react";
import { useNavigate, useLocation } from 'react-router-dom';
import { ProductsList } from "./productsList";
import "./productsPage.scss"

export function ProductsPage() {
    const [inputText, setInputText] = useState("");
    const navigate = useNavigate();

    const location = useLocation();
    const serachParamValue = new URLSearchParams(location.search).get('search');
    const initialString: string = serachParamValue ? serachParamValue : "";
    const [initialSearchString, setInitialSearchString] = useState(initialString)

    const handleInputChange = (event: any) => {
        const input = event.target.value.toLowerCase()
        const navUrl = input !== "" ? `?search=${encodeURIComponent(input)}` : "";
        setInputText(input)
        navigate(navUrl);

        if (initialSearchString !== "") {
            setInitialSearchString("")
        }
    };

    return (
        <div className="products">
            <div>
                <input defaultValue={initialSearchString} onChange={handleInputChange}/>
            </div>
            <Suspense fallback={<Loading />}>
                <ProductsList searchString={initialSearchString !== "" && inputText === "" ? initialSearchString : inputText}></ProductsList>
            </Suspense>
        </div>
    )
}

function Loading() {
    return <h2>🌀 Loading...</h2>;
  }