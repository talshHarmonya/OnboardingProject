import { useCallback, useMemo, useState } from "react";
import VirtualScroll from "react-dynamic-virtual-scroll";
import { productsListState } from "../../../store/products";
import { useRecoilValue } from "recoil";
import { Product } from "../../../models/product";
import "./productsList.scss"
import { ProductListItem } from "./productListItem";

type Props = {
    searchString: string;
};

export function ProductsList(props: Props) {

    const products: Product[] = useRecoilValue(productsListState);
    const [selectedId, setSelectedId] = useState(0);

    const handleProductSelection = useCallback((id: number) => {
        selectedId === id ? setSelectedId(0) : setSelectedId(id)
    }, [selectedId])

    const filteredProducts = useMemo(() => {
        return products.filter(product => product.name.toLowerCase().includes(props.searchString.toLowerCase()));
    }, [props.searchString, products]);

    const renderItem = useCallback((rowIndex: number) => {
        if (filteredProducts && filteredProducts[rowIndex]) {
            let className = selectedId === filteredProducts[rowIndex].id ? "selected" : "list-item"

            return (
                <div className={className} onClick={() => {handleProductSelection(filteredProducts[rowIndex].id)}}>
                    <ProductListItem product={filteredProducts[rowIndex]}></ProductListItem>
                </div>
            );
        }
      }, [filteredProducts, handleProductSelection, selectedId]);

    return (
        <div className="products">
        <VirtualScroll
            className="list"
            minItemHeight={20}
            totalLength={filteredProducts?.length}
            renderItem={renderItem}
        />
        </div>
    )
}