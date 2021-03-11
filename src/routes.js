import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import BubbleChart from "@material-ui/icons/BubbleChart";
// core components/views for Admin layout
import DashboardPage from "views/Dashboard/Dashboard.js";
import UserProfile from "views/UserProfile/UserProfile.js";
import TableList from "views/TableList/TableList.js";
import KaryawanList from "views/TableList/KaryawanList";
import RolesList from "views/TableList/RolesList";
// core components/views for RTL layout

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashbor",
    icon: Dashboard,
    component: DashboardPage,
    layout: "/admin"
  },
  {
    path: "/Management",
    name: "Manajemen",
    icon: Person,
    component: UserProfile,
    layout: "/admin"
  },
  {
    path: "/list",
    name: "Karyawan",
    icon: "content_paste",
    component: KaryawanList,
    layout: "/admin"
  },
  {
    path: "/departmen",
    name: "Departemen",
    icon: LibraryBooks,
    component: TableList,
    layout: "/admin"
  },
  {
    path: "/roles",
    name: "Jabatan",
    icon: BubbleChart,
    component: RolesList,
    layout: "/admin"
  },
];

export default dashboardRoutes;
