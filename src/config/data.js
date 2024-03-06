import DealerDashboard from "@/components/dealer-dashboard/dashboard/dashboard-pages/DealerDashboard";
import ProductList from "@/components/dealer-dashboard/dashboard/dashboard-pages/products/ProductList";
import Reviews from "@/components/dealer-dashboard/dashboard/dashboard-pages/reviews/Reviews";
import Setting from "@/components/dealer-dashboard/dashboard/dashboard-pages/setting/Setting";
import Orders from "@/components/dealer-dashboard/dashboard/dashboard-pages/total-orders/Orders";

export const sideMenus = [
    {
      id: 1,
      label: "Dashboard",
      component: <DealerDashboard />,
    //   icon: HomeIcon,
    },
    {
      id: 2,
      label: "All Products",
      component: <ProductList />,
    //   icon: Users,
    },
    {
      id: 3,
      label: "Total Sale",
      component: <Orders />,
    //   icon: Users,
    },
    {
      id: 4,
      label: "Commission",
      component: <Reviews />,
    //   icon: Users,
    },
    {
      id: 5,
      label: "Settings",
      component: <Setting />,
    //   icon: webIcon,
    },
    {
      id: 6,
      label: "Wallet",
    //   component:<Vendor/> ,
    //   icon: Users,
    }
  ];
