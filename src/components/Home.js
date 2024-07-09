import Products from './Products';
function Home(props) {
    return  <Products productData={props?.productData}/>
}
export default Home;