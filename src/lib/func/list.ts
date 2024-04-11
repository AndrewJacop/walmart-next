export const addToFavorites = (product: Product) => {
    const favoritesData: Product[] = JSON.parse(
      localStorage.getItem("favorites") || "[]"
    );
  
    const existingIndex = favoritesData.findIndex(
      (item) => item.id === product.id
    );
  
    if (existingIndex === -1) {
      favoritesData.push(product);
      localStorage.setItem("favorites", JSON.stringify(favoritesData));
      console.log("Added to favorites:", product);
    } else {
      console.log("Product already in favorites:", product);
    }
  };
  
  export const removeFromFavorites = (product: Product) => {
    const favoritesData: Product[] = JSON.parse(
      localStorage.getItem("favorites") || "[]"
    );
  
    const itemIndex = favoritesData.findIndex((item) => item.id === product.id);
  
    if (itemIndex !== -1) {
      favoritesData.splice(itemIndex, 1);
      localStorage.setItem("favorites", JSON.stringify(favoritesData));
      console.log("Removed from favorites:", product);
    } else {
      console.log("Product not found in favorites:", product);
    }
  };
  
  export const removeAllFromFavorites = () => {
    localStorage.removeItem("favorites");
    console.log("All items removed from favorites");
  };
  
  export const getFavoriteProducts = () => {
    const favoritesData: Product[] = JSON.parse(
      localStorage.getItem("favorites") || "[]"
    );
    return favoritesData;
  };