import ProductList from "@/components/shared/product/product-list";
import sampleData from "@/db/sample-data";

export const metadata = {
  title: "Home",
};

const HomePage = () => {
  console.log(sampleData);
  return (
    <>
      <ProductList data={sampleData.products} title="best" />
    </>
  );
};

export default HomePage;
