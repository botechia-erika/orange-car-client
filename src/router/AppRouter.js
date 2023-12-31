import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./../pages/Home/Home";
import {LoginBank} from './../pages/LabeBank/Login/Login'
import { SignIn } from "./../pages/LabeEdit/SignIn/SignIn";
import { SignUp } from "./../pages/LabeEdit/SignUp/SignUp";
import { PostDetails } from "./../pages/LabeEdit/PostDetails/PostDetails";
import { Posts } from "./../pages/LabeEdit/Posts/Posts";
import { Header } from "./../components/Header/Header";
import { LabeBooks } from './../pages/LabeBooks/LabeBooks';
import { LabeAdmin } from './../pages/LabeAdmin/LabeAdmin';

import  {Products}  from './../pages/LabeEcommerce/Products/Products';
import { ProductDetails } from "../pages/LabeEcommerce/ProductDetails/ProductDetails";
import { CashBalance } from "../components/LabeBank/CashBalance/CashBalance";



export function AppRouter() {
  return (
    <BrowserRouter>
      <Header />
      <div className="pAll">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/posts" element={<Posts/>} />
        <Route path="/labe-books" element={<LabeBooks />} />
        <Route path="/labe-frota" element={<Products/>} />
        <Route path="/labe-bank" element={<LoginBank/>}/>
        <Route path="/bank" element={<CashBalance/>}/>
        <Route path="/products/:idDetails" element={<ProductDetails />} />
        <Route path="/labe-admin" element={<LabeAdmin/>}/>
      </Routes>
      </div>
    </BrowserRouter>
  );
}
