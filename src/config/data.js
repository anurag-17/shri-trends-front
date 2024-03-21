import DealerDashboard from "@/components/dealer-dashboard/dashboard/dashboard-pages/DealerDashboard";
import ProductList from "@/components/dealer-dashboard/dashboard/dashboard-pages/products/ProductList";
import Reviews from "@/components/dealer-dashboard/dashboard/dashboard-pages/reviews/Reviews";
import Setting from "@/components/dealer-dashboard/dashboard/dashboard-pages/setting/Setting";
import Orders from "@/components/dealer-dashboard/dashboard/dashboard-pages/total-orders/Orders";
import HomeIcon from "../../public/admin/home.svg";
import page from "../../public/admin/page.svg";
import webIcon from "../../public/admin/setting.svg";
import wallet from "../../public/admin/wallet.svg";
import Wallet from "@/components/dealer-dashboard/dashboard/dashboard-pages/wallet/Wallet.";
import ProductAdded from "@/components/dealer-dashboard/dashboard/dashboard-pages/productAdded/ProductAdded";
import Wishlist from "@/components/dealer-dashboard/dashboard/dashboard-pages/wishlist/wishlist";

export const sideMenus = [
    {
      id: 1,
      label: "Dashboard",
      component: <DealerDashboard />,
      // icon: HomeIcon,
    },
    {
      id: 2,
      label: "All Products",
      component: <ProductList />,
      icon: HomeIcon,
    },
    {
      id: 3,
      label: "Product added",
      component:<ProductAdded/>,
      icon: page,
    },
    {
      id: 4,
      label: "Wishlist",
      component:<Wishlist/>,
      icon: page,
    },
    {
      id: 5,
      label: "Total Sale",
      component: <Orders />,
      icon: page,
    },
    {
      id: 6,
      label: "Commission",
      component: <Reviews />,
      icon: page,
    },
    {
      id: 7,
      label: "Settings",
      component: <Setting />,
      icon: webIcon,
    },
    {
      id: 8,
      label: "Wallet",
      component:<Wallet/> ,
      icon:wallet
    }
  ];
