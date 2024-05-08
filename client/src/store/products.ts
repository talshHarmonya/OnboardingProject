import { selector } from 'recoil';

export const productsListState = selector({
    key: "productsList",
    get: async () => {
        const res = await fetch("http://localhost:3001/product", {
            method: "GET",
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
            },
        }).catch((e) => {
            console.log("Error while fetching: " + e)
            return null
        })

        if (res) {
            return await res.json()
        }
      },
});
